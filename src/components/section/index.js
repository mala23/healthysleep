import * as React from 'react'
import classnames from 'classnames'

import styles from './style.css'

const Section = (props) => (
  <section id={props.name}>
    <h2>{props.title}</h2>
    <span></span>
    <p class="section-intro">{props.body}</p>
    <Figure/>
    /*
    <figure class="cycle">
    </figure>
    <figure class="atmospheric">
      <img class="atmospheric-image" src={props.atmospheric}/>
    </figure>
    <figure class="illustration">
      <img class="illustration-image" src={props.illustration}/>
    </figure>
    */
  </section>
)

Section.defaultProps = {
    className: undefined,
    children: undefined,
    image: '',
}

export default Section
