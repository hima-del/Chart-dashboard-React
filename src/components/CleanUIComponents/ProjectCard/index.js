import React from 'react'
import ChartistGraph from 'react-chartist'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'
import styles from './style.module.scss'

class ProjectCard extends React.Component {
  state = {
    icon: '',
    name: '',
    number: '',
    type: '',
    sum: '',
    footer: '',
  }

  componentWillMount() {
    this.getParams()
  }

  getParams = () => {
    const params = this.props
    this.setState({
      ...params,
    })
  }

  render() {
    const horizontalData = {
      labels: ['Projected', 'Actual'],
      series: [[5], [3]],
    }
    const horizontalOptions = {
      seriesBarDistance: 10,
      reverseData: !0,
      horizontalBars: !0,
      axisY: {
        offset: 10,
      },
      plugins: [ChartistTooltip({ anchorToPoint: false, appendToBody: true, seriesName: false })],
    }
    const { icon, name, number, type, footer, sum } = this.state
    const inStyles = {
      left: {
        float: 'left',
        textAlign: 'left',
      },
    }
    return (
      <a href="javascript: void(0);" className={`card card--withShadow ${styles.paymentCard}`}>
        {sum && <span className={styles.sum}>{sum}</span>}
        {icon && (
          <div className={styles.icon}>
            <i className={icon} />
          </div>
        )}
        {name && (
          <span className={styles.name} style={inStyles.left}>
            {name}
            <div className={styles.circleY}>&nbsp;</div>
          </span>
        )}
        {footer && (
          <div className={styles.number} style={inStyles.left}>
            Vendor :
          </div>
        )}
        {number && (
          <span className={styles.type} style={inStyles.left}>
            Spend <ChartistGraph type="Bar" data={horizontalData} options={horizontalOptions} />
          </span>
        )}
        {type && (
          <span className={styles.type} style={inStyles.left}>
            Benefit <ChartistGraph type="Bar" data={horizontalData} options={horizontalOptions} />
          </span>
        )}
      </a>
    )
  }
}

export default ProjectCard
