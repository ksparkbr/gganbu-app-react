import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import CheckSession from './component/Modal/CheckSession';
import Login from './page/Login/Login';
import Main from './page/Main/Main';
import { reduxStore } from './redux/redux-store';

function App() {
  return (
    <Provider store={reduxStore}>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<CheckSession referer='/' ok={<Navigate to='/main' />} />} />
          <Route path = "/login" element={<Login />} />
          <Route path = "/main/*" element={<CheckSession ok ={<Main />} />} />
        </Routes>
      </BrowserRouter>
      
    </Provider>
  );
}

export default App;
