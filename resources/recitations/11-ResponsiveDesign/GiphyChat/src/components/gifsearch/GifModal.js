import React from "react";
import Modal from "react-modal";
import { Button, Image } from "semantic-ui-react";

const GifModal = props => {
  if (!props.selectedGif) {
    return <div />;
  }

  // Modal Style
  const customStyles = {
    content : {
      top                   : '5%',
      left                  : '30%',
      right                 : 'auto',
      bottom                : 'auto'
      
    }
  };

  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={() => props.onRequestClose()}
      style={customStyles}
    >
      <div className="gif-modal">
        <Image size="small" src={props.selectedGif.images.original.url} alt="gif" />
        <p>
          <strong>Title:</strong> {props.selectedGif.title}
        </p>
        <p>
          <strong>Source:</strong>{" "}
          <a href={props.selectedGif.source}>{props.selectedGif.source}</a>
        </p>
        <p>
          <strong>Rating:</strong> {props.selectedGif.rating}
        </p>

        <Button color="blue" inverted onClick={() => props.onRequestClose()}>
          close
        </Button>
      </div>
    </Modal>
  );
};

export default GifModal;
