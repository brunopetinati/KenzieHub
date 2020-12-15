import Modal from "../Modal";

const TableData = ({ stack, data }) => {
  let targetPage = stack === "description" ? "works" : "techs";

  return (
    <>
      {data.length >= 1 ? (
        data.map((work) => {
          return (
            <tr key={work.id}>
              <td>{work.title}</td>
              <td>{work[stack]}</td>
              <td className="buttons">
                <Modal type="edit" page={targetPage} id={work.id}>
                  EDIT
                </Modal>
                <Modal type="delete" page={targetPage} id={work.id}>
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
