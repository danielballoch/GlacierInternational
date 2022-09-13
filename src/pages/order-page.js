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
    .buttonWrap {
        display: flex;
        flex-direction: row;
    }
    .backBtn {
        width: 24%;
        background-color: grey;
        :hover {
            background-color: dimgrey;
        }
        margin: 40px 0;
    }
    .submitBtn {
        width: 80%;
        margin: 40px auto;
    }
    button {
    background-color: #4C974C;
    color: white;
    width: 74%;
    font-size: 20px;
    letter-spacing: 1.4px;
    padding: 14px;
    font-weight: 600;
    font-family: 'Heebo',sans-serif;
    border: none;
    margin: 40px 0;
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
    const [formStage, setFormStage] = useState(0);
    {/* Here I need to check for location & add to cache || if no location, check for localstorage and set that as state */}
    useEffect(() => {
        const localOrder = JSON.parse(localStorage.getItem('order'));
        console.log("localOrder: ", localOrder);
        if(location.state && location.state.model && order.length === 0 ){
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
        console.log("Raw form data: ", data)
        console.log("PhotoID: ", data.PhotoID)
        fetch(`/api/xero`, {
          method: `POST`,
          body: JSON.stringify({
            firstname: data.FirstName,
            lastname: data.LastName,
            phone: data.Phone,
            email: data.Email,
            model: location.state.model,
            grade: location.state.grade,
            color: location.state.color,
            bed: location.state.bed,
            price: location.state.price,
            name: data.Name,
            companynumber: data.CompanyNumber,
            address1: data.Address1,
            address2: data.Address2,
            city: data.City,
            region: data.Region,
            postalcode: data.PostalCode,
            country: data.Country,
            photoid: data.PhotoID
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
      console.log("form stage: ", formStage)
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
            
            {formStage === 0 ? 
            <div>
            <form 
                    id="main-form"
                    // action="/api/sendgrid" method="POST"
                    >       
                            <div>
                                <label htmlFor="firstname">
                                        <p>First Name:</p>
                                        <input 
                                            type="text" 
                                            name="firstname" 
                                            required
                                            {...register("FirstName", { required: true})}  
                                        />
                                </label>
                                <label htmlFor="lastname">
                                        <p>Last Name:</p>
                                        <input 
                                            type="text" 
                                            name="lastname" 
                                            required
                                            {...register("LastName", { required: true})}  
                                        />
                                </label>
                            </div>
                            
                            <label htmlFor="phone">
                                <p>Phone Number:</p>
                                <input 
                                    type="phone" 
                                    name="phone" 
                                    required
                                    {...register("Phone", { required: true})}
                                />
                            </label>                      
                        <label htmlFor="email">
                            <p>Email Address:</p>
                            <input 
                                type="email" 
                                name="email" 
                                required
                                {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
                            />
                        </label>
                        <label htmlFor="photoid">
                            <p>Photo ID (Drivers Licence or Passport):</p>
                            <input 
                                type="file" 
                                name="photoid" 
                                required
                                accept="image/png, image/jpeg, image/jpg, image/gif"
                                {...register("PhotoID", { required: true})}
                                onChange={(e)=> {console.log("Photo change: ", e.currentTarget.files[0] )}}
                            />
                        </label>
                        <button className="submitBtn" onClick={()=> setFormStage(1)}>Next</button>
                        
                    </form>
                    </div>
                :   
                    <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label htmlFor="name">
                                            <p>Company Name:</p>
                                            <input 
                                                type="text" 
                                                name="name" 
                                                required
                                                {...register("Name", { required: true})}  
                                            />
                                </label>
                                <label htmlFor="companynumber">
                                        <p>Company Registration Number:</p>
                                        <input 
                                            value={formStage === 0? "" : undefined}
                                            type="text" 
                                            name="companynumber" 
                                            required
                                            {...register("CompanyNumber", { required: true})}  
                                        />
                                </label>
                            </div>
                            
                            <label htmlFor="addressline1">
                                <p>Address Line 1:</p>
                                <input 
                                    placeholder=""
                                    type="addressline1" 
                                    name="addressline1" 
                                    required
                                    {...register("Address1", { required: true})}
                                />
                            </label>

                            <label htmlFor="addressline2">
                            
                                <p>Address Line 2:</p>
                                <input 
                                    placeholder=""
                                    type="addressline2" 
                                    name="addressline2" 
                                    {...register("Address2", { required: false})}
                                />
                            </label>  

                            <div>    
                                <label htmlFor="city">
                                    <p>City:</p>
                                    <input 
                                        placeholder=""
                                        type="city" 
                                        name="city" 
                                        {...register("City", { required: true})}
                                    />
                                </label>  
                                <label htmlFor="region">
                                    <p>Region:</p>
                                    <input 
                                        type="region" 
                                        name="region" 
                                        {...register("Region", { required: true})}
                                    />
                                </label>  
                            </div>   
                            <div>
                                <label htmlFor="postalcode">
                                    <p>Postal Code:</p>
                                    <input 
                                        type="postalcode" 
                                        name="postalcode" 
                                        {...register("PostalCode", { required: true})}
                                    />
                                </label>     
                                <label htmlFor="country">
                                    <p>Country:</p>
                                    <input 
                                        type="country" 
                                        name="country" 
                                        {...register("Country", { required: true})}
                                    />
                                </label>  
                            </div>    
                            <div className="buttonWrap">
                            <button className="backBtn" onClick={()=> setFormStage(0)}>Back</button>
                            <button 
                            type="submit" 
                            className="g-recaptcha"
                            data-sitekey="site_key"
                            data-callback='onSubmit'
                            data-action='submit'
                            >{formSent === "sending" ? "Order is Sending" : "Submit"}</button>
                            </div>
                        
                        
                        {formSent === "sending"? <p className="submit-message">Your order is sending, please stay on page. We will redirect you to the homepage once sent.</p>
                        : formSent === "sent" ? <p className="submit-message">Order submitted, your deposit invoice will be with you shortly.</p>
                        : formSent === "error" ? <p className="submit-message">Sorry, there's been an error submitting your form. Please contact our support team at ceo@glacier.nz</p>
                        : <p></p>
                        }

                    </form>
                    
                
                }
            </Container>
        </Layout>
    )
}