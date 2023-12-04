import blogData from "../data/blogdata";
import { useParams } from "react-router-dom";

const Post = () => {

    const id = useParams().id;

    const singlePost = blogData.filter((post) => post.id.toString() === id.toString() ? post : null)

    return ( 
        <section>
            <img src={singlePost[0].img_url} alt={`a picture by ${singlePost[0].author}`} />
            <h1>{singlePost[0].title}</h1>
            <p>{singlePost[0].description}</p>
            <p>by {singlePost[0].author}</p>
        </section>
    );
}

export default Post
