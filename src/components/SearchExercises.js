import React, {useState, useEffect} from 'react';
import {Button,TextField, Box} from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';


const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [search,setSearch]= useState("");
  
  const [bodyParts, setBodyParts] = useState([]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  
  useEffect(() => {
   const fetchExercisesData = async () =>{
    const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
    setBodyParts(['all', ...bodyPartsData]);
   }
   fetchExercisesData();
  },[])


   /* const handleSearch = async () => {
    if(search){
      const exercisesData= await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      const searchedExercises = exercisesData.filter(
            (exercise) => exercise.name.toLowerCase().includes(search)
            
            || exercise.target.toLowerCase().includes(search)
            || exercise.equipment.toLowerCase().includes(search)
            || exercise.bodyPart.toLowerCase().includes(search)
          );

          console.log(exercisesData);


      
      
       
      
      setSearch('');
      setExercises(searchedExercises);
        
    }

  } */ 

   const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
  
      if (exerciseData) {
        const searchedExercises = exerciseData.filter((exercise) => {
          const name = exercise.name ? exercise.name.toLowerCase() : '';
          const target = exercise.target ? exercise.target.toLowerCase() : '';
          const equipment = exercise.equipment ? exercise.equipment.toLowerCase() : '';
          const bodyPart = exercise.bodyPart ? exercise.bodyPart.toLowerCase() : '';
  
          return (
            name.includes(search.toLowerCase()) ||
            target.includes(search.toLowerCase()) ||
            equipment.includes(search.toLowerCase()) ||
            bodyPart.includes(search.toLowerCase())
          );
        });
  
        setSearch('');
        setExercises(searchedExercises);
      }
    }
  }; 
  
  return (
    <div className='flex flex-col justify-center align p-5 mt-9'>
      <p className='font-bold text-3xl text-center mb-12 sm:text-md'>Awesome Exercises You Should Know</p>
      <div className=" flex mb-18 justify-center gap-1  " >
        <TextField sx={{input:{fontWeight: "72px", border:'none', borderRadius:'4px'}, width:{lg: "800px", xs: "350px"}, backgroundColor:'#fff', borderRadius:'40px'}} height="76px" value={search}  onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder="Search Exercise" type="text" onKeyPress={handleKeyPress} />
        <Button className='search-btn hover:scale-105' sx={{bgcolor: "#FF2625",color: "#fff", width:{ lg:"175px",xs:"80px"}, fontSize:{lg:'20px', xs:'14px'}, height:'56px', position:"relative"}} 
        onClick={handleSearch}
        >
          Search
        </Button>

      </div>
      <Box sx={{position: 'relative', width: '100%', p:'20px'}}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts  />
      </Box>
    </div>
  )
}

export default SearchExercises