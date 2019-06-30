import React from 'react';
import { Link } from 'react-router-dom';

class SmileyList extends React.Component {
  render() {
    const { getDate, getMood, getData, mood } = this.props;

    return (
      <div className="calendar__container">

        <div className="input__container">
          <label htmlFor="date">Fecha</label>
          <input type="text" name="date" id="date" placeholder="21/04/2018" onChange={getDate} />
        </div>

        <div className="input__container">
          <label htmlFor="state">Estado</label>
          <div className="checkbox__container">
            <input type="checkbox" className="checkbox" id="happy" value=":)" onClick={getMood} />
            <label htmlFor="happy">:)</label>

            <input type="checkbox" className="checkbox" id="sad" value=":(" onClick={getMood} />
            <label htmlFor="sad">:(</label>
          </div>
        </div>

        {mood === ":)" ?
          <div className="input__container">

            <label htmlFor="message">Mensaje</label>

            <textarea name="message" id="message" cols="30" rows="10" placeholder="¿Por qué es un buen día?"></textarea>
          </div>
          :
          null
        }

        <div className="buttons">
          <Link to="/"><button className="btn__save" onClick={getData}>guardar</button></Link>
          <Link to="/"><button className="btn__cancel">cancelar</button></Link>
        </div>
      </div>
    )
  }
}

export default SmileyList;