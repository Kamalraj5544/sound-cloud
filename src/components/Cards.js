import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "../styles/Cards.css";

import SongList from "../playlist.json";

const Cards = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList([...SongList]);
  }, []);

  const handleDelete = (id) => {
    const confirm = prompt(
      "Are you sure you want to delete ... If yes Type 'yes' to delete"
    );

    if (confirm === "yes") {
      const tempCards = list.filter((item) => item.id !== id);
      setList([...tempCards]);
    }
  };

  return (
    <div className="card-container">
      <Row xs={1} md={4} className="g-4">
        {list.map((item) => (
          <Col>
            <div className="delete-icon">
              <Button className="dlt-btn"
                variant="danger"
                onClick={(e) => {
                  e.preventDefault();
                  handleDelete(item.id);
                }}
              >
                X
              </Button>
            </div>
            <Card>
              <Card.Img
                className="card-img"
                variant="top"
                src={item.artworkUrl}
              />
              <Card.Body>
                <Card.Title>{item.user.username}</Card.Title>
                <Card.Text>{item.label_name}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Cards;
