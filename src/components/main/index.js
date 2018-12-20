import * as React from 'react'
import classnames from 'classnames'

import Section from '../section'

import styles from './style.css'

const Main = (props) => (
  <main>
    <Section 
      name="caffeine"
      title="Koffein – Wirkung auf Adenosinrezeptoren"
      body="Bei Müdigkeitserscheinungen greift man als erstes gerne zu einem Kaffee. Das Koffein darin verspricht uns wach zu werden. Koffein ist eigentlich ein Nervengift, es soll die Pflanzen vor Schädlingen schützen. Koffein zögert unsere Müdigkeit hinaus. Es ist in der Struktur  ähnlich wie Adenosin. Dieses hat im Hypothalamus die Funktion Nervenzellen zu hemmen, wenn es an A1 Adenosinrezeptoren andockt.  Wenn Koffein andockt, gibt es keinen direkten Effekt, aber das Adenosin kann nicht mehr andocken und somit nicht hemmen. Koffein hat noch andere wachmachende Effekte in unserem Körper, indem es den Stoffwechsel, Herzschlag, Puls und auch die Atmung angeregt."
      imageCaffeinecontent="https://s3.eu-central-1.amazonaws.com/healthysleep/illustrations/caffeine_chart.png"
      imageCaffeineeffect="https://s3.eu-central-1.amazonaws.com/healthysleep/illustrations/caffeine_animation.gif"
      iconCaffeine="https://s3.eu-central-1.amazonaws.com/healthysleep/illustrations/caffeine_icon.png"
    />
    <Section 
      name="light"
      title="Licht – Einfluss auf den Melatoninhaushalt"
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    />
    <Section 
      name="entertainment"
      title="Unterhaltung"
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      illustration="https://s3.eu-central-1.amazonaws.com/healthysleep/illustrations/pillz_melatonin.png"
    />
  </main>
)

export default Main
