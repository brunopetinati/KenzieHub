const TableDataTech = () => {

  const data = {}
  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.title}</td>
      <td>Estrelas</td>
      <td id="buttons">
        <button id="edit">EDIT</button>
        <button id="delete">DELETE</button>
      </td>
    </tr>
  );
};

export default TableDataTech;
