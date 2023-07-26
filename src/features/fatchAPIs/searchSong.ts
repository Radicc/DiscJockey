import axios from "axios";

interface Props {
  songName: string;
  setSearchedList: (e: any) => void;
}

const SearchSong = (props: Props) => {
  const searchSong = async () => {
    const options = {
      method: "GET",
      url: "https://shazam.p.rapidapi.com/search",
      params: {
        term: props.songName,
        limit: "10",
      },
      headers: {
        "X-RapidAPI-Key": "5ff7652132mshfd5344fae57d12bp1aac72jsn2afee6589cda",
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      props.setSearchedList(response.data.tracks.hits);
    } catch (error) {
      console.error(error);
    }
  };
  return { searchSong };
};

export default SearchSong;
