// ++++++++++++++++++++++++++++++++++++
// DEPENDENCIES
// ++++++++++++++++++++++++++++++++++++
// packages & components
import React from 'react'
import Show from './Show.js'
import Tip from './Tip.js'
import Image from './Image.js'
import Form from './Form.js'
import DragBottle from './DragBottle.js'
import DragBag from './DragBag.js'
import Text from './Text.js'
import TextBag from './TextBag.js'
// ++++++++++++++++++++++++++++++++++++
// COMPONENET CLASS
// ++++++++++++++++++++++++++++++++++++
class Main extends React.Component {
  // ++++++++++++
  // STATE
  // ++++++++++++
  constructor(props) {
    super(props);
    this.state = {
      tips: [],
      isHovering: false,
    };
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

  handleMouseHover = () => {
    this.setState(this.toggleHoverState)
  }
  toggleHoverState = (state) => {
    return {
      isHovering: !state.isHovering,
    }
  }

  handleDrag = (drag, item) => {

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
          <div className="info-text">
            <div>
              <div className="bottles" onMouseEnter={this.handleMouseHover}
                onMouseLeave={this.handleMouseHover}>
                <DragBottle/>
              </div>
              {this.state.isHovering && <div className="bottle-text"><Text/></div>}
            </div>
            <div>
              <div className="bags"
              onMouseEnter={this.handleMouseHover}
                onMouseLeave={this.handleMouseHover}>
                <DragBag/>
              </div>
              {this.state.isHovering && <div className="bag-text"><TextBag/></div>}
              </div>
          </div>
          <div className="images-container">
            <p>In the ocean, plastic pollution impacts sea turtles, whales, seabirds, fish, coral reefs, and countless other marine species and habitats. In fact, scientists estimate that more than half of the world’s sea turtles and nearly every seabird on Earth have eaten plastic in their lifetimes.
            </p>
            <div className="images">
              {this.state.tips.map(tip => (
                <Image
                  key={tip.id}
                  tip={tip}
                  />
              ))}
            </div>
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
