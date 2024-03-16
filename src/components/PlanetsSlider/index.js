import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div data-testid="planets" className="bg-cont">
      <div className="slider-container">
        <h1 className="main-heading">PLANETS</h1>
        <Slider {...settings}>
          {planetsList.map(eachItem => (
            <PlanetItem planetDetails={eachItem} key={eachItem.id} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
