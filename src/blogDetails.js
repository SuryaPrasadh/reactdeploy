import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
const {id} = useParams();
const {data:blogs,error,pending} = useFetch("http://localhost:3001/blog/" + id);
const history = useHistory();

const handleDelete = () =>{
        fetch("http://localhost:3001/blog/" + id,{
            method:"DELETE",
           }).then(()=>{
                history.push("/");
           })
}

    return ( 
        <div className="blog-detail">

          {pending && <div>Loading...</div>}
          {error && <div>{ error }</div>}
          {blogs && (
              <article>
                  <h1>{ blogs.title }</h1>
                  <p>Written by { blogs.author }</p>
                  <div>{ blogs.body }</div>
                  <button onClick={handleDelete}>delete</button>
              </article>
          )}

        </div>
     );
}
 
export default BlogDetails;