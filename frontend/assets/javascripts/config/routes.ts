import UsersContainer from '../containers/Users/UsersContainer'
import UserContainer from '../containers/Users/UserContainer'
import NewUserContainer from '../containers/Users/NewUserContainer'
import { Sample } from '../application'

export default [
  { path: '/users/new', component: NewUserContainer},
  { path: '/users/:id', component: UserContainer},
  { path: '/users', component: UsersContainer },
  { path: '/', component: Sample }
]