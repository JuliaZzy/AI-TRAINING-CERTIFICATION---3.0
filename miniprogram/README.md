# 人工智能训练师三级 · 代码填空小程序

## 导入微信开发者工具

1. 打开 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
2. 选择「导入项目」
3. 目录选择本文件夹：`miniprogram`
4. 将 `project.config.json` 里的 `"appid": "请替换为你的AppID"` 改成你的小程序 AppID
5. 点击「编译」即可预览

> 资质审核期间也可以本地预览和真机调试，正式发布需等审核通过。

## 功能说明

- **首页**：按章节选择练习，或「开始全部练习」
- **答题页**：支持单选、多选、代码填空（`___` 占位）
- **结果页**：自动判分，显示对错与参考答案

## 题库位置

题目数据在 `data/practice.js`，可直接增删改：

```js
{
  id: 'p29',
  taskCode: '3.2.5',
  type: 'fill',
  score: 2,
  text: '补全代码：...',
  code: "ort_session = ort.InferenceSession('___')",
  blanks: ['version-RFB-320.onnx']
}
```

- `type` 可选：`fill` | `single` | `multiple`
- 填空题用 `___` 表示空，多个空按顺序对应 `blanks` 数组
- 判分时忽略空格、引号差异（`'labels.txt'` 和 `"labels.txt"` 都算对）

## 目录结构

```
miniprogram/
├── app.js / app.json / app.wxss
├── project.config.json
├── data/practice.js      # 题库
├── utils/score.js        # 判分逻辑
└── pages/
    ├── index/            # 首页
    ├── quiz/             # 答题
    └── result/           # 结果
```

## 下一步可扩展

- 增加理论题 JSON（参考 `mock-exam/data/theory.json`）
- 增加「下载 Jupyter 练习包」外链页
- 接入云开发保存练习记录
