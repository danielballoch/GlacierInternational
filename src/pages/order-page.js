import React, {useEffect, useState} from "react"
import Layout from "../components/layout"
import styled from '@emotion/styled';
import { useForm } from "react-hook-form"
import { navigate, Link } from "gatsby";

const Container = styled.div`
margin: 200px auto;
min-height: 90vh;
heiht: 100%;
max-width: 800px;
width: 90%;
/* margin: 0 10px; */
form {
    display: flex;
    flex-direction: column;
    text-align: left;
    .submit-message {
        display: flex;
        margin: auto;
        transition: .3s;
        opacity: 1;
    }
    .submit-message-none {
        display: flex;
        opacity: 0;
        margin: auto;
    }
    div {
        display: flex;
        justify-content: space-between;
        width: 100%;
        label {
            width: 45%;
        }
        @media(max-width: 940px){
        flex-direction: column;
        label {
            width: 100%;
        }
        }
    }
    input, textarea {
        box-sizing: border-box;
        width: 100%;
        margin: 0;
        padding: 10px;
    }
    button {
    background-color: #4C974C;
    color: white;
    width: 80%;
    font-size: 20px;
    letter-spacing: 1.4px;
    padding: 14px;
    font-weight: 600;
    font-family: 'Heebo',sans-serif;
    border: none;
    margin: 40px auto 40px auto;
    border-radius: 5px;
    transition: .3s;
    :hover {
        border: none;
        background-color: #448744;
        cursor: pointer;
    }
}
}
`

const Flex = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
p {
    /* padding-right: 10px; */
}
`

export default function OrderPage ({location}){
    const [order, setOrder] = useState([]);
    {/* Here I need to check for location & add to cache || if no location, check for localstorage and set that as state */}
    useEffect(() => {
        const localOrder = JSON.parse(localStorage.getItem('order'));
        console.log("localOrder: ", localOrder);
        if(location.state.model && order.length === 0 ){
            setOrder({
                model: location.state.model,
                grade: location.state.grade,
                color: location.state.color,
                bed: location.state.bed,
                price: location.state.price
            })
            localStorage.setItem('order', JSON.stringify(order));
        } else if (!location && localOrder){
            console.log("localstorage worksl")
            setOrder(localOrder);
        }

        
        
        
      }, [order]);
    const [formSent, setFormSent] = useState("");
    let nf = new Intl.NumberFormat('en-US');
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;
    console.log(today)
    dd = Number(dd) + 7;
    today = mm + '/' + dd + '/' + yyyy;
    
    console.log(location.state)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    async function onSubmit(data){
        console.log("this is where form data should log")
        setFormSent("sending")
        console.log(data)
        fetch(`/api/xero`, {
          method: `POST`,
          body: JSON.stringify({
            name: data.Name,
            phone: data.Phone,
            email: data.Email,
            model: location.state.model,
            grade: location.state.grade,
            color: location.state.color,
            bed: location.state.bed,
            price: location.state.price
        }),
          headers: {
            "content-type": `application/json`,
          },
        })
          .then(res => res.json())
          .then(body => {
            console.log(`response from API:`, body);
            // console.log("Response status: ", body.response.statusCode);
            if (body.response.statusCode === 200){
                console.log("sent!");
                setFormSent("sent");
                navigate("/", {state: {formSent: true, model: location.state.model}});
            } else {
                console.log("error!", body)
                setFormSent("error");
            }
            
            
          })
      }
      console.log({ errors })
      console.log(location.state)
    return(
        <Layout title="Order Page | Glacier International" invertNav={true}>
            <Container>
            <h1>Order Details:</h1>
            {/* Here I need to add check for cached model/build */}
            {location.state && location.state.model ? 
            <div>
                <Flex>
                    <p>Model: {location.state.model} Grade: {location.state.grade} &nbsp;</p>
                    {location.state.bed === 0 ? <p>Bed & Cab: Regular (5.5ft)</p> 
                    : location.state.bed === 1 ? <p>Bed & Cab: Longbase (6.5ft)</p>
                    : null }
                    <p>Color: {location.state.color}</p>
                </Flex>
                <p>Total Price: ${nf.format(location.state.price)} (NZD)</p>
                <p>Deposit: ${(Number(location.state.price) * 0.75).toLocaleString()} (NZD)</p>
                <hr/>
                <p>Please enter your information below to recive your 75% deposit invoice of ${(Number(location.state.price) * 0.75).toLocaleString()} via email, and secure your custom Tundra build to be delivered by 4th quarter of 2023.</p>
            </div>
            : <p>Loading data... if you have not come from the 'build your Tundra/Sequoia' page please <Link to="/">click here</Link></p>
            }
            
            
            <form 
                    onSubmit={handleSubmit(onSubmit)}
                    id="main-form"
                    // action="/api/sendgrid" method="POST"
                    >
                        <div>
                            <label htmlFor="name">
                                    <p>Full Name:</p>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        required
                                        {...register("Name", { required: true})}  
                                    />
                            </label>
                            
                            <label htmlFor="phone">
                                <p>Phone Number:</p>
                                <input 
                                    type="phone" 
                                    name="phone" 
                                    required
                                    {...register("Phone", { required: true})}
                                />
                            </label>
                        </div>                        
                        <label htmlFor="email">
                            <p>Email Address:</p>
                            <input 
                                type="email" 
                                name="email" 
                                required
                                {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
                            />
                        </label>

                        <button 
                            type="submit" 
                            className="g-recaptcha"
                            data-sitekey="site_key"
                            data-callback='onSubmit'
                            data-action='submit'
                        >Submit</button>
                        {formSent === "sending"? <p className="submit-message">Your order is sending, please stay on page. We will redirect you to the homepage once sent.</p>
                        : formSent === "sent" ? <p className="submit-message">Order submitted, your deposit invoice will be with you shortly.</p>
                        : formSent === "error" ? <p className="submit-message">Sorry, there's been an error submitting your form. Please contact our support team at ceo@glacier.nz</p>
                        : <p></p>
                        }
                    </form>
            </Container>
        </Layout>
    )
}