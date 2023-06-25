import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CardList from "./CardList";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

function Search({ data }) {
  const [searchField, setSearchField] = useState("");
  // const [renderItem, setRenderItem] = useState([]);

  const renderItem = data.filter((item) => {
    return item.first_name.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f7",
        }}
      >
        <Box>
          <Typography
            fontWeight={600}
            fontFamily={"Poppins"}
            fontSize={"22.5px"}
          >
            Search :
          </Typography>
        </Box>

        <Box>
          <TextField
            type='search'
            placeholder='Search your Name...'
            onChange={handleChange}
            sx={{
              padding: "10px",
              color: "#f5f5f7",
              fontSize: "10px",
              fontFamily: "Poppins",
              width: "100%",
            }}
            // InputProps={{
            //   endAdornment: (
            //     <InputAdornment>
            //       <IconButton>
            //         <SearchIcon />
            //       </IconButton>
            //     </InputAdornment>
            //   ),
            // }}
          />
        </Box>
      </Box>
      <CardList renderItem={renderItem} />
    </Box>
  );
}

export default Search;
