import logo from './logo.svg';
import { Outlet } from "react-router-dom"
const Home = () => {

    return (
        // <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //         Hello world React with Hoi Dan IT
        //     </p>
        //     <a
        //         className="App-link"
        //         href="https://reactjs.org"
        //         target="_blank"
        //         rel="noopener noreferrer"
        //     >
        //         Learn React
        //     </a>
        //     
        // </header>

        <Outlet />


    )
}

export default Home;