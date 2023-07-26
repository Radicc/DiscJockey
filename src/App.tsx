import { useState } from "react";
import SearchSong from "./features/fatchAPIs/searchSong";

import BlankAvatar from "./assets/BlankAvatar.jpg";
import css from "./app.module.css";
import { TracksHit } from "./features/interfaces/songList.interface";

function App() {
  const [songName, setSongName] = useState("");
  const [searchedList, setSearchedList] = useState<TracksHit[]>([]);
  const { searchSong } = SearchSong({ songName, setSearchedList });
  return (
    <div className={css.container}>
      <div className={css.searchContainer}>
        <input
          className={css.search}
          value={songName}
          onChange={(e) => setSongName(e.currentTarget.value)}
          onBlur={() => searchSong()}
        />
      </div>
      <span className={css.itemContainer}>
        {searchedList.map((song) => (
          <div className={css.songContainer}>
            <img
              className={css.avatar}
              src={song.track.share.avatar || BlankAvatar}
            />
            <a
              className={css.title}
              href={song.track.share.href}
              target="_blank"
            >
              {song.track.share.subject}
            </a>
          </div>
        ))}
      </span>
    </div>
  );
}

export default App;
