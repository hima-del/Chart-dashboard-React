import React from 'react'
import styles from './style.module.scss'

class BudgetInfo extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.infoRow}>
          <span className={styles.infoName}>Total budget</span>
          <span className={styles.infoValue}>$52,000</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoName}>Remaining</span>
          <span className={styles.infoValue}>$8,370</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoName}>Currently</span>
          <span className={styles.infoValue}>
            <span>8.1%</span>
            <span>Over Target</span>
          </span>
        </div>
      </div>
    )
  }
}

export default BudgetInfo
