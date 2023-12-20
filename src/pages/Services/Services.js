import { Typography } from '@mui/material';
import React from 'react';
import CardMUI from './Card';



const cardsData =[
  {
    
    cardImageLink:require('../../assets/images/services/photo1.avif'),
    cardTitle:'Web App',
    cardDescription :'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
  },
  {
    cardImageLink:require('../../assets/images/services/photo-2.avif'),
    cardTitle:'Mobile App',
    cardDescription :'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'

  },

  {
    cardImageLink:require('../../assets/images/services/photo-3.avif'),
    cardTitle:'Restaurant Analytics',
    cardDescription :'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
   
  }
];



  function mapCardsData(data){

    return(
      <>

      {
        data.map((data)=>(
          <div className="col-12  col-md-6 col-sm-12 col-lg-4 d-flex justify-content-center ">
            <CardMUI cardImageLink={`${data.cardImageLink}`}  cardTitle={`${data.cardTitle}`} cardDescription={`${data.cardDescription}`}/>
          </div>
        ))
      }
     
      </>
      
    );

  }

  
  
  
  
  



const Services = () => {
  

  return (
    
  <div className="row">
     <div className="col-12 col-lg-12 col-md-12 col-sm-12 py-4 w-100" >
        <Typography variant='h3' color='black' paddingLeft={4} >Our Services</Typography>  
    </div>
  <div className="row">
      {
      mapCardsData(cardsData)
      }
  </div>
  </div>
  );
}
 export default Services;

