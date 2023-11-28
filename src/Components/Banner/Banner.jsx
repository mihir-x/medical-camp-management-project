import { useState } from "react";


const Banner = () => {
    const [current, setCurrent] = useState(0)
    const bannerPhoto = [
        'https://i.ibb.co/n0VmMbC/Getty-Images-1214206519.jpg',
        'https://i.ibb.co/zZCJkXW/images.jpg',
        'https://i.ibb.co/j3W1h3R/6-Ways-of-Patient-Centered-Care-1.jpg'
    ]
    const length = bannerPhoto.length
    const handlePrev = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    const handleNext = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    return (
        <div className="h-[25rem] relative">
            <div className="absolute z-10 h-full w-full bg-black opacity-50"></div>
            <button onClick={handlePrev} className="btn btn-primary z-20 rounded-full absolute left-5 top-[50%]">❮</button>
            <img src={bannerPhoto[current]} alt="" className="-z-20 h-full w-full" />
            <div className="absolute z-50 top-1/3 left-[15%] md:left-[28%] text-center">
                <h1 className=" text-lg md:text-3xl lg:text-5xl font-bold text-white">Welcome to MediVoyage</h1>
                <h1 className=" text-base md:text-xl lg:text-3xl font-semibold text-white mt-5">30+ Successful Camps</h1>
                <h1 className=" text-base md:text-xl lg:text-3xl font-semibold text-white">Served 1000+ Patients</h1>
                
            </div>
            <button onClick={handleNext} className="btn btn-primary z-20 rounded-full absolute right-5 top-[50%]">❯</button>
        </div>
    );
};

export default Banner;