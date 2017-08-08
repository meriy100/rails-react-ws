import UsersContainer from '../containers/Users/UsersContainer'
import UserContainer from '../containers/Users/UserContainer'
import NewUserContainer from '../containers/Users/NewUserContainer'
import DashboardComponent from '../components/DashboardComponent'

export type RouteMap =  {
  path:string;
  component:any;
  routes:Array<RouteMap>;
}

const routes:Array<RouteMap> = [
  { 
    path: '/users', component: UsersContainer, routes: [
      { path: '/users/new', component: NewUserContainer, routes: []},
      { path: '/users/:id', component: UserContainer, routes: []},
    ] 
  }, { path: '/', component: DashboardComponent, routes: [] }
]

export default routes;