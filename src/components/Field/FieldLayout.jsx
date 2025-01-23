import styles from "./Field.module.css"

export default function FieldLayout(props) {
  const { handleSquareClick, field } = props

  return (
    <div className={styles.board}>
      {field.map((player, index) => (
        <button
          key={index}
          className={styles.square}
          onClick={() => handleSquareClick(index)}
        >
          {player}
        </button>
      ))}
    </div>
  )
}
