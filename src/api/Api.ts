import { IPost } from './apiModels'

class Api {
  private static readonly baseApi = 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/'

  public static async getPostsAsync (): Promise<Array<IPost>> {
    const url = Api.baseApi + '/posts'
    const response = await window.fetch(url, { credentials: 'omit' })
    const result = await response.json() as Array<IPost>
    return result
  }

  public static async getSinglePostAsync (id: string): Promise<IPost> {
    const url = Api.baseApi + '/posts' + `/${id}`
    console.log(url)
    const response = await window.fetch(url, { credentials: 'omit' })
    const result = await response.json()
    return result as IPost
  }
}

export default Api
