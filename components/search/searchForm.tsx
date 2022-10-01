
import React, { useState, useEffect } from "react"


// Meterial
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Link from 'next/Link';


import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Card from '@mui/material/Card';


//date rage picker  


// icons
import FlightIcon from '@mui/icons-material/Flight';
import AccountCircle from '@mui/icons-material/AccountCircle';
// var listingData = require('json!./data/listing.json');
import listingDataStore from '../../public/data/listing.json';


export default function SearchForm() {



  // toggle booking-quantity-type
  const [hideLightbox, setHideLightbox] = useState(false);

  function booking_type_toggle() {
    if (hideLightbox === false) {
      setHideLightbox(true)
    } else {
      setHideLightbox(false)
    }
  }


  // State to store count value
  const [count, setCount] = useState(0);
  const [childCount, childSetCount] = useState(0);
  const [roomCount, roomSetCount] = useState(0);

  // Function to increment for adults
  const incrementCount = () => {
    // Update state with incremented value
    setCount(count + 1);
  };
  const decrementCount = () => {
    // Update state with incremented value  
    if (count <= 0) {
      setCount(count = 0);
    }
    else {
      setCount(count - 1);
    }
  };


  // Function to increment for adults
  const incrementChild = () => {
    // Update state with incremented value
    childSetCount(childCount + 1);
  };
  const decrementChild = () => {
    // Update state with incremented value  
    if (childCount <= 0) {
      childSetCount(childCount = 0);
    }
    else {
      childSetCount(childCount - 1);
    }
  };

  // Function to increment for rooms
  const incrementRoom = () => {
    // Update state with incremented value
    roomSetCount(roomCount + 1);
  };
  const decrementRoom = () => {
    // Update state with incremented value  
    if (childCount <= 0) {
      roomSetCount(roomCount = 0);
    }
    else {
      roomSetCount(roomCount - 1);
    }
  };


  // search filters
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [ListingItems, ListingSetItems] = useState([]);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["capital", "name", "numericCode"]);
  const [filterParam, setFilterParam] = useState(["All"]);


  useEffect(() => {
    fetch(
      "http://192.168.1.106:3000/data/listing.json"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  // /listing data

  const data = Object.values(items);







    // console.log(data[0].name+"data")
  // console.log(listingData + "listingData")


  function search(items) {
    return items.filter((item) => {
      if (item.region == filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem]
              .toString()
              .toLowerCase()
              .indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (filterParam == "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem]
              .toString()
              .toLowerCase()
              .indexOf(q.toLowerCase()) > -1
          );
        });
      }
    });
  }


  //get region  lists



 

  


  if (error) {
    return (
      <p>
        {error.message}, if you get this error, the free API I used
        might have stopped working, but I created a simple example that
        demonstrate how this works,{" "}
        <a href="https://codepen.io/Spruce_khalifa/pen/mdXEVKq">
          {" "}
          check it out{" "}
        </a>{" "}
      </p>
    );
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <div className="wrapper">

        <div>
          {/* {listItems} */}
          {/* {data.map((user) => (
            <div className="user">{listItems}</div>
          ))} */}
          <Stack direction="row" spacing={2}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} placeholder="Where are you going?" />}
            />
            <TextField
              id="date"
              label="Birthday"
              type="date"
              defaultValue="2017-05-24"
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="date"
              label="Birthday"
              type="date"
              defaultValue="2017-05-24"
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <div className="booking-quantity-warf">
              <TextField
                id="booking-quantity"
                placeholder="Placehddolder"
                value={count + ' adults ' + childCount + ' child ' + roomCount + ' rooms'}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                  readOnly: true,
                }}
                onClick={booking_type_toggle}
              />
              {hideLightbox === true &&
                <div className="booking-quantity-type">
                  <Grid container spacing={2} sx={{ mb: "10px" }}>
                    <Grid item xs={4}>
                      <p>Adults</p>
                    </Grid>
                    <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div className="quantity-btn" onClick={decrementCount}>-</div>
                      <div className="quantity-increment">{count}</div>
                      <div className="quantity-btn" onClick={incrementCount}>+</div>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} sx={{ mb: "10px" }}>
                    <Grid item xs={4}>
                      <p>Adults</p>
                    </Grid>
                    <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div className="quantity-btn" onClick={decrementChild}>-</div>
                      <div className="quantity-increment">{childCount}</div>
                      <div className="quantity-btn" onClick={incrementChild}>+</div>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <p>Adults</p>
                    </Grid>
                    <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div className="quantity-btn" onClick={decrementRoom}>-</div>
                      <div className="quantity-increment">{roomCount}</div>
                      <div className="quantity-btn" onClick={incrementRoom}>+</div>
                    </Grid>
                  </Grid>
                </div>
              }
            </div>

            <Button variant="contained">Search</Button>

          </Stack >
          <style jsx>{` 

      .booking-quantity-warf{
        position:relative;
      }

      .booking-quantity-type{
        position: absolute;
        top:70px;
        width:100%;
        box-shadow: 1px 1px 5px #00000026;
        padding:15px;
        border-radius: 5px; 
      }
      .booking-quantity-type .quantity-btn{
        width:40px;
        height:40px;
        border:1px solid red;
        text-align: center;
        align-items: center;
        display: flex;
        align-content: center;
        justify-content: center;
        flex-direction: row;
        

      }
      .booking-quantity-type .quantity-increment {
        width:40px;
        height:40px; 
        text-align: center;
        align-items: center;
        display: flex;
        align-content: center;
        justify-content: center;
        flex-direction: row; 

      }
   
   .siteBanner { 
        background-image:url('https://images.unsplash.com/photo-1632018197183-6d2d4db44b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80');
        padding:85px 0;
        background-size:cover;
        background-position:center;
        background-repeat:no-repeat;

        } 
        .siteBanner h2{ 
          color:white;
          font-size:50px;
          margin:0;
        } 
        .siteBanner p{  
          color:white;
          font-size:20px!important;
        } 
        .home-searchFrom{
          margin:50px 0;
        }
    `}</style>
        </div >
        <div className="search-wrapper">
          <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Search for..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <span className="sr-only">Search countries here</span>

          </label>

          <div className="select">
            <select
              onChange={(e) => {
                setFilterParam(e.target.value);
              }}
              className="custom-select"
              aria-label="Filter Countries By Region"
            >
              <option value="All">Filter By Region</option>
              <option value="Africa">Africa</option>
              <option value="Americas">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
            <span className="focus"></span>
          </div>
        </div>
        <ul className="card-grid">
          {search(data).map((item, i) => (
            <li key={i}>
              <article className="card" key={item.alpha3Code}>
                <div className="card-image">
                  <img
                    src={item.flag.large}
                    alt={item.name}
                  />
                </div>
                <div className="card-content">
                  <h2 className="card-name">{item.name}</h2>
                  <ol className="card-list">
                    <li>
                      population:{" "}
                      <span>{item.population}</span>
                    </li>
                    <li>
                      Region: <span>{item.region}</span>
                    </li>
                    <li>
                      Capital: <span>{item.capital}</span>
                    </li>
                  </ol>
                </div>
              </article>
            </li>
          ))}
        </ul>






      </div>
    );
  }






}


// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'Coxs Bazar', year: 1994 },
  { label: 'Dhaka', year: 1972 },
  { label: 'Sylhet', year: 1972 },
  { label: 'Chittagong', year: 1972 },
  { label: 'Kuākāta', year: 1972 },
];

