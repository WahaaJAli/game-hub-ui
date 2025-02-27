import { CanceledError } from 'axios'
import { useEffect, useState } from "react"
import GameService, { IGame } from '../server/GameService'

interface FetchFromServer {
  count: number
  results: IGame[]
}

const useGames = () => {
  useEffect(() => { getGames() }, [])

  const [games, setGames] = useState<IGame[]>()
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState<boolean>(true)

  const getGames = async () => {
    const { request, cancel } = GameService.get<FetchFromServer>()

    setLoading(true)
    request
    .then(({data: { results }}) => setGames(results))
    .catch(error => {
      if(error instanceof CanceledError) return
        setError(error.message)
      })
      .finally(() => setLoading(false))

    return () => cancel()
  }
  return { games, error, isLoading, setGames, setError, setLoading }
}

export default useGames