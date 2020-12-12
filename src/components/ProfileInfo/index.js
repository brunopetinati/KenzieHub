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
          {email}
        </li>
        <li>
          <FaGraduationCap />
          {course_module}
        </li>
        <li>
          <CgNotes />
          {bio}
        </li>
        <li>
          <GrPhone />
          {contact}
        </li>
      </ul>
    </Container>
  );
};

export default ProfileInfo;
