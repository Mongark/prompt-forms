import {
  useState
} from 'react';

import './App.css'
import Modal from './Modal';

function App() {
  const [show, set_show] = useState(false);

  return (
    <div>
      <button
        style={{ margin: "10px" }}
        onClick={() => set_show(true)}
        >
        Show Modal
      </button>

      <Modal show={show}/>
    </div>
  );
}

export default App
