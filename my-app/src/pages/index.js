import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Fast technology, pastel cafes, and street culture</h1>
        <p>
          Complete courses about the best tools and design systems. Prototype
          and build apps with React and Swift.
        </p>
        <Link to="/video">Watch the Video</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
