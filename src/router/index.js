import Main from "../pages/Main.jsx";
import Login from "../pages/Login.jsx";
import WorkInfo from "../pages/WorkInfo.jsx";

export const publicRoutes = [
    {path: '/', element: <Main/>, exact: true},
    {path: '/work', element: <WorkInfo/>, exact: true},
    {path: '/login', element: <Login/>, exact: true}
]

export const privateRoutes = [

]