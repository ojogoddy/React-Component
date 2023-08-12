import "./all.css"
import avatar from "../assets/avatar.ico"

const Bookauthor = () => {
    return (
        <div className="bookauthor">
            <h2>(PDF) Simplified JavaScript for Very Important Programmers</h2>
            <div className="bookauthor-name">
                <img src={avatar} />
                <p>Ebenezer Don</p>
            </div>
            <div className="bookauthor-bottom">
                <div>
                    <h2>7,000</h2>
                    <h5>13,000</h5>
                </div>
                <button>Buy Now</button>
            </div>
        </div>
    )
}
export default Bookauthor