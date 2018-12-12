import * as React from 'react'
import classnames from 'classnames'

import styles from './style.css'

const Header = (props) => (
  <header>
    <h1>Healty Sleep</h1>
  </header>
)

Header.defaultProps = {
    className: undefined,
    children: undefined,
    image: '',
}

export default Header
