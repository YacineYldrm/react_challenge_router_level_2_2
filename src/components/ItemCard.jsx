import { Link } from "react-router-dom";


const ItemCard = ({img_url, description, id, title}) => {

    return ( 
        <article>
            <img 
            src={img_url}
            alt={description}/>
            <h3>{title}</h3>
            <p>{description}</p>
            <Link to={`/post/${id}`} >Read more</Link>
        </article>
     );
}
 
export default ItemCard;