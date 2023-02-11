import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {
  return (
    <>
  <Navbar title="TextUtils"/>
  <div className="container" my-3>
  {<Textform heading="Enter The Text" my-3/> }
  
  </div>
  <About/>
    </>
  );
}
export default App;