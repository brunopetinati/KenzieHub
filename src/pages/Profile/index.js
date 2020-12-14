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
import { useState } from "react";
import { useEffect } from "react";

const Profile = () => {
  const [user1, setUser] = useState({ works: [], techs: [] });

  const { id } = useParams();

  const usersData = useSelector((state) => state.data);

  useEffect(() => {
    const user = usersData.find((element) => element.id === id);
    if (user !== undefined) {
      setUser(user);
    }
  }, [usersData, id]);

  return (
    <>
      <PrimaryContainer>
        <Cover />
        <SecondaryContainer elevation={3}>
          <ProfileHeader data={user1} />
          <ProfileInfo data={user1} />
          <ProfileGoals data={user1} />
        </SecondaryContainer>
      </PrimaryContainer>
    </>
  );
};

export default Profile;
