import './App.css'
import Header from './components/Header'
import Home from './components/Home'

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'Catalog', path: '/catalog' },
  { name: 'About', path: '/about' },
  { name: 'Contacts', path: '/contact' },
]


function App() {

  return (
    <div className="bg-white">
     
        <Header/>
        <Home />             
    </div>
  )
}

export default App
