import { restartGame } from "../../actions"
import { useDispatch } from "../../redux-manager"
import GameLayout from "./GameLayout"

export default function Game() {
  const dispatch = useDispatch()

  const handleRestart = () => {
    dispatch(restartGame())
  }

  return <GameLayout handleRestart={handleRestart} />
}
