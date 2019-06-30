import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      date: "",
      mood: ""
    }

    this.getData = this.getData.bind(this);
    this.getDate = this.getDate.bind(this);
    this.getMood = this.getMood.bind(this);
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
  
  getData() {
    this.setState(prevState => {
      const newData = [...prevState.data, {currentDate : this.state.date, currentMood: this.state.mood}]
      return {data: newData};
    })
  }

  render() {
    return (
      <div className="App">

        <div className="smiley__container">
          <button className="btn__add">+</button>
        </div>

        <div className="input__container">

          <div className="date__container">
            <label htmlFor="date">Fecha </label>
            <input type="text" name="date" id="date" onChange={this.getDate}/>
          </div>

          <div className="state__container">
            <label htmlFor="state">Estado </label>

            <input type="checkbox" name="checkbox" id="happy" value=":)" onClick={this.getMood}/>
            <label htmlFor="happy">:)</label>

            <input type="checkbox" name="checkbox" id="sad" value=":(" onClick={this.getMood}/>
            <label htmlFor="sad">:(</label>
          </div>

          <div className="buttons">
            <button className="btn__save" onClick={this.getData}>guardar</button>
            <button className="btn__cancel">cancelar</button>
          </div>

        </div>

      </div>
      


    )
  }
}

export default App;
