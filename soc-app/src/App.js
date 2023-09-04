import './App.css';
import Technologies from './Technologies.js';
import Header from './Header.js';

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src="https://images.squarespace-cdn.com/content/v1/5be46505aa49a16a3b129522/1541695322945-8PXLVIS6XDKMKHLJOEIZ/Logo-NEW-WHITE.png?format=1500w" alt="Logo" className="logo" />
                <a href="#">Home</a>
            </header>
            <nav className='navigation'>
                <div><a href="#">Profile</a></div>
                <div><a href="#">Messages</a></div>
            </nav>
            <div className='content'>Main content</div>
        </div>
    );
}

export default App;