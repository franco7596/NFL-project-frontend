import { all } from "redux-saga/effects";
import teams from "./teamSaga";
import players from "./playerSaga";

export default function* rootSaga() {
	yield all([teams(), players()]);
}
