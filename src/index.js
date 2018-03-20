import React from 'react'
import ReactDOM from 'react-dom'

// function Cartoon(props){
//   return <h1>Hello, {props.name}</h1>
// }

class Cartoon extends React.Component{
  render(){
    return <h1>Hello, {this.props.name}</h1>
  }
}
  ReactDOM.render(
      <Cartoon name='pikachu'/>,
      document.getElementById('root')
  );
