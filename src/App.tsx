import { useState } from "react";

import { TracksHit } from "./features/interfaces/songList.interface";

import SearchSong from "./features/fatchAPIs/searchSong";

import BlankAvatar from "./assets/BlankAvatar.jpg";
import Search from "./features/Search";

import css from "./app.module.css";

function App() {
  const [songName, setSongName] = useState("");
  const [searchedList, setSearchedList] = useState<TracksHit[]>([]);
  const { searchSong } = SearchSong({ songName, setSearchedList });

  return (
    <div className={css.container}>
      <div
        className={css.authButtonsContainer}
        onClick={() => alert("sign in is not implemented")}
      >
        <h2 className={css.authButton}>Sign in</h2>
      </div>
      <Search
        songName={songName}
        setSongName={(e) => setSongName(e)}
        searchSong={() => searchSong()}
      />
      <span className={css.itemContainer}>
        {searchedList.map((song) => (
          <a
            className={css.songContainer}
            href={song.track.share.href}
            target="_blank"
          >
            <img
              className={css.avatar}
              src={song.track.images.coverart || BlankAvatar}
            />
            <h1 className={css.title}>{song.track.share.text}</h1>
          </a>
        ))}
      </span>
    </div>
  );
}

export default App;
