import React from "react"
import ReactDOM from "react-dom"
import Header from './components/header'
import Main from './components/main'
require('./App.css');

class HealthySleep extends React.Component {
    render() {
        return (
          <React.Fragment>
            <Header/>
            <Main/>
          </React.Fragment>
        )
    }
}

let App = document.getElementById("app");

ReactDOM.render(<HealthySleep name="Healthy Sleep" />, App);
