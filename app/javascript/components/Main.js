// ++++++++++++++++++++++++++++++++++++
// DEPENDENCIES
// ++++++++++++++++++++++++++++++++++++
// packages & components
import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import Button from '@material-ui/core/Button'
import Show from './Show.js'
import Tip from './Tip.js'
import Image from './Image.js'
import Form from './Form.js'
import Drag from './Drag.js'
import Text from './Text.js'
import TextBag from './TextBag.js'
import TextStraw from './TextStraw.js'
import TextBrush from './TextBrush.js'
import TextDiaper from './TextDiaper.js'
import TextRazor from './TextRazor.js'
import TextGum from './TextGum.js'
import TextSmoking from './TextSmoking.js'
import TextEmpty from './TextEmpty.js'

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
      tips: [],
      isToggleBottle: true,
      isToggleBag: true,
      isToggleBrush: true,
      isToggleDiaper: true,
      isToggleStraw: true,
      isToggleGum: true,
      isToggleRazor: true,
      isToggleSmoke: true,
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

  clickBottle = () => {
    this.setState(bottle => ({
      isToggleBottle: !bottle.isToggleBottle
    }));
  }
  clickBag = () => {
    this.setState(bag => ({
      isToggleBag: !bag.isToggleBag
    }));
  }
  clickStraw = () => {
    this.setState(straw => ({
      isToggleStraw: !straw.isToggleStraw
    }));
  }
  clickBrush = () => {
    this.setState(brush => ({
      isToggleBrush: !brush.isToggleBrush
    }));
  }
  clickDiaper = () => {
    this.setState(diaper => ({
      isToggleDiaper: !diaper.isToggleDiaper
    }));
  }
  clickGum = () => {
    this.setState(gum => ({
      isToggleGum: !gum.isToggleGum
    }));
  }
  clickRazor = () => {
    this.setState(razor => ({
      isToggleRazor: !razor.isToggleRazor
    }));
  }
  clickSmoke = () => {
    this.setState(smoke => ({
      isToggleSmoke: !smoke.isToggleSmoke
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
    return (
      <main>
      <div className="menu">
        <div className="logo">
          <h1 onClick={() =>
            {this.props.handleView('index')}}>
              SAVE THE<br/>OCEAN
          </h1>
        </div>
        <div className="section-btn">
          <Button variant="contained" color="primary"><a href='#section1'> INFOGRAPHIC</a></Button>
          <Button variant="contained" color="primary"><a href='#section2'> IMAGES</a></Button>
          <Button variant="contained" color="primary"><a href='#section3'> TIPS</a></Button>
        </div>
        <div className="right-btn">
          <Button className="home-btn" variant="contained" color="primary" onClick={() =>
            {this.props.handleView('index')

          }}>Home</Button>
          <Button className="add-tip-btn" variant="contained" color="primary" onClick={() =>
            {this.props.handleView('addTip')}}><a href='#section3'>
            Add a Tip</a>
          </Button>
        </div>
      </div>
        <div className="main-contents">

          <ScrollableAnchor id={'section1'}>
            <div className="infographic-section">
              <div className="bottle-text-container">
                <div onClick={this.clickBottle} className="bottles">
                  {this.state.isToggleBottle ? <TextEmpty /> : <Text /> }
                </div>
              </div>
              <div className="bag-text-container">
                <div onClick={this.clickBag} className="bags">
                  {this.state.isToggleBag ? <TextEmpty /> : <TextBag /> }
                </div>
              </div>
              <div className="straw-text-container">
                <div onClick={this.clickStraw} className="straws">
                  {this.state.isToggleStraw ? <TextEmpty /> : <TextStraw /> }
                </div>
              </div>
            <div className="brush-text-container">
              <div onClick={this.clickBrush} className="brushes">
                {this.state.isToggleBrush ? <TextEmpty /> : <TextBrush /> }
              </div>
            </div>
            <div className="diaper-text-container">
              <div onClick={this.clickDiaper} className="diapers">
                {this.state.isToggleDiaper ? <TextEmpty /> : <TextDiaper /> }
              </div>
            </div>
            <div className="gum-text-container">
              <div onClick={this.clickGum} className="gums">
                {this.state.isToggleGum ? <TextEmpty /> : <TextGum /> }
              </div>
            </div>
            <div className="razor-text-container">
              <div onClick={this.clickRazor} className="razors">
                {this.state.isToggleRazor ? <TextEmpty /> : <TextRazor /> }
              </div>
            </div>
            <div className="smoke-text-container">
              <div onClick={this.clickSmoke} className="smokes">
                {this.state.isToggleSmoke ? <TextEmpty /> : <TextSmoking /> }
              </div>
            </div>
            <Drag/>
          </div>
          </ScrollableAnchor>
          <ScrollableAnchor id={'section2'}>
          <div className="section2-container">
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
          </div>
          </ScrollableAnchor>
          <ScrollableAnchor id={'section3'}>
            <div className="cards-form-big">
              <div className="cards-form-small">
                {this.props.thisTip.title ?
                  <Show
                    tip={this.props.thisTip}
                    handleDelete={this.deleteTip}
                    handleView={this.props.handleView}
                  />
                : this.props.view.page === 'index'
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
