import React from "react"

import Discover from "./discover/Discover"
import Hero from "./hero/Hero"
import Homes from "./mainContent/homes/Home"

const Homepages = () => {
  {/*const {pathname, hash, key} = useLocation()
  console.log(hash)

  useEffect(() =>
  if (hash === '#popular')
)*/}
  return (
    <>
      <Hero />
      <Homes />
      <Discover/>
    </>
  )
}

export default Homepages
