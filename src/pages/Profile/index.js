//COMPONENTS
import ProfileHeader from "../../components/ProfileHeader/index";
import ProfileInfo from "../../components/ProfileInfo/index";
import ProfielGoals from "../../components/ProfileGoals/index";
import ProfileRating from "../../components/ProfileRates/index";
import ProfileGoals from "../../components/ProfileGoals/index";

//DATA
import { dados } from "../../helpers/index";

//STYLES
import { Container, Breadcrumb } from "./styles";

//PRECISO RECEBER O ID VIA URL
const filteredData = dados.filter(
  (element) => element.id === "8b8e50a6-50c2-4718-b817-2d38cad0c8f4"
);

const { bio, techs, name, avatar_url } = filteredData[0];

const Profile = () => {
  return (
    <>
      <Breadcrumb />
      <Container elevation={3}>
        <ProfileHeader name={name} avatar_url={avatar_url} />
        <ProfileInfo list={filteredData} />
        <ProfileGoals buttonName="Works">
          <p>{bio}</p>
        </ProfileGoals>
        <ProfielGoals buttonName="skills">
          <ProfileRating list={techs} />
        </ProfielGoals>
      </Container>
    </>
  );
};

export default Profile;
