import React from 'react'
import { connect } from 'react-redux'

import ViewCard from '@/layouts/ViewCard'

class PagesMyIndex extends React.Component {
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
    return (
      <div id="pages-todos-index" className="container text-center my-3">
        <h1 className="mb-3">Index/Main Page</h1>
        <div className="d-flex justify-content-center">
          <ViewCard />
        </div>
      </div>
    )
  }
}

PagesMyIndex.propTypes = {
}

const mapStateToProps = (state) => ({
  stateTodos: state.todos
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PagesMyIndex)
