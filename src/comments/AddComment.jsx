import { useState } from "react";


function AddComment({ addNewCommentRef}){
    const [comment, setComment] = useState(
        {
            name:"",
            avatar :"",
            pubDate : "",
            description : "",
            evaluation : 0
        }
    );

    const inputChangeHandler = ({target})=>{
        //console.log(evt);
        setComment({...comment, [target.name] : target.value})
        console.log(comment);
    }


    return(
        <div style={{marginBottom : 10}}>
        <form 
            className="ui form five column stackable grid "
            onSubmit={(evt)=>{
                evt.preventDefault();
                addNewCommentRef(comment);
            }}
        
        >
            <div className="field column">
            <label>Nom</label>
            <input type="text" name="name" placeholder="Nom" value={comment.name} onChange={(evt)=>inputChangeHandler(evt)} />
            </div>
            <div className="field column">
            <label>Avatar</label>
            <input type="text" name="avatar" placeholder="url de l'avatar" value={comment.avatar} onChange={(evt)=>inputChangeHandler(evt)} />
            </div>
            <div className="field column">
            <label>Description</label>
            <input type="text" name="description" placeholder="Texte du commentaire" value={comment.description} onChange={(evt)=>inputChangeHandler(evt)} />
            </div>
            <div className="field column">
            <label>Date de publication</label>
            <input type="text" name="pubDate" placeholder="jj/mm/aaaa" value={comment.pubDate} onChange={(evt)=>inputChangeHandler(evt)} />
            </div>
            <div className="field column">
            <label>Evaluation</label>
            <input type="number" name="evaluation" min={1} max={5} value={comment.evaluation} onChange={(evt)=>inputChangeHandler(evt)}/>
            </div>
            
            <button 
            className="ui button primary column" 
            type="submit"
            >Valider</button>
        </form>
      </div>
    )
}

export default AddComment;