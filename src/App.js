import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      date: [],
      smiley: []
    }
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
            <input type="text" name="date" id="date"/>
          </div>

          <div className="state__container">
            <label htmlFor="state">Estado </label>

            <input type="checkbox" name="checkbox" id="happy" value=":)"/>
            <label htmlFor="happy">:)</label>

            <input type="checkbox" name="checkbox" id="sad" value=":("/>
            <label htmlFor="sad">:(</label>
          </div>

          <div className="buttons">
            <button className="btn__save">guardar</button>
            <button className="btn__cancel">cancelar</button>
          </div>

        </div>

      </div>
      


    )
  }
}

export default App;
