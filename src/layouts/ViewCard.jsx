import React from 'react'
import PropTypes from 'prop-types'
import { Card, Carousel, Button, ButtonGroup, Badge } from 'react-bootstrap'
import moment from 'moment'

class ViewCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fadeLeft: false,
      fadeRight: false
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if ((nextState.fadeLeft || nextState.fadeRight) && this.props.information.id !== nextProps.information.id) {
      return false
    }

    return true
  }

  render() {
    const { information: { id, name, dateOfBirth, bio, passion, UserImages }, createLike, isRecommendation } = this.props
    const { fadeLeft, fadeRight } = this.state

    return (
      <Card
        className={`animate__animated ${fadeLeft ? 'animate__fadeOutLeft' : ''} ${fadeRight ? 'animate__fadeOutRight' : ''}`}
        style={{ width: '300px', minWidth: '300px', border: '1px solid black' }}
      >
        <Carousel>
          {
            UserImages?.length > 0 && UserImages.map((image, index) => (
              <Carousel.Item key={image.id} style={{ height: '500px' }}>
                <img
                  key={image.id}
                  style={{ objectFit: 'cover' }}
                  className="d-block w-100 h-100"
                  src={image.image || 'https://via.placeholder.com/50x75.png'}
                  alt={`Slide ${index + 1}`}
                />
              </Carousel.Item>
            ))
          }
        </Carousel>
        <Card.Body className="text-left">
          <Card.Title><b>{name}</b> {moment().diff(dateOfBirth, 'years')}</Card.Title>
          <Card.Text><Badge pill variant="success">{passion}</Badge> {bio}</Card.Text>
          {
            isRecommendation && (
              <div className="d-flex justify-content-center">
                <ButtonGroup>
                  <Button
                    onClick={() => {
                      this.setState({ fadeLeft: true })
                      createLike(id, false, () => {
                        setTimeout(() => {
                          this.setState({ fadeLeft: false })
                        }, 1000)
                      })
                    }}
                    variant="outline-danger"
                    className="btn-lg mr-3 text-center"
                    style={{ borderRadius: `${50}%` }}
                  >❌</Button>
                  <Button
                    onClick={() => {
                      this.setState({ fadeRight: true })
                      createLike(id, true, () => {
                        setTimeout(() => {
                          this.setState({ fadeRight: false })
                        }, 1000)
                      })
                    }}
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
  }
}

ViewCard.propTypes = {
  information: PropTypes.shape().isRequired,
  createLike: PropTypes.func.isRequired,
  isRecommendation: PropTypes.bool.isRequired
}

export default ViewCard
