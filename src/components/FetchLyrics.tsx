import useFetch from "../data/useFetch"

const FetchLyrics = () => {
  const { isLoading, data, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  )
  if (isLoading) console.log('loading...')
  if (error) console.error('error')
  console.log(data)
  return (
    <div>FetchLyrics</div>
  )
}

export default FetchLyrics