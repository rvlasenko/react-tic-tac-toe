import PropTypes from "prop-types"
import styles from "./Information.module.css"

export default function InformationLayout(props) {
  const { status } = props

  return (
    <div className={styles.statusBar}>
      <span className={styles.status}>{status}</span>
    </div>
  )
}

InformationLayout.propTypes = {
  status: PropTypes.string.isRequired,
}
