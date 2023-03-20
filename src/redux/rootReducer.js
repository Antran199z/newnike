import { combineReducers } from "redux";
import reducerSignUp from "../component/Navbar/NavmainComponent/module/Reducer/reducer"
import reducerURL from "../component/ListProduct/Module/Reducers/reducer";
const rootReducer= combineReducers({
    reducerSignUp,
    reducerURL,
})
export default rootReducer