// +++++++++++++++++++
// DEPENDENCIES
// +++++++++++++++++++
import React from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

// +++++++++++++++++++
// COMPONENT CLASS
// +++++++++++++++++++
class Show extends React.Component {
  // +++++++++++++++++++
  // RENDER
  // +++++++++++++++++++
  render () {
    return (
      <Container fixed className="show-container">
        <Container>
          <Grid item xs={12} className="show-tip-image">
              <img src={this.props.tip.image}/>
          </Grid>
          <Grid item xs={12} className="show-tip-title">
            <h1>
              {this.props.tip.title}
            </h1>
          </Grid>
          <Grid item xs={12} className="tip-username">
            <h3>Uploaded by <span>{this.props.tip.username}</span></h3>
          </Grid>
          <Grid item xs={12} className="tip-description">
            <p>{this.props.tip.description}</p>
          </Grid>
          <Grid item xs={3} className="tip-buttons">
              <div className="edit-btn" onClick={() => {this.props.handleView('editTip', this.props.tip)}}>EDIT TIP</div>
          </Grid>
          <Grid item xs={3}>
              <div onClick={() => {this.props.handleDelete(this.props.tip.id)}}>DELETE TIP
            </div>
          </Grid>
        </Container>
      </Container>
    )
  }
}

export default Show
