import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

//component creation

export default class App extends Component {

  //to creat the state we need the constructor

  constructor() {
    super(); // react to extend the component and retain this inside constructor
    this.state = {
      name: 'virat',
      hundreds: 25
    }

    autoBind(this, 'updateName', 'increment', 'decrement'); // automatically bind this for all methods. we mentio the method name to bind 'this' specifically
  }

  componentDidMount() { // this lifecyle used to embed other framework or to handle ajax request
    console.log('component mounted')
  }

  updateName(e) {//default method in react. setState is method and we need to pass the object as argument. It wont mutate and create as new reference.    
    this.setState({ 
      name: e.target.value
    })
  }

  increment() {
    this.setState({
      hundreds: this.state.hundreds + 1
    })
  }

  decrement() {
    this.setState({
      hundreds: this.state.hundreds - 1
    })
  }

  render() {

    const 
      name = this.props.name,
      age = this.props.age;

    // to make onChange event work we need to use arrow function or use bind. Other option is auto bind from react
    return (
      <div>
        <h1>My app name is {name}</h1>
        <h1>My app age is {age}</h1>

        <h3>Player name is: {this.state.name}</h3>
        <h3>ODI hundreds: {this.state.hundreds}</h3>

        <input onChange={this.updateName}/>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )    
  }
}

//check type of props

App.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}

App.defaultProps = {
  age: 10
}

//stateless component creation

/*const App = function() {
  return (
    <div>
      <h1>stateless Component</h1>
    </div>
  )
}

export default App;*/

