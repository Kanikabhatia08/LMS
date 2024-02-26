import React from 'react'
import Img1 from "../images/Img1.png"
import Img2 from "../images/Img2.png"
import Img3 from "../images/Img3.png"
import Img4 from "../images/Img4.png"
import Img5 from "../images/Img5.png"
import Img6 from "../images/Img6.png"
import clock from "../images/Clock.png"
import hat from "../images/Hat.png"

function Featured({featured}) {

  const img =[Img1, Img2, Img3, Img4, Img5, Img6]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {featured.map((card,index)=>(
          <div key={card.id} className="col border-2 border-lightgray my-10 2xl:my-4 rounded-2xl 2xl:rounded-3xl hover:shadow-xl hover:transition-transform transform move-up">
            <div>
              <img src={img[index]} alt='featured' className="scale-[103.5%] ml-[9px] mt-[5px]"/>
            </div>

            <div className="xl:max-w-[90%] 2xl:max-w-[80%] mt-3 2xl:m-3">
                <p className="text-gray">by <span className="text-black">{card.sub}</span></p>
                <h3 className="text-xl font-semibold py-2">{card.title}</h3>
                <div className="flex flex-col 2xl:flex-row lg:gap-3 2xl:gap-8 py-2">
                    <p className="flex gap-2"><img src={hat} className="sm:h-4 lg:h-[20px] mt-1"/>{card.duration} Weeks </p>
                    <p className="flex gap-2"><img src={clock} className="sm:h-5 lg:h-[18px] mt-1"/>{card.students} Students </p>
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