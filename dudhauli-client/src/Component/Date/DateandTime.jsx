// import React, { useState, useEffect } from 'react';

// const DateandTime = () => {
//   const [currentDateTime, setCurrentDateTime] = useState(new Date());

//   const updateDateTime = () => {
//     setCurrentDateTime(new Date());
//   };

//   useEffect(() => {
//     const intervalId = setInterval(updateDateTime, 1000);

//     // Cleanup the interval on component unmount
//     return () => clearInterval(intervalId);
//   }, []);

//   // Options for formatting the date and time
//   const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
//   const dateOptions = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };

//   // Format the date and time strings
//   const formattedTime = currentDateTime.toLocaleString(undefined, timeOptions);
//   const formattedDate = currentDateTime.toLocaleString(undefined, dateOptions);

//   return (
//     <>
//       <h2>{formattedTime}</h2>
//       <p>{formattedDate}</p>
//     </>
//   );
// };

// export default DateandTime;
