import "./all.css"

const Tutorial = ({course, title, summary, tutor}) => {
    return (
        <div className="tutorial">
            <div className="tutorial-card">
            <h4>{course}</h4>
            <h3>{title}</h3>
            <p>{summary}</p>
            <h4>{tutor}</h4>
            </div>
        </div>
    )
}

export default Tutorial