import React from 'react'
import Header from '../coman/Header'
import Footer from '../coman/Footer'
import about from '../img/about.jpg'

function About() {
  return (
    <div>
        <Header/>
          <div className="container">
        <p className='mt-3'>The most powerful hopes can be simple, ordinary. The father of a child with type 1 diabetes who worries constantly about his son’s blood sugar spiking when he’s at a friend’s house. A woman whose irregular heartbeat may be a sign of concern, not joy. Far too many people struggle profoundly to do things we should all be able to take for granted. Our resolve to improve every single life fuels our desire to make an extraordinary impact as the leader in healthcare technology.</p>
        <p className='mt-3 mb-3'>TheWe reimagine the treatment of over 70 of the world’s most complex and challenging conditions. Not for the one, but for the many. Not someday, but this day. By bringing together data, artificial intelligence, and our deep knowledge of the human body, we create something even more extraordinary. In strengthening, lengthening, and saving lives, we restore hope and possibility.</p>
        <img src={about} alt="" width={50} height={300} className='container'/>
        </div>
        <Footer/>
      
    </div>
  )
}

export default About
