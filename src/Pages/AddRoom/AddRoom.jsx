import { useState } from "react";
import RoomsClass from "../../api/room";
import { useNavigate } from "react-router-dom";

export function AddRoom() {
  const navigate = useNavigate();
  
  const roomsclass = new RoomsClass();
  
  const [data, setData] = useState({});
  
  const PostVideobeam = async () => {
    const response = await roomsclass.postRoom(data);

    if (!response.status) return alert("Error al guardar videobeam.");

    alert("Room guardado.");
    navigate("/videobeam");
  }

  const handleChange = (e) => {
    e.preventDefault();
    setData({...data, [e.target.name]: e.target.value});
  }
  
  return (
    <div>
      <span>Ingrese el numero del salon</span>
      <br />

      {/* <form onSubmit={PostVideobeam}> */}
        <form onChange={handleChange}>
          <input type="number" name="numberroom" />
        </form>
        <br />
        <button onClick={PostVideobeam}>Agregar salon</button>
      {/* </form> */}
    </div>
  )
}
