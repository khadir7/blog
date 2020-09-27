import React, { useState, useEffect } from "react"
import styled from "styled-components"
import population from "../json/population"

const colorMap = {
  Bangladesh: "#3B25FD",
  Brazil: "#3C31FC",
  China: "#3245FC",
  "Czech Republic": "#4183FD",
  Egypt: "#C838FB",
  Germany: "#2CCFFD",
  India: "#8094FC",
  Indonesia: "#34B4FD",
  Iran: "#1D22FD",
  Iraq: "#D262FE",
  Japan: "#2C2EFC",
  Pakistan: "#5E5AFE",
  Philippines: "#3245FC",
  "Russian Federation": "#5ABCFD",
  Thailand: "#81ACFC",
  "The Democratic Rep. Congo": "#9392FC",
  Mexico: "#AE14FC",
  Turkey: "#C838FB",
  "United Kingdom": "#A78FFD",
  "United States": "#4385FC",
}

const CountryCell = styled.div`
  width: 250px;
  text-align: center;
`
const CountryRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0px 15px;
  position: absolute;
  transition: all 0.3s linear;
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
  const [obj, setObj] = useState([])
  const [year, setYear] = useState(2016)
  const [scale, setScale] = useState(1392730000)
  const sortPopulation = year => {
    if (!population[year]) return null
    let obj2 = population[year]
      .slice()
      .sort((a, b) => b.population - a.population)
      .map((item, index) => {
        item.index = index
        return item
      })
    setObj(obj2)
  }
  useEffect(() => {
    sortPopulation(year)
  }, [])
  const onclick = (isRight = true) => {
    let newYear = isRight ? year + 1 : year - 1
    sortPopulation(newYear)
    setYear(newYear)
  }
  const getBarWidth = count => (count * 100) / scale
  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "120px",
          justifyContent: "space-between",
          margin: "0 auto",
        }}
      >
        <div style={{ width: `125px`, display: `flex` }}>
          {population[year - 1] ? (
            <div
              onClick={() => onclick(false)}
              style={{
                width: "28px",
                borderRadius: "50%",
                background: "white",
                textAlign: "center",
                cursor: "pointer",
                border: "1px solid #ccc",
                // opacity: isLeftDisabled ? "0.5" : "1",
              }}
              // onClick={slideLeft}
            >
              &lt;
            </div>
          ) : null}
          <div style={{ padding: "0px 10px" }}>{year}</div>
          {population[year + 1] ? (
            <div
              onClick={() => onclick()}
              style={{
                width: "28px",
                borderRadius: "50%",
                background: "white",
                textAlign: "center",
                cursor: "pointer",
                border: "1px solid #ccc",
                // opacity: isRightDisabled ? "0.5" : "1",
              }}
              // onClick={slideRight}
            >
              &gt;
            </div>
          ) : null}
        </div>
      </div>
      <section style={{ position: "relative" }}>
        {/* <table>
          <tbody> */}
        {obj.map((country, index) => (
          <CountryRow index={country.index || index} key={country.country}>
            <CountryCell>{country.country}</CountryCell>
            <Bar>
              <div
                style={{
                  background: colorMap[country.country],
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
