import FieldLayout from "./FieldLayout"

export default function Field(props) {
  const {
    currentPlayer,
    setCurrentPlayer,
    isGameEnded,
    setIsGameEnded,
    setIsDraw,
    field,
    setField,
  } = props

  const handleSquareClick = (index) => {
    if (field[index] || isGameEnded) {
      return
    }

    const newField = [...field]
    newField[index] = currentPlayer
    setField(newField)

    const winner = calculateWinner(newField)
    if (winner) {
      setIsGameEnded(true)
      return
    }

    if (newField.every((cell) => cell)) {
      setIsDraw(true)
      setIsGameEnded(true)
      return
    }

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
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
