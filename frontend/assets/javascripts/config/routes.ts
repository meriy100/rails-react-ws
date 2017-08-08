import UsersContainer from '../containers/UsersContainer'
import NewUserComponent from '../components/NewUserComponent'
import { Sample } from '../application'
export default [
  { path: '/users/new', component: NewUserComponent},
  { path: '/users', component: UsersContainer },
  { path: '/', component: Sample }
]