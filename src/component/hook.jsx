import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import moment from "moment/moment";

const Hook = () => {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=id&q=${search}&apiKey=280c43d0756d4b1a9690a165ae0ebe88`
      )
      .then((res) => {
        setArticles(res.data.articles);
        setLoading(false);
      });
  }, [search]);

  return (
    <Container>
      <Row className="d-flex justify-content-center mt-3 mb-3">
        <Col md={6}>
          <Form>
            <Form.Control
              placeholder="Cari"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            ></Form.Control>
          </Form>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center m-1">
        {loading ? (
          <p>Loading</p>
        ) : (
          articles.map((articles) => (
            <Card className="m-2" style={{ width: "22rem" }} key={articles.url}>
              <Card.Img
                className="mt-3"
                variant="top"
                src={articles.urlToImage}
              />
              <Card.Body>
                <Card.Title>{articles.title}</Card.Title>
                <Card.Text className="text-secondary">
                  {moment().format("MMMM Do YYYY", articles.publishedAt)} -{" "}
                  {articles.author}
                </Card.Text>
                <Card.Text>{articles.description}</Card.Text>
                <Button href={articles.url} variant="primary">
                  Baca selengkapnya
                </Button>
              </Card.Body>
            </Card>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Hook;
