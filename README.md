# 我的 Vue 3 + TSX 项目

## 编码规范

### ref 默认值

推荐使用
```tsx
const div = ref<HTMLDivElement>();
```

不推荐使用
```tsx
const div = ref<HTMLDivElement | null>(null);
```

## 如何开发

## 如何打包
```
pnpm run build
```
// build path  部署到GitHub时必须配置 vite.config.js里添加 base:'/'或‘/reponame/’
// 打包后打开8080端口 自动转发 | 也可以用 pnpm run preview 打开4173端口
```
http-server dist
```