import css from "./loginPage.module.css";

const Right_Side = () => {
  return (
    <div className={css.rightPage}>
      <div className={css.loginContainer}>
        <div className={css.inputContainer}>
          <input
            className={css.loginInputs}
            placeholder="E-mail alebo prezývka"
          />
          <input className={css.loginInputs} placeholder="Heslo" />
        </div>

        <div className={css.buttonsContainer}>
          <div className={css.flexContainer}>
            <button className={css.loginButton}>Prihlásiť sa</button>
            <a className={css.forgotPassword}>Zabudli ste heslo?</a>
          </div>
          <div className={css.line} />
          <button className={css.newProfile}>Vytvoriť nový účet</button>
        </div>
      </div>
    </div>
  );
};

export default Right_Side;
