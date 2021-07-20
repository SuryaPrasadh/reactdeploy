import { useState } from "react";
import { useHistory } from "react-router";
const CreateList = () => {

    const [title, settitle] = useState("");
    const [body, setbody] = useState("");
    const [author, setauthor] = useState("mario");
    const [pending, setpending] = useState(false);
    const history =useHistory();

  const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = { title,body,author };

        setpending(true);

        fetch("https://jsonplaceholder.typicode.com/posts/",{
            method:'POST',
            headers:{"content-type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            setpending(false);
            console.log("new blog added")
            // history.go(-1);
            history.push("/");
        });
    }


    return (
        <div className="create">
            <h1>Add New Blog</h1>

            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                type="text"
                required
                value={title} 
                onChange={(e)=>settitle(e.target.value)}
                ></input>

                <label>Blog Body:</label>
                <textarea required
                value={body} onChange={(e)=>setbody(e.target.value)}/>

                <label>Blog author:</label>
                <select value={author} onChange={(e)=>setauthor(e.target.value)}>
                    <option value="mario">MARIO</option>
                    <option value="supermario">SUPER MARIO</option>
                </select>
               { !pending && <button>Add Blog</button> }
               { pending && <button disabled>Adding Blog....</button> }
            </form>
            

        </div>
      );
}
 
export default CreateList;
