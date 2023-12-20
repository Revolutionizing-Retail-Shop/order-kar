import React from "react";
import { Typography } from "@mui/material";
import PriceCard from "./PriceCard.js";


const pricingData=[
    {
        plan:'2 Year Plan',
        price:'$39',
        save: '50%',
        getFree:'+12 months FREE',
        renewPlan:'Plan renews after 36 months'
    },
    {
        plan:'1 Year Plan',
        price:'$49',
        save:'25%',
        getFree:'+3 months FREE',
        renewPlan:'Plan renews after 15 months'


    },
    {
        plan:'Monthly Plan',
        price:'$59',
        save:'0%',
        getFree:'',
        renewPlan:'Billed every months' 
    }
]



function Prices()
{
    return(
        <>
        <div className="row px-5 py-2  " style={{backgroundColor:'rgb(238, 243, 250)'}}>
        <Typography variant='h3' color='black' >Packages</Typography>  
        </div>
        <div className="row" style={{backgroundColor:'rgb(238, 243, 250)'}}>
        
        {
            pricingData.map((pricingData)=>
            {
                return(
                    <>
                        <PriceCard  plan={pricingData.plan} price={pricingData.price} save={pricingData.save} getFree={pricingData.getFree} renewPlan={pricingData.renewPlan}/>          
                    </>
                )

            })
        }


        </div>
        
        </>
    )
}

export default Prices;