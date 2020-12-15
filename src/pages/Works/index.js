//COMPONENT
import Cover from "../../components/Cover";
import Table from "../../components/Table";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../../components/Modal";
import { addWorksThunk } from "../../store/Modules/Works/thunk";

//STYLE
import { Container } from "./styles";

const Works = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(id);
  dispatch(addWorksThunk(id));

  const data = useSelector((state) => state.data);
  const works = useSelector((state) => state.works);

  console.log(works);

  const getUser = data.find((user) => user.id === id);
  let userWorks = getUser ? getUser.works : [];

  return (
    <>
      <Cover />

      <Container>
        <h1>Trabalhos</h1>
        <Table data={userWorks} title="description" />
        <span>
          <Modal type="add" page="works">
            Add
          </Modal>
        </span>
      </Container>
    </>
  );
};

export default Works;
