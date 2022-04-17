import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import LoadingPage from "./components/LoadingPage";
import { login, logout } from "./actions/auth";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import { firebase } from "./firebase/firebase";
// import "./playground/promises";



const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // console.log("uid", user.uid);
    store.dispatch(login(user.uid)); //dispatching login
        renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
      } else {
    store.dispatch(logout()); //dispatching logout
    renderApp();
    history.push("/");
  }
});

//- open public/index Page for modification
//- open package.json file for modification of name property
//- open components/LoginPage.js to modify h1 tags to Boilerplate and p tags to Tag line for app
//- open components/ExpenseDashboard.js component for modification and rename to Dashboard
//- open routers/AppRouter.js file to remove these and it usage
// import AddExpensePage from "../components/AddExpensePage";
// import EditExpensePage from "../components/EditExpensePage";
//- open store/configureStore.js file remove and it usage
//import expensesReducer from "../reducers/expenses";
//import filtersReducer from "../reducers/filters";
//- remove import { startSetExpenses } from "./actions/expenses"; on app.js file and it usage
//- tests/components/ExpenseDashboardPage should rename to Dashboard and rename the usage as well
//- startup dev-server and jest
//- remove the previous repository by clicking on the folder to delete it
//- C:\react-course-projects032021\xpensify-app9-boilerplate>git init
//- C:\react-course-projects032021\xpensify-app9-boilerplate>git status
//- C:\react-course-projects032021\xpensify-app9-boilerplate>git add .
//- C:\react-course-projects032021\xpensify-app9-boilerplate>git commit -m "init commit"
//- push to remote github