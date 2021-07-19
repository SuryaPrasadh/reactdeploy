import { Link } from "react-router-dom";

const BlogList = ({blog,title}) => {
    return ( 
        <div className="blog-list">
            <h1>{ title }</h1>
        {blog.map((helo)=>(
            <div className="preview" key={helo.id}>
                <Link to={`/blog/${helo.id}`}>
           
                    <h1>{helo.title}</h1>
                    <p>{helo.author}</p>
                </Link>
               </div>
        ))}
        </div>
     );
}
 
export default BlogList;