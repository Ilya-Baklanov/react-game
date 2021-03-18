// class GameBoard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       position_1_1: 0,
//       position_1_2: 0,
//       position_1_3: 0,
//       position_1_4: 0,
//       position_2_1: 0,
//       position_2_2: 0,
//       position_2_3: 0,
//       position_2_4: 0,
//       position_3_1: 0,
//       position_3_2: 0,
//       position_3_3: 0,
//       position_3_4: 0,
//       position_4_1: 0,
//       position_4_2: 0,
//       position_4_3: 0,
//       position_4_4: 0,
//     };
//     this.setRandomPosition = this.setRandomPosition.bind(this);
//   }

//     componentDidMount() {
//     document.addEventListener('keydown', (e) => {
//       switch (e.key) {
//         case 'ArrowDown':
//           this.setRandomPosition(1, Math.ceil(Math.random()*4))
//           break;
//         case 'ArrowUp':
//           this.setRandomPosition(4, Math.ceil(Math.random()*4))
//           break;
//         default: return alert(e.key);
//       }
//     });
//   }

//   setRandomPosition(row, column) {
//     if (row === 1) {
//       if (column === 1) {
//           this.setState({
//             position_1_1: 2,
//           });
//       }
//       if (column === 2) {
//           this.setState({
//             position_1_2: 2,
//           });
//       }
//       if (column === 3) {
//           this.setState({
//             position_1_3: 2,
//           });
//       }
//       if (column === 4) {
//           this.setState({
//             position_1_4: 2,
//           });
//       }
//     }
//     if (row === 2) {
//       if (column === 1) {
//           this.setState({
//             position_2_1: 2,
//           });
//       }
//       if (column === 2) {
//           this.setState({
//             position_2_2: 2,
//           });
//       }
//       if (column === 3) {
//           this.setState({
//             position_2_3: 2,
//           });
//       }
//       if (column === 4) {
//           this.setState({
//             position_2_4: 2,
//           });
//       }
//     }
//     if (row === 3) {
//       if (column === 1) {
//           this.setState({
//             position_3_1: 2,
//           });
//       }
//       if (column === 2) {
//           this.setState({
//             position_3_2: 2,
//           });
//       }
//       if (column === 3) {
//           this.setState({
//             position_3_3: 2,
//           });
//       }
//       if (column === 4) {
//           this.setState({
//             position_3_4: 2,
//           });
//       }
//     }
//     if (row === 4) {
//       if (column === 1) {
//           this.setState({
//             position_4_1: 2,
//           });
//       }
//       if (column === 2) {
//           this.setState({
//             position_4_2: 2,
//           });
//       }
//       if (column === 3) {
//           this.setState({
//             position_4_3: 2,
//           });
//       }
//       if (column === 4) {
//           this.setState({
//             position_4_4: 2,
//           });
//       }
//     }
//   };

//   render() {
//     const {
//       position_1_1,
//       position_1_2,
//       position_1_3,
//       position_1_4,
//       position_2_1,
//       position_2_2,
//       position_2_3,
//       position_2_4,
//       position_3_1,
//       position_3_2,
//       position_3_3,
//       position_3_4,
//       position_4_1,
//       position_4_2,
//       position_4_3,
//       position_4_4,
//     } = this.state;

//     return (
//       <div className='wrapper'>
//           <div>
//             {position_1_1}
//           </div>
//           <div>
//             {position_1_2}
//           </div>
//           <div>
//             {position_1_3}
//           </div>
//           <div>
//             {position_1_4}
//           </div>
//           <div>
//             {position_2_1}
//           </div>
//           <div>
//             {position_2_2}
//           </div>
//           <div >
//             {position_2_3}
//           </div>
//           <div >
//             {position_2_4}
//           </div>
//           <div >
//             {position_3_1}
//           </div>
//           <div >
//             {position_3_2}
//           </div>
//           <div >
//             {position_3_3}
//           </div>
//           <div >
//             {position_3_4}
//           </div>
//           <div>
//             {position_4_1}
//           </div>
//           <div >
//             {position_4_2}
//           </div>
//           <div >
//             {position_4_3}
//           </div>
//           <div >
//             {position_4_4}
//           </div>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <GameBoard />,
//   document.getElementById('root')
// );
