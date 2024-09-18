import './App.css';
//import Demo from './demo/Demo';
import Comment from './comments/Comment';
//import React from 'react';
//La creéation d'un composant React peut se faire de deux façons :
// 1. Function qui retourne du code JSX (recommended)
// 2. Class qui contient une méthode render qui retourne du code JSX

/*class App extends React.Component{

  render(){
    return <h1>Composant généré à partir d'une classe</h1>
  }
}*/

function App() {
  return (
    <>
      <h1>My first React App</h1>
      <Comment />
      <Comment />
      <Comment />
    </>
  );
}

export default App;
