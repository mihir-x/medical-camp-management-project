import { useState } from "react";


const Banner = () => {
    const [current, setCurrent] = useState(0)
    const bannerPhoto = [
        'https://i.ibb.co/8N3XTTB/nsdvc9738i761.jpg',
        'https://i.ibb.co/tYGSrC4/koenigsegg-gemera.jpg',
        'https://i.ibb.co/nM5BVsm/teakak.jpg'
    ]
    const length = bannerPhoto.length
    const handlePrev = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    const handleNext = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    return (
        <div className="h-[20rem] relative">
            <button onClick={handlePrev} className="btn btn-primary rounded-full absolute left-5 top-[50%]">❮</button>
            <img src={bannerPhoto[current]} alt="" className="h-full w-full" />
            <button onClick={handleNext} className="btn btn-primary rounded-full absolute right-5 top-[50%]">❯</button>
        </div>
    );
};

export default Banner;