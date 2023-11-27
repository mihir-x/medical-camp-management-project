import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Modal } from "flowbite-react";
import PropTypes from 'prop-types'
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PUBLISHABLE_KEY)

const PaymentModal = ({openModal, onCloseModal, campData, refetch}) => {
    console.log(campData)
    return (
        <div>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm campData={campData} onCloseModal={onCloseModal} refetch={refetch}></CheckoutForm>
                    </Elements>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default PaymentModal;

PaymentModal.propTypes ={
    openModal: PropTypes.func,
    onCloseModal: PropTypes.func,
    campData: PropTypes.object,
    refetch: PropTypes.func,
}