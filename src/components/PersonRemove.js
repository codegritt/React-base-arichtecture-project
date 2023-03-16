import React from 'react';
import axios from 'axios';
import API from '../api';


export default class PersonRemove extends React.Component {
  state = {
    id: ''
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    
    const response =()=>  async (dispatch) => { await API.delete(`users/${this.state.id}`);
    
    console.log(response);
    console.log(response.data);
  }

    axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);

      })
  }

  render() {
    return (

        <>
        
        <h1>(Using axios.delete for API delete)</h1>
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person ID:
            <input type="number" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
        </>

    )
  }
}