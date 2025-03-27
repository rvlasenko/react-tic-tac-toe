export const ACTION_TYPE = {
  SET_FIELD: "SET_FIELD",
  SET_IS_GAME_ENDED: "SET_IS_GAME_ENDED",
  SET_IS_DRAW: "SET_IS_DRAW",
  SET_CURRENT_PLAYER: "SET_CURRENT_PLAYER",
  RESTART_GAME: "RESTART_GAME",
}

export const setField = (payload) => ({
  type: "SET_FIELD",
  payload,
})

export const setIsGameEnded = (payload) => ({
  type: "SET_IS_GAME_ENDED",
  payload,
})

export const setIsDraw = (payload) => ({
  type: "SET_IS_DRAW",
  payload,
})

export const setCurrentPlayer = (payload) => ({
  type: "SET_CURRENT_PLAYER",
  payload,
})

export const restartGame = () => ({
  type: "RESTART_GAME",
})
