// ++++++++++++++++++++++++++++++++++++
// DEPENDENCIES
// ++++++++++++++++++++++++++++++++++++
// packages & components
import React from 'react'
import CountUp from 'react-countup'
import Show from './Show.js'
import Tip from './Tip.js'
import Form from './Form.js'
import Drag from './Drag.js'

// ++++++++++++++++++++++++++++++++++++
// COMPONENET CLASS
// ++++++++++++++++++++++++++++++++++++
class Main extends React.Component {
  // ++++++++++++
  // STATE
  // ++++++++++++
  constructor(props) {
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

  addTip = (tip) => {
    fetch('/tips', {
      body: JSON.stringify(tip),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(createdTip => {
        return createdTip.json()
      })
      .then(jsonedTip => {
        console.log(tip);
        this.props.handleView('index')
        this.setState(prevState => {
          prevState.tips.push(jsonedTip)
          return { tips: prevState.tips }
        })
      })
      .catch(err => console.log(err))
  }

  updateTip = (tip) => {
    fetch(`tips/${tip.id}`, {
      body: JSON.stringify(tip),
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

  deleteTip = (id) => {
    fetch(`tips/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(data => {
        this.setState(prevState => {
          const tips = prevState.tips.filter( tip => tip.id !== id)
          console.log(tips)
          return { tips }
        })
      })
      .catch(err => console.log(err))
  }


  // ++++++++++++++
  // LIFE CYCLES
  // ++++++++++++++
  componentDidMount() {
    this.fetchTips()
  }

  // ++++++++++++
  // RENDER
  // ++++++++++++
  render () {
    const child = { width: `300em`, height: `100%`}
    return (
      <main>
        <div className="main-contents">
          {/*<h1>{this.props.view.pageTitle}</h1>*/}
          <div className="info-text">
            WORLD WIDE
            <CountUp start={0} end={500000000000}>
              {({ countUpRef, start }) => (
                <div>
                  <span ref={countUpRef} />
                  <button onClick={start}>Start</button>
                </div>
              )}
            </CountUp>
            <Drag />
          </div>
          <div className="images-container">

          </div>
          <div className="cards-form">
            { this.props.view.page === 'index'
              ? this.state.tips.map(tip => (

                <Tip
                  key={tip.id}
                  tip={tip}
                  handleView={this.props.handleView}
                  handleDelete={this.deleteTip}

                />
              ))
              : <Form
                  handleAdd={this.addTip}
                  handleUpdate={this.updateTip}
                  formInputs={this.props.formInputs}
                  view={this.props.view}
                />
            }
          </div>
        </div>
      </main>
    )
  }

}

// ++++++++++++++++++++++++++++++++++++
// EXPORT
// ++++++++++++++++++++++++++++++++++++
export default Main
