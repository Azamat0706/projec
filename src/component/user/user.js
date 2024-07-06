// import React, { useState } from 'react'
// import './user.css'
// const Users = () => {
//     const [data,setData] = useState( [
//         {id:1,name:'ismoil',hobby:'play football'},
//         {id:2,name:'Muhammadali',hobby:'listening to music'},
//         {id:3,name:'Jas',hobby:'reading books'},
//         {id:4,name:'Hayotbek',hobby:'playing chess'}
//     ])
//     const handleClikDelete  = (id) => {
//         setData(data.filter(user => user.id !==id))
//     }
//   return (
//     <div>
//         <h1 style={{color:'red',fontSize:'24px',textAlign:'center',marginTop:'50px'}}>Users data</h1>
//         <ul style={{width:'80%',margin:'50px auto'}}>
//             {data.map((user,index) => {    
//                 return(
//                  <li onClick={() => {handleClikDelete(user.id)}} key={index}>{user.id}. {user.name} - {user.hobby} <button>delete</button></li>
//                 )
//             })}
//         </ul>
      
//     </div>
//   )
// }

// export default Users
// //componentlar ajratib , ulardan foydalanish 
// //props, va uning ishlatilishi
// //hooklar
// //redux toolkit