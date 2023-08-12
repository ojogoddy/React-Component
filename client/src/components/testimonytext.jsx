import Testimonial from "./testimonial";
import star from "../assets/icon-star.svg"
import "./all.css"

const Testimonytext = () => {
    return (
        <div>
            <center className="testimonial1">
                <h1>TESTIMONIAL</h1>
                <h2>Meet Our Client</h2>
            </center>
            <div className="testimonytext">
       <div className="testimony-card">
       <Testimonial
        star = {star}
        title = "Reliable Power Supply "
        comment = "All I need to get started is a smile, a bright day, and the power cube to enjoy uninterrupted power supply throughout my work hours."
        name = "Samuel Akintola"
      />
       </div>
       <div className="testimony-card">
       <Testimonial
        star = {star}
        title = "Reliable Power "
        comment = "All I need to get started is a smile, a bright day, and the power cube to enjoy uninterrupted power supply throughout my work hours."
        name = "Samuel Akintola"
      />
       </div>
       <div className="testimony-card">
       <Testimonial
        star = {star}
        title = "Fantastic and Reliable "
        comment = "I do not have to worry about energy to complete assignments or light up my room at night since I started using the powerCube."
        name = "Odinaka Glory"
      />
       </div>
        
        </div>
        </div>
    )
}
export default Testimonytext