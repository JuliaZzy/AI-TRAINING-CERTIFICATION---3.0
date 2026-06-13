module.exports = {
  title: '人工智能训练师（三级）代码填空练习',
  description: '基于实操题参考答案的代码填空与知识点自测',
  tasks: [
    { code: '1.1.1', name: '智能医疗系统中的业务数据处理流程设计', time: '30min', score: 25 },
    { code: '2.1.1', name: '智慧交通中燃油效率模型的数据清洗和标注流程设计', time: '20min', score: 15 },
    { code: '2.2.1', name: '智能信用评分Logistic回归模型开发与测试', time: '20min', score: 20 },
    { code: '3.1.1', name: '智能音箱产品的数据分析与优化', time: '20min', score: 15 },
    { code: '3.2.1', name: '图像识别评估系统交互流程设计', time: '20min', score: 20 },
    { code: '3.2.2', name: '手写数字识别系统交互流程设计', time: '20min', score: 20 },
    { code: '3.2.3', name: '人脸表情识别系统交互流程设计', time: '20min', score: 20 },
    { code: '3.2.4', name: '花卉识别系统交互流程设计', time: '20min', score: 20 },
    { code: '3.2.5', name: '人脸AI智能检测系统交互流程设计', time: '20min', score: 20 },
    { code: '4.2.1', name: '智能零售分析系统数据采集和处理指导', time: '10min', score: 5 }
  ],
  quiz: [
    {
      id: 'p1',
      taskCode: '1.1.1',
      type: 'single',
      score: 2,
      text: '1.1.1 题中，高风险患者的定义是住院天数超过多少天？',
      options: { A: '5天', B: '7天', C: '10天', D: '14天' },
      answer: 'B'
    },
    {
      id: 'p2',
      taskCode: '1.1.1',
      type: 'fill',
      score: 2,
      text: '补全代码：根据住院天数判断风险等级',
      code: "data['RiskLevel'] = np.where(data['DaysInHospital'] > ___, '高风险患者', '低风险患者')",
      blanks: ['7'],
      hint: '住院天数阈值'
    },
    {
      id: 'p3',
      taskCode: '1.1.1',
      type: 'fill',
      score: 2,
      text: '补全代码：BMI 区间划分（左闭右开）',
      code: "data['BMIRange'] = pd.cut(data['BMI'], bins=bmi_bins, labels=bmi_labels, right=___)",
      blanks: ['False'],
      hint: 'right 参数'
    },
    {
      id: 'p4',
      taskCode: '2.1.1',
      type: 'fill',
      score: 2,
      text: '补全代码：删除缺失值',
      code: 'data = data.___()',
      blanks: ['dropna']
    },
    {
      id: 'p5',
      taskCode: '2.1.1',
      type: 'fill',
      score: 2,
      text: '补全代码：horsepower 转数值，无法转换设为 NaN',
      code: "data['horsepower'] = pd.to_numeric(data['horsepower'], errors='___')",
      blanks: ['coerce']
    },
    {
      id: 'p6',
      taskCode: '2.1.1',
      type: 'multiple',
      score: 3,
      text: '2.1.1 题选择的特征包括哪些？（多选，不含目标变量 mpg）',
      options: {
        A: 'cylinders',
        B: 'displacement',
        C: 'horsepower',
        D: 'weight',
        E: 'mpg'
      },
      answer: ['A', 'B', 'C', 'D']
    },
    {
      id: 'p7',
      taskCode: '2.2.1',
      type: 'single',
      score: 2,
      text: '2.2.1 题使用的分类模型是？',
      options: { A: '决策树', B: 'Logistic 回归', C: 'SVM', D: '随机森林' },
      answer: 'B'
    },
    {
      id: 'p8',
      taskCode: '2.2.1',
      type: 'fill',
      score: 2,
      text: '补全代码：处理数据不平衡',
      code: 'from imblearn.over_sampling import ___\nsmote = SMOTE(random_state=42)\nX_resampled, y_resampled = smote.fit_resample(X_train, y_train)',
      blanks: ['SMOTE']
    },
    {
      id: 'p9',
      taskCode: '2.2.1',
      type: 'fill',
      score: 2,
      text: '补全代码：Logistic 回归最大迭代次数',
      code: 'model = LogisticRegression(max_iter=___)',
      blanks: ['1000']
    },
    {
      id: 'p10',
      taskCode: '3.1.1',
      type: 'multiple',
      score: 3,
      text: '3.1.1 参考答案：最常被使用的功能有哪些？（多选）',
      options: {
        A: '调整音量',
        B: '查询新闻',
        C: '查天气',
        D: '控制家居'
      },
      answer: ['A', 'B', 'C']
    },
    {
      id: 'p11',
      taskCode: '3.1.1',
      type: 'single',
      score: 2,
      text: '3.1.1 参考答案：最受欢迎的功能是？',
      options: { A: '播放音乐', B: '调整音量', C: '查天气', D: '控制家居' },
      answer: 'B'
    },
    {
      id: 'p12',
      taskCode: '3.2.1',
      type: 'fill',
      score: 2,
      text: '补全代码：加载 ONNX 模型',
      code: "session = ort.InferenceSession('___')",
      blanks: ['resnet.onnx']
    },
    {
      id: 'p13',
      taskCode: '3.2.1',
      type: 'fill',
      score: 2,
      text: '补全代码：获取 Top5 类别索引',
      code: 'top5_idx = np.argsort(probabilities[0])[-5:][___]',
      blanks: ['::-1']
    },
    {
      id: 'p14',
      taskCode: '3.2.1',
      type: 'single',
      score: 2,
      text: '3.2.1 题使用的深度学习推理框架是？',
      options: { A: 'TensorFlow', B: 'ONNX Runtime', C: 'PyTorch 训练', D: 'OpenCV DNN' },
      answer: 'B'
    },
    {
      id: 'p15',
      taskCode: '4.2.1',
      type: 'multiple',
      score: 3,
      text: '4.2.1 参考答案：数据采集方法包括哪些？（多选）',
      options: {
        A: 'API 接口',
        B: '传感器和物联网设备',
        C: '社交媒体监听',
        D: '仅手工抄录'
      },
      answer: ['A', 'B', 'C']
    },
    {
      id: 'p16',
      taskCode: '4.2.1',
      type: 'multiple',
      score: 3,
      text: '4.2.1 参考答案：数据预处理步骤包括哪些？（多选）',
      options: { A: '清洗', B: '标准化', C: '整合', D: '直接删除全部数据' },
      answer: ['A', 'B', 'C']
    },
    {
      id: 'p17',
      taskCode: '3.2.2',
      type: 'fill',
      score: 2,
      text: '补全代码：加载 MNIST ONNX 模型',
      code: "ort_session = onnxruntime.InferenceSession('___')",
      blanks: ['mnist.onnx']
    },
    {
      id: 'p18',
      taskCode: '3.2.2',
      type: 'fill',
      score: 2,
      text: '补全代码：加载灰度测试图片',
      code: "image = Image.open('img_test.png').convert('___')",
      blanks: ['L']
    },
    {
      id: 'p19',
      taskCode: '3.2.2',
      type: 'fill',
      score: 2,
      text: '补全代码：调整图片尺寸',
      code: 'image = image.resize((___, ___))',
      blanks: ['28', '28']
    },
    {
      id: 'p20',
      taskCode: '3.2.2',
      type: 'fill',
      score: 2,
      text: '补全代码：获取预测类别',
      code: 'predicted_class = np.___(ort_outs[0])',
      blanks: ['argmax']
    },
    {
      id: 'p21',
      taskCode: '3.2.3',
      type: 'fill',
      score: 2,
      text: '补全代码：加载情感识别模型',
      code: "ort_session = ort.InferenceSession('___')",
      blanks: ['emotion-ferplus.onnx']
    },
    {
      id: 'p22',
      taskCode: '3.2.3',
      type: 'fill',
      score: 2,
      text: '补全代码：预处理本地图片',
      code: "input_data = preprocess('___')",
      blanks: ['img_test.png']
    },
    {
      id: 'p23',
      taskCode: '3.2.3',
      type: 'fill',
      score: 2,
      text: '补全代码：执行模型推理',
      code: 'ort_outs = ort_session.run(___, ort_inputs)',
      blanks: ['None']
    },
    {
      id: 'p24',
      taskCode: '3.2.3',
      type: 'fill',
      score: 2,
      text: '补全代码：解码预测标签',
      code: 'predicted_label = np.___(ort_outs[0])',
      blanks: ['argmax']
    },
    {
      id: 'p25',
      taskCode: '3.2.4',
      type: 'fill',
      score: 2,
      text: '补全代码：加载花卉识别模型',
      code: "session = ort.InferenceSession('___')",
      blanks: ['flower-detection.onnx']
    },
    {
      id: 'p26',
      taskCode: '3.2.4',
      type: 'fill',
      score: 2,
      text: '补全代码：读取类别标签文件',
      code: 'with open(___) as f:',
      blanks: ['labels.txt']
    },
    {
      id: 'p27',
      taskCode: '3.2.4',
      type: 'fill',
      score: 2,
      text: '补全代码：加载 RGB 测试图片',
      code: "image = Image.open('flower_test.png').convert('___')",
      blanks: ['RGB']
    },
    {
      id: 'p28',
      taskCode: '3.2.4',
      type: 'fill',
      score: 2,
      text: '补全代码：Softmax 获取概率',
      code: 'accuracy = scipy.special.___(output, axis=-1)',
      blanks: ['softmax']
    },
    {
      id: 'p29',
      taskCode: '3.2.5',
      type: 'fill',
      score: 2,
      text: '补全代码：加载人脸检测 ONNX 模型',
      code: "ort_session = ort.InferenceSession('___')",
      blanks: ['version-RFB-320.onnx']
    },
    {
      id: 'p30',
      taskCode: '3.2.5',
      type: 'fill',
      score: 2,
      text: '补全代码：获取模型输入名称',
      code: 'input_name = ort_session.get_inputs()[0].___',
      blanks: ['name']
    },
    {
      id: 'p31',
      taskCode: '3.2.5',
      type: 'fill',
      score: 2,
      text: '补全代码：创建结果保存目录',
      code: '    os.___(result_path)',
      blanks: ['makedirs']
    },
    {
      id: 'p32',
      taskCode: '3.2.5',
      type: 'fill',
      score: 2,
      text: '补全代码：读取原始图像',
      code: 'orig_image = cv2.___(img_path)',
      blanks: ['imread']
    },
    {
      id: 'p33',
      taskCode: '3.2.5',
      type: 'fill',
      score: 2,
      text: '补全代码：调整输入尺寸',
      code: 'image = cv2.resize(image, (___, ___))',
      blanks: ['320', '240']
    },
    {
      id: 'p34',
      taskCode: '3.2.5',
      type: 'fill',
      score: 2,
      text: '补全代码：扩展 batch 维度',
      code: 'image = np.expand_dims(image, axis=___)',
      blanks: ['0']
    },
    {
      id: 'p35',
      taskCode: '3.2.5',
      type: 'fill',
      score: 2,
      text: '补全代码：执行 ONNX 推理',
      code: 'confidences, boxes = ort_session.run(None, {___: image})',
      blanks: ['input_name']
    }
  ]
};
