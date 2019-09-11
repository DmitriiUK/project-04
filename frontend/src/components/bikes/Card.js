import React from 'react'

const Card = ({ brand, title, year, image, country, fuelconsumption, torque, dryweight, seatheight}) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="Card-Brand-Title">
            <h1>{brand} - {title}</h1>
          </div>
          <div>
            <img src={image} alt={title}/>
          </div>
          <div>
            <p>Model Year - {year}</p>
            <p>Country - {country}</p>
          </div>
        </div>
        <div className="flip-card-back">
          <div className="bike-specs-content">
            <div className="content-wrapper">
              <h2 className="specs-prewiev-title">Specs</h2>
              <div className="specs-prewiev-table">
                <div>
                  <p className="specs-prewiev-name">FUEL CONSUMPTION: {fuelconsumption}</p>
                </div>
                <div>
                  <p className="specs-prewiev-name">ENGINE TORQUE: {torque}</p>
                </div>
                <div>
                  <p className="specs-prewiev-name">DRY WEIGHT: {dryweight}</p>
                </div>
                <div>
                  <p className="specs-prewiev-name">SEAT HEIGHT: {seatheight}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card
