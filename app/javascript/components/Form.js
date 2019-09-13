// ++++++++++++++++++++++++++++++++++++
// DEPENDENCIES
// ++++++++++++++++++++++++++++++++++++
// packages & components
import React from 'react';

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
      id: null
    }
  }

  // ++++++++++++
  // HANDLERS
  // ++++++++++++
  handleChange = (event) => {
    if (event.target){
      this.setState({[event.target.id] : event.target.value})
    } else {
      this.setState({body: event})
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.checkFields()){
      const submit = {
        title: this.state.title,
        username: this.state.username,
        image: this.state.image,
        id: this.state.id
      }
    if(this.props.view.page === 'addTip') {
      this.props.handleAdd(submit)
    } else if(this.props.view.page === 'editTip') {
      this.props.handleUpdate(submit)
    }
    this.setState({
      title: "",
      username: "",
      image:"",
      id: null
    })
  } else {
    alert("Please don't leave any fields empty!")
  }
}
  checkFields = () => {
  if (this.state.title && this.state.username && this.state.image){
    return true
  } else {
    return false
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
      id: this.props.formInputs.id
     })
  }

  componentDidUpdate(prevProps) {
    if(this.props.formInputs.title !== prevProps.formInputs.title) {
      this.setState({
        title: this.props.formInputs.title,
        username: this.props.formInputs.username,
        image: this.props.formInputs.image,
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
        <label>
          title
          <input type="text" placeholder="title" id="title" value={this.state.title} onChange={this.handleChange}/>
        </label>
        <label>
          username
          <input type="text" placeholder="username" id="username" value={this.state.username} onChange={this.handleChange}/>
        </label>
        <label>
          image
          <input type="text" placeholder="image" id="image" value={this.state.image} onChange={this.handleChange}/>
        </label><br /><br />
        <input type="submit" value="Submit" />
      </form>
      </div>
    )
  }
}
  // ++++++++++++++++++++++++++++++++++++
  // EXPORT
  // ++++++++++++++++++++++++++++++++++++
  export default Form
