import { useSelector } from "react-redux"
import InformationLayout from "./InformationLayout"

export default function Information() {
  const { isDraw, isGameEnded, currentPlayer } = useSelector((state) => state)

  let status = isDraw && "Draw"

  if (!isDraw && isGameEnded) {
    status = `Winner: ${currentPlayer}`
  }

  if (!isDraw && !isGameEnded) {
    status = `Next player: ${currentPlayer}`
  }

  return <InformationLayout status={status} />
}
