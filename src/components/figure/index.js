import * as React from 'react'
import classnames from 'classnames'

import styles from './style.css'

const Figure = (props) => (
  <figure id={props.figure.name}>
    <img class={props.figure.class} src={props.figure.src}/>
  </figure>
)

Section.defaultProps = {
  className: undefined,
  children: undefined,
  image: '',
}

export default Figure
