/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import Header from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

import './style/App.css'

import data from './data'

function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key = {item.id}
        img={item.img}
        rating={item.stats.rating}
        reviewCnt={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots = {item.openSpots}
      />
        )
  })

  return (
   <div>
      <Header />
      <Hero />
      <section className="cards">
        {cards}
      </section>
   </div>
  )
}

export default App
