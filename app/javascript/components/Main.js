// ++++++++++++++++++++++++++++++++++++
// DEPENDENCIES
// ++++++++++++++++++++++++++++++++++++
// packages & components
import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import Button from '@material-ui/core/Button';
import Show from './Show.js'
import Tip from './Tip.js'
import Image from './Image.js'
import Form from './Form.js'
import DragBottle from './DragBottle.js'
import Text from './Text.js'
import DragBag from './DragBag.js'
import TextBag from './TextBag.js'
import TextEmpty from './TextEmpty.js'


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
      isToggleOn: true,
      isToggle: true,
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

  handleClick = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  onClick = () => {
    this.setState(state => ({
      isToggle: !state.isToggle
    }));
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
      <div className="menu">
      <div className="logo">
        <h1 onClick={() =>
          {this.props.handleView('index')}}>
            SAVE THE<br/>OCEAN
        </h1>
      </div>
      <a href='#section1'> INFOGRAPHIC </a>
      <a href='#section2'> IMAGES </a>
      <a href='#section3'> TIPS </a>
      <Button className="tips-btn" variant="contained" color="primary" onClick={() =>
        {this.props.handleView('index')

      }}>Home</Button>
      <Button className="add-tip-btn" variant="contained" color="primary" onClick={() =>
        {this.props.handleView('addTip')}}>
        Add a Tip
      </Button>
      </div>
        <div className="main-contents">

          <ScrollableAnchor id={'section1'}>
            <div className="infographic-section">
              <div className="bottle-text-container">
                <div onClick={this.handleClick} className="bottles">
                  {this.state.isToggleOn ? <TextEmpty /> : <Text /> }
                </div>
              </div>
              <div className="bag-text-container">
                <div onClick={this.onClick} className="bags">
                  {this.state.isToggle ? <TextEmpty /> : <TextBag /> }
                </div>
              </div>
              <div className="brush-text-container">
                <div onClick={this.onClick} className="brushes">
                  {this.state.isToggle ? <TextEmpty /> : <TextBag /> }
                </div>
              </div>
            </div>
          </ScrollableAnchor>
          <ScrollableAnchor id={'section2'}>
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
          </ScrollableAnchor>
          <ScrollableAnchor id={'section3'}>
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
          </ScrollableAnchor>
        </div>
      </main>
    )
  }
}

// ++++++++++++++++++++++++++++++++++++
// EXPORT
// ++++++++++++++++++++++++++++++++++++
export default Main
