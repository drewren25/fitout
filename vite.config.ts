import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/fitout/', // Replace <repository-name> with your GitHub repository name
  plugins: [react()],
});
