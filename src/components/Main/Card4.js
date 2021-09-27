import React,{ useEffect} from 'react';

import { useSelector, useDispatch} from 'react-redux';

import { fetchValues } from "../../redux/valuesSlice";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { teal} from '@mui/material/colors';

function Card4() {
    const data = useSelector((state)=> state.covidvalues.values);
    const isLoading = useSelector((state)=> state.isLoading);
    const error = useSelector((state)=> state.error);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchValues())
    },[dispatch])

    // console.log(data.confirmed.value);
    console.log(data);

    if(isLoading) {
        return <div>Loading..</div>
    }
    if(error) {
        return <div>Error:{error} </div>
    }
    
    return (
        <div>
        <Card sx={{  bgcolor: teal[100] }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Infected
        </Typography>
        <Typography variant="h5" component="div">
          {/* {data.deaths.value} */}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Last Updated at : {data.lastUpdate}
        </Typography>
        <Typography variant="body2">
          Number of cctive Cases of COVID-19
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}

export default Card4;
