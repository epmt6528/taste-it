import Image from 'next/image'

import { DIV } from './HowItWorksStyled'

const HowItWorks = () => {
  return (
    <DIV id='howItWorks'>
      <div className='textDiv'>
        <h3>How It Works</h3>
        <h1>Explore an exciting way to spice up your meals.</h1>
        <p>
          Go on a culinary adventure to discover your next favourite food
          through our mystery dishes.
        </p>
      </div>

      <div className='imgDiv'>
        <Image
          src='/img/ForHome/pancake.png'
          alt='Pancakes and Cafe Latte'
          width={337}
          height={342}
        />
      </div>

      <div className='stepsDiv'>
        <ul>
          <li>
            <div className='iconDiv'>
              <Image
                src='/img/ForHome/champagne.png'
                alt='Champagne glass'
                width={32}
                height={67}
              />
            </div>

            <p>Sign up and create your unique flavour profile.</p>
          </li>
          <li>
            <div className='iconDiv'>
              <Image
                src='/img/ForHome/arrow.png'
                alt='Arrow'
                width={28}
                height={45}
              />
            </div>

            <p>Hit “Order Now” and we will take care of the rest.</p>
          </li>
          <li>
            <div className='iconDiv'>
              <Image
                src='/img/ForHome/heart.png'
                alt='Heart'
                width={40}
                height={36}
              />
            </div>

            <p>Enjoy a yummy meal tailored to your taste.</p>
          </li>
        </ul>
      </div>
    </DIV>
  )
}

export default HowItWorks