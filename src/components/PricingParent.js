import React from 'react'
import pricingData from '../pricing-data'
import Pricing from './Pricing'

const pricingcards = pricingData.map(x => {
    return (
      <Pricing
        key={x.id}
        price={x.title}
        ram={x.ram}
        storage={x.storage}
      />
    )
  })

function PricingParent() {
  return (
    <div className="container pricing py-3">
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 className="display-4 fw-normal text-body-emphasis">Pricing</h1>
        </div>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          {pricingcards}
        </div>
      </div>
  )
}


export default PricingParent
