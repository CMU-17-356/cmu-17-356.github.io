import React, { Component } from "react";
import { API_GIPHY } from "../App";
import {
  Image,
  Button,
  Modal,
  Header,
  Reveal,
  Loader
} from "semantic-ui-react";
import InfiniteScroll from "react-infinite-scroll-component";

class Trending extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: { data: [] },
      hasMore: true
    };
  }

  fetchMoreData = () => {
    if (this.state.gifs.data.length >= 100) {
      this.setState({ hasMore: false });
      return;
    }
    // a fake async api call like which sends
    // 5 more records in .5 secs
    setTimeout(() => {
      this.setState({
        gifs: this.state.gifs.data.concat(Array.from({ length: 5 }))
      });
    }, 500);
  };

  // Get top 100 Trending Gifs
  componentDidMount() {
    fetch(
      `http://api.giphy.com/v1/gifs/trending?&api_key=${API_GIPHY}&limit=100`
    )
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(result => {
        this.setState({
          gifs: result
        });
      });
  }

  handleClick(item) {
    console.log("Item", item);
  }

  render() {
    const listItems = this.state.gifs.data.map(item => (
      <Modal
        key={item.id}
        trigger={
          <Button
            key={item.id}
            basic
            onClick={this.handleClick.bind(this, item)}
            target="new"
            style={{ padding: 8, marginLeft: 25, borderColor: "white" }}
          >
            <Reveal animated="fade">
              <Reveal.Content visible>
                <Image
                  size="big"
                  src={item.images.original_still.url}
                  alt="trending"
                />
              </Reveal.Content>
              <Reveal.Content hidden>
                <Image
                  size="big"
                  src={item.images.original.url}
                  alt="trending"
                />
              </Reveal.Content>
            </Reveal>
          </Button>
        }
      >
        <Modal.Header>{item.title}</Modal.Header>
        <Modal.Content>
          <Image
            size="medium"
            centered
            src={item.images.original.url}
            alt="trending"
          />
          <Modal.Description>
            <Header>GIF Details</Header>
            <p>
              {" "}
              <a href={item.url}>Visit Source</a>{" "}
            </p>
            <p>Rating: {item.rating}</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    ));

    return (
      <div className="packageTrending">
        <Header size='huge' className="top-trending">Top Trending</Header>

        <InfiniteScroll
          dataLength={this.state.gifs.data.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<Loader size="small" content={"Loading Trending..."} />}
          height={410}
          className="infinite__scroll"
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <Image.Group className="trending-image" spaced>
            {" "}
            {listItems}{" "}
          </Image.Group>
        </InfiniteScroll>
      </div>
    );
  }
}

export default Trending;
