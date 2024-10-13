import Contactform from "../../components/ContactForm";

export function Contact(){
    return (
        <div>
            <div>
                <div className="flex justify-center py-2">
                    <h1 className="text-2xl font-normal">Contact Us</h1>    
                </div>
                <div className="flex justify-center">
                    <p className="text-lg font-light text-center">For any inqueries or questions, please contact us with the form below</p>            
                </div>
            </div>
            <div className="flex justify-center py-6">
                <Contactform/>
            </div>
        </div>
    );
}

export default Contact;