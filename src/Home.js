import BlogList from './blogList';
import useFetch from './useFetch';


const Home = () => {
 
    const {data:blog,pending,error} = useFetch("https://jsonplaceholder.typicode.com/posts");
   
    
   
    
    
   
    return ( 
        <div className="home">
       
        {error && <div>{error}</div>}
        {pending && <div>Loading...</div>}
       {blog && <BlogList blog={blog} title="BlogList" />}
       
      
        </div>
     );
}
 
export default Home;
