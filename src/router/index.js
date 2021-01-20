import itemDetails from '../components/view/itemDetails'
// import test from '../components/view/test'
 import inventory from '../components/view/inventory'

export const routes = [
    {
        path: '',
        component: inventory
    },
    {
        path: '/item/:id',
        component: itemDetails
    },


];