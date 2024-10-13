import { useNavigate } from 'react-router-dom';

export function CheckoutSuccessPage(){
    
    const navigate = useNavigate();

    const returnHome = () => {
        navigate('/');
      };
    return (
        <div>
        <div className="flex justify-center py-5">
            <div className="text-mutedTerracotta text-center p-5">
                <h1 className="text-xl font-semibold text-center">Your order has been confirmed!</h1>
                <p className="font-normal">Shipping will take place in around 2-3 days.</p>
                <p className="font-normal">You will receive a confirmation mail about your order shortly.</p>
            </div>
        </div>
        <div className="flex justify-center">
            <button onClick={returnHome} className="text-paleSand bg-deepBlue rounded-sm px-4 py-2">Go back to Home</button>
        </div>
        </div>
    )
}

export default CheckoutSuccessPage;