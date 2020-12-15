import Modal from "../Modal";
import RatingReadOnly from "../RatingReadOnly";

const TableData = ({ stack, data }) => {
  let targetPage = stack === "description" ? "works" : "techs";

  return (
    <>
      {data.length >= 1 ? (
<<<<<<< HEAD
        data.map((work) => {
=======
        data.map(({ id, title, description, status }) => {
          console.log("stack", stack);
>>>>>>> 2916a87a0910e06d8bab85e57b7bbacd24e9c654
          return (
            <tr key={id}>
              <td>
                <span className="tag">Titutlo: </span>
                {title}
              </td>
              <td>
                <span className="tag">Descrição</span>
                {stack === "status" ? (
                  <RatingReadOnly element={status} />
                ) : (
                  description
                )}
              </td>
              <td className="buttons">
                <Modal type="edit" page={targetPage} id={id}>
                  EDIT
                </Modal>
                <Modal type="delete" page={targetPage} id={id}>
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
