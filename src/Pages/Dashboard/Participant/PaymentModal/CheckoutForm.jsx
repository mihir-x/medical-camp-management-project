import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import axiosSecure from '../../../../API/index';
import PropTypes from 'prop-types'
import Swal from "sweetalert2";

const CheckoutForm = ({campData, onCloseModal}) => {
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')

    const stripe = useStripe()
    const elements = useElements()

    useEffect(()=>{
        axiosSecure.post('/create-payment-intent', {price:campData?.fee})
        .then(res =>{
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })
    },[campData?.fee])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })
        if(error){
            setCardError(error.message)
        }
        else{
            setCardError('')
            console.log('payment method ',paymentMethod)
        }

        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: campData?.participant || 'anonymous',
                    name: campData?.name || 'anonymous',
                }
            }
        })
        if(confirmError){
            setCardError(confirmError.message)
        }
        else{
            if(paymentIntent.status === 'succeeded'){
                setTransactionId(paymentIntent.id)
                const paymentInfo = {
                    name: campData?.name,
                    email: campData?.participant,
                    campName: campData?.campName,
                    campId: campData?.campId,
                    campVenue: campData?.campVenue,
                    campDate: campData?.campDate,
                    campTime: campData?.campTime,
                    fee: campData?.fee,
                    organizer: campData?.organizer,
                    registerId: campData?._id,
                    approval: campData?.approval,
                    transactionId: transactionId,
                    paymentDate: new Date(),
                    payment: 'Paid',
                }
                try{
                    const res = await axiosSecure.put(`/payment/${campData?._id}`, paymentInfo)
                    if(res?.data?.savePayment?.insertedId){
                        onCloseModal()
                        Swal.fire({
                            title: "Paid!",
                            text: "You have paid for this camp successfully",
                            icon: "success"
                        });
                    }

                }
                catch(err){
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: err.message
                    })
                }
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <div className="flex flex-col items-center justify-center mt-5">
                {
                    cardError && <p className="text-red-500">{cardError}</p>
                }
                <button type="submit" disabled={!stripe || !clientSecret || transactionId} className="border bg-cyan-500 py-1 px-2 rounded-lg text-white font-bold">
                    {!transactionId ? 'Pay': 'Paid'}
                </button>
            </div>
        </form>
    );
};

export default CheckoutForm;

CheckoutForm.propTypes ={
    campData: PropTypes.object,
    onCloseModal: PropTypes.func,
}