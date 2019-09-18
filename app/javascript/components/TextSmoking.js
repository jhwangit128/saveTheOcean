// ++++++++++++++++++++++++++++++++++++
// DEPENDENCIES
// ++++++++++++++++++++++++++++++++++++
// packages & components
import React from 'react'
import CountUp from 'react-countup'

// ++++++++++++++++++++++++++++++++++++
// COMPONENET CLASS
// ++++++++++++++++++++++++++++++++++++
class TextSmoking extends React.Component {
  // ++++++++++++
  // RENDER
  // ++++++++++++
  render () {
    return (
      <div className="text-smoke">
        IN 2018, OVER<br />
        <CountUp className="number" delay={1} end={2400000}>
        </CountUp>
        &nbsp;CIGARETTE FILTERS<br /> FOUND ON INTERNATIONAL<br /> COASTAL CLEANUP DAY
      </div>
    )
  }
}

export default TextSmoking
