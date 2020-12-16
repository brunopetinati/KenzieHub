import { useEffect } from "react";
import Cover from "../../components/Cover";
import Table from "../../components/Table";
import Modal from "../../components/Modal";
import { Container } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { addWorksThunk } from "../../store/Modules/Works/thunk";

const Works = () => {
  const dispatch = useDispatch();

  const works = useSelector((state) => state.works);

  useEffect(() => {
    dispatch(addWorksThunk());
  });

  return (
    <>
      <Cover />

      <Container>
        <h1>Works</h1>
        <Table data={works} title="description" />
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
