import { CanceledError } from 'axios'
import { useEffect, useState } from "react"
import api from '../server/api'

interface FetchResponse<T> {
  count: number
  results: T[]
}

const useData = <T>(endpoint: string) => {
  useEffect(() => { getData() }, [])

  const [data, setData] = useState<T[]>()
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState<boolean>(true)

  const getData = async () => {
    const controller = new AbortController()

    setLoading(true)
    api.get<FetchResponse<T>>(endpoint, {signal: controller.signal})
      .then(({data: { results }}) => setData(results))
      .catch(error => {
        if(error instanceof CanceledError) return
          setError(error.message)
        })
        .finally(() => setLoading(false))

      return () => controller.abort()
  }
  return { data, error, isLoading, setData, setError, setLoading }
}

export default useData