import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import axios from 'axios'

class BrandsIndex extends React.Component {
  constructor() {
    super()
    this.state = { brands: [] }
  }
  componentDidMount() {
    axios.get('http://localhost:4000/api/brands/')
      .then(res => this.setState({brands: res.data}))
  }
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.brands.map(brand =>
              <div
                key={brand.id}
                className="column is-half-tablet is-one-quarter-desktop"
              >
                <Link to={`/brands/${brand.id}`}>
                  <Card
                    name={brand.name}
                    icon={brand.icon} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}
export default BrandsIndex
