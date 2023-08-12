import "./all.css"

const Testimonial = ({name, title, comment, star}) => {
    return (
        <div className="testimonial-card">
            <div>
            <img src={star}/>
            <img src={star}/>
            <img src={star}/>
            <img src={star}/>
            </div>
            <h2>{title} </h2>
            <p>{comment} </p>
            <h2>{name} </h2>
        </div>
    )
}

export default Testimonial