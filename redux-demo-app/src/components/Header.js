import classes from './Header.module.css';
import { useDispatch, useSelector } from "react-redux";
import { authAction } from '../store/Index';
const Header = (props) => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.auth.isAuthenticated)
  const loginHandler = () => {
    dispatch(authAction.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
     {show && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={loginHandler}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
