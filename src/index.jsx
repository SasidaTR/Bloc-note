import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <p>How are you?</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
