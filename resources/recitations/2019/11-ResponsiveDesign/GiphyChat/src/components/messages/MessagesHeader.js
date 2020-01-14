import React from "react";
import { Header, Segment, Input, Icon } from "semantic-ui-react";

class MessagesHeader extends React.Component {
  render() {
    const {
      channelName,
      numUniqueUsers,
      handleSearchChange,
      searchLoading,
      isPrivateChannel,
      handleStar,
      isChannelStarred
    } = this.props;

    return (
      <div className="message__header">
      <Segment clearing >
        {/* Channel Title */}
        <Header fluid="true" as="h4"  style={{ marginBottom: 0 }}>
          <span>
            {channelName}
            {!isPrivateChannel && (
              <Icon
                onClick={handleStar}
                name={isChannelStarred ? "star" : "star outline"}
                color={isChannelStarred ? "yellow" : "black"}
              />
            )}
          </span>
          <Header.Subheader>{numUniqueUsers}</Header.Subheader>
          <Header.Subheader  ><Input
            loading={searchLoading}
            onChange={handleSearchChange}
           
            action='Search'
            name="searchTerm"
            fluid
            className="messages-search-input"
            placeholder="Search Messages"
          /></Header.Subheader>
        </Header>

      
      </Segment>
      </div>
    );
  }
}

export default MessagesHeader;
