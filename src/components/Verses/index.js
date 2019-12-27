import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';

// import { Container } from './styles';

const Verses = (props) => {

const onChangeList = (verse) =>{
  props.setVerse(verse);
}

const createVerses = () =>{
  let count = props.verse;
  let buttons = [];

  for(var i = 1; i <= count; i++){
    let verse = i;
    buttons.push(<ListGroupItem action href={`/reading/${props.book.abbrev}/${props.chapter}/${i}`} key={i} onClick={e => onChangeList(verse)}>{i}</ListGroupItem>);
  }
  return buttons;
}

  return(
    <Container style={{marginBottom: '60px'}}>
      <Row className="justify-content-center">
        <Col sm="12" xs="12" lg="6">
          <h4 className="mt-3">{props.book.name} - Cap. {props.chapter} - {props.verse} Versos</h4>
          <ListGroup className="mb-3">
            {
              createVerses()
            }
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );

};

export default Verses;
