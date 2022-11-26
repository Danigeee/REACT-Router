import React from 'react'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router'
import { getHerosById } from '../helpers/getHeroById';

export const HeroPage = () => {
  
  const navigate = useNavigate();

  const {heroId} = useParams();
  const hero = getHerosById(heroId)
  

  const{
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
    powerstats,
  } = hero;

  const onBackClick = () =>{
      navigate(-1)
  }

  if(!hero){
   return <Navigate to ="/" />
  }

  return (
    <>
      <ul>
      {      
        Object.entries(powerstats).map(([key, value]) => {
          return(
            <li key={key}>
              <h4> {key} </h4>
              <span>{value}</span>
            </li>
          )
        })
      }
      <button
        className='btn btn-outline-primary w-100 mt-5'
        onClick={ onBackClick }
      > 
      Goback 
      </button>
      
      </ul>
    </>
  );
}
