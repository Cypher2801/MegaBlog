import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {store} from './store/store.js'
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import {Protected} from './components/index.js'
import {Home , AddPost , AllPosts , EditPost , Login , Signup , Post} from './pages/index.js'
const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {
        path : "/",
        element : <Home />
      },
      {
        path : "/login",
        element : (
          <Protected authentication={false}>
            <Login />
          </Protected>
        )
      },
      {
        path : "/signup",
        element : (
          <Protected authentication={false}>
            <Signup />
          </Protected>
        )
      },
      {
        path : "/all-posts",
        element : (
          <Protected authentication>
            <AllPosts />
          </Protected>
        )
      },
      {
        path : "/add-post",
        element : (
          <Protected authentication>
            <AddPost />
          </Protected>
        )
      },
      {
        path : "/edit-post/:slug",
        element : (
          <Protected authentication>
            <EditPost />
          </Protected>
        )
      },
      {
        path : "/post/:slug",
        element : (
          <Protected authentication>
            <Post />
          </Protected>
        )
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider >,
)
