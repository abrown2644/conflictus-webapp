import React, {useEffect, useState} from "react"
import SelectSearch from 'react-select-search'
import Select from 'react-select'
import LeafletMap from './LeafletMap'
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';

import './Map.scss';

function Map({ theme }) { 
    let year = new Date().getFullYear()    
  
    const [selectedWar, setSelectedWar] = useState({
      value: 1,
      label: "Seven Years' War"
    });
    const [warsState, setWarsState] = useState({
        loading: true,
        wars: null,
        error: null
    });    
    const [battlesState, setBattlesState] = useState({
        loading: true,        
        battles: null
    });
    const [sliderValue, setSliderValue] = useState([year - 100, year ]);
    
    //fetch wars
    useEffect(() => {
        fetch("https://localhost:44346/api/wars")
          .then(res => res.json())
          .then(
            (result) => {            
              console.log(result.data)
              setWarsState({ loading:false, wars: result.data});
            },
            
            (error) => {
              setWarsState({ loading:false, error: error});
            }
          )
      }, [])

    //initial battles to load
    useEffect(() => {
      fetchBattles(selectedWar)
    }, [])


    function fetchBattles(war) {
      let url = `https://localhost:44346/api/battles/war=${war.value}`;
      fetch(url).then(res => res.json())
      .then(result => {
        // console.log(result.data);
        setBattlesState({battles: result.data});
      })
      // console.log(war);      
      setSelectedWar({value: war.value, label: war.label});
      document.title = war.label;     
      // document.getElementById('map-title').innerText = war.label; 
    };
    
    function fetchBattlesByDates(sliderValue) { 
      console.log("fetching by date range!");
      console.log(sliderValue);        
      let url = `https://localhost:44346/api/battles/date=${sliderValue[0]},${sliderValue[1]}`;
      fetch(url).then(res => res.json())
      .then(result => {
        // console.log(result.data);
        setBattlesState({battles: result.data});
      },[])       
      document.title = `${sliderValue[0]} - ${sliderValue[1]}`;      
    };

   
    //slider
    const handleSliderChange = (event, data) => {
      // console.log(data);
      setSliderValue(data);      
    };    

    // function valuetext(sliderValue) {
    //   return `value: ${sliderValue}`;
    // }

    return (        
        <div id="map">                 
          <Grid container style={{ position: "absolute", zIndex:"99999", alignItems: "center", marginTop: "8px"}}>
            {/* <Grid item xs={2} md={1}>
              <h4 id="map-title">title here</h4>
            </Grid> */}
            <Grid item xs={12} md={12} style={{display: "flex", justifyContent: "flex-end"}}>
              <Grid item xs={12} md={3} style={{marginLeft: "10px",marginRight: "10px", border: "none", borderRadius: "0px"}}>
                {warsState.wars ? 
                <Select onChange={(e) => fetchBattles(e)} 
                  placeholder={"select a war"} 
                  options={warsState.wars.map((war, index) =>( {value:war.id, label:war.name} ))} 
                  className="selectMenu"
                  style={{marginRight: "10px"}}
                />
                : 
                <Select defaultValue={1} 
                  isLoading={true} 
                  isDisabled={true} 
                  placeholder={"loading.."}
                  options={"none"} 
                  style={{marginRight: "10px"}}
                />}
              </Grid>              
            </Grid>            
          </Grid>
          <Grid style={{position: "absolute", right:"12px", top: "62px", zIndex: "999", background: "cyan", maxHeight: "600px" , width:"317px", padding: "10px", overflow: "auto"}}>                
          <Grid>{selectedWar.label ? <b>{selectedWar.label}</b> : 'title'}</Grid>   
          <Grid>{battlesState.battles ? 
            <div>
              <img src={battlesState.battles[0].war.imageUrl} width="100%"></img> 
              <p>{battlesState.battles[0].war.date}</p>
              <p style={{fontSize: ".89rem"}}>{battlesState.battles[0].war.summary}</p>
              <a href={battlesState.battles[0].war.url}>Link</a>
            </div>
            : 'date'}
          </Grid>            
          </Grid>
          <Grid container style={{display: "flex", justifyContent: "center", position: "absolute", zIndex:"999", alignItems: "center", bottom: "20px"}}>
            <Grid item xs={9}>
              <div style={{display: "flex", justifyContent: "space-evenly"}}>              
                <b>{sliderValue[0]}{sliderValue[0] > 0 ? '' : 'BC'}</b>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Arrow_east.svg" height="15px"></img>                                      
                <b>{sliderValue[1]}</b>                                    
                <Button variant="contained" onClick={() => fetchBattlesByDates(sliderValue)}>FIND</Button>
              </div>
              <Slider
                value={sliderValue}
                onChange={handleSliderChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={-1273}
                max={new Date().getFullYear()}
                // getAriaValueText={valuetext}
              />
            </Grid>
          </Grid>
          
          {battlesState.battles ? <LeafletMap theme={theme} battleItems={battlesState.battles}/> : <LeafletMap theme={theme} />}
          {/* {battlesState.battles && console.log(battlesState.battles)}    */}
        </div>
    )
}

export default Map