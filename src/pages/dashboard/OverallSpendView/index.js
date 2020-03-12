import React from 'react'
// import { Helmet } from 'react-helmet'
import Authorize from 'components/LayoutComponents/Authorize'
import { Radar, Pie } from 'react-chartjs-2'

class OverallSpendView extends React.Component {
  render() {
    const radarData = {
      labels: ['Marketing', 'Sales', 'Finance', 'HCM', 'Network', 'P & T', 'CEO Office', 'IT'],
      datasets: [
        {
          label: 'Total Spend',
          backgroundColor: 'rgba(0,255,0,0.2)',
          borderColor: 'rgba(0,255,0,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [78, 59, 90, 81, 23, 55, 20, 50],
        },
      ],
    }

    const radarOptions = {
      scale: {
        reverse: true,
        ticks: {
          beginAtZero: true,
        },
      },
    }

    const pieData = {
      labels: ['red', 'Blue', 'Yellow','red', 'Blue', 'Yellow','red', 'Blue',],
      text:'heiii',
      datasets: [
        {
          data: [500, 50, 100,30,59,98,100,30],
          label:'orange',
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56','red','green','orange','blue'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    }

    const pieOptions = {}
    return (
      <Authorize roles={['admin']} redirect to="/dashboard/beta">
        <div className="col-lg-3" style={{float:'left'}}>
          <h5 className="text-black">
            <strong>Total spend</strong>
          </h5>
          <div className="mb-5">
            <Radar data={radarData} options={radarOptions} width={400} height={400} />
          </div>
        </div>

        <div className="col-lg-9" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',float:'right' }}>
          <div>
            <h5 className="text-black">
              <strong>
                <center>Marketing</center>
              </strong>
            </h5>
            <div className="mb-5">
              <Pie data={pieData} options={pieOptions} width={400} height={200} />
            </div>
          </div>

          <div>
            <h5 className="text-black">
              <strong>
                <center>Sales</center>
              </strong>
            </h5>
            <div className="mb-5">
              <Pie data={pieData} options={pieOptions} width={400} height={200} />
            </div>
          </div>

          <div>
            <h5 className="text-black">
              <strong>
                <center>Finance</center>
              </strong>
            </h5>
            <div className="mb-5">
              <Pie data={pieData} options={pieOptions} width={400} height={200} />
            </div>
          </div>

          <div>
            <h5 className="text-black">
              <strong>
                <center>HCM</center>
              </strong>
            </h5>
            <div className="mb-5">
              <Pie data={pieData} options={pieOptions} width={400} height={200} />
            </div>
          </div>

          <div>
            <h5 className="text-black">
              <strong>
                <center>Network</center>
              </strong>
            </h5>
            <div className="mb-5">
              <Pie data={pieData} options={pieOptions} width={400} height={200} />
            </div>
          </div>

          <div>
            <h5 className="text-black">
              <strong>
                <center>P & T</center>
              </strong>
            </h5>
            <div className="mb-5">
              <Pie data={pieData} options={pieOptions} width={400} height={200} />
            </div>
          </div>

          <div>
            <h5 className="text-black">
              <strong>
                <center>CEO Office</center>
              </strong>
            </h5>
            <div className="mb-5">
              <Pie data={pieData} options={pieOptions} width={400} height={200} />
            </div>
          </div>

          <div>
            <h5 className="text-black">
              <strong>
                <center>IT</center>
              </strong>
            </h5>
            <div className="mb-5">
              <Pie data={pieData} options={pieOptions} width={400} height={200} />
            </div>
          </div>

        </div>
      </Authorize>
    )
  }
}

export default OverallSpendView
