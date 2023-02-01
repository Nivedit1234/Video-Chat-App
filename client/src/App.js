import { Routes, Route } from 'react-router-dom';
import './App.css';
import { SocketProvider } from './providers/Socket';
import Home from './pages/Home';
function App() {
  return (
    <div className='App'>
      <SocketProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/about' element={<h2>About</h2>} />
        <Route path='/home' element={<h2>Home</h2>} />  */}
        </Routes>
      </SocketProvider>
    </div>
  );
}

export default App;
