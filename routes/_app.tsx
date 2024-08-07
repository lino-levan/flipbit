import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Flipbit</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="bg-gray-900 w-screen h-screen">
        <Component />
      </body>
    </html>
  );
}
