import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Rotation from 'react-rotation'
// CSS Fdivp Card Effect

class BikesShow extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      isHiddenEngine: true,
      isHiddenDimensions: true,
      isHiddenPerfomance: true,
      isHiddenDriveTrain: true,
      isHiddenBrakes: true,
      isHiddenWheels: true,
      isHiddenTyres: true
    }
    this.toggleHiddenEngine = this.toggleHiddenEngine.bind(this)
    this.toggleHiddenDimensions = this.toggleHiddenDimensions.bind(this)
    this.toggleHiddenPerfomance = this.toggleHiddenPerfomance.bind(this)
    this.toggleHiddenDriveTrain = this.toggleHiddenDriveTrain.bind(this)
    this.toggleHiddenBrakes = this.toggleHiddenBrakes.bind(this)
    this.toggleHiddenWheels = this.toggleHiddenWheels.bind(this)
    this.toggleHiddenTyres = this.toggleHiddenTyres.bind(this)
  }

  toggleHiddenEngine () {
    this.setState({
      isHiddenEngine: !this.state.isHiddenEngine
    })
  }
  toggleHiddenDimensions () {
    this.setState({
      isHiddenDimensions: !this.state.isHiddenDimensions
    })
  }
  toggleHiddenPerfomance () {
    this.setState({
      isHiddenPerfomance: !this.state.isHiddenPerfomance
    })
  }
  toggleHiddenDriveTrain () {
    this.setState({
      isHiddenDriveTrain: !this.state.isHiddenDriveTrain
    })
  }
  toggleHiddenBrakes () {
    this.setState({
      isHiddenBrakes: !this.state.isHiddenBrakes
    })
  }
  toggleHiddenWheels () {
    this.setState({
      isHiddenWheels: !this.state.isHiddenWheels
    })
  }
  toggleHiddenTyres () {
    this.setState({
      isHiddenTyres: !this.state.isHiddenTyres
    })
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/api/bikes/${this.props.match.params.id}/`)
      .then(res => this.setState({ bike: res.data }))

  }



  render() {
    if (!this.state.bike) return null

    const settings = {
      cycle: true
    }
    const Engine = () => (
      <div className="bike-open-table">
        <div className="bike-table">
          <div className="bikedata-title">Displacement:</div>
          <div className="bikedata-value">{this.state.bike.displacement}</div>
        </div>
        <div className="bike-table">
          <div className="bikedata-title">Compression Ratio:</div>
          <div className="bikedata-value">{this.state.bike.compressionRatio}</div>
        </div>
        <div className="bike-table">
          <div className="bikedata-title">Bore:</div>
          <div className="bikedata-value">{this.state.bike.bore}</div>
        </div>
        <div className="bike-table">
          <div className="bikedata-title">Stroke:</div>
          <div className="bikedata-value">{this.state.bike.stroke}</div>
        </div>
      </div>
    )

    const Dimensions = () => (
      <div className="bike-open-table">
        <div className="bike-table">
          <div className="bikedata-title">Length:</div>
          <div className="bikedata-value">{this.state.bike.length}</div>
        </div>
        <div className="bike-table">
          <div className="bikedata-title">Wheelbase:</div>
          <div className="bikedata-value">{this.state.bike.wheelbase}</div>
        </div>
        <div className="bike-table">
          <div className="bikedata-title">Seat Hieght:</div>
          <div className="bikedata-value">{this.state.bike.seatheight}</div>
        </div>
        <div className="bike-table">
          <div className="bikedata-title">Ground Clearance:</div>
          <div className="bikedata-value">{this.state.bike.clearance}</div>
        </div>
        <div className="bike-table">
          <div className="bikedata-title">Trail:</div>
          <div className="bikedata-value">{this.state.bike.trail}</div>
        </div>
        <div className="bike-table">
          <div className="bikedata-title">Dry Weight:</div>
          <div className="bikedata-value">{this.state.bike.dryweight}</div>
        </div>
        <div className="bike-table">
          <div className="bikedata-title">Fuel Tank Capacity:</div>
          <div className="bikedata-value">{this.state.bike.fueltank}</div>
        </div>
      </div>
    )

    const Perfomance = () => (
      <div className="bike-open-table">
        <div className="bike-table">
          <div className="bikedata-title">Engine Torque:</div>
          <div className="bikedata-value">{this.state.bike.torque}</div>
        </div>
        <div className="bike-table">
          <div className="bikedata-title">Engine Torque(rpm)</div>
          <div className="bikedata-value">{this.state.bike.torquerpm}</div>
        </div>
        <div className="bike-table">
          <div className="bikedata-title">Horsepower:</div>
          <div className="bikedata-value">{this.state.bike.horsepower}</div>
        </div>
        <div className="bike-table">
          <div className="bikedata-title">Fuel Consumption:</div>
          <div className="bikedata-value">{this.state.bike.fuelconsumption}</div>
        </div>
        <div className="bike-table">
          <div className="bikedata-title">CO₂ Emissions:</div>
          <div className="bikedata-value">{this.state.bike.co2emissions}</div>
        </div>
      </div>
    )

    const DriveTrain = () => (
      <div className="bike-open-table">
        <div className="bike-table">
          <div className="bikedata-title">Primary Drive:</div>
          <div className="bikedata-value">{this.state.bike.primarydrive}</div>
        </div>
        <div className="bike-table">
          <div className="bikedata-title">First Gear:</div>
          <div className="bikedata-value">{this.state.bike.firstgear}</div>
        </div>
        <div className="bike-table">
          <div className="bikedata-title">Second Gear:</div>
          <div className="bikedata-value">{this.state.bike.secondgear}</div>
        </div>
        <div className="bike-table">
          <div className="bikedata-title">Third Gear</div>
          <div className="bikedata-value">{this.state.bike.thirdgear}</div>
        </div>
        <div className="bike-table">
          <div className="bikedata-title">Fourth Gear</div>
          <div className="bikedata-value">{this.state.bike.fourthgear}</div>
        </div>
        <div className="bike-table">
          <div className="bikedata-title">Fifth Gear</div>
          <div className="bikedata-value">{this.state.bike.fifthgear}</div>
        </div>
        <div className="bike-table">
          <div className="bikedata-title">Sixth Gear</div>
          <div className="bikedata-value">{this.state.bike.sixthgear}</div>
        </div>
      </div>
    )

    const Brakes = () => (
      <div className="bike-open-table">
        <div className="bike-table">
          <div className="bikedata-title">Front Brakes, Cadivper Type:</div>
          <div className="bikedata-value">{this.state.bike.frontbrakes}</div>
        </div>
        <div className="bike-table">
          <div className="bikedata-title">Rear Brakes, Cadivper Type:</div>
          <div className="bikedata-value">{this.state.bike.rearbrakes}</div>
        </div>
      </div>
    )

    const Wheels = () => (
      <div className="bike-open-table">
        <div className="bike-table">
          <div className="bikedata-title">Front Wheels Material:</div>
          <div className="bikedata-value">{this.state.bike.frontwheelmaterial}</div>
        </div>
        <div className="bike-table">
          <div className="bikedata-title">Rear Wheels Material:</div>
          <div className="bikedata-value">{this.state.bike.rearwheelmaterial}</div>
        </div>
      </div>
    )

    const Tyres = () => (
      <div className="bike-open-table">
        <div className="bike-table">
          <div className="bikedata-title">Front Tyre:</div>
          <div className="bikedata-value">{this.state.bike.fronttyre}</div>
        </div>
        <div className="bike-table">
          <div className="bikedata-title">Rear Tyre:</div>
          <div className="bikedata-value">{this.state.bike.reartyre}</div>
        </div>
      </div>

    )

    return (
      <section>
        <div className="bike-show-page">
          <div className="bike-main-image">
            <img src={this.state.bike.mainimage}/>
          </div>
          <div className="bike-text-content">
            <h1 className="bike-text-title">{this.state.bike.title}</h1>
            <h2 className="bike-text-sloagan">{this.state.bike.slogan}</h2>
          </div>

          <div className="small-bike-text-content">
            <h1 className="small-bike-text-title">{this.state.bike.year} - {this.state.bike.title}</h1>
            <p className="small-bike-text-mainbody">{this.state.bike.mainbody}</p>
          </div>

          <div className="bike-rotation-viewer">
            <Rotation {... settings}>
              <img src={this.state.bike.image0}/>
              <img src={this.state.bike.image1}/>
              <img src={this.state.bike.image2}/>
              <img src={this.state.bike.image3}/>
              <img src={this.state.bike.image4}/>
              <img src={this.state.bike.image5}/>
              <img src={this.state.bike.image6}/>
              <img src={this.state.bike.image7}/>
              <img src={this.state.bike.image8}/>
              <img src={this.state.bike.image9}/>
              <img src={this.state.bike.image10}/>
              <img src={this.state.bike.image11}/>
              <img src={this.state.bike.image12}/>
              <img src={this.state.bike.image13}/>
              <img src={this.state.bike.image14}/>
              <img src={this.state.bike.image15}/>
            </Rotation>
          </div>
          <div className="bike-specs-content">
            <div className="content-wrapper">
              <h2 className="specs-prewiev-title">Specs</h2>
              <div className="specs-prewiev-table">
                <div className="specs-prewiev">
                  <p className="specs-prewiev-name">FUEL CONSUMPTION</p>
                  <p className="specs-prewiev-value">{this.state.bike.fuelconsumption}</p>
                </div>
                <div className="specs-prewiev">
                  <p className="specs-prewiev-name">ENGINE TORQUE</p>
                  <p className="specs-prewiev-value">{this.state.bike.torque}</p>
                </div>
                <div className="specs-prewiev">
                  <p className="specs-prewiev-name">DRY WEIGHT</p>
                  <p className="specs-prewiev-value">{this.state.bike.dryweight}</p>
                </div>
                <div className="specs-prewiev">
                  <p className="specs-prewiev-name">SEAT HEIGHT</p>
                  <p className="specs-prewiev-value">{this.state.bike.seatheight}</p>
                </div>
              </div>
            </div>




            <div className="specs-table">

              <div className="specs-container">
                <a className="toggle" onClick={this.toggleHiddenEngine} >
                  <h1 className="specs-header-title">ENGINE</h1>
                </a>
                {!this.state.isHiddenEngine && <Engine />}
              </div>

              <div className="specs-container">
                <a className="toggle" onClick={this.toggleHiddenDimensions} >
                  <h1 className="specs-header-title">DIMENSIONS AND WEIGHT</h1>
                </a>
                {!this.state.isHiddenDimensions && <Dimensions />}
              </div>

              <div className="specs-container">
                <a className="toggle" onClick={this.toggleHiddenPerfomance} >
                  <h1 className="specs-header-title">PERFOMANCE</h1>
                </a>
                {!this.state.isHiddenPerfomance && <Perfomance />}
              </div>

              <div className="specs-container">
                <a className="toggle" onClick={this.toggleHiddenDriveTrain} >
                  <h1 className="specs-header-title">DRIVETRAIN</h1>
                </a>
                {!this.state.isHiddenDriveTrain && <DriveTrain />}
              </div>

              <div className="specs-container">
                <a className="toggle" onClick={this.toggleHiddenBrakes} >
                  <h1 className="specs-header-title">BRAKES</h1>
                </a>
                {!this.state.isHiddenBrakes && <Brakes />}
              </div>

              <div className="specs-container">
                <a className="toggle" onClick={this.toggleHiddenWheels} >
                  <h1 className="specs-header-title">WHEELS</h1>
                </a>
                {!this.state.isHiddenWheels && <Wheels />}
              </div>

              <div className="specs-container">
                <a className="toggle" onClick={this.toggleHiddenTyres} >
                  <h1 className="specs-header-title">TYRES</h1>
                </a>
                {!this.state.isHiddenTyres && <Tyres />}
              </div>

            </div>


          </div>
        </div>

      </section>
    )
  }
}






export default BikesShow
