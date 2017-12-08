import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Col } from 'react-flexbox-grid'

import css from './Card.css'

const Card = ({id, title, copy, image}) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <div className={css.box}>
        <Link to={'/blog/'+id}>
          <div className={css.image}>
            <img src={image} />
          </div>
          <div className={css.content}>
            <h2>{title}</h2>
            <p>{copy}</p>
          </div>
        </Link>
      </div>
    </Col>
  )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Card
