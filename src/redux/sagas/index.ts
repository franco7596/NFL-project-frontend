import { all } from "redux-saga/effects";
import teams from "./teamSaga";
// import agents from "./agentsSagas";

export default function* rootSaga() {
	yield all([
		teams(),
		// maps(), agents()
	]);
}
