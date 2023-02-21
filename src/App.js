import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MyRoutes from './Routes/routes';

function App() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (

    <BrowserRouter>
      <MyRoutes />
    </BrowserRouter>
  );
}

export default App;
