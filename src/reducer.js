import { ACTION_TYPE } from "./actions"

const initialState = {
  currentPlayer: "X",
  isGameEnded: false,
  isDraw: false,
  field: Array(9).fill(""),
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPE.SET_FIELD:
      return {
        ...state,
        field: payload,
      }
    case ACTION_TYPE.SET_IS_DRAW:
      return {
        ...state,
        isDraw: payload,
      }
    case ACTION_TYPE.SET_IS_GAME_ENDED:
      return {
        ...state,
        isGameEnded: payload,
      }
    case ACTION_TYPE.SET_CURRENT_PLAYER:
      return {
        ...state,
        currentPlayer: payload,
      }
    case ACTION_TYPE.RESTART_GAME:
      return initialState
    default:
      return state
  }
}
