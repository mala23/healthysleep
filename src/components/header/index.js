import * as React from 'react'
import classnames from 'classnames'

import styles from './style.css'

const Header = (props) => (
  <header>
    <h1>3 Gründe warum wir wach bleiben</h1>
  </header>
)

Header.defaultProps = {
    className: undefined,
    children: undefined,
    image: '',
}

export default Header
