import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import BodyComponent from './components/Body';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import ResMenu from './components/RestaurantMenu.js';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import FooterComponenet from './components/Footer';

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <FooterComponenet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <BodyComponent />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurant/:resID',
        element: <ResMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
