function Card({children, id, etat, declineCommentRef, approuveCommentRef}){
    return(
        <div className="card">
            <div className="content">
                {children}
            </div>
            {
                etat === "pending" &&
                    <div className="extra content">
                        <div className="ui two buttons">
                            <div className="ui basic green button" onClick={()=>approuveCommentRef(id)} >Approve</div>
                            <div className="ui basic red button" onClick={()=>declineCommentRef(id)}>Decline</div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Card;