import { useParams } from "react-router-dom";


const CampDetails = () => {

    const {id} = useParams()
    

    return (
        <div>
            This is camp details page
        </div>
    );
};

export default CampDetails;