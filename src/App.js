import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Addcourse from './component/Addcourse';

import Heading from './component/Heading';
import { BrowserRouter,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     


      <BrowserRouter >
      <Heading/>
      <Route path="/" exact component={Addcourse} />
      <Route path="/viewcourse" exact component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
