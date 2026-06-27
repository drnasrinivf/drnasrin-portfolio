import type { SsgOptions } from 'vite-plugin-ssg';
import { StaticRouter } from 'react-router-dom/server';
import App from '../App';

export const ssgOptions: SsgOptions = {
  routeUrl: '/services/infertility',
  slug: 'services/infertility',
  context: async (children) => {
    return <StaticRouter location="/services/infertility">{children}</StaticRouter>;
  },
};

export default function InfertilityStaticPage() {
  return <App />;
}
