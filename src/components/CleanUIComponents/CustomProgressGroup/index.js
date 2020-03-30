import React from 'react'
import { Progress } from 'antd'
import { progressGroup } from './data.json'

class ProgressGroup extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-3">
          <strong>{progressGroup.first.name}</strong>
          <p className="text-muted mb-1">{progressGroup.first.description}</p>
          <div className="mb-3">
            <Progress percent={progressGroup.first.progress} type="circle" status={progressGroup.first.status} />
          </div>
        </div>
        <div className="col-lg-3">
          <strong>{progressGroup.second.name}</strong>
          <p className="text-muted mb-1">{progressGroup.second.description}</p>
          <div className="mb-3">
            <Progress percent={progressGroup.second.progress} type="circle" status={progressGroup.second.status} />
          </div>
        </div>
        <div className="col-lg-3">
          <strong>{progressGroup.third.name}</strong>
          <p className="text-muted mb-1">{progressGroup.third.description}</p>
          <div className="mb-3">
            <Progress percent={progressGroup.third.progress} type="circle" status={progressGroup.third.status} />
          </div>
        </div>
        <div className="col-lg-3">
          <strong>{progressGroup.fourth.name}</strong>
          <p className="text-muted mb-1">{progressGroup.fourth.description}</p>
          <div className="mb-3">
            <Progress percent={progressGroup.fourth.progress} type="circle" status={progressGroup.fourth.status} />
          </div>
        </div>
      </div>
    )
  }
}
export default ProgressGroup
