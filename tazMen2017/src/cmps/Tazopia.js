import React from 'react'

import TazLogo from '../img/TazopiaLogo200xAI.svg'

class Tazopia extends React.Component {
  render(){
    return (
      <img
        src={TazLogo}
        className="TazLogo wrapper"
        alt="tazopia logo"
      />
    )
  }
}

export default Tazopia
