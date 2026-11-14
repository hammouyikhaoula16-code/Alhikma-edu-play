import { useState } from 'react';
import NavBar from './components/NavBar';
import LeftBar from './components/LeftBar';
import HomePage from './pages/HomePage';
import { createBrowserRouter, RouterProvider, Outlet , useLocation } from 'react-router-dom';
import CpPage from './pages/CpPage';
import Ce1Page from './pages/Ce1Page';
import Ce2Page from './pages/Ce2Page';
import Cm1Page from './pages/Cm1Page';
import Cm2Page from './pages/Cm2Page';
import LastPage from './pages/LastPage';
const Layout = () => {
  
  const [activeModule, setActiveModule] = useState('informatique');
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-sky-100 to-indigo-200 font-sans flex flex-col">
      
      <NavBar />

      
      <div className="flex flex-1 container mx-auto px-4 py-6 gap-6 overflow-hidden">
        
        
        {
        location.pathname !== '/' ?
         <LeftBar 
          activeModule={activeModule} 
          onSelectModule={setActiveModule} 
        /> : ''
        }

        
        <main className="flex-1 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 overflow-y-auto border border-white/40">
          
          <Outlet context={{ activeModule }} />
        </main>
      </div>
    </div>
  );
};

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { /*path: "/Home", element: <HomePage /> */},
        { path: "/Cp", element: <CpPage /> },
        { path: "/Ce1", element: <Ce1Page /> },
        { path: "/Ce2", element: <Ce2Page /> },
        { path: "/Cm1", element: <Cm1Page /> },
        { path: "/Cm2", element: <Cm2Page /> },
        { path: "/6eAnnée", element: <LastPage /> },
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}