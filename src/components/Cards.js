import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import SongList from '../playlist.json'

const Cards = () => {
    const [list, setList] = useState([...SongList])
  return (
    <div>
      <Row xs={1} md={4} className="g-4">
        {list.map((item, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={item.user.avatar_url} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Cards
