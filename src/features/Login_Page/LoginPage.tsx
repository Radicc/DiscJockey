import Left_Side from "./LeftSide";
import Right_Side from "./RightSide";
import css from "./loginPage.module.css";

const Login_Page = () => {
  return (
    <div className={css.container}>
      <Left_Side />
      <Right_Side />
    </div>
  );
};

export default Login_Page;
