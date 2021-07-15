import React from 'react'
import PropTypes from 'prop-types'
import { Card, Carousel, Button, ButtonGroup, Badge } from 'react-bootstrap'
import moment from 'moment'

const ViewCard = ({ information: { id, name, dateOfBirth, bio, passion, UserImages }, createLike, isRecommendation }) => (
  <Card style={{ width: '24rem', border: '1px solid black' }}>
    <Carousel>
      <Carousel.Item style={{ height: '500px' }}>
        <img
          style={{ objectFit: 'cover' }}
          className="d-block w-100 h-100"
          src={UserImages?.[0]?.image || 'https://via.placeholder.com/50x75.png'}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: '500px' }}>
        <img
          style={{ objectFit: 'cover' }}
          className="d-block w-100 h-100"
          src={UserImages && UserImages[1] && UserImages[0].image ? (UserImages[1].image) : ('https://via.placeholder.com/50x75.png')}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: '500px' }}>
        <img
          style={{ objectFit: 'cover' }}
          className="d-block w-100 h-100"
          src={UserImages?.[2]?.image || 'https://via.placeholder.com/50x75.png'}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: '500px' }}>
        <img
          style={{ objectFit: 'cover' }}
          className="d-block w-100 h-100"
          src={UserImages?.[3]?.image || 'https://via.placeholder.com/50x75.png'}
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: '500px' }}>
        <img
          style={{ objectFit: 'cover' }}
          className="d-block w-100 h-100"
          src={UserImages?.[4]?.image || 'https://via.placeholder.com/50x75.png'}
          alt="Fifth slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{ height: '500px' }}>
        <img
          style={{ objectFit: 'cover' }}
          className="d-block w-100 h-100"
          src={UserImages?.[5]?.image || 'https://via.placeholder.com/50x75.png'}
          alt="Sixth slide"
        />
      </Carousel.Item>
    </Carousel>
    <Card.Body className="text-left">
      <Card.Title><b>{name}</b> {moment().diff(dateOfBirth, 'years')}</Card.Title>
      <Card.Text><Badge pill variant="success">{passion}</Badge> {bio}</Card.Text>
      {
          isRecommendation && (
            <div className="d-flex justify-content-center">
              <ButtonGroup>
                <Button
                  onClick={() => { createLike(id, false) }}
                  variant="outline-danger"
                  className="btn-lg mr-3 text-center"
                  style={{ borderRadius: `${50}%` }}
                >❌</Button>
                <Button
                  onClick={() => { createLike(id, true) }}
                  variant="outline-success"
                  className="btn-lg ml-3 text-center"
                  style={{ borderRadius: `${50}%` }}
                >💚</Button>
              </ButtonGroup>
            </div>
          )
        }
    </Card.Body>
  </Card>
)

ViewCard.propTypes = {
  information: PropTypes.shape().isRequired,
  createLike: PropTypes.func.isRequired,
  isRecommendation: PropTypes.bool.isRequired
}

export default ViewCard
