import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="smiley__container">
        <Link to="/smileylist"><button className="btn__add">+</button></Link>
      </div>
    )
  }
}

export default Home;