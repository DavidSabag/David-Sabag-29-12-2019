import { BUY_CAKE, GIVE_BACK_CAKE } from './cakeTypes'
//import store from '../store'


const buyCake = () => {
    return {
        type: BUY_CAKE
    }

}
const giveBackCake = () => {

    return {
        type: GIVE_BACK_CAKE
    }

}

export { buyCake, giveBackCake }