import React from "react";
import { NavLink } from 'react-router-dom'
import { Link } from "react-router-dom";

import MatchCard from "@/layouts/MatchCard";

import FormsMyProfile from '@/forms/my/Profile'

import { DropdownButton, MenuItem, Tabs, Tab, ListGroup, Card, Button } from "react-bootstrap";

class MySideBar extends React.Component {
  state = { active: !this.props.open || true };

  render = () => {
    const { open } = this.props;
    const active = !open;

    return (
      <nav id="sidebar" className={active ? "active" : null}>
        <div class="sidebar-header d-flex align-items-center">
          <Link to="/my">
            <Button variant="warning" type="button">
              Find Matches
            </Button>
          </Link>
          <img className="h-100 mr-2" src="https://via.placeholder.com/50x50.png" alt="" style={{'border-radius': 50 + '%'}}/>
          <h3 className="mb-0">My Profile</h3>
        </div>
        <div className="d-flex flex-column mt-3 ml-3 mr-3">
          <h3 className="text-center">Account Settings</h3>
          <FormsMyProfile/>
          <Link className="align-self-center" to="/my/profile/edit">
            <Button variant="warning" type="button">
              Edit Info
            </Button>
          </Link>
        </div>
        <div className="d-flex justify-content-between m-3">
          <Link className="align-self-center" to="">
            <Button variant="warning" type="button">
              Logout
            </Button>
          </Link>
          <Link className="align-self-center" to="">
            <Button variant="warning" type="button">
              Delete Account
            </Button>
          </Link>
        </div>


        {/* <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="Matches" title="Matches">
            <div className="row ml-0 mr-0">
              <MatchCard/>
              <MatchCard/>
              <MatchCard/>
              <MatchCard/>
              <MatchCard/>
              <MatchCard/>
              <MatchCard/>
            </div>
          </Tab>
          <Tab eventKey="Messages" title="Messages">
            <ListGroup>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Tab>
          <Tab eventKey="Likes" title="Likes">
            <ListGroup>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Tab>
        </Tabs> */}
      </nav>
    );
  };
}

export default MySideBar;
