import React, { useState, useEffect } from 'react';
import {
  Tabs,
  Tab,
  TabContainer
} from 'react-bootstrap';
import Header from './../Header';
import Books from './../Books';
import Chapters from './../Chapters';
import Verses from './../Verses';
import api from './../../services/api';


const Home = (props) => {

  const [key, setKey] = useState('books');
  const [books, setBooks] = useState([]);
  const [current_book, setCurrentBook] = useState({});
  const [current_chapter, setCurrentChapter] = useState();
  const [verse, setVerse] = useState();

  useEffect(() => {
    api.get('books')
      .then(response => setBooks(response.data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    if(current_book && current_chapter>0){
    api.get(`verses/nvi/${current_book.abbrev}/${current_chapter}`)
      .then(response => setVerse(response.data.chapter.verses))
      .catch(erro => console.log(erro));
    }
  }, [current_book, current_chapter]);

  return(
    <div>
      <Header />
        <Tabs activeKey={key} transition={false} onSelect={k => setKey(k)} className="justify-content-center m-0">
        <Tab eventKey="books" title="Livro" >
          <TabContainer className="justify-content-center">
            <Books books={books} setKey={setKey} setCurrentBook={setCurrentBook}/>
          </TabContainer>
        </Tab>
        <Tab eventKey="chapters" title="Capitulo" disabled>
          <TabContainer className="justify-content-center">
            <Chapters
            chapters={current_book.chapters}
            setCurrentChapter={setCurrentChapter}
            book={current_book}
            setKey={setKey}/>
          </TabContainer>
        </Tab>
        <Tab eventKey="verses" title="Versiculo" disabled>
          <TabContainer className="justify-content-center">
            <Verses
            book={current_book}
            chapter={current_chapter}
            verse={verse}
            setVerse={setVerse}/>
          </TabContainer>
        </Tab>
      </Tabs>
    </div>
  )
};

export default Home;
