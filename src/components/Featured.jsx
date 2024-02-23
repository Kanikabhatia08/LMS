import React from 'react'

function Featured({featured}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {featured.map((card)=>(
          <div key={card.id} className="col border-2 border-lightgray my-10 2xl:my-4 rounded-2xl 2xl:rounded-3xl hover:shadow-xl hover:transition-transform transform move-up">
            <div>
              <img src={card.image} className="scale-[116%] sm:scale-[115%] lg:scale-[118%] xl:scale-[112%] 2xl:scale-[107%] mt-[9px]"/>
            </div>

            <div className="xl:max-w-[90%] 2xl:max-w-[80%] mt-3 2xl:m-3">
                <p className="text-gray">by <span className="text-black">{card.sub}</span></p>
                <h3 className="text-xl font-semibold py-2">{card.title}</h3>
                <div className="flex flex-col 2xl:flex-row lg:gap-3 2xl:gap-8 py-2">
                    <p className="flex gap-3"><img src={card.weekImg} className="sm:h-4 lg:h-[16px] mt-1"/>{card.duration} Weeks </p>
                    <p className="flex gap-3"><img src={card.clock} className="sm:h-5 lg:h-[20px]"/>{card.students} Students </p>
                </div>
            </div>

            <div>
                <hr/>
                <div className="flex justify-between max-w-[90%] m-3">
                    <p className="text-lg text-green-600">{card.cost}</p>
                    <p className="text-lg">View More</p>
                </div>
            </div>

          </div>
        ))}            
    </div>
  )
}

export default Featured