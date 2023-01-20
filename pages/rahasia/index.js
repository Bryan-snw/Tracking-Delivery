import classes from "./index.module.css";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { signIn } from "next-auth/react";

export default function Rahasia() {
  const router = useRouter();
  const login = true;

  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // For the Ref in Input
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  async function clickHandler(event) {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (login) {
      const result = await signIn("credentials", {
        redirect: false,
        user: enteredUsername,
        password: enteredPassword,
      });

      if (!result.error) {
        //set some auth
        router.replace("/rahasia/home");
      }else{
        setIsError(true);
        setErrorMsg(result.error);
      }
    }

    // router.replace('/rahasia/home')
  }

  return (
    <div className={classes.layout}>
      <h1>Halo, Selamat Datang Admin</h1>
      <div className={`card`}>
        <form onSubmit={clickHandler}>
          <div className={classes.inputForm}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              required
              ref={usernameInputRef}
            />
          </div>
          <div className={classes.inputForm}>
            <label>Password</label>
            <input
              type="password"
              name="username"
              required
              ref={passwordInputRef}
            />
          </div>
          <button className="btnPendek">Masuk</button>
          { isError && <p className={classes.errorMsg}>{errorMsg}</p>}
          
        </form>
      </div>
    </div>
  );
}
