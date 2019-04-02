import React from "react";
import { Grid, Image } from "semantic-ui-react";

const GifItem = ({ gif, onGifSelect }) => {
  return (
    <Grid columns="equal">
      <Grid.Column>
        <Image.Group size="small">
          <div className="gif-item" onClick={() => onGifSelect(gif)}>
            <img src={gif.images.downsized.url} alt="gif" />
          </div>
        </Image.Group>
      </Grid.Column>
    </Grid>
  );
};

export default GifItem;
