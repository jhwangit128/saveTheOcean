// ++++++++++++++++++++++++++++++++++++
// DEPENDENCIES
// ++++++++++++++++++++++++++++++++++++
// packages & components
import React from 'react'
import Button from '@material-ui/core/Button';

  // ++++++++++++++++++++++++++++++++++++
  // COMPONENET CLASS
  // ++++++++++++++++++++++++++++++++++++
class Header extends React.Component {
  render () {
    return (
      <header>
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      </header>
    )
  }
}


  // ++++++++++++++++++++++++++++++++++++
  // EXPORT
  // ++++++++++++++++++++++++++++++++++++
  export default Header
