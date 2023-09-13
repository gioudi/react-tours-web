import React from 'react'
import Title from './Title'
import Service from './Service'
import { services } from '../data'
const Services = () => {
  return (
    <section className="section services" id="services">
     <Title title='our' subTitle='services'/>
      <div className="section-center services-center">
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