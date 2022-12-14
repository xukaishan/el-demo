
import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    build: {
        outDir: 'dist',
        lib: {
            entry: resolve(__dirname, './src/index.js'),
            name: 'my-ui',
            fileName: (format) => `my-ui.${format}.js`,
        },
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ['vue', 'vue-router'],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
    plugins: [
        [vue()],
    ],
});
