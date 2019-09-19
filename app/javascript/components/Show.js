// +++++++++++++++++++
// DEPENDENCIES
// +++++++++++++++++++
import React from 'react'
import Button from '@material-ui/core/Button'
// +++++++++++++++++++
// COMPONENT CLASS
// +++++++++++++++++++
class Show extends React.Component {
  // +++++++++++++++++++
  // RENDER
  // +++++++++++++++++++
  render () {
    return (
      <article>
        <div className="show-container">
          <h1>{this.props.view.pageTitle}</h1>
          <div className="show-tip-image">
            <img src={this.props.tip.image}/>
          </div>
          <div className="show-tip-title">
            <h1>
              {this.props.tip.title}
            </h1>
          </div>
          <div className="tip-username">
            <h3>by <span className="username">{this.props.tip.username}</span></h3>
          </div>
          <div className="tip-description">
            <p>{this.props.tip.description}</p>
          </div>
          <div className="tip-buttons">
              <Button variant="outlined" size="small" color="primary" className="edit-btn" onClick={() => {this.props.handleView('editTip', this.props.tip)}}>EDIT TIP</Button>
              <Button variant="outlined" size="small" color="primary" onClick={() => {this.props.handleDelete(this.props.tip.id)}}>DELETE TIP</Button>
          </div>
        </div>
      </article>
    )
  }
}

export default Show
