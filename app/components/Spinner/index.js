import React from 'react'
import css from './styles.css'

import SvgSprite from '../SvgSprite'

const Spinner = (props) => {
  return (
    <div className={css.spinner}>
      <div>Spinner</div>
      <SvgSprite spriteName="#sprite-github" className={css.svgSprite} />
    </div>
  )
}

export default Spinner
