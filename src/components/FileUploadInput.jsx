import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

class CompsFileUploadInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      reader: null,
      previewUrl: props?.existingEntry?.image
    }

    this.handleDeleteImage = this.handleDeleteImage.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleReaderOnload = this.handleReaderOnload.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.existingEntry.id !== this.props.existingEntry.id) {
      this.setPreviewUrl(this.props?.existingEntry?.image)
    }
  }

  handleDeleteImage() {
    const { id, removeFile, existingEntry } = this.props

    removeFile(id, existingEntry.id)
  }

  handleChange(e) {
    const { id, uploadFile, existingEntry } = this.props

    const reader = new FileReader()
    const file = e?.target?.files?.[0]

    uploadFile(id, file, existingEntry?.id)

    reader.onload = this.handleReaderOnload
    reader.readAsDataURL(file)

    this.setState({ reader })
  }

  handleReaderOnload() {
    const { reader } = this.state

    this.setPreviewUrl(reader.result)
  }

  setPreviewUrl(previewUrl) {
    this.setState({ previewUrl })
  }

  render() {
    const { previewUrl } = this.state
    const { id, className, isUploading, disableDelete } = this.props

    return (
      <div
        id="comps-file-upload-input"
        className={`border ${className} position-relative`}
      >
        <div style={{ paddingTop: `${(16 / 9) * 100}%` }} />
        <input
          id={id}
          className="d-none"
          type="file"
          onChange={this.handleChange}
        />
        <label
          htmlFor={id}
          className="position-absolute m-0"
          style={{
            filter: isUploading ? 'contrast(0.5)' : 'initial',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundImage: `url(${previewUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        {
          previewUrl && (
            <button
              id="delete-btn"
              type="button"
              onClick={this.handleDeleteImage}
              style={{
                position: 'absolute',
                top: 0,
                right: 0
              }}
              disabled={isUploading || disableDelete}
            ><FontAwesomeIcon icon={faTrash} /></button>
          )
        }
      </div>
    )
  }
}

CompsFileUploadInput.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  uploadFile: PropTypes.func.isRequired,
  removeFile: PropTypes.func.isRequired,
  isUploading: PropTypes.bool.isRequired,
  existingEntry: PropTypes.shape().isRequired,
  disableDelete: PropTypes.bool.isRequired
}

export default CompsFileUploadInput
