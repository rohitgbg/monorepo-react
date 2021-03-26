import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text, name }) => {
  return (
    <div className={styles.test}>
      Example Component {text} {name}
    </div>
  )
}
