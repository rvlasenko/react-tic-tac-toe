import PropTypes from "prop-types"
import styles from "./Game.module.css"
import Information from "../Information/Information"
import Field from "../Field/Field"

export default function GameLayout(props) {
  const { handleRestart } = props

  return (
    <div className={styles.game}>
      <Information />
      <Field />
      <div className={styles.footerBar}>
        <button className={styles.resetBtn} onClick={handleRestart}>
          Reset
        </button>
      </div>
    </div>
  )
}

GameLayout.propTypes = {
  handleRestart: PropTypes.func.isRequired,
}
