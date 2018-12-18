import * as React from 'react'
import classnames from 'classnames'

import styles from './style.css'

const Section = (props) => (
  <section>
    <h2>Koffein – Wirkung auf Adenosinrezeptoren</h2>
    <span></span>
    <p class="section-intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <figure class="cycle">
    </figure>
    <figure class="atmospheric">
    </figure>
    <figure class="illustration">
      <img class="cycle-image" src="https://s3.eu-central-1.amazonaws.com/healthysleep/illustrations/caffeine_synapse.png" alt="Illustration: Adenosinrezeptoren einer Synapse"/>
    </figure>
  </section>
)

Section.defaultProps = {
    className: undefined,
    children: undefined,
    image: '',
}

export default Section
