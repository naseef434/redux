import Header from "./containers/Header";
import Product from "./containers/Product";
import Products from "./containers/Products";
import NotFound from "./containers/NotFound";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    
      <Header />
      <Routes>
        <Route path="/" element={<Products /> } />
        <Route path="/product" element={<Product /> } />
        <Route path='*' element={<NotFound />} />
        
      </Routes>
  
    </div>
  );
}

export default App;
