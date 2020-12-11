//COMPONENT
import ProfileRates from "../../components/ProfileRates";

//STYLES
import { Title, Container } from "./style";

const ProfileGoals = ({ list, ratesList }) => {
  return (
    <Container>
      <Title>Works</Title>
      {list.map(({ title, description }, index) => (
        <ul key={index}>
          <h3>{title}</h3>
          <li>{description}</li>
        </ul>
      ))}
      <Title>Techs</Title>
      <ProfileRates list={ratesList} />
    </Container>
  );
};

export default ProfileGoals;
