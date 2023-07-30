import { useState } from "react";
import { useNavigate } from "react-router";

import { TracksHit } from "../interfaces/songList.interface";

import Search from "../Search";
import SearchSong from "../fatchAPIs/searchSong";

import BlankAvatar from "../../assets/BlankAvatar.jpg";

import css from "../../app.module.css";

const Page_Search = () => {
  const [songName, setSongName] = useState("");
  const [searchedList, setSearchedList] = useState<TracksHit[]>([]);
  const { searchSong } = SearchSong({ songName, setSearchedList });
  const nagivate = useNavigate();
  return (
    <div className={css.container}>
      <div
        className={css.authButtonsContainer}
        onClick={() => nagivate("/DiscJockey/Login")}
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
};

export default Page_Search;
