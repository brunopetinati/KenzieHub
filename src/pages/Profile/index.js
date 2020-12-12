//COMPONENTS
import ProfileHeader from "../../components/ProfileHeader/index";
import ProfileInfo from "../../components/ProfileInfo/index";
import ProfileGoals from "../../components/ProfileGoals/index";

//STYLES
import { PrimaryContainer, SecondaryContainer, Breadcrumb } from "./styles";

//HOOKS
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
  const params = useParams();

  const usersData = useSelector(({ data }) => data);

  const userData = usersData.find((element) => element.id === params.id);

  return (
    <>
      <PrimaryContainer>
        <Breadcrumb />
        <SecondaryContainer elevation={3}>
          <ProfileHeader data={userData} />
          <ProfileInfo data={userData} />
          <ProfileGoals data={userData} />
        </SecondaryContainer>
      </PrimaryContainer>
    </>
  );
};

export default Profile;
