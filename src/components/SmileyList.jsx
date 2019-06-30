import React from 'react';
import { Link } from 'react-router-dom';

class SmileyList extends React.Component {
  render() {
    const { getDate, getMood, getData, mood } = this.props;

    return (
      <div className="input__container">

        <div className="date__container">
          <label htmlFor="date">Fecha </label>
          <input type="text" name="date" id="date" onChange={getDate} />
        </div>

        <div className="state__container">
          <label htmlFor="state">Estado </label>

          <input type="checkbox" name="checkbox" id="happy" value=":)" onClick={getMood} />
          <label htmlFor="happy">:)</label>

          <input type="checkbox" name="checkbox" id="sad" value=":(" onClick={getMood} />
          <label htmlFor="sad">:(</label>
        </div>

        {mood === ":)" ?
          <div className="message__container">

            <label htmlFor="message">Mensaje </label>

            <textarea name="message" id="message" cols="30" rows="10"></textarea>
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