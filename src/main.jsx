import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import Game from "./components/Game/Game"
import { store } from "./store"
import { Provider } from "react-redux"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Game />
    </Provider>
  </StrictMode>
)
