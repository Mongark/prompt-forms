import './App.css'
import Modal from './Modal';

function App() {
  return (
    <div>
      <button
        style={{ margin: "10px" }}
        >
        Show Modal
      </button>

      <Modal show={true}/>
    </div>
  );
}

export default App
