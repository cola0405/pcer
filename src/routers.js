import ProblemList from './components/ProblemList.vue'
import NewProblem from "@/components/NewProblem.vue";

const routers = [
    {
        path: '/',  // 设置好route
        name: 'MainPage',
        component: ProblemList
    },{
        path: '/new/problem',  // 设置好route
        name: 'NewProblem',
        component: NewProblem
    }
]
export default routers