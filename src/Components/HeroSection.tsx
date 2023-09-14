import {useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { HeroTextArray } from '../assets/Constants'


const HeroSection = () => {
    const [currSlide,setCurrSlide] = useState(0)
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrSlide((curr) => curr === 3 ? 0 : curr + 1)
        },4000)
        return () => {
            clearInterval(interval)
        }
    })
    
  return (
    <section className='hero'>
        <div className='container'>
            <div className='inverted'>
                <div className='links'>
                    <a href=''>Lorem</a>
                    <a href=''>Ipsum</a>
                    <a href=''>Dolore</a>
                </div>
                <span></span>
            </div>
            <div className='action'>
                <section className='text'>
                <h1>{HeroTextArray[currSlide].title}<br></br> {HeroTextArray[currSlide].subTitle}</h1>
                <p>
                    {HeroTextArray[currSlide].description}
                </p>
                <a>Book Now</a>
                <div className='icons'>
                    <FontAwesomeIcon icon={faFacebookF} size='2x'/>
                    <FontAwesomeIcon icon={faTwitter} size='2x'/>
                    <FontAwesomeIcon icon={faInstagram} size='2x'/>
                </div>
                </section>
                {/* <section className='imageSlider'>
                    {
                        [0,1,2,3].map((curr) => {
                            return <div className={curr === currSlide? 'currSlide': ''}></div>
                        })
                    }
                    <div className='slideDesc'>
                        <p>{currSlide+1}.</p><p>{4}</p>
                    </div>
                </section> */}
            </div>

        </div>

    </section>
  )
}

export default HeroSection