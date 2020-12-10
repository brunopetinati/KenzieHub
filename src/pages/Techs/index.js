import Table from "../../components/Table";
import { Container, Banner } from "./styles";
const Techs = () => {
  //
  // receber o ultimo paramentro do useHistory e fazer slip e pega ultima id
  //filter para id
  //  prop title
  // <Table data={data.techs} title="techs"   />
  return (
    <>
      <Banner></Banner>
      <Container>
        <h2>Techs</h2>
        <Table />
      </Container>
    </>
  );
};
export default Techs;
