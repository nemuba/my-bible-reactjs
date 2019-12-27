import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

const Books = (props) => {

  const onChangeList = (book) => {
    props.setKey('chapters');
    onSelectBook(book);
  }
  const onSelectBook = (book) =>{
    props.setCurrentBook(book);
  }

  return(
  <Container style={{marginBottom: '60px'}}>
    <Row className="justify-content-center">
      <Col sm="12" xs="12" lg="6">
        <h4 className="mt-3">Livros</h4>
          <ListGroup className="mb-3">
           {props.books.map(book => {
             return(
             <ListGroupItem as="li"
              action
              onClick={e => onChangeList(book)}
              key={book.abbrev} >
                {book.name}
             </ListGroupItem>);
            })}
          </ListGroup>
      </Col>
    </Row>
  </Container>
  );
};

export default Books;
