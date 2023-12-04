import ItemCard from "../components/ItemCard";
import Nav from "../components/Nav";
import blogdata from "./../data/blogdata";
import {v4 as uuidv4} from 'uuid'
import './Blog.scss'

const Blog = () => {
    return ( 
        <>
            <section className="gallery_wrapper">
                {blogdata.map((item) => <ItemCard 
                key={uuidv4()}
                id={item.id}
                title={item.title}
                img_url={item.img_url}
                description={item.description}/> 
                )}
            </section>
        </>
    );
};

export default Blog;