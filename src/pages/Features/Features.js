import React from "react";
import FeatureCard from "./FeatureCard";
import { Typography } from "@mui/material";


const featureData=[
    {
        id:1,
        image:require('../../assets/images/features/QR image.avif'),
        title:"QR Payments",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quo.'
    },
    {
        id:2,
        image:require('../../assets/images/features/photo-AI.avif'),
        title:"AI Engines",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quo.'
    },
    {
        id:3,
        image:require('../../assets/images/features/multiple payments.avif'),
        title:"Multiple Payment Options",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quo.'
    }
]

function mapFeature()
{
    return(
        <>
        {
            
                featureData.map((data)=>(
                
                    
                        
                            <div className="d-flex justify-content-center col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                <FeatureCard image={data.image} title={data.title} description={data.description}/>
                            </div>     
                    
                   
                ))
            
        }
        </>
    );
}

function Features()
{

    return(
        <>
        <section className=" bg-body-secondary py-2">
            <div className="row px-5 py-2">
                <Typography variant="h3" > Features</Typography>
            </div>
            <div className="row ">
                {
                    mapFeature()
                }
            </div>
        </section>
        </>
    );
}

export default Features;    