import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  
  return (
    <div>
      <img src="../../assets/Logo_Oficial_Unicartagena.png" alt="" />
      <h1>UNIVERSIDAD DE CARTAGENA SEDE EL CARMEN</h1>
      <button onClick={()=> navigate("/addvideobeam")}>AGREGAR VIDEOBEAM</button>
      <button onClick={()=> navigate("/addroom")}>AGREGAR SALON</button>
      <button onClick={()=> navigate("/videobeam")}>VER VIDEOBEAMS, SALONES, RESERVAS</button>
      <button onClick={()=> navigate("/solicitarprestamovideobeam")}>SOLICITAR VIDEOBEAM</button>
    </div>
  )
}
