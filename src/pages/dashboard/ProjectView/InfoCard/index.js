import React from 'react'
import styles from './style.module.scss'

class InfoCard extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h5 className={styles.title}>Projected Launch Date</h5>
        <div className={styles.date}>
          <i className="font-size-36 text-center icmn-calendar" />
          <strong className="font-size-24 text-center">107 Days</strong>
        </div>
        <span className={styles.desc}>Friday, December 15</span>
      </div>
    )
  }
}

export default InfoCard
