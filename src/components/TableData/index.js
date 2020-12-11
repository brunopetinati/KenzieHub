const TableData = ({ stack, data }) => {
  console.log(data);
  return (
    <>
      {data.length >= 1 ? (
        data.map((work) => {
          return (
            <tr key={work.id}>
              <td>{work.id}</td>
              <td>{work.title}</td>
              <td>{work[stack]}</td>
              <td id="buttons">
                <button id="edit">EDIT</button>
                <button id="delete">DELETE</button>
              </td>
            </tr>
          );
        })
      ) : (
        <tr>
          <td colSpan={4}>Nenhum trabalho cadastrado</td>
        </tr>
      )}
    </>
  );
};

export default TableData;
// {tech ? data.status : data.description}
