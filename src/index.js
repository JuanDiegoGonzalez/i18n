import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import "bootstrap/dist/css/bootstrap.min.css";

import JobsList from "./components/jobslist";

ReactDOM.render(
  <IntlProvider
    locale={
      (navigator.language || navigator.userLanguage) === "es-ES"
        ? "es-ES"
        : "en-US"
    }
    messages={
      (navigator.language || navigator.userLanguage) === "es-ES"
        ? localeEsMessages
        : localeEnMessages
    }
  >
    <JobsList language={navigator.language || navigator.userLanguage} />
  </IntlProvider>,
  document.getElementById("root")
);
