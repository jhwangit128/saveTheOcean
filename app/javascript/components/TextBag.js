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
      <div className="text-bag">
        WORLD WIDE, UP TO&nbsp;
        <CountUp delay={1} end={1000000000000}>
        </CountUp>
        &nbsp;PLASTIC BAGS DISCARDED EVERY YEAR
      </div>
    )
  }
}

export default Text
