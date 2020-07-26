import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Inputlist from './InputList';


function App() {
  const [isModule, setModule] = useState(false);

  return (
    <div className="container">
      <div className="row">
              <div className="col-sm-8">
                <h3>Inventory Management</h3>
              </div>
              <br />
              <div className="col-sm-4">
                    <button onClick={() => setModule({isModule:true})}>Add Module</button>
              </div>

              {isModule ? (<Inputlist /> ) : ''}
      </div>
    </div>
  );
}

export default App;
