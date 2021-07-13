import React from 'react'
import PropTypes from 'prop-types'

class CompsFileUploadInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      reader: null,
      previewUrl: props?.existingEntry?.image
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleReaderOnload = this.handleReaderOnload.bind(this)
  }

  handleChange(e) {
    const { id, uploadFile } = this.props

    const reader = new FileReader()
    const file = e?.target?.files?.[0]

    uploadFile(id, file)

    reader.onload = this.handleReaderOnload
    reader.readAsDataURL(file)

    this.setState({ reader })
  }

  handleReaderOnload() {
    const { reader } = this.state

    this.setState({ previewUrl: reader.result })
  }

  render() {
    const { previewUrl } = this.state
    const { id, className, isUploading } = this.props

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
      </div>
    )
  }
}

CompsFileUploadInput.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  uploadFile: PropTypes.func.isRequired,
  isUploading: PropTypes.bool.isRequired,
  existingEntry: PropTypes.shape().isRequired
}

export default CompsFileUploadInput
