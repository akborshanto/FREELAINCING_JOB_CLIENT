import React from 'react'
import Banner from './banner/Banner'
import Category from './category/Category'
import { useLoaderData } from 'react-router-dom'

const Home = () => {

  return (
    <div>
      HOME
     {/*  <Banner></Banner> */}
      <Category ></Category>
    </div>
  )
}

export default Home
