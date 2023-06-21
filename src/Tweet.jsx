export function Tweet({id,nom,content,like,onDelete,onLike}){
    const handleLike = (id)=>{
        onLike(id);
    }
    return <div className="tweet">
        <button className="delete" onClick={()=>onDelete(id)}>❌</button>
        <h3>{nom}</h3>
        <p>{content}</p>
        <p>Like:{like}</p>
        <button onClick={()=>handleLike(id)}>LIKE❣️</button>
    </div>
}