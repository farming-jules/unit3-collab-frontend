import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { DropdownButton, MenuItem, Tabs, Tab, ListGroup, Card, Button, CardGroup } from "react-bootstrap";

import Loading from '@/components/Loading'
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
    const { } = this.state

    return (
      <div id="pages-todos-index" className="container text-center my-3">
        <h1 className="mb-3">Profile Show Page</h1>
        <div className="d-flex align-items-center flex-column justify-content-center">
          <ViewCard />
          <CardGroup>
              <Card>
                <div style={{height: 100 + 'px', width: 130 + 'px'}}></div>
              </Card>
              <Card>
                <div style={{height: 100 + 'px', width: 130 + 'px'}}></div>
              </Card>
              <Card>
                <div style={{height: 100 + 'px', width: 130 + 'px'}}></div>
              </Card>
            </CardGroup>
            <CardGroup>
              <Card>
                <div style={{height: 100 + 'px', width: 130 + 'px'}}></div>
              </Card>
              <Card>
                <div style={{height: 100 + 'px', width: 130 + 'px'}}></div>
              </Card>
              <Card>
                <div style={{height: 100 + 'px', width: 130 + 'px'}}></div>
              </Card>
            </CardGroup>
        </div>
      </div>
    )
  }
}

PagesProfileShow.propTypes = {
  history: PropTypes.shape().isRequired,
  stateTodos: PropTypes.shape().isRequired,
}

const mapStateToProps = (state) => ({
  stateTodos: state.todos
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PagesProfileShow)
