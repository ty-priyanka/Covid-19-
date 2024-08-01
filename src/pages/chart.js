import Plot from 'react-plotly.js';

 const Chart = (Props) => {
   
var data = Props.data
console.log(data,"data")

  return (
   
    <Plot
      data={[
        {
          "labels": [
            "Active Cases",
            "Recovered Cases",
            "Death Cases"
          ],
          "values": [
            data.ActiveCases, data.Recovered, data.Deaths
          ],
          "marker": {
          "colors": ["#ff0000", "#00ff00", "#000000"],
          "pattern": {
            "fillmode": "replace",
            "shape": "",
            "size": 2,
           
        
          }
        },
          "type": "pie",
          "domain": { "x": [0, 1] }
        },
      ]}
      layout={{ width: 300, height: 400,  }}
    />
   
   
  )
}

export default Chart;
