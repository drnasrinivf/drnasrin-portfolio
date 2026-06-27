import type { SsgOptions } from 'vite-plugin-ssg';
import { StaticRouter } from 'react-router-dom/server';
import App from '../App';

export const ssgOptions: SsgOptions = {
  routeUrl: '/services/gynecology',
  slug: 'services/gynecology',
  context: async (children) => {
    return <StaticRouter location="/services/gynecology">{children}</StaticRouter>;
  },
};

export default function GynecologyStaticPage() {
  return <App />;
}
