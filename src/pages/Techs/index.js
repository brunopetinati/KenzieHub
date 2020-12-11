import Table from "../../components/Table";
import Rating from "../../components/Rating";
import { Container, Banner } from "./styles";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Modal from "../../components/Modal";

const Techs = () => {
  // const { id } = useParams();

  const data = useSelector((state) => state.data);

  const id = "047e5718-07ae-45e0-a256-1fa9a0186985";
  const getUser = data.find((user) => user.id === id);
  let userTech = [
    {
      id: "55126701-18ac-40df-aab9-3a88657db446",
      title: "React",
      status: "Avançado",
      created_at: "2020-11-30T16:26:53.953Z",
      updated_at: "2020-11-30T16:26:53.953Z",
    },
    {
      id: "af06a853-c1fb-4a94-960d-1c6caa8d2b5c",
      title: "Typescript",
      status: "Avançado",
      created_at: "2020-11-30T18:40:08.316Z",
      updated_at: "2020-11-30T18:40:08.316Z",
    },
  ];

  return (
    <>
      <Banner></Banner>
      <Container>
        <h2>Techs</h2>
        <Table data={userTech} title="status" />
        <Modal type="add">Add</Modal>
      </Container>
    </>
  );
};
export default Techs;
