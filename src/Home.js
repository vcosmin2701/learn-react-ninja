import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs,setBlogs] = useState([
        {title: 'My new website', body:'lorem ipsum...', author: 'cosmo', id:1},
        {title: 'ITP Accepted Internship Journey', body:'lorem ipsum...', author: 'mili', id:2},
        {title: 'ITP Accepted Internship Journey', body:'lorem ipsum...', author: 'cosmo', id:3}
    ]);

    return (  
        <div className="home">
            <BlogList blogs={blogs} title="All blogs!"/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'cosmo')} title="Cosmo's blogs"/>
        </div>
    );
}
 
export default Home;