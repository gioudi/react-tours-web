import React from 'react'
import Title from './Title'
import Service from './Service'
import { services } from '../data'
const Services = () => {
  return (
    <section className="section" id="services">
     <Title title='Our' subTitle='services'/>
      <div className="is-flex is-justify-content-space-between">
        {
          services.map((service)=>{
            return(
              <Service
               key={service.id}
               title={service.title}
               description={service.description}
               icon={service.icon}
              />
            )
          })
        }
      </div>
    </section>
  )
}

export default Services