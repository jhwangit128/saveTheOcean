// ++++++++++++++++++++++++++++++++++++
// DEPENDENCIES
// ++++++++++++++++++++++++++++++++++++
// packages & components
import React from 'react';
import Button from '@material-ui/core/Button';
import Show from './Show.js';

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
      description: '',
      img: '',
      id: null
    }
  }

  // ++++++++++++
  // HANDLERS
  // ++++++++++++
  handleChange = (e) => {
    if (event.target){
      this.setState({[event.target.id]: event.target.value})
    } else {
      this.setState({body: event})
    }
  }


  handleSubmit = (e) => {
    e.preventDefault()

    if(this.props.view.page === 'addTip') {
      this.props.handleAdd(this.state)
    } else if(this.props.view.page === 'editTip') {
      this.props.handleUpdate(this.state)
    }
  }


  // ++++++++++++++
  // LIFE CYCLES
  // ++++++++++++++
  componentDidMount() {
    this.setState({
      title: this.props.formInputs.title,
      username: this.props.formInputs.username,
      image: this.props.formInputs.image,
      img: this.props.formInputs.img,
      description: this.props.formInputs.description,
      id: this.props.formInputs.id
     })
  }

  componentDidUpdate(prevProps) {
    if(this.props.formInputs.title !== prevProps.formInputs.title) {
      this.setState({
        title: this.props.formInputs.title,
        username: this.props.formInputs.username,
        image: this.props.formInputs.image,
        img: this.props.formInputs.img,
        description: this.props.formInputs.description,
        id: this.props.formInputs.id
      })
    }
  }

  // ++++++++++++
  // RENDER
  // ++++++++++++
  render () {
    return (
      <div className="form-container">
        <form className="form" onSubmit={this.handleSubmit}>
          <h1>
            {this.props.view.page === "addTip"
            ? "Add a tip" : "Edit a tip"}
          </h1>
          <label>TITLE<br/>
            <input type="text" placeholder="title" id="title" value={this.state.title} onChange={this.handleChange}/>
          </label><br /><br />
          <label>USERNAME<br/>
            <input type="text" placeholder="username" id="username" value={this.state.username} onChange={this.handleChange}/>
          </label><br /><br />
          <label>IMAGE<br/>
            <input type="text" placeholder="image" id="image" value={this.state.image} onChange={this.handleChange}/><br /><br />
            </label>
          <label>DESCRIPTION<br/>
            <textarea rows="10" cols="80" placeholder="description" id="description" value={this.state.description} onChange={this.handleChange}>
            </textarea></label><br /><br />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}
  // ++++++++++++++++++++++++++++++++++++
  // EXPORT
  // ++++++++++++++++++++++++++++++++++++
  export default Form
