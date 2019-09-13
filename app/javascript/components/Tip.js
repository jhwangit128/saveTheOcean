// ++++++++++++++++++++++++++++++++++++
// DEPENDENCIES
// ++++++++++++++++++++++++++++++++++++
// packages & components
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// ++++++++++++++++++++++++++++++++++++
// COMPONENET CLASS
// ++++++++++++++++++++++++++++++++++++
class Tip extends React.Component {
  // ++++++++++++
  // RENDER
  // ++++++++++++
  render () {


    return (
      <div className="card-container">
        <Card className="card" style={{maxWidth: 345}}>
          <CardActionArea>
            <CardMedia
              style={{height: 240}}
              image={this.props.tip.image}
              title={this.props.tip.username}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.tip.title}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
                 <Button size="small" color="primary" onClick={() =>
                    {this.props.handleView('editTip', this.props.tip)}}>
                    edit tip</Button>
                 <Button size="small" color="primary" onClick={() =>
                    {this.props.handleDelete(this.props.tip.id)
                 }}>delete tip</Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}

// ++++++++++++++++++++++++++++++++++++
// EXPORT
// ++++++++++++++++++++++++++++++++++++
export default Tip
