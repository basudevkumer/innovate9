import React from 'react'
import Bannar from '../component/Bannar'
import Platform from '../component/Platform'
import Feature from '../component/Feature'
import Appsc from '../component/Appsc'
import Service from '../component/Service'
import Customer from '../component/Customer'
import Pricing from '../component/Pricing'
import Talking from '../component/Talking'
import Query from '../component/Query'

const Home = () => {
  return (
    <>
      <Bannar/>
      <Platform/>
      <Feature/>
      <Appsc/>
      <Service/>
      <Customer/>
      <Pricing/>
      <Talking/>
      <Query/>  
    </>
  )
}

export default Home