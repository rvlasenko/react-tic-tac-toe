import { useReduxState, useDispatch } from "../../redux-manager"
import {
  setCurrentPlayer,
  setField,
  setIsDraw,
  setIsGameEnded,
} from "../../actions"
import FieldLayout from "./FieldLayout"

export default function Field() {
  const dispatch = useDispatch()
  const { field, isGameEnded, currentPlayer } = useReduxState()

  const handleSquareClick = (index) => {
    if (field[index] || isGameEnded) {
      return
    }

    const newField = [...field]
    newField[index] = currentPlayer
    dispatch(setField(newField))

    const winner = calculateWinner(newField)
    if (winner) {
      dispatch(setIsGameEnded(true))
      return
    }

    if (newField.every((cell) => cell)) {
      dispatch(setIsDraw(true))
      dispatch(setIsGameEnded(true))
      return
    }

    dispatch(setCurrentPlayer(currentPlayer === "X" ? "O" : "X"))
  }

  const calculateWinner = (field) => {
    const WIN_PATTERNS = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let i = 0; i < WIN_PATTERNS.length; i++) {
      const [a, b, c] = WIN_PATTERNS[i]
      if (field[a] && field[a] === field[b] && field[a] === field[c]) {
        return field[a]
      }
    }

    return null
  }

  return <FieldLayout handleSquareClick={handleSquareClick} field={field} />
}
