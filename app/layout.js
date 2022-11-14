import '/styles/styles.scss'

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <head>
        <title>ECOAL Trading</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico"/>
        <meta name="description" content="ECOAL Trading, empresa dedicada a facilitar el intercambio y distribución de bienes" />
        <meta name="keywords" content="ECOAL Trading, ECOAL, Trading, comercio, intercambio, bienes, confiable" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}