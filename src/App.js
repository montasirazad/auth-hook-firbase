import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/Shop/Shop';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/shop' element={<PrivateRoute >
            <Shipping />
          </PrivateRoute>} />

          <Route path='/market' element={<PrivateRoute >
            <Shop />
          </PrivateRoute>} />


        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
