// ++++++++++++++++++++++++++++++++++++
// DEPENDENCIES
// ++++++++++++++++++++++++++++++++++++
// packages & components
import React from 'react'
import CountUp from 'react-countup'

// ++++++++++++++++++++++++++++++++++++
// COMPONENET CLASS
// ++++++++++++++++++++++++++++++++++++
class TextDiaper extends React.Component {
  // ++++++++++++
  // RENDER
  // ++++++++++++
  render () {
    return (
      <div className="text-diaper">
        IN THE US &nbsp;
        <CountUp className="number" delay={1} end={27400000000}>
        </CountUp>
        <br />DISPOSABLES DIAPERS<br />THROWN AWAY EVERY YEAR
      </div>
    )
  }
}

export default TextDiaper
