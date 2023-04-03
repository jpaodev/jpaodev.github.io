import React from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { useRouteError } from "react-router-dom";
import { IRouteError } from "../interfaces/errors";

interface ErrorPageProps extends WithTranslation {
  // Add any additional props needed for ErrorPage here
}

const ErrorPage: React.FC<ErrorPageProps> = ({ t }) => {
  const error = useRouteError() as IRouteError;
  console.error(error);

  return (
    <div id="error-page">
      <h1>{t("Oops!")}</h1>
      <p>{t("Sorry, an unexpected error has occurred.")}</p>
      <p>
        <i>{(error && error.statusText) || error.message}</i>
      </p>
    </div>
  );
};

export default withTranslation()(ErrorPage);
