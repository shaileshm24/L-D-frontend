import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userLoginReducer from './component/login/login.reducer';

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers ({
   user: userLoginReducer
});

export default persistReducer(persistConfig, rootReducer);
