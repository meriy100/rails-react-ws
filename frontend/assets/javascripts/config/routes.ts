import UsersContainer from '../containers/Users/UsersContainer'
import UserContainer from '../containers/Users/UserContainer'
import NewUserContainer from '../containers/Users/NewUserContainer'
import { Sample } from '../application'

export type RouteMap =  {
  path:string;
  component:any;
  routes:Array<RouteMap>;
}

const routes:Array<RouteMap> = [
  { path: '/users', component: UsersContainer, routes: [
    { path: 'new', component: NewUserContainer, routes: []},
    { path: ':id', component: UserContainer, routes: []},
  ] },
  { path: '/', component: Sample, routes: [] }
]

export default routes;