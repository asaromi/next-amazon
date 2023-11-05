import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next-image-export-optimizer'

const Banner = () => {
  const [clientRender, setClientRender] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => setClientRender(() => false), 2500)
  }, [])

  return clientRender && (
      <div className="h-160 w-full bg-gray-400 animate-pulse"/>
    ) || (
      <div className="relative">
        <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-10"/>
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
        >
          <div>
            <Image width={1600} height={640} src="https://links.papareact.com/gi1" alt="banner 1"/>
          </div>
          <div>
            <Image width={1600} height={640} src="https://links.papareact.com/6ff" alt="banner 2"/>
          </div>
          <div>
            <Image width={1600} height={640} src="https://links.papareact.com/7ma" alt="banner 3"/>
          </div>
        </Carousel>
      </div>
    )
}

export default Banner
