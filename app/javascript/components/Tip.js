// ++++++++++++++++++++++++++++++++++++
// DEPENDENCIES
// ++++++++++++++++++++++++++++++++++++
// packages & components
import React from 'react'

// ++++++++++++++++++++++++++++++++++++
// COMPONENET CLASS
// ++++++++++++++++++++++++++++++++++++
class Tip extends React.Component {
  // ++++++++++++
  // RENDER
  // ++++++++++++
  render () {
    return (
      <article>
        <div>
          <h1>{this.props.tip.title}</h1>
        </div>
      </article>
    )
  }
}

// ++++++++++++++++++++++++++++++++++++
// EXPORT
// ++++++++++++++++++++++++++++++++++++
export default Tip
