import Main from "@/components/Main.vue";
import ProblemList from "@/components/ProblemList.vue";
import ProblemForm from "@/components/ProblemForm.vue";

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
                path: 'problem/form',
                component: ProblemForm
            }
        ]
    }

]
export default routers