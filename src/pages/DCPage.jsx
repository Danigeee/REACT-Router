import React from 'react'
import { HeroList } from '../components/HeroList'

export const DCPage = () => {
  return (
    <section className='mt-3'>

    <h2>DC Comics</h2>
    <hr />

    <HeroList publisher = {"DC Comics"}/>
    </section>
  )
}
