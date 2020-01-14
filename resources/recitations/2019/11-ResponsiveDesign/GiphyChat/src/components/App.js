import React from "react";
import { Grid } from "semantic-ui-react";
import "./App.css";

import NavPanel from "./navpanel/NavPanel";

import Messages from "./messages/Messages";
import Trending from "./trending/Trending";
import Search from "./gifsearch/Search";

import { connect } from "react-redux";

export const API_GIPHY = "SZ5xTwbzBNF65yvYK1cyJt3oRClkTsNH";

const App = ({
  currentUser,
  currentChannel,
  isPrivateChannel,
  primaryColor,
  secondaryColor
}) => (
  <Grid stackable columns="equal" className="app" style={{ background: secondaryColor }}>

    <NavPanel
      key={currentUser && currentUser.uid}
      currentUser={currentUser}
      primaryColor={primaryColor}
    />

    <Grid.Column stackable  width={9} className="search_and_trending">
      <Search />
      <Trending />
    </Grid.Column>

    <Grid.Column stackable width={7}  className="messages_content">
      <Messages
        key={currentChannel && currentChannel.id}
        currentChannel={currentChannel}
        currentUser={currentUser}
        isPrivateChannel={isPrivateChannel}
      />
    </Grid.Column>
  </Grid>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  currentChannel: state.channel.currentChannel,
  isPrivateChannel: state.channel.isPrivateChannel,
  userPosts: state.channel.userPosts,
  primaryColor: state.colors.primaryColor,
  secondaryColor: state.colors.secondaryColor
});

export default connect(mapStateToProps)(App);
