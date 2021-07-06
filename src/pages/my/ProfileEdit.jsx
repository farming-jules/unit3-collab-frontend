import React from 'react'
import { connect } from 'react-redux'

import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

import FormsMyProfile from '@/forms/my/Profile'

class PagesProfileEdit extends React.Component {
  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div id="pages-auth-signup" className="container text-center my-3">
        <h1 className="mb-3">Profile Edit Page</h1>

        <div className="row justify-content-around text-left">
          <div className="col-12 col-md-5 col-lg-4">
            <FormsMyProfile />
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
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PagesProfileEdit)
