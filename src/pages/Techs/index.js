import { useEffect } from "react";
import Table from "../../components/Table";
import Cover from "../../components/Cover";
import Modal from "../../components/Modal";
import { Container } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { addTechsThunk } from "../../store/Modules/Techs/thunk";

const Techs = () => {
  const dispatch = useDispatch();

  const techs = useSelector((state) => state.techs);

  useEffect(() => {
    dispatch(addTechsThunk());
  });

  return (
    <>
      <Cover />
      <Container>
        <h1>Techs</h1>
        <Table data={techs} title="status" />
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
