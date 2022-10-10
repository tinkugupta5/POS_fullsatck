
import './App.css';
import 'antd/dist/antd.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Homepage from './componets/pages/Homepage';
import ItemPage from './componets/pages/ItemPage';
import CartPage from './componets/pages/CartPage';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/items" element={<ItemPage/>} />
        <Route path="/cart" element={<CartPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
