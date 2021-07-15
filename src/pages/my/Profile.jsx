import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Card, CardGroup } from 'react-bootstrap'

import ViewCard from '@/layouts/ViewCard'

// d-none d-lg-flex align-items-center flex-column
// d-flex flex-lg-column flex-xl-row justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-start

const PagesMyProfileShow = ({ stateCurrentUser: { currentUser } }) => (
  <div id="pages-my-profile-show" className="flex-grow-1 d-none d-lg-block">
    <div
      className="d-flex mx-5 flex-row justify-content-center align-items-start"
      style={{ position: 'relative', top: '10%' }}
    >
      <ViewCard
        information={currentUser}
        isRecommendation={false}
      />
      <CardGroup className="d-none d-xl-block" style={{ width: '100%', maxWidth: `${600}px` }}>
        <Card>
          <div className="ml-3">
            <div className="col-12">
              <div className="row ml-0">
                <div className="col-6 col-md-4 p-0" style={{ border: '1px solid black' }}>
                  <div style={{ paddingTop: `${(16 / 9) * 100}%`, backgroundImage: `url(${currentUser?.UserImages?.[0]?.image})` }} />
                </div>
                <div className="col-6 col-md-4 p-0" style={{ border: '1px solid black' }}>
                  <div style={{ paddingTop: `${(16 / 9) * 100}%`, backgroundImage: `url(${currentUser?.UserImages?.[1]?.image})` }} />
                </div>
                <div className="col-6 col-md-4 p-0" style={{ border: '1px solid black' }}>
                  <div style={{ paddingTop: `${(16 / 9) * 100}%`, backgroundImage: `url(${currentUser?.UserImages?.[2]?.image})` }} />
                </div>
                <div className="col-6 col-md-4 p-0" style={{ border: '1px solid black' }}>
                  <div style={{ paddingTop: `${(16 / 9) * 100}%`, backgroundImage: `url(${currentUser?.UserImages?.[3]?.image})` }} />
                </div>
                <div className="col-6 col-md-4 p-0" style={{ border: '1px solid black' }}>
                  <div style={{ paddingTop: `${(16 / 9) * 100}%`, backgroundImage: `url(${currentUser?.UserImages?.[4]?.image})` }} />
                </div>
                <div className="col-6 col-md-4 p-0" style={{ border: '1px solid black' }}>
                  <div style={{ paddingTop: `${(16 / 9) * 100}%`, backgroundImage: `url(${currentUser?.UserImages?.[5]?.image})` }} />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </CardGroup>
    </div>
  </div>
)

PagesMyProfileShow.propTypes = {
  stateCurrentUser: PropTypes.shape().isRequired
}

const mapStateToProps = (state) => ({
  stateCurrentUser: state.currentUser
})

export default connect(mapStateToProps, null)(PagesMyProfileShow)
