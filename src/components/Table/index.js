import TableData from "../TableData";
import { TableContainer } from "./styles";

const Table = ({tech=false, data}) => {
  return (
    <TableContainer>
      <thead>
        <th id="ID">ID</th>
        <th id="title">Title</th>
        <th id="Status">{tech? 
        "Status":
        "Description"
        }</th>
        <th id="actions">Actions</th>
      </thead>
      <tbody>
        <TableData tech={tech} data={data}/>
      </tbody>
    </TableContainer>
  );
};

export default Table;
