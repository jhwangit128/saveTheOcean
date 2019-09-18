// ++++++++++++++++++++++++++++++++++++
// DEPENDENCIES
// ++++++++++++++++++++++++++++++++++++
// packages & components
import React from 'react'
import Draggable from 'react-draggable'
// ++++++++++++++++++++++++++++++++++++
// COMPONENET CLASS
// ++++++++++++++++++++++++++++++++++++
class Drag extends React.Component {

  state = {
      activeDrags: 0,
      deltaPosition: {
        x: 0, y: 0
      },
      controlledPosition: {
        x: -400, y: 200
      }
    };

    handleDrag = (e, ui) => {
      const {x, y} = this.state.deltaPosition;
      this.setState({
        deltaPosition: {
          x: x + ui.deltaX,
          y: y + ui.deltaY,
        }
      });
    };

    onStart = () => {
      this.setState({activeDrags: ++this.state.activeDrags});
    };

    onStop = () => {
      this.setState({activeDrags: --this.state.activeDrags});
    };

    // For controlled component
    adjustXPos = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const {x, y} = this.state.controlledPosition;
      this.setState({controlledPosition: {x: x - 10, y}});
    };

    adjustYPos = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const {controlledPosition} = this.state;
      const {x, y} = controlledPosition;
      this.setState({controlledPosition: {x, y: y - 10}});
    };

    onControlledDrag = (e, position) => {
      const {x, y} = position;
      this.setState({controlledPosition: {x, y}});
    };

    onControlledDragStop = (e, position) => {
      this.onControlledDrag(e, position);
      this.onStop();
    };

    render() {
      const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
      const {deltaPosition, controlledPosition} = this.state;
      return (
        <div className="garbages-container">
          <Draggable {...dragHandlers}>
            <div className="bottle"></div>
          </Draggable>
          <Draggable {...dragHandlers}>
            <div className="bag"></div>
          </Draggable>
          <Draggable {...dragHandlers}>
            <div className="bottle"></div>
          </Draggable>
          <Draggable {...dragHandlers}>
            <div className="bottle"></div>
          </Draggable>
          <Draggable {...dragHandlers}>
            <div className="bag"></div>
          </Draggable>
          <Draggable {...dragHandlers}>
            <div className="bottle"></div>
          </Draggable>
          <Draggable {...dragHandlers}>
            <div className="diaper"></div>
          </Draggable>
          <Draggable {...dragHandlers}>
            <div className="straw"></div>
          </Draggable>
          <Draggable {...dragHandlers}>
            <div className="razor"></div>
          </Draggable>
          <Draggable {...dragHandlers}>
            <div className="gum"></div>
          </Draggable>
          <Draggable {...dragHandlers}>
            <div className="smoke"></div>
          </Draggable>
          <Draggable {...dragHandlers}>
            <div className="toothbrush"></div>
          </Draggable>
          <Draggable {...dragHandlers}>
            <div className="bottle"></div>
          </Draggable>
          <Draggable {...dragHandlers}>
            <div className="bottle"></div>
          </Draggable>
          <Draggable {...dragHandlers}>
            <div className="bottle"></div>
          </Draggable>
          <Draggable {...dragHandlers}>
            <div className="bottle"></div>
          </Draggable>
          <Draggable {...dragHandlers}>
            <div className="bottle"></div>
          </Draggable>
          <Draggable {...dragHandlers}>
            <div className="diaper"></div>
          </Draggable><Draggable {...dragHandlers}>
            <div className="diaper"></div>
          </Draggable>
          <Draggable {...dragHandlers}>
            <div className="razor"></div>
          </Draggable>
          <Draggable {...dragHandlers}>
            <div className="toothbrush"></div>
          </Draggable>
          <Draggable {...dragHandlers}>
            <div className="straw"></div>
          </Draggable>
        </div>
      );
    }
  }




export default Drag
