
const navigation = [
    {
        id: '10',
        path:'/dashboard',
        exact: true,
        label:'Dashboard',
        component: 'Dashboard',
        icon: 'home'
    },
    {
        id: '20',
        path:'/users',
        exact: false,
        label:'Users',
        component: 'Users',
        icon: 'user outline',
        children: [
            {
                id: '21',
                path:'/users/list',
                exact: true,
                label:'View Users',
                component: 'Users',
                icon: 'user outline',
            },
            {
                id: '22',
                path:'/users/add',
                exact: true,
                label:'Add New User',
                component: 'Users',
                icon: 'user outline',
            }
        ]
    },
    {
        id: '30',
        path:'/activities',
        exact: true,
        label:'Activities',
        component: 'Activities',
        icon: 'cube',
    },
    {
        id: '40',
        path:'/products',
        exact: true,
        label:'Products',
        component: 'Products',
        icon: 'shopping cart',
    },
    {
        id: '50',
        path:'/settings',
        exact: true,
        label:'Settings',
        component: 'Settings',
        icon: 'cog',
    }
]

function flatten(a){
    let result =  [];
    a.forEach((i) => {

        if (Array.isArray(i.children)) {
            result = result.concat(flatten(i.children));
        }
        result.push(i);
    })
    return result;
}


const navigationFlat = flatten(navigation);
export { navigationFlat }


export default navigation;