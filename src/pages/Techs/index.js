//COMPONENT
import { useEffect } from "react";
import Table from "../../components/Table";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Modal from "../../components/Modal";
import Cover from "../../components/Cover";

//STYLE
import { Container } from "./styles";

const Techs = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.data);

  useEffect(() => {}, [data]);

  const getUser = data.find((user) => user.id === id);
  let userTech = getUser ? getUser.techs : [];

  return (
    <>
      <Cover />
      <Container>
        <h1>Techs</h1>
        <Table data={userTech} title="status" />
        <span className="Modal">
          <Modal type="add" page="techs">
            Add
          </Modal>
        </span>
      </Container>
    </>
  );
};
export default Techs;
