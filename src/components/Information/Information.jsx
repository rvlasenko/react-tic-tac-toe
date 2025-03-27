import InformationLayout from "./InformationLayout"
import { useReduxState } from "../../redux-manager"

export default function Information() {
  const { isDraw, isGameEnded, currentPlayer } = useReduxState()

  let status = isDraw && "Draw"

  if (!isDraw && isGameEnded) {
    status = `Winner: ${currentPlayer}`
  }

  if (!isDraw && !isGameEnded) {
    status = `Next player: ${currentPlayer}`
  }

  return <InformationLayout status={status} />
}
