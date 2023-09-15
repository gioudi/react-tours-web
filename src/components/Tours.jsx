import React from 'react'
import { tours } from '../data'
import Title from './Title'
import Tour from './Tour'
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title='Featured' subTitle='tours'/>
      <div className="columns mt-5">
        {
          tours.map((tour)=> {
            return(
              <Tour key={tour.id} payload={tour}/>
            )
          })
        }
      </div>
  </section>
  )
}

export default Tours