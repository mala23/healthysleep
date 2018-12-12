import * as React from 'react'
import classnames from 'classnames'

import styles from './style.css'

const Section = (props) => (
  <section>
    <h2>Section</h2>
  </section>
)

Section.defaultProps = {
    className: undefined,
    children: undefined,
    image: '',
}

export default Section
