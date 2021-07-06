import React from 'react'
import PropTypes from 'prop-types'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import { connect } from 'react-redux'

import { getMyProfile, getCurrentUser } from '@/actions/my/profile'

import Loading from '@/components/Loading'
import PrivateRoute from '@/components/PrivateRoute'

import LayoutsNavbar from '@/layouts/Navbar'
import MySideBar from '@/layouts/MySideBar'

import PagesHome from '@/pages/Home'

import PagesAuthSignup from '@/pages/auth/Signup'
import PagesAuthLogin from '@/pages/auth/Login'

import PagesMyIndex from '@/pages/my/Index'
import PagesProfileShow from '@/pages/my/Profile'
import PagesProfileEdit from '@/pages/my/ProfileEdit'

import PagesPrivate from '@/pages/Private'

import PagesNotFound from '@/pages/NotFound'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    this.props.getMyProfile().finally(() => {
      this.setState({ loaded: true })
    })
  }

  render() {
    const { loaded } = this.state

    return (
      <Router>
        <LayoutsNavbar />
        {
          loaded ? (
            <div className="d-flex">

              <MySideBar />

              <Switch>
                <Route exact path="/" component={PagesHome} />

                <Route path="/auth">
                  <Route exact path="/auth/signup" component={PagesAuthSignup} />
                  <Route exact path="/auth/login" component={PagesAuthLogin} />
                </Route>

                <PrivateRoute exact path="/test-private" component={PagesPrivate} />

                <Route path="/my">
                  <PrivateRoute exact path="/my" component={PagesMyIndex} />
                  <PrivateRoute exact path="/my/profile" component={PagesProfileShow} />
                  <PrivateRoute exact path="/my/profile/edit" component={PagesProfileEdit} />
                </Route>

                {/* <Route path="/my">
                  <Route exact path="/my" component={PagesMyIndex} />
                  <Route exact path="/my/profile" component={PagesProfileShow} />
                  <Route exact path="/my/profile/edit" component={PagesProfileEdit} />
                </Route> */}

                <Route component={PagesNotFound} />
              </Switch>
            </div>
          ) : (
            <div className="my-3">
              <Loading />
            </div>
          )
        }
      </Router>
    )
  }
}
App.propTypes = {
  getMyProfile: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  getMyProfile
}
export default connect(null, mapDispatchToProps)(App)
