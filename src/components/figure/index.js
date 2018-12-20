import * as React from 'react'
import classnames from 'classnames'

import styles from './style.css'

const Figure = (props) => (
  <figure id={props.name}>
    <img src={props.image}/> 
  </figure>
)

Figure.defaultProps = {
  className: undefined,
  children: undefined,
  image: '',
}

export default Figure
