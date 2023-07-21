import React from 'react'
import servicesData from '../services-data'
import Services from './Services'

const services = servicesData.map(x => {
    return (
      <Services
        key={x.id}
        heading={x.title}
        description={x.description}
        image={x.coverImg}
      />
    )
  })

function ServicesParent() {
  return (
    <div className="container">
        <div className=" px-4 py-5 services" id="featured-3">
          <h2 className="pb-2 border-bottom" style={{ textAlign: "center" }}>Our Services</h2>
          <div className="row py-5 g-5 ">
            {services}
          </div>
        </div>
      </div>
  )
}


export default ServicesParent
