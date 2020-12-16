import { useState } from "react";

import Rating from "@material-ui/lab/Rating";
import { Typography, Box } from "@material-ui/core";

import { RatingContainer } from "./styles";

const SimpleRating = ({ value, setValue, readOnly = false }) => {
  const [hover, setHover] = useState(-1);
  const labels = {
    1: "Iniciante",
    2: "Intermediário",
    3: "Avançado",
  };
  return (
    <RatingContainer>
      <Box component="fieldset" mb={3} width={300} borderColor="transparent">
        <Typography component="legend">Status</Typography>

        <Rating
          readOnly={readOnly}
          name="simple-controlled"
          max={3}
          size="large"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
        />
        {value !== null && (
          <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
      </Box>
    </RatingContainer>
  );
};

export default SimpleRating;
