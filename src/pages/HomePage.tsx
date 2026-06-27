import type { SsgOptions } from 'vite-plugin-ssg';
import { StaticRouter } from 'react-router-dom/server';
import App from '../App';

export const ssgOptions: SsgOptions = {
  routeUrl: '/',
  slug: 'index',
  context: async (children) => {
    return <StaticRouter location="/">{children}</StaticRouter>;
  },
};

export default function HomeStaticPage() {
  return <App />;
}
