import PropTypes from "prop-types"
import styles from "./Game.module.css"
import Information from "../Information/Information"
import Field from "../Field/Field"

export default function GameLayout(props) {
  const { handleReset } = props

  return (
    <div className={styles.game}>
      <Information {...props} />
      <Field {...props} />
      <div className={styles.footerBar}>
        <button className={styles.resetBtn} onClick={() => handleReset()}>
          Reset
        </button>
      </div>
    </div>
  )
}

GameLayout.propTypes = {
  handleReset: PropTypes.func.isRequired,
}
