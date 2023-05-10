const Home = () => {
    const handleClick = (e) =>{
        console.log('Hello Cosmos', e);
    }

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
    }
    return (  
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => {
                handleClickAgain('Cosmin',e);
            }}>Click me again</button>
        </div>
    );
}
 
export default Home;