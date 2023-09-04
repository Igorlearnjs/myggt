import './App.css';
import Header from './components/Header.jsx';
import Navigation from "./components/Navigation";
import Content from "./components/Content";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navigation/>
            <Content/>
        </div>
    );
}

export default App;