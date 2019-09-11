// ++++++++++++++++++++++++++++++++++++
// DEPENDENCIES
// ++++++++++++++++++++++++++++++++++++
// packages & components
import React from 'react'

// ++++++++++++++++++++++++++++++++++++
// COMPONENET CLASS
// ++++++++++++++++++++++++++++++++++++
class Tip extends React.Component {
  // ++++++++++++
  // RENDER
  // ++++++++++++
  render () {
    return (
      <article>
         <div className="tip-header">
            <img src={this.props.tip.image} alt="" />
            <h1>{this.props.tip.username}</h1>
         </div>
         <div className="post-body">
            {this.props.tip.body}
         </div>
         <div className="post-options">
            <ul>
               <li onClick={() =>
                  {this.props.handleView('editTip', this.props.tip)}}>
                  edit tip</li>
               <li onClick={() =>
                  {this.props.handleDelete(this.props.tip.id)
               }}>delete tip</li>
            </ul>
         </div>
      </article>
    )
  }
}

// ++++++++++++++++++++++++++++++++++++
// EXPORT
// ++++++++++++++++++++++++++++++++++++
export default Tip
