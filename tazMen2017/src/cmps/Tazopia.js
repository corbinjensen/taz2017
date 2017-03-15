import React from 'react'

import TazLogo from '../img/tazopia.png'

class Tazopia extends React.Component {
  render(){
    return (
      <img
      src={TazLogo}
      className="TazLogo"
      alt="tazopia logo"
      />
    )
  }
}

export default Tazopia