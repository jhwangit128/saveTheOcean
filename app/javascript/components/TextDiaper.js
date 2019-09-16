// ++++++++++++++++++++++++++++++++++++
// DEPENDENCIES
// ++++++++++++++++++++++++++++++++++++
// packages & components
import React from 'react'
import CountUp from 'react-countup'

// ++++++++++++++++++++++++++++++++++++
// COMPONENET CLASS
// ++++++++++++++++++++++++++++++++++++
class Text extends React.Component {
  // ++++++++++++
  // RENDER
  // ++++++++++++
  render () {
    return (
      <div className="text-diaper">
        IN THE US &nbsp;
        <CountUp className="number" delay={1} end={28000000000}>
        </CountUp>
        &nbsp;DISPOSABLES THROWN AWAY EVERY YEAR
      </div>
    )
  }
}

export default Text
