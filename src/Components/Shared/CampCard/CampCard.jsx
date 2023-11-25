import { Button, Card } from "flowbite-react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const CampCard = ({ camp, role }) => {
    return (
        <Card className="max-w-sm" imgSrc={camp?.photo} horizontal>
            <h5 className="text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {camp?.name}
            </h5>
            <p className=" text-sm md:text-base font-normal text-gray-600 dark:text-gray-400">
                {camp?.description?.slice(0, 100)}
            </p>
            <div>
                <p className="font-bold text-gray-800">Specialized Services: <span className=" text-gray-600 font-normal">{camp?.services}</span></p>
                <p className="font-bold text-gray-800">Healthcare Professionals: <span className=" text-gray-600 font-normal">{camp?.professionals}</span></p>
                <p className="font-bold text-gray-800">Target Audience: <span className=" text-gray-600 font-normal">{camp?.audience}</span></p>
                <p className="font-bold text-gray-800">Venue: <span className=" text-gray-600 font-normal">{camp?.venue}</span></p>
                <div className="flex justify-between">
                    <p className="font-bold text-gray-800">Date: <span className=" text-gray-600 font-normal">{camp?.date}</span></p>
                    <p className="font-bold text-gray-800">Time: <span className=" text-gray-600 font-normal">{camp?.time}</span></p>
                </div>
            </div>
            <div className="flex justify-between">
                <Button disabled={role !== 'Participant'} outline gradientDuoTone="purpleToBlue">
                    Join Camp
                </Button>
                <Link to={`/camp-details/${camp?._id}`}>
                    <Button outline gradientDuoTone="cyanToBlue">
                        Camp Details
                    </Button>
                </Link>
            </div>
        </Card>
    );
};

export default CampCard;
CampCard.propTypes = {
    camp: PropTypes.object,
    role: PropTypes.string
}