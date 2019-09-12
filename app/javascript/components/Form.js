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
      body: '',
      id: null
    }
  }

  // ++++++++++++
  // HANDLERS
  // ++++++++++++
  handleChange = (e) => {
    this.setState({[e.target.id] : e.target.value})
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
      body: this.props.formInputs.body,
      id: this.props.formInputs.id
     })
  }

  componentDidUpdate(prevProps) {
    if(this.props.formInputs.title !== prevProps.formInputs.title) {
      this.setState({
        title: this.props.formInputs.title,
        username: this.props.formInputs.username,
        image: this.props.formInputs.image,
        body: this.props.formInputs.body,
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
      <form onSubmit={this.handleSubmit}>
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
        </label>
        <label>
          body
          <textarea placeholder="tip" id="body" value={this.state.body} onChange={this.handleChange}></textarea>
        </label>
        <input type="submit" value="submit"/>
      </form>
      </div>
    )
  }
}
  // ++++++++++++++++++++++++++++++++++++
  // EXPORT
  // ++++++++++++++++++++++++++++++++++++
  export default Form
