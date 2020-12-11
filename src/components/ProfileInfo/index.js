//ICONS
import { VscMail } from "react-icons/vsc";
import { FaGraduationCap, FaLinkedinIn } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";

//STYLE
import { Container } from "./style";

const ProfileInfo = ({ list }) => {
  return (
    <Container>
      {list.map(({ email, bio, course_module, contact }, index) => (
        <ul key={index}>
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
            <FaLinkedinIn />
            {contact}
          </li>
        </ul>
      ))}
    </Container>
  );
};

export default ProfileInfo;
