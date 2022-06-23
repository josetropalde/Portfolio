import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import "../styles/globals.css";

function App({ Component, pageProps, router }) {
  return (
    <motion.div
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
      }}
    >
      <Toaster position="top-right" />
      <Component {...pageProps} />
    </motion.div>
  );
}

export default App;
