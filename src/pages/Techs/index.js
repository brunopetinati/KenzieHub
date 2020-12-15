import Table from "../../components/Table";
import { Container } from "./styles";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Modal from "../../components/Modal";
import Cover from "../../components/Cover";

const Techs = () => {
  const { id } = useParams();
  console.log(id);

  const data = useSelector((state) => state.data);

  const getUser = data.find((user) => user.id === id);
  let userTech = getUser ? getUser.techs : [];

  return (
    <>
      <Cover />
      <Container>
        <h1>Tecnologias</h1>
        <Table data={userTech} title="status" />
        <span>
          <Modal type="add" page="techs">
            Add
          </Modal>
        </span>
      </Container>
    </>
  );
};
export default Techs;
