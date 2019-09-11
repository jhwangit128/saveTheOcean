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
      .then(jData => {
        this.setState({ tips: jData })
      })
  }

  handleCreate = (createTip) => {
    fetch('/tips', {
      body: JSON.stringify(createTip),
      method: 'Post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(createdTip => {
        return createdTip.json()
      })
      .then(jsonedTip => {
        this.setState(prevState => {
          prevState.tips.push(jsonedTip)
          return { tips: prevState.tips }
        })
      })
      .catch(err => console.log(err))
  }

  handleUpdate = (updateTip) => {
    fetch(`tips/${updatedTip.id}`, {
      body: JSON.stringify(updateTip),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(updatedTip => {
        this.props.handleView('index')
        this.fetchTips()
      })
      .catch(err => console.log(err))
  }

  handleDelete = (id) => {
    fetch(`tips/${id}`, {
      method:
    })

  }
}
