import './App.css';
import Header from './components/Header.jsx';
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navigation/>
            <Profile/>
        </div>
    );
}

export default App;