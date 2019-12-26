import React from 'react';
import { Row, Col, Container, ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';

const Chapters = (props) => {

const onChangeList = (chapter) =>{
  props.setKey('verses');
  onSelectChapter(chapter);
}

const onSelectChapter = (chapter) =>{
  props.setCurrentChapter(chapter);
}

const createChapters = () =>{
  let count = props.chapters;
  let buttons = [];

  for(var i=1; i <= count; i++){
    let chapter = i;
    buttons.push(<ListGroupItem as="li" action key={i} onClick={e => onChangeList(chapter)}>{i}</ListGroupItem>);
  }
  return buttons;
}

  return(
    <Container>
      <Row className="justify-content-center">
        <Col sm="12" xs="12" lg="6">
          <h4 className="mt-3">{props.book.name} - {props.chapters} Capitulos</h4>
          <ListGroup className="mb-3">
            {
              createChapters()
            }
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Chapters;
