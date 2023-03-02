// import ProblemList from './components/ProblemList.vue'
import NewProblem from "@/components/NewProblem.vue";
import Main from "@/components/Main.vue";

const routers = [
    {
        path: '/',  // 设置好route
        name: 'MainPage',
        component: Main
    },{
        path: '/new/problem',  // 设置好route
        name: 'NewProblem',
        component: NewProblem
    }
]
export default routers