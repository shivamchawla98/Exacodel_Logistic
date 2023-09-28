// import React from 'react'
// import { Pie } from 'react-chartjs-2'
// import { Chart, registerables } from 'chart.js'
// Chart.register(...registerables)

// const state = {
//   labels: [
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//     'Sunday',
//   ],
//   datasets: [
//     {
//       label: 'Class Strength',
//       backgroundColor: [
//         'Indigo',
//         'Purple',
//         'Yellow',
//         'Teal',
//         'Red',
//         'Navy',
//         'Brown',
//       ],
//       data: [10, 14, 17, 16, 19, 16, 17],
//     },
//   ],
// }

// export default class App extends React.Component {
//   render() {
//     return (
//       <div className='w-1/2 p-4 shadow-sm rounded-sm'>
//         <p className='p-4'>Weekly data</p>
//         <Pie
//           data={state}
//           options={{
//             responsive: true,
//             plugins: {
//             title: {
//               display: true,
//               text: 'Class Strength',
//             },
//             legend: {
//               display: true,
//               position: 'right',
//             },
//           }
//           }}
//         />
//       </div>
//     )
//   }
// }
