import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <div className="smiley__container">
        <Link to="/smileylist"><button className="btn__add">+</button></Link>
        <ul className="smiley__list">
          {data.map(item => 
            <li>{item.currentMood}</li>)}
        </ul>
      </div>
    )
  }
}

export default Home;