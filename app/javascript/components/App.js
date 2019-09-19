// ++++++++++++++++++++++++++++++++++++
// DEPENDENCIES
// ++++++++++++++++++++++++++++++++++++
// packages & components
import React from 'react'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import Drag from './Drag.js'
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
        pageTitle: "Our Ocean is in trouble"
      },
      formInputs: {
        title: null,
        username: null,
        image: null,
        description: null,
        img: null,
        id: null
      },
      thisTip: {
        title: null,
        username: null,
        image: null,
        description: null,
        img: null,
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
      description: '',
      img: null,
      id: null
    }
    let thisTip = {
      title: '',
      username: '',
      image: '',
      description: '',
      img: '',
      id: null
    }

    switch (view) {
      case 'index':
        pageTitle = "Our Ocean is in trouble"
        break
      case 'show':
        pageTitle = "How Can We Avoid Plastic & Reduce Plastic Waste?"
        thisTip = {
          title: tip.title,
          username: tip.username,
          image: tip.image,
          description: tip.description,
          img: tip.img,
          id: tip.id
        }
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
          img: tip.img,
          description: tip.description,
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
      formInputs: formInputs,
      thisTip: thisTip
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
            thisTip={this.state.thisTip}
          />
          <Drag/>
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
