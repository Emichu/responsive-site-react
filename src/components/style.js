import styled from 'styled-components';

export const Main = styled.main`
display: flex;
`

export const Sidebar = styled.aside`
background: lightblue;
flex: 2;
@media (max-width: 400px) {
    display: none;
  }
`

export const Content = styled.section`
  background: #9b59b6;
  font-family: sans-serif;
  flex: 5;
`

export const Title3 = styled.h3`
  font-size: 1rem;
  color: #2c3e50;
  text-align: center;
`;

export const Navbar = styled.section`
  font-size: 1rem;
  background: #8e44ad;
  display: flex;
  align-items: center;
  font-family: sans-serif;
  text-align: center;
  color: #34495e;
  justify-content: center;

  > a { 
    margin: 10px;
    color: white;
  }

  @media (max-width: 400px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 75px;
  }
`;