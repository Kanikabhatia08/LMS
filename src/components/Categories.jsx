import React from 'react'
import art from '../images/Art.png'
import dev from '../images/Dev.png'
import com from '../images/com.png'
import vid from '../images/Vid.png'
import mar from '../images/Market.png'
import pho from '../images/Photo.png'
import con from '../images/Content.png'
import fin from '../images/Finance.png'
import sci from '../images/Science.png'


function Categories({ categories }) {
    const img =[art, dev, com, vid, mar, pho, con, fin, sci, art];

    return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-center gap-4 mt-4 text-center">
        {categories.map((category, index) => (
            
        <div key={category.id} className="col hover:transition-transform transform move-up text-center
            border-lightgray xl:py-16 xl:px-6 border-[2px] py-20 p-10 rounded-2xl hover:text-orange hover:shadow-xl ">
                <img className="mx-auto py-2"  src={img[index]} alt="icon" />
                <h3 className="font-medium xl:text-lg">{category.title}</h3>
                <p className="font-light text-gray">{category.count} Courses</p>
        
        </div>
        ))}
    </div>
    );
}

export default Categories