import { all } from "redux-saga/effects";
import postSagas from "./posts/sagas"

export function* rootSagas() {
  yield all([postSagas]);
}
