import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import reduceTeams from "../reducers/teamReducer";
import reduceplayers from "../reducers/playerReducer";
import rootSaga from "../sagas";

const reducer = combineReducers({
	teams: reduceTeams,
	players: reduceplayers,
});
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default store;

export type stateType = ReturnType<typeof reducer>;
