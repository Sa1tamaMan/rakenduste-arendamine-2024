import './App.css';
import Contact from './Components/Contact';
import Hobbies from './Components/Hobbies';
import Name from './Components/Name';

function App() {
  return (
    <div className="app-container">
      <div className="component">
        <Name />
      </div>
      <div className="component">
        <Hobbies />
      </div>
      <div className="component">
        <Contact />
      </div>
    </div>
    
  );
}

export default App;
