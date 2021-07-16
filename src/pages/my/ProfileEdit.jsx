import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import produce from 'immer'
import moment from 'moment'

import FormsMyProfile from '@/forms/my/Profile'
import CompsFileUploadInput from '@/components/FileUploadInput'

import {
  updateMyProfile
} from '@/actions/my/profile'

import {
  updateMyProfileImage,
  createMyProfileImage,
  destroyMyProfileImage
} from '@/actions/my/profileImage'

class PagesProfileEdit extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      imageLoading: []
    }

    this.handleProfileEditSubmit = this.handleProfileEditSubmit.bind(this)
    this.handleUploadFile = this.handleUploadFile.bind(this)
    this.handleRemoveFile = this.handleRemoveFile.bind(this)
  }

  handleProfileEditSubmit(values) {
    this.props.updateMyProfile(values).then(() => {
      const { history: { push } } = this.props
      push('/my/profile')
    })
  }

  handleUploadFile(id, file, UserImageId) {
    this.setImageLoading(id)

    if (UserImageId) {
      this.props.updateMyProfileImage(file, UserImageId).then(() => {
        this.unsetImageLoading(id)
      })
    } else {
      this.props.createMyProfileImage(file).then(() => {
        this.unsetImageLoading(id)
      })
    }
  }

  handleRemoveFile(id, UserImageId) {
    this.setImageLoading(id)

    this.props.destroyMyProfileImage(UserImageId).then(() => {
      this.unsetImageLoading(id)
    })
  }

  setImageLoading(id) {
    const newState = produce(this.state, (draft) => {
      draft.imageLoading.push(id)
    })
    this.setState(newState)
  }

  unsetImageLoading(id) {
    const newState = produce(this.state, (draft) => {
      const index = draft.imageLoading.findIndex((il) => il === id)
      if (index !== -1) draft.imageLoading.splice(index, 1)
    })
    this.setState(newState)
  }

  render() {
    const { imageLoading } = this.state
    const { stateCurrentUser: { currentUser } } = this.props

    const disableDelete = imageLoading.length > 0

    return (
      <div id="pages-profile-edit" className="container text-center my-3">
        <h1 className="mb-3">Profile Edit Page</h1>

        <div className="row flex-column-reverse flex-md-row justify-content-around text-left">
          <div className="col-12 col-md-5 col-lg-4">
            <FormsMyProfile
              initialValues={{
                ...currentUser,
                dateOfBirth: moment(currentUser?.dateOfBirth).format('YYYY-MM-DD')
              }}
              onSubmit={this.handleProfileEditSubmit}
              hasUnfinishedUpload={imageLoading.length > 0}
            />
          </div>

          <div className="col-12 col-md-5 col-lg-4 mb-3 mb-md-0">
            <div className="row">
              <CompsFileUploadInput
                id="file-upload-1"
                className="col-6 col-md-4 p-0 border-dark"
                existingEntry={currentUser?.UserImages?.[0] || {}}
                uploadFile={this.handleUploadFile}
                removeFile={this.handleRemoveFile}
                isUploading={imageLoading.includes('file-upload-1')}
                disableDelete={disableDelete}
              />

              <CompsFileUploadInput
                id="file-upload-2"
                className="col-6 col-md-4 p-0 border-dark"
                existingEntry={currentUser?.UserImages?.[1] || {}}
                uploadFile={this.handleUploadFile}
                removeFile={this.handleRemoveFile}
                isUploading={imageLoading.includes('file-upload-2')}
                disableDelete={disableDelete}
              />

              <CompsFileUploadInput
                id="file-upload-3"
                className="col-6 col-md-4 p-0 border-dark"
                existingEntry={currentUser?.UserImages?.[2] || {}}
                uploadFile={this.handleUploadFile}
                removeFile={this.handleRemoveFile}
                isUploading={imageLoading.includes('file-upload-3')}
                disableDelete={disableDelete}
              />

              <CompsFileUploadInput
                id="file-upload-4"
                className="col-6 col-md-4 p-0 border-dark"
                existingEntry={currentUser?.UserImages?.[3] || {}}
                uploadFile={this.handleUploadFile}
                removeFile={this.handleRemoveFile}
                isUploading={imageLoading.includes('file-upload-4')}
                disableDelete={disableDelete}
              />

              <CompsFileUploadInput
                id="file-upload-5"
                className="col-6 col-md-4 p-0 border-dark"
                existingEntry={currentUser?.UserImages?.[4] || {}}
                uploadFile={this.handleUploadFile}
                removeFile={this.handleRemoveFile}
                isUploading={imageLoading.includes('file-upload-5')}
                disableDelete={disableDelete}
              />

              <CompsFileUploadInput
                id="file-upload-6"
                className="col-6 col-md-4 p-0 border-dark"
                existingEntry={currentUser?.UserImages?.[5] || {}}
                uploadFile={this.handleUploadFile}
                removeFile={this.handleRemoveFile}
                isUploading={imageLoading.includes('file-upload-6')}
                disableDelete={disableDelete}
              />

            </div>
          </div>
        </div>
      </div>
    )
  }
}

PagesProfileEdit.propTypes = {
  history: PropTypes.shape().isRequired,
  updateMyProfile: PropTypes.func.isRequired,
  stateCurrentUser: PropTypes.shape().isRequired,
  updateMyProfileImage: PropTypes.func.isRequired,
  createMyProfileImage: PropTypes.func.isRequired,
  destroyMyProfileImage: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  stateCurrentUser: state.currentUser
})

const mapDispatchToProps = {
  updateMyProfile,
  updateMyProfileImage,
  createMyProfileImage,
  destroyMyProfileImage
}

export default connect(mapStateToProps, mapDispatchToProps)(PagesProfileEdit)
