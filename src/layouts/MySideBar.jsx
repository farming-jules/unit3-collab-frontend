import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import {
  deleteMyProfile
} from '@/actions/my/profile'

import MiniCard from '@/layouts/MiniCard'

import FormsMyProfileShow from '@/forms/my/ProfileShow'

import { Button, Tabs, Tab, ListGroup } from 'react-bootstrap'

import Loading from '@/components/Loading'

class MySideBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      active: true
    }
    this.handleProfileDeleteSubmit = this.handleProfileDeleteSubmit.bind(this)
  }

  handleProfileDeleteSubmit(values) {
    this.props.deleteMyProfile(values).then(() => {
      const { history: { push } } = this.props
      push('/')
    })
  }

  renderMatch() {
    const { location: { pathname }, stateCurrentUser: { currentUser }, stateMatches: { matches, isGetMatchesLoading }, stateLikes: { likes, isGetLikesLoading } } = this.props

    if (pathname !== '/my') return null
    if (isGetMatchesLoading) return <Loading />
    if (isGetLikesLoading) return <Loading />

    return (
      <>
        <Link to="/my/profile">
          <div className="sidebar-header d-flex align-items-center">
            <img className="w-25 mr-2" src={currentUser?.UserImages?.[0]?.image || 'https://via.placeholder.com/50x50.png'} alt="" style={{ borderRadius: `${50}%` }} />
            <h3 className="mb-0">My Profile</h3>
          </div>
        </Link>
        <Tabs defaultActiveKey="Matches" id="uncontrolled-tab-example">
          <Tab eventKey="Matches" title="Matches">
            {
              matches.length !== 0 ? (
                <>
                  <div className="row ml-0 mr-0">
                    {
                      matches.map((item) => (
                        <MiniCard
                          key={item.id}
                          information={item}
                        />
                      ))
                    }
                  </div>
                </>
              ) : (
                <>
                  <div className="row ml-0 mr-0">
                    <h2>No Matches</h2>
                  </div>
                </>
              )
            }
          </Tab>
          <Tab eventKey="Likes" title="Likes">
            {
              likes.length !== 0 ? (
                <>
                  <div className="row ml-0 mr-0">
                    {
                      likes.map((item) => (
                        <MiniCard
                          key={item.id}
                          information={item}
                        />
                      ))
                    }
                  </div>
                </>
              ) : (
                <>
                  <div className="row ml-0 mr-0">
                    <h2>No Matches</h2>
                  </div>
                </>
              )
            }
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
        </Tabs>
      </>
    )
  }

  renderProfile() {
    const { location: { pathname }, stateCurrentUser: { currentUser } } = this.props

    if (pathname !== '/my/profile') return null

    return (
      <>
        <div className="sidebar-header d-flex align-items-center">
          <img className="w-25 mr-2" src={currentUser?.UserImages?.[0]?.image || 'https://via.placeholder.com/50x50.png'} alt="" style={{ borderRadius: `${50}%` }} />
          <h3 className="mb-0">My Profile</h3>
          <Link className="h-100 ml-auto" to="/my">
            <Button variant="warning" type="button">
              Find Matches
            </Button>
          </Link>
        </div>
        <div className="d-flex flex-column mt-3 ml-3 mr-3">
          <h3 className="text-center">Account Settings</h3>
          <div className="disable-select">
            <FormsMyProfileShow
              initialValues={currentUser}
            />
          </div>
        </div>
        <div className="d-flex justify-content-between m-3">
          <Link className="align-self-center" to="/my/profile/edit">
            <Button variant="primary" type="button">
              Edit Info
            </Button>
          </Link>
          <Link className="align-self-center" to="">
            <Button variant="warning" type="button" onClick={this.handleProfileDeleteSubmit}>
              Delete Account
            </Button>
          </Link>
        </div>
      </>
    )
  }

  renderSidebar() {
    const { active } = this.state

    return (
      <div id="sidebar" className={active ? 'active' : null}>
        {this.renderMatch()}
        {this.renderProfile()}
      </div>
    )
  }

  render = () => {
    const { location: { pathname } } = this.props

    if (pathname === '/my' || pathname === '/my/profile') {
      return this.renderSidebar()
    }

    return null
  };
}

MySideBar.propTypes = {
  history: PropTypes.shape().isRequired,
  location: PropTypes.shape().isRequired,
  stateCurrentUser: PropTypes.shape().isRequired,
  stateMatches: PropTypes.shape().isRequired,
  stateLikes: PropTypes.shape().isRequired,
  deleteMyProfile: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  stateCurrentUser: state.currentUser,
  stateMatches: state.matches,
  stateLikes: state.likes
})

const mapDispatchToProps = {
  deleteMyProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MySideBar))
