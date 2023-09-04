import React, { useState, useEffect } from "react"
import { hero } from "../../../dummyData"
import "./hero.css"
import Card from "./Card"

const Hero = () => {
  const [items, setIems] = useState([])

  useEffect(() => {
    setIems(hero)
  }, [])

  return (
    <>
      <section className='hero'>
        <div className='container'>
          {items.map((item, index) => {
            return (
              <>
                <Card className='box' key={item.id} item={item} />
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Hero
