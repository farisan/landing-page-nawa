
import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/home/Home';
import MainLayout from './components/MainLayout';

const Router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
    ]
  }
]);

export default Router