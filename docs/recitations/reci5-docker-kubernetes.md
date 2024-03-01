---
title: Recitation 5 - Docker + Kubernetes
---

# Recitation 5: Docker + Kubernetes

## Staff Overview
- Nicholas Wernink & Alex Barrios
- Emails: [ngw@andrew.cmu.edu](mailto:ngw@andrew.cmu.edu) & [ambarrio@andrew.cmu.edu](mailto:ambarrio@andrew.cmu.edu)
- Office Hours: Wed 2:30 - 4pm (Nicholas), Thu 12pm - 1pm (Alex)

# Virtual Machines
- Applications run inside a virtual “guest” machine
- Guest machine runs on a physical “host” machine
- Multiple guests can run on the same host machine
- Each guest has its own OS and functions independently


## Virtual Machines Pros and Cons
Pros:
- Provide great isolation for applications
- Problems in host OS rarely affect apps in guest OS and vice versa

Cons:
- Isolation comes at the expense of great computational cost
- Significant overhead virtualizing hardware for guest OS

# Containers
- Leverage low-level mechanics of host OS
- Provides most of the isolation of VMs at a fraction of the cost

Encapsulate/package an application such that…
- It is abstracted from the environment in which they run
- Decoupling allows ease of deployment irrespective of the target environment
   - Public cloud, private data center, or personal laptop
- It is lightweight in terms of loading and transporting
   - Granular control of resources to improve efficiency

# Comparison between VMs and Containers
Similarities:
- Both encapsulate your application

Differences:
- Size: containers are smaller in size as they do not contain the OS
- Portability: Containers are more portable
- OS: containers are constrained by the OS, while VMs are not
- State: Containers are stateless by default and as such are more scalable

# When To Use Containers
- Start times and startup speeds of your application is important
- Efficiency of resource utilization is a priority (consuming less RAM and CPU)
- Budget constraints are a limitation (Docker and Kubernetes are open source)
- Sharing container images is important (Docker images are easily shared)

# When To Use Virtual Machines
- Highly concerned with security and want to isolate your environment (VMs provide full isolation by default)
- Having a rollback features is a priority (VMs can easily go back to a previous snapshot)

# Docker
## Docker Overview
- Platform as a service product to automate the deployment of software applications
- Applications are deployed in containers and can run on host OS
   - Many docker containers can be run simultaneously on a single host
- Allows packaging of an application and its dependencies into a standardized unit
   - Without reliance on the host

## Docker Terminology
- Image - everything that is needed to configure a fully operational environment
- Container - a running instance of an image
- Dockerfile - definition/spec to create an image
- Container registry - system to host and distribute images
- Container repository - specific physical locations to store related images

## Docker-compose
A tool for defining and running multi-container Docker applications
- Configures your applications services
Creates and starts all the services from the configuration file with a single command
Run docker-compose up and the Docker compose command starts and runs the entire application
(Render sadly doesn’t support docker-compose → https://feedback.render.com/features/p/support-docker-compose)

## Docker Demo
- Creating an image using a Dockerfile
- Creating a container using the image
- Using docker-compose (running containers on different ports on the same machine)

git clone https://github.com/CMU-17-356/example-docker-app.git
docker-compose up
Visit localhost:7004, localhost:7005, and localhost:7006

## Kubernetes
Kubernetes is an open-source platform for automating the deployment, scaling, and operations of application containers
- Horizontal scaling → easy to scale up or down
- Self-healing → restarting failed containers
- Service discovery → expose containers via DNS name or IP address
- Automated rollouts/rollbacks → create new containers/remove existing ones
- Load balancing → distribute network traffic across various containers
- And more!
