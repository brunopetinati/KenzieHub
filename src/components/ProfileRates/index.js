//COMPONENT
import Rating from "@material-ui/lab/Rating";
import RatingReadOnly from "../RatingReadOnly";

//STYLE
import { Container } from "./style";

const ProfileRates = ({ list }) => {
  return (
    <Container>
      {list.map(({ title, status }, index) => (
        <ul key={index}>
          <li>
            {title} - <RatingReadOnly element={status} />
          </li>
        </ul>
      ))}
    </Container>
  );
};

export default ProfileRates;
