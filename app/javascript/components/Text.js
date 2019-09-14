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
      <div className="text">
        WORLD WIDE, OVER&nbsp;<br />
        <CountUp className="number" delay={1} end={500000000000}>
          {/*{({ countUpRef, start }) => (
            <div>
              <span ref={countUpRef} />
              <button onClick={start}>Start</button>
            </div>
          )}*/}
        </CountUp><br />
        &nbsp;PLASTIC BOTTLES USED EVERY YEAR
      </div>
    )
  }
}

export default Text
