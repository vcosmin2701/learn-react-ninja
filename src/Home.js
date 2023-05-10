import { useState } from "react";

const Home = () => {
    const [name, setName] = useState('cosmin');
    const [age, setAge] = useState('22');

    const handleClick = () =>{
        setName('luigi');
        setAge('100');
    }

    return (  
        <div className="home">
            <h2>Home Page</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
 
export default Home;