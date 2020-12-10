

const TableData = ({ tech, data }) => {
  console.log(data);

  return (
    <>
      {data.map((work) => {
        return (
          <tr key={work.id}>
            <td>{work.id}</td>
            <td>{work.title}</td>
            <td>{work.description}</td>
            <td id="buttons">
              <button id="edit">EDIT</button>
              <button id="delete">DELETE</button>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default TableData;
// {tech ? data.status : data.description}
