import Cover from "../../components/Cover";
import Table from "../../components/Table";
import { Container } from "./styles";
import { dados } from "../../helpers";
import { useParams } from "react-router-dom";

const Works = () => {
  // const { id } = useParams();
  const id = "8b8e50a6-50c2-4718-b817-2d38cad0c8f4";
  const getUser = dados.filter((user) => user.id === id);
  const userObject = { ...getUser };
  console.log(userObject[0]);

  return (
    <>
      <Cover />
      <Container>
        <Table data={userObject[0].works} />
        <div>alguma coisa</div>
        <div>alguma coisa</div>
      </Container>
    </>
  );
};

export default Works;
