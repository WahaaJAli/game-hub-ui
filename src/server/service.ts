import { AxiosRequestConfig } from "axios"
import api, { FetchResponse } from "./api"

class Service<T> {
  constructor(public endPoint: string) {}

  get = async (queryParams?: AxiosRequestConfig) => {
    return (await api.get<FetchResponse<T>>(this.endPoint, queryParams)).data
  }

  getById = async (id: string) => {
    return (await api.get<T>(`${this.endPoint}/${id}`)).data
  }

  create = async (entity: T) => {
    return (await api.post(this.endPoint, entity)).data
  }

  update = async (id: string, entity: T) => {
    return (await api.put(`${this.endPoint}/${id}`, entity)).status
  }

  delete = async (id: string) => {
    return (await api.delete<T>(`${this.endPoint}/${id}`)).status
  }
}

// const create = (endPoint: string) => new Service(endPoint)
export default Service