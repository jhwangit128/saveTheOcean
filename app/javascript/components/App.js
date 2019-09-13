// ++++++++++++++++++++++++++++++++++++
// DEPENDENCIES
// ++++++++++++++++++++++++++++++++++++
// packages & components
import React from 'react'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import Button from '@material-ui/core/Button';

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
      id: null
    }

    switch (view) {
      case 'index':
        pageTitle = "Let's save the ocean"
        break
      case 'showTips':
        pageTitle = "Tips"
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
        <Header handleView={this.handleView}/>
        <div className="main-container">
          <Main
            view={this.state.view}
            handleView={this.handleView}
            formInputs={this.state.formInputs}
          />
        </div>
        <Footer />
      </div>
    )
  }
}

// ++++++++++++++++++++++++++++++++++++
// EXPORT
// ++++++++++++++++++++++++++++++++++++
export default App
