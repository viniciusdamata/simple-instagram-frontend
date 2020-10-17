import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  fetchPosts,
  storePost,
  storePostLoading,
  storePostLoadingEnd,
  likePost,
} from "./actions";

import { posts } from "../../../services/posts.service";

import history from "../../../config/history";

function* fetchPostsRequest() {
  try {
    const response = yield call(posts.index);
    yield put(fetchPosts(response.data));
  } catch (error) {}
}

function* likePostRequest(action) {
  try {
    const response = yield call(posts.like, action.payload);

    yield put(likePost(response.data));
  } catch (error) {}
}

function* storePostRequest(action) {
  try {
    yield put(storePostLoading());
    const response = yield call(posts.store, action.payload);
    yield put(storePostLoadingEnd());
    history.push(action.meta.redirectPath);
    yield put(storePost(response.data));
  } catch (error) {
    yield put(storePostLoadingEnd());
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

export default all([
  takeLatest("ASYNC_STORE_POST", storePostRequest),
  takeLatest("ASYNC_FETCH_POSTS", fetchPostsRequest),
  takeLatest("ASYNC_LIKE_POST", likePostRequest),
]);
