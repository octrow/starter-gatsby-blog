import React from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <span className={styles.logo} />
      <span className={styles.navigationItem}>август чёрный</span>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          фестиваль
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">
          события
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="https://avgustchernyy.timepad.ru/event/2121259/" activeClassName="active">
          регистрация
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="https://avgust.mave.digital/" activeClassName="active">
          подкаст
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
