'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logoHero from 'public/img/logo.png'
import heroBg from 'public/img/heros.png'
import heroBgMobile from 'public/img/cigarBgMobile.png'

const Hero = () => {
  function ClickHome (e) {
    e.preventDefault()
    document.getElementById('hero').scrollIntoView({ behavior: 'smooth' })
  }
  function ClickAbout (e) {
    e.preventDefault()
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
  }
  function ClickTestimonials (e) {
    e.preventDefault()
    document.getElementById('testimonials').scrollIntoView({ behavior: 'smooth' })
  }
  function ClickToContact (e) {
    e.preventDefault()
    document.getElementById('contactus').scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <>
      <Image
        id='hero-img'
        className='w-full h-full'
        src={heroBg}
        priority
        alt='heroBg'
        placeholder='blur'
      />
      <Image
        id='hero-img-mobile'
        className='w-full h-full'
        src={heroBgMobile}
        priority
        alt='MobileBg'
        placeholder='blur'
      />
      <div className='' id='hero'>
        {/* Header fiero */}
        <header className='text-gray-600 body-font bg-red-500/25'>
          <div className='container mx-auto px-10 flex flex-wrap flex-col md:flex-row items-center'>
            <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
              <Image
                id='logo-header'
                className='w-auto h-auto'
                src={logoHero}
                alt='logo'
                width={100} height={100}
              />
            </a>
            <nav id='navbar-hero' className='md:m-auto flex flex-wrap items-center justify-center'>
              <button id='btn-header' className='mr-5' onClick={ClickHome}>Home</button>
              <button id='btn-header' className='mr-5' onClick={ClickAbout}>About</button>
              <button id='btn-header' className='mr-5' onClick={ClickTestimonials}>Other</button>
              <button id='btn-header' className='mr-5' onClick={ClickToContact}>Contact Us</button>
            </nav>
            <Link href='../auth/signin' id='btn-hlog' className='mx-2 my-2 transistion bg-gray-100 transition focus:outline-none text-black hover:text-gray-500 rounded-lg px-8 py-3 text-medim'>LOG IN →</Link>
          </div>
        </header>

      </div>
    </>
  )
}

export default Hero
