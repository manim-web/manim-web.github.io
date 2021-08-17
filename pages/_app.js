import 'nextra-theme-docs/style.css';
import 'katex/dist/katex.min.css';
import Prism from 'prism-react-renderer/prism';

if (typeof global !== 'undefined') {
  global.Prism = Prism;
} else {
  window.Prism = Prism;
}

require('prismjs/components/prism-dart');
require('prismjs/components/prism-bash');

function Nextra({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default Nextra;
