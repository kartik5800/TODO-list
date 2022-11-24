// import React, { useEffect, useState } from 'react'

// export const CountDown = () => {
//     // const endTime = new Date('June 30, 2021 00:00:00').getTime();
//     const [currentTime,setcurrentTime] = useState(new Date().getTime());
//     const gap = 4852154865
  
//     const seconds = 1000; // in milliseconds
//     const minutes = seconds * 60;
//     const hours = minutes * 60;
//     const days = hours * 24;
  
//     const remainingDays = Math.floor(gap / days);
//     const remainingHours = Math.floor( (gap % days) / hours);
//     const remainingMinutes = Math.floor( (gap % hours) / minutes);
//     const remainingSeconds = Math.floor( (gap % minutes) / seconds);
  
//     useEffect(()=>{
//       setTimeout(()=>setcurrentTime(new Date().getTime()),1000);
//     },[currentTime]) // 11:30:55

//   return (
//     <>
//      <div>
//             <h1>COUNTDOWN TIMER</h1>

//             <form>
//                 <input
//                 type="number"
//                 // value="number"
//                 // onChange={(e)=> setdate1(e.target.value)}

//                 />
//                 <button >set</button>
//             </form>
            
//             <table>
//                 <tbody>
//                     <tr>
//                         <th>{remainingDays}</th>&nbsp;&nbsp;
//                         <th>{remainingHours}</th>&nbsp;&nbsp;
//                         <th>{remainingMinutes}</th>&nbsp;&nbsp;
//                         <th>{remainingSeconds}</th>&nbsp;&nbsp;
//                     </tr>
//                     <tr>
//                         <td>DAYS</td>&nbsp;&nbsp;
//                         <td>HOURS</td>&nbsp;&nbsp;
//                         <td>MINUTES</td>&nbsp;&nbsp;
//                         <td>SECONDS</td>&nbsp;&nbsp;
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
    
//     </>
//   )
// }
