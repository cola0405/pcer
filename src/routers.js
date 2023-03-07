import NewProblem from "@/components/NewProblem.vue";
import Main from "@/components/Main.vue";
import ProblemList from "@/components/ProblemList.vue";

const routers = [
    {
        path: '/',
        component: Main,
        children: [
            {
                path: '',
                component: ProblemList
            },
            {
                path: 'new/problem',
                component: NewProblem
            }
        ]
    }

]
export default routers