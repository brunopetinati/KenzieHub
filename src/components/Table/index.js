import TableDataTech from "../TableDataTech";
import TableDataWork from "../TableDataWork";
import { TableContainer } from "./styles";

const Table = ({tech=false}) => {
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
        {tech?
          <TableDataTech/>:
          <TableDataWork/>
}        
      </tbody>
    </TableContainer>
  );
};

export default Table;
