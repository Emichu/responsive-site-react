import React from 'react';
import * as Styled from './style';

const App = () => {
  return (
    <Styled.Main>
      <Styled.Sidebar>
        <span>I'm a sidebar</span>
      </Styled.Sidebar>
      <Styled.Content>
        <Styled.Navbar>
          <a href="https://google.com">link</a>
          <a href="https://google.com">link</a>
          <a href="https://google.com">link</a>
          <a href="https://google.com">link</a>
          <a href="https://google.com">link</a>
        </Styled.Navbar>
        <Styled.Title3>
          This is my app
        </Styled.Title3>
      </Styled.Content>
    </Styled.Main>
  );
};

export default App;