import { Routes, Route } from 'react-router';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Pricing from './components/Pricing';
import NotFound from './components/404';
import Catalog from './components/Catalog';
import ProductDetails from './components/ProductDetails';
import IndividualPricing from './components/IndividualPricing';
import BusinesslPricing from './components/BusinessPricing';

function App() {
  return (
    <div className="bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:productId" element={<ProductDetails />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />}>
          <Route index element={<IndividualPricing />} />
          <Route path="business" element={<BusinesslPricing />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
