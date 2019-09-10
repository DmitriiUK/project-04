import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import axios from 'axios'
import _ from 'lodash'

class BikesIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      bikes: [],
      searchTerm: '',
      sortTerm: 'title|asc'
    }
    this.filterBikes = this.filterBikes.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    axios.get('http://localhost:4000/api/bikes/')
      .then(res => this.setState({bikes: res.data}))
  }

  handleKeyUp(e) {
    this.setState({ searchTerm: e.target.value })
  }

  handleChange(e) {
    this.setState({ sortTerm: e.target.value })
  }

  filterBikes() {
    const re = new RegExp(this.state.searchTerm, 'i')
    const [field, order] = this.state.sortTerm.split('|')

    const filterBikes = _.filter(this.state.bikes, bike => {
      return re.test(bike.title) || re.test(bike.year) || re.test(bike.co2emissions)
    })
    const sortedBikes = _.orderBy(filterBikes, [field], [order])

    return sortedBikes
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="field">
                <input placeholder="search" className="input" onKeyUp={this.handleKeyUp}/>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <div className="select is-fullwidth">
                  <select onChange={this.handleChange}>
                    <option value="title|asc">Name A-Z</option>
                    <option value="title|desc">Name Z-A</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <div className="select is-fullwidth">
                  <select onChange={this.handleChange}>
                    <option value="year|asc">Oldest</option>
                    <option value="year|desc">Newest</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <div className="select is-fullwidth">
                  <select onChange={this.handleChange}>
                    <option value="co2emissions|asc">CO₂ Emissions Lowest</option>
                    <option value="co2emissions|desc">CO₂ Emissions Highest</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="columns is-multiline">
            {this.filterBikes().map(bike =>
              <div
                key={bike.id}
                className="column is-half-tablet is-one-quarter-desktop"
              >
                <Link to={`/bikes/${bike.id}`}>
                  <Card
                    title={bike.title}
                    year={bike.year}
                    image={bike.mainimage}
                    co2emissions={bike.co2emissions}/>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}
export default BikesIndex
