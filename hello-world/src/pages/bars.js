import React, { useState, useEffect } from "react"
import styled from "styled-components"
import population from "../json/population"


const CountryCell = styled.div`
  
  width: 250px;
  text-align: center;
`
const CountryRow = styled.div`
display: flex;
align-items:center;
width: 100%;
padding: 0px 15px; 
  position: absolute;
  transition: all 0.2s linear;
  transform: translateY(${props => props.index * 20}px);
`

const CountCell = styled.div`
  display: inline-block;
  text-align: right;
  width: 120px;
`
const Bar = styled.div`
  flex-grow: 1;
`

const Bars = () => {
  // let obj1 = population["2016"]
  // let obj1 = [
  //   {
  //     country: "Bangladesh",
  //     population: 161356039,
  //   },
  //   {
  //     country: "Brazil",
  //     population: 209469333,
  //   },
  //   {
  //     country: "China",
  //     population: 1392730000,
  //   },
  //   {
  //     country: "Czech Republic",
  //     population: 10629928,
  //   },

  //   {
  //     country: "Egypt",
  //     population: 98423595,
  //   },

  //   {
  //     country: "Germany",
  //     population: 82905782,
  //   },

  //   {
  //     country: "India",
  //     population: 1352617328,
  //   },
  //   {
  //     country: "Indonesia",
  //     population: 267663435,
  //   },
  //   {
  //     country: "Iran",
  //     population: 81800269,
  //   },
  //   {
  //     country: "Iraq",
  //     population: 38433600,
  //   },
  //   {
  //     country: "Japan",
  //     population: 126529100,
  //   },
  //   {
  //     country: "Pakistan",
  //     population: 212215030,
  //   },
  //   {
  //     country: "Philippines",
  //     population: 106651922,
  //   },
  //   {
  //     country: "Russian Federation",
  //     population: 144478050,
  //   },
  //   {
  //     country: "Thailand",
  //     population: 69428524,
  //   },
  //   {
  //     country: "The Democratic Rep. Congo",
  //     population: 84068091,
  //   },
  //   {
  //     country: "Mexico",
  //     population: 126190788,
  //   },
  //   {
  //     country: "Turkey",
  //     population: 82319724,
  //   },
  //   {
  //     country: "United Kingdom",
  //     population: 66460344,
  //   },
  //   {
  //     country: "United States",
  //     population: 326687501,
  //   },
  // ]

  
  const [obj, setObj] = useState(population["2016"])
  const [scale, setScale] = useState(1392730000)
  useEffect(() => {
    let obj1 = obj;
    obj1.map((item, index) => {
      item.index = index
      return item
    })
    setObj(obj1)
  },[])
  const onclick = () => {
    let obj2 = obj
      .slice()
      .sort((a, b) => b.population - a.population)
      .map((item, index) => {
        item.index = index
        return item
      })
    setObj(obj2)
    // setScale(obj2[0]["population"])
  }
  // const nextYear =>
  const getBarWidth = count => (count * 100) / scale
  return (
    <div onClick={() => onclick()}>
      <div>
        <span>{`< `}</span>
        <span>{` >`}</span>
      </div>
      <section style={{ position: "relative"}}>
        {/* <table>
          <tbody> */}
            {obj.map((country, index) => (
              <CountryRow index={country.index || index} key={country.country}>
                <CountryCell>{country.country}</CountryCell>
                <Bar >
                  <div
                    style={{
                      background: "blue",
                      height: "10px",
                      transition: "all .2s linear",
                      width: `${getBarWidth(country.population)}%`,
                    }}
                  ></div>
                </Bar>
                <CountCell>{country.population}</CountCell>
              </CountryRow>
            ))}
          {/* </tbody>
        </table> */}
      </section>
    </div>
  )
}

export default Bars
