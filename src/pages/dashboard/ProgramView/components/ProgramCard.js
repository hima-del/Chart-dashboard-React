import cn from 'classnames'
import React from 'react'
import ChartistGraph from 'react-chartist'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'
import styles from './style.module.scss'

class ProgramCard extends React.Component {
  render() {
    const { title, healthStatus, npsScore, revenueUplift, costSavings, chartData } = this.props
    const horizontalOptions = {
      seriesBarDistance: 20,
      axisY: {
        labelInterpolationFnc: val => {
          val = val ? `${Math.floor(val / 1000)}k` : val
          return `$${val}`
        },
      },
      plugins: [ChartistTooltip({ anchorToPoint: false, appendToBody: true, seriesName: false })],
    }

    return (
      <div className={cn('card card--withShadow', styles.paymentCard)}>
        <div className={styles.titleContainer}>
          <span className={styles.title}>{title}</span>
          <div className={cn(styles.health, styles[healthStatus])}>&nbsp;</div>
        </div>
        <div className={styles.chartContainer}>
          <ChartistGraph
            className={styles.chart}
            type="Bar"
            style={{ width: '85%', float: 'center' }}
            data={chartData}
            options={horizontalOptions}
          />
        </div>
        <div className={styles.dataContainer}>
          <span className={styles.typeContainer}>
            <div className={styles.type}> NPS Score</div>
            <span
              className={cn(
                styles.type,
                npsScore >= 0 ? styles.positiveValue : styles.negativeValue,
              )}
            >
              {npsScore}%
            </span>
          </span>
          <span className={styles.typeContainer}>
            <div className={styles.type}>Revenue Uplift</div>
            <span
              className={cn(
                styles.value,
                revenueUplift >= 0 ? styles.positiveValue : styles.negativeValue,
              )}
            >
              {revenueUplift} %
            </span>
          </span>
          <span className={styles.typeContainer}>
            <div className={styles.type}>Cost Savings</div>
            <span
              className={cn(
                styles.value,
                costSavings < 0 ? styles.negativeValue : styles.positiveValue,
              )}
            >
              {costSavings} $
            </span>
          </span>
        </div>
      </div>
    )
  }
}

export default ProgramCard
