import { Fragment, useRef, useState } from 'react';
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
    <Fragment>
      <h1>Laenukalkulaator</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ display: "flex", gap: "12px", justifyContent: "space-between", alignItems: "center" }}>
          <label className="field-label">Kinnisvara ostuhind</label>
          <input type="number" defaultValue={75000} ref={ostuhind} onChange={arvutaLaenusumma} />
        </div>
        <div style={{ display: "flex", gap: "12px", justifyContent: "space-between", alignItems: "center" }}>
          <label className="field-label">Sissemakse</label>
          <input type="number" defaultValue={0} ref={sissemakse} onChange={arvutaLaenusumma} />
        </div>
        <div>Laenusumma: {laenusumma}</div>
        <div style={{ display: "flex", gap: "12px", justifyContent: "space-between", alignItems: "center" }}>
          <label className="field-label">Periood</label>
          <input type="number" defaultValue={30} ref={periood} onChange={arvutaKuumakse}/>
        </div>
        <div style={{ display: "flex", gap: "12px", justifyContent: "space-between", alignItems: "center" }}>
          <label className="field-label">Marginaal</label>
          <input type="number" defaultValue={1.7} ref={marginaal} onChange={arvutaIntress} />
        </div>
        <div style={{ display: "flex", gap: "12px", justifyContent: "space-between", alignItems: "center" }}>
          <label className="field-label">Euribor</label>
          <input type="number" defaultValue={2.15} ref={euribor} onChange={arvutaIntress} />
        </div>
        <div>Intress kokku: {intress}</div>
        <div>Kuumakse: {kuumakse}</div>
      </div>
    </Fragment>
  )
}

export default App
