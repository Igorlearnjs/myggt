import './App.css';
import openAllMaps from './main.js';

const App = () => {
    return (
        <div>
            <Header/>
            <Technologies/>
            <openAllMaps/>
        </div>
    )
}

const Technologies = () => {
    return (
    <div>
        <ul>
            <li>HTML</li>
            <li>Css</li>
            <li>JavaScript</li>
        </ul>
    </div>
    )
}

const Header =() => {
    return (<div>
        <a href="">Home</a>
        <a href="">News Feed</a>
        <a href="">Messages</a>
    </div>)
}

export default App;
