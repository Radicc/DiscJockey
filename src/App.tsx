import css from "./app.module.css";

function App() {
  return (
    <div className={css.container}>
      <div className={css.searchContainer}>
        <input className={css.search} />
      </div>
    </div>
  );
}

export default App;
