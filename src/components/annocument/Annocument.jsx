import React from "react"
import './style.css';

const Annocument = () => {
  const mystyle = {
    width: "30%",
    height: "340px",
  }
  const mystyle1 = {
    width: "68%",
    height: "340px",
  }
  return (
    <>
      <section className='annocument background'>
        <div className='container d_flex'>
          <div className='img' style={mystyle}>
            <img src='https://648e99873722947deac636f5--sage-dusk-64ff08.netlify.app/images/banner-1.png' width='100%' height='100%' alt="img3"/>
          </div>
          <div className='img' style={mystyle1}>
            <img src='https://648e99873722947deac636f5--sage-dusk-64ff08.netlify.app/images/banner-2.png' width='100%' height='100%' alt="img4"/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Annocument