import React from "react"
import classNames from "classnames/bind"

import styles from "./Card.module.scss"
const cx = classNames.bind(styles)

const Coin = ({ name, icon, price, symbol }) => {
  return (
    <div className={cx("coin")}>
      <h1>Name : {name}</h1>
      <img src={icon} alt="icon" />
      {price < 10 ? (
        <h3 className={styles.red}> {price.toFixed(2)}%</h3>
      ) : (
        <p className={styles.green}>{price.toFixed(2)}%</p>
      )}

      <h3>Symbol : {symbol}</h3>
    </div>
  )
}

export default Coin
