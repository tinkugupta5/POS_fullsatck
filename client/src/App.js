
import './App.css';
import 'antd/dist/antd.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Homepage from './componets/pages/Homepage';
import ItemPage from './componets/pages/ItemPage';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/items" element={<ItemPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
