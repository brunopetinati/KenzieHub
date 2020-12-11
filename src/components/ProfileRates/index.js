//STYLE
import { Container } from "./style";

import Rating from "@material-ui/lab/Rating";

const ProfileRates = ({ list }) => {
  const rate = (element) => {
    if (element === "Avançado") {
      return <Rating value={3} max={3} />;
    }
    if (element === "Intermediario") {
      return <Rating value={2} max={3} />;
    }
    return <Rating value={1} max={3} />;
  };
  return (
    <Container>
      {list.map(({ title, status }, index) => (
        <li key={index}>
          {title} - {rate(status)}
        </li>
      ))}
    </Container>
  );
};

export default ProfileRates;
