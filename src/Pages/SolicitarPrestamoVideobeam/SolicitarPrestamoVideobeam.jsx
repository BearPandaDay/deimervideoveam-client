import {useEffect, useState} from 'react';

import VideobeamsClass from '../../api/videobeam';

export function SolicitarPrestamoVideobeam() {
  const videobeamsclass = new VideobeamsClass;

  const [videobeam, setVideobeam] = useState([]);

  const solicitarVideobeam = async (e) => {
    e.preventDefault();
    const date = new Date(e.target.prueba.value);

    const resultDateLocal = getDateLocal(date);

    {
      "id_room": "2oi34uo2i34hjkjhl234j",
      "id_videobeam": 113,
      "sn": 113,
      "date_prestamo": "2024-05-25T12:34:56.789Z"
    }
  }
  
  function getDateLocal(date) {
    // Ajustar la fecha a la hora local de Colombia (GMT-5)
    const colombiaOffset = 10 * 60; // GMT-5 en minutos GMT 10 en minutos
    const localOffset = date.getTimezoneOffset(); // Obtener el offset local en minutos

    // Ajustar la fecha al offset de Colombia
    const colombiaDate = new Date(date.getTime() + (localOffset - colombiaOffset) * 60000);

    // Formatear la fecha y hora en el formato deseado (por ejemplo, ISO 8601 
    return colombiaDate.toISOString();
  }
  
  async function handleGetVideobeams() {
    const response = await videobeamsclass.getVideobeams();
    setVideobeam(response);
  }
  
  useEffect(() => {
    handleGetVideobeams();
  })
  
  
  
  return (
    <div>
      <form onSubmit={solicitarVideobeam}>
        <input id="room" type="number" />
        <input id="sn" type="datetime-local" />
        <button type="submit">SOLICITAR VIDEOBEAM</button>
      </form>
    </div>
  )
}
