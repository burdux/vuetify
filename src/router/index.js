import Vue from 'vue'
import VueRouter from 'vue-router'
import signIn from '../views/signIn';
import signUp from '../views/signUp';
import todos from '../views/todos';
import addTodo from '../views/addTodo';

Vue.use(VueRouter)

const routes = [
    {
        path: '/signin',
        name: 'signin',
        component: signIn
    },
    {
        path: '/signup',
        name: 'signup',
        component: signUp
    },
    {
        path: '/todos',
        name: 'todos',
        component: todos
    },
    {
        path: '/todos/add',
        name: 'addtodo',
        component: addTodo
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
