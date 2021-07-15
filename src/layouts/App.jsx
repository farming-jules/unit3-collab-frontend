import React from 'react'
import PropTypes from 'prop-types'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { connect } from 'react-redux'

import { getMyProfile } from '@/actions/my/profile'

import Loading from '@/components/Loading'
import PrivateRoute from '@/components/PrivateRoute'
import AuthRoute from '@/components/AuthRoute'

import LayoutsNavbar from '@/layouts/Navbar'
import MySideBar from '@/layouts/MySideBar'

import PagesHome from '@/pages/Home'

import PagesAuthSignup from '@/pages/auth/Signup'
import PagesAuthLogin from '@/pages/auth/Login'

import PagesMyIndex from '@/pages/my/Index'
import PagesProfileShow from '@/pages/my/Profile'
import PagesProfileEdit from '@/pages/my/ProfileEdit'

import PagesNotFound from '@/pages/NotFound'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    this.props.getMyProfile({ hide401Toast: true }).finally(() => {
      this.setState({ loaded: true })
    })
  }

  render() {
    const { loaded } = this.state

    return (
      <Router>
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <LayoutsNavbar />
        {
          loaded ? (
            <div className="d-flex flex-column justify-content-center align-items-center flex-lg-row">
              <MySideBar />

              <Switch>
                <Route exact path="/" component={PagesHome} />

                <Route path="/auth">
                  <AuthRoute exact path="/auth/signup" component={PagesAuthSignup} />
                  <AuthRoute exact path="/auth/login" component={PagesAuthLogin} />
                </Route>

                <Route path="/my">
                  <PrivateRoute exact path="/my" component={PagesMyIndex} />
                  <PrivateRoute exact path="/my/profile" component={PagesProfileShow} />
                  <PrivateRoute exact path="/my/profile/edit" component={PagesProfileEdit} />
                </Route>

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
