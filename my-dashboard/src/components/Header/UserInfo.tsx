import { useAuthContext } from "../../context/useAuthContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const UserInfo = () => {
  const { user } = useAuthContext();
  console.log("user from context is ", user);

  return (
    <>
      {user ? <>{user.name}</> : null}
      {user ? (
        <AccountCircleIcon />
      ) : (
        <AccountCircleIcon style={{ opacity: 0.3 }} />
      )}
    </>
  );
};
