import React from 'react'

const Card = ({ name, icon }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-name">{name}</div>
      </div>
      <div className="card-image">
        <figure className="image">
          <img src={icon} alt={name} width='75'/>
        </figure>
      </div>
    </div>
  )
}
export default Card
