//COMPONENTS
import Cover from "../../components/Cover";
import ProfileHeader from "../../components/ProfileHeader/index";
import ProfileInfo from "../../components/ProfileInfo/index";
import ProfileGoals from "../../components/ProfileGoals/index";

//STYLES
import { PrimaryContainer, SecondaryContainer } from "./styles";

//HOOKS
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
  const { id } = useParams();

  const usersData = useSelector((state) => state.data);
  console.log(usersData);

  const user = usersData.find((element) => element.id === id);

  return (
    <>
      <PrimaryContainer>
        <Cover />
        <SecondaryContainer elevation={3}>
          <ProfileHeader data={user} />
          <ProfileInfo data={user} />
          <ProfileGoals data={user} />
        </SecondaryContainer>
      </PrimaryContainer>
    </>
  );
};

export default Profile;
