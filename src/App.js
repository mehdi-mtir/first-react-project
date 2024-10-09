import './App.css';
//import Demo from './demo/Demo';
import Comment from './comments/Comment';
import Card from './comments/Card';
import { useState } from 'react';
import AddComment from './comments/AddComment';
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
  const [action, setAction] = useState("");
  const [comments, setComments] = useState([
    {
      id : 1,
      name:"Matt",
      avatar :"https://semantic-ui.com/images/avatar/small/matt.jpg",
      pubDate : "25/09/2024",
      description : "How artistic!",
      evaluation : 4,
      etat : "pending" //approuved
    },
    {
      id : 2,
      name:"Stevie",
      avatar :"https://semantic-ui.com/images/avatar/small/stevie.jpg",
      pubDate : "24/09/2024",
      description : "Hey guys, I hope this example comment is helping you read this documentation.",
      evaluation : 5,
      etat : "pending" //approuved
    },
    {
      id : 3,
      name:"Elliot",
      avatar :"https://semantic-ui.com/images/avatar/small/elliot.jpg",
      pubDate : "23/09/2024",
      description : "This has been very useful for my research. Thanks as well!",
      evaluation : 4,
      etat : "pending" //approuved
    }
  ]);


    const addNewComment = (newComment)=>{
      newComment.id = comments[comments.length - 1].id + 1;
      setComments([...comments, newComment]);
      setAction("");
    }

    const declineComment = (id)=>{
      if(window.confirm("Êtes-vous sûre de vouloir décliner le commentaire?"))
        setComments(
          comments.filter(
            comment => comment.id !== id 
          )
        )
    }
    
    const approuveComment = (id)=>{
      setComments(
        comments.map(
          comment=>(comment.id === id)?{...comment, etat : "approuved"}:comment
        )
      )
    }


  return (
    <>
      <div>
        <h1>My first React App</h1>
      </div>
      <div>
      <button 
        className="ui primary button" 
        style={{marginBottom : 10}}
        onClick={
          ()=>setAction("add")
        }
        >Ajouter un commentaire</button>

      {
      //Début formulaire d'ajout
      (action === "add") &&
        <AddComment 
          addNewCommentRef = {addNewComment}
        />

      }

      <div className="ui cards">
      {
        comments.map(
          comment=><Card 
            key={comment.id} 
            id={comment.id} 
            etat={comment.etat} 
            declineCommentRef = {declineComment}
            approuveCommentRef = {approuveComment}>
            <Comment  {...comment} />
          </Card>
        )
      }
      </div>
      </div>
    </>
  );
}

export default App;
