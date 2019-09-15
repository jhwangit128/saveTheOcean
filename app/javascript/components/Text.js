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
      <div>
        <div className="text">
          WORLD WIDE, OVER&nbsp;<br />
          <CountUp className="number" delay={1} end={500000000000}>
          </CountUp><br />
          &nbsp;PLASTIC BOTTLES USED EVERY YEAR
        </div>
        <div className="text-bag">
          WORLD WIDE, UP TO&nbsp;
          <CountUp className="number" delay={1} end={1000000000000}>
          </CountUp>
          &nbsp;PLASTIC BAGS DISCARDED EVERY YEAR
        </div>
        <div className="text-straw">
          IN THE US AND UK, OVER&nbsp;
          <CountUp className="number" delay={1} end={550000000}>
          </CountUp>
          &nbsp;THROWN AWAY EVERY DAY
        </div>
        <div className="text-diaper">
          IN THE US &nbsp;
          <CountUp className="number" delay={1} end={28000000000}>
          </CountUp>
          &nbsp;DISPOSABLES THROWN AWAY EVERY YEAR
        </div>
      </div>
    )
  }
}

export default Text
