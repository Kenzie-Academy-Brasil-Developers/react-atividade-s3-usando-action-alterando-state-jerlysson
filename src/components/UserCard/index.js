import { TextField, Button } from "@material-ui/core";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../store/modules/user/actions";
import { BoxCard } from "./style";

function UserCard() {
  const [newName, setNewName] = useState("");
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const names = useSelector((state) => state.names);

  const handleClick = (data) => {
    setNewName(data.name);
    dispatch(changeName(newName));
  };
  return (
    <BoxCard>
      <h3>Nome: {newName}</h3>
      <form onSubmit={handleSubmit(handleClick)}>
        <TextField
          id="standard-basic"
          label="Digite um Nome"
          variant="standard"
          {...register("name")}
        />

        <Button type="submit" variant="contained">
          Adcionar
        </Button>
      </form>
    </BoxCard>
  );
}

export default UserCard;
