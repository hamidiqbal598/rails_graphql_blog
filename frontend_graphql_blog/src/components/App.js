import logo from '../logo.svg';
import React from 'react';
import Users from './Users'
import User from './User'


class App extends React.Component {
  state = { selectedUser: null }
  selectUser = (user) => {
    this.setState({ selectedUser: user })
  }

  render() {
    return(
        <div className="container mx-auto px-4">
          {this.state.selectedUser ?
            <User user={this.state.selectedUser} selectUser={this.selectUser} /> : <Users selectUser={this.selectUser} />
          }
        </div>
    )
  }

}

// function App() {
//   return (
//     <div className="App">
//
//     </div>
//   );
// }

export default App;
