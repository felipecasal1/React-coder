import "./HomeRoute.css"
import { Link } from "react-router-dom";

const HomeRoute = () => {
    return (
        <section>

            <div className="container">

                <h1 className="h1">iPhone 16 pro</h1>
                <p className="text">Hello, Apple Intelligence</p>
                <div className="container-a">
                    <Link to={"/category/celulares"}><a className="a-learn">Learn More</a></Link>
                    <a className="a-buy">Buy</a>
                </div>

            </div>

            <div className="container-second-img">

                <h1 className="h1">iPhone 16 pro</h1>
                <p className="text">Hello, Apple Intelligence</p>
                <div className="container-a">
                    <a className="a-learn">Learn More</a>
                    <a className="a-buy">Buy</a>
                </div>

            </div>
        </section>
    )
}

export default HomeRoute;