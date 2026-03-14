// importing { RouterProvider } for using router  
import { RouterProvider } from "react-router"
import router from './app.routes.jsx';
// importing global scss file
import './features/shared/global.scss';

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
