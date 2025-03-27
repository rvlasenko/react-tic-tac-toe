import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import Game from "./components/Game/Game"
import { store } from "./store"
import { ReduxRenderer } from "./redux-manager"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReduxRenderer store={store}>
      <Game />
    </ReduxRenderer>
  </StrictMode>
)
