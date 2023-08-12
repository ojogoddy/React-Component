import "./all.css"

const Key = ({icon, titles, comments}) => {
    return (
        <div className="key">
           <center>
           <div className="key-gap">
            <img src={icon}/>
            </div>
            <h2>{titles} </h2>
            <p>{comments} </p>
           </center>
        </div>
    )
}

export default Key