import createSagaMiddleware from "redux-saga";
import { combineReducers, applyMiddleware, createStore } from "redux";
import reduceTeams from "../reducers/teamReducer";
// import reduceAgents from "../reducers/agentsReducers";
import rootSaga from "../sagas";

const reducer = combineReducers({
	teams: reduceTeams,
	// agents: reduceAgents,
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;

export type stateType = ReturnType<typeof reducer>;
