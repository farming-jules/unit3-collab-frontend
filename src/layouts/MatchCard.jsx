import React from "react";
import { Link } from "react-router-dom";
import { Card, Carousel, Button, ButtonGroup, Badge } from "react-bootstrap";

class MatchCard extends React.Component {

  render = () => {

    return (
      <div className="col-md-4 mt-3">
        <Card className="bg-dark text-white">
          <Card.Img src="https://via.placeholder.com/50x75.png" alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>NAME</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </div>
    );
  };
}

export default MatchCard;
