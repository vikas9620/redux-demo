import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "./store/Index";
import UserProfile from "./components/UserProfile";

function App() {
  const dispatch = useDispatch()
  const show = useSelector(state => state.auth.isAuthenticated)
  const loginHandler = () => {
    dispatch(authAction.login());
  };
  const logoutHandler = () => {
    dispatch(authAction.logout());
  }
  return (
    <Fragment>
    <Header logout={logoutHandler}/>
   {show && <UserProfile/>  }
   {!show &&  <Auth login={loginHandler} />}
      <Counter />
    </Fragment>
  );
}

export default App;
