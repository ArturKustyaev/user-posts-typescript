import axios, { AxiosResponse } from 'axios'
import { IPost, IUser } from 'components'

const instance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
	timeout: 5000
})

const usersApi = {
	fetchUsers: (): Promise<AxiosResponse<Array<IUser>>> => {
		return instance.get('/users', {
			params: {
				_limit: 4
			}
		})
	},
	fetchPostsByUserId: (userId: string): Promise<AxiosResponse<Array<IPost>>> => {
		return instance.get('/posts', {
			params: {
				userId,
				_limit: 3
			}
		})
	}
}

export default usersApi
