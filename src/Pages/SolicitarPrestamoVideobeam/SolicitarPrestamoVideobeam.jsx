export function SolicitarPrestamoVideobeam() {
  const obtenerData = () => [
    console.log("SOLICITAR VIDEOBEAM")
  ]
  
  return (
    <div>
      <form action={obtenerData}>
        <input type="text" />
        <button type="submit">SOLICITAR VIDEOBEAM</button>
      </form>
    </div>
  )
}
