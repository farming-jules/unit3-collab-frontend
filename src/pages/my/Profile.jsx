import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Card, CardGroup } from 'react-bootstrap'

import ViewCard from '@/layouts/ViewCard'

class PagesProfileShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {

  }

  render() {
    const { stateCurrentUser: { currentUser } } = this.props

    if (currentUser.length === 0) return <h2>No Current User</h2>

    return (
      <div id="pages-todos-index" className="container text-center my-3 d-flex align-items-center flex-column">
        <h1 className="mb-3">Profile Show Page</h1>
        <div className="d-flex flex-column flex-grow-1 align-items-center">
          <div
            className="d-flex"
            style={{ position: 'relative', top: '5%' }}
          >
            <ViewCard
              information={currentUser}
            />
            <CardGroup>
              <Card>
                <div
                  className="ml-3"
                  style={{ height: `${650}px`, width: `${300}px`, border: '1px solid black' }}
                />
              </Card>
            </CardGroup>
          </div>
        </div>
      </div>
    )
  }
}

PagesProfileShow.propTypes = {
  stateCurrentUser: PropTypes.shape().isRequired
}

const mapStateToProps = (state) => ({
  stateCurrentUser: state.currentUser
})

export default connect(mapStateToProps, null)(PagesProfileShow)
