// +++++++++++++++++++
// DEPENDENCIES
// +++++++++++++++++++
import React from 'react'

// +++++++++++++++++++
// COMPONENT CLASS
// +++++++++++++++++++
class Show extends React.Component {
  // +++++++++++++++++++
  // RENDER
  // +++++++++++++++++++
  render () {
    return (
      <article className="show-article">
        <div className="show-tip-image">
          <img src={this.props.tip.image}/>
        </div><br />
        <div className="show-tip-title">
          <h1>
            {this.props.tip.title}
          </h1>
        </div>
        <div className="tip-username">
          <h3>Uploaded by <span>{this.props.tip.username}</span></h3>
        </div><br />
        <div className="tip-description">
          <p>{this.props.tip.description}</p>
        </div><br />
        <div className="tip-buttons">
          <ul>
            <li className="edit-btn" onClick={() => {this.props.handleView('editTip', this.props.tip)}}>EDIT TIP</li>
            <li onClick={() => {this.props.handleDelete(this.props.tip.id)}}>DELETE TIP</li>
          </ul>
        </div>
      </article>
    )
  }
}

export default Show
