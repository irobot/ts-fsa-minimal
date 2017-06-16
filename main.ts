/**
 * Created by irobot on 6/16/2017.
 */

import {createStore} from 'redux';
import reducers from "typescript-fsa-reducers";
import actionCreatorFactory from 'typescript-fsa';

// Actions
const actionCreator = actionCreatorFactory();

export const showComments = actionCreator("ui/command/SHOW_COMMENTS");
export const hideComments = actionCreator("ui/command/HIDE_COMMENTS");

// State shape
interface UiState {
  isShowingComments: boolean;
}

const INITIAL_UI_STATE: UiState = {
  isShowingComments: false
};

// Reducers
const showCommentsHandler = (state: UiState) : UiState =>
  ({ ...state, isShowingComments: true });

const hideCommentsHandler = (state: UiState) : UiState =>
  ({...state, isShowingComments: false});

export const uiReducer =
  reducers.reducerWithInitialState(INITIAL_UI_STATE)
    .case(showComments, showCommentsHandler)
    .case(hideComments, hideCommentsHandler)
    .build();

// THE Store
export const store = createStore(uiReducer);

// UI
const main = document.getElementById("main");
const results = document.getElementById("results");
const errorLog = document.getElementById("error");

store.subscribe(() => {
  const message = `State changed: ${JSON.stringify(store.getState())}`;
  console.log(message);
  const paragraph = document.createElement("p");
  paragraph.innerText = message;
  results.appendChild(paragraph);
});

store.dispatch(showComments());
store.dispatch(hideComments());

// Indicate successful run!
main.setAttribute("style", "display: block;");
errorLog.setAttribute("style", "display: none;");

