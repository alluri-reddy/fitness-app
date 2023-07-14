import React from 'react';
import { Box,Typography, Button} from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';


const HeroBanner = () => {
  return (
    <Box sx={ {mt: {lg:'10px', xs: '70px'}, ml:{ sm: '50px'} }  } position="relative" p="20px " >
        <div className='flex flex-col group sm:flex-row justify-between '>
            <div className='mt-0 sm:mt-40'>
                <Typography color="#FF2625" fontWeight="600" fontSize="26px" >
                Fitness Club 
                </Typography>
                <Typography fontWeight={700} sx={{ fontSize:{ lg: '44px', xs: '40px'}}} >
                    Sweat, smile <br /> and Repeat
                </Typography>
                <Typography fontSize="22px" lineHeight="35px" mb={3} >
                    Check out the most effective exercises
                </Typography>
                <Button variant='contained' color="error" href='#exercises'>Explore Exercises</Button>
            </div>
            <img src={HeroBannerImage} alt="banner" className="flex max-h-xl max-w-xl md:object-scale-down h-2/4 w-2/4 md:mt-0 sm: mt-3"   />
        </div>
        
        
    </Box>
  )
}

export default HeroBanner