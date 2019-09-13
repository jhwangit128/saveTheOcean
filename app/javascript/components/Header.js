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
        <h1 onClick={() =>
          {this.props.handleView('index')}}>
            SAVE THE<br/>OCEAN
        </h1>
        <div>
          <Button className="tips-btn" variant="contained" color="primary" onClick={() =>
            {this.props.handleView('index')

          }}>Home</Button>
          <Button className="add-tip-btn" variant="contained" color="primary" onClick={() =>
            {this.props.handleView('addTip')}}>
            Add a Tip
          </Button>
        </div>
      </header>
    )
  }
}


  // ++++++++++++++++++++++++++++++++++++
  // EXPORT
  // ++++++++++++++++++++++++++++++++++++
  export default Header
