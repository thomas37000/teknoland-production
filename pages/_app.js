import "../styles/globals.css";
import Nav from "../src/components/Nav/nav";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout;
  return (
    <div>
      <Nav />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

const EmptyLayout = ({ children }) => <>{children}</>;

export default MyApp;
