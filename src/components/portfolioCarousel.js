import React from "react"
import PropTypes from "prop-types"
import { Modal, Carousel } from "react-bootstrap"
import Img from "gatsby-image"

import "./portfolioCarousel.scss"

const PortfolioCarousel = ({ show, onHide, images, current }) => {
  const [index, setIndex] = React.useState();

  const carouselItems = images.map((image, index) =>
    <Carousel.Item key={index}>
      <figure>
        <Img fluid={image.node.childImageSharp.fluid}/>
        <figcaption>
          <div className="bottom-bar">
            <div className="counter">{index + 1} of {images.length}</div>
          </div>
        </figcaption>
      </figure>
    </Carousel.Item>
  );

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <Carousel interval={null} indicators={false} defaultActiveIndex={current} slide={false}>
          {carouselItems}
        </Carousel>
      </Modal.Body>
    </Modal>
  );
}

PortfolioCarousel.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
  current: PropTypes.number.isRequired,
}

export default PortfolioCarousel