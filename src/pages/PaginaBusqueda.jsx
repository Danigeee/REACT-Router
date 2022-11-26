import React, { useState } from 'react'
import { getHerosByName } from '../helpers/getHeroByName';
import {HeroCard} from "../components/HeroCard"
import { useLocation, useNavigate } from 'react-router-dom';
import queryString  from "query-string"

export const PaginaBusqueda = () => {

    const location = useLocation();

    const navigate = useNavigate();

    const {q} = queryString.parse(location.search);
    
    const [searchInput, setSearchInput] = useState(q)

    const onInputChange = (event) =>{
        setSearchInput(event.target.value);
    }

    const onFormsubmit = (event) =>{
        event.preventDefault();
        if(searchInput.trim().length<3) return;
        navigate(`?q=${searchInput}`);
        
    }
    
    const heroes = getHerosByName(q);
    

  return (
    <div className='mt-5'>
        <div className='row'>
            <div className='col-5'>
                <h4 className='mb-3'>
                    Search Hero
                </h4>
                <form onSubmit={onFormsubmit}>
                    <input 
                    type="tex" 
                    placeholder='Search a hero'
                    className='form-control'
                    name='searchText'
                    value= {searchInput}
                    onChange= { onInputChange }
                    />
                    <button className='btn btn-dark w-100 mt-3'>Search</button>
                </form>
            </div>
            <div className='col-7'>
                    <h4 className='text-center'>Results</h4>
                    {
                        heroes.length > 0?
                        heroes.map(hero =>(
                            <HeroCard key={hero.id} {...hero}/>
                        ))
                        :
                        (
                            <div className='alert alert-danger'> 
                            Ther is no a hero wth this name  <b>{q}</b>
                            </div>
                        )
                    }
            </div>
        </div>
    </div>
  )
}
