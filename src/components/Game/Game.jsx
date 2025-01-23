import { useState } from "react"
import GameLayout from "./GameLayout"

export default function Game() {
  const [currentPlayer, setCurrentPlayer] = useState("X")
  const [isGameEnded, setIsGameEnded] = useState(false)
  const [isDraw, setIsDraw] = useState(false)
  const [field, setField] = useState(Array(9).fill(""))

  const handleReset = () => {
    setField(Array(9).fill(""))
    setIsGameEnded(false)
    setIsDraw(false)
    setCurrentPlayer("X")
  }

  return (
    <GameLayout
      currentPlayer={currentPlayer}
      setCurrentPlayer={setCurrentPlayer}
      isGameEnded={isGameEnded}
      setIsGameEnded={setIsGameEnded}
      isDraw={isDraw}
      setIsDraw={setIsDraw}
      field={field}
      setField={setField}
      handleReset={handleReset}
    />
  )
}
