//COMPONENTS
import ModalHeader from "../../components/ModalHeader";
import Button from "@material-ui/core/Button";

const ModalChangePhoto = ({ setOpen }) => {
  return (
    <>
      <ModalHeader title="Update Picture" setOpen={setOpen} />
      <form>
        <label htmlFor="upload-photo">
          <input id="upload-photo" name="upload-photo" type="file" />

          <Button component="span">Upload button</Button>
        </label>
        <Button>Update</Button>
      </form>
    </>
  );
};

export default ModalChangePhoto;
