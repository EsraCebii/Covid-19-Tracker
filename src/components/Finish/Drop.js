import React, { useState, useEffect } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllCounties} from "../../redux/contriesSlice";
import Main from "../Main";
import Chart from '../Chart';


function Drop() {
  const dispatch = useDispatch();
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});

  const data = useSelector((state) => state.countries.items);
  

  console.log(countryInfo);
  useEffect(() => {
    dispatch(fetchAllCounties())

  }, [dispatch]);
  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
    const url =
      countryCode === "worldwide"
        ? "https://covid19.mathdro.id/api/countries"
        : `https://covid19.mathdro.id/api/countries/${countryCode}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
      });
  };
  return (
    <div>
      <Main country={country} countryInfo={countryInfo}/>
      <Select
        variant="outlined"
        value={country}
        onChange={onCountryChange}
      >
        <MenuItem value="worldwide">Worldwide</MenuItem>
        {data.map((country,key) => (
          <MenuItem value={country.countryInfo.iso2} key={key}>{country.country} </MenuItem>
        ))}
      </Select>
      <Chart />
     

    </div>
  )
}

export default Drop
