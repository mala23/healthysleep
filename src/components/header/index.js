import * as React from 'react'
import classnames from 'classnames'

import Figure from '../figure'

import styles from './style.css'

const Header = (props) => (
  <header>
    <h1>3 Gründe warum wir wach bleiben</h1>
    <article>
    <p>Wenn wir genug schlafen erreichen wir eine deutlich höhere Leistungsfähigkeit.</p>
    <p>Laut Untersuchungen sind grosse Katastrophen wie der Beinahe - Gau des Atomreaktors Three Mile Island ( 1979 ), die Explosion des Space-Shuttle Challenger (1986) wie auch die Ölkatastrophe verursacht durch den Tanker Exxon - Valdez ( 1989 ) auf Schlafmangel zurückzuführen.</p>
    <p>Wie wir im Alltag Einfluss auf unseren Schlafrhythmus nehmen wird hier hier anhand von den drei Faktoren: Koffein, Kunstlicht und Unterhaltung.</p>
    </article>
    <Figure
    name="header-illu"
    image="https://s3.eu-central-1.amazonaws.com/healthysleep/illustrations/header_illu.png"
    />
    <Figure
    name="header-animation"
    image="https://s3.eu-central-1.amazonaws.com/healthysleep/illustrations/header_animation.gif"
    />
  </header>
)

Header.defaultProps = {
    className: undefined,
    children: undefined,
    image: '',
}

export default Header
