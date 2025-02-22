import PropTypes from "prop-types"
import InformationLayout from "./InformationLayout"

export default function Information(props) {
  const { isDraw, isGameEnded, currentPlayer } = props

  let status = isDraw && "Draw"

  if (!isDraw && isGameEnded) {
    status = `Winner: ${currentPlayer}`
  }

  if (!isDraw && !isGameEnded) {
    status = `Next player: ${currentPlayer}`
  }

  return <InformationLayout status={status} />
}

Information.propTypes = {
  isDraw: PropTypes.bool.isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  currentPlayer: PropTypes.string.isRequired,
}
