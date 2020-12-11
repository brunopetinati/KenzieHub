//COMPONENTS
import ProfileHeader from "../../components/ProfileHeader/index";
import ProfileInfo from "../../components/ProfileInfo/index";
import ProfileGoals from "../../components/ProfileGoals/index";

//DATA
import { dados } from "../../helpers/index";

//STYLES
import { Container, Breadcrumb } from "./styles";

//PRECISO RECEBER O ID VIA URL
const filteredData = dados.filter(
  (element) => element.id === "8b8e50a6-50c2-4718-b817-2d38cad0c8f4"
);

const { works, techs, name, avatar_url } = filteredData[0];

const Profile = () => {
  return (
    <>
      <Breadcrumb />
      <Container elevation={3}>
        <ProfileHeader name={name} avatar={avatar_url} />
        <ProfileInfo list={filteredData} />
        <ProfileGoals list={works} ratesList={techs} />
      </Container>
    </>
  );
};

export default Profile;
