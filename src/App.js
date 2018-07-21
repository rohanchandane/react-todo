import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      remainingCount: 0,
      item: '',
      list: []
    }
    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleItemSubmit = this.handleItemSubmit.bind(this);
  }

  handleItemChange(event) {
    this.setState({item: event.target.value});
  }

  handleItemSubmit(event) {
    event.preventDefault();
    let item = { isDone: false, name: this.state.item }
    let remainingCount = this.state.remainingCount;
    remainingCount++;

    this.setState({
      remainingCount: remainingCount,
      item: '',
      list: [...this.state.list, item]
    });
    event.target.reset();
  }

  render() {
    return (
      <div>
        <h2> Todo List </h2>
        <form onSubmit={ this.handleItemSubmit }>
          <input type="text" name="item" onChange={ this.handleItemChange }/>
          <button type="submit" disabled={ this.state.item === '' }>Add</button>
        </form>
        <div>{ this.state.remainingCount } remaining out of { this.state.list.length } tasks</div>
        <ul>
          {this.state.list.map((task, index) => {
            this.handleToggleClass = () => {

              let data = this.state.list;
              data[index].isDone = !data[index].isDone;
              
              let remainignList = [];
              if(data.length) {
                remainignList = data.filter(task => !task.isDone);
              }

              this.setState({
                remainingCount: remainignList.length,
                list: data
              });
            }
            return <li key={ index } className={task.isDone ? 'is-done':''} onClick={ this.handleToggleClass }> {task.name} </li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;