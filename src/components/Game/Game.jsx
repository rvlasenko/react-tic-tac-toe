import { restartGame } from "../../actions"
import { useDispatch } from "react-redux"
import GameLayout from "./GameLayout"

export default function Game() {
  const dispatch = useDispatch()

  const handleRestart = () => {
    dispatch(restartGame())
  }

  return <GameLayout handleRestart={handleRestart} />
}
