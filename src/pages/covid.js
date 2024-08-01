import React, { useState, useEffect } from 'react';
import statesData from '../pages/states.json';
import covidCase from '../pages/covidcase.json';
import mapData from '../pages/map.json';
import Chart from "../pages/chart";
import MapView from "../pages/mapview";


export const Covid = () => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [covidData, setCovidData] = useState([])
  const [mapView,setMapView]=useState([])

  useEffect(() => {
    //set the state data when component mount
    setStates(statesData.states);
  }, []);

  const handleSelectChange = (event) => {
    const selectedState = event.target.value;
    // Updates the selected state
    setSelectedState(selectedState);
    // Updates COVID data based on the selected state
    setCovidData(covidCase.India.States[selectedState]);
    setMapView(mapData[selectedState]);

  };

  return (
    <div>
      <h5 className="text-center text-primary">States</h5>

      <div className="text-center">
        <select value={selectedState} onChange={handleSelectChange}>
          <option value="" disabled>
            Select a state...
          </option>
          {states.map((state) => (
            <option key={state.id} value={state.name}>
              {state.name}
            </option>
          ))}
        </select>
        {/* //rendering the covid data */}
        <p className="text-center" >Total Cases:{covidData.TotalCases}</p>
        
        {covidData && (
          <div>
            {/* <p>Total Cases: {covidData.TotalCases}</p> */}
            <p>Active Cases: {covidData.ActiveCases}</p>
            <p>Recovered: {covidData.Recovered}</p>
            <p>Deaths: {covidData.Deaths}</p>
          </div>
        )}
        
        {!!mapView && !!covidData && !!selectedState &&(
          <div>
         <Chart data={covidData} />
         <MapView mapData={mapView} covidData={covidData} />
         </div>
        )}
       
      </div>
    </div>
  );
};


