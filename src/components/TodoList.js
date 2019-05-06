import React, { Component } from "react";
import "../index.css";
import Spot from "./Spot";
import Input from "./Input";

class TodoList extends Component {
  state = {
    spot: {
      title: "",
      isDone: false
    },
    listSpot: []
  };

  handleTextChange = event => {
    this.setState({ spot: { ...this.state.spot, title: event.target.value } });
  };

  handleAddSpot = e => {
    const { title } = this.state.spot;
    const newTask = {
      title: title,
      Isdone: false,
      key: Date.now()
    };

    this.setState(PrevState => {
      const newList = PrevState.listSpot.push(newTask);
      return newList;
    });

    const newspot = {
      title: ""
    };
    this.setState({ spot: newspot });
  };

  handleDoneSpot = index => {
    console.log(index);
    const { listSpot } = this.state;
    const newList = [...listSpot];
    newList[index] = { ...newList[index] };

    newList[index].isDone = !newList[index].isDone;
    console.log(newList[index].isDone);
    this.setState({ listSpot: newList });
  };

  handleDelete = selectedSpot => {
    // pourquoi ne pas faire de copie fonctionne et faire une copie ne fonctionne pas ?
    const { listSpot } = this.state;
    const newList = listSpot.filter(spot => {
      return spot !== selectedSpot;
    });
    this.setState({ listSpot: newList });
  };

  handleDeleteAllTasks = () => {
    this.setState({ listSpot: [] });
  };

  render() {
    return (
      <div className="container">
        <h1>To-Do list</h1>
        <Spot
          value={this.state.listSpot}
          onClickDone={this.handleDoneSpot}
          onClickDelete={this.handleDelete}
        />

        <Input
          value={this.state.spot.title}
          onChange={this.handleTextChange}
          onSubmit={this.handleAddSpot}
          handleDeleteAllTasks={this.handleDeleteAllTasks}
        />
      </div>
    );
  }
}

export default TodoList;
