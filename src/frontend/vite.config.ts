import { loadEnv, defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { urbitPlugin } from '@urbit/vite-plugin-urbit';

// https://vitejs.dev/config/
export default ({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd()));
  const SHIP_URL = process.env.VITE_SHIP_URL || (mode === 'development' ? 'http://localhost:8080' : '');
  console.log(SHIP_URL);

  return defineConfig({
    plugins: [
      urbitPlugin({ base: 'blog', target: SHIP_URL, changeOrigin: true, secure: false }),
      reactRefresh(),
    ]
  });
};
