import React from "react";
import ReactDOM from "react-dom/client";
import { DataBrowserRouter, Route } from "react-router-dom";
import "./index.css";
import Root, {
  loader as rootLoader,
  action as routeAction,
} from "./routes/root";
import ErrorPage from "./error-page";
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "./routes/contact";
import EditContact, {
  loader as EditContactLoader,
  action as editContactAction,
} from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";
import Index from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataBrowserRouter>
      <Route
        path="/"
        element={<Root />}
        errorElement={<ErrorPage />}
        loader={rootLoader}
        action={routeAction}
      >
        <Route errorElement={<ErrorPage />}>
          <Route index element={<Index />} />
          <Route
            path="contacts/:contactId"
            element={<Contact />}
            loader={contactLoader}
            action={contactAction}
          />
          <Route
            path="contacts/:contactId/edit"
            element={<EditContact />}
            loader={EditContactLoader}
            action={editContactAction}
          />
          <Route
            path="contacts/:contactId/destroy"
            action={destroyAction}
            errorElement={<div>Error only specific to destroy page!</div>}
          />
        </Route>
      </Route>
    </DataBrowserRouter>
  </React.StrictMode>
);
