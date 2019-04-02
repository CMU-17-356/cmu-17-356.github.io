import React from "react";
import { Menu, Dropdown } from "semantic-ui-react";

import UserPanel from "./UserPanel";
import Channels from "./Channels";
import DirectMessages from "./DirectMessages";
import Starred from "./Starred";
import ColorPanel from "../colorpanel/ColorPanel";

class SidePanel extends React.Component {
  render() {
    const { currentUser, primaryColor } = this.props;

    return (
      <Menu
        size="large"
        inverted
        attached="top"
        stackable
        style={{ background: primaryColor, fontSize: "1.2rem" }}
      >
        <Menu.Menu position="left">
          <Dropdown simple item icon="bars">
            <Dropdown.Menu>
              <Dropdown.Divider />
              <Dropdown.Item>
                Starred
                <Starred currentUser={currentUser} />
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
                Channels
                <Channels currentUser={currentUser} />
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
                Direct Messages
                <DirectMessages currentUser={currentUser} />
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
                Change App Color
                <ColorPanel currentUser={currentUser} />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
        <Menu.Menu position="right">
          <Menu.Item>
            <UserPanel primaryColor={primaryColor} currentUser={currentUser} />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default SidePanel;
