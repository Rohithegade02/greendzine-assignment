import React from "react";
import styles from "./index.module.css";

import { Box, Card, Skeleton, Typography } from "@mui/material";
function CardItem({ item }) {
  return (
    <Box className={styles.main_container}>
      <Box className={styles.list_container}>
        <Box key={item.id} sx={{ position: "relative" }}>
          {item ? (
            <Box
              sx={{
                position: "absolute",
                top: "-20px",
                left: "230px",
                backgroundColor: "#4660FC",
                borderRadius: "50%",
                color: "#fff",
                padding: "7.5px",
                height: "25px",
                width: "25px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Poppins",
              }}
            >
              {item.id}
            </Box>
          ) : (
            <Skeleton
              variant='rectangular'
              width={410}
              height={210}
              sx={{ mt: "20px" }}
            />
          )}
          <Card
            sx={{
              padding: "25px",
              borderColor: "#000",
              borderWidth: "15px",
              mb: "10px",
            }}
          >
            {item ? (
              <img
                style={{
                  width: 205,
                  height: 205,
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
                alt={item.id}
                src={item.avatar}
              />
            ) : (
              <Skeleton
                variant='rectangular'
                width={410}
                height={210}
                sx={{ mb: "20px" }}
              />
            )}

            {item ? (
              <Card sx={{ backgroundColor: "#4660FC" }}>
                <Box sx={{ textAlign: "center", mt: "7.5px", mb: "7.5px" }}>
                  <Typography
                    gutterBottom
                    fontSize={"15px"}
                    fontWeight={600}
                    fontFamily={"Poppins"}
                    color={"#fff"}
                  >
                    {item.first_name} {item.last_name}
                  </Typography>
                </Box>
              </Card>
            ) : (
              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width='60%' />
              </Box>
            )}
          </Card>
        </Box>
      </Box>
    </Box>
  );
}

export default CardItem;
