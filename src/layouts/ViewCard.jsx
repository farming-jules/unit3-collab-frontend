import React from 'react'
import PropTypes from 'prop-types'
import { Card, Carousel, Button, ButtonGroup, Badge } from 'react-bootstrap'
import moment from 'moment'

const ViewCard = ({ recommendation: { id, name, dateOfBirth, bio, passion }, putLike, putCross }) => (
  <Card style={{ width: '24rem' }}>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/200x250.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/200x250.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/200x250.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <Card.Body className="text-left">
      <Card.Title><b>{name}</b> {moment().diff(dateOfBirth, 'years')}</Card.Title>
      <Card.Text><Badge pill variant="success">{passion}</Badge> {bio}</Card.Text>
      <div className="d-flex justify-content-center">
        <ButtonGroup>
          <Button
            onClick={() => { putCross(id) }}
            variant="outline-danger"
            className="btn-lg mr-3 text-center"
            style={{ borderRadius: `${50}%` }}
          >❌</Button>

          <Button
            onClick={() => { putLike(id) }}
            variant="outline-success"
            className="btn-lg ml-3 text-center"
            style={{ borderRadius: `${50}%` }}
          >💚</Button>
        </ButtonGroup>
      </div>
    </Card.Body>
  </Card>
)

ViewCard.propTypes = {
  recommendation: PropTypes.shape().isRequired,
  putLike: PropTypes.func.isRequired,
  putCross: PropTypes.func.isRequired
}

export default ViewCard
