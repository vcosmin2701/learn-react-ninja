import { useState } from "react";

const Home = () => {
    const [blogs,setBlogs] = useState([
        {title: 'My new website', body:'lorem ipsum...', author: 'mario', id:1},
        {title: 'ITP Accepted Internship Journey', body:'lorem ipsum...', author: 'mili', id:2},
        {title: 'ITP Accepted Internship Journey', body:'lorem ipsum...', author: 'cosmo', id:3}
    ]);

    return (  
        <div className="home">
            {
                blogs.map((blog) => (
                    <div className="blog-preview">
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </div>
                ))
            } 
        </div>
    );
}
 
export default Home;