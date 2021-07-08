import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

import FormsMyProfile from '@/forms/my/Profile'

import {
  updateMyProfile
} from '@/actions/my/profile'

class PagesProfileEdit extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }

    this.handleProfileEditSubmit = this.handleProfileEditSubmit.bind(this)
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  handleProfileEditSubmit(values) {
    this.props.updateMyProfile(values).then(() => {
      const { history: { push } } = this.props
      push('/my/profile')
    })
  }

  render() {
    const { stateCurrentUser: { currentUser } } = this.props

    return (
      <div id="pages-profile-edit" className="container text-center my-3">
        <h1 className="mb-3">Profile Edit Page</h1>

        <div className="row justify-content-around text-left">
          <div className="col-12 col-md-5 col-lg-4">
            <FormsMyProfile
              initialValues={currentUser}
              onSubmit={this.handleProfileEditSubmit}
            />
          </div>
          <div className="col-12 col-md-5 col-lg-4">
            <CardGroup>
              <Card>
                <div style={{ height: `${160}px`, width: `${100}px` }} />
              </Card>
              <Card>
                <div style={{ height: `${160}px`, width: `${100}px` }} />
              </Card>
              <Card>
                <div style={{ height: `${160}px`, width: `${100}px` }} />
              </Card>
            </CardGroup>
            <CardGroup>
              <Card>
                <div style={{ height: `${160}px`, width: `${100}px` }} />
              </Card>
              <Card>
                <div style={{ height: `${160}px`, width: `${100}px` }} />
              </Card>
              <Card>
                <div style={{ height: `${160}px`, width: `${100}px` }} />
              </Card>
            </CardGroup>
          </div>
        </div>
      </div>
    )
  }
}

PagesProfileEdit.propTypes = {
  history: PropTypes.shape().isRequired,
  updateMyProfile: PropTypes.func.isRequired,
  stateCurrentUser: PropTypes.shape().isRequired
}

const mapStateToProps = (state) => ({
  stateCurrentUser: state.currentUser
})

const mapDispatchToProps = {
  updateMyProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(PagesProfileEdit)
