import { useEffect, useState } from 'react';
import VideobeamsClass from '../../api/videobeams';

export function Videobeams() {
  const videobeamsclass = new VideobeamsClass;

  const [videobeams, setVideobeams] = useState([]);
  const [keys, setKeys] = useState([]);

  async function getVideobeams() {
    const response = await videobeamsclass.getVideobeams();

    if (!response.status) return alert(response.msg);

    setVideobeams(response.msg);
    setKeys(Object.keys(response.msg[0]?response.msg[0]:{}))
  }

  useEffect(() => {
    getVideobeams();
  }, [])
  // setKeys(a);
  
  return (
    <>
      <table className="my-table">
        <thead>
          <tr>
            {keys.map((key, index) => {
              if (!key)
              return <th key={index}>{String(key)}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {videobeams.map((data, index) => (
            <tr key={index}>
              <td>{data._id&&data._id}</td>
              <td>{data.sn&&data.sn}</td>
              <td>{data.status?.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
