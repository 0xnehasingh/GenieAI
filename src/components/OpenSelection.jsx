import React from 'react'

export const OptionSelection = ({arrayItems , selectOption}) => {
  return (
      <>
    <h1 className='heading'>GenieAI</h1>

    <div className = "grid-main">
    {arrayItems.map((item) => {
        return <div className="grid-child" onClick={() => selectOption(item.option) }>

        <h3>
            {item.name}
        </h3>
        <p>{item.discription}</p>


        </div>
    })}
    </div>

    </>
  )
}