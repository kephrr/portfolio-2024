import React from "react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
      <title>Kephren NZE - Portfolio 2024</title>
    </head>
    <body>
    {children}
    </body>
    </html>
  );
}
