import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

function sort(arr, key) {
  for(let i=0; i<arr.length; i++) {
    for(let j=0; j<arr.length-i-1; j++) {
      if(arr[j][key] < arr[j+1][key]) {
        let tmp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = tmp;
      }
    }
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    // this.myClick = this.myClick.bind(this);
    this.state = {
      libraries: [
        {name:'React', votes:0},
        {name:'Vue', votes:0},
        {name: 'Angular', votes:0},
        {name: 'Ember', votes:0}
      ]
    }
  }
  myClick(i , amt)  {
    console.log(i);
    let temp = [...this.state.libraries];
    temp[i].votes +=amt;
    sort(temp, 'votes');
    this.setState ({libraries: temp});
  }
    render (){
      return (
        <>
        <h1>Vote Your JS Library!</h1>
        <table border="2" align="center" width="500px;" height="500px;">
          <tbody>
            <tr>
              <th>JS Library Name</th>
              <th># of Votes</th>
              <th>Vote</th>
            </tr>
            {
              this.state.libraries.map( (item, i) =>
              <tr key = {i}>
                <td>{item.name}</td>
                <td>{item.votes}</td>
                <td>
                  <button onClick={this.myClick.bind(this, i, 1)}>+</button>
                </td>
              </tr>)
            }
          </tbody>
        </table>
        </>
      );
    }
  }

export default App;
