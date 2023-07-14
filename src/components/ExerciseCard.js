import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Stack, Typography} from '@mui/material';

const ExerciseCard = ({exercise}) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`} >
      <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' className='max-h-lg max-w-lg' />
      <Stack direction="row" >
        <Button sx={{ ml: '21px', color: '#fff', background: '#ffa9a9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}} >
           {exercise.bodyPart}  
        </Button>
        <Button sx={{ ml: '21px', color: '#fff', background: '#fcc757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}} >
           {exercise.target}  
        </Button>
        <Typography ml="21px" color="#000" fontWeight="bold" mt="11px" p="3px" textTransform="capitalize" fontSize="16px" >
          {exercise.name}
        </Typography>
      </Stack>
    </Link>
  )
}

export default ExerciseCard