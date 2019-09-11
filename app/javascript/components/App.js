// ++++++++++++++++++++++++++++++++++++
// DEPENDENCIES
// ++++++++++++++++++++++++++++++++++++
// packages & components
import React from 'react'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Main.js'

// ++++++++++++++++++++++++++++++++++++
// COMPONENET CLASS
// ++++++++++++++++++++++++++++++++++++
class App extends React.Component {
  // ++++++++++++
  // STATE
  // ++++++++++++
  constructor(props) {
    super(props)
    this.state = {
      view: {
        page: 'index',
        pageTitle: "Let's save the ocean"
      },
      formInputs: {
        title: null,
        username: null,
        image: null,
        body: null,
        id: null
      }
    }
  }

  // ++++++++++++
  // HANDLERS
  // ++++++++++++
  handleView = (view, tip) => {
    let pageTitle = ''
    let formInputs = {
      title: '',
      username: '',
      image: '',
      body: '',
      id: null
    }

    switch (view) {
      case 'index':
        pageTitle = "Let's save the ocean"
        break
      case 'addTip':
        pageTitle = 'Add a Tip'
        break
      case 'editTip':
        pageTitle = 'Edit a Tip'
        formInputs = {
          title: tip.title,
          username: tip.username,
          image: tip.image,
          body: tip.body,
          id: tip.id
        }
        break
      default:
        break
    }
    this.setState({
      view: {
        page: view,
        pageTitle: pageTitle
      },
      formInputs : formInputs
    })
  }

  // ++++++++++++
  // RENDER
  // ++++++++++++
  render () {
    return (
      <div className="container">
        <Header/>
        <div className="main-container">
          <Main
            view={this.state.view}
            handleView={this.handleView}
            formInputs={this.state.formInputs}
          />
        </div>
      </div>
    )
  }
}

// ++++++++++++++++++++++++++++++++++++
// EXPORT
// ++++++++++++++++++++++++++++++++++++
export default App
