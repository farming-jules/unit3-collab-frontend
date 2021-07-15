import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const PagesHome = ({ stateCurrentUser: { currentUser } }) => (
  <div
    id="pages-home"
    className="container-fluid"
    style={{
      position: 'relative',
      backgroundImage: 'url("https://tinder.com/static/build/07eef8b101ca939c978a599f508aa955.webp")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '100vh'
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        opacity: '0.4'
      }}
    />
    <div className="d-flex justify-content-center align-items-center" style={{ height: `${80}vh`, position: 'relative', zIndex: '99' }}>
      {
        currentUser ? (
          <Link to="/my">
            <Button variant="warning" type="button">
              Browse Recommendations
            </Button>
          </Link>
        ) : (
          <Link to="/auth/signup">
            <Button variant="warning" type="button">
              Create Account
            </Button>
          </Link>
        )
      }
    </div>
  </div>
)
PagesHome.propTypes = {
  stateCurrentUser: PropTypes.shape().isRequired
}

const mapStateToProps = (state) => ({
  stateCurrentUser: state.currentUser
})

export default connect(mapStateToProps, null)(PagesHome)
