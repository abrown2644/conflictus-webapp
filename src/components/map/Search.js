import React, {useEffect, useState} from "react"
import FetchWars from '../../data/Wars.js'
import SelectSearch from 'react-select-search';

import './Search.scss';

const Search = () => {

    const [warState, setWarState] = useState({
        loading: true,
        wars: null,
        error: null
    });

    useEffect(() => {
        fetch("https://localhost:44346/api/wars")
          .then(res => res.json())
          .then(
            (result) => {            
              console.log(result.data)
              setWarState({ loading:false, wars: result.data});
            },
            
            (error) => {
              setWarState({ loading:false, error: error});
            }
          )
      }, [])


    if (warState.loading) return <p>loading..</p>;
    return (
      <form>
        <SelectSearch
            options={warState.wars.map((war, index) =>( { label:war.name, name:war.name, value:war.id } ))}
            search                
            placeholder="Select a conflict"
        /> 
      </form>
    )
}

export default Search