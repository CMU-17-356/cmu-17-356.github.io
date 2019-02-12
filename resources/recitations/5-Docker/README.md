## Tutorials + Helpful Documentation

* [Docker Curriculum](https://docker-curriculum.com/)
* [A Practical Introduction to Docker Compose](https://hackernoon.com/practical-introduction-to-docker-compose-d34e79c4c2b6)
* [Runnable Docker](https://runnable.com/docker/) ~ real examples.
* [node-react-docker-compose](https://github.com/CMU-17-356/cmu-17-356.github.io/tree/master/resources/recitations/5-Docker/node-react-docker-compose)
~ React+Express+Docker Environments

## What is Docker?

* Running applications in an isolated, sandboxed environment, executing only necessary applications
* Lightweight and faster start times
* “Run Anywhere”
* A daemon and a cli
* docker-machine
 - a tool that lets you install *docker engine* on virtual hosts
* *docker engine* leverages the features of the host OS to provide the virtual environment applications need,
hence, eliminating the need for a Guest OS (operating system)

![Docker and Volumes](https://github.com/CMU-17-356/cmu-17-356.github.io/blob/master/resources/recitations/5-Docker/images/types-of-mounts-volume.png)

### "simple" example

```dockerfile
FROM node:11.7-alpine
MAINTAINER ...

# Change working directory
WORKDIR /usr/src/app

# Install App Dependencies
COPY package*.json ./
RUN npm install

# Copy App Source
COPY . .
RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]
```

A more complex example, i.e. multi-staging:

```dockerfile
##
## compiling tcpreplay from source
##

FROM bitnami/minideb:stretch as tcpreplay

ARG RELEASE=4.3.0

RUN install_packages \
    build-essential \
    ca-certificates \
    curl \
    file \
    libpcap-dev \
    tcpdump \
  && cd /tmp \
  && curl -sSfL https://github.com/appneta/tcpreplay/releases/download/v${RELEASE}/tcpreplay-${RELEASE}.tar.xz | tar -xJv \
  && cd tcpreplay-${RELEASE} \
  # replace the occurrences of ETH_P_ALL with ETH_P_IP
  && sed -i 's|ETH_P_ALL|'"ETH_P_IP"'|g' src/common/sendpacket.c \
  && ./configure \
  && make \
  && make install

##
## development image with DPDK and Rust
##

FROM williamofockham/dpdk:17.08.1

LABEL maintainer="williamofockham <occam_engineering@comcast.com>"

ARG RUSTUP_TOOLCHAIN
ARG BACKPORTS_REPO=/etc/apt/sources.list.d/stretch-backports.list
ARG IOVISOR_REPO=/etc/apt/sources.list.d/iovisor.list

ENV PATH=$PATH:/root/.cargo/bin
ENV LD_LIBRARY_PATH=/opt/netbricks/target/native:$LD_LIBRARY_PATH
ENV CARGO_INCREMENTAL=0
ENV RUST_BACKTRACE=1

COPY --from=tcpreplay /usr/local/bin /usr/local/bin
COPY --from=tcpreplay /usr/local/share/man/man1 /usr/local/share/man/man1

RUN install_packages \
  # clang, libclang-dev and libsctp-dev are netbricks deps
  # cmake, git and libluajit-5.1-dev are moongen deps
  # libssl-dev and pkg-config are rust deps
    build-essential \
    ca-certificates \
    clang \
    cmake \
    curl \
    gdb \
    gdbserver \
    git \
    libclang-dev \
    libcurl4-gnutls-dev \
    libgnutls30 \
    libgnutls-openssl-dev \
    libsctp-dev \
    libssl-dev \
    pkg-config \
    python-pip \
    python-setuptools \
    python-wheel \
    sudo \
    tcpdump \
  # pyroute2 and toml are agent deps
  && pip install \
    pyroute2 \
    toml \
  # install luajit 2.1.0-beta3 from stretch backports
  && echo "deb http://ftp.debian.org/debian stretch-backports main" > ${BACKPORTS_REPO} \
  && apt-get update -o Dir::Etc::sourcelist=${BACKPORTS_REPO} \
  && apt-get -t stretch-backports install -y --no-install-recommends libluajit-5.1-dev \
  # install bcc tools
  && echo "deb [trusted=yes] http://repo.iovisor.org/apt/xenial xenial-nightly main" > ${IOVISOR_REPO} \
  && apt-get update -o Dir::Etc::sourcelist=${IOVISOR_REPO} \
  && apt-get -t xenial-nightly install -y --no-install-recommends bcc-tools \
  && rm -rf /var/lib/apt/lists /var/cache/apt/archives \
  # install rust nightly and tools
  && curl -sSf https://sh.rustup.rs | sh -s -- -y --default-toolchain $RUSTUP_TOOLCHAIN \
  && rustup component add \
    clippy-preview \
    rustfmt-preview \
    rust-src \
  # invoke cargo install independently otherwise partial failure has the incorrect exit code
  && cargo install cargo-watch \
  && cargo install cargo-expand \
  && cargo install hyperfine \
  && cargo install ripgrep \
  && cargo install sccache \
  && rm -rf /root/.cargo/registry

ENV RUSTC_WRAPPER=sccache

COPY entrypoint.sh /

ENTRYPOINT ["/entrypoint.sh"]

CMD ["/bin/bash"]
```


## What is Docker-Compose

### typical example

```yaml

version: "3"
services:
  web-client:
    build: https://github.com/youraccount/web-client.git
    ports:
      - "4210::5000"
    entrypoint: "npm run dev"

  web-server:
    build: https://github.com/youraccount/web-server.git
    ports:
      - "4200:5000"
    # just keep server alive
    entrypoint: "tail -f /dev/null"

  database:
    image: "postgres:alpine"
    environment:
      POSTGRES_USER: postgres
      POSTGRES_DB: mydb
    ports:
      - "4201:5432"
    volumes:
      - server_db:/var/lib/postgresql/data

volumes:
  server_db:...
```

###  blue/green example w/ networks:

```yaml
version: '3.1'

services:
  blue:
    container_name: blue
    image: app:blue
    restart: always
    environment:
      - SERVICE_80_NAME=blue
      - SERVICE_80_TAGS=backends
    networks:
      - app
      - consul

  green:
    container_name: green
    image: app:green
    environment:
      - SERVICE_80_NAME=green
      - SERVICE_80_TAGS=backends
    networks:
      - app
      - consul

  nginx:
    container_name: nginx
    build: ./nginx/
    restart: always
    environment:
      - SERVICE_NAME=nginx
      - SERVICE_TAGS=nginx
    networks:
      - app
      - consul
    ports:
      - 80:80

networks:
  app:
  consul:
    external:
      name: consul
```
