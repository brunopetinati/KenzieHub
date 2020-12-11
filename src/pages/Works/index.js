import Cover from "../../components/Cover";
import Table from "../../components/Table";
import { Container } from "./styles";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Works = () => {
  // const { id } = useParams();

  const data = useSelector((state) => state.data);

  const id = "047e5718-07ae-45e0-a256-1fa9a0186985";
  const getUser = data.find((user) => user.id === id);
  let userWorks = [
    {
      id: "0cd019b5-10c5-4eb4-9781-5dff577cfd9e",
      title: "KenzieHub",
      description:
        "I was the backend developer of this project, and i did it using Typescript and NodeJS",
      deploy_url: "https://kenziehub.me",
      created_at: "2020-12-03T01:13:44.720Z",
      updated_at: "2020-12-03T01:13:44.720Z",
    },
  ];

  // getUser && console.log(getUser.works);
  // console.log(` userWorks = ${userWorks}`);

  return (
    <>
      <Cover />
      <Container>
        <Table data={userWorks} title="description" />
        <div>alguma coisa</div>
        <div>alguma coisa</div>
      </Container>
    </>
  );
};

export default Works;
