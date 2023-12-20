import React from "react";

function PriceCard(props)
{
    const plan = props.plan;
    const price = props.price;
    const save = props.save;
    const getFree = props.getFree;
    const renewPlan = props.renewPlan;

    
    return(
        <>
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 bg-transparent d-flex justify-content-center py-4 ">
              <div class="card " style={{width:'22rem'}}>
                        <div class="card-body ">
                                <h5 class="card-title text-center">{plan}</h5>
                                <div className="d-flex justify-content-center "><button type="label" class="btn btn-warning ">Save {save}</button> </div>
                                <h3 class="card-subtitle fw-bold  text-center py-3 ">{price}/mo</h3>
                                <p class="text-center text-success ">{getFree}</p>
                                <p className="text-center text-break ">{renewPlan}</p>
                                <button type="button" class="btn btn-lg-block bg-success w-100 fs-3">Select</button>
                           
                        </div>
                    </div> 
                    </div>      
        </>
    )
}
export default PriceCard;