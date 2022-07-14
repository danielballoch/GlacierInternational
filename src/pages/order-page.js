import React from "react"
import Layout from "../components/layout"
import styled from '@emotion/styled';
import { useForm } from "react-hook-form"

const Container = styled.div`
margin: 200px auto;
height: 90vh;
width: 800px;
form {
    display: flex;
    flex-direction: column;
    text-align: left;
    div {
        display: flex;
        justify-content: space-between;
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
        width: 100%;
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
p {
    padding-right: 10px;
}
`

export default function OrderPage (){
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    async function onSubmit(data){
        console.log("this is where form data should log")
        console.log(data)
        fetch(`/api/xero`, {
          method: `POST`,
          body: JSON.stringify({
            name: data.Name,
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
      console.log({ errors })
    return(
        <Layout invertNav={true}>
            <Container>
            <h1>Order Details:</h1>
            <Flex>
                <p>Model: 2022 Tundra</p>
                <p>Grade: Platinum Hybrid</p>
                <p>Bed & Cab: Regular (5.5ft)</p>
                <p>Color: Midnight Black Metallic</p>
            </Flex>
            <p>Total Price: $195,000 (NZD)</p>
            <p>Deposit: $19,500 (NZD)</p>
            <hr></hr>
            <p>Please enter your information below to recive your deposit invoice of $19,500 via email, and secure your custom Tundra build.</p>

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
                    </form>
            </Container>
        </Layout>
    )
}