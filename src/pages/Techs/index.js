import Table from "../../components/Table";
import { Container, Banner } from "./styles";
import { dados } from "../../helpers";
import { useParams } from "react-router-dom";

const Techs = () => {
  // const { id } = useParams();
  const id = "8b8e50a6-50c2-4718-b817-2d38cad0c8f4";
  const getUser = dados.filter((user) => user.id === id);
  console.log(getUser);
  // const userObject = { ...getUser };
  // console.log(userObject[0]);

  return (
    <>
      <Banner></Banner>
      <Container>
        <h2>Techs</h2>

        <Table data={userObject[0].techs} tech />
        <Table />
      </Container>
    </>
  );
};
export default Techs;
