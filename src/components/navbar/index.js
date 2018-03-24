import React, {Component} from 'react';
import {Menu, Dropdown, Button} from 'semantic-ui-react';

class NavBar extends Component {
  constructor()
  {
    super();
  }

  render() {
    return (
      <Menu size='large'>
        <Menu.Item name='home' />
        <Menu.Item name='messages' />

        <Menu.Menu position='right'>
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default NavBar;