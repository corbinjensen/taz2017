import React from 'react'

import Plan from '../docs/MenTazPlan2017f.pdf'
import Release from '../docs/MenTAZrelease2017.pdf'

class Documents extends React.Component {
  render(){
    return (
    <section className="Documents wrapper">
      <h2>Read First</h2>
      <ol className="wrapper">
        <li><a href={Plan}>Plan</a></li>
        <li><a href={Release}>Release</a></li>
      </ol>
    </section>
    )
  }
}

export default Documents
