import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReduxProvider from "@/features/Provider";
import ApolloWrapper from "@/lib/apollo-wrapper";
// import Navbar2 from "@/components/Navbar2";
const inter = Inter({
  weight: ["200", "400", "500"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Customer Portal",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navAndFotterHidingRoute = ["/dashboard"];

  return (
    // <Provider store={store}>
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Navbar navAndFotterHidingRoute={navAndFotterHidingRoute} />
          {/* <Navbar2 /> */}
          <ApolloWrapper>{children}</ApolloWrapper>
        </ReduxProvider>

        <Footer navAndFotterHidingRoute={navAndFotterHidingRoute} />
      </body>
    </html>
    // </Provider>
  );
}
