import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import KioskPage from './routes/KioskPage';
import ErrorPage from './routes/ErrorPage';
import AdminPage from './routes/AdminPage';
import TestPage from './routes/TestPage';
import { CssBaseline } from '@mui/material';

const router = createBrowserRouter([
  {
    path: "/",
    element: <KioskPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "admin",
    element: <AdminPage />
  },
  {
    path: "test",
    element: <TestPage />
  }
]);

function App() {

  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  )
}

export default App
