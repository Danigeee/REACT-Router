import '../App.css';
import { Link } from "react-router-dom";


export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
  powerstats,}) => {
    
  return (

    <div className="card row" >
      <img src={`/assets/${id}.jpg`} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{superhero}</h5>
        <Link to={`/hero/${id}`} className="btn btn-outline-primary">Detail</Link>
      </div>
    
</div>

  )
}



