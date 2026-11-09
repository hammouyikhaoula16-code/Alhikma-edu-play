
import NavBar from './components/NavBar';
import LeftBar from './components/LeftBar';
import HomePage from './pages/HomePage';
import { createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom';
import CpPage from './pages/CpPage';
import Ce1Page from './pages/Ce1Page';
import Ce2Page from './pages/Ce2Page';
import Cm1Page from './pages/Cm1Page';
import Cm2Page from './pages/Cm2Page';

const Layout = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-200 via-sky-100 to-indigo-200 overflow-hidden font-sans pb-16">
      <div className="relative z-10 container mx-auto px-4 pt-6 space-y-6">
        <NavBar />
        <main >
           
          <Outlet />
        </main>
      </div>


    </div>
  )
};
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/Home",
          element: <HomePage />,
        },
        {
          path: "/Cp",
          element: <CpPage />,
        },
        {
          path: "/Ce1",
          element: <Ce1Page />,
        },
        {
          path: "/Ce2",
          element: <Ce2Page />,
        },
        {
          path: "/Cm1",
          element: <Cm1Page />,
        },
        {
          path: "/Cm2",
          element: <Cm2Page />,
        },
        {
          path: "/6eAnnée",
          element: <Cm1Page />,
        },
        {
          path: "/6eAnnée",
          element: <Cm1Page />,
        },


      ]
    }
  ])
  return <RouterProvider router={router} />;
}
