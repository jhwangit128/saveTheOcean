// ++++++++++++++++++++++++++++++++++++
// DEPENDENCIES
// ++++++++++++++++++++++++++++++++++++
// packages & components
import React from 'react'
import Tip from './Tip.js'
import Form from './Form.js'

// ++++++++++++++++++++++++++++++++++++
// COMPONENET CLASS
// ++++++++++++++++++++++++++++++++++++
class Main extends React.Component {
  // ++++++++++++
  // STATE
  // ++++++++++++
  contructor(props) {
    super(props)
    this.state = {
      tips: []
    }
  }

  // ++++++++++++
  // HANDLERS
  // ++++++++++++
  fetchTips = () => {
    fetch('/tips')
      .then(data => data.json())

  }
}
