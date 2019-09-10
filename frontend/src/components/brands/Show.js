import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class BrandsShow extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }

  }

  componentDidMount() {
    axios.get(`http://localhost:4000/api/brands/${this.props.match.params.id}/`)
      .then(res => this.setState({ brand: res.data }))

  }



  render() {
    if (!this.state.brand) return null
    return (
      <section className="section">
        <div className="container">
          <div>
            {this.state.brand.name}
            {this.state.brand.country}
            <img src={this.state.brand.icon}/>
          </div>
          <div>

          </div>
        </div>
      </section>
    )
  }
}

export default BrandsShow
