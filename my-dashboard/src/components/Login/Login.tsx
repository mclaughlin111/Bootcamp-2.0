import { StyledPaper } from "../../../src/Dashboard/Dashboard.styled";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { LoginContainer, LoginHeading, Warning } from "./Login.styled";
import { useState } from "react";
import { Tooltip } from "@mui/material";
import { useLogin } from "./useLogin";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/useAuthContext";

// MOVE Hook to Seperate File
const useCheckPassword = () => {
  const [passwordValid, setPasswordValid] = useState(true);

  const checkPassword = (password: string) => {
    const passwordLength = /^.{3,}$/; // Regex to check if password is at least 5 characters long
    setPasswordValid(passwordLength.test(password));
  };

  return { passwordValid, checkPassword };
};

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const { passwordValid, checkPassword } = useCheckPassword();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // MOVED TO HOOK// const [warning, setWarning] = useState("");
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  //HOOK for login
  const { handleLogin, isLoading, warning: warningFromHook } = useLogin();

  const { login } = useAuthContext();

  // return "constructed" object because intelli-sense
  //note aliased parameter warning

  // REFACTORED DUNCAN FUNCTION
  const checkEmail = (email: string) => {
    setEmail(email);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(email));
  };

  if (login) {
    return <Navigate to="/home" />;
  }
  return (
    // <StyledPaper>
    <LoginContainer>
      {/* Email field */}
      <FormControl size="small" sx={{ m: 1, width: "25vw" }} variant="outlined">
        <Tooltip
          title={emailValid ? "" : "Please Enter Valid Email"}
          placement="right"
          disableFocusListener
          open
          arrow
        >
          <TextField
            type="email"
            placeholder="Enter email address"
            autoFocus
            autoComplete="EricaCEdwards@jourrapide.com"
            error={!emailValid}
            fullWidth
            size="small"
            label="Email Address"
            id="emailAddress"
            onBlur={(email) => checkEmail(email.target.value.trim())}
            onChange={(email) => checkEmail(email.target.value.trim())}
          />
        </Tooltip>
      </FormControl>

      {/* Password field */}
      <FormControl size="small" sx={{ m: 1, width: "25vw" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <Tooltip
          title={passwordValid ? "" : "Please enter valid password"}
          placement="right"
          disableFocusListener
          open
          arrow
        >
          <OutlinedInput
            error={!passwordValid}
            onBlur={(password) => setPassword(password.target.value)}
            onChange={(password) => setPassword(password.target.value)}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </Tooltip>

        {/* Password Information */}
        <Button
          disabled={!emailValid}
          sx={{ width: "10vw", marginTop: "15px" }}
          variant="contained"
          disableElevation
          onClick={() => handleLogin(password, email)}
        >
          Login
        </Button>
        <Warning>{warningFromHook ? warningFromHook : null}</Warning>
      </FormControl>
    </LoginContainer>
    // </StyledPaper>
  );
};
