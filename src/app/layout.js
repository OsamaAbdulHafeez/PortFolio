import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Osama Hafeez- Mern Stack Developer",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="description" content={metadata.description} />
      <link rel="icon" href={metadata.icon} />
        <script
          src="https://kit.fontawesome.com/3b2468ae5a.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
