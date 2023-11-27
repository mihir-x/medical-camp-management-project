import { Button, Card } from 'flowbite-react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const UpcomingCard = ({ camp }) => {
    return (
        <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={camp?.photo}
        >
            <h5 className="text-lg md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {camp?.name}
            </h5>
            <div className='flex justify-between'>
                <p className="font-normal text-gray-700 dark:text-gray-400">Fee: ${camp?.fee}</p>
                <p className="font-normal text-gray-700 dark:text-gray-400">Date: {camp?.date}</p>
            </div>
            <Link to={`/upcoming-camp-details/${camp?._id}`}>
                <Button outline gradientDuoTone="cyanToBlue">
                    Camp Details
                </Button>
            </Link>
        </Card>
    );
};

export default UpcomingCard;

UpcomingCard.propTypes = {
    camp: PropTypes.object,
}