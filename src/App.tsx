import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import NavigationBar from './Layout/NavigationBar';
import Body from './Layout/Body';
import { ThemeProvider } from './Contexts/ThemeProvider';

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <NavigationBar />
      <Body>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/register" element={<Register></Register>}/>
        </Routes>
      </Body>
    </ThemeProvider>
  );
}

export default App;
