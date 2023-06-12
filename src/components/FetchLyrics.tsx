import useFetch from "../data/useFetch"
import { ROOT_URL,API_KEY } from "../data/client"

const FetchLyrics = () => {
  const fetchURL = "track.lyrics.get?track_id=15953433"
  const { isLoading, data, error } = useFetch(
    `${ROOT_URL}/${fetchURL}&apikey=${API_KEY}`
  )
  return (
    <div>FetchLyrics</div>
  )
}

export default FetchLyrics