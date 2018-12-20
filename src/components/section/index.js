import * as React from 'react'
import classnames from 'classnames'

import Figure from '../figure'

import styles from './style.css'


const Section = (props) => (
  <section id={props.name}>
    <h2>{props.title}</h2>
    <p class="section-intro">{props.body}</p>
    <Figure
    name="caffeine-content"
    image={props.imageCaffeinecontent}
    />
    <Figure
    name="caffeine-effect"
    image={props.imageCaffeineeffect}
    />
    <Figure
    name="caffeine-icon"
    image={props.iconCaffeine}
    />
  </section>
)

Section.defaultProps = {
    className: undefined,
    children: undefined,
    image: '',
}

export default Section
