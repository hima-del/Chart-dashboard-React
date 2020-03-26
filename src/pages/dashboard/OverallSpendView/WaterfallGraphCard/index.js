import React from 'react'
import canvasjs from 'assets/js/canvasjs.react'

import styles from './style.module.scss'

class WaterfallGraphCard extends React.Component {
  render() {
    const { title, chartData } = this.props
    const { CanvasJSChart } = canvasjs
    return (
      <a
        href="javascript: void(0);"
        className={`card card--withShadow ${styles.waterfallGraphCardCard}`}
      >
        <CanvasJSChart key={Math.random()} options={chartData} />
        {title && <span className={styles.sum}>{title}</span>}
      </a>
    )
  }
}

export default WaterfallGraphCard
