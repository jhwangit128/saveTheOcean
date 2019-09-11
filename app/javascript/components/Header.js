// ++++++++++++++++++++++++++++++++++++
// DEPENDENCIES
// ++++++++++++++++++++++++++++++++++++
// packages & components
  import React from 'react'

  // ++++++++++++++++++++++++++++++++++++
  // COMPONENET CLASS
  // ++++++++++++++++++++++++++++++++++++
class Header extends React.Component {
  render () {
    return (
      <header>
        <h1 onClick={() =>
          {this.props.handleView('index')}}>
            Save The Ocean
        </h1>
        <div>
          <button onClick={() =>
            {this.props.handleView('addTip')}}>
            Add a Tip
          </button>
        </div>
      </header>
    )
  }
}


  // ++++++++++++++++++++++++++++++++++++
  // EXPORT
  // ++++++++++++++++++++++++++++++++++++
  export default Header
