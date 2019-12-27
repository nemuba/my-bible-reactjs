import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Header from './../Header';
import api from '../../services/api';

const Reading = (props) =>{

  const [verse, setVerse] = useState({});
  const [book, setBook] = useState({});

  useEffect(()=>{
    const {book, chapter, verse} = props.match.params;
    api.get(`/verses/nvi/${book}/${chapter}/${verse}`)
    .then(response=> setVerse(response.data))
    .catch(error => console.log(error));
  },[props.match.params]);

  useEffect(()=>{
    const {book} = props.match.params;
    api.get(`/books/${book}`)
    .then(response=> setBook(response.data))
    .catch(error => console.log(error));
  },[props.match.params]);

  return(
    <div>
      <Header />
      <Container style={{marginBottom: '60px'}}>
        <Row className="justify-content-center">
          <Col lg="6" sm="12" xs="12">
            <Card className="mt-3">
              <Card.Header className="bg-dark text-white">{book.name} - Cap. {props.match.params.chapter}</Card.Header>
              <Card.Body><p>{props.match.params.verse} - {verse.text}</p></Card.Body>
              <Card.Footer><Link to="/" className="btn btn-primary btn-sm">Voltar</Link></Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
  </div>
  );
}

export default Reading;