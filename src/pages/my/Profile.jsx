import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Card, CardGroup } from 'react-bootstrap'

import ViewCard from '@/layouts/ViewCard'

const PagesMyProfileShow = ({ stateCurrentUser: { currentUser } }) => (
  <div id="pages-my-profile-show" className="container text-center my-3 d-flex align-items-center flex-column">
    <div className="d-flex flex-column flex-grow-1 align-items-center">
      <div
        className="d-flex"
        style={{ position: 'relative', top: '10%' }}
      >
        <ViewCard
          information={currentUser}
          isRecommendation={false}
        />
        <CardGroup>
          <Card>
            <div className="ml-3" style={{ height: `${690}px`, width: `${600}px` }}>
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
  </div>
)

PagesMyProfileShow.propTypes = {
  stateCurrentUser: PropTypes.shape().isRequired
}

const mapStateToProps = (state) => ({
  stateCurrentUser: state.currentUser
})

export default connect(mapStateToProps, null)(PagesMyProfileShow)
