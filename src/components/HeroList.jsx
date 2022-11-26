import React from 'react'
import '../App.css';
import { getHerosByPublisher } from '../helpers/getHerosByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

  const heroes = getHerosByPublisher(publisher);

  return (
    
    <section className='section-cards'> 
        {
          heroes.map(hero =>{
            return(
              <article  key={hero.id}>
              <HeroCard  {...hero} />
              </article>
          )})
        }
    </section>
    
  )
}
