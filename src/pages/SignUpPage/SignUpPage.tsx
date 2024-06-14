import "../SignUpPage/SignUpPage.css";
import Inputs from "../../components/SignUpInput/SignUpInput";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthUser } from "../../slice/authUsersSlice";
// import Spinner from '../../components/Spinner/Spinner';
import { useNavigate } from "react-router-dom";

export default function SingUpPage() {
  const navigate = useNavigate();

  const [inputName, setInputName] = useState("");
  const [inputEmail, setinputEmail] = useState("");
  const [inputPassword, setinputPassword] = useState("");
  const [inputConfirmPassword, setinputConfirmPassword] = useState("");

  const dispatch = useDispatch<any>();
  //ф-я  создает объект с данными пользователя для аутентификации
  function authObj() {
    return {
      username: inputName,
      email: inputEmail,
      password: inputPassword,
      confirmpassword: inputPassword,
    };
  }
  //ф-я вызывает dispatch fetchAuthUser с объектом данных пользователя для отправки на сервер
  function sendData() {
    dispatch(fetchAuthUser(authObj()));
  }
  //хук используется для получения и вывода состояния authUser из хранилища в консоль
  const auth = useSelector((state: any) => state.authUser);
  console.log(auth);
  //useEffect принимает два аргумента: функцию колбэк и массив зависимостей
  // функция колбэк будет выполнена каждый раз, когда одна из зависимостей изменяется
  //когда auth.status меняется на "resolved", пользователь перенаправляется на главную страницу,
  // а когда значение равно "rejected", пользователь перенаправляется на страницу ошибки
  useEffect(() => {
    if (auth.status === "resolved") {
      navigate("/");
    } else if (auth.status === "rejected") {
      navigate("/errorpage");
    }
  }, [auth.status, navigate]);

  return (
    <>
      <div className={`mainContainerUp`}>
        <div className={`containerUp`}>
          {auth.status === "loading" ? "LOADING" : null}

          {auth.status === null ? (
            <>
              <div className={`inputsContainerUp`}>
                <Inputs
                  id="1"
                  legend="Name"
                  type="text"
                  typeInput={`default focus active`}
                  isDisabled={false}
                  placeholder="Your name"
                  inputValue={inputName}
                  setInputValue={(e) => setInputName(e.target.value)}
                ></Inputs>
                <Inputs
                  id="2"
                  legend="Email"
                  type="email"
                  typeInput={`default focus active`}
                  isDisabled={false}
                  placeholder="Your email"
                  inputValue={inputEmail}
                  setInputValue={(e) => setinputEmail(e.target.value)}
                ></Inputs>
                <Inputs
                  id="3"
                  legend="Password"
                  type="password"
                  typeInput={`default focus active`}
                  isDisabled={false}
                  placeholder="Your password"
                  inputValue={inputPassword}
                  setInputValue={(e) => setinputPassword(e.target.value)}
                ></Inputs>
                <Inputs
                  id="4"
                  legend="Confirm Password"
                  type="password"
                  typeInput={`default focus active`}
                  isDisabled={false}
                  placeholder="Confirm password"
                  inputValue={inputConfirmPassword}
                  setInputValue={(e) => setinputConfirmPassword(e.target.value)}
                ></Inputs>
                <button onClick={sendData} className={`signUpButton`}>
                  Sign Up
                </button>

                <div className={`titleAvailabilityAcc`}>
                  Already have an account?
                  <Link className="signLink" to="/">
                    Log In
                  </Link>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
