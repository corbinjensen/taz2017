import React from 'react'

import Plan from '../docs/MenTazPlan2017f.pdf'
import SignUp from '../docs/MenTaz2017SignupDocB.docx'
import Release from '../docs/MenTAZrelease2017.pdf'

class Documents extends React.Component {
  render(){
    return (
      <ol className="wrapper">
        <li><a href={Plan}>Plan</a></li>
        <li><a href={SignUp}>Sign Up</a></li>
        <li><a href={Release}>Release</a></li>
      </ol>
    )
  }
}

export default Documents
