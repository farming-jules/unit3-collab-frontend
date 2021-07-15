import React from 'react'
import PropTypes from 'prop-types'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { authLogout } from '@/actions/auth'

class LayoutsNavbar extends React.Component {
  constructor(props) {
    super(props)

    this.handleLogoutClick = this.handleLogoutClick.bind(this)
  }

  handleLogoutClick() {
    this.props.authLogout()
  }

  render() {
    const { stateCurrentUser: { currentUser } } = this.props

    return (
      <Navbar id="layouts-navbar" bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Navbar.Brand as={NavLink} to="/">Tinder</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {
              currentUser ? (
                <>
                  <Nav.Link as={NavLink} to="/" eventKey="A" onClick={this.handleLogoutClick}>Logout</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={NavLink} to="/auth/signup" eventKey="B">Signup</Nav.Link>
                  <Nav.Link as={NavLink} to="/auth/login" eventKey="C">Login</Nav.Link>
                </>
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

LayoutsNavbar.propTypes = {
  stateCurrentUser: PropTypes.shape().isRequired,
  authLogout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  stateCurrentUser: state.currentUser
})

const mapDispatchToProps = {
  authLogout
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutsNavbar)
