import React , { useState } from "react";

const LotteryGame =() => {
  const [ numbers, setNumbers] = useState([]);
  const [sum , setSum] =  useState(null);
  const [message, setMessage] = useState("");

  const generateNumbers = () =>{
    const num1 = Math.floor(Math.random() * 9 )+ 1 ;
    const num2 = Math.floor(Math.random() * 9 )+ 1 ;
    const num3 = Math.floor(Math.random() * 9 )+ 1 ;

    const total = num1 + num2 + num3;
    setNumbers([num1 , num2 , num3]);
    setSum(total);

    const winningSum = 15;
     
    if ( total === winningSum){
      setMessage("🎉 Congratulations! You are the winner! 🎉");
    } else{
      setMessage("😞 Better luck next time!");
    }
  };


  return(
    <div  className="flex items-center h-screen  justify-center bg-purple-200 ">
      <div className="bg-white p-5 rounded-lg shadow-lg text-center">
        <h1 className="font-extrabold p-2 text-3xl">Lottery Game </h1>
        <h2 className="p-2.5" >Guess the Number</h2>        
        <p className="p-2.5 m-1.5">Cick On Button To Get New Ticket</p>
          
        <button onClick={generateNumbers} className="bg-pink-300 hover:bg-red-200 p-2 rounded">
          <p  className="font-extrabold p-1">Click Me!</p>
        </button>

        {numbers.length > 0 && (
          <div className="mt-4">
            <p className="text-lg">Guess the Number: {numbers.join("")}</p>
            <p className="text-lg font-semibold">Sum: {sum}</p>
            <p className="text-lg font-bold mr-2">{message}</p>
          </div>  
        )}  
      </div>
    </div>  
  );
};

export default LotteryGame;