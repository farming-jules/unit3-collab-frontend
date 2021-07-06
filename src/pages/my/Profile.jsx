import React from 'react'
import { connect } from 'react-redux'

import { Card, CardGroup } from 'react-bootstrap'

import ViewCard from '@/layouts/ViewCard'

class PagesProfileShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false
    }
  }

  componentDidMount() {
    const { open } = this.state
    this.setState({ open: !open })
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div id="pages-todos-index" className="container text-center my-3">
        <h1 className="mb-3">Profile Show Page</h1>
        <div className="d-flex align-items-center flex-column justify-content-center">
          <ViewCard />
          <CardGroup>
            <Card>
              <div style={{ height: `${100}px`, width: `${130}px` }} />
            </Card>
            <Card>
              <div style={{ height: `${100}px`, width: `${130}px` }} />
            </Card>
            <Card>
              <div style={{ height: `${100}px`, width: `${130}px` }} />
            </Card>
          </CardGroup>
          <CardGroup>
            <Card>
              <div style={{ height: `${100}px`, width: `${130}px` }} />
            </Card>
            <Card>
              <div style={{ height: `${100}px`, width: `${130}px` }} />
            </Card>
            <Card>
              <div style={{ height: `${100}px`, width: `${130}px` }} />
            </Card>
          </CardGroup>
        </div>
      </div>
    )
  }
}

PagesProfileShow.propTypes = {
}

const mapStateToProps = (state) => ({
  stateTodos: state.todos
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PagesProfileShow)
