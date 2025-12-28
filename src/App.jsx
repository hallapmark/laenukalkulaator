import { useRef, useState } from 'react';
import './App.css'

function App() {
  const ostuhind = useRef();
  const sissemakse = useRef();
  const marginaal = useRef();
  const euribor = useRef();
  const periood = useRef();
  const [laenusumma, setLaenusumma] = useState(75000);
  const [intress, setIntress] = useState(3.85);
  const [kuumakse, setKuumakse] = useState(348.73);

  const arvutaLaenusumma = () => {
    setLaenusumma(ostuhind.current.value - sissemakse.current.value);
    arvutaKuumakse();
  }

  const arvutaIntress = () => {
    const result = Number(marginaal.current.value) + Number(euribor.current.value);
    setIntress(result.toFixed(2));
    arvutaKuumakse();
  }

  const arvutaKuumakse = () => {
    const result = (ostuhind.current.value - sissemakse.current.value) / 12 
    / periood.current.value * (Number(marginaal.current.value) + Number(euribor.current.value)) 
    / 2.3;
    setKuumakse(result.toFixed(2));
  }

  return (
    <>
      <label>Kinnisvara ostuhind</label>
      <input type="number" defaultValue={75000} ref={ostuhind} onChange={arvutaLaenusumma} /> <br />
      <label>Sissemakse</label>
      <input type="number" defaultValue={0} ref={sissemakse} onChange={arvutaLaenusumma} /> <br />
      <div>Laenusumma: {laenusumma}</div>
      <label>Periood</label>
      <input type="number" defaultValue={30} ref={periood} onChange={arvutaKuumakse}/> <br />
      <label>Marginaal</label>
      <input type="number" defaultValue={1.7} ref={marginaal} onChange={arvutaIntress} /> <br />
      <label>Euribor</label>
      <input type="number" defaultValue={2.15} ref={euribor} onChange={arvutaIntress} /> <br />
      <div>Intress kokku: {intress}</div>
      <div>Kuumakse: {kuumakse}</div>
    </>
  )
}

export default App
