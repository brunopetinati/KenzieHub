//ICONS
import { VscMail } from "react-icons/vsc";
import { FaGraduationCap, FaLinkedinIn } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";

//STYLES
import {
  Container,
  Breadcrumb,
  ProfileImage,
  StyledButton,
  StyledRating,
} from "./styles";

//COMPONENTS
import ProfileMenu from "../../components/ProfileMenu/index";

const Profile = () => {
  return (
    <>
      <Breadcrumb />
      <Container elevation={3}>
        <div className="ProfileImageContainer">
          <div className="ImageAndNameContainer">
            <ProfileImage />
            <p>Uzumaki Naruro</p>
          </div>
          <ProfileMenu />
        </div>
        <div className="ProfileInfoContainer">
          <ul>
            <li>
              <VscMail />
              naruto@seventails.com
            </li>
            <li>
              <FaGraduationCap />
              module: Ninja
            </li>
            <li>
              <CgNotes />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
              Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu
              venenatis.
            </li>
            <li>
              <FaLinkedinIn />
              linkedin.com/queroserumninja
            </li>
          </ul>
        </div>
        <div className="WorksAndSkillsContainer">
          <div>
            <StyledButton variant="outlined">Works</StyledButton>
            <ul>
              Alguma coisa
              <li>
                Utilizamos cookies para fornecer uma melhor experiência para
                nossos usuários. Para saber mais sobre o uso de cookies,
              </li>
            </ul>
          </div>
          <div>
            <StyledButton variant="outlined">Skills</StyledButton>
            <ul>
              <li>
                React - <StyledRating readOnly />
              </li>
              <li>
                Typescript - <StyledRating readOnly />
              </li>
              <li>
                Redux - <StyledRating readOnly />
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Profile;
