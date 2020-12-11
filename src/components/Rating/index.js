import Rating from "@material-ui/lab/Rating";
import { Typography, Box } from "@material-ui/core";

const SimpleRating = ({ value, setValue, readOnly = false }) => {
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Status</Typography>

        <Rating
          readOnly={readOnly}
          max={3}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
    </div>
  );
};

export default SimpleRating;
