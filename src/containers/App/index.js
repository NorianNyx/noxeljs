import React, { Component } from 'react'

import Header from '../../components/Header'

class App extends Component {
	render() {
		return (
      <div className="App">
        <Header />
        <div className="container-fluid">
          <div className="row">
            <h1 className="App-title">Welcome to React</h1>
            <p className="App-intro">
              To get started, edit <code>../src/App.js</code> and save to reload.
            </p>
          </div>
        </div>
			</div>
		)
	}
}

export default App
