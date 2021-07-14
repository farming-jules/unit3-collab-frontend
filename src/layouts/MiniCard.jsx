import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap'

const MiniCard = ({ information: { name, UserImages } }) => (
  <div className="col-md-4 mt-3">
    <Card className="bg-dark text-white">
      <Card.Img src={UserImages?.[0]?.image || 'https://via.placeholder.com/50x75.png'} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{name}</Card.Title>
      </Card.ImgOverlay>
    </Card>
  </div>
)

MiniCard.propTypes = {
  information: PropTypes.shape().isRequired
}

export default MiniCard
