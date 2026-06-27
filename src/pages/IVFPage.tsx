import type { SsgOptions } from 'vite-plugin-ssg';
import { StaticRouter } from 'react-router-dom/server';
import App from '../App';

export const ssgOptions: SsgOptions = {
  routeUrl: '/services/ivf',
  slug: 'services/ivf',
  context: async (children) => {
    return <StaticRouter location="/services/ivf">{children}</StaticRouter>;
  },
};

export default function IVFStaticPage() {
  return <App />;
}
