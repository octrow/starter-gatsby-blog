import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
       дополнительные истории в <a href="https://www.instagram.com/avgustchern/">Instagram</a> и{' '}
      <a href="https://avgust.mave.digital/">нашем подкасте</a> &middot;{' '}
      <a href="https://t.me/avgustchern">Telegram</a>
    </div>
  </Container>
)

export default Footer
