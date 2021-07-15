import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const ModalsDeleteAccountConfirmation = ({ close, confirm }) => (
  <Modal show onHide={close}>
    <Modal.Header closeButton>
      <Modal.Title>Tinder Warning</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <p>Are you sure to delete account?</p>
    </Modal.Body>

    <Modal.Footer>
      <Button variant="secondary" onClick={close}>Close</Button>
      <Button variant="primary" onClick={confirm}>Sure</Button>
    </Modal.Footer>
  </Modal>
)

ModalsDeleteAccountConfirmation.propTypes = {
  close: PropTypes.func.isRequired,
  confirm: PropTypes.func.isRequired
}

export default ModalsDeleteAccountConfirmation
