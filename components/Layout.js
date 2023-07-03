import { Sora } from "@next/font/google";
import Nav from "./Nav";
import Header from "./Header";
import TopLeftImg from "./TopLeftImg";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

// components Nav from "../components/Nav
const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-site bg-cover bg-no-repeat text-white ${sora.variable} relative font-sora`}
    >
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
