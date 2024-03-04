import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react'
import { useNavigate}  from 'react-router-dom'

const Pokemon = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon'
    const [pokemones, setPokemones] = useState([])
    const [selectpokemon, setSelectpokemon] = useState("")
    const navigate = useNavigate()

    const chargerPokemon = async () =>{
        const res = await fetch(url)
        const { results } = await res.json()
        console.log (results)
        setPokemones(results)
    }
    
    useEffect(() => {
        chargerPokemon()
    },[])

    const detailPokemon = async () => {
        if (selectpokemon) navigate(`/pokemones/${selectpokemon}`);
        else alert("Debe seleccionar un pokemon");
      };

  return (
    <>
      <div className="cls-pokemon">
        <h1 className="title-select">Selecciona un pokemón</h1>
        <select value={selectpokemon} className="pokemones" onChange={({ target }) => setSelectpokemon(target.value)}>
          <option value="" disabled>Pokemones</option>
          {pokemones.map(({ name }, i) => (
            <option key={i} value={name}>{name}</option>
          ))}
        </select>
        <Button className="btn-poke" onClick={detailPokemon}>Ver detalle</Button>
      </div>
    </>
  );
};

export default Pokemon;
