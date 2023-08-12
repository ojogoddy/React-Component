import Key from "./key"
import icon1 from "../assets/twitter.png"
import icon2 from "../assets/location.png"

const Key2 = () => {
    return (
        <div className="key2">
            <center>
            <h1>KEY DIFFERENTIATOR</h1>
            <h2>Meet the feature of product</h2>
            </center>
            <Key
            icon={icon1}
            titles = "Clean"
            comments = "The Powercube offers clean energy source that elminates carbon footprints associated with fossil fuels."
            />
            <Key
            icon={icon2}
            titles = "Affordable"
            comments = "The PowerCube provides equitable access to energy at affordable price."
            />
            <Key
            icon={icon1}
            titles = "Reliable"
            comments = "The Powercube is reliable, durable and has long lifespan on a single charge."
            />
            <Key
            icon={icon2}
            titles = "Monitoring"
            comments = "Our new energy management module offers users unique way to monitor and track their daily power consumption."
            />

        </div>
    )
}

export default Key2