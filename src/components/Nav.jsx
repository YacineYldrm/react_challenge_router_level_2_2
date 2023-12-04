import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return ( 
        <nav>
            <h1>MyBlog</h1>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/blog">Blog</NavLink>
            </div>
        </nav>
     );
}
 
export default Nav;
