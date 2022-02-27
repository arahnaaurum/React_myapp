import { Checkbox } from "@mui/material";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowName } from "../store/profile/actions";

export function ProfileComp () {
    const {showName, name} = useSelector ((state) => state);
    const dispatch = useDispatch();

    const setShowName = useCallback(() => {
      dispatch(toggleShowName);
    }, [dispatch]);
    
  return (
    <div>
      <h3>Profile</h3>
      <Checkbox
        checked={showName}
        value={showName}
        onChange={setShowName}
        label = { 'Toggle Name' }
      />
      <span>Show Name</span>
      {showName && <h4>{name}</h4>}
    </div>
);

}