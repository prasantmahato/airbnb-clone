/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import Header from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Footer from './components/Footer'

import './style/App.css'

import data from './data'

function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key = {item.id}
        {...item}
        // item = {item}
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
      <Footer/>
   </div>
  )
}

export default App
