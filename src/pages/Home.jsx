import { NavLink } from "react-router-dom";
import Nav from "../components/Nav";
import Header from "../components/Header";

const Home = () => {
    return ( 
        <div>
            <main>
                <h2>Welcome to my simple Blog</h2>
                <NavLink to="/blog">Blog</NavLink>
            </main>
        </div>
    );
}

export default Home;