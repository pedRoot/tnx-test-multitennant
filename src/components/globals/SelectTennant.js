import { useConfigContext } from "../../context/configContext";

const SelectTennant = () => {
  const {handleChangeConfig} = useConfigContext();

  const handleChange = (e) => {
    handleChangeConfig(e.target.value);
  };

  return (
    <form className="form-inline">
      <select className="my-2 my-sm-0" name="select-tennat" onChange={(e) => handleChange(e)}>
        <option value="BDB">DBD</option>
        <option value="TNX">TNX</option>
      </select>
    </form>
  )
}

export default SelectTennant;
