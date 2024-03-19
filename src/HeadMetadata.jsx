import React from 'react';
import { Helmet } from 'react-helmet';
import './style.css'; // Zaimportuj plik ze stylami

function Helmet() {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <title>Wojciech Górecki</title>
        {/* Dodaj inne elementy <meta>, <link>, <script> itp. */}
      </Helmet>
      {/* Reszta twojej aplikacji */}
    </>
  );
}

export default HeadMetadata;