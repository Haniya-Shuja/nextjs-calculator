'use client'

import React, { useState } from 'react'


const calculator = () => {
    const [expression , setexpression] = useState('');
    const handleButtonClick = (value:string) =>{
        // setExpression((prevExpression)=> prevExpression + value ) 
        setexpression((prevExpression)=>prevExpression +value)
    }

    const handleCalculate =() =>{
        try{
         setexpression(eval(expression))
        
        }
        catch(error){
setexpression('Error')
        }
    }

    const handleCare = () =>{
        setexpression('')
    }
  return (
<>

    <div className='flex justify-center items-center h-screen'>
       
   <div className='w-94 mt-2 p-5 bg-green-300 rounded-lg'>
    <input 
    type='text'
    className='w-full mb-4p-2 text-xl text-right bg-white rounded-lg'
    value={expression}
    readOnly />
<div className='grid grid-cols-4 gap-4'>
    {/* 1st row */}
    {['7','8', '9', '/'].map((value, index)=>(
        <button  
        key={index}
        className='p-2 mt-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
        onClick={()=>handleButtonClick(value)}
       >
           {value} 
        </button>
    ))}
      {/* 2nd row */}

{['4','5', '6', '*'].map((value, index)=>(
        <button  
        key={index}
        className='p-2 w-15 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
        onClick={()=>handleButtonClick(value)}
       >
           {value} 
        </button>
    ))}

  {/* 3rd row */}
{['1','2', '3', '-'].map((value, index)=>(
        <button  
        key={index}
        className='p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
        onClick={()=>handleButtonClick(value)}
       >
           {value} 
        </button>
    ))}


 {/* 4th row */}
 {['0','.', '=', '+'].map((value, index)=>(
        <button  
        key={index}
        className='p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
        onClick={()=> value === '=' ? handleCalculate (): handleButtonClick(value)}
       >
           {value} 
        </button>
    ))}

</div>
<button className='mt-4 p-2 w-full bg-red-400 rounded-lg text-white'
onClick={handleCare}>

clear
</button>

   </div>
   </div>
   </>
  )
}

export default calculator