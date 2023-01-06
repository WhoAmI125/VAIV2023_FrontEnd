import React from 'react';
import logo from './logo.svg';
import './App.css';
import GlobalStyles from './GlobalStyled';
import styled from 'styled-components';
import AppRouter from "./AppRouter";



function App() {
  return (
    <>
      <GlobalStyles/>
        <AppRouter />
    </> 
  );
}

export default App;
