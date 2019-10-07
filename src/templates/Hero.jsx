import React from "react"

const Hero = props => {
  return (
    <React.Fragment>
      <img src={props.image} alt="" className='img-fluid' />
    </React.Fragment>
  )
}

export default Hero
