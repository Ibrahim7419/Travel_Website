import React, {useEffect} from 'react'
import './main.css'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'
import img from './../../Assets/morocco.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle: 'Bora bora',
    location: 'Morocco',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, corrupti, ratione dignissimos similique libero porro suscipit molestiae dolor veritatis accusantium vero aperiam nisi repudiandae doloribus amet totam assumenda harum id.'
  },

  {
    id:2,
    imgSrc: img,
    destTitle: 'Bora bora',
    location: 'Morocco',
    grade: 'CULTURAL RELAX',
    fees: '$300',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, corrupti, ratione dignissimos similique libero porro suscipit molestiae dolor veritatis accusantium vero aperiam nisi repudiandae doloribus amet totam assumenda harum id.'
  },

  {
    id:3,
    imgSrc: img,
    destTitle: 'Bora bora',
    location: 'Morocco',
    grade: 'CULTURAL RELAX',
    fees: '$499',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, corrupti, ratione dignissimos similique libero porro suscipit molestiae dolor veritatis accusantium vero aperiam nisi repudiandae doloribus amet totam assumenda harum id.'
  },

  {
    id:4,
    imgSrc: img,
    destTitle: 'Bora bora',
    location: 'Morocco',
    grade: 'CULTURAL RELAX',
    fees: '$250',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, corrupti, ratione dignissimos similique libero porro suscipit molestiae dolor veritatis accusantium vero aperiam nisi repudiandae doloribus amet totam assumenda harum id.'
  },

  {
    id:5,
    imgSrc: img,
    destTitle: 'Bora bora',
    location: 'Morocco',
    grade: 'CULTURAL RELAX',
    fees: '$180',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, corrupti, ratione dignissimos similique libero porro suscipit molestiae dolor veritatis accusantium vero aperiam nisi repudiandae doloribus amet totam assumenda harum id.'
  },

  {
    id:6,
    imgSrc: img,
    destTitle: 'Bora bora',
    location: 'Morocco',
    grade: 'CULTURAL RELAX',
    fees: '$1200',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, corrupti, ratione dignissimos similique libero porro suscipit molestiae dolor veritatis accusantium vero aperiam nisi repudiandae doloribus amet totam assumenda harum id.'
  },

  {
    id:7,
    imgSrc: img,
    destTitle: 'Bora bora',
    location: 'Morocco',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, corrupti, ratione dignissimos similique libero porro suscipit molestiae dolor veritatis accusantium vero aperiam nisi repudiandae doloribus amet totam assumenda harum id.'
  },

  {
    id:8,
    imgSrc: img,
    destTitle: 'Bora bora',
    location: 'Morocco',
    grade: 'CULTURAL RELAX',
    fees: '$300',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, corrupti, ratione dignissimos similique libero porro suscipit molestiae dolor veritatis accusantium vero aperiam nisi repudiandae doloribus amet totam assumenda harum id.'
  },

  {
    id:9,
    imgSrc: img,
    destTitle: 'Bora bora',
    location: 'Morocco',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, corrupti, ratione dignissimos similique libero porro suscipit molestiae dolor veritatis accusantium vero aperiam nisi repudiandae doloribus amet totam assumenda harum id.'
  },
]

function Main() {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])


  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
            return(
              <div data-aos="fade-up" key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade} <small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon"/>
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main
