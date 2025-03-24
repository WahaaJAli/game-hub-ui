import { FetchResponse } from "./api"
import Service from "./service"

export interface IPlatform {
  id: number
  name: string
  slug: string
}

export default new Service<FetchResponse<IPlatform>>('/platforms/lists/parents')