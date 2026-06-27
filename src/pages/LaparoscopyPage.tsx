import type { SsgOptions } from 'vite-plugin-ssg';
import { StaticRouter } from 'react-router-dom/server';
import App from '../App';

export const ssgOptions: SsgOptions = {
  routeUrl: '/services/laparoscopy',
  slug: 'services/laparoscopy',
  context: async (children) => {
    return <StaticRouter location="/services/laparoscopy">{children}</StaticRouter>;
  },
};

export default function LaparoscopyStaticPage() {
  return <App />;
}
