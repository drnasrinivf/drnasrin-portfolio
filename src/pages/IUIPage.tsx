import type { SsgOptions } from 'vite-plugin-ssg';
import { StaticRouter } from 'react-router-dom/server';
import App from '../App';

export const ssgOptions: SsgOptions = {
  routeUrl: '/services/iui',
  slug: 'services/iui',
  context: async (children) => {
    return <StaticRouter location="/services/iui">{children}</StaticRouter>;
  },
};

export default function IUIStaticPage() {
  return <App />;
}
