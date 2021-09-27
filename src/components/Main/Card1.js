import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { fetchValues } from "../../redux/valuesSlice";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { red } from '@mui/material/colors';


function Card1() {
  const data = useSelector((state) => state.covidvalues.values);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchValues())
  }, [dispatch])

  // console.log(data);
  // console.log(data.deaths.value);

  if (isLoading) {
    return <div>Loading..</div>
  }
  if (error) {
    return <div>Error:{error} </div>
  }

  return (
    <Box >
      <Card  sx={{  bgcolor: red[100] }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Deaths
          </Typography>
          <Typography variant="h5" component="div">
            {/* {data.deaths.value} */}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Last Updated at : {data.lastUpdate}
          </Typography>
          <Typography variant="body2">
            Number of deaths caused by COVID-19
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Card1;
