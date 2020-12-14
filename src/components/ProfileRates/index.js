//COMPONENT
import Rating from "@material-ui/lab/Rating";

//STYLE
import { Container } from "./style";

const ProfileRates = ({ list }) => {
  const rate = (element) => {
    if (element === "Avançado") {
      return <Rating value={3} max={3} readOnly />;
    }
    if (element === "Intermediário") {
      return <Rating value={2} max={3} readOnly />;
    }
    return <Rating value={1} max={3} readOnly />;
  };
  return (
    <Container>
      {list.map(({ title, status }, index) => (
        <ul key={index}>
          <li>
            {title} - {rate(status)}
          </li>
        </ul>
      ))}
    </Container>
  );
};

export default ProfileRates;
