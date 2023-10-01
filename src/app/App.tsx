import { AppRouter } from "@/app/router/AppRouter.tsx";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
  )
}

export default App
