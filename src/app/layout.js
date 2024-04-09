import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "./global.css";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
// export const metadata = {
//   title: "ABC DEF",
//   description: "Next js tutorial",
// };
export const metadata = {
  title: {
    default: "Next.js Homepage",
    template: "%s | Next.js",
  },
  description: "Next js tutorial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
