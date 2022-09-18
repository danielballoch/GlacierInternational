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
`

export default function OrderPage ({location}){
    const [order, setOrder] = useState();
    const [formStage, setFormStage] = useState(0);
    const [initialFormData, setInitialFormData] = useState();
    console.log("state: ",order)
    console.log("location: ",location)
    {/* Here I need to check for location & add to cache || if no location, check for localstorage and set that as state */}
    useEffect(() => {
        if (location.state){
            localStorage.setItem('model',location.state.model);
            localStorage.setItem('grade',location.state.grade);
            localStorage.setItem('color',location.state.color);
            localStorage.setItem('bed',location.state.bed);
            localStorage.setItem('price',location.state.price);
            setOrder(
                {model: localStorage.getItem('model'), 
                grade: localStorage.getItem('grade'),
                color: localStorage.getItem('color'),
                bed: localStorage.getItem('bed'),
                price: localStorage.getItem('price'),
                },  
            )
        } else if (localStorage.getItem('model') && !location.state){
            setOrder(
                {model: localStorage.getItem('model'), 
                grade: localStorage.getItem('grade'),
                color: localStorage.getItem('color'),
                bed: localStorage.getItem('bed'),
                price: localStorage.getItem('price'),
                },  
            )
        }
      }, [location]);
    const [formSent, setFormSent] = useState("");

    

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    async function onSubmit(data){
        console.log("this is where form data should log")
        setFormSent("sending")
        console.log("Raw form data: ", data)
        console.log("Initial Form Data: ",initialFormData)
        fetch(`/api/xero`, {
          method: `POST`,
          body: JSON.stringify({
            firstname: initialFormData.firstname,
            lastname: initialFormData.lastname,
            phone: initialFormData.phone,
            email: initialFormData.email,
            model: order.model,
            grade: order.grade,
            color: order.color,
            bed: order.bed,
            price: order.price,
            name: data.Name,
            companynumber: data.CompanyNumber,
            address1: data.Address1,
            address2: data.Address2,
            city: data.City,
            region: data.Region,
            postalcode: data.PostalCode,
            country: data.Country
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
                // navigate("/", {state: {formSent: true, model: location.state.model}});
                navigate("/invoice", {state: {body}})
            } else {
                console.log("error!", body)
                setFormSent("error");
            }
          })
      }


      const {
        register: register2,
        handleSubmit: handleSubmit2,
        formState: { errors: errors2 },
    } = useForm()

    async function onSubmit2(data){
        setFormStage(1);
        setInitialFormData({firstname: data.FirstName, lastname: data.LastName, phone: data.Phone, email: data.Email});
        console.log("Raw form data: ", data)
        fetch(`/api/activeCampaign`, {
          method: `POST`,
          body: JSON.stringify({
            firstname: data.FirstName,
            lastname: data.LastName,
            phone: data.Phone,
            email: data.Email,
        }),
          headers: {
            "content-type": `application/json`,
          },
        })
          .then(res => res.json())
          .then(body => {
            console.log(`response from API:`, body);
          })
      }
    // async function onSubmit2(data){
    //     setFormStage(1);
    //     setInitialFormData({firstname: data.FirstName, lastname: data.LastName, phone: data.Phone, email: data.Email});
    //     console.log("Raw form data: ", data)
    //     fetch(`/api/sendgrid2`, {
    //       method: `POST`,
    //       body: JSON.stringify({
    //         firstname: data.FirstName,
    //         lastname: data.LastName,
    //         phone: data.Phone,
    //         email: data.Email,
    //     }),
    //       headers: {
    //         "content-type": `application/json`,
    //       },
    //     })
    //       .then(res => res.json())
    //       .then(body => {
    //         console.log(`response from API:`, body);
    //       })
    //   }
      console.log({ errors })
      console.log(location.state)
      console.log("form stage: ", formStage)
      let nf = new Intl.NumberFormat('en-US');
    return(
        <Layout title="Order Page | Glacier International" invertNav={true}>
            <Container>
            <h1>Order Details:</h1>
            {/* Here I need to add check for cached model/build */}
            {order? 
            <div>
                <Flex>
                    <p>Model: {order.model} Grade: {order.grade} &nbsp;</p>
                    {order.bed === 0 ? <p>Bed & Cab: Regular (5.5ft)</p> 
                    : order.bed === 1 ? <p>Bed & Cab: Longbase (6.5ft)</p>
                    : null }
                    <p>Color: {order.color}</p>
                </Flex>
                <p>Total Price: ${nf.format(order.price)} (NZD)</p>
                <p>Deposit: ${(Number(order.price) * 0.75).toLocaleString()} (NZD)</p>
                <hr/>
                <p>Please enter your information below to receive your 75% deposit invoice of ${(Number(order.price) * 0.75).toLocaleString()} via email, and secure your custom Tundra build to be delivered by 4th quarter of 2023.</p>
            </div>
            :
            <div>
                <Flex>
                    <p>Model: loading Grade: loading &nbsp;</p>
                    <p>Bed & Cab: loading</p>
                    <p>Color: loading</p>
                </Flex>
                <p>Total Price: $loading (NZD)</p>
                <p>Deposit: $loading (NZD)</p>
                <hr/>
                <p>Please enter your information below to receive your 75% deposit invoice of $loading via email, and secure your custom Tundra build to be delivered by 4th quarter of 2023.</p>
                <p>If you have not come from the 'build your Tundra/Sequoia' page please <Link to="/">click here</Link></p>
            </div> 
            
            
            }
            
            {formStage === 0 ? 
            <div>
                
                <form key={1} onSubmit={handleSubmit2(onSubmit2)}
                    id="main-form"
                >       
                            <div>
                                <label htmlFor="firstname">
                                        <p>First Name:</p>
                                        <input 
                                            type="text" 
                                            name="firstname" 
                                            required
                                            {...register2("FirstName", { required: true})}  
                                        />
                                </label>
                                <label htmlFor="lastname">
                                        <p>Last Name:</p>
                                        <input 
                                            type="text" 
                                            name="lastname" 
                                            required
                                            {...register2("LastName", { required: true})}  
                                        />
                                </label>
                            </div>
                            
                            <label htmlFor="phone">
                                <p>Phone Number:</p>
                                <input 
                                    type="phone" 
                                    name="phone" 
                                    required
                                    {...register2("Phone", { required: true})}
                                />
                            </label>                      
                        <label htmlFor="email">
                            <p>Email Address:</p>
                            <input 
                                type="email" 
                                name="email" 
                                required
                                {...register2("Email", { required: true, pattern: /^\S+@\S+$/i })}
                            />
                        </label>
                    
                        <button className="submitBtn" >Next</button>
                        {/* onClick={()=> {setFormStage(1)}} */}
                    </form>
                    </div>
                :  formStage === 1 ?     
                        <div>
                            <form key={2}>
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
                        </form>
                        <form id="photoidform" name="photoidform" method="POST" data-netlify="true" >
                                    <label htmlFor="photoid">
                                        <p>Photo ID (Drivers Licence or Passport):</p>
                                        <input 
                                            type="file" 
                                            name="photoid" 
                                            required
                                            accept="image/png, image/jpeg, image/jpg, image/gif"
                                        />
                                    </label>
                                    <div className="buttonWrap">
                                        <button className="backBtn" onClick={()=> setFormStage(0)}>Back</button>
                                        <button type="submit" onClick={()=> setFormStage(2)}>Next</button>
                                    </div>
                                </form>
                    </div>
                    :
                    <form key={3} onSubmit={handleSubmit(onSubmit)}>
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
                            <button className="backBtn" onClick={()=> setFormStage(1)}>Back</button>
                            <button 
                            type="submit" 
                            className="g-recaptcha"
                            data-sitekey="site_key"
                            data-callback='onSubmit'
                            data-action='submit'
                            >{formSent === "sending" ? "Order is Sending" : "Submit"}</button>
                            </div>
                        
                        
                        {formSent === "sending"? <p className="submit-message">Your order is sending, please stay on page. We will redirect you to the invoice page once created.</p>
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