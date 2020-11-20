import React from "react";
import Helmet from "react-helmet";

// Consider migration from react-helmet:
// https://github.com/nfl/react-helmet/issues/621
// https://github.com/nfl/react-helmet/issues/79

export default () => (
    <Helmet>
        <title></title>
        <meta name="description" content="" />
        <meta name="image" content="" />

        <meta name="og:url" content="" />
        <meta name="og:title" content="" />
        <meta name="og:description" content="" />
        <meta name="og:type" content="" />
        <meta name="og:image" content="" />

        <meta name="fb:app_id" content="" />

        <meta name="twitter:card" content="" />
        <meta name="twitter:creator" content="" />
        <meta name="twitter:card" content="" />
    </Helmet>
);
