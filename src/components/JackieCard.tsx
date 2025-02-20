import React from 'react'

const JackieCard = ({
    title,
    description,
    image,
    color,
    opacity,
    
}: any) => {
    return (
        <div>
            <div className="relative bg-[#0b2c3d] h-72 rounded-xl overflow-hidden">
                <img src={image} alt="" className='w-full h-full object-cover'/>

                {/* Overlay */}
                <div className={`absolute top-0 left-0 right-0 bottom-0 p-6 text-white parent-card`}
                    style={{
                        backgroundColor: `${color ?? "#534abd"}${opacity ? opacity : `cc`} `,
                    }}>
                    <h3 className='text-lg font-semibold text-[#b39359]'>{title}</h3>
                    <br />
                    <p className="text-sm text-white">{description}</p>
                </div>
            </div>
        </div>
    )
}

const JackieCardContain = ({
    title,
    description,
    image,
    color,
    opacity,
    url,

}: any) => {
    return (
        <div className='bg-white'>
            <div className="relative bg-white h-72 rounded-lg overflow-hidden ">
                <img src={image} alt="" className='w-full h-full object-cover'/>

                {/* Overlay */}
                <div className={`absolute top-0 left-0 right-0 bottom-0 p-6 text-white parent-card`}
                    style={{
                        backgroundColor: `${color ?? "#"}${opacity ? opacity : `cc`} `,
                    }}>
                    <h3 className='text-xl font-semibold'>{title}</h3>
                    <br />
                    <p className="text-lg">{description}</p>
                </div>
            </div>
        </div>
    )
}

export {JackieCardContain};
export default JackieCard;