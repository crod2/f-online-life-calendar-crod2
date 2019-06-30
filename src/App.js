import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import SmileyList from './components/SmileyList';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      date: "",
      mood: "", 
      message: ""
    }

    this.getData = this.getData.bind(this);
    this.getDate = this.getDate.bind(this);
    this.getMood = this.getMood.bind(this);
    this.getMessage = this.getMessage.bind(this);

  }

  getDate(event) {
    const inputDate = event.currentTarget.value;
    this.setState({ date: inputDate })
  }

  getMood(event) {
    const inputMood = event.currentTarget;
    if (inputMood.checked) {
      this.setState({ mood: inputMood.value })
    }
  }

  getMessage(event) {
    const inputMessage = event.currentTarget.value;
    this.setState({ message: inputMessage })
  }
  
  getData() {
    this.setState(prevState => {
      const newData = [...prevState.data, { currentDate : this.state.date, currentMood: this.state.mood, currentMessage : this.state.message }]
      return { data: newData };
    })
  }

  render() {
    const { data, mood } = this.state;
    const { getDate, getMood, getData } = this;

    return (
      <div className="App">
        <Switch>
            <Route exact path="/" render = { () => 
            <Home data = {data} />} />
            
            <Route path="/smileylist" render = { () => 
              <SmileyList getDate = {getDate} getMood = {getMood} getData = {getData} mood = {mood} /> } />
        </Switch>
        
      </div>
    )
  }
}

export default App;
