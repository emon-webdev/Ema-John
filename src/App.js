import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Products from './components/Products/Products';
import Shop from './components/Shop/Shop';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        { path: '', element: <Shop /> },
        {path:'/home', element:<Home/>},
        {path:'/shop', element:<Shop/>},
        { path: '/products', element: <Products /> },


        
      ]
    },
    {path:'*', element: <NotFound/>}
  ]);



  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
