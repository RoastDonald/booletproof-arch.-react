import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import shopReducer from "./shop/shop.reducer";
import adminReducer from "./admin/admin.reducer";
import alertReducer from "./alert/alert.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const generateConfig = (key, props = []) => ({
  key,
  storage,
  blacklist: ["error", ...props],
});

export default combineReducers({
  user: persistReducer(generateConfig("user"), userReducer),
  shop: persistReducer(generateConfig("shop", ["products"]), shopReducer),
  alert: alertReducer,
  admin: adminReducer,
});
