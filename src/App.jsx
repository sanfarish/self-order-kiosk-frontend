import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import KioskPage from './routes/KioskPage';
import ErrorPage from './routes/ErrorPage';
import AdminPage from './routes/AdminPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <KioskPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "admin",
    element: <AdminPage />
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
