import Modal from "../Modal";

const TableData = ({ stack, data }) => {
  return (
    <>
      {data.length >= 1 ? (
        data.map((work, index) => {
          const trueId = index + 1;
          return (
            <tr key={work.id}>
              <td>{trueId}</td>
              <td>{work.title}</td>
              <td>{work[stack]}</td>
              <td id="buttons">
                <Modal type="edit" page={stack} id={work.id}>
                  EDIT
                </Modal>
                <Modal type="delete" page={stack} id={work.id}>
                  DELETE
                </Modal>
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
