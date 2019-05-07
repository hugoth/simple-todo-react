import React, { Component } from "react";
import "../index.css";
import Spot from "./Spot";
import Input from "./Input";
import axios from "axios";

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
    console.log(this.state.listSpot);
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

    axios
      .post("https://todo-server-hth.herokuapp.com/create", {
        title: this.state.spot.title,
        isDone: false
      })
      .then(function(response) {
        console.log(response.data.message);
        this.setState({ message: response.data.message });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  handleDoneSpot = (id, index) => {
    axios
      .post("https://todo-server-hth.herokuapp.com/update", {
        id: id
      })
      .then(function(response) {
        console.log(response.data.message);
      })
      .catch(function(error) {
        console.log(error);
      });

    const { listSpot } = this.state;
    const newList = [...listSpot];
    newList[index] = { ...newList[index] };
    newList[index].isDone = !newList[index].isDone;
    this.setState({ listSpot: newList });
  };

  handleDelete = selectedSpot => {
    const id = selectedSpot._id;
    axios
      .post("https://todo-server-hth.herokuapp.com/delete", {
        id: id
      })
      .then(function(response) {
        console.log(response.data.message);
      })
      .catch(function(error) {
        console.log(error);
      });

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
        <h1>La To-Do list de Chloé</h1>
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
        {this.state.message}
      </div>
    );
  }
  async componentDidMount() {
    const response = await axios.get("https://todo-server-hth.herokuapp.com/");
    const spots = response.data;
    this.setState({
      listSpot: spots
    });
  }
}

export default TodoList;
