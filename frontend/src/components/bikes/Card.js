import React from 'react'

const Card = ({ title, co2emissions, year, image }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-title">{title}</div>
        <h1>{year}</h1>
      </div>
      <div className="card-image">
        <figure className="image">
          <img src={image} alt={title} width='450'/>
        </figure>
      </div>
      <h1>{co2emissions}</h1>
    </div>
  )
}
export default Card
