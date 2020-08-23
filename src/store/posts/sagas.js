import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  fetchPosts,
  storePost,
  storePostLoading,
  storePostLoadingEnd,
  likePost,
} from "./actions";

import { posts } from "../../services/posts.service";

function* fetchPostsRequest() {
  try {
    const response = yield call(posts.index);
    yield put(fetchPosts(response.data));
  } catch (error) {
    console.log("function*fetchPostsRequest -> error", error);
  }
}

function* likePostRequest(action) {
  try {
    const response = yield call(posts.like, action.payload);
    console.log("function*likePostRequest -> response", response);
    yield put(likePost(response.data));
  } catch (error) {
    console.log("function*fetchPostsRequest -> error", error);
  }
}

function* storePostRequest(action) {
  try {
    yield put(storePostLoading());
    const response = yield call(posts.store, action.payload);
    yield put(storePostLoadingEnd());
    console.log("function*likePostRequest -> response", response);
    yield put(storePost(response.data));
  } catch (error) {
    console.log("function*fetchPostsRequest -> error", error);
  }
}

export function* watchStorePostsRequest() {
  yield takeLatest("ASYNC_STORE_POST", storePostRequest);
}

export function* watchFetchPostsRequest() {
  yield takeLatest("ASYNC_FETCH_POSTS", fetchPostsRequest);
}

export function* watchLikePostsRequest() {
  yield takeLatest("ASYNC_LIKE_POST", likePostRequest);
}

export default function* postSagas() {
  yield all([
    watchFetchPostsRequest(),
    watchLikePostsRequest(),
    watchStorePostsRequest(),
  ]);
}
