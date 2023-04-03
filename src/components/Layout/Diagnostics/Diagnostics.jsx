import React from 'react';
import style from './Diagnostics.module.css';
import { Navbar } from '../Navbar/Navbar';
// import io from 'socket.io-client';
import axios from 'axios';



export const Diagnostics = () => {

axios
  .get('http://192.168.0.116:3000/diagnostics')
    .then(response => {

    let data = response.data;
        console.log(data);
        
  return (
    <div className={style.diagnostics_section}>
      <Navbar />
      <div className={style.diagnostics_blur}>
        <div className="data">
          {data.map(item => (
            <ul key={item.id}>
              <h2>Axis </h2>
              <li>
                <p>
                  Parity: <span>{item.parity}</span>
                </p>
              </li>
              <li>
                <p>
                  Debug: <span>{item.debug}</span>
                </p>
              </li>
              <li>
                <p>
                  Error: <span>{item.error}</span>
                </p>
              </li>
              <li>
                <p>
                  Warning: <span>{item.warning}</span>
                </p>
              </li>
              <li>
                <p>
                  Motion on going: <span>{item.motionOnGoing}</span>
                </p>
              </li>
              <li>
                <p>
                  Driver state: <span>{item.driverState}</span>
                </p>
              </li>
              <li>
                <p>
                  Working mode: <span>{item.workingMode}</span>
                </p>
              </li>
              <li>
                <p>
                  Target position: <span>{item.targetPosition}</span>
                </p>
              </li>
              <li>
                <p>
                  Actual position: <span>{item.actualPosition}</span>
                </p>
              </li>
              <li>
                <p>
                  Actual torque: <span>{item.actualTorque}</span>
                </p>
              </li>
              <li>
                <p>
                  Actual frequency: <span>{item.actualFrequency}</span>
                </p>
              </li>
              <li>
                <p>
                  Error code: <span>{item.errorCode}</span>
                </p>
              </li>
              <li>
                <p>
                  Warning code: <span>{item.warningCode}</span>
                </p>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
  })
  .catch(error => {
    console.log(error);
  });

//   const [data, setData] = useState();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await axios.get('http://192.168.0.116:3000');
//           setData(result.data);
//           console.log(result)
//           console.log(result.data);
//                     console.log(data);
          
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

};
