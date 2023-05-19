import React from "react";
import styled from "styled-components";
import { clearAllUser } from "../store/slice/UserSlice";
import { useDispatch } from "react-redux";
export const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const deleteUsers = () => {
    dispatch(clearAllUser());
  };
  return (
    <Wrapper>
      <button className="btn clear-btn" onClick={deleteUsers}>
        Clear Users
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .clear-btn {
    text-transform: capitalize;
    background-color: #db338a;
    margin-top: 2rem;
  }
`;
export default DeleteAllUser;
