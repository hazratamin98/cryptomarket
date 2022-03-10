import React, { useState, useEffect } from "react"
import axios from "axios"
import classNames from "classnames/bind"
import Coin from "./Coin"

import styles from "./Card.module.scss"
const cx = classNames.bind(styles)

const Card = () => {
  const [listOfCoin, setListOfCoin] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    axios
      .get("https://api.coinstats.app/public/v1/coins?skip=0&limit=0")
      .then((res) => {
        const data = res.data.coins

        setListOfCoin(data)

        console.log(data)
      })
  }, [])

  let filtercoin = listOfCoin.filter((coin) => {
    return coin.name.toLowerCase().includes(searchText.toLowerCase())
  })

  const handleClear = () => {
    setSearchText("")
  }

  return (
    <div className={cx("cryptoHeader")}>
      <input
        type="text"
        placeholder="Bitcoin..."
        onChange={(e) => {
          setSearchText(e.target.value)
        }}
      />
      <button onClick={handleClear}>Clear</button>
      <div className={cx("cryptoDisplay")}>
        {filtercoin.map((coin, i) => {
          return (
            <Coin
              name={coin.name}
              icon={coin.icon}
              price={coin.price}
              symbol={coin.symbol}
            ></Coin>
          )
        })}
      </div>
    </div>
  )
}

export default Card
