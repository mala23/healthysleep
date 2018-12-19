import * as React from 'react'
import classnames from 'classnames'

import Section from '../section'

import styles from './style.css'

const Main = (props) => (
  <main>
    <Section 
      name="caffeine"
      title="Koffein – Wirkung auf Adenosinrezeptoren"
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      image-caffeinecontent="https://s3.eu-central-1.amazonaws.com/healthysleep/illustrations/caffeine_synapse.png"
      image-caffeineeffect="https://s3.eu-central-1.amazonaws.com/healthysleep/illustrations/caffeine_athmospheric.png"
    />
    <Section 
      name="light"
      title="Licht – Einfluss auf unseren Schlaf"
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      illustration="https://s3.eu-central-1.amazonaws.com/healthysleep/illustrations/light_barchart.png"
      illustration-alt="x"
      atmospheric="https://s3.eu-central-1.amazonaws.com/healthysleep/illustrations/light_athmospheric.png"
      atmospheric-alt="x"
    />
    <Section 
      name="entertainment"
      title="Unterhaltung"
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      illustration="https://s3.eu-central-1.amazonaws.com/healthysleep/illustrations/pillz_melatonin.png"
      illustration-alt="x"
      atmospheric="x"
      atmospheric-alt="x"
    />
  </main>
)

export default Main
