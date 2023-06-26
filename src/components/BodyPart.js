import React from 'react';
import {Stack, Typography} from '@mui/material';

import Icon from '../assets/icons/gym.png';

const BodyPart = ({item, setBodyPart, bodyPart }) => {
  return (
    <Stack
     type="button"
     alignItems="center"
     justifyContent="center"
     className='bodyPart-card  border-t-red-500 hover:scale-150 ease-in duration-300'
            sx={{
            borderTop: bodyPart === item ? '4px solid #ff2625' : '',
            backgroundColor: '#fff',
            borderBottomLeftRadius: '20px',
            width: '270px',
            height:'280px',
            cursor: 'pointer',
            gap: '47px'
            }}
            onClick={() => {
              setBodyPart(item);
              window.scrollTo({top: 1800, left : 100, behaviour: "smooth"})
            }}
    >
    <img src={Icon} alt="dumbell" className='w-10 h-10'  />
    <Typography fontSize="24px" fontWeight="bold" color="#3A1212"  textTransform="capitalize">{item}</Typography>
    </Stack>
  )
}

export default BodyPart