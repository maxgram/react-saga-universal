import React from 'react'
import PropTypes from 'prop-types'

const SvgSprite = ({ width=24, height=24, spriteName, className=''}) => (
  <svg className={className} width={width} height={height}>
    <use width={width} height={height} xlinkHref={'/dist/svgsprite.svg' + spriteName} />
  </svg>
)

SvgSprite.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  spriteName: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default SvgSprite
