//ICONS
import { VscMail } from "react-icons/vsc";
import { FaGraduationCap } from "react-icons/fa";
import { GrPhone } from "react-icons/gr";
import { CgNotes } from "react-icons/cg";

//STYLE
import { Container } from "./style";

const ProfileInfo = ({ data }) => {
  const { email, course_module, bio, contact } = data;
  return (
    <Container>
      <ul>
        <li>
          <VscMail />
          <label>{email}</label>
        </li>
        <li>
          <FaGraduationCap />
          <label>{course_module}</label>
        </li>
        <li>
          <CgNotes />
          <label>{bio}</label>
        </li>
        <li>
          <GrPhone />
          <label>{contact}</label>
        </li>
      </ul>
    </Container>
  );
};

export default ProfileInfo;
