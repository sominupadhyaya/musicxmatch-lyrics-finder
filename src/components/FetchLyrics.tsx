import useFetch from "../data/useFetch"

const FetchLyrics = () => {
  const { isLoading, data, error } = useFetch(
    
  )
  return (
    <div>FetchLyrics</div>
  )
}

export default FetchLyrics