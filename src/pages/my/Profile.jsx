import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Card, CardGroup } from 'react-bootstrap'
import CompsFileUploadInput from '@/components/FileUploadInput'

import ViewCard from '@/layouts/ViewCard'

const PagesMyProfileShow = ({ stateCurrentUser: { currentUser } }) => (
  <div id="pages-my-profile-show" className="container text-center my-3 d-flex align-items-center flex-column">
    <h1 className="mb-3">Profile Show Page</h1>
    <div className="d-flex flex-column flex-grow-1 align-items-center">
      <div
        className="d-flex"
        style={{ position: 'relative', top: '5%' }}
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
                  <CompsFileUploadInput
                    id="file-upload-1"
                    className="col-6 col-md-4 p-0 border-dark"
                    existingEntry={currentUser?.UserImages?.[0] || {}}
                  />

                  <CompsFileUploadInput
                    id="file-upload-2"
                    className="col-6 col-md-4 p-0 border-dark"
                    existingEntry={currentUser?.UserImages?.[1] || {}}
                  />

                  <CompsFileUploadInput
                    id="file-upload-3"
                    className="col-6 col-md-4 p-0 border-dark"
                    existingEntry={currentUser?.UserImages?.[2] || {}}
                  />

                  <CompsFileUploadInput
                    id="file-upload-4"
                    className="col-6 col-md-4 p-0 border-dark"
                    existingEntry={currentUser?.UserImages?.[3] || {}}
                  />

                  <CompsFileUploadInput
                    id="file-upload-5"
                    className="col-6 col-md-4 p-0 border-dark"
                    existingEntry={currentUser?.UserImages?.[4] || {}}
                  />

                  <CompsFileUploadInput
                    id="file-upload-6"
                    className="col-6 col-md-4 p-0 border-dark"
                    existingEntry={currentUser?.UserImages?.[5] || {}}
                  />
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
