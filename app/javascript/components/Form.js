// ++++++++++++++++++++++++++++++++++++
// DEPENDENCIES
// ++++++++++++++++++++++++++++++++++++
// packages & components
import React from 'react'

// ++++++++++++++++++++++++++++++++++++
// COMPONENET CLASS
// ++++++++++++++++++++++++++++++++++++
class Form extends React.Component {
  // ++++++++++++
  // STATE
  // ++++++++++++
  constructor() {
    super()
    this.state = {
      title: '',
      username: '',
      image: '',
      body: '',
      id: null
    }
  }

  // ++++++++++++
  // HANDLERS
  // ++++++++++++
  handleChange = (e) => {
    this.setState({})
  }
}
