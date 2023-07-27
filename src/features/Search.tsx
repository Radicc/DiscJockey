import css from "./search.module.css";

interface Props {
  songName: string;
  setSongName: (e: string) => void;
  searchSong: () => void;
}

const Search = (props: Props) => {
  return (
    <div className={css.searchContainer}>
      <input
        className={css.search}
        value={props.songName}
        onChange={(e) => props.setSongName(e.currentTarget.value)}
        onBlur={() => props.searchSong()}
      />
    </div>
  );
};

export default Search;
