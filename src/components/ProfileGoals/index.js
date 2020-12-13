//COMPONENT
import ProfileRates from "../../components/ProfileRates";

//STYLES
import { Title, Container } from "./style";

const ProfileGoals = ({ data }) => {
  const { works, techs } = data;
  return (
    <Container>
      <Title>Works</Title>
      {works.map(({ title, description }, index) => (
        <ul key={index}>
          <h3>{title}</h3>
          <li>{description}</li>
        </ul>
      ))}
      <Title>Techs</Title>
      <ProfileRates list={techs} />
    </Container>
  );
};

export default ProfileGoals;
