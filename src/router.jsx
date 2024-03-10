import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import ForumPage from "./pages/ForumPage";
import AskPage from "./pages/AskPage";
import ProtectedRoute from "./etc/ProtectedRoute";
import UserPage from "./pages/UserPage";
import QuestionPage from "./pages/QuestionPage";

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    element:<ProtectedRoute> <Layout /> </ProtectedRoute>,
    children: [
      {
        path: '/',
        element:<ProtectedRoute> <HomePage /> </ProtectedRoute>
      },
      {
        path: '/user',
        element:<ProtectedRoute> <UserPage /> </ProtectedRoute>
      },
      {
        path: '/forum',
        element: <ProtectedRoute> <ForumPage /> </ProtectedRoute>
      },
      {
        path: '/ask',
        element: <ProtectedRoute> <AskPage /> </ProtectedRoute>
      },
      {
        path: '/question/:id',
        element: <ProtectedRoute> <QuestionPage /> </ProtectedRoute>
      }
    ]
  }
])

export default router;