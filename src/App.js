import "./App.css"
// import React, { useState, useEffect } from "react"
// import axios, { Axios } from "axios"
import Card from "./Component/Card/Card"

function App() {
  // const [listOfCoin, setListOfCoin] = useState([])
  // const [searchText, setSearchText] = useState("")

  // useEffect(() => {
  //   axios
  //     .get("https://api.coinstats.app/public/v1/coins?skip=0&limit=0")
  //     .then((res) => {
  //       const data = res.data.coins

  //       setListOfCoin(data)

  //       console.log(data)
  //     })
  // }, [])

  // useEffect(() => {
  //   let filtercoin = listOfCoin.filter((item) => {
  //     return item.name.toLowerCase().include(searchText.toLocaleUpperCase())
  //   })
  // }, [searchText])

  return (
    <div className="App">
      <Card />
    </div>
  )
}

export default App
