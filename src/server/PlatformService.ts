import Service from "./service"

export interface IPlatform {
  id: number
  name: string
  slug: string
}

export default new Service<IPlatform>('/platforms/lists/parents')