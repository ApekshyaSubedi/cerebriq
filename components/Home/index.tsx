import Blogs from './Blogs'
import Features from './Features'
import Hero from './Hero'
import WhatToExpect from './WhatToExpect'

const Home = () => {
  return (
    <div>
    
      {/* what to expect section */}
      {/* try it yourself section */}
      {/* features section */}
      {/* Blogs */}
      <Hero/>
      <WhatToExpect/>
      <Features/>
      <Blogs/>
    </div>
  )
}
Home.displayName = "Home"
export default Home
