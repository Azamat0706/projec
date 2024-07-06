import React , {useState} from 'react'

const State = () => {
  const [isLoading,setIsLoading] = useState(true);
  
  // if(isLoading) {
  //   setTimeout(() => {
  //     setIsLoading(false)
  //     console.log("render");
  //   },2000)
  // }
const [data, setData] = useState({
  firstName:"Azamat",
  lastName:"Mirsobitov",
  coin:100,
})
function addCoin() {
  setData((prev) => {
    return{
      ...prev,
      coin: prev.coin + 50,
    }
  })
}
console.log(data);

  
  return (
    <div>
      {isLoading && <h1>Loading ...</h1>}
      {!isLoading && <h1>Malumot keldi...</h1>}
    </div>
  )
}

export default State
