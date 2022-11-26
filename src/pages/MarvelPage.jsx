import React from 'react'
import { HeroList } from '../components/HeroList'

export const MarvelPage = () => {
  return (
    <section className='mt-3'>

    <h2>Marvel Comics</h2>
    <hr />

    <HeroList publisher = {"Marvel Comics"}/>

    </section>
  )
}
