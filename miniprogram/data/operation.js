module.exports = [
  {
    "id": "1.1.1",
    "code": "1.1.1",
    "name": "智能医疗系统中的业务数据处理流程设计",
    "chapter": 1,
    "chapterName": "业务分析",
    "time": "30min",
    "tasks": "某医疗机构计划引入智能医疗系统，以提升诊断效率和准确性。通过分析患者的历史数据，使用机器学习算法预测患者的健康风险，从而辅助医生进行诊断和治疗。为此，该机构需要设计一套全面的业务数据处理流程，确保数据处理的高效性和准确性，为人工智能模型提供可靠的输入数据。\n我们提供一个患者数据集（patient_data.csv），包含以下字段：\n• PatientID: 患者ID\n• Age: 年龄\n• BMI: 体重指数\n• BloodPressure: 血压\n• Cholesterol: 胆固醇水平\n• DaysInHospital: 住院天数\n你作为人工智能训练师，根据提供的数据集和Python代码框架（1.1.1.ipynb），完成以下数据的统计和分析，为智能医疗系统提供可靠的数据支持。\n（1）通过补全并运行Python代码（1.1.1.ipynb）分别统计住院天数超过7天的患者数量以及其占比。这类患者被定义为高风险患者，反之为低风险患者。将上述统计结果截图以JPG的格式保存，命名为“1.1.1-1”。\n（2）通过补全并运行Python代码（1.1.1. ipynb）统计不同BMI区间中高风险患者的比例和统计不同BMI区间中的患者数。BMI区间分类设置为：偏瘦（低于18.5），正常（18.5～23.9），超重（24.0～27.9），肥胖（28.0及以上），将上述统计结果截图以JPG的格式保存，命名为“1.1.1-2”。\n（3）通过补全并运行Python代码（1.1.1. ipynb）统计不同年龄区间中高风险患者的比例和统计不同年龄区间中的患者数。年龄区间分类设置为：年龄区间分类设置为：≤25岁，26-35岁，36-45岁，46-55岁，56-65岁，＞65岁，将上述统计结果截图以JPG的格式保存，命名为“1.1.1-3”。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
    "totalScore": 25,
    "rubric": [
      {
        "id": "M1",
        "score": 1,
        "desc": "1.1.1-1.JPG中数据正确得1分；"
      },
      {
        "id": "M2",
        "score": 1,
        "desc": "1.1.1-2.JPG中数据正确得1分；"
      },
      {
        "id": "M3",
        "score": 1,
        "desc": "1.1.1-3.JPG中数据正确得1分；"
      },
      {
        "id": "M4",
        "score": 1,
        "desc": "读取数据集代码正确得1分；"
      },
      {
        "id": "M5",
        "score": 3,
        "desc": "创建新列'RiskLevel'，根据住院天数判断风险等级代码正确得3分；"
      },
      {
        "id": "M6",
        "score": 2,
        "desc": "统计不同风险等级的患者数量代码正确得2分；"
      },
      {
        "id": "M7",
        "score": 1,
        "desc": "计算高风险患者占比代码正确得1分；"
      },
      {
        "id": "M8",
        "score": 1,
        "desc": "计算低风险患者占比代码正确得1分；"
      },
      {
        "id": "M9",
        "score": 4,
        "desc": "根据年龄值划分指定区间代码正确得4分；"
      },
      {
        "id": "M10",
        "score": 2,
        "desc": "计算每个BMI区间中高风险患者的比例代码正确得2分；"
      },
      {
        "id": "M11",
        "score": 1,
        "desc": "统计每个BMI区间的患者数量代码正确得1分；"
      },
      {
        "id": "M12",
        "score": 4,
        "desc": "根据年龄值分配年龄区间标签代码正确得4分；"
      },
      {
        "id": "M13",
        "score": 2,
        "desc": "算每个年龄区间中高风险患者的比例代码正确得2分；"
      },
      {
        "id": "M14",
        "score": 1,
        "desc": "统计每个年龄区间的患者数量代码正确得1分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "某医疗机构计划引入智能医疗系统，以提升诊断效率和准确性。通过分析患者的历史数据，使用机器学习算法预测患者的健康风险，从而辅助医生进行诊断和治疗。为此，该机构需要设计一套全面的业务数据处理流程，确保数据处理的高效性和准确性，为人工智能模型提供可靠的输入数据。\n我们提供一个患者数据集（patient_data.csv），包含以下字段：\n• PatientID: 患者ID\n• Age: 年龄\n• BMI: 体重指数\n• BloodPressure: 血压\n• Cholesterol: 胆固醇水平\n• DaysInHospital: 住院天数\n你作为人工智能训练师，根据提供的数据集和Python代码框架（1.1.1.ipynb），完成以下数据的统计和分析，为智能医疗系统提供可靠的数据支持。\n（1）通过补全并运行Python代码（1.1.1.ipynb）分别统计住院天数超过7天的患者数量以及其占比。这类患者被定义为高风险患者，反之为低风险患者。将上述统计结果截图以jpg的格式保存，命名为“1.1.1-1”。\n（2）通过补全并运行Python代码（1.1.1. ipynb）统计不同BMI区间中高风险患者的比例和统计不同BMI区间中的患者数。BMI区间分类设置为：偏瘦（低于18.5），正常（18.5～23.9），超重（24.0～27.9），肥胖（28.0及以上），将上述统计结果截图以jpg的格式保存，命名为“1.1.1-2”。\n（3）通过补全并运行Python代码（1.1.1. ipynb）统计不同年龄区间中高风险患者的比例和统计不同年龄区间中的患者数。年龄区间分类设置为：年龄区间分类设置为：≤25岁，26-35岁，36-45岁，46-55岁，56-65岁，＞65岁，将上述统计结果截图以jpg的格式保存，命名为“1.1.1-3”。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
        "score": 0
      },
      {
        "id": "code_0",
        "type": "code",
        "title": "读取数据集",
        "code": "import pandas as pd\nimport numpy as np\n\ndata = ___",
        "cellIndex": 0,
        "blanks": [
          {
            "blankIndex": 0,
            "score": 1,
            "desc": "读取数据集",
            "answer": null,
            "rubricId": "M4"
          }
        ],
        "score": 1,
        "answer": null,
        "rubric": [
          {
            "id": "M4",
            "score": 1,
            "desc": "读取数据集代码正确得1分；"
          }
        ]
      },
      {
        "id": "code_1",
        "type": "code",
        "title": "创建新列'RiskLevel'，根据住院天数判断风险等级",
        "code": "___ = ___(___, '高风险患者', '低风险患者')\nrisk_counts = data___.___\nhigh_risk_ratio = risk_counts['高风险患者'] / ___\nlow_risk_ratio = risk_counts['低风险患者'] / ___\n\nprint(\"高风险患者数量:\", risk_counts['高风险患者'])\nprint(\"低风险患者数量:\", risk_counts['低风险患者'])\nprint(\"高风险患者占比:\", high_risk_ratio)\nprint(\"低风险患者占比:\", low_risk_ratio)",
        "cellIndex": 1,
        "blanks": [
          {
            "blankIndex": 0,
            "score": 1,
            "desc": "创建新列'RiskLevel'，根据住院天数判断风险等级",
            "answer": null,
            "rubricId": "M5"
          },
          {
            "blankIndex": 1,
            "score": 1,
            "desc": "创建新列'RiskLevel'，根据住院天数判断风险等级",
            "answer": null,
            "rubricId": "M6"
          },
          {
            "blankIndex": 2,
            "score": 1,
            "desc": "创建新列'RiskLevel'，根据住院天数判断风险等级",
            "answer": null,
            "rubricId": "M7"
          },
          {
            "blankIndex": 3,
            "score": 1,
            "desc": "统计不同风险等级的患者数量",
            "answer": null,
            "rubricId": "M8"
          },
          {
            "blankIndex": 4,
            "score": 1,
            "desc": "统计不同风险等级的患者数量",
            "answer": null,
            "rubricId": "M9"
          },
          {
            "blankIndex": 5,
            "score": 1,
            "desc": "计算高风险患者占比",
            "answer": null,
            "rubricId": "M10"
          },
          {
            "blankIndex": 6,
            "score": 1,
            "desc": "计算低风险患者占比",
            "answer": null,
            "rubricId": "M11"
          }
        ],
        "score": 7,
        "answer": null,
        "rubric": [
          {
            "id": "M5",
            "score": 3,
            "desc": "创建新列'RiskLevel'，根据住院天数判断风险等级代码正确得3分；"
          }
        ]
      },
      {
        "id": "code_2",
        "type": "code",
        "title": "根据BMI值划分指定区间",
        "code": "bmi_bins = [0, 18.5, 24, 28, np.inf]\nbmi_labels = ['偏瘦', '正常', '超重', '肥胖']\ndata['BMIRange'] = ___(___, ___, ___, right=False)  # 使用左闭右开区间\nbmi_risk_rate = ___(___)['RiskLevel'].apply(lambda x: (x == '高风险患者').mean())\nbmi_patient_count = data___\n\nprint(\"BMI区间中高风险患者的比例和患者数:\")\nprint(bmi_risk_rate) \nprint(bmi_patient_count)",
        "cellIndex": 2,
        "blanks": [
          {
            "blankIndex": 0,
            "score": 1,
            "desc": "根据BMI值划分指定区间",
            "answer": null,
            "rubricId": "M12"
          },
          {
            "blankIndex": 1,
            "score": 1,
            "desc": "根据BMI值划分指定区间",
            "answer": null,
            "rubricId": "M13"
          },
          {
            "blankIndex": 2,
            "score": 1,
            "desc": "根据BMI值划分指定区间",
            "answer": null,
            "rubricId": "M14"
          },
          {
            "blankIndex": 3,
            "score": 1,
            "desc": "根据BMI值划分指定区间",
            "answer": null
          },
          {
            "blankIndex": 4,
            "score": 1,
            "desc": "计算每个BMI区间中高风险患者的比例",
            "answer": null
          },
          {
            "blankIndex": 5,
            "score": 1,
            "desc": "计算每个BMI区间中高风险患者的比例",
            "answer": null
          },
          {
            "blankIndex": 6,
            "score": 1,
            "desc": "统计每个BMI区间的患者数量",
            "answer": null
          }
        ],
        "score": 7,
        "answer": null,
        "rubric": [
          {
            "id": "M6",
            "score": 2,
            "desc": "统计不同风险等级的患者数量代码正确得2分；"
          }
        ]
      },
      {
        "id": "code_3",
        "type": "code",
        "title": "根据年龄值划分指定区间",
        "code": "age_bins = [0, 26, 36, 46, 56, 66, np.inf]\nage_labels = ['≤25岁', '26-35岁', '36-45岁', '46-55岁', '56-65岁', '＞65岁']\ndata['AgeRange'] = ___(___, ___, ___, right=False)  # 使用左闭右开区间\nage_risk_rate = ___(___)['RiskLevel'].apply(lambda x: (x == '高风险患者').mean())\nage_patient_count = data___\n\nprint(\"年龄区间中高风险患者的比例和患者数:\")\nprint(age_risk_rate) \nprint(age_patient_count)",
        "cellIndex": 3,
        "blanks": [
          {
            "blankIndex": 0,
            "score": 1,
            "desc": "根据年龄值划分指定区间",
            "answer": null
          },
          {
            "blankIndex": 1,
            "score": 1,
            "desc": "根据年龄值划分指定区间",
            "answer": null
          },
          {
            "blankIndex": 2,
            "score": 1,
            "desc": "根据年龄值划分指定区间",
            "answer": null
          },
          {
            "blankIndex": 3,
            "score": 1,
            "desc": "根据年龄值划分指定区间",
            "answer": null
          },
          {
            "blankIndex": 4,
            "score": 1,
            "desc": "计算每个年龄区间中高风险患者的比例",
            "answer": null
          },
          {
            "blankIndex": 5,
            "score": 1,
            "desc": "计算每个年龄区间中高风险患者的比例",
            "answer": null
          },
          {
            "blankIndex": 6,
            "score": 1,
            "desc": "统计每个年龄区间的患者数量",
            "answer": null
          }
        ],
        "score": 7,
        "answer": null,
        "rubric": [
          {
            "id": "M7",
            "score": 1,
            "desc": "计算高风险患者占比代码正确得1分；"
          }
        ]
      }
    ],
    "answer": null
  },
  {
    "id": "1.1.2",
    "code": "1.1.2",
    "name": "智能农业系统中的业务数据采集和处理流程设计",
    "chapter": 1,
    "chapterName": "业务分析",
    "time": "30min",
    "tasks": "某农业公司计划引入智能农业系统，通过安装在农田中的各种传感器（如温度传感器、湿度传感器、土壤传感器等）实时监控农田环境，收集数据并进行分析，以优化作物管理和提高产量。为此，公司需要设计并实现一套数据采集和处理流程，确保数据的高效采集、传输和处理，为智能分析提供可靠的数据支持。\n我们提供一个传感器数据集（sensor_data.csv），包含以下字段：\n• SensorID: 传感器ID\n• Timestamp: 时间戳\n• SensorType: 传感器类型（Temperature温度, Humidity湿度, SoilMoisture土壤水分, SoilPH土壤酸碱度, Light光传感器）\n• Value: 传感器读数\n• Location: 传感器安装位置：\n你作为智能农业系统的人工智能训练师，根据提供的sensor_data.csv数据集和Python代码框架（1.1.2.ipynb），完成以下数据的采集和处理任务，为智能农业系统提供可靠的数据支持。请按照以下要求完成任务，确保结果准确并保存相应的截图。\n（1）传感器数据统计：\n通过补全并运行Python代码（1.1.2.ipynb）分别统计每种传感器的数据数量和平均值。将上述统计结果截图以JPG的格式保存，命名为“1.1.2-1”。\n（2）按位置统计温度和湿度数据：\n通过补全并运行Python代码（1.1.2.ipynb）统计每个位置的温度和湿度传感器数据的平均值。将上述统计结果截图以JPG的格式保存，命名为“1.1.2-2”。\n（3）数据清洗和异常值处理：\n通过补全并运行Python代码（1.1.2.ipynb）对数据进行清洗，处理异常值。具体要求如下：\n• 将明显异常的温度（< -10 或 > 50）和湿度（< 0 或 > 100）数据进行标记并统计。\n• 对缺失值使用前面数据的值（如果前面值没有采用后面数据的值）进行填补。\n• 将清洗后的数据保存为新文件cleaned_sensor_data.csv。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
    "totalScore": 25,
    "rubric": [
      {
        "id": "M1",
        "score": 2,
        "desc": "1.1.2-1.JPG中数据正确得2分；"
      },
      {
        "id": "M2",
        "score": 2,
        "desc": "1.1.2-2.JPG中数据正确得2分；"
      },
      {
        "id": "M3",
        "score": 1,
        "desc": "cleaned_sensor_data.csv文件中数据正确得1分；"
      },
      {
        "id": "M4",
        "score": 2,
        "desc": "读取数据集代码正确得2分；"
      },
      {
        "id": "M5",
        "score": 3,
        "desc": "对传感器类型进行分组，并计算每个组的数据数量和平均值代码正确，每空1分，总计得3分；"
      },
      {
        "id": "M6",
        "score": 2,
        "desc": "筛选出温度和湿度数据，然后按位置和传感器类型分组，计算每个组的平均值代码正确得2分；"
      },
      {
        "id": "M7",
        "score": 3,
        "desc": "标记异常值代码正确，每空1分，总计得3分；"
      },
      {
        "id": "M8",
        "score": 2,
        "desc": "输出异常值数量代码正确得2分；"
      },
      {
        "id": "M9",
        "score": 4,
        "desc": "使用前向填充和后向填充的方法填补缺失值代码正确，每空1分，总计得4分；"
      },
      {
        "id": "M10",
        "score": 4,
        "desc": "删除用于标记异常值的列，并将清洗后的数据保存到新的CSV文件中代码正确，每空1分，总计得4分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "某农业公司计划引入智能农业系统，通过安装在农田中的各种传感器（如温度传感器、湿度传感器、土壤传感器等）实时监控农田环境，收集数据并进行分析，以优化作物管理和提高产量。为此，公司需要设计并实现一套数据采集和处理流程，确保数据的高效采集、传输和处理，为智能分析提供可靠的数据支持。\n我们提供一个传感器数据集（sensor_data.csv），包含以下字段：\n• SensorID: 传感器ID\n• Timestamp: 时间戳\n• SensorType: 传感器类型（Temperature温度, Humidity湿度, SoilMoisture土壤水分, SoilPH土壤酸碱度, Light光传感器）\n• Value: 传感器读数\n• Location: 传感器安装位置：\n你作为智能农业系统的人工智能训练师，根据提供的sensor_data.csv数据集和Python代码框架（1.1.2.ipynb），完成以下数据的采集和处理任务，为智能农业系统提供可靠的数据支持。请按照以下要求完成任务，确保结果准确并保存相应的截图。\n（1）传感器数据统计：\n通过补全并运行Python代码（1.1.2.ipynb）分别统计每种传感器的数据数量和平均值。将上述统计结果截图以jpg的格式保存，命名为“1.1.2-1”。\n（2）按位置统计温度和湿度数据：\n通过补全并运行Python代码（1.1.2.ipynb）统计每个位置的温度和湿度传感器数据的平均值。将上述统计结果截图以jpg的格式保存，命名为“1.1.2-2”。\n（3）数据清洗和异常值处理：\n通过补全并运行Python代码（1.1.2.ipynb）对数据进行清洗，处理异常值。具体要求如下：\n将明显异常的温度（ 50）和湿度（ 100）数据进行标记并统计。\n对缺失值使用前面数据的值（如果前面值没有采用后面数据的值）进行填补。\n将清洗后的数据保存为新文件cleaned_sensor_data.csv。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
        "score": 0
      },
      {
        "id": "code_0",
        "type": "code",
        "title": "读取数据集",
        "code": "import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\ndata = ___",
        "cellIndex": 0,
        "blanks": [
          {
            "blankIndex": 0,
            "score": 2,
            "desc": "读取数据集",
            "answer": null,
            "rubricId": "M4"
          }
        ],
        "score": 2,
        "answer": null,
        "rubric": [
          {
            "id": "M4",
            "score": 2,
            "desc": "读取数据集代码正确得2分；"
          }
        ]
      },
      {
        "id": "code_1",
        "type": "code",
        "title": "对传感器类型进行分组，并计算每个组的数据数量和平均值",
        "code": "sensor_stats = ___(___)['Value'].___\nprint(\"传感器数据数量和平均值:\")\nprint(sensor_stats)",
        "cellIndex": 1,
        "blanks": [
          {
            "blankIndex": 0,
            "score": 1,
            "desc": "对传感器类型进行分组，并计算每个组的数据数量和平均值",
            "answer": null,
            "rubricId": "M5"
          },
          {
            "blankIndex": 1,
            "score": 1,
            "desc": "对传感器类型进行分组，并计算每个组的数据数量和平均值",
            "answer": null,
            "rubricId": "M6"
          },
          {
            "blankIndex": 2,
            "score": 1,
            "desc": "对传感器类型进行分组，并计算每个组的数据数量和平均值",
            "answer": null,
            "rubricId": "M7"
          }
        ],
        "score": 3,
        "answer": null,
        "rubric": [
          {
            "id": "M5",
            "score": 3,
            "desc": "对传感器类型进行分组，并计算每个组的数据数量和平均值代码正确，每空1分，总计得3分；"
          }
        ]
      },
      {
        "id": "code_2",
        "type": "code",
        "title": "筛选出温度和湿度数据，然后按位置和传感器类型分组，计算每个组的平均值",
        "code": "location_stats = data[data['SensorType'].___.___['Value'].mean().unstack()\nprint(\"每个位置的温度和湿度数据平均值:\")\nprint(location_stats)",
        "cellIndex": 2,
        "blanks": [
          {
            "blankIndex": 0,
            "score": 1,
            "desc": "筛选出温度和湿度数据，然后按位置和传感器类型分组，计算每个组的平均值",
            "answer": null,
            "rubricId": "M8"
          },
          {
            "blankIndex": 1,
            "score": 1,
            "desc": "筛选出温度和湿度数据，然后按位置和传感器类型分组，计算每个组的平均值",
            "answer": null,
            "rubricId": "M9"
          }
        ],
        "score": 2,
        "answer": null,
        "rubric": [
          {
            "id": "M6",
            "score": 2,
            "desc": "筛选出温度和湿度数据，然后按位置和传感器类型分组，计算每个组的平均值代码正确得2分；"
          }
        ]
      },
      {
        "id": "code_3",
        "type": "code",
        "title": "标记异常值",
        "code": "data['is_abnormal'] = ___(\n    ((___) & ((data['Value'] < -10) | (data['Value'] > 50))) |\n    ((___) & ((data['Value'] < 0) | (data['Value'] > 100))),\n    True, False\n)\nprint(\"异常值数量:\", data['is_abnormal'].___)\ndata['Value'].___(___, inplace=True)\ndata['Value'].___(___, inplace=True)\ncleaned_data = ___(___=['is_abnormal'])\n___('cleaned_sensor_data.csv', ___)\nprint(\"数据清洗完成，已保存为 'cleaned_sensor_data.csv'\")",
        "cellIndex": 3,
        "blanks": [
          {
            "blankIndex": 0,
            "score": 3,
            "desc": "标记异常值",
            "answer": null,
            "rubricId": "M10"
          },
          {
            "blankIndex": 1,
            "score": 0,
            "desc": "((___) & ((data['Value'] < -10) | (data['Value'] > 50))) |",
            "answer": null
          },
          {
            "blankIndex": 2,
            "score": 0,
            "desc": "((___) & ((data['Value'] < 0) | (data['Value'] > 100))),",
            "answer": null
          },
          {
            "blankIndex": 3,
            "score": 2,
            "desc": "输出异常值数量",
            "answer": null
          },
          {
            "blankIndex": 4,
            "score": 2,
            "desc": "使用前向填充和后向填充的方法填补缺失值",
            "answer": null
          },
          {
            "blankIndex": 5,
            "score": 2,
            "desc": "使用前向填充和后向填充的方法填补缺失值",
            "answer": null
          },
          {
            "blankIndex": 6,
            "score": 0,
            "desc": "data['Value'].___(___, inplace=True)",
            "answer": null
          },
          {
            "blankIndex": 7,
            "score": 0,
            "desc": "data['Value'].___(___, inplace=True)",
            "answer": null
          },
          {
            "blankIndex": 8,
            "score": 2,
            "desc": "删除用于标记异常值的列，并将清洗后的数据保存到新的CSV文件中",
            "answer": null
          },
          {
            "blankIndex": 9,
            "score": 2,
            "desc": "删除用于标记异常值的列，并将清洗后的数据保存到新的CSV文件中",
            "answer": null
          },
          {
            "blankIndex": 10,
            "score": 0,
            "desc": "___('cleaned_sensor_data.csv', ___)",
            "answer": null
          },
          {
            "blankIndex": 11,
            "score": 0,
            "desc": "___('cleaned_sensor_data.csv', ___)",
            "answer": null
          }
        ],
        "score": 13,
        "answer": null,
        "rubric": [
          {
            "id": "M7",
            "score": 3,
            "desc": "标记异常值代码正确，每空1分，总计得3分；"
          }
        ]
      }
    ],
    "answer": null
  },
  {
    "id": "1.1.3",
    "code": "1.1.3",
    "name": "金融机构信用评估系统中的业务数据审核流程设计",
    "chapter": 1,
    "chapterName": "业务分析",
    "time": "30min",
    "tasks": "某金融机构计划引入智能信用评估系统，通过分析客户的历史交易数据和信用记录，使用机器学习算法预测客户的信用风险等级，从而辅助贷款审批和风险控制。为了确保数据的准确性和可靠性，该机构需要设计并实现一套全面的业务数据审核流程，确保数据在进入信用评估系统之前经过严格的审核和清洗。\n我们提供一个客户信用数据集（credit_data.csv），包含以下字段：\n• CustomerID: 客户ID\n• Name: 客户姓名\n• Age: 年龄\n• Income: 收入\n• LoanAmount: 贷款金额\n• LoanTerm: 贷款期限（月）\n• CreditScore: 信用评分\n• Default: 是否违约（0: 否，1: 是）\n• TransactionHistory: 历史交易记录（JSON格式）\n你作为人工智能训练师，根据提供的credit_data.csv数据集和Python代码框架（1.1.3.ipynb），完成以下数据的审核和处理任务，确保数据的准确性和可靠性。请按照以下要求完成任务，确保结果准确并保存相应的截图。\n（1）数据完整性审核：\n通过运行Python代码（1.1.3.ipynb）检查数据集中的每个字段是否存在缺失值和重复值。将上述审核结果截图以JPG的格式保存，命名为“1.1.3-1”。\n（2）数据合理性审核：\n通过运行Python代码（1.1.3.ipynb）审核以下字段的合理性：\n• 年龄：应在18到70岁之间。\n• 收入：应大于2000。\n• 贷款金额：应小于收入的5倍。\n• 信用评分：应在300到850之间。\n对不合理的数据进行标记，并将审核结果截图以JPG的格式保存，命名为“1.1.3-2”。\n（3）通过运行Python代码（1.1.3.ipynb）对数据进行清洗，处理异常值。具体要求如下：\n• 将不合理的数据进行标记，并对异常值所在行进行删除；\n• 清洗后的数据保存为新文件cleaned_credit_data.csv。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
    "totalScore": 25,
    "rubric": [
      {
        "id": "M1",
        "score": 2,
        "desc": "数据缺失值统计代码正确得2分"
      },
      {
        "id": "M2",
        "score": 2,
        "desc": "数据重复值统计代码正确得2分"
      },
      {
        "id": "M3",
        "score": 1,
        "desc": "1.1.3-1.jpg中CustomerID缺失值统计正确：得1分；"
      },
      {
        "id": "M4",
        "score": 1,
        "desc": "1.1.3-1.jpg中Name缺失值统计正确：得1分；"
      },
      {
        "id": "M5",
        "score": 1,
        "desc": "1.1.3-1.jpg中Age缺失值统计正确：得1分；"
      },
      {
        "id": "M6",
        "score": 1,
        "desc": "1.1.3-1.jpg中Income缺失值统计正确：得1分；"
      },
      {
        "id": "M7",
        "score": 1,
        "desc": "1.1.3-1.jpg中LoanAmount缺失值统计正确：得1分；"
      },
      {
        "id": "M8",
        "score": 1,
        "desc": "1.1.3-1.jpg中LoanTerm缺失值统计正确：得1分；"
      },
      {
        "id": "M9",
        "score": 1,
        "desc": "1.1.3-1.jpg中CreditScore缺失值统计正确：得1分；"
      },
      {
        "id": "M10",
        "score": 1,
        "desc": "1.1.3-1.jpg中Default缺失值统计正确：得1分；"
      },
      {
        "id": "M11",
        "score": 1,
        "desc": "1.1.3-1.jpg中TransactionHistory缺失值统计正确：得1分；"
      },
      {
        "id": "M12",
        "score": 2,
        "desc": "Age数据的合理性审核代码正确得2分；"
      },
      {
        "id": "M13",
        "score": 2,
        "desc": "Income数据的合理性审核代码正确得2分；"
      },
      {
        "id": "M14",
        "score": 2,
        "desc": "LoanAmount数据的合理性审核代码正确得2分；"
      },
      {
        "id": "M15",
        "score": 2,
        "desc": "CreditScore数据的合理性审核代码正确得2分；"
      },
      {
        "id": "M16",
        "score": 1,
        "desc": "数据合理性检查结果(1.1.3-2.jpg)正确：得1分；"
      },
      {
        "id": "M17",
        "score": 2,
        "desc": "保存清洗后的代码正确得2分"
      },
      {
        "id": "M18",
        "score": 1,
        "desc": "保存cleaned_credit_data.csv文件成功：得1分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "某金融机构计划引入智能信用评估系统，通过分析客户的历史交易数据和信用记录，使用机器学习算法预测客户的信用风险等级，从而辅助贷款审批和风险控制。为了确保数据的准确性和可靠性，该机构需要设计并实现一套全面的业务数据审核流程，确保数据在进入信用评估系统之前经过严格的审核和清洗。\n我们提供一个客户信用数据集（credit_data.csv），包含以下字段：\n• CustomerID: 客户ID\n• Name: 客户姓名\n• Age: 年龄\n• Income: 收入\n• LoanAmount: 贷款金额\n• LoanTerm: 贷款期限（月）\n• CreditScore: 信用评分\n• Default: 是否违约（0: 否，1: 是）\n• TransactionHistory: 历史交易记录（JSON格式）\n你作为人工智能训练师，根据提供的credit_data.csv数据集和Python代码框架（1.1.3.ipynb），完成以下数据的审核和处理任务，确保数据的准确性和可靠性。请按照以下要求完成任务，确保结果准确并保存相应的截图。\n（1）数据完整性审核：\n通过运行Python代码（1.1.3.ipynb）检查数据集中的每个字段是否存在缺失值和重复值。将上述审核结果截图以jpg的格式保存，命名为“1.1.3-1”。\n（2）数据合理性审核：\n通过运行Python代码（1.1.3.ipynb）审核以下字段的合理性：\n年龄：应在18到70岁之间。\n收入：应大于2000。\n贷款金额：应小于收入的5倍。\n信用评分：应在300到850之间。\n对不合理的数据进行标记，并将审核结果截图以jpg的格式保存，命名为“1.1.3-2”。\n（3）通过运行Python代码（1.1.3.ipynb）对数据进行清洗，处理异常值。具体要求如下：\n将不合理的数据进行标记，并对异常值所在行进行删除；\n清洗后的数据保存为新文件cleaned_credit_data.csv。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
        "score": 0
      },
      {
        "id": "code_1",
        "type": "code",
        "title": "missing_values = data.___       #数据缺失值统计 2分",
        "code": "missing_values = data.___       #数据缺失值统计 2分\nduplicate_values = data.___     #数据重复值统计 2分\nprint(\"缺失值统计:\")\nprint(missing_values)\nprint(\"重复值统计:\")\nprint(duplicate_values)",
        "cellIndex": 1,
        "blanks": [
          {
            "blankIndex": 0,
            "score": 2,
            "desc": "missing_values = data.___       #数据缺失值统计 2分",
            "answer": null,
            "rubricId": "M1"
          },
          {
            "blankIndex": 1,
            "score": 2,
            "desc": "duplicate_values = data.___     #数据重复值统计 2分",
            "answer": null,
            "rubricId": "M2"
          }
        ],
        "score": 4,
        "answer": null,
        "rubric": [
          {
            "id": "M1",
            "score": 2,
            "desc": "数据缺失值统计代码正确得2分"
          }
        ]
      },
      {
        "id": "code_2",
        "type": "code",
        "title": "data['is_age_valid'] = ___.___(18, 70)              #Age数据的合理性审核 2分",
        "code": "data['is_age_valid'] = ___.___(18, 70)              #Age数据的合理性审核 2分\ndata['is_income_valid'] = ___ > ___                 #Income数据的合理性审核 2分\ndata['is_loan_amount_valid'] = ___ < (___ * 5)      #LoanAmount数据的合理性审核 2分\ndata['is_credit_score_valid'] = ___.___(300, 850)   #CreditScore数据的合理性审核 2分\nvalidity_checks = data[['is_age_valid', 'is_income_valid', 'is_loan_amount_valid', 'is_credit_score_valid']].all(axis=1)\ndata['is_valid'] = validity_checks\nprint(\"数据合理性检查:\")\nprint(data[['is_age_valid', 'is_income_valid', 'is_loan_amount_valid', 'is_credit_score_valid', 'is_valid']].describe())",
        "cellIndex": 2,
        "blanks": [
          {
            "blankIndex": 0,
            "score": 2,
            "desc": "data['is_age_valid'] = ___.___(18, 70)              #Age数据的合理性审核 2分",
            "answer": null,
            "rubricId": "M12"
          },
          {
            "blankIndex": 1,
            "score": 2,
            "desc": "data['is_age_valid'] = ___.___(18, 70)              #Age数据的合理性审核 2分",
            "answer": null,
            "rubricId": "M13"
          },
          {
            "blankIndex": 2,
            "score": 2,
            "desc": "data['is_income_valid'] = ___ > ___                 #Income数据的合理性审核 2分",
            "answer": null,
            "rubricId": "M14"
          },
          {
            "blankIndex": 3,
            "score": 2,
            "desc": "data['is_income_valid'] = ___ > ___                 #Income数据的合理性审核 2分",
            "answer": null,
            "rubricId": "M15"
          },
          {
            "blankIndex": 4,
            "score": 2,
            "desc": "data['is_loan_amount_valid'] = ___ < (___ * 5)      #LoanAmount数据的合理性审核 2分",
            "answer": null,
            "rubricId": "M17"
          },
          {
            "blankIndex": 5,
            "score": 0,
            "desc": "data['is_loan_amount_valid'] = ___ < (___ * 5)      #LoanAmount数据的合理性审核 2分",
            "answer": null
          },
          {
            "blankIndex": 6,
            "score": 0,
            "desc": "data['is_credit_score_valid'] = ___.___(300, 850)   #CreditScore数据的合理性审核 2分",
            "answer": null
          },
          {
            "blankIndex": 7,
            "score": 0,
            "desc": "data['is_credit_score_valid'] = ___.___(300, 850)   #CreditScore数据的合理性审核 2分",
            "answer": null
          }
        ],
        "score": 10,
        "answer": null,
        "rubric": [
          {
            "id": "M2",
            "score": 2,
            "desc": "数据重复值统计代码正确得2分"
          }
        ]
      },
      {
        "id": "code_3",
        "type": "code",
        "title": "___.___(___, index=False)",
        "code": "invalid_rows = data[~data['is_valid']]\ncleaned_data = data[data['is_valid']]\ncleaned_data = cleaned_data.drop(columns=['is_age_valid', 'is_income_valid', 'is_loan_amount_valid', 'is_credit_score_valid', 'is_valid'])\n___.___(___, index=False)\nprint(\"数据清洗完成，已保存为 'cleaned_credit_data.csv'\")",
        "cellIndex": 3,
        "blanks": [
          {
            "blankIndex": 0,
            "score": 0,
            "desc": "___.___(___, index=False)",
            "answer": null
          },
          {
            "blankIndex": 1,
            "score": 0,
            "desc": "___.___(___, index=False)",
            "answer": null
          },
          {
            "blankIndex": 2,
            "score": 0,
            "desc": "___.___(___, index=False)",
            "answer": null
          }
        ],
        "score": 2,
        "answer": null,
        "rubric": [
          {
            "id": "M12",
            "score": 2,
            "desc": "Age数据的合理性审核代码正确得2分；"
          }
        ]
      }
    ],
    "answer": null
  },
  {
    "id": "1.1.4",
    "code": "1.1.4",
    "name": "电商平台用户行为分析系统的数据采集与处理流程设计",
    "chapter": 1,
    "chapterName": "业务分析",
    "time": "30min",
    "tasks": "某电商平台希望通过用户行为数据分析，了解用户购物习惯、购买倾向等，从而优化产品推荐系统，提高用户满意度和销售额。作为数据分析师，您需要设计一套全面的业务数据采集与处理流程，确保数据在进入用户行为分析系统之前经过严格的采集、清洗和预处理。\n我们提供一个用户行为数据集（user_behavior_data.csv），包含以下字段：\n• UserID: 用户ID\n• UserName: 用户名\n• Age: 年龄\n• Gender: 性别（Male/Female）\n• Location: 位置\n• LastLogin: 上次登录时间\n• PurchaseAmount: 购买金额\n• PurchaseCategory: 购买类别（例如，电子产品、服装、食品等）\n• ReviewScore: 用户评价评分（1-5）\n• LoginFrequency: 登录频率（每日、每周、每月）\n你作为人工智能训练师，根据提供的user_behavior_data.csv数据集和Python代码框架（1.1.4.ipynb），完成以下数据的采集与处理任务，确保数据的准确性和可靠性。请按照以下要求完成任务，确保结果准确并保存相应的截图。\n（1）数据采集：\n通过运行Python代码（1.1.4.ipynb），从本地文件user_behavior_data.csv中读取数据，并将数据加载到DataFrame中。打印前5条数据。\n（2）数据清洗与预处理：\n通过运行Python代码（1.1.4.ipynb）对数据进行清洗和预处理，具体要求如下：\n• 处理缺失值：对缺失值进行填充或删除。\n• 数据类型转换：确保每个字段的数据类型正确。\n• 处理异常值：删除不合理的年龄、购买金额和评价评分。\n• 数据标准化：对购买金额和评价评分进行标准化处理。\n清洗后的数据保存为新文件cleaned_user_behavior_data.csv。\n（3）数据统计：\n通过运行Python代码（1.1.4.ipynb），完成以下数据统计任务：\n• 统计每个购买类别的用户数。\n• 统计不同性别的平均购买金额。\n• 统计不同年龄段的用户数（18-25岁、26-35岁、36-45岁、46-55岁、56-65岁、65岁以上）。\n将统计结果分别截图以JPG的格式保存，分别命名为“1.1.4-1”、“1.1.4-2”、“1.1.4-3”。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
    "totalScore": 25,
    "rubric": [
      {
        "id": "M1",
        "score": 2,
        "desc": "从本地文件中读取数据的代码正确得2分"
      },
      {
        "id": "M2",
        "score": 2,
        "desc": "打印数据的前5条记录的代码正确得2分"
      },
      {
        "id": "M3",
        "score": 2,
        "desc": "处理缺失值的代码正确得2分；"
      },
      {
        "id": "M4",
        "score": 2,
        "desc": "Age数据类型转换的代码正确得2分；"
      },
      {
        "id": "M5",
        "score": 2,
        "desc": "PurchaseAmount数据类型转换的代码正确得2分；"
      },
      {
        "id": "M6",
        "score": 2,
        "desc": "ReviewScore数据类型转换的代码正确得2分；"
      },
      {
        "id": "M7",
        "score": 2,
        "desc": "处理异常值的代码正确得2分；"
      },
      {
        "id": "M8",
        "score": 2,
        "desc": "PurchaseAmount数据标准化的代码正确2分；"
      },
      {
        "id": "M9",
        "score": 2,
        "desc": "ReviewScore数据标准化的代码正确得2分；"
      },
      {
        "id": "M10",
        "score": 1,
        "desc": "保存清洗后的数据的代码正确得1分；"
      },
      {
        "id": "M11",
        "score": 2,
        "desc": "统计每个购买类别的用户数的代码正确得2分；"
      },
      {
        "id": "M12",
        "score": 2,
        "desc": "统计不同性别的平均购买金额的代码正确得2分；"
      },
      {
        "id": "M13",
        "score": 2,
        "desc": "统计不同年龄段的用户数的代码正确得2分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "某电商平台希望通过用户行为数据分析，了解用户购物习惯、购买倾向等，从而优化产品推荐系统，提高用户满意度和销售额。作为数据分析师，您需要设计一套全面的业务数据采集与处理流程，确保数据在进入用户行为分析系统之前经过严格的采集、清洗和预处理。\n我们提供一个用户行为数据集（user_behavior_data.csv），包含以下字段：\n• UserID: 用户ID\n• UserName: 用户名\n• Age: 年龄\n• Gender: 性别（Male/Female）\n• Location: 位置\n• LastLogin: 上次登录时间\n• PurchaseAmount: 购买金额\n• PurchaseCategory: 购买类别（例如，电子产品、服装、食品等）\n• ReviewScore: 用户评价评分（1-5）\n• LoginFrequency: 登录频率（每日、每周、每月）\n你作为人工智能训练师，根据提供的user_behavior_data.csv数据集和Python代码框架（1.1.4.ipynb），完成以下数据的采集与处理任务，确保数据的准确性和可靠性。请按照以下要求完成任务，确保结果准确并保存相应的截图。\n（1）数据采集：\n通过运行Python代码（1.1.4.ipynb），从本地文件user_behavior_data.csv中读取数据，并将数据加载到DataFrame中。打印前5条数据。\n（2）数据清洗与预处理：\n通过运行Python代码（1.1.4.ipynb）对数据进行清洗和预处理，具体要求如下：\n处理缺失值：对缺失值进行填充或删除。\n数据类型转换：确保每个字段的数据类型正确。\n处理异常值：删除不合理的年龄、购买金额和评价评分。\n数据标准化：对购买金额和评价评分进行标准化处理。\n清洗后的数据保存为新文件cleaned_user_behavior_data.csv。\n（3）数据统计：\n通过运行Python代码（1.1.4.ipynb），完成以下数据统计任务：\n统计每个购买类别的用户数。\n统计不同性别的平均购买金额。\n统计不同年龄段的用户数（18-25岁、26-35岁、36-45岁、46-55岁、56-65岁、65岁以上）。\n将统计结果分别截图以jpg的格式保存，分别命名为“1.1.4-1”、“1.1.4-2”、“1.1.4-3”。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
        "score": 0
      },
      {
        "id": "code_0",
        "type": "code",
        "title": "从本地文件中读取数据",
        "code": "import pandas\nimport numpy as np\nimport matplotlib.pyplot as plt\n\ndata =  ___\nprint(\"数据采集完成，已加载到DataFrame中\")\n\nprint(___)",
        "cellIndex": 0,
        "blanks": [
          {
            "blankIndex": 0,
            "score": 2,
            "desc": "从本地文件中读取数据",
            "answer": null,
            "rubricId": "M1"
          },
          {
            "blankIndex": 1,
            "score": 2,
            "desc": "打印数据的前5条记录",
            "answer": null,
            "rubricId": "M2"
          }
        ],
        "score": 4,
        "answer": null,
        "rubric": [
          {
            "id": "M1",
            "score": 2,
            "desc": "从本地文件中读取数据的代码正确得2分"
          }
        ]
      },
      {
        "id": "code_1",
        "type": "code",
        "title": "处理缺失值（删除）",
        "code": "data = ___\n\ndata___ = ___(int)   # Age数据类型转换为int 2分\ndata___ = ___(float) # PurchaseAmount数据类型转换为float  2分\ndata___ = ___(int)   # ReviewScore数据类型转换为int 2分\n\ndata = data[(___.___(18, 70)) & \n            (data['PurchaseAmount'] > 0) & \n            (___.___(1, 5))]\n\ndata['PurchaseAmount'] = (data['PurchaseAmount'] - ___) / ___  # PurchaseAmount数据标准化 2分\ndata['ReviewScore'] = (data['ReviewScore'] - ___) / ___        # ReviewScore数据标准化 2分\n\n___('cleaned_user_behavior_data.csv', index=False)\nprint(\"数据清洗完成，已保存为 'cleaned_user_behavior_data.csv'\")",
        "cellIndex": 1,
        "blanks": [
          {
            "blankIndex": 0,
            "score": 2,
            "desc": "处理缺失值（删除）",
            "answer": null,
            "rubricId": "M3"
          },
          {
            "blankIndex": 1,
            "score": 2,
            "desc": "data___ = ___(int)   # Age数据类型转换为int 2分",
            "answer": null,
            "rubricId": "M4"
          },
          {
            "blankIndex": 2,
            "score": 2,
            "desc": "data___ = ___(int)   # Age数据类型转换为int 2分",
            "answer": null,
            "rubricId": "M5"
          },
          {
            "blankIndex": 3,
            "score": 2,
            "desc": "data___ = ___(float) # PurchaseAmount数据类型转换为float  2分",
            "answer": null,
            "rubricId": "M6"
          },
          {
            "blankIndex": 4,
            "score": 2,
            "desc": "data___ = ___(float) # PurchaseAmount数据类型转换为float  2分",
            "answer": null,
            "rubricId": "M7"
          },
          {
            "blankIndex": 5,
            "score": 2,
            "desc": "data___ = ___(int)   # ReviewScore数据类型转换为int 2分",
            "answer": null,
            "rubricId": "M8"
          },
          {
            "blankIndex": 6,
            "score": 2,
            "desc": "data___ = ___(int)   # ReviewScore数据类型转换为int 2分",
            "answer": null,
            "rubricId": "M9"
          },
          {
            "blankIndex": 7,
            "score": 1,
            "desc": "处理异常值",
            "answer": null,
            "rubricId": "M10"
          },
          {
            "blankIndex": 8,
            "score": 1,
            "desc": "处理异常值",
            "answer": null,
            "rubricId": "M11"
          },
          {
            "blankIndex": 9,
            "score": 2,
            "desc": "(___.___(1, 5))]",
            "answer": null,
            "rubricId": "M12"
          },
          {
            "blankIndex": 10,
            "score": 2,
            "desc": "(___.___(1, 5))]",
            "answer": null,
            "rubricId": "M13"
          },
          {
            "blankIndex": 11,
            "score": 0,
            "desc": "data['PurchaseAmount'] = (data['PurchaseAmount'] - ___) / ___  # PurchaseAmount数据标准化 2分",
            "answer": null
          },
          {
            "blankIndex": 12,
            "score": 0,
            "desc": "data['PurchaseAmount'] = (data['PurchaseAmount'] - ___) / ___  # PurchaseAmount数据标准化 2分",
            "answer": null
          },
          {
            "blankIndex": 13,
            "score": 0,
            "desc": "data['ReviewScore'] = (data['ReviewScore'] - ___) / ___        # ReviewScore数据标准化 2分",
            "answer": null
          },
          {
            "blankIndex": 14,
            "score": 0,
            "desc": "data['ReviewScore'] = (data['ReviewScore'] - ___) / ___        # ReviewScore数据标准化 2分",
            "answer": null
          },
          {
            "blankIndex": 15,
            "score": 1,
            "desc": "保存清洗后的数据",
            "answer": null
          }
        ],
        "score": 21,
        "answer": null,
        "rubric": [
          {
            "id": "M2",
            "score": 2,
            "desc": "打印数据的前5条记录的代码正确得2分"
          }
        ]
      },
      {
        "id": "code_2",
        "type": "code",
        "title": "统计每个购买类别的用户数",
        "code": "purchase_category_counts = ___.___\nprint(\"每个购买类别的用户数:\\n\", purchase_category_counts)\n\ngender_purchase_amount_mean = ___(___)['PurchaseAmount'].mean()\nprint(\"不同性别的平均购买金额:\\n\", gender_purchase_amount_mean)\n\nbins = [18, 26, 36, 46, 56, 66, np.inf]\nlabels = ['18-25', '26-35', '36-45', '46-55', '56-65', '65+']\ndata['AgeGroup'] = pandas.___(___, right=False)\nage_group_counts = data['AgeGroup'].value_counts().sort_index()\nprint(\"不同年龄段的用户数:\\n\", age_group_counts)",
        "cellIndex": 2,
        "blanks": [
          {
            "blankIndex": 0,
            "score": 1,
            "desc": "统计每个购买类别的用户数",
            "answer": null
          },
          {
            "blankIndex": 1,
            "score": 1,
            "desc": "统计每个购买类别的用户数",
            "answer": null
          },
          {
            "blankIndex": 2,
            "score": 1,
            "desc": "统计不同性别的平均购买金额",
            "answer": null
          },
          {
            "blankIndex": 3,
            "score": 1,
            "desc": "统计不同性别的平均购买金额",
            "answer": null
          },
          {
            "blankIndex": 4,
            "score": 1,
            "desc": "统计不同年龄段的用户数",
            "answer": null
          },
          {
            "blankIndex": 5,
            "score": 1,
            "desc": "统计不同年龄段的用户数",
            "answer": null
          }
        ],
        "score": 6,
        "answer": null,
        "rubric": [
          {
            "id": "M3",
            "score": 2,
            "desc": "处理缺失值的代码正确得2分；"
          }
        ]
      }
    ],
    "answer": null
  },
  {
    "id": "1.1.5",
    "code": "1.1.5",
    "name": "智能交通系统的数据采集、处理和审核流程设计",
    "chapter": 1,
    "chapterName": "业务分析",
    "time": "30min",
    "tasks": "某智能交通系统希望通过车辆的行驶数据，利用人工智能技术进行交通流量预测和拥堵预警。你作为人工智能训练师，需要设计一套全面的业务数据采集、处理和审核流程，确保数据在进入交通流量分析系统之前经过严格的采集、清洗、审核和预处理。这里提供一个车辆行驶数据集（vehicle_traffic_data.csv），包含以下字段：\n• VehicleID: 车辆ID\n• DriverName: 驾驶员姓名\n• Age: 年龄\n• Gender: 性别（Male/Female）\n• Speed: 车速（km/h）\n• TravelDistance: 行驶距离（km）\n• TravelTime: 行驶时间（min）\n• TrafficEvent: 交通事件（Normal, Accident, Traffic Jam, Breakdown）\n你作为人工智能训练师，根据提供的vehicle_traffic_data.csv数据集和Python代码框架（1.1.5.ipynb），完成以下数据的采集、处理和审核任务，确保数据的准确性和可靠性。请按照以下要求完成任务，确保结果准确并保存相应的截图。\n（1）数据采集：\n通过运行Python代码（1.1.5.ipynb），从本地文件vehicle_traffic_data.csv中读取数据，并将数据加载到DataFrame中。显示前5行数据截图以JPG的格式保存，命名为“1.1.5-1”。\n（2）数据清洗与预处理： \n通过运行Python代码（1.1.5.ipynb）对数据进行清洗和预处理，具体要求如下：\n• 处理缺失值：对缺失值进行删除。\n• 数据类型转换：确保每个字段的数据类型正确。\n• 处理异常值：删除不合理的年龄、车速、行驶距离和行驶时间。\n清洗后的数据保存为新文件cleaned_vehicle_traffic_data.csv。\n（3）数据合理性审核： 通过运行Python代码审核以下字段的合理性：\n• 年龄：应在18到70岁之间。\n• 车速：应在0到200 km/h之间。\n• 行驶距离：应在1到1000 km之间。\n• 行驶时间：应在1到1440分钟（24小时）之间。\n对不合理的数据进行标记，并将审核结果截图以JPG的格式保存，命名为“1.1.5-2”。\n（4）数据统计：\n通过运行Python代码（1.1.5.ipynb），完成以下数据统计任务：\n• 统计每种交通事件的发生次数。\n• 统计不同性别的平均车速、行驶距离和行驶时间。\n• 统计不同年龄段的驾驶员数（18-25岁、26-35岁、36-45岁、46-55岁、56-65岁、65岁以上）。\n将统计结果分别截图以JPG的格式保存，分别命名为“1.1.5-3”、“1.1.5-4”、“1.1.5-5”。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
    "totalScore": 25,
    "rubric": [
      {
        "id": "M1",
        "score": 2,
        "desc": "从本地文件中读取数据的代码正确得2分"
      },
      {
        "id": "M2",
        "score": 2,
        "desc": "打印数据的前5条记录得代码正确：得2分"
      },
      {
        "id": "M3",
        "score": 2,
        "desc": "处理缺失值的代码正确得2分；"
      },
      {
        "id": "M4",
        "score": 1,
        "desc": "Age数据类型转换的代码得1分；"
      },
      {
        "id": "M5",
        "score": 1,
        "desc": "Speed数据类型转换的代码正确得1分；"
      },
      {
        "id": "M6",
        "score": 1,
        "desc": "TravelDistance数据类型转换的代码正确得1分；"
      },
      {
        "id": "M7",
        "score": 1,
        "desc": "TravelTime数据类型转换的代码正确得1分；"
      },
      {
        "id": "M8",
        "score": 2,
        "desc": "处理异常值的代码正确得2分；"
      },
      {
        "id": "M9",
        "score": 1,
        "desc": "保存清洗后的数据代码正确得1分；"
      },
      {
        "id": "M10",
        "score": 1,
        "desc": "cleaned_vehicle_traffic_data.csv文件正确：得1分；"
      },
      {
        "id": "M11",
        "score": 2,
        "desc": "审核字段合理性代码正确得2分；"
      },
      {
        "id": "M12",
        "score": 2,
        "desc": "统计每种交通事件的发生次数代码正确得2分；"
      },
      {
        "id": "M13",
        "score": 2,
        "desc": "统计不同性别的平均车速、行驶距离和行驶时间代码正确得2分；"
      },
      {
        "id": "M14",
        "score": 5,
        "desc": "统计不同年龄段的驾驶员数代码正确得5分：每空1分，总计得5分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "某智能交通系统希望通过车辆的行驶数据，利用人工智能技术进行交通流量预测和拥堵预警。你作为人工智能训练师，需要设计一套全面的业务数据采集、处理和审核流程，确保数据在进入交通流量分析系统之前经过严格的采集、清洗、审核和预处理。这里提供一个车辆行驶数据集（vehicle_traffic_data.csv），包含以下字段：\n• VehicleID: 车辆ID\n• DriverName: 驾驶员姓名\n• Age: 年龄\n• Gender: 性别（Male/Female）\n• Speed: 车速（km/h）\n• TravelDistance: 行驶距离（km）\n• TravelTime: 行驶时间（min）\n• TrafficEvent: 交通事件（Normal, Accident, Traffic Jam, Breakdown）\n你作为人工智能训练师，根据提供的vehicle_traffic_data.csv数据集和Python代码框架（1.1.5.ipynb），完成以下数据的采集、处理和审核任务，确保数据的准确性和可靠性。请按照以下要求完成任务，确保结果准确并保存相应的截图。\n（1）数据采集：\n通过运行Python代码（1.1.5.ipynb），从本地文件vehicle_traffic_data.csv中读取数据，并将数据加载到DataFrame中。显示前5行数据截图以jpg的格式保存，命名为“1.1.5-1”。\n（2）数据清洗与预处理：\n通过运行Python代码（1.1.5.ipynb）对数据进行清洗和预处理，具体要求如下：\n处理缺失值：对缺失值进行删除。\n数据类型转换：确保每个字段的数据类型正确。\n处理异常值：删除不合理的年龄、车速、行驶距离和行驶时间。\n清洗后的数据保存为新文件cleaned_vehicle_traffic_data.csv。\n（3）数据合理性审核： 通过运行Python代码审核以下字段的合理性：\n年龄：应在18到70岁之间。\n车速：应在0到200 km/h之间。\n行驶距离：应在1到1000 km之间。\n行驶时间：应在1到1440分钟（24小时）之间。\n对不合理的数据进行标记，并将审核结果截图以jpg的格式保存，命名为“1.1.5-2”。\n（4）数据统计：\n通过运行Python代码（1.1.5.ipynb），完成以下数据统计任务：\n统计每种交通事件的发生次数。\n统计不同性别的平均车速、行驶距离和行驶时间。\n统计不同年龄段的驾驶员数（18-25岁、26-35岁、36-45岁、46-55岁、56-65岁、65岁以上）。\n将统计结果分别截图以jpg的格式保存，分别命名为“1.1.5-3”、“1.1.5-4”、“1.1.5-5”。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
        "score": 0
      },
      {
        "id": "code_0",
        "type": "code",
        "title": "从本地文件中读取数据",
        "code": "import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n\ndata = ___\nprint(\"数据采集完成，已加载到DataFrame中\")\n\nprint(___)",
        "cellIndex": 0,
        "blanks": [
          {
            "blankIndex": 0,
            "score": 2,
            "desc": "从本地文件中读取数据",
            "answer": null,
            "rubricId": "M1"
          },
          {
            "blankIndex": 1,
            "score": 2,
            "desc": "打印数据的前5条记录",
            "answer": null,
            "rubricId": "M2"
          }
        ],
        "score": 4,
        "answer": null,
        "rubric": [
          {
            "id": "M1",
            "score": 2,
            "desc": "从本地文件中读取数据的代码正确得2分"
          }
        ]
      },
      {
        "id": "code_1",
        "type": "code",
        "title": "处理缺失值（删除）",
        "code": "data = ___\n\ndata___ = ___(int)       #Age数据类型转换为int 1分\ndata___ = ___(float)     #Speed数据类型转换为float 1分\ndata___ = ___(float)     #TravelDistance数据类型转换为float 1分\ndata___ = ___(float)     #TravelTime数据类型转换为float 1分\n\ndata = data[(___(18, 70))  & \n            (___(0, 200)) & \n            (___(1, 1000)) & \n            (___(1, 1440))]\n\n___('cleaned_vehicle_traffic_data.csv', index=False)\nprint(\"数据清洗完成，已保存为 'cleaned_vehicle_traffic_data.csv'\")",
        "cellIndex": 1,
        "blanks": [
          {
            "blankIndex": 0,
            "score": 2,
            "desc": "处理缺失值（删除）",
            "answer": null,
            "rubricId": "M3"
          },
          {
            "blankIndex": 1,
            "score": 1,
            "desc": "data___ = ___(int)       #Age数据类型转换为int 1分",
            "answer": null,
            "rubricId": "M4"
          },
          {
            "blankIndex": 2,
            "score": 1,
            "desc": "data___ = ___(int)       #Age数据类型转换为int 1分",
            "answer": null,
            "rubricId": "M5"
          },
          {
            "blankIndex": 3,
            "score": 1,
            "desc": "data___ = ___(float)     #Speed数据类型转换为float 1分",
            "answer": null,
            "rubricId": "M6"
          },
          {
            "blankIndex": 4,
            "score": 1,
            "desc": "data___ = ___(float)     #Speed数据类型转换为float 1分",
            "answer": null,
            "rubricId": "M7"
          },
          {
            "blankIndex": 5,
            "score": 2,
            "desc": "data___ = ___(float)     #TravelDistance数据类型转换为float 1分",
            "answer": null,
            "rubricId": "M8"
          },
          {
            "blankIndex": 6,
            "score": 1,
            "desc": "data___ = ___(float)     #TravelDistance数据类型转换为float 1分",
            "answer": null,
            "rubricId": "M9"
          },
          {
            "blankIndex": 7,
            "score": 2,
            "desc": "data___ = ___(float)     #TravelTime数据类型转换为float 1分",
            "answer": null,
            "rubricId": "M11"
          },
          {
            "blankIndex": 8,
            "score": 2,
            "desc": "data___ = ___(float)     #TravelTime数据类型转换为float 1分",
            "answer": null,
            "rubricId": "M12"
          },
          {
            "blankIndex": 9,
            "score": 2,
            "desc": "处理异常值",
            "answer": null,
            "rubricId": "M13"
          },
          {
            "blankIndex": 10,
            "score": 5,
            "desc": "(___(0, 200)) &",
            "answer": null,
            "rubricId": "M14"
          },
          {
            "blankIndex": 11,
            "score": 0,
            "desc": "(___(1, 1000)) &",
            "answer": null
          },
          {
            "blankIndex": 12,
            "score": 0,
            "desc": "(___(1, 1440))]",
            "answer": null
          },
          {
            "blankIndex": 13,
            "score": 1,
            "desc": "保存清洗后的数据",
            "answer": null
          }
        ],
        "score": 21,
        "answer": null,
        "rubric": [
          {
            "id": "M2",
            "score": 2,
            "desc": "打印数据的前5条记录得代码正确：得2分"
          }
        ]
      },
      {
        "id": "code_2",
        "type": "code",
        "title": "审核字段合理性",
        "code": "unreasonable_data = data[~((___(18, 70)) & \n                           (___(0, 200)) & \n                           (___(1, 1000)) & \n                           (___(1, 1440)))]\nprint(\"不合理的数据:\\n\", unreasonable_data)\n\ntraffic_event_counts = ___\nprint(\"每种交通事件的发生次数:\\n\", traffic_event_counts)\n\ngender_stats = data.___.___\nprint(\"不同性别的平均车速、行驶距离和行驶时间:\\n\", gender_stats)\n\nage_bins = [18, 26, 36, 46, 56, 66, np.inf]\nage_labels = ['18-25', '26-35', '36-45', '46-55', '56-65', '65+']\ndata['AgeGroup'] = ___(___,___,___, right=False)\nage_group_counts = ___\nprint(\"不同年龄段的驾驶员数:\\n\", age_group_counts)",
        "cellIndex": 2,
        "blanks": [
          {
            "blankIndex": 0,
            "score": 1,
            "desc": "审核字段合理性",
            "answer": null
          },
          {
            "blankIndex": 1,
            "score": 0,
            "desc": "(___(0, 200)) &",
            "answer": null
          },
          {
            "blankIndex": 2,
            "score": 0,
            "desc": "(___(1, 1000)) &",
            "answer": null
          },
          {
            "blankIndex": 3,
            "score": 0,
            "desc": "(___(1, 1440)))]",
            "answer": null
          },
          {
            "blankIndex": 4,
            "score": 2,
            "desc": "统计每种交通事件的发生次数",
            "answer": null
          },
          {
            "blankIndex": 5,
            "score": 1,
            "desc": "统计不同性别的平均车速、行驶距离和行驶时间",
            "answer": null
          },
          {
            "blankIndex": 6,
            "score": 1,
            "desc": "统计不同性别的平均车速、行驶距离和行驶时间",
            "answer": null
          },
          {
            "blankIndex": 7,
            "score": 2,
            "desc": "统计不同年龄段的驾驶员数",
            "answer": null
          },
          {
            "blankIndex": 8,
            "score": 1,
            "desc": "统计不同年龄段的驾驶员数",
            "answer": null
          },
          {
            "blankIndex": 9,
            "score": 1,
            "desc": "统计不同年龄段的驾驶员数",
            "answer": null
          },
          {
            "blankIndex": 10,
            "score": 1,
            "desc": "统计不同年龄段的驾驶员数",
            "answer": null
          },
          {
            "blankIndex": 11,
            "score": 0,
            "desc": "age_group_counts = ___",
            "answer": null
          }
        ],
        "score": 10,
        "answer": null,
        "rubric": [
          {
            "id": "M3",
            "score": 2,
            "desc": "处理缺失值的代码正确得2分；"
          }
        ]
      }
    ],
    "answer": null
  },
  {
    "id": "1.2.1",
    "code": "1.2.1",
    "name": "顾客评价情感识别业务模块效果优化",
    "chapter": 1,
    "chapterName": "业务分析",
    "time": "30min",
    "tasks": "在某电商平台的顾客评价情感识别中，用户反映的主要问题包括：情感识别准确性不高，导致分析结果偏差；响应速度慢，用户需长时间等待识别结果；用户界面不友好，操作复杂；缺乏定制化服务，无法满足特定需求。这些问题影响了用户的购物体验和满意度，需进行优化。 \n（1）请列举顾客评价情感识别业务模块中用户反映最强烈的两个问题，并解释这两个问题为什么会让用户感到不满，影响他们的使用体验。\n将上述答案写在1.2.1.docx答题卷上，题号为“1.2.1-1”。\n（2）请设计一个优化顾客评价情感识别业务模块的方案，包括关键的实施步骤和你期望的优化效果。要求方案具体、可行，能够有效提升用户体验和服务质量。\n将上述答案写在1.2.1.docx答题卷上，题号为“1.2.1-2”。",
    "totalScore": 25,
    "rubric": [
      {
        "id": "M1",
        "score": 6,
        "desc": "1.2.1-1每列举1个问题+3分，总共6分；"
      },
      {
        "id": "M2",
        "score": 6,
        "desc": "1.2.1-1每列举1个问题包含合理解释+3分，总共6分；"
      },
      {
        "id": "M3",
        "score": 3,
        "desc": "1.2.1-2每列举1个关键步骤+1分，总共3分；"
      },
      {
        "id": "M4",
        "score": 6,
        "desc": "1.2.1-2每列举1个关键步骤详细可行+2分，总共6分；"
      },
      {
        "id": "M5",
        "score": 4,
        "desc": "1.2.1-2每列举1个期望的优化效果+1分，总共4分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "在某电商平台的顾客评价情感识别中，用户反映的主要问题包括：情感识别准确性不高，导致分析结果偏差；响应速度慢，用户需长时间等待识别结果；用户界面不友好，操作复杂；缺乏定制化服务，无法满足特定需求。这些问题影响了用户的购物体验和满意度，需进行优化。\n（1）请列举顾客评价情感识别业务模块中用户反映最强烈的两个问题，并解释这两个问题为什么会让用户感到不满，影响他们的使用体验。\n将上述答案写在1.2.1.docx答题卷上，题号为“1.2.1-1”。\n（2）请设计一个优化顾客评价情感识别业务模块的方案，包括关键的实施步骤和你期望的优化效果。要求方案具体、可行，能够有效提升用户体验和服务质量。\n将上述答案写在1.2.1.docx答题卷上，题号为“1.2.1-2”。",
        "score": 0
      },
      {
        "id": "doc_1.2.1",
        "type": "doc",
        "title": "简答题",
        "sectionId": "1.2.1",
        "prompt": "",
        "docFile": "1.2.1.docx",
        "template": {
          "source": "1.2.1.docx",
          "layout": "sections",
          "sections": [
            {
              "type": "textarea",
              "label": "1.2.1-1",
              "large": true,
              "placeholder": "请在此填写"
            },
            {
              "type": "textarea",
              "label": "1.2.1-2",
              "large": true,
              "placeholder": "请在此填写"
            }
          ]
        },
        "rubric": [
          {
            "id": "M1",
            "score": 6,
            "desc": "1.2.1-1每列举1个问题+3分，总共6分；"
          },
          {
            "id": "M2",
            "score": 6,
            "desc": "1.2.1-1每列举1个问题包含合理解释+3分，总共6分；"
          },
          {
            "id": "M3",
            "score": 3,
            "desc": "1.2.1-2每列举1个关键步骤+1分，总共3分；"
          },
          {
            "id": "M4",
            "score": 6,
            "desc": "1.2.1-2每列举1个关键步骤详细可行+2分，总共6分；"
          },
          {
            "id": "M5",
            "score": 4,
            "desc": "1.2.1-2每列举1个期望的优化效果+1分，总共4分；"
          }
        ],
        "score": 25,
        "answer": null,
        "docAnswer": [
          "顾客评价情感识别业务模块中用户反映最强烈的两个问题及其影响分析\n\n问题一：情感识别准确性不高\n\n情感识别是本模块的核心功能，准确率低意味着系统会把好评判成差评、把反讽/中性当成正面，分析结果出现偏差。其影响在于：\n\n• 商家/运营基于错误结论做决策，会误判产品口碑、错失差评预警，直接造成业务损失；\n\n• 用户对系统失去信任，不得不人工逐条复核，反而增加工作量，违背了「用 AI 提效」的初衷，满意度大幅下降。\n\n问题二：响应速度慢\n\n电商评价数据量大、实时性要求高，长时间等待会带来：\n\n• 打断工作流、降低效率，尤其在大促、高并发场景下卡顿更明显，用户产生焦虑和挫败感；\n\n• 无法及时响应舆情，差评不能第一时间发现处理，削弱了系统的实用价值。\n\n---",
          "顾客评价情感识别业务模块优化方案（考场精简版）\n\n一、实施步骤（七步）\n\n• 诊断： 做 badcase 分析，定位识别错误类型（反讽、网络词、术语），明确定制化需求。\n\n• 数据： 扩充清洗电商语料，细化情感标签，补充难例数据。\n\n• 模型： 用领域预训练模型微调提准确率；同步做蒸馏/剪枝/量化轻量化。\n\n• 工程： 引入 GPU 加速、批处理、缓存、异步与负载均衡，提响应速度。\n\n• 界面/定制： 简化操作、可视化报表，开放自定义标签与行业模板。\n\n• 测试上线： 测试集对比准确率与响应时间，A/B 测试 + 灰度发布。\n\n• 迭代： 建立反馈闭环，持续收集 badcase 重训，长效优化。\n\n二、预期效果\n\n准确率提升至 90% 以上；响应时间降至秒级、支撑高并发；操作简化并支持定制化；最终用户信任度与满意度全面提升。"
        ]
      }
    ],
    "answer": null
  },
  {
    "id": "1.2.2",
    "code": "1.2.2",
    "name": "老年人健康监测与管理服务业务模块效果优化",
    "chapter": 1,
    "chapterName": "业务分析",
    "time": "30min",
    "tasks": "某智慧养老平台的心率监测模块目前存在数据准确性不高、异常预警响应慢等问题，影响了老年人健康监测的体验和服务质量。作为人工智能训练师，你需要结合业务知识和人工智能技术，对该模块进行优化设计与实现。\n（1）列出心率监测模块当前存在的具体问题，如数据准确性、异常预警响应等；简述这些问题对老年人健康监测的影响；指出导致这些问题的主要技术或流程原因。\n将上述答案写在1.2.2.docx答题卷上，题号为“1.2.2-1”。\n（2）简述针对心率监测模块问题的优化方案，可涉及技术、流程等方面；列出优化方案的关键实施步骤，如数据采集、预处理、模型训练等；概述如何协调团队资源以确保优化方案的实现，并简述预期效果。\n将上述答案写在1.2.2.docx答题卷上，题号为“1.2.2-2”。",
    "totalScore": 25,
    "rubric": [
      {
        "id": "M1",
        "score": 4,
        "desc": "1.2.2-1心率监测模块存在的问题，每列出1个+2分，总共4分；"
      },
      {
        "id": "M2",
        "score": 4,
        "desc": "1.2.2-1对老年人健康监测的影响，每列出1个+2分，总共4分；"
      },
      {
        "id": "M3",
        "score": 4,
        "desc": "1.2.2-1导致问题的主要技术或流程原因，每列出1个+2分，总共4分；"
      },
      {
        "id": "M4",
        "score": 6,
        "desc": "1.2.2-2优化方案，每列出1个+2分，总共6分；"
      },
      {
        "id": "M5",
        "score": 6,
        "desc": "1.2.2-2优化方案的关键实施步骤，每列出1个+2分，总共6分；"
      },
      {
        "id": "M6",
        "score": 1,
        "desc": "1.2.2-2清晰概述团队资源协调方式，确保方案实施，并简述合理的预期效果；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "某智慧养老平台的心率监测模块目前存在数据准确性不高、异常预警响应慢等问题，影响了老年人健康监测的体验和服务质量。作为人工智能训练师，你需要结合业务知识和人工智能技术，对该模块进行优化设计与实现。\n（1）列出心率监测模块当前存在的具体问题，如数据准确性、异常预警响应等；简述这些问题对老年人健康监测的影响；指出导致这些问题的主要技术或流程原因。\n将上述答案写在1.2.2.docx答题卷上，题号为“1.2.2-1”。\n（2）简述针对心率监测模块问题的优化方案，可涉及技术、流程等方面；列出优化方案的关键实施步骤，如数据采集、预处理、模型训练等；概述如何协调团队资源以确保优化方案的实现，并简述预期效果。\n将上述答案写在1.2.2.docx答题卷上，题号为“1.2.2-2”。",
        "score": 0
      },
      {
        "id": "doc_1.2.2",
        "type": "doc",
        "title": "简答题",
        "sectionId": "1.2.2",
        "prompt": "",
        "docFile": "1.2.2.docx",
        "template": {
          "source": "1.2.2.docx",
          "layout": "sections",
          "sections": [
            {
              "type": "textarea",
              "label": "1.2.2-1",
              "large": true,
              "placeholder": "请在此填写"
            },
            {
              "type": "textarea",
              "label": "1.2.2-2",
              "large": true,
              "placeholder": "请在此填写"
            }
          ]
        },
        "rubric": [
          {
            "id": "M1",
            "score": 4,
            "desc": "1.2.2-1心率监测模块存在的问题，每列出1个+2分，总共4分；"
          },
          {
            "id": "M2",
            "score": 4,
            "desc": "1.2.2-1对老年人健康监测的影响，每列出1个+2分，总共4分；"
          },
          {
            "id": "M3",
            "score": 4,
            "desc": "1.2.2-1导致问题的主要技术或流程原因，每列出1个+2分，总共4分；"
          },
          {
            "id": "M4",
            "score": 6,
            "desc": "1.2.2-2优化方案，每列出1个+2分，总共6分；"
          },
          {
            "id": "M5",
            "score": 6,
            "desc": "1.2.2-2优化方案的关键实施步骤，每列出1个+2分，总共6分；"
          },
          {
            "id": "M6",
            "score": 1,
            "desc": "1.2.2-2清晰概述团队资源协调方式，确保方案实施，并简述合理的预期效果；"
          }
        ],
        "score": 25,
        "answer": null,
        "docAnswer": [
          "问题 + 影响 + 原因（考场精简版）\n\n核心采分点： 三段都要有：① 具体问题（准确性 + 预警慢）② 对老人的影响（要落到「健康安全」上）③ 技术/流程原因（分技术和流程两层写）。\n\n一、具体问题\n\n• 数据准确性不高： 传感器采集的心率数据存在噪声、漂移，老人佩戴不规范或活动时误差大，还伴随数据缺失和异常值。\n\n• 异常预警响应慢： 从检测到发出预警延迟明显，且阈值\"一刀切\"、缺乏个性化，导致漏报和误报并存。\n\n二、对老年人健康监测的影响\n\n• 数据不准会误判健康状态：要么漏报房颤、心动过速等真实异常，延误救治；要么频繁误报形成\"狼来了\"，老人和家属焦虑、不再信任系统。\n\n• 预警慢更危险：心率异常常是心梗、心衰等急症的前兆，响应慢会错过黄金抢救时间，直接威胁生命安全。\n\n• 最终降低老人及家属对平台的信任，拉低整体服务质量。\n\n三、主要技术/流程原因\n\n技术原因： 传感器精度不足、未校准；缺乏有效的数据预处理（去噪、滤波、缺失值处理）；预警模型只用固定阈值，未结合个体基线和运动/睡眠等场景；系统未做实时处理优化，传输与计算延迟高。\n\n流程原因： 缺少数据质量校验环节；没有个性化阈值设定流程；预警分级与触达链路（通知家属/医护）不完善，导致响应链条慢。\n\n---",
          "方案 + 步骤 + 团队协调 + 效果（考场精简版）\n\n核心采分点： ① 实施步骤要按 数据采集 → 预处理 → 模型训练 → 实时预警 → 测试 → 迭代 这条 AI 训练主线写；② 协调团队资源是本题特有采分点，别漏；③ 准确率靠「数据+模型」，速度靠「边缘计算+轻量化」。\n\n一、关键实施步骤（六步骨架）\n\n• 数据采集： 校准/升级传感器、规范佩戴指引；采集心率 + 活动状态 + 时间等多维数据，建立每位老人的个体心率基线，保证采样频率与完整性。\n\n• 数据预处理： 去噪滤波（如滑动平均/卡尔曼滤波）、异常值剔除、缺失值插补；结合医护标注，标好正常/异常心率样本。\n\n• 模型训练： 用个性化基线 + 时序异常检测模型替代固定阈值，结合运动/静息/睡眠场景降误报；用历史数据和真实异常难例训练，提升准确率与召回率。\n\n• 实时预警优化： 引入边缘计算/本地初检降低传输延迟，模型轻量化部署；完善预警分级与自动触达链路（家属、医护、平台同步通知）。\n\n• 测试上线： 用测试集评估准确率、召回率、响应时间，灰度发布并做实地验证。\n\n• 持续迭代： 建立反馈闭环，持续收集 badcase 重训优化。\n\n二、协调团队资源\n\n• 算法/数据工程师： 负责数据处理与模型训练；\n\n• 硬件/传感器团队： 负责传感器校准升级；\n\n• 产品/前端团队： 负责预警界面与触达流程；\n\n• 医疗护理专家： 提供专业标注、阈值参考并验证结果；\n\n• 项目经理统筹： 明确分工与排期，通过例会、任务看板定期同步进度，保障方案落地。\n\n三、预期效果\n\n心率数据准确率显著提升；异常预警达到实时/秒级响应，漏报率与误报率明显下降；老人与家属信任度、满意度提高，整体健康监测服务质量和安全保障全面增强。"
        ]
      }
    ],
    "answer": null
  },
  {
    "id": "1.2.3",
    "code": "1.2.3",
    "name": "智慧金融服务业务模块效果优化",
    "chapter": 1,
    "chapterName": "业务分析",
    "time": "30min",
    "tasks": "某智慧金融服务平台在数据处理和异常预警方面目前存在明显短板，具体表现为数据准确性不高、异常预警响应慢等，这些问题直接削弱了用户金融健康监测的体验和服务质量。作为人工智能训练师，你的任务是融合金融业务知识与人工智能技术，对该平台的相关模块进行优化设计与实现。\n（1）请列举智慧金融服务业务模块中用户反映最强烈的几个问题，并解释这些问题为什么会让用户感到不满，影响他们的使用体验。\n将上述答案写在1.2.3.docx答题卷上，题号为“1.2.3-1”。\n（2）假设你要优化智慧金融服务业务模块，以提升用户体验和服务质量。请设计一个优化方案，列出关键的实施步骤，并描述你期望的优化效果。\n将上述答案写在1.2.3.docx答题卷上，题号为“1.2.3-2”。",
    "totalScore": 25,
    "rubric": [
      {
        "id": "M1",
        "score": 6,
        "desc": "1.2.3-1智慧金融服务业务模块中用户反映最强烈的问题，每列出1个+2分，总共6分；"
      },
      {
        "id": "M2",
        "score": 6,
        "desc": "1.2.3-1对每个问题进行合理解释，说明为什么会让用户感到不满，以及如何影响他们的使用体验，每个解释+2分，总共6分；"
      },
      {
        "id": "M3",
        "score": 6,
        "desc": "1.2.3-2设计出合理的优化方案包含关键的实施步骤，每列出1个+2分，总共6分；"
      },
      {
        "id": "M4",
        "score": 6,
        "desc": "1.2.3-2对每个实施步骤进行详细的描述和解释，每个解释+2分，总共6分；"
      },
      {
        "id": "M5",
        "score": 1,
        "desc": "1.2.3-2清晰描述期望的优化效果，包括用户体验和服务质量的提升,总共1分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "某智慧金融服务平台在数据处理和异常预警方面目前存在明显短板，具体表现为数据准确性不高、异常预警响应慢等，这些问题直接削弱了用户金融健康监测的体验和服务质量。作为人工智能训练师，你的任务是融合金融业务知识与人工智能技术，对该平台的相关模块进行优化设计与实现。\n（1）请列举智慧金融服务业务模块中用户反映最强烈的几个问题，并解释这些问题为什么会让用户感到不满，影响他们的使用体验。\n将上述答案写在1.2.3.docx答题卷上，题号为“1.2.3-1”。\n（2）假设你要优化智慧金融服务业务模块，以提升用户体验和服务质量。请设计一个优化方案，列出关键的实施步骤，并描述你期望的优化效果。\n将上述答案写在1.2.3.docx答题卷上，题号为“1.2.3-2”。",
        "score": 0
      },
      {
        "id": "doc_1.2.3",
        "type": "doc",
        "title": "简答题",
        "sectionId": "1.2.3",
        "prompt": "",
        "docFile": "1.2.3.docx",
        "template": {
          "source": "1.2.3.docx",
          "layout": "sections",
          "sections": [
            {
              "type": "textarea",
              "label": "1.2.3-1",
              "large": true,
              "placeholder": "请在此填写"
            },
            {
              "type": "textarea",
              "label": "1.2.3-2",
              "large": true,
              "placeholder": "请在此填写"
            }
          ]
        },
        "rubric": [
          {
            "id": "M1",
            "score": 6,
            "desc": "1.2.3-1智慧金融服务业务模块中用户反映最强烈的问题，每列出1个+2分，总共6分；"
          },
          {
            "id": "M2",
            "score": 6,
            "desc": "1.2.3-1对每个问题进行合理解释，说明为什么会让用户感到不满，以及如何影响他们的使用体验，每个解释+2分，总共6分；"
          },
          {
            "id": "M3",
            "score": 6,
            "desc": "1.2.3-2设计出合理的优化方案包含关键的实施步骤，每列出1个+2分，总共6分；"
          },
          {
            "id": "M4",
            "score": 6,
            "desc": "1.2.3-2对每个实施步骤进行详细的描述和解释，每个解释+2分，总共6分；"
          },
          {
            "id": "M5",
            "score": 1,
            "desc": "1.2.3-2清晰描述期望的优化效果，包括用户体验和服务质量的提升,总共1分；"
          }
        ],
        "score": 25,
        "answer": null,
        "docAnswer": [
          "最强烈的问题 + 原因（考场精简版）\n\n核心采分点： 主打题干给的两个：数据准确性不高 + 异常预警响应慢。原因要落到金融特有的痛点上——「钱」和「信任」：数据不准→误判资产/决策失误→损失；预警慢→风险/盗刷止损不及时→资金损失。\n\n问题一：数据准确性不高\n\n金融数据（账户、交易、市场、收支）出现错误、滞后或不一致，导致金融健康监测的分析结果偏差。用户不满的原因：\n\n• 金融决策对数据精度要求极高，数据不准会让用户误判自身资产、收支和风险状况，进而做出错误的理财或投资决策，造成真实经济损失；\n\n• 金融平台的核心是信任，数据一旦不可信，产品价值就大打折扣，用户会弃用。\n\n问题二：异常预警响应慢\n\n对盗刷、欺诈、异常交易、账户异动等风险的预警明显延迟。用户不满的原因：\n\n• 金融风险时效性极强，预警慢意味着用户不能及时冻结账户、止损，直接导致资金损失；\n\n• 错过处理黄金窗口会让用户严重缺乏安全感，对平台的安全保障能力产生质疑。\n\n一句话归纳： 金融场景里，数据不准让用户亏钱又不信，预警慢让用户来不及止损，两者都直击金融产品的命脉。\n\n---",
          "方案 + 步骤 + 效果（考场精简版）\n\n核心采分点： 步骤按 数据采集 → 预处理 → 模型训练 → 实时预警 → 测试 → 迭代 写；准确率靠「多源数据整合 + 质量校验 + 模型」，速度靠「流式实时计算 + 轻量化部署」。\n\n一、关键实施步骤（六步骨架）\n\n• 数据采集： 整合账户、交易、市场、征信等多源金融数据，统一数据接口与采集标准，保证数据的完整性与时效性。\n\n• 数据预处理： 做清洗、去重、纠错、缺失值处理与格式标准化；建立数据质量校验规则，从源头保证准确性。\n\n• 模型训练： 用机器学习风控/时序异常检测模型替代简单规则，结合用户行为基线识别异常交易与风险；用历史欺诈数据和真实难例训练，提升准确率与召回率。\n\n• 实时预警优化： 引入流式实时计算降低预警延迟，模型轻量化部署；完善预警分级与多渠道触达（APP 推送、短信），第一时间通知用户。\n\n• 测试上线： 用测试集评估准确率、召回率、误报率、响应时间，灰度发布并实地验证。\n\n• 持续迭代： 建立反馈闭环，持续收集 badcase 重训，对抗不断更新的新型欺诈手段。\n\n二、预期效果\n\n金融数据准确率显著提升；异常预警达到实时/秒级响应，欺诈与风险的漏报率、误报率明显下降；用户资金安全得到有效保障，金融健康监测体验改善；最终用户信任度与满意度提升，平台服务质量整体增强。"
        ]
      }
    ],
    "answer": null
  },
  {
    "id": "1.2.4",
    "code": "1.2.4",
    "name": "智能卖点生成系统业务模块效果优化",
    "chapter": 1,
    "chapterName": "业务分析",
    "time": "30min",
    "tasks": "针对智能卖点生成系统，目前用户反馈中存在卖点生成不准确、缺乏个性化定制等一些显著的问题，这些问题直接影响了用户的使用体验和系统的服务质量。作为人工智能训练师，任务是结合人工智能技术和业务知识，对该系统的相关模块进行优化设计与实现。\n（1）请列举智能卖点生成系统业务模块中用户反映最强烈的几个问题，并解释这些问题为什么会让用户感到不满，影响他们的使用体验。\n将上述答案写在1.2.4.docx答题卷上，题号为“1.2.4-1”。\n（2）假设你要优化智能卖点生成系统业务模块，以提升用户体验和服务质量。请设计一个优化方案，列出关键的实施步骤，并描述你期望的优化效果。\n将上述答案写在1.2.4.docx答题卷上，题号为“1.2.4-2”。",
    "totalScore": 25,
    "rubric": [
      {
        "id": "M1",
        "score": 6,
        "desc": "1.2.4-1智能卖点生成系统业务模块中用户反映最强烈的问题，每列出1个+2分，总共6分；"
      },
      {
        "id": "M2",
        "score": 6,
        "desc": "1.2.4-1对每个问题进行合理解释，说明为什么会让用户感到不满，以及如何影响他们的使用体验，每个解释+2分，总共6分；"
      },
      {
        "id": "M3",
        "score": 6,
        "desc": "1.2.4-2针对智能卖点生成系统的优化方案包括关键的实施步骤，每列出1个+2分，总共6分；"
      },
      {
        "id": "M4",
        "score": 6,
        "desc": "1.2.4-2对每个实施步骤进行详细的描述和解释，每个描述和解释+2分，总共6分；"
      },
      {
        "id": "M5",
        "score": 1,
        "desc": "1.2.4-2清晰描述期望的优化效果，包括用户体验和服务质量的提升，总共1分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "针对智能卖点生成系统，目前用户反馈中存在卖点生成不准确、缺乏个性化定制等一些显著的问题，这些问题直接影响了用户的使用体验和系统的服务质量。作为人工智能训练师，任务是结合人工智能技术和业务知识，对该系统的相关模块进行优化设计与实现。\n（1）请列举智能卖点生成系统业务模块中用户反映最强烈的几个问题，并解释这些问题为什么会让用户感到不满，影响他们的使用体验。\n将上述答案写在1.2.4.docx答题卷上，题号为“1.2.4-1”。\n（2）假设你要优化智能卖点生成系统业务模块，以提升用户体验和服务质量。请设计一个优化方案，列出关键的实施步骤，并描述你期望的优化效果。\n将上述答案写在1.2.4.docx答题卷上，题号为“1.2.4-2”。",
        "score": 0
      },
      {
        "id": "doc_1.2.4",
        "type": "doc",
        "title": "简答题",
        "sectionId": "1.2.4",
        "prompt": "",
        "docFile": "1.2.4.docx",
        "template": {
          "source": "1.2.4.docx",
          "layout": "sections",
          "sections": [
            {
              "type": "textarea",
              "label": "1.2.4-1",
              "large": true,
              "placeholder": "请在此填写"
            },
            {
              "type": "textarea",
              "label": "1.2.4-2",
              "large": true,
              "placeholder": "请在此填写"
            }
          ]
        },
        "rubric": [
          {
            "id": "M1",
            "score": 6,
            "desc": "1.2.4-1智能卖点生成系统业务模块中用户反映最强烈的问题，每列出1个+2分，总共6分；"
          },
          {
            "id": "M2",
            "score": 6,
            "desc": "1.2.4-1对每个问题进行合理解释，说明为什么会让用户感到不满，以及如何影响他们的使用体验，每个解释+2分，总共6分；"
          },
          {
            "id": "M3",
            "score": 6,
            "desc": "1.2.4-2针对智能卖点生成系统的优化方案包括关键的实施步骤，每列出1个+2分，总共6分；"
          },
          {
            "id": "M4",
            "score": 6,
            "desc": "1.2.4-2对每个实施步骤进行详细的描述和解释，每个描述和解释+2分，总共6分；"
          },
          {
            "id": "M5",
            "score": 1,
            "desc": "1.2.4-2清晰描述期望的优化效果，包括用户体验和服务质量的提升，总共1分；"
          }
        ],
        "score": 25,
        "answer": null,
        "docAnswer": [
          "最强烈的问题 + 原因（考场精简版）\n\n核心采分点： 主打题干给的两个：卖点生成不准确 + 缺乏个性化定制。原因落到卖点这个产品的命脉——「用不了」和「没差异」：不准→不能体现真实卖点甚至虚假宣传；不个性化→千篇一律、没品牌调性。\n\n问题一：卖点生成不准确\n\n系统生成的卖点与产品真实属性不符——遗漏核心卖点、套话空泛，甚至出现夸大或与产品无关的\"幻觉\"信息。用户不满的原因：\n\n• 卖点是营销转化的核心，生成不准就无法体现产品真实优势，用户（商家/运营）不能直接使用，必须逐条人工核对修改，违背了「用 AI 提效」的初衷，效率不升反降；\n\n• 若错误卖点直接发布，会误导消费者、引发投诉，甚至构成虚假宣传风险，损害品牌信任。\n\n问题二：缺乏个性化定制\n\n系统输出千篇一律，无法根据不同品牌调性、目标人群、产品品类、投放平台和营销场景调整。用户不满的原因：\n\n• 不同品牌/品类/平台对卖点的风格要求差异极大（高端品牌 vs 性价比、小红书种草 vs 天猫详情页），通用化输出缺乏差异化和品牌调性，拿来即用性差；\n\n• 用户无法按需求（语气、长度、卖点角度、目标人群）定制，体验僵硬、缺乏掌控感，难以形成依赖和粘性。\n\n一句话归纳： 不准确让卖点「不能用」，缺乏个性化让卖点「不好用」，两者都直接击穿了智能卖点生成系统的核心价值。\n\n---",
          "方案 + 步骤 + 效果（考场精简版）\n\n核心采分点： 六步骨架；准确率靠产品知识库 + RAG 检索增强 + 领域微调 + 事实校验，个性化靠用户/品牌画像 + 多维参数化定制。\n\n一、关键实施步骤（六步）\n\n• 问题诊断： 做 badcase 分析，定位卖点不准的根因（产品信息缺失、模型幻觉、还是意图理解偏差）；梳理用户的定制化需求（品牌调性、受众、平台、风格）。\n\n• 数据层面： 构建并完善高质量产品信息知识库（规格、参数、真实卖点、品类术语）；收集分品类/品牌/风格标注的优质卖点文案语料；针对 badcase 补充难例。\n\n• 模型层面（提准确率）： 引入 RAG 检索增强——生成时检索真实产品信息与知识库，让卖点\"有据可依\"，大幅减少幻觉、保证与产品一致；用领域语料微调大模型提升文案质量；加入事实校验/属性约束，确保卖点基于真实产品属性。\n\n• 个性化层面（补短板）： 支持多维参数化定制（品牌调性、目标人群、投放平台、文案长度、卖点角度——功能/情感/场景）；建立品牌库与用户画像，按品牌风格生成；提供风格模板与指令定制入口。\n\n• 测试上线： 评估卖点与产品的一致性（准确率）、可直接采用率、用户满意度；A/B 测试 + 灰度发布。\n\n• 持续迭代： 建立反馈闭环，收集用户的采纳/修改数据持续优化（可结合人工反馈微调 RLHF），并随新品上市更新知识库。\n\n二、预期效果\n\n卖点生成准确率显著提升、与产品真实属性一致、幻觉大幅减少，可直接采用率提高；支持品牌/受众/平台/风格的个性化定制，输出有差异化和品牌调性；减少人工修改成本，最终用户满意度、采纳率与粘性全面提升，系统服务质量增强。"
        ]
      }
    ],
    "answer": null
  },
  {
    "id": "1.2.5",
    "code": "1.2.5",
    "name": "腾讯云智能数智人系统业务模块效果优化",
    "chapter": 1,
    "chapterName": "业务分析",
    "time": "30min",
    "tasks": "针对腾讯云智能数智人系统，目前用户反馈中存在一些显著的问题，如数智人响应不准确、缺乏个性化交互能力等，这些问题直接影响了用户的使用体验和系统的服务质量。作为人工智能训练师，任务是结合人工智能技术和业务知识，对该系统的相关模块进行优化设计与实现。\n（1）请列举腾讯云智能数智人系统业务模块中用户反映最强烈的几个问题，并解释这些问题为什么会让用户感到不满，影响他们的使用体验。\n将上述答案写在1.2.5.docx答题卷上，题号为“1.2.5-1”。\n（2）设你要优化腾讯云智能数智人系统业务模块，以提升用户体验和服务质量。请设计一个优化方案，列出关键的实施步骤，并描述你期望的优化效果。\n将上述答案写在1.2.5.docx答题卷上，题号为“1.2.5-2”。",
    "totalScore": 25,
    "rubric": [
      {
        "id": "M1",
        "score": 6,
        "desc": "1.2.5-1腾讯云智能数智人系统业务模块中用户反映最强烈的问题，每列出1个+2分，总共6分；"
      },
      {
        "id": "M2",
        "score": 6,
        "desc": "1.2.5-1对每个问题进行合理解释，说明为什么会让用户感到不满，以及如何影响他们的使用体验，每个解释+2分，总共6分；"
      },
      {
        "id": "M3",
        "score": 6,
        "desc": "1.2.5-2提供了针对腾讯云智能数智人系统的优化方案，包括关键的实施步骤，每列出1个+2分，总共6分；"
      },
      {
        "id": "M4",
        "score": 6,
        "desc": "1.2.5-2对每个实施步骤进行详细的描述和解释，每个描述和解释+2分，总共6分；"
      },
      {
        "id": "M5",
        "score": 1,
        "desc": "1.2.5-2清晰描述期望的优化效果，包括用户体验和服务质量的提升，总共1分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "针对腾讯云智能数智人系统，目前用户反馈中存在一些显著的问题，如数智人响应不准确、缺乏个性化交互能力等，这些问题直接影响了用户的使用体验和系统的服务质量。作为人工智能训练师，任务是结合人工智能技术和业务知识，对该系统的相关模块进行优化设计与实现。\n（1）请列举腾讯云智能数智人系统业务模块中用户反映最强烈的几个问题，并解释这些问题为什么会让用户感到不满，影响他们的使用体验。\n将上述答案写在1.2.5.docx答题卷上，题号为“1.2.5-1”。\n（2）设你要优化腾讯云智能数智人系统业务模块，以提升用户体验和服务质量。请设计一个优化方案，列出关键的实施步骤，并描述你期望的优化效果。\n将上述答案写在1.2.5.docx答题卷上，题号为“1.2.5-2”。",
        "score": 0
      },
      {
        "id": "doc_1.2.5",
        "type": "doc",
        "title": "简答题",
        "sectionId": "1.2.5",
        "prompt": "",
        "docFile": "1.2.5.docx",
        "template": {
          "source": "1.2.5.docx",
          "layout": "sections",
          "sections": [
            {
              "type": "textarea",
              "label": "1.2.5-1",
              "large": true,
              "placeholder": "请在此填写"
            },
            {
              "type": "textarea",
              "label": "1.2.5-2",
              "large": true,
              "placeholder": "请在此填写"
            }
          ]
        },
        "rubric": [
          {
            "id": "M1",
            "score": 6,
            "desc": "1.2.5-1腾讯云智能数智人系统业务模块中用户反映最强烈的问题，每列出1个+2分，总共6分；"
          },
          {
            "id": "M2",
            "score": 6,
            "desc": "1.2.5-1对每个问题进行合理解释，说明为什么会让用户感到不满，以及如何影响他们的使用体验，每个解释+2分，总共6分；"
          },
          {
            "id": "M3",
            "score": 6,
            "desc": "1.2.5-2提供了针对腾讯云智能数智人系统的优化方案，包括关键的实施步骤，每列出1个+2分，总共6分；"
          },
          {
            "id": "M4",
            "score": 6,
            "desc": "1.2.5-2对每个实施步骤进行详细的描述和解释，每个描述和解释+2分，总共6分；"
          },
          {
            "id": "M5",
            "score": 1,
            "desc": "1.2.5-2清晰描述期望的优化效果，包括用户体验和服务质量的提升，总共1分；"
          }
        ],
        "score": 25,
        "answer": null,
        "docAnswer": [
          "最强烈的问题 + 原因（考场精简版）\n\n核心采分点： 主打题干给的两个：响应不准确 + 缺乏个性化交互。原因落到数智人的核心卖点上——「智能对话」失效和「拟人化体验」落空。\n\n问题一：数智人响应不准确\n\n数智人理解用户意图有偏差，出现答非所问或回答错误（涉及语音识别 ASR、意图理解、知识库不全）。用户不满的原因：\n\n• 智能对话交互是数智人的核心价值，答不准等于系统\"失能\"，用户被迫重复提问或转人工，效率低、挫败感强；\n\n• 在客服、导购等场景下，错误回答还会误导用户，损害信任和业务转化。\n\n问题二：缺乏个性化交互能力\n\n数智人千人一面，记不住用户偏好和历史，语气、人设、内容都一样，交互生硬机械。用户不满的原因：\n\n• 数智人主打的是「拟人化、有温度」的交互体验，缺乏个性化会让交互显得冰冷、廉价，达不到用户对\"数智人\"的心理预期；\n\n• 不能根据用户和场景动态调整，缺乏新鲜感和情感连接，用户粘性低、容易流失。\n\n一句话归纳： 响应不准让数智人\"不智能\"，缺乏个性化让数智人\"不像人\"，两者都直接击穿了\"智能数智人\"这个产品的立身之本。\n\n---",
          "方案 + 步骤 + 效果（考场精简版）\n\n核心采分点： 还是六步骨架，但这次准确率靠「知识库 + 意图模型 + RAG 检索增强」，个性化靠「用户画像 + 记忆机制 + 人设/情感定制」。\n\n一、关键实施步骤（六步骨架）\n\n• 数据采集： 收集多轮对话语料、用户交互日志、行业知识与用户画像数据；针对答错的 badcase 重点收集难例。\n\n• 数据预处理： 清洗对话数据、纠正 ASR 错误转写，标注意图与实体；构建并补全知识库，做数据标准化。\n\n• 模型训练（提准确率）： 优化语音识别与意图理解模型，可用大模型领域微调；引入 RAG 检索增强结合知识库作答，减少答非所问。\n\n• 个性化优化（补短板）： 引入用户画像与记忆机制，记住偏好和历史；支持多人设、语气与情感定制，结合上下文做个性化回复，并优化表情、口型同步等多模态拟人表现。\n\n• 测试上线： 评估意图准确率、回答正确率、响应时延与用户满意度，A/B 测试 + 灰度发布。\n\n• 持续迭代： 建立反馈闭环，持续收集 badcase 和用户反馈，迭代知识库与人设。\n\n二、预期效果\n\n数智人响应准确率显著提升、答非所问大幅减少；具备个性化交互能力（记住用户、多人设、有情感），拟人化体验和多模态流畅度增强；最终用户使用体验、满意度与粘性提升，系统整体服务质量提高。"
        ]
      }
    ],
    "answer": null
  },
  {
    "id": "2.1.1",
    "code": "2.1.1",
    "name": "智慧交通中燃油效率模型的数据清洗和标注流程设计",
    "chapter": 2,
    "chapterName": "智能训练",
    "time": "20min",
    "tasks": "在现代交通中，燃油效率（MPG）是衡量汽车性能和交通系统优化的重要指标之一。高效的燃油利用不仅能够降低车辆运营成本，还能减少碳排放，促进环保。开发一个用于预测汽车燃油效率的模型可以帮助智慧交通系统优化路线规划和车辆调度，从而提升整体交通效率和减少能源消耗。此外，这样的模型还可以帮助消费者做出更明智的购车决策，并帮助厂商优化汽车设计。\n现要求根据提供的汽车燃油效率数据集，补全2.1.1.ipynb代码。选择合适的特征，开发一个燃油效率预测模型。在开发预测模型之前，首先要对数据进行数据清洗和标注，请完成下面的数据预处理任务，并设计一套标注流程规范：\n(1)正确加载数据集，并显示前五行的数据及数据类型。\n(2)检查数据集中的缺失值并删除缺失值所在的行。\n(3)将“horsepower”列转换为数值类型，并处理转换中的异常值。\n(4)对数值型数据进行标准化处理，确保数据在同一量纲下进行分析。\n(5)根据业务需求和数据特性，选择对燃油效率预测最有用的特征：选择以下特征：'cylinders'、'displacement'、'horsepower'、'weight'、'acceleration'、'model year'、'origin'\n(6)将“mpg”设为目标变量并标注；\n(7)对数据进行标注和划分；\n(8)保存处理后的数据，并命名为：2.1.1_cleaned_data.csv，保存到考生文件夹；\n(9)制定数据清洗和标注规范，将答案写到答题卷文件中，答题卷文件命名为“2.1.1.docx”，保存到考生文件夹；\n(10)将以上代码以及运行结果，以html格式保存并命名为2.1.1.html，保存到考生文件夹，考生文件夹命名为“准考证号+身份证后6位”。",
    "totalScore": 15,
    "rubric": [
      {
        "id": "M1",
        "score": 1,
        "desc": "数据集正确加载得1分；"
      },
      {
        "id": "M2",
        "score": 2,
        "desc": "检查缺失值得1分，删除缺失值得1分，总计得2分；"
      },
      {
        "id": "M3",
        "score": 1,
        "desc": "处理转换中的异常值得1分；"
      },
      {
        "id": "M4",
        "score": 1,
        "desc": "对数据进行标准化处理得1分；"
      },
      {
        "id": "M5",
        "score": 1,
        "desc": "选择特征得1分；"
      },
      {
        "id": "M6",
        "score": 2,
        "desc": "创建自变量得1分，目标变量得1分，总计得2分；"
      },
      {
        "id": "M7",
        "score": 1,
        "desc": "数据集划分得1分；"
      },
      {
        "id": "M8",
        "score": 1,
        "desc": "保存处理后的数据得1分；"
      },
      {
        "id": "M9",
        "score": 2,
        "desc": "回答数据清洗规范：每回答正确1个规范点，得1分，最高得2分"
      },
      {
        "id": "M10",
        "score": 3,
        "desc": "回答数据标注规范：每回答正确1个规范点，得1分，最高得3分"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "在现代交通中，燃油效率（MPG）是衡量汽车性能和交通系统优化的重要指标之一。高效的燃油利用不仅能够降低车辆运营成本，还能减少碳排放，促进环保。开发一个用于预测汽车燃油效率的模型可以帮助智慧交通系统优化路线规划和车辆调度，从而提升整体交通效率和减少能源消耗。此外，这样的模型还可以帮助消费者做出更明智的购车决策，并帮助厂商优化汽车设计。\n现要求根据提供的汽车燃油效率数据集，补全2.1.1.ipynb代码。选择合适的特征，开发一个燃油效率预测模型。在开发预测模型之前，首先要对数据进行数据清洗和标注，请完成下面的数据预处理任务，并设计一套标注流程规范：\n(1)正确加载数据集，并显示前五行的数据及数据类型。\n(2)检查数据集中的缺失值并删除缺失值所在的行。\n(3)将“horsepower”列转换为数值类型，并处理转换中的异常值。\n(4)对数值型数据进行标准化处理，确保数据在同一量纲下进行分析。\n(5)根据业务需求和数据特性，选择对燃油效率预测最有用的特征：选择以下特征：'cylinders'、'displacement'、'horsepower'、'weight'、'acceleration'、'model year'、'origin'\n(6)将“mpg”设为目标变量并标注；\n(7)对数据进行标注和划分；\n(8)保存处理后的数据，并命名为：2.1.1_cleaned_data.csv，保存到考生文件夹；\n(9)制定数据清洗和标注规范，将答案写到答题卷文件中，答题卷文件命名为“2.1.1.docx”，保存到考生文件夹；\n(10)将以上代码以及运行结果，以html格式保存并命名为2.1.1.html，保存到考生文件夹，考生文件夹命名为“准考证号+身份证后6位”。",
        "score": 0
      },
      {
        "id": "code_0",
        "type": "code",
        "title": "加载数据集并显示数据集的前五行",
        "code": "import pandas as pd\n\ndata = ___\nprint(\"数据集的前五行:\")\nprint(___)\n\nprint(data.dtypes)\n\nprint(\"\\n检查缺失值:\")\nprint(___.___.___)  \ndata = ___\n\ndata['horsepower'] = ___(data['horsepower'], errors='coerce')\ndata = ___\n\nprint(data.horsepower.dtypes)\n\nprint(\"\\n检查清洗后的缺失值:\")\nprint(data.isnull().sum())\n\nfrom sklearn.preprocessing import StandardScaler\nnumerical_features = ['displacement', 'horsepower', 'weight', 'acceleration']\nscaler = StandardScaler()\ndata[numerical_features] = ___\n\nfrom sklearn.model_selection import train_test_split\nselected_features = ___\nX = ___\ny = ___\n\nX_train, X_test, y_train, y_test = ___(___, random_state=42)\n\n\ncleaned_data = X.copy()\ncleaned_data['mpg'] = y\n\n___('2.1.1_cleaned_data.csv', ___)\n\nprint(\"\\n清洗后的数据已保存到 2.1.1_cleaned_data.csv\")",
        "cellIndex": 0,
        "blanks": [
          {
            "blankIndex": 0,
            "score": 1,
            "desc": "加载数据集并显示数据集的前五行",
            "answer": null
          },
          {
            "blankIndex": 1,
            "score": 0,
            "desc": "print(___)",
            "answer": null
          },
          {
            "blankIndex": 2,
            "score": 1,
            "desc": "检查缺失值并删除缺失值所在的行",
            "answer": null
          },
          {
            "blankIndex": 3,
            "score": 1,
            "desc": "检查缺失值并删除缺失值所在的行",
            "answer": null
          },
          {
            "blankIndex": 4,
            "score": 0,
            "desc": "检查缺失值并删除缺失值所在的行",
            "answer": null
          },
          {
            "blankIndex": 5,
            "score": 0,
            "desc": "data = ___",
            "answer": null
          },
          {
            "blankIndex": 6,
            "score": 1,
            "desc": "将 'horsepower' 列转换为数值类型，并（删除）处理转换中的异常值",
            "answer": null
          },
          {
            "blankIndex": 7,
            "score": 0,
            "desc": "data = ___",
            "answer": null
          },
          {
            "blankIndex": 8,
            "score": 1,
            "desc": "对数值型数据进行标准化处理",
            "answer": null
          },
          {
            "blankIndex": 9,
            "score": 2,
            "desc": "选择特征、自变量和目标变量",
            "answer": null
          },
          {
            "blankIndex": 10,
            "score": 0,
            "desc": "X = ___",
            "answer": null
          },
          {
            "blankIndex": 11,
            "score": 0,
            "desc": "y = ___",
            "answer": null
          },
          {
            "blankIndex": 12,
            "score": 1,
            "desc": "划分数据集为训练集和测试集（训练集占8成）",
            "answer": null
          },
          {
            "blankIndex": 13,
            "score": 0,
            "desc": "划分数据集为训练集和测试集（训练集占8成）",
            "answer": null
          },
          {
            "blankIndex": 14,
            "score": 1,
            "desc": "保存清洗和处理后的数据（不存储额外的索引号）",
            "answer": null
          },
          {
            "blankIndex": 15,
            "score": 0,
            "desc": "保存清洗和处理后的数据（不存储额外的索引号）",
            "answer": null
          }
        ],
        "score": 9,
        "answer": null
      },
      {
        "id": "doc_2.1.1",
        "type": "doc",
        "title": "数据规范",
        "sectionId": "2.1.1",
        "prompt": "",
        "docFile": "2.1.1.docx",
        "template": {
          "source": "2.1.1.docx",
          "layout": "sections",
          "sections": [
            {
              "type": "textarea",
              "label": "制定数据清洗规范（每正确回答1个规范点得1分，最高得2分）",
              "large": true,
              "placeholder": "请在此填写"
            },
            {
              "type": "textarea",
              "label": "制定数据标注规范（每正确回答1个规范点得1分，最高得3分）",
              "large": true,
              "placeholder": "请在此填写"
            }
          ]
        },
        "rubric": [
          {
            "id": "M9",
            "score": 2,
            "desc": "回答数据清洗规范：每回答正确1个规范点，得1分，最高得2分"
          },
          {
            "id": "M10",
            "score": 3,
            "desc": "回答数据标注规范：每回答正确1个规范点，得1分，最高得3分"
          }
        ],
        "score": 5,
        "answer": null,
        "docAnswer": [
          "适用于汽车燃油效率（MPG）预测模型的数据预处理环节，须保证数据准确、完整、一致、可复现。\n\n数据加载与核查规范： 使用统一方式正确加载数据集；加载后必须查看前 5 行数据及各字段数据类型，核对字段含义与类型是否符合预期，发现类型异常须记录。\n\n缺失值处理规范： 必须检查全部字段的缺失值情况；对含缺失值的记录采取删除整行的方式处理，确保进入建模的数据完整无缺失。\n\n数据类型转换与异常值处理规范： 对本应为数值却被识别为非数值的字段（如 horsepower）统一转换为数值类型；转换中出现的非法字符或无法解析的值（如 \"?\"）判定为异常值，置为缺失后按缺失值规范删除，禁止保留脏数据。\n\n数据标准化规范： 对所有数值型特征进行标准化处理（如 Z-score 标准化 / StandardScaler），消除不同特征间的量纲和数量级差异，确保在同一量纲下分析，避免大尺度特征主导模型。",
          "特征选择规范： 依据业务需求和数据特性，选择与燃油效率相关的特征，本任务选定 cylinders、displacement、horsepower、weight、acceleration、model year、origin；与目标无关或冗余的字段（如 car name）不纳入特征。\n\n目标变量标注规范： 明确将 mpg 标注为目标变量（标签 y），与特征集（X）分离；标签的含义与单位须明确一致。\n\n数据集划分规范： 标注完成后按固定比例划分数据（如训练集∶测试集 = 8∶2 或 7∶3）；划分须随机且保持数据分布代表性，并固定随机种子（如 random_state）以保证结果可复现。\n\n数据保存与命名规范： 处理后的数据须按统一命名规则保存为 2.1.1_cleaned_data.csv，存放于指定考生文件夹；保存版本应为已清洗、已标注、可直接用于建模的数据。"
        ]
      }
    ],
    "answer": null
  },
  {
    "id": "2.1.2",
    "code": "2.1.2",
    "name": "低碳生活行为影响因素数据清洗和标注流程设计",
    "chapter": 2,
    "chapterName": "智能训练",
    "time": "20min",
    "tasks": "在应对气候变化的背景下，了解和促进低碳生活行为变得越来越重要。现要求根据提供的“大学生低碳生活行为的影响因素数据集”，选择合适的特征，开发一个预测大学生低碳生活行为的模型。提供的数据集样本数据包含300多个关于大学生低碳生活行为的自变量和因变量。自变量为主观规范、知觉行为控制、低碳行为态度，中介变量为行为意愿，因变量为低碳生活行为。同时，性别、生源地、月生活费作为控制变量进行研究。在开发预测模型之前，首先要对数据进行数据清洗和标注。补全2.1.2.ipynb代码。完成下面的数据预处理任务，并设计一套标注流程规范：\n（1）正确加载数据集，并显示前五行的数据；\n（2）检查数据集中的缺失值，使用删除包含缺失值的行的办法处理，记录缺失值处理后的数据行数；\n（3）检查数据集中的重复值并删除所有重复值，并记录删除的行数；\n（4）对数值型数据进行标准化处理，确保数据在同一量纲下进行分析；\n（5）根据业务需求和数据特性，选择对低碳生活行为预测最有用的特征，将“低碳行为积极性”设为目标变量并标注。选择以下特征：",
    "totalScore": 15,
    "rubric": [
      {
        "id": "M1",
        "score": 1,
        "desc": "数据集正确加载得1分；"
      },
      {
        "id": "M2",
        "score": 2,
        "desc": "删除缺失值所在行正确得1分，获取处理前和处理后的数据行数正确得1分，总计得2分；"
      },
      {
        "id": "M3",
        "score": 1,
        "desc": "删除重复的数据正确得1分；"
      },
      {
        "id": "M4",
        "score": 1,
        "desc": "对数据进行标准化处理正确得1分；"
      },
      {
        "id": "M5",
        "score": 1,
        "desc": "选择特征正确得1分；"
      },
      {
        "id": "M6",
        "score": 1,
        "desc": "创建目标变量正确得1分；"
      },
      {
        "id": "M7",
        "score": 1,
        "desc": "数据划分正确得1分；"
      },
      {
        "id": "M8",
        "score": 2,
        "desc": "合并处理后的数据正确得1分，保存处理后的数据正确得1分，总计得2分；"
      },
      {
        "id": "M9",
        "score": 2,
        "desc": "回答数据清洗规范：每回答正确1个规范点，得1分，最高得2分；"
      },
      {
        "id": "M10",
        "score": 3,
        "desc": "回答数据标注规范：每回答正确1个规范点，得1分，最高得3分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "在应对气候变化的背景下，了解和促进低碳生活行为变得越来越重要。现要求根据提供的“大学生低碳生活行为的影响因素数据集”，选择合适的特征，开发一个预测大学生低碳生活行为的模型。提供的数据集样本数据包含300多个关于大学生低碳生活行为的自变量和因变量。自变量为主观规范、知觉行为控制、低碳行为态度，中介变量为行为意愿，因变量为低碳生活行为。同时，性别、生源地、月生活费作为控制变量进行研究。在开发预测模型之前，首先要对数据进行数据清洗和标注。补全2.1.2.ipynb代码。完成下面的数据预处理任务，并设计一套标注流程规范：\n（1）正确加载数据集，并显示前五行的数据；\n（2）检查数据集中的缺失值，使用删除包含缺失值的行的办法处理，记录缺失值处理后的数据行数；\n（3）检查数据集中的重复值并删除所有重复值，并记录删除的行数；\n（4）对数值型数据进行标准化处理，确保数据在同一量纲下进行分析；\n（5）根据业务需求和数据特性，选择对低碳生活行为预测最有用的特征，将“低碳行为积极性”设为目标变量并标注。选择以下特征：\n1.您的性别○男性 ○女性\n2.您的年级○大一 ○大二 ○大三 ○大四\n3.您的生源地○农村 ○城镇（乡镇） ○地县级城市 ○省会城市及直辖市\n4.您的月生活费○≦1,000元 ○1,001-2,000元 ○2,001-3,000元 ○≧3,001元\n5.您进行过绿色低碳的相关生活方式吗?\n6.您觉得“低碳”，与你的生活关系密切吗？\n7.低碳生活是否会成为未来的主流生活方式？\n8.您是否认为低碳生活会提高您的生活质量？\n（6）对数据进行划分（8:2）；\n（7）保存处理后的数据，并命名为：2.1.2_cleaned_data.csv，保存到考生文件夹；\n（8）制定数据清洗和标注规范，将答案写到答题卷文件中，答题卷文件命名为“2.1.2.docx”，保存到考生文件夹；\n（9）将以上代码以及运行结果，以html格式保存并命名为2.1.2.html，保存到考生文件夹，考生文件夹命名为“准考证号+身份证后6位”。",
        "score": 0
      },
      {
        "id": "code_0",
        "type": "code",
        "title": "data = ___",
        "code": "import pandas as pd\ndata = ___\nprint(data.head())\n\ninitial_row_count = ___   #处理前的数据行数\ndata = ___                #删除缺失值所在行\nfinal_row_count = ___     #处理后的数据行数\nprint(f'处理后数据行数: {final_row_count}, 删除的行数: {initial_row_count - final_row_count}')\n\ndata = ___\n\nfrom sklearn.preprocessing import StandardScaler\nnumerical_features = ['4.您的月生活费○≦1,000元   ○1,001-2,000元   ○2,001-3,000元   ○≧3,001元']\nscaler = StandardScaler()\ndata[numerical_features] = ___\n\nselected_features = [___]\nX = ___\n\ny = ___\n\nfrom sklearn.model_selection import train_test_split\nX_train, X_test, y_train, y_test = ___(___, random_state=42)\n\ncleaned_data = ___(___, axis=1)\n___('2.1.2_cleaned_data.csv', ___)",
        "cellIndex": 0,
        "blanks": [
          {
            "blankIndex": 0,
            "score": 0,
            "desc": "data = ___",
            "answer": null
          },
          {
            "blankIndex": 1,
            "score": 0,
            "desc": "initial_row_count = ___   #处理前的数据行数",
            "answer": null
          },
          {
            "blankIndex": 2,
            "score": 0,
            "desc": "data = ___                #删除缺失值所在行",
            "answer": null
          },
          {
            "blankIndex": 3,
            "score": 0,
            "desc": "final_row_count = ___     #处理后的数据行数",
            "answer": null
          },
          {
            "blankIndex": 4,
            "score": 0,
            "desc": "data = ___",
            "answer": null
          },
          {
            "blankIndex": 5,
            "score": 0,
            "desc": "data[numerical_features] = ___",
            "answer": null
          },
          {
            "blankIndex": 6,
            "score": 0,
            "desc": "selected_features = [___]",
            "answer": null
          },
          {
            "blankIndex": 7,
            "score": 0,
            "desc": "X = ___",
            "answer": null
          },
          {
            "blankIndex": 8,
            "score": 0,
            "desc": "y = ___",
            "answer": null
          },
          {
            "blankIndex": 9,
            "score": 0,
            "desc": "X_train, X_test, y_train, y_test = ___(___, random_state=42)",
            "answer": null
          },
          {
            "blankIndex": 10,
            "score": 0,
            "desc": "X_train, X_test, y_train, y_test = ___(___, random_state=42)",
            "answer": null
          },
          {
            "blankIndex": 11,
            "score": 0,
            "desc": "cleaned_data = ___(___, axis=1)",
            "answer": null
          },
          {
            "blankIndex": 12,
            "score": 0,
            "desc": "cleaned_data = ___(___, axis=1)",
            "answer": null
          },
          {
            "blankIndex": 13,
            "score": 0,
            "desc": "___('2.1.2_cleaned_data.csv', ___)",
            "answer": null
          },
          {
            "blankIndex": 14,
            "score": 0,
            "desc": "___('2.1.2_cleaned_data.csv', ___)",
            "answer": null
          }
        ],
        "score": 0,
        "answer": null
      },
      {
        "id": "doc_2.1.2",
        "type": "doc",
        "title": "数据规范",
        "sectionId": "2.1.2",
        "prompt": "",
        "docFile": "2.1.2.docx",
        "template": {
          "source": "2.1.2.docx",
          "layout": "sections",
          "sections": [
            {
              "type": "textarea",
              "label": "制定数据清洗规范（每正确回答1个规范点得1分，最高得2分）",
              "large": true,
              "placeholder": "请在此填写"
            },
            {
              "type": "textarea",
              "label": "制定数据标注规范（每正确回答1个规范点得1分，最高得3分）",
              "large": true,
              "placeholder": "请在此填写"
            }
          ]
        },
        "rubric": [
          {
            "id": "M9",
            "score": 2,
            "desc": "回答数据清洗规范：每回答正确1个规范点，得1分，最高得2分；"
          },
          {
            "id": "M10",
            "score": 3,
            "desc": "回答数据标注规范：每回答正确1个规范点，得1分，最高得3分；"
          }
        ],
        "score": 5,
        "answer": null,
        "docAnswer": [
          "适用于\"大学生低碳生活行为\"预测模型的数据预处理环节，须保证数据完整、唯一、一致、可复现。\n\n数据加载与核查规范： 使用统一方式正确加载数据集；加载后必须查看前 5 行数据，核对字段含义与数据是否符合预期。\n\n缺失值处理规范： 必须检查全部字段的缺失值情况；对含缺失值的记录采取删除整行的方式处理，并记录处理后剩余的数据行数，确保进入建模的数据完整无缺失。\n\n重复值处理规范： 必须检查数据集中的重复记录并删除全部重复值，同时记录删除的行数，保证每条样本唯一，避免重复样本造成数据偏倚、影响模型训练结果。\n\n数据标准化规范： 对数值型特征进行标准化处理（如 Z-score 标准化），消除不同特征间的量纲和数量级差异，确保在同一量纲下进行分析，避免大尺度特征主导模型。",
          "特征选择规范： 依据业务需求与研究框架选择特征——纳入控制变量（性别、生源地、月生活费）及年级，以及反映低碳态度/认知的题项（是否实践过低碳生活方式、低碳与生活的关联度、是否会成为未来主流、是否提升生活质量）；与预测目标无关或冗余的字段不纳入特征。\n\n目标变量标注规范： 明确将\"低碳行为积极性\"标注为目标变量（标签 y），与特征集（X）分离；标签含义与取值口径须明确一致。\n\n数据集划分规范： 标注完成后按 8∶2 的比例划分训练集与测试集；划分须随机并保持数据分布代表性，固定随机种子（如 random_state）以保证结果可复现。\n\n数据保存与命名规范： 处理后的数据须按统一命名规则保存为 2.1.2_cleaned_data.csv，存放于指定考生文件夹；保存版本应为已清洗、已标注、可直接用于建模的数据。"
        ]
      }
    ],
    "answer": null
  },
  {
    "id": "2.1.3",
    "code": "2.1.3",
    "name": "信用评分模型数据清洗和标注流程设计",
    "chapter": 2,
    "chapterName": "智能训练",
    "time": "20min",
    "tasks": "互联网金融飞速发展，使得个人金融理财变得越来越容易。而其中信用评分技术是一种对贷款申请人（信用卡申请人）做风险评估分值的统计模型，可以根据客户提供的资料、客户的历史数据、第三方平台数据（芝麻分、京东、微信等），对客户的信用进行评估。现要求根据提供的Finance数据集，选择合适的特征，开发一个申请的评分模型，对未来一段时间内借贷人出现违约的概率进行预测，对客户信用进行评估打分。提供的数据集样本数据一共15000条，10个自变量，1个因变量（SeriousDlqin2yrs）。在开发评分模型之前，首先要对数据进行数据清洗，请补全2.1.3.ipynb代码完成下面的数据预处理任务，并设计一套标注流程规范：\n（1）正确加载数据集，并显示前五行的数据；\n（2）检查数据集中的异常值并处理异常值，使用箱线图检测异常值，使用IQR方法处理异常值；\n设置图像的尺寸为12英寸宽和8英寸高；\n将画布分成3行4列，总共可以容纳12个子图；\n（3）检查数据集中的重复值并删除所有重复值，并记录删除的行数；\n（4）对数据进行归一化处理；\n（5）创建新的特征IncomeToDebtRatio，MonthlyIncome，并添加到数据集中；\n（6）将SeriousDlqin2yrs设为目标变量并标注；\n（7）对数据进行划分；\n（8）保存处理后的数据，并命名为：2.1.3_cleaned_data.csv，保存到考生文件夹；\n（9）制定数据清洗和特征工程规范，将答案写到答题卷文件中，答题卷文件命名为“2.1.3.docx”，保存到考生文件夹；\n（10）将以上代码以及运行结果，以html格式保存并命名为2.1.3.html，保存到考生文件夹，考生文件夹命名为“准考证号+身份证后6位”。",
    "totalScore": 15,
    "rubric": [
      {
        "id": "M1",
        "score": 1,
        "desc": "数据集正确加载，显示前五行的数据得1分；报错或无显示不得分；"
      },
      {
        "id": "M2",
        "score": 2,
        "desc": "使用IQR方法处理和移除异常值正确得2分；"
      },
      {
        "id": "M3",
        "score": 1,
        "desc": "正确处理重复值得1分；"
      },
      {
        "id": "M4",
        "score": 1,
        "desc": "对数据进行归一化处理得1分；"
      },
      {
        "id": "M5",
        "score": 1,
        "desc": "设定目标变量正确得1分；"
      },
      {
        "id": "M6",
        "score": 2,
        "desc": "定义特征正确得1分，标注目标变量正确得1分，总计得2分；"
      },
      {
        "id": "M7",
        "score": 1,
        "desc": "数据划分正确得1分；"
      },
      {
        "id": "M8",
        "score": 1,
        "desc": "保存处理后的数据得1分；"
      },
      {
        "id": "M9",
        "score": 3,
        "desc": "回答数据清洗规范：每回答正确1个规范点，得1分，最高得3分；"
      },
      {
        "id": "M10",
        "score": 2,
        "desc": "回答特征工程规范：每回答正确1个规范点，得1分，最高得2分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "互联网金融飞速发展，使得个人金融理财变得越来越容易。而其中信用评分技术是一种对贷款申请人（信用卡申请人）做风险评估分值的统计模型，可以根据客户提供的资料、客户的历史数据、第三方平台数据（芝麻分、京东、微信等），对客户的信用进行评估。现要求根据提供的Finance数据集，选择合适的特征，开发一个申请的评分模型，对未来一段时间内借贷人出现违约的概率进行预测，对客户信用进行评估打分。提供的数据集样本数据一共15000条，10个自变量，1个因变量（SeriousDlqin2yrs）。在开发评分模型之前，首先要对数据进行数据清洗，请补全2.1.3.ipynb代码完成下面的数据预处理任务，并设计一套标注流程规范：\n（1）正确加载数据集，并显示前五行的数据；\n（2）检查数据集中的异常值并处理异常值，使用箱线图检测异常值，使用IQR方法处理异常值；\n设置图像的尺寸为12英寸宽和8英寸高；\n将画布分成3行4列，总共可以容纳12个子图；\n（3）检查数据集中的重复值并删除所有重复值，并记录删除的行数；\n（4）对数据进行归一化处理；\n（5）创建新的特征IncomeToDebtRatio，MonthlyIncome，并添加到数据集中；\n（6）将SeriousDlqin2yrs设为目标变量并标注；\n（7）对数据进行划分；\n（8）保存处理后的数据，并命名为：2.1.3_cleaned_data.csv，保存到考生文件夹；\n（9）制定数据清洗和特征工程规范，将答案写到答题卷文件中，答题卷文件命名为“2.1.3.docx”，保存到考生文件夹；\n（10）将以上代码以及运行结果，以html格式保存并命名为2.1.3.html，保存到考生文件夹，考生文件夹命名为“准考证号+身份证后6位”。",
        "score": 0
      },
      {
        "id": "code_0",
        "type": "code",
        "title": "data = ___",
        "code": "import pandas as pd\n\ndata = ___\n\n___\n\nimport matplotlib.pyplot as plt\nimport seaborn as sns\n\nplt.figure(figsize=(12, 8))\n\nnumeric_cols = data.select_dtypes(include=['float64', 'int64']).columns\n\nfor i, col in enumerate(numeric_cols, 1):\n    plt.subplot(3, 4, i)\n    sns.boxplot(x=data[col])\n    plt.title(col)\n\nplt.tight_layout()\nplt.show()\n\nQ1 = ___(0.25)\nQ3 = ___(0.75)\nIQR = ___\n\ndata_cleaned = data[~((data[numeric_cols] < (Q1 - 1.5 * ___)) | (data[numeric_cols] > (Q3 + 1.5 * ___))).any(axis=1)]\n\nduplicates = ___()\nnum_duplicates = duplicates.sum()\ndata_cleaned = data_cleaned[~duplicates]\n\nprint(f'删除的重复行数: {num_duplicates}')\n\nfrom sklearn.preprocessing import MinMaxScaler\n\nscaler = MinMaxScaler()\ndata_cleaned[numeric_cols] = ___\n\ntarget_variable = ___\n\nfrom sklearn.model_selection import train_test_split\n\nX = ___(columns=[___])   #1分\ny = ___                         #1分\n\nX_train, X_test, y_train, y_test = ___(___, random_state=42)\n\nprint(f'训练数据形状: {X_train.shape}')\nprint(f'测试数据形状: {X_test.shape}')\n\ncleaned_file_path = '2.1.3_cleaned_data.csv'\n___(___, index=False)",
        "cellIndex": 0,
        "blanks": [
          {
            "blankIndex": 0,
            "score": 0,
            "desc": "data = ___",
            "answer": null
          },
          {
            "blankIndex": 1,
            "score": 0,
            "desc": "___",
            "answer": null
          },
          {
            "blankIndex": 2,
            "score": 0,
            "desc": "Q1 = ___(0.25)",
            "answer": null
          },
          {
            "blankIndex": 3,
            "score": 0,
            "desc": "Q3 = ___(0.75)",
            "answer": null
          },
          {
            "blankIndex": 4,
            "score": 0,
            "desc": "IQR = ___",
            "answer": null
          },
          {
            "blankIndex": 5,
            "score": 0,
            "desc": "data_cleaned = data[~((data[numeric_cols] < (Q1 - 1.5 * ___)) | (data[numeric_cols] > (Q3 + 1.5 * ___))).any(axis=1)]",
            "answer": null
          },
          {
            "blankIndex": 6,
            "score": 0,
            "desc": "data_cleaned = data[~((data[numeric_cols] < (Q1 - 1.5 * ___)) | (data[numeric_cols] > (Q3 + 1.5 * ___))).any(axis=1)]",
            "answer": null
          },
          {
            "blankIndex": 7,
            "score": 0,
            "desc": "duplicates = ___()",
            "answer": null
          },
          {
            "blankIndex": 8,
            "score": 0,
            "desc": "data_cleaned[numeric_cols] = ___",
            "answer": null
          },
          {
            "blankIndex": 9,
            "score": 0,
            "desc": "target_variable = ___",
            "answer": null
          },
          {
            "blankIndex": 10,
            "score": 0,
            "desc": "X = ___(columns=[___])   #1分",
            "answer": null
          },
          {
            "blankIndex": 11,
            "score": 0,
            "desc": "X = ___(columns=[___])   #1分",
            "answer": null
          },
          {
            "blankIndex": 12,
            "score": 0,
            "desc": "y = ___                         #1分",
            "answer": null
          },
          {
            "blankIndex": 13,
            "score": 0,
            "desc": "X_train, X_test, y_train, y_test = ___(___, random_state=42)",
            "answer": null
          },
          {
            "blankIndex": 14,
            "score": 0,
            "desc": "X_train, X_test, y_train, y_test = ___(___, random_state=42)",
            "answer": null
          },
          {
            "blankIndex": 15,
            "score": 0,
            "desc": "___(___, index=False)",
            "answer": null
          },
          {
            "blankIndex": 16,
            "score": 0,
            "desc": "___(___, index=False)",
            "answer": null
          }
        ],
        "score": 0,
        "answer": null
      },
      {
        "id": "doc_2.1.3",
        "type": "doc",
        "title": "数据规范",
        "sectionId": "2.1.3",
        "prompt": "",
        "docFile": "2.1.3.docx",
        "template": {
          "source": "2.1.3.docx",
          "layout": "sections",
          "sections": [
            {
              "type": "textarea",
              "label": "制定数据清洗规范（每正确回答1个规范点得1分，最高得3分）",
              "large": true,
              "placeholder": "请在此填写"
            },
            {
              "type": "textarea",
              "label": "制定特征工程规范（每正确回答1个规范点得1分，最高得2分）",
              "large": true,
              "placeholder": "请在此填写"
            }
          ]
        },
        "rubric": [
          {
            "id": "M9",
            "score": 3,
            "desc": "回答数据清洗规范：每回答正确1个规范点，得1分，最高得3分；"
          },
          {
            "id": "M10",
            "score": 2,
            "desc": "回答特征工程规范：每回答正确1个规范点，得1分，最高得2分；"
          }
        ],
        "score": 5,
        "answer": null,
        "docAnswer": [
          "适用于信用评分模型的数据预处理环节，须保证数据完整、唯一、无异常、同量纲，满足违约概率预测的建模需求。\n\n数据加载与核查规范： 正确加载数据集，查看前 5 行数据，核对 10 个自变量与因变量（SeriousDlqin2yrs）的字段含义与取值是否符合预期。\n\n缺失值处理规范： 检查各字段缺失情况；对存在缺失的字段（如 MonthlyIncome）采用合理方式填充（如中位数填充），保证后续特征构造与建模数据完整可用。\n\n异常值处理规范： 使用箱线图对数值字段进行可视化检测——画布尺寸设为 12×8 英寸，按 3 行 4 列共 12 个子图布局逐列展示；采用 IQR 方法处理：计算 Q1、Q3 与 IQR（=Q3−Q1），将超出 [Q1−1.5×IQR, Q3+1.5×IQR] 区间的值判定为异常值并处理（删除或截断至边界），避免极端值干扰模型。\n\n重复值处理规范： 检查并删除全部重复记录，并记录删除的行数，保证每条样本唯一，避免重复样本造成偏倚。\n\n归一化规范： 对数值型特征进行归一化处理（Min-Max 归一化，缩放至 [0,1]），消除量纲与数量级差异，使各特征在同一尺度下参与建模。",
          "特征创建规范： 依据业务逻辑构造对违约预测有意义的新特征并加入数据集——IncomeToDebtRatio（收入负债比，反映借款人偿债能力）、MonthlyIncome（月收入，缺失填充后纳入）；新特征须含义明确、与目标相关，创建后保证无缺失、无异常。\n\n目标变量标注规范： 明确将 SeriousDlqin2yrs 标注为目标变量（标签 y，表示未来两年内是否发生严重逾期/违约），与特征集（X）分离，取值口径一致。\n\n数据集划分规范： 按一定比例划分训练集与测试集，划分须随机并固定随机种子（如 random_state）以保证结果可复现。\n\n数据保存与命名规范： 处理后的数据须保存为 2.1.3_cleaned_data.csv，存放于指定考生文件夹，保存版本为已清洗、已做特征工程、可直接用于建模的数据。"
        ]
      }
    ],
    "answer": null
  },
  {
    "id": "2.1.4",
    "code": "2.1.4",
    "name": "医疗研究数据清洗和标注设计",
    "chapter": 2,
    "chapterName": "智能训练",
    "time": "20min",
    "tasks": "随着医学技术的进步和医疗资源的丰富，医疗研究在改善患者治疗效果、提升医疗服务质量方面起到了重要作用。研究人员通过分析大量患者的治疗数据，能够评估不同治疗方案的效果，发现潜在的健康问题，并提出针对性的治疗建议。这不仅可以帮助患者获得更好的治疗效果，还能为医疗机构优化资源配置、提升服务水平提供重要依据。\n现提供一份医疗研究数据集，训练集样本数据一共5441条记录。请补全2.1.4.ipynb代码，完成下面的数据预处理任务：\n1、加载数据集，查看表的数据类型，表结构和显示每一列的空缺值数量；\n2、将“就诊日期”和“诊断日期”规范为“yyyy-mm-dd”格式，并将“病人ID”列名改为“患者ID”，显示修改后的表结构；\n3、增加“诊断延迟”（诊断日期-就诊日期）和“病程”（当前日期-诊断日期）两列，删除不合理的数据（如负数，年龄为几百岁等）；\n4、检查数据集中的重复值并删除所有重复值，并记录删除的行数；\n5、对数据段[年龄，体重，身高]进行归一化处理；\n6、统计不同疾病类型的治疗结果分布，并画出柱状图；\n7、分析年龄和疾病严重程度的关系，绘制出散点图；\n8、保存处理后的数据，并命名为：2.1.4_cleaned_data.csv，保存到考生文件夹；\n9、制定数据清洗和数据标注规范，将答案写到答题卷文件中，答题卷文件命名为“2.1.4.docx”，保存到考生文件夹；\n10、将以上代码以及运行结果，以html格式保存并命名为2.1.4.html，保存到考生文件夹，考生文件夹命名为“准考证号+身份证后6位”。",
    "totalScore": 15,
    "rubric": [
      {
        "id": "M1",
        "score": 2,
        "desc": "加载数据集并指定编码为gbk正确得1分，查看表结构基本信息正确得1分，总计得2分；"
      },
      {
        "id": "M2",
        "score": 1,
        "desc": "修改列名正确得1分；"
      },
      {
        "id": "M3",
        "score": 2,
        "desc": "增加列操作正确得1分，删除不合理数据得1分，总计得2分；"
      },
      {
        "id": "M4",
        "score": 1,
        "desc": "删除重复值正确得1分；"
      },
      {
        "id": "M5",
        "score": 1,
        "desc": "数据归一化处理得1分；"
      },
      {
        "id": "M6",
        "score": 1,
        "desc": "绘制柱状图正确得1分；"
      },
      {
        "id": "M7",
        "score": 1,
        "desc": "正确绘制散点图得1分；"
      },
      {
        "id": "M8",
        "score": 1,
        "desc": "保存处理后的数据正确得1分；"
      },
      {
        "id": "M9",
        "score": 2,
        "desc": "回答数据清洗规范：每回答正确1个规范点，得1分，最高得2分；"
      },
      {
        "id": "M10",
        "score": 3,
        "desc": "回答数据标注规范：每回答正确1个规范点，得1分，最高得3分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "随着医学技术的进步和医疗资源的丰富，医疗研究在改善患者治疗效果、提升医疗服务质量方面起到了重要作用。研究人员通过分析大量患者的治疗数据，能够评估不同治疗方案的效果，发现潜在的健康问题，并提出针对性的治疗建议。这不仅可以帮助患者获得更好的治疗效果，还能为医疗机构优化资源配置、提升服务水平提供重要依据。\n现提供一份医疗研究数据集，训练集样本数据一共5441条记录。请补全2.1.4.ipynb代码，完成下面的数据预处理任务：\n1、加载数据集，查看表的数据类型，表结构和显示每一列的空缺值数量；\n2、将“就诊日期”和“诊断日期”规范为“yyyy-mm-dd”格式，并将“病人ID”列名改为“患者ID”，显示修改后的表结构；\n3、增加“诊断延迟”（诊断日期-就诊日期）和“病程”（当前日期-诊断日期）两列，删除不合理的数据（如负数，年龄为几百岁等）；\n4、检查数据集中的重复值并删除所有重复值，并记录删除的行数；\n5、对数据段[年龄，体重，身高]进行归一化处理；\n6、统计不同疾病类型的治疗结果分布，并画出柱状图；\n7、分析年龄和疾病严重程度的关系，绘制出散点图；\n8、保存处理后的数据，并命名为：2.1.4_cleaned_data.csv，保存到考生文件夹；\n9、制定数据清洗和数据标注规范，将答案写到答题卷文件中，答题卷文件命名为“2.1.4.docx”，保存到考生文件夹；\n10、将以上代码以及运行结果，以html格式保存并命名为2.1.4.html，保存到考生文件夹，考生文件夹命名为“准考证号+身份证后6位”。",
        "score": 0
      },
      {
        "id": "code_0",
        "type": "code",
        "title": "data = ___",
        "code": "import pandas as pd\n\ndata = ___\n\nprint(data.dtypes)\nprint(___)\n\nprint(data.isnull().sum())\n\ndata['就诊日期'] = pd.to_datetime(data['就诊日期'])\ndata['诊断日期'] = pd.to_datetime(data['诊断日期'])\n\n___(___, inplace=True)\n\nprint(data.head())\n\nfrom datetime import datetime\n\ndata['诊断延迟'] = ___.dt.days\ndata['病程'] = (datetime(2024, 9, 1) - data['诊断日期']).dt.days\n\ndata = ___[(___ >= 0) & (___ > 0) & (___ < 120)]\n\nprint(data.describe())\n\ninitial_rows = data.shape[0]\n___(inplace=True)\ndeleted_rows = initial_rows - data.shape[0]\n\nprint(f'删除的重复行数: {deleted_rows}')\n\nfrom sklearn.preprocessing import MinMaxScaler\n\nscaler = MinMaxScaler()\ncolumns_to_normalize = [___]\ndata[columns_to_normalize] = ___\n\nprint(data.head())\n\nimport matplotlib.pyplot as plt\nimport matplotlib.font_manager as fm\n\n\ntreatment_outcome_distribution = data.groupby('疾病类型')['治疗结果'].value_counts().unstack()\n\nfont_path = 'C:/Windows/Fonts/simhei.ttf'  # 根据你的系统调整字体路径\nmy_font = fm.FontProperties(fname=font_path)\n\n___(___, stacked=True)\nplt.title('不同疾病类型的治疗结果分布', fontproperties=my_font)\nplt.xlabel('疾病类型', fontproperties=my_font)\nplt.ylabel('治疗结果数量', fontproperties=my_font)\nplt.xticks(fontproperties=my_font)  # 设置x轴刻度标签的字体\nplt.yticks(fontproperties=my_font)  # 设置y轴刻度标签的字体\nplt.legend(prop=my_font)  # 设置图例字体\nplt.show()\n\n___(___, ___)\nplt.title('年龄和疾病严重程度的关系', fontproperties=my_font)\nplt.xlabel('年龄', fontproperties=my_font)\nplt.ylabel('疾病严重程度', fontproperties=my_font)\nplt.xticks(fontproperties=my_font)  # 设置x轴刻度标签的字体\nplt.yticks(fontproperties=my_font)  # 设置y轴刻度标签的字体\nplt.legend(prop=my_font)  # 设置图例字体\nplt.show()\n\noutput_path = '2.1.4_cleaned_data.csv'\n___(___, index=False)",
        "cellIndex": 0,
        "blanks": [
          {
            "blankIndex": 0,
            "score": 0,
            "desc": "data = ___",
            "answer": null
          },
          {
            "blankIndex": 1,
            "score": 0,
            "desc": "print(___)",
            "answer": null
          },
          {
            "blankIndex": 2,
            "score": 0,
            "desc": "___(___, inplace=True)",
            "answer": null
          },
          {
            "blankIndex": 3,
            "score": 0,
            "desc": "___(___, inplace=True)",
            "answer": null
          },
          {
            "blankIndex": 4,
            "score": 0,
            "desc": "data['诊断延迟'] = ___.dt.days",
            "answer": null
          },
          {
            "blankIndex": 5,
            "score": 0,
            "desc": "data = ___[(___ >= 0) & (___ > 0) & (___ < 120)]",
            "answer": null
          },
          {
            "blankIndex": 6,
            "score": 0,
            "desc": "data = ___[(___ >= 0) & (___ > 0) & (___ < 120)]",
            "answer": null
          },
          {
            "blankIndex": 7,
            "score": 0,
            "desc": "data = ___[(___ >= 0) & (___ > 0) & (___ < 120)]",
            "answer": null
          },
          {
            "blankIndex": 8,
            "score": 0,
            "desc": "data = ___[(___ >= 0) & (___ > 0) & (___ < 120)]",
            "answer": null
          },
          {
            "blankIndex": 9,
            "score": 0,
            "desc": "___(inplace=True)",
            "answer": null
          },
          {
            "blankIndex": 10,
            "score": 0,
            "desc": "columns_to_normalize = [___]",
            "answer": null
          },
          {
            "blankIndex": 11,
            "score": 0,
            "desc": "data[columns_to_normalize] = ___",
            "answer": null
          },
          {
            "blankIndex": 12,
            "score": 0,
            "desc": "___(___, stacked=True)",
            "answer": null
          },
          {
            "blankIndex": 13,
            "score": 0,
            "desc": "___(___, stacked=True)",
            "answer": null
          },
          {
            "blankIndex": 14,
            "score": 0,
            "desc": "___(___, ___)",
            "answer": null
          },
          {
            "blankIndex": 15,
            "score": 0,
            "desc": "___(___, ___)",
            "answer": null
          },
          {
            "blankIndex": 16,
            "score": 0,
            "desc": "___(___, ___)",
            "answer": null
          },
          {
            "blankIndex": 17,
            "score": 0,
            "desc": "___(___, index=False)",
            "answer": null
          },
          {
            "blankIndex": 18,
            "score": 0,
            "desc": "___(___, index=False)",
            "answer": null
          }
        ],
        "score": 0,
        "answer": null
      },
      {
        "id": "doc_2.1.4",
        "type": "doc",
        "title": "数据规范",
        "sectionId": "2.1.4",
        "prompt": "",
        "docFile": "2.1.4.docx",
        "template": {
          "source": "2.1.4.docx",
          "layout": "sections",
          "sections": [
            {
              "type": "textarea",
              "label": "制定数据清洗规范（每正确回答1个规范点得1分，最高得2分）",
              "large": true,
              "placeholder": "请在此填写"
            },
            {
              "type": "textarea",
              "label": "制定数据标注规范（每正确回答1个规范点得1分，最高得3分）",
              "large": true,
              "placeholder": "请在此填写"
            }
          ]
        },
        "rubric": [
          {
            "id": "M9",
            "score": 2,
            "desc": "回答数据清洗规范：每回答正确1个规范点，得1分，最高得2分；"
          },
          {
            "id": "M10",
            "score": 3,
            "desc": "回答数据标注规范：每回答正确1个规范点，得1分，最高得3分；"
          }
        ],
        "score": 5,
        "answer": null,
        "docAnswer": [
          "适用于医疗研究数据集的预处理环节，须保证数据格式统一、字段规范、逻辑合理、样本唯一、量纲一致。\n\n数据加载与质量核查规范： 正确加载数据集，查看各列数据类型与表结构，并统计每一列的缺失值数量，作为数据质量评估依据。\n\n数据格式规范化规范： 将\"就诊日期\"\"诊断日期\"等日期字段统一规范为 yyyy-mm-dd 标准格式，保证日期格式一致、可参与时间差计算。\n\n字段命名规范： 统一规范字段命名（如将\"病人ID\"改为\"患者ID\"），保证字段名称清晰、一致、符合医疗业务术语，并核对修改后的表结构。\n\n逻辑合理性校验规范： 结合医疗业务常识与派生字段，删除逻辑错误或不合理的记录——如\"诊断延迟\"\"病程\"出现负数（诊断早于就诊、当前早于诊断）、年龄超出合理范围（如几百岁）等异常数据，保证数据真实可信。\n\n重复值处理规范： 检查并删除全部重复记录，并记录删除的行数，保证每条患者样本唯一，避免重复样本造成偏倚。\n\n归一化规范： 对 [年龄、体重、身高] 数值字段进行归一化处理（Min-Max 归一化至 [0,1]），消除量纲与数量级差异，便于在同一尺度下分析。",
          "派生字段标注规范： 按统一口径构造并标注派生字段——\"诊断延迟\" = 诊断日期 − 就诊日期、\"病程\" = 当前日期 − 诊断日期，单位（天）与计算口径须明确一致。\n\n关键字段含义标注规范： 明确\"疾病类型\"\"治疗结果\"\"疾病严重程度\"\"年龄\"等关键字段的取值与含义口径，作为统计分析与后续建模的标注依据，确保口径统一、可对比。\n\n数据探索与校验规范： 通过柱状图（不同疾病类型的治疗结果分布）、散点图（年龄与疾病严重程度关系）等可视化手段检查数据分布与潜在异常，辅助评估清洗与标注质量。\n\n数据保存与命名规范： 处理后的数据须保存为 2.1.4_cleaned_data.csv，存放于指定考生文件夹，保存版本为已清洗、已标注、可直接用于分析建模的数据。"
        ]
      }
    ],
    "answer": null
  },
  {
    "id": "2.1.5",
    "code": "2.1.5",
    "name": "健康与营养咨询数据预处理与数据规范设计",
    "chapter": 2,
    "chapterName": "智能训练",
    "time": "20min",
    "tasks": "在健康与营养咨询领域，客户的健康数据是评估其饮食和生活方式建议的重要依据。通过对客户健康数据的分析，可以帮助健康咨询师更准确地评估客户的健康状况，并制定个性化的营养和健康管理计划。现提供一份健康咨询客户数据集。请补全2.1.5.ipynb代码，完成下面的数据预处理任务：\n（1）加载数据集：查看表的数据类型，表结构和显示每一列的空缺值数量；\n（2）缺失值处理：对于含有缺失值的行进行删除操作；\n（3）数据类型转换：将“Your age”列的数据类型转换为整数类型，并处理其中的异常值；\n（4）数据去重：检查数据集中的重复值并删除所有重复值，并记录删除的行数；\n（5）数据归一化处理：对“如何形容你的当前健身水平？”（How do you describe your current level of fitness ?）列中的数据进行归一化处理；\n（6）绘制健身频率分布的饼图；\n（7）对数据进行标注划分；\n（8）保存处理后的数据，并命名为：2.1.5_cleaned_data.csv，保存到考生文件夹；\n（9）制定数据清洗和数据标注规范，将答案写到答题卷文件中，答题卷文件命名为“2.1.5.docx”，保存到考生文件夹；\n（10）将以上代码以及运行结果，以html格式保存并命名为2.1.5.html，保存到考生文件夹，考生文件夹命名为“准考证号+身份证后6位”。",
    "totalScore": 15,
    "rubric": [
      {
        "id": "M1",
        "score": 2,
        "desc": "数据集正确加载的1分，查看表结构基本信息得1分，总共2分；"
      },
      {
        "id": "M2",
        "score": 1,
        "desc": "查看每一列的空缺值数量正确得1分；"
      },
      {
        "id": "M3",
        "score": 1,
        "desc": "删除含有缺失值的行正确得1分；"
      },
      {
        "id": "M4",
        "score": 1,
        "desc": "将“Your age”列的数据类型转换为整数类型并处理异常值得1分；"
      },
      {
        "id": "M5",
        "score": 1,
        "desc": "删除所有重复值正确得1分；"
      },
      {
        "id": "M6",
        "score": 1,
        "desc": "对数据进行归一化处理得1分；"
      },
      {
        "id": "M7",
        "score": 1,
        "desc": "绘制健身频率分布的饼图得1分；"
      },
      {
        "id": "M8",
        "score": 1,
        "desc": "对数据集进行划分正确得1分；"
      },
      {
        "id": "M9",
        "score": 1,
        "desc": "保存处理后的数据正确得1分；"
      },
      {
        "id": "M10",
        "score": 2,
        "desc": "回答数据清洗规范：每回答正确1个规范点，得1分，最高得2分；"
      },
      {
        "id": "M11",
        "score": 3,
        "desc": "回答数据标注规范：每回答正确1个规范点，得1分，最高得3分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "在健康与营养咨询领域，客户的健康数据是评估其饮食和生活方式建议的重要依据。通过对客户健康数据的分析，可以帮助健康咨询师更准确地评估客户的健康状况，并制定个性化的营养和健康管理计划。现提供一份健康咨询客户数据集。请补全2.1.5.ipynb代码，完成下面的数据预处理任务：\n（1）加载数据集：查看表的数据类型，表结构和显示每一列的空缺值数量；\n（2）缺失值处理：对于含有缺失值的行进行删除操作；\n（3）数据类型转换：将“Your age”列的数据类型转换为整数类型，并处理其中的异常值；\n（4）数据去重：检查数据集中的重复值并删除所有重复值，并记录删除的行数；\n（5）数据归一化处理：对“如何形容你的当前健身水平？”（How do you describe your current level of fitness ?）列中的数据进行归一化处理；\n（6）绘制健身频率分布的饼图；\n（7）对数据进行标注划分；\n（8）保存处理后的数据，并命名为：2.1.5_cleaned_data.csv，保存到考生文件夹；\n（9）制定数据清洗和数据标注规范，将答案写到答题卷文件中，答题卷文件命名为“2.1.5.docx”，保存到考生文件夹；\n（10）将以上代码以及运行结果，以html格式保存并命名为2.1.5.html，保存到考生文件夹，考生文件夹命名为“准考证号+身份证后6位”。",
        "score": 0
      },
      {
        "id": "code_0",
        "type": "code",
        "title": "data = ___",
        "code": "import pandas as pd\n\ndata = ___\n\nprint(___)\n\nprint(___)\n\ndata_cleaned = ___\n\ndata_cleaned.loc[:, 'Your age'] = ___(___, errors='coerce')\ndata_cleaned = data_cleaned.dropna(subset=['Your age'])\ndata_cleaned = data_cleaned[data_cleaned['Your age'] >= 0]\ndata_cleaned.loc[:, 'Your age'] = data_cleaned['Your age'].___\n\nprint(data_cleaned['Your age'].dtype)\n\nduplicates_removed = data_cleaned.duplicated().sum()\ndata_cleaned = ___\n\nprint(f\"Removed {duplicates_removed} duplicate rows\")\n\nfrom sklearn.preprocessing import LabelEncoder\n\nlabel_encoder = LabelEncoder()\ndata_cleaned[___] = ___\n\nprint(data_cleaned['How do you describe your current level of fitness ?'].unique())\n\nfrom sklearn.preprocessing import LabelEncoder\nimport matplotlib.pyplot as plt\n\ndata.columns = data.columns.str.strip()\nprint(data.columns)\n\ndata_cleaned = data.dropna(subset=['How often do you exercise?'])\n\nexercise_frequency_counts = data_cleaned['How often do you exercise?'].value_counts()\n\nplt.figure(figsize=(10, 6))\n___(autopct='%1.1f%%', startangle=90, colors=plt.cm.Paired.colors)\nplt.title('Distribution of Exercise Frequency')\nplt.ylabel('')\nplt.show()\n\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nimport matplotlib.pyplot as plt\n\ndata_filled = data.apply(lambda x: x.fillna(x.mode()[0]))\n\ntrain_data, test_data = ___(___, random_state=42)\n\ncleaned_file_path = '___'\n___(___, index=False)",
        "cellIndex": 0,
        "blanks": [
          {
            "blankIndex": 0,
            "score": 0,
            "desc": "data = ___",
            "answer": null
          },
          {
            "blankIndex": 1,
            "score": 0,
            "desc": "print(___)",
            "answer": null
          },
          {
            "blankIndex": 2,
            "score": 0,
            "desc": "print(___)",
            "answer": null
          },
          {
            "blankIndex": 3,
            "score": 0,
            "desc": "data_cleaned = ___",
            "answer": null
          },
          {
            "blankIndex": 4,
            "score": 0,
            "desc": "data_cleaned.loc[:, 'Your age'] = ___(___, errors='coerce')",
            "answer": null
          },
          {
            "blankIndex": 5,
            "score": 0,
            "desc": "data_cleaned.loc[:, 'Your age'] = ___(___, errors='coerce')",
            "answer": null
          },
          {
            "blankIndex": 6,
            "score": 0,
            "desc": "data_cleaned.loc[:, 'Your age'] = data_cleaned['Your age'].___",
            "answer": null
          },
          {
            "blankIndex": 7,
            "score": 0,
            "desc": "data_cleaned = ___",
            "answer": null
          },
          {
            "blankIndex": 8,
            "score": 0,
            "desc": "data_cleaned[___] = ___",
            "answer": null
          },
          {
            "blankIndex": 9,
            "score": 0,
            "desc": "data_cleaned[___] = ___",
            "answer": null
          },
          {
            "blankIndex": 10,
            "score": 0,
            "desc": "___(autopct='%1.1f%%', startangle=90, colors=plt.cm.Paired.colors)",
            "answer": null
          },
          {
            "blankIndex": 11,
            "score": 0,
            "desc": "train_data, test_data = ___(___, random_state=42)",
            "answer": null
          },
          {
            "blankIndex": 12,
            "score": 0,
            "desc": "train_data, test_data = ___(___, random_state=42)",
            "answer": null
          },
          {
            "blankIndex": 13,
            "score": 0,
            "desc": "cleaned_file_path = '___'",
            "answer": null
          },
          {
            "blankIndex": 14,
            "score": 0,
            "desc": "___(___, index=False)",
            "answer": null
          },
          {
            "blankIndex": 15,
            "score": 0,
            "desc": "___(___, index=False)",
            "answer": null
          }
        ],
        "score": 0,
        "answer": null
      },
      {
        "id": "doc_2.1.5",
        "type": "doc",
        "title": "数据规范",
        "sectionId": "2.1.5",
        "prompt": "",
        "docFile": "2.1.5.docx",
        "template": {
          "source": "2.1.5.docx",
          "layout": "sections",
          "sections": [
            {
              "type": "textarea",
              "label": "制定数据清洗规范（每正确回答1个规范点得1分，最高得2分）",
              "large": true,
              "placeholder": "请在此填写"
            },
            {
              "type": "textarea",
              "label": "制定数据标注规范（每正确回答1个规范点得1分，最高得3分）",
              "large": true,
              "placeholder": "请在此填写"
            }
          ]
        },
        "rubric": [
          {
            "id": "M10",
            "score": 2,
            "desc": "回答数据清洗规范：每回答正确1个规范点，得1分，最高得2分；"
          },
          {
            "id": "M11",
            "score": 3,
            "desc": "回答数据标注规范：每回答正确1个规范点，得1分，最高得3分；"
          }
        ],
        "score": 5,
        "answer": null,
        "docAnswer": [
          "适用于健康咨询客户数据集的预处理环节，须保证数据完整、类型正确、样本唯一、量纲一致。\n\n数据加载与核查规范： 正确加载数据集，查看各列数据类型与表结构，并统计每一列的缺失值数量，作为数据质量评估依据。\n\n缺失值处理规范： 对含有缺失值的记录采取删除整行的方式处理，确保进入分析与建模的数据完整无缺失。\n\n数据类型转换与异常值处理规范： 将\"Your age\"列转换为整数类型；对转换中出现的异常值（如非数值、负数、超出合理范围的年龄等）进行处理，保证年龄字段真实、可用。\n\n重复值处理规范： 检查并删除全部重复记录，并记录删除的行数，保证每位客户样本唯一，避免重复样本造成偏倚。\n\n归一化规范： 对\"如何形容你的当前健身水平？\"列进行归一化处理（Min-Max 归一化至 [0,1]），消除量纲差异，便于在同一尺度下分析。\n\n数据探索与校验规范： 绘制健身频率分布饼图，了解各类别占比与数据分布，辅助评估数据质量与业务合理性。",
          "目标变量标注规范： 明确标注建模所需的目标变量（标签 y），与特征集（X）分离，标签含义与取值口径须清晰一致。\n\n数据集划分规范： 标注完成后，按一定比例划分训练集与测试集；划分须随机并保持数据分布代表性，固定随机种子（如 random_state）以保证结果可复现。\n\n数据保存与命名规范： 处理后的数据须保存为 2.1.5_cleaned_data.csv，存放于指定考生文件夹，保存版本为已清洗、已标注、可直接用于分析建模的数据。"
        ]
      }
    ],
    "answer": null
  },
  {
    "id": "2.2.1",
    "code": "2.2.1",
    "name": "智能信用评分Logistic回归模型开发与测试",
    "chapter": 2,
    "chapterName": "智能训练",
    "time": "20min",
    "tasks": "互联网金融飞速发展，使得个人金融理财变得越来越容易。而其中信用评分技术是一种对贷款申请人（信用卡申请人）做风险评估分值的统计模型，可以根据客户提供的资料、客户的历史数据、第三方平台数据（芝麻分、京东、微信等），对客户的信用进行评估。现要求根据提供的finance数据集，补全2.2.1.ipynb代码。选择合适的特征，开发一个申请的评分模型，利用测试工具对模型进行测试，并对测试结果进行分析，完成测试报告，并运用工具对错误原因进行纠正。\n（1）正确加载数据集，显示前五行的数据。\n（2）使用Logistic模型进行模型训练，要求设定自变量和因变量，并根据自变量特征进行模型训练，最终将训练好的模型以文件名2.2.1_model.pkl保存到考生文件夹，结果文件以2.2.1_results.txt保存到考生文件夹。\n（3）使用测试工具对模型进行测试，并记录测试结果，命名2.2.1_report.txt，保存到考生文件夹\n（4）对测试结果进行详细分析，并编写测试报告，包括模型性能评估、错误分析及改进建议，将答案写到答题卷文件中，答题卷文件命名为“2.2.1.docx”，保存到考生文件夹。\n（5）运用工具分析算法中错误案例产生的原因并进行纠正，重新得到模型训练结果，以文件名2.2.1_results_xg.txt保存到考生文件夹。\n（6）将以上代码以及运行结果，以html格式保存并命名为2.2.1.html，保存到考生文件夹，考生文件夹命名为“准考证号+身份证后6位”。\n数据集说明：\nUnnamed: 0 - 索引号。\nSeriousDlqin2yrs - 个人在过去两年内是否出现过严重的拖欠（1 表示有严重拖欠，0 表示没有）。\nRevolvingUtilizationOfUnsecuredLines - 这是指个人未偿还的信用额度与总信用额度的比例。\nage - 客户的年龄。\nNumberOfTime30-59DaysPastDueNotWorse - 在过去一段时间内，贷款逾期30至59天的次数。\nDebtRatio - 债务比率。\nMonthlyIncome - 客户的月收入。\nNumberOfOpenCreditLinesAndLoans - 正在使用的信贷账户或贷款的数量。\nNumberOfTimes90DaysLate - 贷款逾期超过90天的次数。\nNumberRealEstateLoansOrLines - 持有的房地产相关贷款或信贷的数量。\nNumberOfTime60-89DaysPastDueNotWorse - 贷款逾期60至89天的次数。\nNumberOfDependents - 家庭中依赖该个人的人数。",
    "totalScore": 20,
    "rubric": [
      {
        "id": "M1",
        "score": 2,
        "desc": "正确加载数据集，得1分，显示前五行的数据，得1分，总计得2分；"
      },
      {
        "id": "M2",
        "score": 1,
        "desc": "训练集与测试集的准确划分得1分；"
      },
      {
        "id": "M3",
        "score": 2,
        "desc": "初始化 Logistic 回归模型得2分；"
      },
      {
        "id": "M4",
        "score": 2,
        "desc": "训练 Logistic 回归模型得2分；"
      },
      {
        "id": "M5",
        "score": 1,
        "desc": "正确保存Logistic 回归模型文件得1分；"
      },
      {
        "id": "M6",
        "score": 1,
        "desc": "使用 Logistic 回归模型在测试集上进行预测得1分；"
      },
      {
        "id": "M7",
        "score": 2,
        "desc": "正确计算Logistic 回归模型的准确率得2分；"
      },
      {
        "id": "M8",
        "score": 2,
        "desc": "正确处理数据不平衡问题得2分；"
      },
      {
        "id": "M9",
        "score": 2,
        "desc": "模型重新训练得2分"
      },
      {
        "id": "M10",
        "score": 1,
        "desc": "正确生成新预测结果得1分；"
      },
      {
        "id": "M11",
        "score": 1,
        "desc": "正确分析新的测试结果得1分；"
      },
      {
        "id": "M12",
        "score": 3,
        "desc": "正确填写2.2.1.docx测试报告：其中模型性能评估得1分、错误分析得1分，改进建议得1分，总计得3分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "互联网金融飞速发展，使得个人金融理财变得越来越容易。而其中信用评分技术是一种对贷款申请人（信用卡申请人）做风险评估分值的统计模型，可以根据客户提供的资料、客户的历史数据、第三方平台数据（芝麻分、京东、微信等），对客户的信用进行评估。现要求根据提供的finance数据集，补全2.2.1.ipynb代码。选择合适的特征，开发一个申请的评分模型，利用测试工具对模型进行测试，并对测试结果进行分析，完成测试报告，并运用工具对错误原因进行纠正。\n（1）正确加载数据集，显示前五行的数据。\n（2）使用Logistic模型进行模型训练，要求设定自变量和因变量，并根据自变量特征进行模型训练，最终将训练好的模型以文件名2.2.1_model.pkl保存到考生文件夹，结果文件以2.2.1_results.txt保存到考生文件夹。\n（3）使用测试工具对模型进行测试，并记录测试结果，命名2.2.1_report.txt，保存到考生文件夹\n（4）对测试结果进行详细分析，并编写测试报告，包括模型性能评估、错误分析及改进建议，将答案写到答题卷文件中，答题卷文件命名为“2.2.1.docx”，保存到考生文件夹。\n（5）运用工具分析算法中错误案例产生的原因并进行纠正，重新得到模型训练结果，以文件名2.2.1_results_xg.txt保存到考生文件夹。\n（6）将以上代码以及运行结果，以html格式保存并命名为2.2.1.html，保存到考生文件夹，考生文件夹命名为“准考证号+身份证后6位”。\n数据集说明：\n• Unnamed: 0 - 索引号。\nSeriousDlqin2yrs - 个人在过去两年内是否出现过严重的拖欠（1 表示有严重拖欠，0 表示没有）。\nRevolvingUtilizationOfUnsecuredLines - 这是指个人未偿还的信用额度与总信用额度的比例。\nage - 客户的年龄。\nNumberOfTime30-59DaysPastDueNotWorse - 在过去一段时间内，贷款逾期30至59天的次数。\nDebtRatio - 债务比率。\nMonthlyIncome - 客户的月收入。\nNumberOfOpenCreditLinesAndLoans - 正在使用的信贷账户或贷款的数量。\nNumberOfTimes90DaysLate - 贷款逾期超过90天的次数。\nNumberRealEstateLoansOrLines - 持有的房地产相关贷款或信贷的数量。\nNumberOfTime60-89DaysPastDueNotWorse - 贷款逾期60至89天的次数。\nNumberOfDependents - 家庭中依赖该个人的人数。",
        "score": 0
      },
      {
        "id": "code_0",
        "type": "code",
        "title": "data = ___",
        "code": "import pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LogisticRegression\nimport pickle\nfrom sklearn.metrics import classification_report\nfrom imblearn.over_sampling import SMOTE\n\ndata = ___\n\nprint(___)\n\nX = data.drop(['SeriousDlqin2yrs', 'Unnamed: 0'], axis=1)\ny = data['SeriousDlqin2yrs']\n\nX_train, X_test, y_train, y_test = ___(___, random_state=42)\n\nmodel = ___\n___\n\nwith open('2.2.1_model.pkl', 'wb') as file:\n    pickle.___\n\ny_pred = ___\npd.DataFrame(y_pred, columns=['预测结果']).to_csv('2.2.1_results.txt', index=False)\n\nreport = classification_report(y_test, y_pred, zero_division=1)\nwith open('2.2.1_report.txt', 'w') as file:\n    file.write(report)\n\naccuracy = ___\nprint(f\"模型准确率: {accuracy:.2f}\")\n\nsmote = SMOTE(random_state=42)\nX_resampled, y_resampled = ___\n\n___\ny_pred_resampled = ___\n\npd.DataFrame(y_pred_resampled, columns=['预测结果']).to_csv('2.2.1_results_xg.txt', index=False)\n\nreport_resampled = classification_report(y_test, y_pred_resampled, zero_division=1)\nwith open('2.2.1_report_xg.txt', 'w') as file:\n    file.write(report_resampled)\n\naccuracy_resampled = ___\nprint(f\"重新采样后的模型准确率: {accuracy_resampled:.2f}\")",
        "cellIndex": 0,
        "blanks": [
          {
            "blankIndex": 0,
            "score": 0,
            "desc": "data = ___",
            "answer": null
          },
          {
            "blankIndex": 1,
            "score": 0,
            "desc": "print(___)",
            "answer": null
          },
          {
            "blankIndex": 2,
            "score": 0,
            "desc": "X_train, X_test, y_train, y_test = ___(___, random_state=42)",
            "answer": null
          },
          {
            "blankIndex": 3,
            "score": 0,
            "desc": "X_train, X_test, y_train, y_test = ___(___, random_state=42)",
            "answer": null
          },
          {
            "blankIndex": 4,
            "score": 0,
            "desc": "model = ___",
            "answer": null
          },
          {
            "blankIndex": 5,
            "score": 0,
            "desc": "___",
            "answer": null
          },
          {
            "blankIndex": 6,
            "score": 0,
            "desc": "pickle.___",
            "answer": null
          },
          {
            "blankIndex": 7,
            "score": 0,
            "desc": "y_pred = ___",
            "answer": null
          },
          {
            "blankIndex": 8,
            "score": 0,
            "desc": "accuracy = ___",
            "answer": null
          },
          {
            "blankIndex": 9,
            "score": 0,
            "desc": "X_resampled, y_resampled = ___",
            "answer": null
          },
          {
            "blankIndex": 10,
            "score": 0,
            "desc": "___",
            "answer": null
          },
          {
            "blankIndex": 11,
            "score": 0,
            "desc": "y_pred_resampled = ___",
            "answer": null
          },
          {
            "blankIndex": 12,
            "score": 0,
            "desc": "accuracy_resampled = ___",
            "answer": null
          }
        ],
        "score": 0,
        "answer": null
      },
      {
        "id": "doc_2.2.1",
        "type": "doc",
        "title": "测试报告",
        "sectionId": "2.2.1",
        "prompt": "",
        "docFile": "2.2.1.docx",
        "template": {
          "source": "2.2.1.docx",
          "layout": "sections",
          "sections": [
            {
              "type": "heading",
              "text": "针对Logistic模型"
            },
            {
              "type": "subheading",
              "text": "1、模型性能"
            },
            {
              "type": "table",
              "headers": [
                "",
                "precision",
                "recall",
                "f1-score",
                "support"
              ],
              "rows": [
                {
                  "label": "0（没有严重逾期）",
                  "cells": 4
                },
                {
                  "label": "1（有严重逾期）",
                  "cells": 4
                }
              ]
            },
            {
              "type": "textarea",
              "label": "2、错误分析",
              "large": true,
              "placeholder": "请填写错误分析"
            },
            {
              "type": "textarea",
              "label": "3、改进建议",
              "large": true,
              "placeholder": "请填写改进建议"
            }
          ]
        },
        "rubric": [
          {
            "id": "M12",
            "score": 3,
            "desc": "正确填写2.2.1.docx测试报告：其中模型性能评估得1分、错误分析得1分，改进建议得1分，总计得3分；"
          }
        ],
        "score": 3,
        "answer": null,
        "docAnswer": [
          "0.95",
          "0.99",
          "0.97",
          "26779",
          "0.57",
          "0.13",
          "0.22",
          "1737",
          "准确率 accuracy = 0.94\n\n模型整体准确率 0.94 看似较高，实则严重虚高：测试集中非违约样本（0 类）占绝大多数（26779 条），违约样本仅 1737 条，模型主要靠预测多数类（0 类）拉高准确率。关键问题在于对违约客户（1 类）识别能力极差——召回率仅 0.13，意味着 87% 的真实违约客户被漏判为正常，风控角度风险极大；1 类 F1 仅 0.22，综合判别能力很差。同时运行出现 ConvergenceWarning，lbfgs 在 max_iter=1000 内未收敛，提示需标准化特征；数据中 MonthlyIncome 量级上万，而 DebtRatio 等在 0~1 之间，量纲差异悬殊导致系数估计不可靠。",
          "① 特征标准化 + 增大迭代次数：用 StandardScaler 对数值特征标准化，消除量纲差异，增大 max_iter 确保模型收敛；② 处理类别不平衡：采用 SMOTE 过采样或 class_weight='balanced'，提升违约类召回率（纠正后 SMOTE 重训，1 类召回率提升至 0.75）；③ 阈值调优：结合风控业务调整分类阈值，优先保证违约召回；④ 升级模型：改用 XGBoost 等集成模型，捕捉非线性关系，提升 AUC 与违约识别能力；⑤ 特征工程：填充缺失值、处理异常值，构造衍生特征。"
        ]
      }
    ],
    "answer": null
  },
  {
    "id": "2.2.2",
    "code": "2.2.2",
    "name": "智慧交通中燃油效率随机森林模型开发与测试",
    "chapter": 2,
    "chapterName": "智能训练",
    "time": "20min",
    "tasks": "在现代交通中，燃油效率（MPG）是衡量汽车性能和交通系统优化的重要指标之一。高效的燃油利用不仅能够降低车辆运营成本，还能减少碳排放，促进环保。开发一个用于预测汽车燃油效率的模型可以帮助智慧交通系统优化路线规划和车辆调度，从而提升整体交通效率和减少能源消耗。此外，这样的模型还可以帮助消费者做出更明智的购车决策，并帮助厂商优化汽车设计。\n现要求根据提供的汽车燃油效率数据集，补全2.2.2.ipynb代码。选择合适的特征，开发一个燃油效率预测模型。利用测试工具对模型进行测试，并对测试结果进行分析，完成测试报告，并运用工具对错误原因进行纠正。\n（1）正确加载数据集，显示前五行的数据。\n（2）使用线性回归模型进行模型训练，要求设定自变量和因变量，并根据自变量特征进行模型训练，最终将训练好的模型以“2.2.2_model.pkl”命名保存到考生文件夹，结果文件以“2.2.2_results.txt”命名保存到考生文件夹。\n（3）使用测试工具对模型进行测试，并记录测试结果，以“2.2.2_report.txt”命名保存到考生文件夹。\n（4）运用工具分析算法中错误案例产生的原因并进行纠正，重新进行模型训练，并以“2.2.2_results_rf.txt”命名保存到考生文件夹。\n（5）对测试结果进行详细分析，并编写测试报告，包括模型性能评估、错误分析及改进建议，将答案以“2.2.2.docx”命名写到答题卷文件中，并保存到考生文件夹。\n（6）将以上代码以及运行结果，以html格式保存并命名为2.2.2.html，保存到考生文件夹，考生文件夹命名为“准考证号+身份证后6位”。\n数据集说明：\nmpg : 燃油效率，每加仑油可以行驶的英里数。\ncylinders: 发动机气缸的数量。\ndisplacement: 这是指发动机所有气缸的总容积。\nhorsepower: 发动机的马力。\nweight: 车辆的重量。\nacceleration: 加速。\nmodel year: 车辆的生产年份。\norigin: 指的是车辆的制造地或品牌所属国家。\ncar name: 每辆车的具体名称或型号。",
    "totalScore": 20,
    "rubric": [
      {
        "id": "M1",
        "score": 2,
        "desc": "正确加载数据集得1分，显示前五行的数据得1分，总计得2分；"
      },
      {
        "id": "M2",
        "score": 2,
        "desc": "正确处理缺失值得2分；"
      },
      {
        "id": "M3",
        "score": 2,
        "desc": "正确定义自变量得1分，因变量得1分，总计得2分；"
      },
      {
        "id": "M4",
        "score": 1,
        "desc": "训练集与测试集的准确划分得1分；"
      },
      {
        "id": "M5",
        "score": 2,
        "desc": "初始化线性回归模型得2分；"
      },
      {
        "id": "M6",
        "score": 1,
        "desc": "训练线性回归模型得1分；"
      },
      {
        "id": "M7",
        "score": 1,
        "desc": "保存线性回归模型得1分"
      },
      {
        "id": "M8",
        "score": 1,
        "desc": "使用线性回归模型预测得1分；"
      },
      {
        "id": "M9",
        "score": 1,
        "desc": "正确输出线性回归模型预测结果得1分；"
      },
      {
        "id": "M10",
        "score": 1,
        "desc": "初始化随机森林回归模型得1分；"
      },
      {
        "id": "M11",
        "score": 1,
        "desc": "训练随机森林回归模型得1分；"
      },
      {
        "id": "M12",
        "score": 1,
        "desc": "正确使用随机森林模型进行预测结果得1分；"
      },
      {
        "id": "M13",
        "score": 1,
        "desc": "保存随机森林模型预测结果得1分；"
      },
      {
        "id": "M14",
        "score": 3,
        "desc": "正确填写2.2.2.docx测试报告：其中模型性能评估得1分、错误分析得1分，改进建议得1分，总计得3分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "在现代交通中，燃油效率（MPG）是衡量汽车性能和交通系统优化的重要指标之一。高效的燃油利用不仅能够降低车辆运营成本，还能减少碳排放，促进环保。开发一个用于预测汽车燃油效率的模型可以帮助智慧交通系统优化路线规划和车辆调度，从而提升整体交通效率和减少能源消耗。此外，这样的模型还可以帮助消费者做出更明智的购车决策，并帮助厂商优化汽车设计。\n现要求根据提供的汽车燃油效率数据集，补全2.2.2.ipynb代码。选择合适的特征，开发一个燃油效率预测模型。利用测试工具对模型进行测试，并对测试结果进行分析，完成测试报告，并运用工具对错误原因进行纠正。\n（1）正确加载数据集，显示前五行的数据。\n（2）使用线性回归模型进行模型训练，要求设定自变量和因变量，并根据自变量特征进行模型训练，最终将训练好的模型以“2.2.2_model.pkl”命名保存到考生文件夹，结果文件以“2.2.2_results.txt”命名保存到考生文件夹。\n（3）使用测试工具对模型进行测试，并记录测试结果，以“2.2.2_report.txt”命名保存到考生文件夹。\n（4）运用工具分析算法中错误案例产生的原因并进行纠正，重新进行模型训练，并以“2.2.2_results_rf.txt”命名保存到考生文件夹。\n（5）对测试结果进行详细分析，并编写测试报告，包括模型性能评估、错误分析及改进建议，将答案以“2.2.2.docx”命名写到答题卷文件中，并保存到考生文件夹。\n（6）将以上代码以及运行结果，以html格式保存并命名为2.2.2.html，保存到考生文件夹，考生文件夹命名为“准考证号+身份证后6位”。\n数据集说明：\nmpg : 燃油效率，每加仑油可以行驶的英里数。\n• cylinders: 发动机气缸的数量。\n• displacement: 这是指发动机所有气缸的总容积。\n• horsepower: 发动机的马力。\n• weight: 车辆的重量。\n• acceleration: 加速。\nmodel year: 车辆的生产年份。\n• origin: 指的是车辆的制造地或品牌所属国家。\ncar name: 每辆车的具体名称或型号。",
        "score": 0
      },
      {
        "id": "code_0",
        "type": "code",
        "title": "df = ___",
        "code": "import pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.pipeline import Pipeline\nimport pickle\nfrom sklearn.ensemble import RandomForestRegressor\n\ndf = ___\n\nprint(___)\n\ndf['horsepower'] = ___(___, errors='coerce')\ndf = ___\n\nX = ___\ny = ___\n\nX_train, X_test, y_train, y_test = ___(___, random_state=42)\n\npipeline = ___([('scaler', ___),('linreg', ___)])\n\n___\n\nwith open('2.2.2_model.pkl', 'wb') as model_file:\n    pickle.___\n\ny_pred = ___\nresults_df = pd.DataFrame(y_pred, columns=['预测结果'])\n___('2.2.2_results.txt', index=False)\n\nwith open('2.2.2_report.txt', 'w') as results_file:\n    results_file.write(f'训练集得分: {pipeline.score(X_train, y_train)}\\n')\n    results_file.write(f'测试集得分: {pipeline.score(X_test, y_test)}\\n')\n\nrf_model = ___(___, random_state=42)\n___\n\ny_pred_rf = ___\n\nresults_rf_df = pd.DataFrame(y_pred_rf, columns=['预测结果'])\n___('2.2.2_results_rf.txt', index=False)\n\nwith open('2.2.2_report_rf.txt', 'w') as results_rf_file:\n    results_rf_file.write(f'训练集得分: {rf_model.score(X_train, y_train)}\\n')\n    results_rf_file.write(f'测试集得分: {rf_model.score(X_test, y_test)}\\n')",
        "cellIndex": 0,
        "blanks": [
          {
            "blankIndex": 0,
            "score": 0,
            "desc": "df = ___",
            "answer": null
          },
          {
            "blankIndex": 1,
            "score": 0,
            "desc": "print(___)",
            "answer": null
          },
          {
            "blankIndex": 2,
            "score": 0,
            "desc": "df['horsepower'] = ___(___, errors='coerce')",
            "answer": null
          },
          {
            "blankIndex": 3,
            "score": 0,
            "desc": "df['horsepower'] = ___(___, errors='coerce')",
            "answer": null
          },
          {
            "blankIndex": 4,
            "score": 0,
            "desc": "df = ___",
            "answer": null
          },
          {
            "blankIndex": 5,
            "score": 0,
            "desc": "X = ___",
            "answer": null
          },
          {
            "blankIndex": 6,
            "score": 0,
            "desc": "y = ___",
            "answer": null
          },
          {
            "blankIndex": 7,
            "score": 0,
            "desc": "X_train, X_test, y_train, y_test = ___(___, random_state=42)",
            "answer": null
          },
          {
            "blankIndex": 8,
            "score": 0,
            "desc": "X_train, X_test, y_train, y_test = ___(___, random_state=42)",
            "answer": null
          },
          {
            "blankIndex": 9,
            "score": 0,
            "desc": "pipeline = ___([('scaler', ___),('linreg', ___)])",
            "answer": null
          },
          {
            "blankIndex": 10,
            "score": 0,
            "desc": "pipeline = ___([('scaler', ___),('linreg', ___)])",
            "answer": null
          },
          {
            "blankIndex": 11,
            "score": 0,
            "desc": "pipeline = ___([('scaler', ___),('linreg', ___)])",
            "answer": null
          },
          {
            "blankIndex": 12,
            "score": 0,
            "desc": "___",
            "answer": null
          },
          {
            "blankIndex": 13,
            "score": 0,
            "desc": "pickle.___",
            "answer": null
          },
          {
            "blankIndex": 14,
            "score": 0,
            "desc": "y_pred = ___",
            "answer": null
          },
          {
            "blankIndex": 15,
            "score": 0,
            "desc": "___('2.2.2_results.txt', index=False)",
            "answer": null
          },
          {
            "blankIndex": 16,
            "score": 0,
            "desc": "rf_model = ___(___, random_state=42)",
            "answer": null
          },
          {
            "blankIndex": 17,
            "score": 0,
            "desc": "rf_model = ___(___, random_state=42)",
            "answer": null
          },
          {
            "blankIndex": 18,
            "score": 0,
            "desc": "___",
            "answer": null
          },
          {
            "blankIndex": 19,
            "score": 0,
            "desc": "y_pred_rf = ___",
            "answer": null
          },
          {
            "blankIndex": 20,
            "score": 0,
            "desc": "___('2.2.2_results_rf.txt', index=False)",
            "answer": null
          }
        ],
        "score": 0,
        "answer": null
      },
      {
        "id": "doc_2.2.2",
        "type": "doc",
        "title": "测试报告",
        "sectionId": "2.2.2",
        "prompt": "",
        "docFile": "2.2.2.docx",
        "template": {
          "source": "2.2.2.docx",
          "layout": "sections",
          "sections": [
            {
              "type": "heading",
              "text": "针对线性回归模型"
            },
            {
              "type": "subheading",
              "text": "1、模型性能"
            },
            {
              "type": "table",
              "headers": null,
              "rows": [
                {
                  "label": "训练集得分",
                  "cells": 1
                },
                {
                  "label": "测试集得分",
                  "cells": 1
                }
              ]
            },
            {
              "type": "textarea",
              "label": "2、错误分析",
              "large": true,
              "placeholder": "请填写错误分析"
            },
            {
              "type": "textarea",
              "label": "3、改进建议",
              "large": true,
              "placeholder": "请填写改进建议"
            }
          ]
        },
        "rubric": [
          {
            "id": "M14",
            "score": 3,
            "desc": "正确填写2.2.2.docx测试报告：其中模型性能评估得1分、错误分析得1分，改进建议得1分，总计得3分；"
          }
        ],
        "score": 3,
        "answer": null,
        "docAnswer": [
          "0.826",
          "0.790",
          "线性回归测试集 R² 为 0.790，能解释约 79% 的 mpg 方差，具备一定预测能力，但仍有约 21% 的方差无法解释，存在明显预测误差。主要原因：① 线性假设局限——mpg 与排量、马力、车重等特征之间实际存在非线性与交互关系，线性模型难以充分拟合，在极端油耗区间（高性能车 mpg 偏低、经济型车 mpg 偏高）偏差较大；② 多重共线性——cylinders、displacement、horsepower、weight 等特征高度相关，导致回归系数不稳定；③ 数据质量影响——horsepower 列含 \"?\" 等非数值缺失，已通过转换后删除缺失行处理。",
          "① 更换模型：改用随机森林等非线性集成模型，捕捉特征间的非线性关系与交互，提升 R²、降低预测误差（纠正后随机森林测试集 R² 达 0.887）；② 特征工程：缓解多重共线性，构造衍生特征（如功率重量比 horsepower/weight）；③ 补齐评估指标：除 R² 外补充 RMSE、MAE，直观衡量预测误差；④ 交叉验证与调参：采用交叉验证评估稳定性，对模型超参数进行调优。"
        ]
      }
    ],
    "answer": null
  },
  {
    "id": "2.2.3",
    "code": "2.2.3",
    "name": "日常运动量随机森林预测模型开发与测试",
    "chapter": 2,
    "chapterName": "智能训练",
    "time": "20min",
    "tasks": "随着人们健康意识的增强，越来越多的人开始关注日常运动和健康管理。使用提供的训练数据，补全2.2.3.ipynb代码。选择合适的特征，开发一个预测模型，基于个体性别，个体对运动的看法和个人健康评价来预测个体年龄。利用测试工具对模型进行测试，并对测试结果进行分析，完成测试报告，并运用工具对错误原因进行纠正。\n详细说明如下：\n \n（1）正确加载数据集，并显示前五行的数据\n（2）使用随机森林模型进行模型训练，要求设定自变量和因变量，并根据自变量特征进行模型训练，最终将训练好的模型以文件名2.2.3_model.pkl保存到考生文件夹，结果文件以2.2.3_results.txt保存到考生文件夹。\n（3）使用测试工具对模型进行测试，并记录测试结果，命名2.2.3_report.txt，保存到考生文件夹\n（4）对测试结果进行详细分析，并编写测试报告，包括模型性能评估、错误分析及改进建议，将答案写到答题卷文件中，答题卷文件命名为“2.2.3.docx”，保存到考生文件夹。\n（5）运用工具分析算法中错误案例产生的原因并进行纠正，重新得到模型训练结果，以文件名2.2.3_results_xgb.txt保存到考生文件夹。\n（6）将以上代码以及运行结果，以html格式保存并命名为2.2.3.html，保存到考生文件夹，考生文件夹命名为“准考证号+身份证后6位”。",
    "totalScore": 20,
    "rubric": [
      {
        "id": "M1",
        "score": 2,
        "desc": "正确加载数据集得1分，显示前五行的数据得1分，总计得2分；"
      },
      {
        "id": "M2",
        "score": 2,
        "desc": "将分类变量转为数值变量正确得1分，将年龄段转为数值变量正确得1分，总计得2分；"
      },
      {
        "id": "M3",
        "score": 1,
        "desc": "训练集与测试集的准确划分得1分；"
      },
      {
        "id": "M4",
        "score": 1,
        "desc": "初始化随机森林模型得1分；"
      },
      {
        "id": "M5",
        "score": 1,
        "desc": "训练随机森林模型得1分；"
      },
      {
        "id": "M6",
        "score": 1,
        "desc": "保存随机森林模型文件得1分；"
      },
      {
        "id": "M7",
        "score": 1,
        "desc": "使用随机森林模型在测试集上进行结果预测得1分；"
      },
      {
        "id": "M8",
        "score": 1,
        "desc": "计算随机森林模型训练集以及测试集分数得1分；"
      },
      {
        "id": "M9",
        "score": 1,
        "desc": "计算随机森林模型均方误差得1分；"
      },
      {
        "id": "M10",
        "score": 1,
        "desc": "计算随机森林模型决定系数得1分；"
      },
      {
        "id": "M11",
        "score": 1,
        "desc": "初始化XGBoost回归模型得1分；"
      },
      {
        "id": "M12",
        "score": 1,
        "desc": "训练XGBoost回归模型得1分；"
      },
      {
        "id": "M13",
        "score": 1,
        "desc": "使用XGBoost回归模型在测试集上进行结果预测得1分；"
      },
      {
        "id": "M14",
        "score": 1,
        "desc": "计算XGBoost回归模型训练集以及测试集分数得1分；"
      },
      {
        "id": "M15",
        "score": 1,
        "desc": "计算XGBoost回归模型均方误差和决定系数得1分；"
      },
      {
        "id": "M16",
        "score": 3,
        "desc": "正确填写2.2.3.docx测试报告：其中模型性能评估得1分、错误分析得1分，改进建议得1分，总计得3分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "随着人们健康意识的增强，越来越多的人开始关注日常运动和健康管理。使用提供的训练数据，补全2.2.3.ipynb代码。选择合适的特征，开发一个预测模型，基于个体性别，个体对运动的看法和个人健康评价来预测个体年龄。利用测试工具对模型进行测试，并对测试结果进行分析，完成测试报告，并运用工具对错误原因进行纠正。\n详细说明如下：\n（1）正确加载数据集，并显示前五行的数据\n（2）使用随机森林模型进行模型训练，要求设定自变量和因变量，并根据自变量特征进行模型训练，最终将训练好的模型以文件名2.2.3_model.pkl保存到考生文件夹，结果文件以2.2.3_results.txt保存到考生文件夹。\n（3）使用测试工具对模型进行测试，并记录测试结果，命名2.2.3_report.txt，保存到考生文件夹\n（4）对测试结果进行详细分析，并编写测试报告，包括模型性能评估、错误分析及改进建议，将答案写到答题卷文件中，答题卷文件命名为“2.2.3.docx”，保存到考生文件夹。\n（5）运用工具分析算法中错误案例产生的原因并进行纠正，重新得到模型训练结果，以文件名2.2.3_results_xgb.txt保存到考生文件夹。\n（6）将以上代码以及运行结果，以html格式保存并命名为2.2.3.html，保存到考生文件夹，考生文件夹命名为“准考证号+身份证后6位”。",
        "score": 0
      },
      {
        "id": "code_0",
        "type": "code",
        "title": "df = ___",
        "code": "import pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import RandomForestRegressor\nimport pickle\nfrom sklearn.metrics import mean_squared_error, r2_score\nimport xgboost as xgb\n\ndf = ___\n\nprint(___)\n\ndf = df.applymap(lambda x: x.strip() if isinstance(x, str) else x)\n\ndf.columns = df.columns.str.strip()\n\nX = df[['Your gender', 'How important is exercise to you ?', 'How healthy do you consider yourself?']]\nX = ___(X)  # 将分类变量转为数值变量\n\ny = ___(lambda x: int(x.split(' ')[0]))  # 假设年龄段为整数\n\nX_train, X_test, y_train, y_test = ___(___, random_state=42)\n\nrf_model = ___(___, random_state=42)\n___\n\nwith open('2.2.3_model.pkl', 'wb') as model_file:\n    pickle.___\n\ny_pred = ___\nresults_df = pd.DataFrame(y_pred, columns=['预测结果'])\nresults_df.to_csv('2.2.3_results.txt', index=False)\n\ntrain_score = ___   #训练集分数\ntest_score = ___    #测试集分数\nmse = ___  #均方误差\nr2 = ___  #决定系数\nwith open('2.2.3_report.txt', 'w') as report_file:\n    report_file.write(f'训练集得分: {train_score}\\n')\n    report_file.write(f'测试集得分: {test_score}\\n')\n    report_file.write(f'均方误差(MSE): {mse}\\n')\n    report_file.write(f'决定系数(R^2): {r2}\\n')\n\nxgb_model = ___(___, random_state=42)\n___\ny_pred_xgb = ___\n\nresults_df_xgb = pd.DataFrame(y_pred_xgb, columns=['预测结果'])\nresults_df_xgb.to_csv('2.2.3_results_xgb.txt', index=False)\n\nwith open('2.2.3_report_xgb.txt', 'w') as xgb_report_file:\n    xgb_report_file.write(f'XGBoost训练集得分: {___}\\n')\n    xgb_report_file.write(f'XGBoost测试集得分: {___}\\n')\n    xgb_report_file.write(f'XGBoost均方误差(MSE): {___}\\n')\n    xgb_report_file.write(f'XGBoost决定系数(R^2): {___)}\\n')",
        "cellIndex": 0,
        "blanks": [
          {
            "blankIndex": 0,
            "score": 0,
            "desc": "df = ___",
            "answer": null
          },
          {
            "blankIndex": 1,
            "score": 0,
            "desc": "print(___)",
            "answer": null
          },
          {
            "blankIndex": 2,
            "score": 0,
            "desc": "X = ___(X)  # 将分类变量转为数值变量",
            "answer": null
          },
          {
            "blankIndex": 3,
            "score": 0,
            "desc": "y = ___(lambda x: int(x.split(' ')[0]))  # 假设年龄段为整数",
            "answer": null
          },
          {
            "blankIndex": 4,
            "score": 0,
            "desc": "X_train, X_test, y_train, y_test = ___(___, random_state=42)",
            "answer": null
          },
          {
            "blankIndex": 5,
            "score": 0,
            "desc": "X_train, X_test, y_train, y_test = ___(___, random_state=42)",
            "answer": null
          },
          {
            "blankIndex": 6,
            "score": 0,
            "desc": "rf_model = ___(___, random_state=42)",
            "answer": null
          },
          {
            "blankIndex": 7,
            "score": 0,
            "desc": "rf_model = ___(___, random_state=42)",
            "answer": null
          },
          {
            "blankIndex": 8,
            "score": 0,
            "desc": "___",
            "answer": null
          },
          {
            "blankIndex": 9,
            "score": 0,
            "desc": "pickle.___",
            "answer": null
          },
          {
            "blankIndex": 10,
            "score": 0,
            "desc": "y_pred = ___",
            "answer": null
          },
          {
            "blankIndex": 11,
            "score": 0,
            "desc": "train_score = ___   #训练集分数",
            "answer": null
          },
          {
            "blankIndex": 12,
            "score": 0,
            "desc": "test_score = ___    #测试集分数",
            "answer": null
          },
          {
            "blankIndex": 13,
            "score": 0,
            "desc": "mse = ___  #均方误差",
            "answer": null
          },
          {
            "blankIndex": 14,
            "score": 0,
            "desc": "r2 = ___  #决定系数",
            "answer": null
          },
          {
            "blankIndex": 15,
            "score": 0,
            "desc": "xgb_model = ___(___, random_state=42)",
            "answer": null
          },
          {
            "blankIndex": 16,
            "score": 0,
            "desc": "xgb_model = ___(___, random_state=42)",
            "answer": null
          },
          {
            "blankIndex": 17,
            "score": 0,
            "desc": "___",
            "answer": null
          },
          {
            "blankIndex": 18,
            "score": 0,
            "desc": "y_pred_xgb = ___",
            "answer": null
          },
          {
            "blankIndex": 19,
            "score": 0,
            "desc": "xgb_report_file.write(f'XGBoost训练集得分: {___}\\n')",
            "answer": null
          },
          {
            "blankIndex": 20,
            "score": 0,
            "desc": "xgb_report_file.write(f'XGBoost测试集得分: {___}\\n')",
            "answer": null
          },
          {
            "blankIndex": 21,
            "score": 0,
            "desc": "xgb_report_file.write(f'XGBoost均方误差(MSE): {___}\\n')",
            "answer": null
          },
          {
            "blankIndex": 22,
            "score": 0,
            "desc": "xgb_report_file.write(f'XGBoost决定系数(R^2): {___)}\\n')",
            "answer": null
          }
        ],
        "score": 0,
        "answer": null
      },
      {
        "id": "doc_2.2.3",
        "type": "doc",
        "title": "测试报告",
        "sectionId": "2.2.3",
        "prompt": "",
        "docFile": "2.2.3.docx",
        "template": {
          "source": "2.2.3.docx",
          "layout": "sections",
          "sections": [
            {
              "type": "heading",
              "text": "针对随机森林模型"
            },
            {
              "type": "subheading",
              "text": "1、模型性能"
            },
            {
              "type": "table",
              "headers": null,
              "rows": [
                {
                  "label": "均方误差（MSE）",
                  "cells": 1
                },
                {
                  "label": "平均绝对误差（MAE）",
                  "cells": 1
                },
                {
                  "label": "决定系数（R²）",
                  "cells": 1
                }
              ]
            },
            {
              "type": "textarea",
              "label": "2、错误分析",
              "large": true,
              "placeholder": "请填写错误分析"
            },
            {
              "type": "textarea",
              "label": "3、改进建议",
              "large": true,
              "placeholder": "请填写改进建议"
            }
          ]
        },
        "rubric": [
          {
            "id": "M16",
            "score": 3,
            "desc": "正确填写2.2.3.docx测试报告：其中模型性能评估得1分、错误分析得1分，改进建议得1分，总计得3分；"
          }
        ],
        "score": 3,
        "answer": null,
        "docAnswer": [
          "109.77",
          "",
          "-0.092",
          "随机森林模型预测效果很差：训练集 R² 仅 0.124，测试集 R² 为 -0.092（低于 0 表示预测效果不如直接取均值），MSE 高达 109.77。主要原因：① 自变量仅选取性别、运动重要性、健康自评三个分类特征，与年龄的关联性弱，信息量不足以预测年龄；② 因变量将年龄段（如 \"19 to 25\"）取区间下限转为整数，损失了区间信息；③ 模型未进行超参数调优，n_estimators=100 为默认值。",
          "① 更换模型：改用 XGBoost 梯度提升树重新训练（纠正后测试集 R² 为 -0.091，MSE 为 109.65，略有改善但仍不理想）；② 特征工程：引入数据集中与年龄相关性更强的特征，优化年龄段编码方式；③ 超参数调优：对 n_estimators、max_depth 等参数进行调优，提升模型拟合能力。"
        ]
      }
    ],
    "answer": null
  },
  {
    "id": "2.2.4",
    "code": "2.2.4",
    "name": "低碳生活行为影响因素预测线性回归模型开发与测试",
    "chapter": 2,
    "chapterName": "智能训练",
    "time": "20min",
    "tasks": "在应对气候变化的背景下，了解和促进低碳生活行为变得越来越重要。现要求根据提供的“大学生低碳生活行为的影响因素数据集”，补全2.2.4.ipynb代码。选择合适的特征，开发一个预测大学生低碳生活行为的模型。利用测试工具对模型进行测试，并对测试结果进行分析，完成测试报告，并运用工具对错误原因进行纠正。\n（1）正确加载数据集，并显示前五行的数据。\n（2）请使用线性回归模型，要求设定自变量和因变量，并根据自变量特征进行模型训练，最终将训练好的模型以文件名2.2.4_model.pkl保存到考生文件夹，结果文件以2.2.4_results.txt保存到考生文件夹。\n（3）使用测试工具对模型进行测试，并记录测试结果，命名2.2.4_report.txt，保存到考生文件夹。\n（4）对测试结果进行详细分析，并编写测试报告，包括模型性能评估、错误分析及改进建议，将答案写到答题卷文件中，答题卷文件命名为“2.2.4.docx”，保存到考生文件夹。\n（5）运用工具分析算法中错误案例产生的原因并进行纠正，重新得到模型训练结果，以文件名2.2.4_results_xg.txt保存到考生文件夹。\n（6）将以上代码以及运行结果，以html格式保存并命名为2.2.4.html，保存到考生文件夹，考生文件夹命名为“准考证号+身份证后6位”。",
    "totalScore": 20,
    "rubric": [
      {
        "id": "M1",
        "score": 2,
        "desc": "正确加载数据集得1分，显示前五行的数据得1分，总计得2分；"
      },
      {
        "id": "M2",
        "score": 1,
        "desc": "删除不必要的列得1分；"
      },
      {
        "id": "M3",
        "score": 2,
        "desc": "正确定义自变量得1分，因变量得1分，总计得2分；"
      },
      {
        "id": "M4",
        "score": 1,
        "desc": "训练集与测试集的准确划分得1分；"
      },
      {
        "id": "M5",
        "score": 1,
        "desc": "初始化线性回归模型得1分；"
      },
      {
        "id": "M6",
        "score": 1,
        "desc": "训练线性回归模型得1分；"
      },
      {
        "id": "M7",
        "score": 1,
        "desc": "正确保存线性回归模型文件得1分；"
      },
      {
        "id": "M8",
        "score": 1,
        "desc": "使用线性回归模型在测试集上进行结果预测得1分；"
      },
      {
        "id": "M9",
        "score": 1,
        "desc": "保存线性回归模型预测的结果得1分；"
      },
      {
        "id": "M10",
        "score": 2,
        "desc": "正确计算线性回归模型的均方误差得1分，决定系数得1分，总计得2分；"
      },
      {
        "id": "M11",
        "score": 1,
        "desc": "初始化XGBoost模型得1分；"
      },
      {
        "id": "M12",
        "score": 1,
        "desc": "训练XGBoost模型得1分；"
      },
      {
        "id": "M13",
        "score": 1,
        "desc": "使用XGBoost模型进行预测结果得1分；"
      },
      {
        "id": "M14",
        "score": 1,
        "desc": "正确计算XGBoost模型的均方误差和决定系数得1分；"
      },
      {
        "id": "M15",
        "score": 3,
        "desc": "正确填写2.2.4.docx测试报告：其中模型性能评估得1分、错误分析得1分，改进建议得1分，总计得3分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "在应对气候变化的背景下，了解和促进低碳生活行为变得越来越重要。现要求根据提供的“大学生低碳生活行为的影响因素数据集”，补全2.2.4.ipynb代码。选择合适的特征，开发一个预测大学生低碳生活行为的模型。利用测试工具对模型进行测试，并对测试结果进行分析，完成测试报告，并运用工具对错误原因进行纠正。\n（1）正确加载数据集，并显示前五行的数据。\n（2）请使用线性回归模型，要求设定自变量和因变量，并根据自变量特征进行模型训练，最终将训练好的模型以文件名2.2.4_model.pkl保存到考生文件夹，结果文件以2.2.4_results.txt保存到考生文件夹。\n（3）使用测试工具对模型进行测试，并记录测试结果，命名2.2.4_report.txt，保存到考生文件夹。\n（4）对测试结果进行详细分析，并编写测试报告，包括模型性能评估、错误分析及改进建议，将答案写到答题卷文件中，答题卷文件命名为“2.2.4.docx”，保存到考生文件夹。\n（5）运用工具分析算法中错误案例产生的原因并进行纠正，重新得到模型训练结果，以文件名2.2.4_results_xg.txt保存到考生文件夹。\n（6）将以上代码以及运行结果，以html格式保存并命名为2.2.4.html，保存到考生文件夹，考生文件夹命名为“准考证号+身份证后6位”。",
        "score": 0
      },
      {
        "id": "code_0",
        "type": "code",
        "title": "data = ___",
        "code": "import pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.metrics import mean_squared_error, r2_score\nimport joblib\nfrom xgboost import XGBRegressor\n\ndata = ___\n\nprint(___)\n\ndata_cleaned = ___(___=['序号', '所用时间'])  # 删除不必要的列\ndata_cleaned = pd.get_dummies(data_cleaned, drop_first=True)  # 将分类变量转换为哑变量/指示变量\n\ntarget = '5.您进行过绿色低碳的相关生活方式吗?'  # 确保这是目标变量\n\nX = ___(___=___)\ny = ___\n\nX_train, X_test, y_train, y_test = ___(___, random_state=42)\n\nmodel = ___\n___\n\nmodel_filename = '2.2.4_model.pkl'\njoblib.___\n\ny_pred = ___\n\nresults = pd.DataFrame({'实际值': y_test, '预测值': y_pred})\nresults_filename = '2.2.4_results.txt'\n___(___, index=False, sep='\\t')  # 使用制表符分隔值保存到文本文件\n\nreport_filename = '2.2.4_report.txt'\nwith open(report_filename, 'w') as f:\n    f.write(f'均方误差: {___}\\n')\n    f.write(f'决定系数: {___}\\n')\n    \nxgb_model = ___(___, subsample=0.8, colsample_bytree=0.8)\n___\n\ny_pred_xg = ___\n\nresults_xg_filename = '2.2.4_results_xg.txt'\nresults_xg = pd.DataFrame({'实际值': y_test, '预测值': y_pred_xg})\nresults_xg.to_csv(results_xg_filename, index=False, sep='\\t')  # 使用制表符分隔值保存到文本文件\n\nreport_filename_xgb = '2.2.4_report_xgb.txt'\nwith open(report_filename_xgb, 'w') as f:\n    f.write(f'均方误差: {___}\\n')\n    f.write(f'决定系数: {___}\\n')",
        "cellIndex": 0,
        "blanks": [
          {
            "blankIndex": 0,
            "score": 0,
            "desc": "data = ___",
            "answer": null
          },
          {
            "blankIndex": 1,
            "score": 0,
            "desc": "print(___)",
            "answer": null
          },
          {
            "blankIndex": 2,
            "score": 0,
            "desc": "data_cleaned = ___(___=['序号', '所用时间'])  # 删除不必要的列",
            "answer": null
          },
          {
            "blankIndex": 3,
            "score": 0,
            "desc": "data_cleaned = ___(___=['序号', '所用时间'])  # 删除不必要的列",
            "answer": null
          },
          {
            "blankIndex": 4,
            "score": 0,
            "desc": "X = ___(___=___)",
            "answer": null
          },
          {
            "blankIndex": 5,
            "score": 0,
            "desc": "X = ___(___=___)",
            "answer": null
          },
          {
            "blankIndex": 6,
            "score": 0,
            "desc": "X = ___(___=___)",
            "answer": null
          },
          {
            "blankIndex": 7,
            "score": 0,
            "desc": "y = ___",
            "answer": null
          },
          {
            "blankIndex": 8,
            "score": 0,
            "desc": "X_train, X_test, y_train, y_test = ___(___, random_state=42)",
            "answer": null
          },
          {
            "blankIndex": 9,
            "score": 0,
            "desc": "X_train, X_test, y_train, y_test = ___(___, random_state=42)",
            "answer": null
          },
          {
            "blankIndex": 10,
            "score": 0,
            "desc": "model = ___",
            "answer": null
          },
          {
            "blankIndex": 11,
            "score": 0,
            "desc": "___",
            "answer": null
          },
          {
            "blankIndex": 12,
            "score": 0,
            "desc": "joblib.___",
            "answer": null
          },
          {
            "blankIndex": 13,
            "score": 0,
            "desc": "y_pred = ___",
            "answer": null
          },
          {
            "blankIndex": 14,
            "score": 0,
            "desc": "___(___, index=False, sep='\\t')  # 使用制表符分隔值保存到文本文件",
            "answer": null
          },
          {
            "blankIndex": 15,
            "score": 0,
            "desc": "___(___, index=False, sep='\\t')  # 使用制表符分隔值保存到文本文件",
            "answer": null
          },
          {
            "blankIndex": 16,
            "score": 0,
            "desc": "f.write(f'均方误差: {___}\\n')",
            "answer": null
          },
          {
            "blankIndex": 17,
            "score": 0,
            "desc": "f.write(f'决定系数: {___}\\n')",
            "answer": null
          },
          {
            "blankIndex": 18,
            "score": 0,
            "desc": "xgb_model = ___(___, subsample=0.8, colsample_bytree=0.8)",
            "answer": null
          },
          {
            "blankIndex": 19,
            "score": 0,
            "desc": "xgb_model = ___(___, subsample=0.8, colsample_bytree=0.8)",
            "answer": null
          },
          {
            "blankIndex": 20,
            "score": 0,
            "desc": "___",
            "answer": null
          },
          {
            "blankIndex": 21,
            "score": 0,
            "desc": "y_pred_xg = ___",
            "answer": null
          },
          {
            "blankIndex": 22,
            "score": 0,
            "desc": "f.write(f'均方误差: {___}\\n')",
            "answer": null
          },
          {
            "blankIndex": 23,
            "score": 0,
            "desc": "f.write(f'决定系数: {___}\\n')",
            "answer": null
          }
        ],
        "score": 0,
        "answer": null
      },
      {
        "id": "doc_2.2.4",
        "type": "doc",
        "title": "测试报告",
        "sectionId": "2.2.4",
        "prompt": "",
        "docFile": "2.2.4.docx",
        "template": {
          "source": "2.2.4.docx",
          "layout": "sections",
          "sections": [
            {
              "type": "heading",
              "text": "针对线性回归模型"
            },
            {
              "type": "subheading",
              "text": "1、模型性能"
            },
            {
              "type": "table",
              "headers": null,
              "rows": [
                {
                  "label": "训练集得分",
                  "cells": 1
                },
                {
                  "label": "测试集得分",
                  "cells": 1
                },
                {
                  "label": "均方误差（MSE）",
                  "cells": 1
                },
                {
                  "label": "决定系数（R²）",
                  "cells": 1
                }
              ]
            },
            {
              "type": "textarea",
              "label": "2、错误分析",
              "large": true,
              "placeholder": "请填写错误分析"
            },
            {
              "type": "textarea",
              "label": "3、改进建议",
              "large": true,
              "placeholder": "请填写改进建议"
            }
          ]
        },
        "rubric": [
          {
            "id": "M15",
            "score": 3,
            "desc": "正确填写2.2.4.docx测试报告：其中模型性能评估得1分、错误分析得1分，改进建议得1分，总计得3分；"
          }
        ],
        "score": 3,
        "answer": null,
        "docAnswer": [
          "",
          "",
          "0.025",
          "0.185",
          "线性回归模型预测效果较差：R² 仅 0.185，仅能解释约 18.5% 的方差，MSE 为 0.025。主要原因：① 低碳生活行为受性别、年级、态度、行为意愿等多因素影响，因素间存在非线性关系与交互作用，线性模型难以充分拟合；② 经 get_dummies 编码后自变量较多，部分变量间存在多重共线性，影响回归系数稳定性；③ 问卷数据主观性强，存在一定噪声。",
          "① 更换模型：改用 XGBoost 梯度提升树重新训练（纠正后 R² 提升至 0.423，MSE 降至 0.017）；② 特征工程：对特征进行筛选或降维，缓解多重共线性；③ 超参数调优：对模型参数进行调优，进一步提升预测精度。"
        ]
      }
    ],
    "answer": null
  },
  {
    "id": "2.2.5",
    "code": "2.2.5",
    "name": "智能步数预测模型开发与测试",
    "chapter": 2,
    "chapterName": "智能训练",
    "time": "20min",
    "tasks": "随着健康意识的增强，越来越多的人开始使用智能设备跟踪自己的日常活动。准确预测每日步数对于用户来说至关重要，因为它可以帮助他们更好地管理健康状况，设定合理的运动目标，并提高生活质量。现要求根据提供的预处理好的fitness analysis数据集，补全2.2.5.ipynb代码。选择合适的特征，开发一个步数预测模型，对用户未来一段时间内的每日步数进行预测。利用测试工具对模型进行测试，并对测试结果进行分析，完成测试报告，并运用工具对错误原因进行纠正。\n（1）正确加载数据集，并显示前五行的数据。\n（2）请使用决策树模型，要求设定自变量和因变量（设定daily_steps为目标变量），并根据自变量特征进行模型训练，最终将训练好的模型以文件名2.2.5_model.pkl保存到考生文件夹，结果文件以2.2.5_results.txt保存到考生文件夹。\n（3）使用测试工具对模型进行测试，并记录测试结果，命名2.2.5_report.txt，保存到考生文件夹。\n（4）对测试结果进行详细分析，并编写测试报告，包括模型性能评估、错误分析及改进建议，将答案写到答题卷文件中，答题卷文件命名为“2.2.5.docx”，保存到考生文件夹。\n（5）将以上代码以及运行结果，以html格式保存并命名为2.2.5.html，保存到考生文件夹，考生文件夹命名为“准考证号+身份证后6位”。",
    "totalScore": 20,
    "rubric": [
      {
        "id": "M1",
        "score": 2,
        "desc": "正确加载数据集得1分，显示前五行的数据得1分，总计得2分；"
      },
      {
        "id": "M2",
        "score": 2,
        "desc": "正确将分类变量转为数值变量得1分，设置目标变量得1分，总计得2分；"
      },
      {
        "id": "M3",
        "score": 1,
        "desc": "训练集与测试集的准确划分得1分；"
      },
      {
        "id": "M4",
        "score": 2,
        "desc": "初始化决策树模型得2分；"
      },
      {
        "id": "M5",
        "score": 2,
        "desc": "训练模型得2分；"
      },
      {
        "id": "M6",
        "score": 1,
        "desc": "正确保存模型文件得1分；"
      },
      {
        "id": "M7",
        "score": 1,
        "desc": "在测试集上进行预测得1分；"
      },
      {
        "id": "M8",
        "score": 1,
        "desc": "保存预测结果得1分；"
      },
      {
        "id": "M9",
        "score": 2,
        "desc": "正确生成模型测试报告得2分；"
      },
      {
        "id": "M10",
        "score": 1,
        "desc": "正确计算模型的均方误差得1分；"
      },
      {
        "id": "M11",
        "score": 1,
        "desc": "正确计算模型的平均绝对误差得1分；"
      },
      {
        "id": "M12",
        "score": 1,
        "desc": "正确计算模型的决定系数得1分；"
      },
      {
        "id": "M13",
        "score": 3,
        "desc": "正确填写2.2.5.docx测试报告：其中模型性能评估得1分、错误分析得1分，改进建议得1分，总计得3分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "随着健康意识的增强，越来越多的人开始使用智能设备跟踪自己的日常活动。准确预测每日步数对于用户来说至关重要，因为它可以帮助他们更好地管理健康状况，设定合理的运动目标，并提高生活质量。现要求根据提供的预处理好的fitness analysis数据集，补全2.2.5.ipynb代码。选择合适的特征，开发一个步数预测模型，对用户未来一段时间内的每日步数进行预测。利用测试工具对模型进行测试，并对测试结果进行分析，完成测试报告，并运用工具对错误原因进行纠正。\n（1）正确加载数据集，并显示前五行的数据。\n（2）请使用决策树模型，要求设定自变量和因变量（设定daily_steps为目标变量），并根据自变量特征进行模型训练，最终将训练好的模型以文件名2.2.5_model.pkl保存到考生文件夹，结果文件以2.2.5_results.txt保存到考生文件夹。\n（3）使用测试工具对模型进行测试，并记录测试结果，命名2.2.5_report.txt，保存到考生文件夹。\n（4）对测试结果进行详细分析，并编写测试报告，包括模型性能评估、错误分析及改进建议，将答案写到答题卷文件中，答题卷文件命名为“2.2.5.docx”，保存到考生文件夹。\n（5）将以上代码以及运行结果，以html格式保存并命名为2.2.5.html，保存到考生文件夹，考生文件夹命名为“准考证号+身份证后6位”。",
        "score": 0
      },
      {
        "id": "code_0",
        "type": "code",
        "title": "df = ___",
        "code": "import pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.tree import DecisionTreeRegressor\nimport pickle\nfrom sklearn.metrics import mean_squared_error, mean_absolute_error, r2_score\n\ndf = ___\n\nprint(___)\n\nX = df[['Your gender ', 'How important is exercise to you ?', 'How healthy do you consider yourself?']]\nX = ___(X)  # 将分类变量转为数值变量\n\ny = ___  \n\nX_train, X_test, y_train, y_test = ___(___, random_state=42)\n\n___ = ___(random_state=42)\n___\n\nwith open('2.2.5_model.pkl', 'wb') as model_file:\n    pickle.___\n\ny_pred = ___\n\nresults = pd.DataFrame({'实际值': y_test, '预测值': y_pred})\nresults_filename = '2.2.5_results.txt'\n___(___, index=False, sep='\\t')  \n\nreport_filename = '2.2.5_report.txt'\nwith open(___) as f:\n    f.write(f'均方误差: {___}\\n')\n    f.write(f'平均绝对误差: {___}\\n')\n    f.write(f'决定系数: {___}\\n')",
        "cellIndex": 0,
        "blanks": [
          {
            "blankIndex": 0,
            "score": 0,
            "desc": "df = ___",
            "answer": null
          },
          {
            "blankIndex": 1,
            "score": 0,
            "desc": "print(___)",
            "answer": null
          },
          {
            "blankIndex": 2,
            "score": 0,
            "desc": "X = ___(X)  # 将分类变量转为数值变量",
            "answer": null
          },
          {
            "blankIndex": 3,
            "score": 0,
            "desc": "y = ___",
            "answer": null
          },
          {
            "blankIndex": 4,
            "score": 0,
            "desc": "X_train, X_test, y_train, y_test = ___(___, random_state=42)",
            "answer": null
          },
          {
            "blankIndex": 5,
            "score": 0,
            "desc": "X_train, X_test, y_train, y_test = ___(___, random_state=42)",
            "answer": null
          },
          {
            "blankIndex": 6,
            "score": 0,
            "desc": "___ = ___(random_state=42)",
            "answer": null
          },
          {
            "blankIndex": 7,
            "score": 0,
            "desc": "___ = ___(random_state=42)",
            "answer": null
          },
          {
            "blankIndex": 8,
            "score": 0,
            "desc": "___",
            "answer": null
          },
          {
            "blankIndex": 9,
            "score": 0,
            "desc": "pickle.___",
            "answer": null
          },
          {
            "blankIndex": 10,
            "score": 0,
            "desc": "y_pred = ___",
            "answer": null
          },
          {
            "blankIndex": 11,
            "score": 0,
            "desc": "___(___, index=False, sep='\\t')",
            "answer": null
          },
          {
            "blankIndex": 12,
            "score": 0,
            "desc": "___(___, index=False, sep='\\t')",
            "answer": null
          },
          {
            "blankIndex": 13,
            "score": 0,
            "desc": "with open(___) as f:",
            "answer": null
          },
          {
            "blankIndex": 14,
            "score": 0,
            "desc": "f.write(f'均方误差: {___}\\n')",
            "answer": null
          },
          {
            "blankIndex": 15,
            "score": 0,
            "desc": "f.write(f'平均绝对误差: {___}\\n')",
            "answer": null
          },
          {
            "blankIndex": 16,
            "score": 0,
            "desc": "f.write(f'决定系数: {___}\\n')",
            "answer": null
          }
        ],
        "score": 0,
        "answer": null
      },
      {
        "id": "doc_2.2.5",
        "type": "doc",
        "title": "测试报告",
        "sectionId": "2.2.5",
        "prompt": "",
        "docFile": "2.2.5.docx",
        "template": {
          "source": "2.2.5.docx",
          "layout": "sections",
          "sections": [
            {
              "type": "heading",
              "text": "针对决策树模型"
            },
            {
              "type": "subheading",
              "text": "1、模型性能"
            },
            {
              "type": "table",
              "headers": null,
              "rows": [
                {
                  "label": "均方误差（MSE）",
                  "cells": 1
                },
                {
                  "label": "决定系数（R²）",
                  "cells": 1
                }
              ]
            },
            {
              "type": "textarea",
              "label": "2、错误分析",
              "large": true,
              "placeholder": "请填写错误分析"
            },
            {
              "type": "textarea",
              "label": "3、改进建议",
              "large": true,
              "placeholder": "请填写改进建议"
            }
          ]
        },
        "rubric": [
          {
            "id": "M13",
            "score": 3,
            "desc": "正确填写2.2.5.docx测试报告：其中模型性能评估得1分、错误分析得1分，改进建议得1分，总计得3分；"
          }
        ],
        "score": 3,
        "answer": null,
        "docAnswer": [
          "8096170.76",
          "-0.154",
          "决策树模型预测效果很差：R² 为 -0.154（低于 0 表示不如直接取均值），MSE 高达 8096170.76，MAE 为 2421.83。主要原因：① 自变量仅选取性别、运动重要性、健康自评三个分类特征，与每日步数关联性弱，特征信息量不足；② 决策树未设置 max_depth、min_samples_leaf 等约束，易过拟合训练数据，泛化能力差；③ 决策树对数据变化敏感，模型稳定性不足。",
          "① 抑制过拟合：通过剪枝、限制树深（max_depth）、增大叶节点最小样本数（min_samples_leaf）约束模型复杂度；② 改用集成方法：采用随机森林或 XGBoost，降低方差、提升泛化能力；③ 特征工程：引入与步数相关性更强的特征（如运动频率、健身水平等）；④ 超参数调优：对模型参数进行交叉验证与调优。"
        ]
      }
    ],
    "answer": null
  },
  {
    "id": "3.1.1",
    "code": "3.1.1",
    "name": "智能音箱产品的数据分析与优化",
    "chapter": 3,
    "chapterName": "智能系统设计",
    "time": "20min",
    "tasks": "智能音箱作为智能家居生态的重要组成部分，近年来经历了爆炸式的增长。随着人工智能技术的成熟，尤其是自然语言处理（NLP）和语音识别技术的进步，智能音箱已经成为许多家庭中不可或缺的智能设备。它们不仅能够播放音乐、提供天气预报和新闻更新，还能控制家中的智能设备，设定提醒，甚至帮助用户购物。然而，随着市场竞争的加剧，智能音箱制造商面临着如何持续优化产品性能，提升用户体验的挑战。数据分析在智能音箱的持续优化中扮演着核心角色。通过对用户行为的深入挖掘，企业可以了解用户偏好、使用模式和潜在的痛点。例如，分析用户何时最常使用智能音箱、他们最喜欢的功能是什么、以及哪些功能的响应时间过长等问题，可以帮助企业做出有针对性的改进决策。\n（1）你作为人工智能训练师，根据给定的数据集（智能音箱数据集.xlsx），从以下三方面：\n用户使用习惯：分析哪些功能最常被使用；\n功能使用频率：识别最受欢迎的功能和较少使用的功能；\n响应时间：考察不同功能的平均响应时间，找出可能的瓶颈。\n给出一份在用户使用习惯、功能使用频率和响应时间方面的分析报告，将其保存为docx文件，命名为3.1.1-1.docx。\n（2）为了进一步提升用户体验，给出智能音箱产品的3个优化方向和对应解决方案，将其保存为docx文件，命名为3.1.1-2.docx。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
    "totalScore": 15,
    "rubric": [
      {
        "id": "M1",
        "score": 3,
        "desc": "回答用户使用习惯中最常被使用的三个功能：每个功能得1分，本项最高得3分；"
      },
      {
        "id": "M2",
        "score": 3,
        "desc": "回答最受欢迎的功能和较少使用的功能：最受欢迎的功能得1分，较少使用的功能每个得1分，本项最高得3分；"
      },
      {
        "id": "M3",
        "score": 3,
        "desc": "回答不同功能的平均响应时间：响应时间较长的功能得1分；响应时间适中的功能得1分；响应时间较短的功能的1分；本项最高得3分；"
      },
      {
        "id": "M4",
        "score": 6,
        "desc": "回答优化方向和该方向对应解决方案：每1个正确的优化方向得1分，对应解决方案得1分，本项最多得6分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "智能音箱作为智能家居生态的重要组成部分，近年来经历了爆炸式的增长。随着人工智能技术的成熟，尤其是自然语言处理（NLP）和语音识别技术的进步，智能音箱已经成为许多家庭中不可或缺的智能设备。它们不仅能够播放音乐、提供天气预报和新闻更新，还能控制家中的智能设备，设定提醒，甚至帮助用户购物。然而，随着市场竞争的加剧，智能音箱制造商面临着如何持续优化产品性能，提升用户体验的挑战。数据分析在智能音箱的持续优化中扮演着核心角色。通过对用户行为的深入挖掘，企业可以了解用户偏好、使用模式和潜在的痛点。例如，分析用户何时最常使用智能音箱、他们最喜欢的功能是什么、以及哪些功能的响应时间过长等问题，可以帮助企业做出有针对性的改进决策。\n（1）你作为人工智能训练师，根据给定的数据集（智能音箱数据集.xlsx），从以下三方面：\n用户使用习惯：分析哪些功能最常被使用；\n功能使用频率：识别最受欢迎的功能和较少使用的功能；\n响应时间：考察不同功能的平均响应时间，找出可能的瓶颈。\n给出一份在用户使用习惯、功能使用频率和响应时间方面的分析报告，将其保存为docx文件，命名为3.1.1-1.docx。\n（2）为了进一步提升用户体验，给出智能音箱产品的3个优化方向和对应解决方案，将其保存为docx文件，命名为3.1.1-2.docx。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
        "score": 0
      },
      {
        "id": "doc_3.1.1",
        "type": "doc",
        "title": "分析报告",
        "sectionId": "3.1.1",
        "prompt": "",
        "docFile": "3.1.1.docx",
        "template": {
          "source": "3.1.1.docx",
          "layout": "sections",
          "sections": [
            {
              "type": "subheading",
              "text": "1、分析报告（选择素材中的功能调用类型填写）"
            },
            {
              "type": "group_title",
              "text": "用户使用习惯"
            },
            {
              "type": "inline_row",
              "label": "最常被使用的功能：",
              "cells": 4
            },
            {
              "type": "group_title",
              "text": "功能使用频率"
            },
            {
              "type": "table",
              "headers": null,
              "rows": [
                {
                  "label": "最受欢迎的功能",
                  "cells": 1
                },
                {
                  "label": "较少使用的功能",
                  "cells": 3
                }
              ]
            },
            {
              "type": "group_title",
              "text": "响应时间分析"
            },
            {
              "type": "table",
              "headers": null,
              "rows": [
                {
                  "label": "响应时间较长的功能",
                  "cells": 1
                },
                {
                  "label": "响应时间适中的功能",
                  "cells": 3
                },
                {
                  "label": "响应时间较短的功能",
                  "cells": 1
                }
              ]
            },
            {
              "type": "subheading",
              "text": "2、优化方向及解决方案"
            },
            {
              "type": "textarea",
              "label": "优化方向1：",
              "large": true,
              "placeholder": "请在此填写"
            },
            {
              "type": "textarea",
              "label": "对应解决方案1：",
              "large": true,
              "placeholder": "请在此填写"
            },
            {
              "type": "textarea",
              "label": "优化方向2：",
              "large": true,
              "placeholder": "请在此填写"
            },
            {
              "type": "textarea",
              "label": "对应解决方案2：",
              "large": true,
              "placeholder": "请在此填写"
            },
            {
              "type": "textarea",
              "label": "优化方向3：",
              "large": true,
              "placeholder": "请在此填写"
            },
            {
              "type": "textarea",
              "label": "对应解决方案3：",
              "large": true,
              "placeholder": "请在此填写"
            }
          ]
        },
        "rubric": [
          {
            "id": "M1",
            "score": 3,
            "desc": "回答用户使用习惯中最常被使用的三个功能：每个功能得1分，本项最高得3分；"
          },
          {
            "id": "M2",
            "score": 3,
            "desc": "回答最受欢迎的功能和较少使用的功能：最受欢迎的功能得1分，较少使用的功能每个得1分，本项最高得3分；"
          },
          {
            "id": "M3",
            "score": 3,
            "desc": "回答不同功能的平均响应时间：响应时间较长的功能得1分；响应时间适中的功能得1分；响应时间较短的功能的1分；本项最高得3分；"
          },
          {
            "id": "M4",
            "score": 6,
            "desc": "回答优化方向和该方向对应解决方案：每1个正确的优化方向得1分，对应解决方案得1分，本项最多得6分；"
          }
        ],
        "score": 15,
        "answer": null,
        "docAnswer": []
      }
    ],
    "answer": null
  },
  {
    "id": "3.1.2",
    "code": "3.1.2",
    "name": "智能照明系统的数据分析与优化",
    "chapter": 3,
    "chapterName": "智能系统设计",
    "time": "20min",
    "tasks": "智能照明系统是智能家居领域的一个关键部分，它利用传感器和互联网连接，根据用户的需求和环境条件自动调节光线强度和颜色。随着物联网（IoT）技术和机器学习的进步，智能照明系统变得越来越智能化，能够实现节能、提高生活质量和增强安全性。但是，为了在市场中保持竞争力，制造商需要不断优化产品，提升用户体验。数据分析在这一过程中扮演了重要角色。通过分析用户行为和系统性能数据，企业可以了解用户偏好、使用模式和可能存在的问题，进而做出相应的改进决策。\n（1）你作为人工智能训练师，根据给定的数据集（智能照明系统数据集.xlsx），从以下三方面：\n用户使用习惯：分析用户在一天中不同时段对灯光亮度和颜色的偏好；\n功能使用频率：识别哪些智能场景被频繁使用，哪些较少使用；\n响应时间：考察智能照明系统在接收到用户指令后至灯光调整完成之间的平均响应时间，找出可能的延迟瓶颈。\n给出一份在用户使用习惯、功能使用频率和响应时间方面的分析报告，将其保存为docx文件，命名为3.1.2-1.docx。\n（2）为了进一步提升用户体验和系统性能，给出智能照明系统的3个优化方向和对应解决方案，将其保存为docx文件，命名为3.1.2-2.docx。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
    "totalScore": 15,
    "rubric": [
      {
        "id": "M1",
        "score": 3,
        "desc": "回答用户使用习惯的分析结论：每给出一个时间段（上午6-12点、下午12-18点和晚上18-24点）的对应分析得1分，本项最高得3分；"
      },
      {
        "id": "M2",
        "score": 3,
        "desc": "回答功能使用频率的分析结论：频繁、适中和较少使用的场景各得1分，本项最高得3分；"
      },
      {
        "id": "M3",
        "score": 3,
        "desc": "回答响应时间的分析结论：给出评价响应时间的分布区间得1分，每给出一个延迟瓶颈得1分，本项最高得3分；"
      },
      {
        "id": "M4",
        "score": 6,
        "desc": "回答优化方向和该方向对应解决方案：每1个正确的优化方向得1分，对应解决方案得1分，本项最多得6分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "智能照明系统是智能家居领域的一个关键部分，它利用传感器和互联网连接，根据用户的需求和环境条件自动调节光线强度和颜色。随着物联网（IoT）技术和机器学习的进步，智能照明系统变得越来越智能化，能够实现节能、提高生活质量和增强安全性。但是，为了在市场中保持竞争力，制造商需要不断优化产品，提升用户体验。数据分析在这一过程中扮演了重要角色。通过分析用户行为和系统性能数据，企业可以了解用户偏好、使用模式和可能存在的问题，进而做出相应的改进决策。\n（1）你作为人工智能训练师，根据给定的数据集（智能照明系统数据集.xlsx），从以下三方面：\n用户使用习惯：分析用户在一天中不同时段对灯光亮度和颜色的偏好；\n功能使用频率：识别哪些智能场景被频繁使用，哪些较少使用；\n响应时间：考察智能照明系统在接收到用户指令后至灯光调整完成之间的平均响应时间，找出可能的延迟瓶颈。\n给出一份在用户使用习惯、功能使用频率和响应时间方面的分析报告，将其保存为docx文件，命名为3.1.2-1.docx。\n（2）为了进一步提升用户体验和系统性能，给出智能照明系统的3个优化方向和对应解决方案，将其保存为docx文件，命名为3.1.2-2.docx。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
        "score": 0
      },
      {
        "id": "doc_3.1.2",
        "type": "doc",
        "title": "分析报告",
        "sectionId": "3.1.2",
        "prompt": "",
        "docFile": "3.1.2.docx",
        "template": {
          "source": "3.1.2.docx",
          "layout": "sections",
          "sections": [
            {
              "type": "subheading",
              "text": "1、分析报告"
            },
            {
              "type": "group_title",
              "text": "用户使用习惯"
            },
            {
              "type": "grid_table",
              "headers": [
                "",
                "平均光线亮度值",
                "平均色温值"
              ],
              "rowLabels": [
                "06:00 - 12:00",
                "12:00 - 18:00",
                "18:00 - 24:00"
              ]
            },
            {
              "type": "group_title",
              "text": "智能场景使用频率"
            },
            {
              "type": "table",
              "headers": null,
              "rows": [
                {
                  "label": "频繁使用的场景",
                  "cells": 1
                },
                {
                  "label": "适中使用的场景",
                  "cells": 2
                },
                {
                  "label": "较少使用的场景",
                  "cells": 1
                }
              ]
            },
            {
              "type": "group_title",
              "text": "响应时间分析"
            },
            {
              "type": "table",
              "headers": null,
              "rows": [
                {
                  "label": "平均响应时间",
                  "cells": 1
                },
                {
                  "label": "延迟瓶颈",
                  "cells": 2
                }
              ]
            },
            {
              "type": "subheading",
              "text": "2、优化方向及解决方案"
            },
            {
              "type": "textarea",
              "label": "优化方向1：",
              "large": true,
              "placeholder": "请在此填写"
            },
            {
              "type": "textarea",
              "label": "对应解决方案1：",
              "large": true,
              "placeholder": "请在此填写"
            },
            {
              "type": "textarea",
              "label": "优化方向2：",
              "large": true,
              "placeholder": "请在此填写"
            },
            {
              "type": "textarea",
              "label": "对应解决方案2：",
              "large": true,
              "placeholder": "请在此填写"
            },
            {
              "type": "textarea",
              "label": "优化方向3：",
              "large": true,
              "placeholder": "请在此填写"
            },
            {
              "type": "textarea",
              "label": "对应解决方案3：",
              "large": true,
              "placeholder": "请在此填写"
            }
          ]
        },
        "rubric": [
          {
            "id": "M1",
            "score": 3,
            "desc": "回答用户使用习惯的分析结论：每给出一个时间段（上午6-12点、下午12-18点和晚上18-24点）的对应分析得1分，本项最高得3分；"
          },
          {
            "id": "M2",
            "score": 3,
            "desc": "回答功能使用频率的分析结论：频繁、适中和较少使用的场景各得1分，本项最高得3分；"
          },
          {
            "id": "M3",
            "score": 3,
            "desc": "回答响应时间的分析结论：给出评价响应时间的分布区间得1分，每给出一个延迟瓶颈得1分，本项最高得3分；"
          },
          {
            "id": "M4",
            "score": 6,
            "desc": "回答优化方向和该方向对应解决方案：每1个正确的优化方向得1分，对应解决方案得1分，本项最多得6分；"
          }
        ],
        "score": 15,
        "answer": null,
        "docAnswer": []
      }
    ],
    "answer": null
  },
  {
    "id": "3.1.3",
    "code": "3.1.3",
    "name": "智能健康手环的数据分析与优化",
    "chapter": 3,
    "chapterName": "智能系统设计",
    "time": "20min",
    "tasks": "智能健康手环作为个人健康管理的重要工具，已经广泛应用于日常生活中。它们能够追踪用户的运动量、心率、睡眠质量等健康指标，通过与智能手机的应用程序同步，帮助用户监测和改善生活习惯。随着生物传感技术和机器学习算法的发展，智能手环的数据分析能力不断提升，但在市场竞争中，制造商需要通过精细化的数据分析来优化产品，提升用户满意度。数据分析在此过程中至关重要。通过分析用户的行为数据，企业可以了解用户对不同健康监测功能的偏好，发现使用模式和可能的改进点。例如，分析用户在什么时间段最活跃、哪些健康指标最常被关注、以及数据同步的效率问题，有助于制定精准的产品改进策略。\n（1）你作为人工智能训练师，根据给定的数据集（智能健康手环数据集.xlsx），从以下三方面：\n用户活动模式：分析用户在一周内不同时间段的活动水平，识别高峰时段和低谷时段。\n健康指标关注度：识别哪些健康指标（如步数、心率、睡眠时长）最受用户关注，哪些较少被查看。\n数据同步性能：评估手环与手机应用之间数据传输的平均延迟，找出影响同步传输速度的因素。\n给出一份在用户活动模式、健康指标关注度和数据同步性能方面的分析报告，将其保存为docx文件，命名为3.1.3-1.docx。\n（2）为了增强产品功能和用户体验，给出智能健康手环产品的3个优化方向和对应解决方案，将其保存为docx文件，命名为3.1.3-2.docx。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
    "totalScore": 15,
    "rubric": [
      {
        "id": "M1",
        "score": 3,
        "desc": "回答用户活动模式的分析结论：每个时间段分析得1分，本项最高得3分；"
      },
      {
        "id": "M2",
        "score": 3,
        "desc": "回答健康指标关注度的分析结论：每1个指标得1分，本项最高得3分；"
      },
      {
        "id": "M3",
        "score": 3,
        "desc": "回答数据同步性能的分析结论：• 平均延迟时间得1分，影响同步传输速度因素每1条得1分，本项最高得3分；"
      },
      {
        "id": "M4",
        "score": 6,
        "desc": "回答优化方向和该方向对应解决方案：每1个正确的优化方向得1分，对应解决方案得1分，本项最多得6分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "智能健康手环作为个人健康管理的重要工具，已经广泛应用于日常生活中。它们能够追踪用户的运动量、心率、睡眠质量等健康指标，通过与智能手机的应用程序同步，帮助用户监测和改善生活习惯。随着生物传感技术和机器学习算法的发展，智能手环的数据分析能力不断提升，但在市场竞争中，制造商需要通过精细化的数据分析来优化产品，提升用户满意度。数据分析在此过程中至关重要。通过分析用户的行为数据，企业可以了解用户对不同健康监测功能的偏好，发现使用模式和可能的改进点。例如，分析用户在什么时间段最活跃、哪些健康指标最常被关注、以及数据同步的效率问题，有助于制定精准的产品改进策略。\n（1）你作为人工智能训练师，根据给定的数据集（智能健康手环数据集.xlsx），从以下三方面：\n用户活动模式：分析用户在一周内不同时间段的活动水平，识别高峰时段和低谷时段。\n健康指标关注度：识别哪些健康指标（如步数、心率、睡眠时长）最受用户关注，哪些较少被查看。\n数据同步性能：评估手环与手机应用之间数据传输的平均延迟，找出影响同步传输速度的因素。\n给出一份在用户活动模式、健康指标关注度和数据同步性能方面的分析报告，将其保存为docx文件，命名为3.1.3-1.docx。\n（2）为了增强产品功能和用户体验，给出智能健康手环产品的3个优化方向和对应解决方案，将其保存为docx文件，命名为3.1.3-2.docx。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
        "score": 0
      },
      {
        "id": "doc_3.1.3",
        "type": "doc",
        "title": "分析报告",
        "sectionId": "3.1.3",
        "prompt": "",
        "docFile": "3.1.3.docx",
        "template": {
          "source": "3.1.3.docx",
          "layout": "sections",
          "sections": [
            {
              "type": "subheading",
              "text": "1、分析报告"
            },
            {
              "type": "group_title",
              "text": "用户活动模式"
            },
            {
              "type": "grid_table",
              "headers": [
                "",
                "用户平均步数"
              ],
              "rowLabels": [
                "06:00 - 08:00",
                "17:00 - 20:00",
                "其余时段（步数为0时段不计入）"
              ]
            },
            {
              "type": "group_title",
              "text": "健康指标关注度"
            },
            {
              "type": "table",
              "headers": null,
              "rows": [
                {
                  "label": "最受关注的指标",
                  "cells": 1
                },
                {
                  "label": "较少关注的指标",
                  "cells": 2
                }
              ]
            },
            {
              "type": "group_title",
              "text": "数据同步性能"
            },
            {
              "type": "table",
              "headers": null,
              "rows": [
                {
                  "label": "平均延迟时间（秒）",
                  "cells": 1
                },
                {
                  "label": "影响因素",
                  "cells": 2
                }
              ]
            },
            {
              "type": "subheading",
              "text": "2、优化方向及解决方案"
            },
            {
              "type": "textarea",
              "label": "优化方向1：",
              "large": true,
              "placeholder": "请在此填写"
            },
            {
              "type": "textarea",
              "label": "对应解决方案1：",
              "large": true,
              "placeholder": "请在此填写"
            },
            {
              "type": "textarea",
              "label": "优化方向2：",
              "large": true,
              "placeholder": "请在此填写"
            },
            {
              "type": "textarea",
              "label": "对应解决方案2：",
              "large": true,
              "placeholder": "请在此填写"
            },
            {
              "type": "textarea",
              "label": "优化方向3：",
              "large": true,
              "placeholder": "请在此填写"
            },
            {
              "type": "textarea",
              "label": "对应解决方案3：",
              "large": true,
              "placeholder": "请在此填写"
            }
          ]
        },
        "rubric": [
          {
            "id": "M1",
            "score": 3,
            "desc": "回答用户活动模式的分析结论：每个时间段分析得1分，本项最高得3分；"
          },
          {
            "id": "M2",
            "score": 3,
            "desc": "回答健康指标关注度的分析结论：每1个指标得1分，本项最高得3分；"
          },
          {
            "id": "M3",
            "score": 3,
            "desc": "回答数据同步性能的分析结论：• 平均延迟时间得1分，影响同步传输速度因素每1条得1分，本项最高得3分；"
          },
          {
            "id": "M4",
            "score": 6,
            "desc": "回答优化方向和该方向对应解决方案：每1个正确的优化方向得1分，对应解决方案得1分，本项最多得6分；"
          }
        ],
        "score": 15,
        "answer": null,
        "docAnswer": []
      }
    ],
    "answer": null
  },
  {
    "id": "3.1.4",
    "code": "3.1.4",
    "name": "智能健康监测系统的数据分析与优化",
    "chapter": 3,
    "chapterName": "智能系统设计",
    "time": "20min",
    "tasks": "智能健康监测系统通过集成多种传感器和生物反馈机制，能够实时监测用户的健康状态，包括但不限于血压、血糖水平、身体成分分析等。这些系统通常与云端服务相连，提供个性化的健康建议和预警。为了在市场中保持竞争力，制造商需要利用数据分析来不断优化产品性能和用户交互体验。\n（1）你作为人工智能训练师，根据给定的数据集（智能健康监测系统数据集.xlsx），从以下三方面：\n用户活动周期：分析用户一天中不同时间段的健康指标变化趋势，确定高风险时段和安全时段。\n健康指标偏好度：识别哪些健康监测功能（如血压监测、血糖检测、体脂分析）受用户青睐，哪些功能使用较少。\n系统响应与准确性：评估系统在监测各项健康指标时的响应时间，找出可能导致误报或延迟的关键因素。\n给出一份在用户活动周期、健康指标偏好度和系统响应时间方面的分析报告，将其保存为docx文件，命名为3.1.4-1.docx。\n（2）为了进一步提高产品的功能性和用户友好性，给出智能健康监测系统的3个优化方向和对应解决方案，将其保存为docx文件，命名为3.1.4-2.docx。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
    "totalScore": 15,
    "rubric": [
      {
        "id": "M1",
        "score": 3,
        "desc": "回答用户活动周期的分析结论：每1条健康指标变化趋势正确得1分，高风险时段正确得1分，安全时段正确得1分，本项最高得3分；"
      },
      {
        "id": "M2",
        "score": 3,
        "desc": "回答健康指标偏好度的分析结论：每个受青睐的功能正确得1分，较少使用的功能正确得1分，本项最高得3分；"
      },
      {
        "id": "M3",
        "score": 3,
        "desc": "回答不同功能的平均响应时间：响应时间较长的功能得1分；响应时间适中的功能得1分；响应时间较短的功能的1分；本项最高得3分；"
      },
      {
        "id": "M4",
        "score": 6,
        "desc": "回答优化方向和该方向对应解决方案：每1个正确的优化方向得1分，对应解决方案得1分，本项最高得6分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "智能健康监测系统通过集成多种传感器和生物反馈机制，能够实时监测用户的健康状态，包括但不限于血压、血糖水平、身体成分分析等。这些系统通常与云端服务相连，提供个性化的健康建议和预警。为了在市场中保持竞争力，制造商需要利用数据分析来不断优化产品性能和用户交互体验。\n（1）你作为人工智能训练师，根据给定的数据集（智能健康监测系统数据集.xlsx），从以下三方面：\n用户活动周期：分析用户一天中不同时间段的健康指标变化趋势，确定高风险时段和安全时段。\n健康指标偏好度：识别哪些健康监测功能（如血压监测、血糖检测、体脂分析）受用户青睐，哪些功能使用较少。\n系统响应与准确性：评估系统在监测各项健康指标时的响应时间，找出可能导致误报或延迟的关键因素。\n给出一份在用户活动周期、健康指标偏好度和系统响应时间方面的分析报告，将其保存为docx文件，命名为3.1.4-1.docx。\n（2）为了进一步提高产品的功能性和用户友好性，给出智能健康监测系统的3个优化方向和对应解决方案，将其保存为docx文件，命名为3.1.4-2.docx。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
        "score": 0
      },
      {
        "id": "doc_3.1.4",
        "type": "doc",
        "title": "分析报告",
        "sectionId": "3.1.4",
        "prompt": "",
        "docFile": "3.1.4.docx",
        "template": {
          "source": "3.1.4.docx",
          "layout": "sections",
          "sections": [
            {
              "type": "subheading",
              "text": "1、分析报告"
            },
            {
              "type": "group_title",
              "text": "用户活动周期"
            },
            {
              "type": "input",
              "label": "健康指标变化趋势：",
              "placeholder": "请填写"
            },
            {
              "type": "input",
              "label": "高风险时间段：",
              "placeholder": "请填写"
            },
            {
              "type": "input",
              "label": "安全时间段：",
              "placeholder": "请填写"
            },
            {
              "type": "group_title",
              "text": "健康指标偏好度"
            },
            {
              "type": "table",
              "headers": null,
              "rows": [
                {
                  "label": "受用户青睐的功能",
                  "cells": 2
                },
                {
                  "label": "较少使用的功能",
                  "cells": 1
                }
              ]
            },
            {
              "type": "note",
              "text": "注：\n收缩压值、舒张压值属于血压监测功能。\n血糖值属于血糖检测功能。\n体脂值属于体脂分析功能。"
            },
            {
              "type": "group_title",
              "text": "系统响应与准确性"
            },
            {
              "type": "table",
              "headers": null,
              "rows": [
                {
                  "label": "响应时间较长的功能",
                  "cells": 1
                },
                {
                  "label": "响应时间适中的功能",
                  "cells": 1
                },
                {
                  "label": "响应时间较短的功能",
                  "cells": 1
                }
              ]
            },
            {
              "type": "note",
              "text": "注：\n收缩压值、舒张压值属于血压监测功能。\n血糖值属于血糖检测功能。\n体脂值属于体脂分析功能。"
            },
            {
              "type": "subheading",
              "text": "2、优化方向及解决方案"
            },
            {
              "type": "textarea",
              "label": "优化方向1：",
              "large": true,
              "placeholder": "请在此填写"
            },
            {
              "type": "textarea",
              "label": "对应解决方案1：",
              "large": true,
              "placeholder": "请在此填写"
            },
            {
              "type": "textarea",
              "label": "优化方向2：",
              "large": true,
              "placeholder": "请在此填写"
            },
            {
              "type": "textarea",
              "label": "对应解决方案2：",
              "large": true,
              "placeholder": "请在此填写"
            },
            {
              "type": "textarea",
              "label": "优化方向3：",
              "large": true,
              "placeholder": "请在此填写"
            },
            {
              "type": "textarea",
              "label": "对应解决方案3：",
              "large": true,
              "placeholder": "请在此填写"
            }
          ]
        },
        "rubric": [
          {
            "id": "M1",
            "score": 3,
            "desc": "回答用户活动周期的分析结论：每1条健康指标变化趋势正确得1分，高风险时段正确得1分，安全时段正确得1分，本项最高得3分；"
          },
          {
            "id": "M2",
            "score": 3,
            "desc": "回答健康指标偏好度的分析结论：每个受青睐的功能正确得1分，较少使用的功能正确得1分，本项最高得3分；"
          },
          {
            "id": "M3",
            "score": 3,
            "desc": "回答不同功能的平均响应时间：响应时间较长的功能得1分；响应时间适中的功能得1分；响应时间较短的功能的1分；本项最高得3分；"
          },
          {
            "id": "M4",
            "score": 6,
            "desc": "回答优化方向和该方向对应解决方案：每1个正确的优化方向得1分，对应解决方案得1分，本项最高得6分；"
          }
        ],
        "score": 15,
        "answer": null,
        "docAnswer": []
      }
    ],
    "answer": null
  },
  {
    "id": "3.1.5",
    "code": "3.1.5",
    "name": "智能家居环境控制系统的数据分析与优化",
    "chapter": 3,
    "chapterName": "智能系统设计",
    "time": "20min",
    "tasks": "智能家居环境控制系统通过集成温度、湿度、光照等多个传感器，实现对家庭环境的智能化管理。系统可以根据用户习惯自动调整室内环境，提高居住舒适度和能源效率。为了优化这一系统，需要对收集到的大量环境数据进行深入分析，以了解用户对不同环境参数的偏好，识别系统的潜在故障点，并优化系统的响应速度和能耗。\n（1）你作为人工智能训练师，根据给定的数据集（智能家居环境控制系统数据集.xlsx），从以下三方面：\n用户环境偏好：分析用户在一天中不同时段对温度、湿度和光照强度的偏好设置。\n系统响应时间：评估用户操作（如调节温度等）到系统反馈的平均延迟，找出影响响应速度的因素。\n能源消耗分析：识别系统的平均能耗，寻找节能潜力。\n给出一份在用户环境偏好、系统响应时间和能源消耗分析方面的分析报告，将其保存为docx文件，命名为3.1.5-1.docx。\n（2）为了进一步增强产品功能和用户体验，给出智能家居环境控制系统的3个优化方向和对应解决方案，将其保存为docx文件，命名为3.1.5-2.docx。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
    "totalScore": 15,
    "rubric": [
      {
        "id": "M1",
        "score": 3,
        "desc": "回答用户环境偏好的分析结论：每1个环境偏好正确得1分，本项最高得3分；"
      },
      {
        "id": "M2",
        "score": 3,
        "desc": "回答系统响应时间的分析结论：平均响应时间正确得1分，每一个影响因素正确得1分，本项最高得3分；"
      },
      {
        "id": "M3",
        "score": 3,
        "desc": "回答能源消耗分析的结论：平均能耗正确得1分，每个节能潜力正确得1分，本项最高得3分；"
      },
      {
        "id": "M4",
        "score": 6,
        "desc": "回答优化方向和该方向对应解决方案：每1个正确的优化方向得1分，对应解决方案得1分，本项最多得6分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "智能家居环境控制系统通过集成温度、湿度、光照等多个传感器，实现对家庭环境的智能化管理。系统可以根据用户习惯自动调整室内环境，提高居住舒适度和能源效率。为了优化这一系统，需要对收集到的大量环境数据进行深入分析，以了解用户对不同环境参数的偏好，识别系统的潜在故障点，并优化系统的响应速度和能耗。\n（1）你作为人工智能训练师，根据给定的数据集（智能家居环境控制系统数据集.xlsx），从以下三方面：\n用户环境偏好：分析用户在一天中不同时段对温度、湿度和光照强度的偏好设置。\n系统响应时间：评估用户操作（如调节温度等）到系统反馈的平均延迟，找出影响响应速度的因素。\n能源消耗分析：识别系统的平均能耗，寻找节能潜力。\n给出一份在用户环境偏好、系统响应时间和能源消耗分析方面的分析报告，将其保存为docx文件，命名为3.1.5-1.docx。\n（2）为了进一步增强产品功能和用户体验，给出智能家居环境控制系统的3个优化方向和对应解决方案，将其保存为docx文件，命名为3.1.5-2.docx。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
        "score": 0
      },
      {
        "id": "doc_3.1.5",
        "type": "doc",
        "title": "分析报告",
        "sectionId": "3.1.5",
        "prompt": "",
        "docFile": "3.1.5.docx",
        "template": {
          "source": "3.1.5.docx",
          "layout": "sections",
          "sections": [
            {
              "type": "subheading",
              "text": "1、分析报告"
            },
            {
              "type": "group_title",
              "text": "用户环境偏好"
            },
            {
              "type": "grid_table",
              "headers": [
                "",
                "平均温度",
                "平均湿度",
                "平均光照"
              ],
              "rowLabels": [
                "06:00 - 12:00",
                "13:00 - 18:00",
                "19:00 - 05:00"
              ]
            },
            {
              "type": "group_title",
              "text": "系统响应时间"
            },
            {
              "type": "table",
              "headers": null,
              "rows": [
                {
                  "label": "平均响应时间",
                  "cells": 1
                },
                {
                  "label": "影响因素",
                  "cells": 2
                }
              ]
            },
            {
              "type": "group_title",
              "text": "能源消耗分析"
            },
            {
              "type": "table",
              "headers": null,
              "rows": [
                {
                  "label": "平均能源消耗",
                  "cells": 1
                },
                {
                  "label": "节能潜力",
                  "cells": 2
                }
              ]
            },
            {
              "type": "subheading",
              "text": "2、优化方向及解决方案"
            },
            {
              "type": "textarea",
              "label": "优化方向1：",
              "large": true,
              "placeholder": "请在此填写"
            },
            {
              "type": "textarea",
              "label": "对应解决方案1：",
              "large": true,
              "placeholder": "请在此填写"
            },
            {
              "type": "textarea",
              "label": "优化方向2：",
              "large": true,
              "placeholder": "请在此填写"
            },
            {
              "type": "textarea",
              "label": "对应解决方案2：",
              "large": true,
              "placeholder": "请在此填写"
            },
            {
              "type": "textarea",
              "label": "优化方向3：",
              "large": true,
              "placeholder": "请在此填写"
            },
            {
              "type": "textarea",
              "label": "对应解决方案3：",
              "large": true,
              "placeholder": "请在此填写"
            }
          ]
        },
        "rubric": [
          {
            "id": "M1",
            "score": 3,
            "desc": "回答用户环境偏好的分析结论：每1个环境偏好正确得1分，本项最高得3分；"
          },
          {
            "id": "M2",
            "score": 3,
            "desc": "回答系统响应时间的分析结论：平均响应时间正确得1分，每一个影响因素正确得1分，本项最高得3分；"
          },
          {
            "id": "M3",
            "score": 3,
            "desc": "回答能源消耗分析的结论：平均能耗正确得1分，每个节能潜力正确得1分，本项最高得3分；"
          },
          {
            "id": "M4",
            "score": 6,
            "desc": "回答优化方向和该方向对应解决方案：每1个正确的优化方向得1分，对应解决方案得1分，本项最多得6分；"
          }
        ],
        "score": 15,
        "answer": null,
        "docAnswer": []
      }
    ],
    "answer": null
  },
  {
    "id": "3.2.1",
    "code": "3.2.1",
    "name": "图像识别评估系统交互流程设计",
    "chapter": 3,
    "chapterName": "智能系统设计",
    "time": "20min",
    "tasks": "图像识别评估系统是在深度学习技术日益成熟的背景下发展起来的，旨在解决传统图像识别方法在面对复杂场景和大规模数据集时的局限性。随着互联网和物联网技术的飞速发展，图像数据量呈指数级增长，对图像内容的自动理解和智能分析提出了更高的要求。ResNet作为一种深度卷积神经网络架构，凭借其深度残差连接机制，能够有效缓解梯度消失问题，实现更深层次的网络结构，从而捕获更加丰富和抽象的图像特征，极大地提高了图像识别的准确性和效率，推动了人工智能技术在现实世界中的广泛应用和商业化进程。\nAI模型说明：“resnet.onnx”模型是使用 Pytorch 框架和基于深度卷积神经网络网络训练得到的，专门用于进行图像识别。对应的标签文件为“labels.txt”。该模型的使用交互流程为：\n1)加载“resnet.onnx”模型和“labels.txt”类别标签；\n2)加载本地测试图片“img_test.jpg”，并进行预处理图像以符合模型输入要求；\n3)使用“resnet.onnx”模型对加载的图片进行识别；\n4)输出加载图片的识别结果（输出概率值最大的5组类别和对应概率值）\n你作为一名人工智能训练师，请完成以下工作任务：\n（1）补全该模型的使用交互流程对应的Python代码（3.2.1.ipynb），实现本地测试图片“img_test.jpg”的识别，将其识别结果截图保存为jpg格式文件，命名为3.2.1-1.jpg。\n（2）在上面的使用交互流程基础上，给出在图像识别评估系统中使用“resnet.onnx”模型的一种人机交互的最优方式，将其保存为docx文件，命名为3.2.1.docx。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
    "totalScore": 20,
    "rubric": [
      {
        "id": "M1",
        "score": 2,
        "desc": "模型加载代码正确得2分；"
      },
      {
        "id": "M2",
        "score": 2,
        "desc": "从指定路径加载一张图片代码正确得2分；"
      },
      {
        "id": "M3",
        "score": 2,
        "desc": "预处理图片代码正确得2分；"
      },
      {
        "id": "M4",
        "score": 2,
        "desc": "使用模型对图片进行识别代码得2分；"
      },
      {
        "id": "M5",
        "score": 2,
        "desc": "获取识别分类后的概率代码正确得2分；"
      },
      {
        "id": "M6",
        "score": 3,
        "desc": "获取最高的5个概率和对应的类别索引代码正确得3分；"
      },
      {
        "id": "M7",
        "score": 1,
        "desc": "本地保存识别后的截图3.2.1-1.jpg：得1分；"
      },
      {
        "id": "M8",
        "score": 5,
        "desc": "截图3.2.1-1.jpg中识别的前五个类别和概率正确：每个类别和概率正确得1分，总计得5分；"
      },
      {
        "id": "M9",
        "score": 1,
        "desc": "人机交互最优流程（不少于3条）正确得1分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "图像识别评估系统是在深度学习技术日益成熟的背景下发展起来的，旨在解决传统图像识别方法在面对复杂场景和大规模数据集时的局限性。随着互联网和物联网技术的飞速发展，图像数据量呈指数级增长，对图像内容的自动理解和智能分析提出了更高的要求。ResNet作为一种深度卷积神经网络架构，凭借其深度残差连接机制，能够有效缓解梯度消失问题，实现更深层次的网络结构，从而捕获更加丰富和抽象的图像特征，极大地提高了图像识别的准确性和效率，推动了人工智能技术在现实世界中的广泛应用和商业化进程。\nAI模型说明：“resnet.onnx”模型是使用 Pytorch 框架和基于深度卷积神经网络网络训练得到的，专门用于进行图像识别。对应的标签文件为“labels.txt”。该模型的使用交互流程为：\n1)加载“resnet.onnx”模型和“labels.txt”类别标签；\n2)加载本地测试图片“img_test.jpg”，并进行预处理图像以符合模型输入要求；\n3)使用“resnet.onnx”模型对加载的图片进行识别；\n4)输出加载图片的识别结果（输出概率值最大的5组类别和对应概率值）\n你作为一名人工智能训练师，请完成以下工作任务：\n（1）补全该模型的使用交互流程对应的Python代码（3.2.1.ipynb），实现本地测试图片“img_test.jpg”的识别，将其识别结果截图保存为jpg格式文件，命名为3.2.1-1.jpg。\n（2）在上面的使用交互流程基础上，给出在图像识别评估系统中使用“resnet.onnx”模型的一种人机交互的最优方式，将其保存为docx文件，命名为3.2.1.docx。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
        "score": 0
      },
      {
        "id": "code_0",
        "type": "code",
        "title": "模型加载",
        "code": "import onnxruntime as ort\nimport numpy as np\nimport scipy.special\nfrom PIL import Image\n\n\ndef preprocess_image(image, resize_size=256, crop_size=224, mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]):\n  image = image.resize((resize_size, resize_size), Image.BILINEAR)\n  w, h = image.size\n  left = (w - crop_size) / 2\n  top = (h - crop_size) / 2\n  image = image.crop((left, top, left + crop_size, top + crop_size))\n  image = np.array(image).astype(np.float32)\n  image = image / 255.0\n  image = (image - mean) / std\n  image = np.transpose(image, (2, 0, 1))\n  image = image.reshape((1,) + image.shape)\n  return image\n\n\nsession = ___\n\n\nlabels_path = 'labels.txt'\nwith open(labels_path) as f:\n  labels = [line.strip() for line in f.readlines()]\n\n\ninput_name = session.get_inputs()[0].name\noutput_name = session.get_outputs()[0].name\n\n\nimage = ___('RGB')\n\n\nprocessed_image = ___\n\n\nprocessed_image = processed_image.astype(np.float32)\n\n\noutput = ___([output_name], {input_name: processed_image})[0]\n\n\nprobabilities = ___(output, axis=-1)\n\n\ntop5_idx = ___[-5:][::-1]\ntop5_prob = ___\n\n\nprint(\"Top 5 predicted classes:\")\nfor i in range(5):\n  print(f\"{i+1}: {labels[top5_idx[i]]} - Probability: {top5_prob[i]}\")",
        "cellIndex": 0,
        "blanks": [
          {
            "blankIndex": 0,
            "score": 2,
            "desc": "模型加载",
            "answer": null,
            "rubricId": "M1"
          },
          {
            "blankIndex": 1,
            "score": 2,
            "desc": "加载图片",
            "answer": null,
            "rubricId": "M2"
          },
          {
            "blankIndex": 2,
            "score": 2,
            "desc": "预处理图片",
            "answer": null,
            "rubricId": "M3"
          },
          {
            "blankIndex": 3,
            "score": 2,
            "desc": "进行图片识别",
            "answer": null,
            "rubricId": "M4"
          },
          {
            "blankIndex": 4,
            "score": 2,
            "desc": "应用 softmax 函数获取概率",
            "answer": null,
            "rubricId": "M5"
          },
          {
            "blankIndex": 5,
            "score": 3,
            "desc": "获取最高的5个概率和对应的类别索引",
            "answer": null,
            "rubricId": "M6"
          },
          {
            "blankIndex": 6,
            "score": 0,
            "desc": "top5_prob = ___",
            "answer": null
          }
        ],
        "score": 13,
        "answer": null,
        "rubric": [
          {
            "id": "M1",
            "score": 2,
            "desc": "模型加载代码正确得2分；"
          }
        ]
      },
      {
        "id": "doc_3.2.1",
        "type": "doc",
        "title": "人机交互",
        "sectionId": "3.2.1",
        "prompt": "",
        "docFile": "3.2.1.docx",
        "template": {
          "source": "3.2.1.docx",
          "layout": "sections",
          "sections": [
            {
              "type": "textarea",
              "label": "人机交互的最优方式（答对3条以上正确得1分）",
              "large": true,
              "placeholder": "请在此填写"
            }
          ]
        },
        "rubric": [
          {
            "id": "M9",
            "score": 1,
            "desc": "人机交互最优流程（不少于3条）正确得1分；"
          }
        ],
        "score": 1,
        "answer": null,
        "docAnswer": [
          "人机交互的最优方式\n\n• 采用 Web 图形界面作为最优交互方式：用户通过浏览器上传图片（拖拽或点击选择 img_test.jpg），无需安装软件、无需编写代码；后端自动完成模型加载、图像预处理和 ONNX 推理，比命令行更适合评估场景，操作门槛低、结果直观。\n\n• 设计「上传 → 自动处理 → 结果展示」三步流程：与代码流程一一对应——用户上传 RGB 图片后，系统自动执行 Resize(256) → Center Crop(224) → 归一化/标准化 → session.run() 推理 → softmax 转概率；界面显示进度提示（如\"正在识别…\"），用户只需点击一次\"开始识别\"。\n\n• 以 Top-5 概率可视化呈现识别结果：将 labels.txt 中概率最高的 5 个类别及对应概率用条形图或列表展示（如 tusker 93.1%、Indian elephant 6.8%…），原图与结果并排显示；Top-1 高亮，置信度偏低时提示\"仅供参考\"，便于评估人员快速判断识别效果。\n\n模型推理流程（代码对应）：加载 resnet.onnx 和 labels.txt → 加载图片 → 预处理 → 模型推理 → Softmax → 输出 Top-5 类别及概率。"
        ]
      }
    ],
    "answer": null
  },
  {
    "id": "3.2.2",
    "code": "3.2.2",
    "name": "手写数字识别系统交互流程设计",
    "chapter": 3,
    "chapterName": "智能系统设计",
    "time": "20min",
    "tasks": "手写数字识别系统是在数字化转型和自动化需求日益增长的社会背景下应运而生的。随着信息时代的到来，大量手写文档需要进行电子化处理，以提高数据存储、检索和分析的效率。传统的光学字符识别(OCR)技术在处理手写体时面临诸多挑战，如书写风格的多样性、笔迹的连笔和重叠等，导致识别率不高。然而，深度学习的兴起，尤其是卷积神经网络(CNN)的发展，为手写数字的精准识别提供了强大的工具。\nAI模型说明：提供的模型“mnist.onnx”是基于卷积神经网络训练得到的，专门用于进行手写数字的识别应用。该模型的使用交互流程为：\n1)加载模型“mnist.onnx”;\n2)加载一张本地手写数字图片“img_test.png”，并进行预处理图像以符合模型输入要求；\n3)使用mnist模型对手写数字图片进行识别；\n4)输出识别后的数字。\n你作为一名人工智能训练师，请完成以下工作任务：\n（1）补全该模型的使用交互流程对应的Python代码（3.2.2.ipynb），实现本地测试图片“img_test.png”的识别，将其识别结果截图保存为jpg格式文件，命名为3.2.2-1.jpg。\n（2）在上面的使用交互流程基础上，给出在手写数字识别系统中使用“mnist.onnx”模型的一种人机交互的最优流程，将其保存为docx文件，命名为3.2.2.docx。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
    "totalScore": 20,
    "rubric": [
      {
        "id": "M1",
        "score": 2,
        "desc": "模型加载代码正确得2分；"
      },
      {
        "id": "M2",
        "score": 2,
        "desc": "加载图像正确得2分；"
      },
      {
        "id": "M3",
        "score": 2,
        "desc": "调整大小为MNIST模型的输入尺寸代码正确得2分；"
      },
      {
        "id": "M4",
        "score": 2,
        "desc": "转为numpy数组代码正确得2分；"
      },
      {
        "id": "M5",
        "score": 2,
        "desc": "添加batch维度代码正确得2分；"
      },
      {
        "id": "M6",
        "score": 2,
        "desc": "添加通道维度代码正确得2分；"
      },
      {
        "id": "M7",
        "score": 2,
        "desc": "返回模型输入列表代码正确得2分；"
      },
      {
        "id": "M8",
        "score": 2,
        "desc": "执行预测代码正确得2分"
      },
      {
        "id": "M9",
        "score": 2,
        "desc": "获取预测结果代码正确得2分；"
      },
      {
        "id": "M10",
        "score": 1,
        "desc": "截图3.2.2-1.jpg中预测类别结果正确：得1分；"
      },
      {
        "id": "M11",
        "score": 1,
        "desc": "人机交互最优流程（不少于3条）正确得1分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "手写数字识别系统是在数字化转型和自动化需求日益增长的社会背景下应运而生的。随着信息时代的到来，大量手写文档需要进行电子化处理，以提高数据存储、检索和分析的效率。传统的光学字符识别(OCR)技术在处理手写体时面临诸多挑战，如书写风格的多样性、笔迹的连笔和重叠等，导致识别率不高。然而，深度学习的兴起，尤其是卷积神经网络(CNN)的发展，为手写数字的精准识别提供了强大的工具。\nAI模型说明：提供的模型“mnist.onnx”是基于卷积神经网络训练得到的，专门用于进行手写数字的识别应用。该模型的使用交互流程为：\n1)加载模型“mnist.onnx”;\n2)加载一张本地手写数字图片“img_test.png”，并进行预处理图像以符合模型输入要求；\n3)使用mnist模型对手写数字图片进行识别；\n4)输出识别后的数字。\n你作为一名人工智能训练师，请完成以下工作任务：\n（1）补全该模型的使用交互流程对应的Python代码（3.2.2.ipynb），实现本地测试图片“img_test.png”的识别，将其识别结果截图保存为jpg格式文件，命名为3.2.2-1.jpg。\n（2）在上面的使用交互流程基础上，给出在手写数字识别系统中使用“mnist.onnx”模型的一种人机交互的最优流程，将其保存为docx文件，命名为3.2.2.docx。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
        "score": 0
      },
      {
        "id": "code_0",
        "type": "code",
        "title": "加载ONNX模型",
        "code": "import onnxruntime\nimport numpy as np\nfrom PIL import Image\n\n\nort_session = ___\n\n\nimage = ___('L')  # 转为灰度图\n\n\nimage = ___((28, 28))  # 调整大小为MNIST模型的输入尺寸2分\nimage_array = ___(___, dtype=np.float32)  # 转为numpy数组2分\nimage_array = ___(___, axis=0)  # 添加batch维度2分\nimage_array = ___(___, axis=0)  # 添加通道维度2分\n\n\nort_inputs = {___()[0].name: image_array}\nort_outs = ___(None, ort_inputs)\n\n\npredicted_class = ___\n\n\nprint(f\"Predicted class: {predicted_class}\")",
        "cellIndex": 0,
        "blanks": [
          {
            "blankIndex": 0,
            "score": 2,
            "desc": "加载ONNX模型",
            "answer": null,
            "rubricId": "M1"
          },
          {
            "blankIndex": 1,
            "score": 2,
            "desc": "加载图像",
            "answer": null,
            "rubricId": "M3"
          },
          {
            "blankIndex": 2,
            "score": 2,
            "desc": "image = ___((28, 28))  # 调整大小为MNIST模型的输入尺寸2分",
            "answer": null,
            "rubricId": "M4"
          },
          {
            "blankIndex": 3,
            "score": 2,
            "desc": "image_array = ___(___, dtype=np.float32)  # 转为numpy数组2分",
            "answer": null,
            "rubricId": "M5"
          },
          {
            "blankIndex": 4,
            "score": 2,
            "desc": "image_array = ___(___, dtype=np.float32)  # 转为numpy数组2分",
            "answer": null,
            "rubricId": "M6"
          },
          {
            "blankIndex": 5,
            "score": 2,
            "desc": "image_array = ___(___, axis=0)  # 添加batch维度2分",
            "answer": null,
            "rubricId": "M7"
          },
          {
            "blankIndex": 6,
            "score": 2,
            "desc": "image_array = ___(___, axis=0)  # 添加batch维度2分",
            "answer": null,
            "rubricId": "M8"
          },
          {
            "blankIndex": 7,
            "score": 2,
            "desc": "image_array = ___(___, axis=0)  # 添加通道维度2分",
            "answer": null,
            "rubricId": "M9"
          },
          {
            "blankIndex": 8,
            "score": 0,
            "desc": "image_array = ___(___, axis=0)  # 添加通道维度2分",
            "answer": null
          },
          {
            "blankIndex": 9,
            "score": 2,
            "desc": "返回模型输入列表",
            "answer": null
          },
          {
            "blankIndex": 10,
            "score": 2,
            "desc": "执行预测",
            "answer": null
          },
          {
            "blankIndex": 11,
            "score": 2,
            "desc": "获取预测结果",
            "answer": null
          }
        ],
        "score": 22,
        "answer": null,
        "rubric": [
          {
            "id": "M1",
            "score": 2,
            "desc": "模型加载代码正确得2分；"
          }
        ]
      },
      {
        "id": "doc_3.2.2",
        "type": "doc",
        "title": "人机交互",
        "sectionId": "3.2.2",
        "prompt": "",
        "docFile": "3.2.2.docx",
        "template": {
          "source": "3.2.2.docx",
          "layout": "sections",
          "sections": [
            {
              "type": "textarea",
              "label": "人机交互的最优方式（答对3条以上正确得1分）",
              "large": true,
              "placeholder": "请在此填写"
            }
          ]
        },
        "rubric": [
          {
            "id": "M11",
            "score": 1,
            "desc": "人机交互最优流程（不少于3条）正确得1分；"
          }
        ],
        "score": 1,
        "answer": null,
        "docAnswer": [
          "人机交互的最优流程\n\n• 采用 Web 图形界面作为最优交互方式：用户通过浏览器上传手写数字图片（拖拽或点击选择 img_test.png），无需安装软件；后端自动加载 mnist.onnx 并完成推理，比命令行更适合演示与评估，操作直观、上手快。\n\n• 设计「上传 → 自动处理 → 结果展示」三步流程：与代码流程一一对应——用户上传图片后，系统自动执行灰度化（convert('L')）→ Resize 至 28×28 → 转 float32 数组并添加 batch/通道维度 → ort_session.run() 推理 → np.argmax 取预测类别；界面显示\"正在识别…\"进度提示，用户只需点击一次\"开始识别\"。\n\n• 以大号数字直观呈现识别结果：界面左侧展示上传的原图预览，右侧以醒目字体显示识别出的数字（0–9，如 Predicted class: 7）；识别失败或图片无效时给出友好错误提示，支持重新上传，便于用户快速确认识别效果。\n\n模型推理流程（代码对应）：加载 mnist.onnx → 加载图片 → 预处理（灰度化、28×28、维度扩展）→ 模型推理 → 输出识别数字。"
        ]
      }
    ],
    "answer": null
  },
  {
    "id": "3.2.3",
    "code": "3.2.3",
    "name": "面部表情识别系统交互流程设计",
    "chapter": 3,
    "chapterName": "智能系统设计",
    "time": "20min",
    "tasks": "面部表情识别系统是一种先进的计算机视觉技术，它能够分析人脸的微表情，识别出诸如快乐、悲伤、惊讶等基本情绪。通过捕捉和解读面部特征，如眼睛、眉毛和嘴部的动作，这类系统能在实时或预录的视频中判断人的情感状态，广泛应用于人机交互、市场调研、医疗健康监测、安全监控及教育科技等多个领域，为提升用户体验、增进情感智能和优化社会服务提供了有力工具。\nAI模型说明：提供的已训练的模型“emotion-ferplus.onnx”，其专门用于进行面部表情识别。定义情感类别与数字标签的映射表为{'neutral':0, 'happiness':1, 'surprise':2, 'sadness':3, 'anger':4, 'disgust':5, 'fear':6, 'contempt':7}。\n该模型的使用交互流程为：\n1)加载模型“emotion-ferplus.onnx”和加载情感类别与数字标签的映射表；\n2)加载一张本地图片“img_test.png”，并预处理图像；\n3)使用已训练的模型对图片面部表情识别；\n4)输出识别后的表情标签。\n你作为一名人工智能训练师，请完成以下工作任务：\n（1）补全该模型的使用交互流程对应的Python代码（3.2.3.ipynb），实现本地测试图片“img_test.png”的识别，将其识别结果截图保存为jpg格式文件，命名为3.2.3-1.jpg。\n（2）在上面的使用交互流程基础上，给出在面部表情识别系统中使用“emotion-ferplus.onnx”模型的一种人机交互的最优方式，将其保存为docx文件，命名为3.2.3.docx。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
    "totalScore": 20,
    "rubric": [
      {
        "id": "M1",
        "score": 3,
        "desc": "定义情感类别与数字标签的映射表代码正确得3分；"
      },
      {
        "id": "M2",
        "score": 3,
        "desc": "模型加载代码正确得3分；"
      },
      {
        "id": "M3",
        "score": 3,
        "desc": "加载本地图片并进行预处理代码正确得3分 ；"
      },
      {
        "id": "M4",
        "score": 3,
        "desc": "运行模型，进行预测代码正确得3分；"
      },
      {
        "id": "M5",
        "score": 3,
        "desc": "解码模型输出，找到预测概率最高的情感类别代码正确得3分；"
      },
      {
        "id": "M6",
        "score": 3,
        "desc": "根据预测的标签找到对应的情感名称代码正确得3分；"
      },
      {
        "id": "M7",
        "score": 1,
        "desc": "截图3.2.3-1.jpg中识别的面部情绪正确：得1分；"
      },
      {
        "id": "M8",
        "score": 1,
        "desc": "人机交互最优流程（不少于3条）正确得1分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "面部表情识别系统是一种先进的计算机视觉技术，它能够分析人脸的微表情，识别出诸如快乐、悲伤、惊讶等基本情绪。通过捕捉和解读面部特征，如眼睛、眉毛和嘴部的动作，这类系统能在实时或预录的视频中判断人的情感状态，广泛应用于人机交互、市场调研、医疗健康监测、安全监控及教育科技等多个领域，为提升用户体验、增进情感智能和优化社会服务提供了有力工具。\nAI模型说明：提供的已训练的模型“emotion-ferplus.onnx”，其专门用于进行面部表情识别。定义情感类别与数字标签的映射表为{'neutral':0, 'happiness':1, 'surprise':2, 'sadness':3, 'anger':4, 'disgust':5, 'fear':6, 'contempt':7}。\n该模型的使用交互流程为：\n1)加载模型“emotion-ferplus.onnx”和加载情感类别与数字标签的映射表；\n2)加载一张本地图片“img_test.png”，并预处理图像；\n3)使用已训练的模型对图片面部表情识别；\n4)输出识别后的表情标签。\n你作为一名人工智能训练师，请完成以下工作任务：\n（1）补全该模型的使用交互流程对应的Python代码（3.2.3.ipynb），实现本地测试图片“img_test.png”的识别，将其识别结果截图保存为jpg格式文件，命名为3.2.3-1.jpg。\n（2）在上面的使用交互流程基础上，给出在面部表情识别系统中使用“emotion-ferplus.onnx”模型的一种人机交互的最优方式，将其保存为docx文件，命名为3.2.3.docx。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
        "score": 0
      },
      {
        "id": "code_0",
        "type": "code",
        "title": "定义情感类别与数字标签的映射表",
        "code": "import numpy as np\nfrom PIL import Image\nimport onnxruntime as ort\n\n\ndef preprocess(image_path):\n    input_shape = (1, 1, 64, 64)    # 模型输入期望的形状，这里是 (N, C, H, W)，N=batch size, C=channels, H=height, W=width\n    img = Image.open(image_path).convert('L')    # 打开图像文件并将其转换为灰度图  1分\n    img = img.resize((64, 64), Image.ANTIALIAS)    # 调整图像大小到模型输入所需的尺寸\n    img_data = np.array(img, dtype=np.float32)    # 将PIL图像对象转换为numpy数组，并确保数据类型是float32\n    img_data = np.expand_dims(img_data, axis=0)  # 添加 batch 维度\n    img_data = np.expand_dims(img_data, axis=1)  # 添加 channel 维度\n    assert img_data.shape == input_shape, f\"Expected shape {input_shape}, but got {img_data.shape}\"    # 确保最终的形状与模型输入要求的形状一致\n    return img_data    # 返回预处理后的图像数据\n\n\nemotion_table = {___}\n\n\nort_session = ___    # 使用onnxruntime创建一个会话，用于加载并运行模型\n\n\ninput_data = ___\n\n\nort_inputs = {ort_session.get_inputs()[0].name: input_data}    # ort_session.get_inputs()[0].name 是获取模型的第一个输入的名字\n\n\nort_outs = ___(None, ___)\n\n\npredicted_label = ___(ort_outs[0])\n\n\npredicted_emotion = ___[predicted_label]\n\n\nprint(f\"Predicted emotion: {predicted_emotion}\")",
        "cellIndex": 0,
        "blanks": [
          {
            "blankIndex": 0,
            "score": 3,
            "desc": "定义情感类别与数字标签的映射表",
            "answer": null,
            "rubricId": "M1"
          },
          {
            "blankIndex": 1,
            "score": 3,
            "desc": "加载模型",
            "answer": null,
            "rubricId": "M2"
          },
          {
            "blankIndex": 2,
            "score": 3,
            "desc": "加载本地图片并进行预处理",
            "answer": null,
            "rubricId": "M3"
          },
          {
            "blankIndex": 3,
            "score": 2,
            "desc": "运行模型，进行预测",
            "answer": null,
            "rubricId": "M4"
          },
          {
            "blankIndex": 4,
            "score": 1,
            "desc": "运行模型，进行预测",
            "answer": null,
            "rubricId": "M5"
          },
          {
            "blankIndex": 5,
            "score": 3,
            "desc": "解码模型输出，找到预测概率最高的情感类别",
            "answer": null,
            "rubricId": "M6"
          },
          {
            "blankIndex": 6,
            "score": 3,
            "desc": "根据预测的标签找到对应的情感名称",
            "answer": null
          }
        ],
        "score": 18,
        "answer": null,
        "rubric": [
          {
            "id": "M1",
            "score": 3,
            "desc": "定义情感类别与数字标签的映射表代码正确得3分；"
          }
        ]
      },
      {
        "id": "doc_3.2.3",
        "type": "doc",
        "title": "人机交互",
        "sectionId": "3.2.3",
        "prompt": "",
        "docFile": "3.2.3.docx",
        "template": {
          "source": "3.2.3.docx",
          "layout": "sections",
          "sections": [
            {
              "type": "textarea",
              "label": "人机交互的最优方式（答对3条以上正确得1分）",
              "large": true,
              "placeholder": "请在此填写"
            }
          ]
        },
        "rubric": [
          {
            "id": "M8",
            "score": 1,
            "desc": "人机交互最优流程（不少于3条）正确得1分；"
          }
        ],
        "score": 1,
        "answer": null,
        "docAnswer": [
          "1. 系统概述\n\n1.1 系统功能描述\n\n面部表情识别系统基于预训练的 emotion-ferplus.onnx 模型，能够对输入的人脸图像进行自动分析，输出对应的情感类别标签。系统支持识别以下 8 种表情类别：\n\n标签索引\n英文标签\n中文含义\n\n0\nneutral\n中性\n\n1\nhappiness\n高兴\n\n2\nsurprise\n惊讶\n\n3\nsadness\n悲伤\n\n4\nanger\n愤怒\n\n5\ndisgust\n厌恶\n\n6\nfear\n恐惧\n\n7\ncontempt\n蔑视\n\n该系统适用于人机情感交互、心理健康监测、教育反馈分析、安防监控等多种应用场景，具备实时性强、部署灵活的特点。\n\n1.2 技术架构\n\n系统采用基于 emotion-ferplus.onnx 的推理流程，整体架构如下：\n\n用户上传图片\n     │\n     ▼\n图像预处理模块\n  ├─ 灰度化（PIL 转 'L' 模式）\n  ├─ 缩放至 64×64 像素（Image.ANTIALIAS）\n  ├─ 转换为 float32 数组\n  └─ 维度扩展 → shape: (1, 1, 64, 64)\n     │\n     ▼\nONNX 推理引擎（onnxruntime.InferenceSession）\n  ├─ 加载 emotion-ferplus.onnx 模型\n  ├─ 构建输入字典 ort_inputs\n  └─ 执行 session.run(None, ort_inputs) → ort_outs\n     │\n     ▼\n后处理与结果解码\n  ├─ np.argmax(ort_outs[0]) → predicted_label（整数索引）\n  └─ emotion_table[predicted_label] → predicted_emotion（字符串标签）\n     │\n     ▼\n结果展示与反馈\n\n模型推理管道（完整步骤）：\n\n加载模型和情感映射表 → 加载图片 → 预处理（灰度化、resize 64×64、归一化）→ 模型推理 → 输出表情标签\n\n---\n\n2. 最优人机交互方式设计\n\n2.1 交互界面设计\n\n推荐方案：Web 交互界面（Browser-Based UI）\n\n基于 Web 界面的人机交互是本系统的最优选择，理由如下：\n\n• 跨平台兼容性强：用户无需安装任何客户端软件，通过浏览器即可访问。\n\n• 部署与维护成本低：后端统一维护模型与推理逻辑，前端只负责展示与交互。\n\n• 交互体验直观：支持拖拽上传、实时预览、结果可视化，用户学习成本极低。\n\n• 易于扩展：可逐步集成摄像头实时识别、批量图片处理等高级功能。\n\n界面布局设计：\n\n┌─────────────────────────────────────────────────────┐\n│            面部表情识别系统                          │\n├──────────────────────┬──────────────────────────────┤\n│                      │  识别结果                    │\n│   [图片上传区域]      │  ┌──────────────────────┐   │\n│                      │  │ 检测到的表情：高兴    │   │\n│   拖拽图片至此处      │  │ Happiness            │   │\n│   或点击选择文件      │  │                      │   │\n│                      │  │ [情感概率分布图]      │   │\n│   [上传按钮]         │  │                      │   │\n│                      │  └──────────────────────┘   │\n│   [预览图像区域]      │  [重新上传] [下载报告]       │\n└──────────────────────┴──────────────────────────────┘\n│  使用说明：请上传清晰的人脸正面照片，系统将自动分析面部表情  │\n└─────────────────────────────────────────────────────┘\n\n2.2 用户操作流程\n\nStep 1：用户上传图片\n\n用户通过以下方式提交待识别图片：\n\n• 拖拽上传：将本地图片文件（支持 JPG、PNG、BMP 格式）拖拽至上传区域。\n\n• 点击上传：点击\"选择文件\"按钮，通过系统文件浏览器选取图片。\n\n• URL 输入（可选扩展）：输入图片网络地址，系统自动抓取并识别。\n\n系统在图片上传后立即进行格式验证，检查文件类型、大小限制（建议不超过 5MB）及图像分辨率是否满足最低要求，并在上传区域展示图片缩略图预览，让用户确认图片选取无误。\n\nStep 2：系统自动预处理\n\n用户确认上传后，系统在后台自动完成以下预处理操作（对用户透明，界面显示进度提示）：\n\n• 使用 PIL 打开图像，调用 .convert('L') 将彩色图像转换为灰度图（单通道）。\n\n• 调用 Image.resize((64, 64), Image.ANTIALIAS) 将图像缩放至模型所需的 64×64 像素尺寸。\n\n• 将图像数据转换为 numpy.float32 数组。\n\n• 通过 np.expand_dims 依次在 axis=0（批次维度）和 axis=1（通道维度）进行扩展，最终得到形状为 (1, 1, 64, 64) 的四维张量。\n\n• 断言数据形状正确：assert input_data.shape == (1, 1, 64, 64)，确保输入数据合规。\n\n界面展示：\n\n正在预处理图像... [████████░░] 80%\n\nStep 3：模型推理与结果展示\n\n预处理完成后，系统自动执行 ONNX 模型推理：\n\n• 通过 ort.InferenceSession(\"emotion-ferplus.onnx\") 加载模型。\n\n• 获取模型第一个输入节点名称：input_name = ort_session.get_inputs()[0].name。\n\n• 构建输入字典：ort_inputs = {input_name: input_data}。\n\n• 执行推理：ort_outs = ort_session.run(None, ort_inputs)。\n\n• 解码结果：predicted_label = np.argmax(ort_outs[0])。\n\n• 映射至情感标签：predicted_emotion = emotion_table[predicted_label]。\n\n结果展示内容：\n\n• 主要识别结果：以大字体突出显示预测的表情类别（中英文对照）。\n\n• 置信度分布图：以水平柱状图展示 8 种表情的概率分布，帮助用户理解模型的判断依据。\n\n• 原始图像对比：在结果区域同步显示原始上传图像。\n\n识别结果：😊 高兴（Happiness）\n\n各类别置信度：\n中性     ██░░░░░░░░ 12%\n高兴     ████████░░ 76%  ← 预测结果\n惊讶     █░░░░░░░░░  5%\n悲伤     ░░░░░░░░░░  2%\n愤怒     ░░░░░░░░░░  1%\n厌恶     ░░░░░░░░░░  1%\n恐惧     ░░░░░░░░░░  2%\n蔑视     ░░░░░░░░░░  1%\n\nStep 4：结果反馈与优化\n\n识别完成后，系统提供以下反馈与优化功能：\n\n• 用户反馈机制：提供\"识别准确 / 识别有误\"的快速评价按钮，收集用户反馈数据，用于后续模型迭代优化。\n\n• 结果修正：若用户认为识别结果有误，可通过下拉菜单选择正确的表情类别并提交，帮助积累标注数据。\n\n• 重新识别：用户可一键清空当前结果，上传新的图片重新识别。\n\n• 报告导出：支持将识别结果（含图像缩略图、预测标签、置信度分布）导出为 PDF 或 JSON 格式报告。\n\n2.3 交互界面功能模块\n\n功能模块\n描述\n优先级\n\n图片上传模块\n支持拖拽、点击上传，格式与大小校验\n核心\n\n图像预览模块\n上传后立即显示图片缩略图\n核心\n\n推理进度展示\n显示预处理和推理的实时进度条\n核心\n\n结果展示模块\n展示主要预测标签与置信度分布图\n核心\n\n用户反馈模块\n收集准确/有误评价，支持手动修正\n重要\n\n历史记录模块\n保存本次会话内的识别历史\n辅助\n\n报告导出模块\n支持结果导出为 PDF/JSON\n辅助\n\n帮助说明模块\n提供使用指南、常见问题解答\n辅助\n\n2.4 错误处理与用户提示\n\n系统须对以下常见错误场景进行友好提示，避免用户困惑：\n\n错误场景\n错误原因\n用户提示内容\n\n上传文件格式不支持\n非 JPG/PNG/BMP 格式\n\"请上传 JPG、PNG 或 BMP 格式的图片文件\"\n\n文件体积超限\n文件大于 5MB\n\"图片文件过大，请压缩后重新上传（建议小于 5MB）\"\n\n图片分辨率过低\n图像过小，人脸特征不清晰\n\"图片分辨率过低，建议上传至少 100×100 像素的清晰人脸照片\"\n\n未检测到人脸\n图片中无明显人脸区域\n\"未能在图片中检测到人脸，请上传包含正面人脸的清晰照片\"\n\n模型加载失败\nONNX 文件缺失或损坏\n\"模型加载异常，请刷新页面重试；如问题持续，请联系管理员\"\n\n推理超时\n服务端资源不足\n\"识别请求超时，请稍后重试\"\n\n网络连接失败\n前端无法连通后端\n\"网络连接失败，请检查您的网络连接后重试\"\n\n---\n\n3. 交互优化建议\n\n3.1 性能优化\n\n批量处理：\n- 支持用户一次上传多张图片，系统在后端以批量推理（batch inference）方式统一处理，充分利用 ONNX Runtime 的向量化计算能力，显著降低多图场景下的平均响应时间。\n- 前端以任务队列形式展示各图片的识别进度，用户可随时查看每张图片的处理状态。\n\n缓存机制：\n- 对相同 MD5 哈希值的图片，后端直接返回缓存的推理结果，避免重复计算，节省服务器资源。\n- 模型在服务启动时预加载（预热），避免首次请求时的冷启动延迟，确保每次用户请求均能在 1 秒内响应。\n- 使用 Redis 或内存缓存存储近期推理结果，缓存有效期可设置为 1 小时。\n\n异步处理：\n- 采用异步非阻塞架构（如 FastAPI + asyncio），前端提交图片后立即返回任务 ID，后台异步完成推理，推理完成后通过 WebSocket 或轮询方式通知前端更新结果。\n\n3.2 用户体验优化\n\n• 即时反馈：上传图片后立即展示\"识别中\"动画，减少用户等待焦虑；整个识别流程目标控制在 2 秒以内完成。\n\n• 渐进式结果展示：预处理完成后先展示中间状态（如灰度化预览图），模型推理完成后再展示最终结果，让用户感知到系统正在\"思考\"。\n\n• 移动端适配：界面采用响应式布局（Responsive Design），在手机、平板和桌面端均有良好的使用体验；支持移动端直接拍照上传。\n\n• 无障碍设计：为图片识别结果添加语音播报功能（Web Speech API），方便视障用户使用；所有交互元素均提供键盘导航支持。\n\n• 结果可解释性：通过置信度分布图和热力图（Grad-CAM 可视化）让用户理解模型关注的人脸区域，提升系统的可信度和透明度。\n\n3.3 可靠性保障\n\n• 输入合法性校验：前端与后端均实施双重校验，防止恶意文件上传和注入攻击。\n\n• 服务高可用：后端部署多实例负载均衡，单节点故障不影响整体服务可用性；目标系统可用性不低于 99.9%。\n\n• 日志与监控：记录每次推理请求的时间戳、输入图片哈希、推理耗时及输出结果，便于问题排查和性能分析。\n\n• 隐私保护：用户上传的图片在推理完成后立即从服务器内存中清除，不持久化存储原始图像，保护用户隐私；如需存储，须明确告知用户并获得授权。\n\n• 模型版本管理：建立模型版本控制机制，支持灰度发布和快速回滚，确保模型更新不影响线上服务稳定性。\n\n---\n\n4. 实施建议\n\n4.1 技术选型建议\n\n层级\n推荐技术栈\n说明\n\n前端界面\nReact / Vue.js + Ant Design\n成熟的组件库，快速构建专业 UI\n\n后端 API\nPython FastAPI\n原生支持异步，与 ONNX Runtime 无缝集成\n\n推理引擎\nONNX Runtime (onnxruntime)\n官方推荐，支持 CPU/GPU 加速\n\n缓存服务\nRedis\n高性能内存缓存，支持结果复用\n\n部署容器\nDocker + Nginx\n环境一致性，便于横向扩展\n\n4.2 核心后端接口设计\n\nPOST /api/predict\nContent-Type: multipart/form-data\nBody: { image: <文件> }\n\nResponse 200:\n{\n  \"predicted_label\": 1,\n  \"predicted_emotion\": \"happiness\",\n  \"confidence_scores\": {\n    \"neutral\": 0.12,\n    \"happiness\": 0.76,\n    \"surprise\": 0.05,\n    \"sadness\": 0.02,\n    \"anger\": 0.01,\n    \"disgust\": 0.01,\n    \"fear\": 0.02,\n    \"contempt\": 0.01\n  },\n  \"inference_time_ms\": 45\n}\n\n4.3 部署与上线流程\n\n• 本地验证：使用 img_test.png 等测试图片验证推理管道端到端可用性，确认 predicted_emotion 输出正确。\n\n• 接口测试：通过 Postman 或自动化测试脚本对 /api/predict 接口进行功能测试和压力测试。\n\n• 容器化打包：编写 Dockerfile，将 emotion-ferplus.onnx 模型文件与推理代码一同打包，确保环境可复现。\n\n• 灰度发布：先对 10% 的用户流量开放新版本，观察识别准确率和响应时间指标，稳定后全量发布。\n\n• 持续迭代：根据用户反馈数据定期评估模型性能，结合新收集的标注数据进行模型微调，不断提升识别准确率。\n\n4.4 总结\n\n本方案以 Web 交互界面 为核心载体，以 emotion-ferplus.onnx 模型为推理引擎，设计了一套完整的面部表情识别人机交互流程。方案遵循\"简单上传、自动识别、直观展示、友好反馈\"的设计原则，通过批量处理、缓存机制和异步架构保障系统性能，通过双重校验、高可用部署和隐私保护确保系统可靠性，能够有效满足实际业务场景中对表情识别系统的交互需求。"
        ]
      }
    ],
    "answer": null
  },
  {
    "id": "3.2.4",
    "code": "3.2.4",
    "name": "花朵智能识别系统交互流程设计",
    "chapter": 3,
    "chapterName": "智能系统设计",
    "time": "20min",
    "tasks": "花朵智能识别系统在现代城市绿化管理中起着越来越重要的作用，其利用先进的计算机视觉技术，如花朵检测与识别，实现了对花朵种类的实时监控与管理。本系统要求开发一个基于已训练模型的花朵检测与分类系统，能够准确识别出不同类别的花朵。\nAI模型说明：提供的模型“flower-detection.onnx”是使用 Pytorch 框架和基于深度卷积神经网络训练得到的，专门用于进行花朵识别。对应的标签文件为“labels.txt”。 该模型的使用交互流程为：\n1)加载模型“flower-detection.onnx”和加载类别标签“labels.txt”；\n2)加载一张本地花朵图片“flower_test.png”，并预处理图像；\n3)使用flower-detection模型对花朵图片进行识别；\n4)输出花朵的预测类型和识别的准确率。\n你作为一名人工智能训练师，请完成以下工作任务：\n（1）补全该模型的使用交互流程对应的Python代码（3.2.4.ipynb），实现本地测试图片“flower _test.png”的识别，将其识别结果截图保存为jpg格式文件，命名为3.2.4-1.jpg。\n（2）在上面的使用交互流程基础上，给出在花朵智能识别系统中使用“flower-detection.onnx”模型的一种人机交互的最优流程，将其保存为docx文件，命名为3.2.4.docx。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
    "totalScore": 20,
    "rubric": [
      {
        "id": "M1",
        "score": 2,
        "desc": "模型加载代码正确得2分"
      },
      {
        "id": "M2",
        "score": 2,
        "desc": "类别标签加载代码正确得2分"
      },
      {
        "id": "M3",
        "score": 2,
        "desc": "从指定路径加载图片代码正确得2分；"
      },
      {
        "id": "M4",
        "score": 2,
        "desc": "预处理图片代码正确得2分；"
      },
      {
        "id": "M5",
        "score": 2,
        "desc": "使用模型对图片进行识别代码正确得2分；"
      },
      {
        "id": "M6",
        "score": 2,
        "desc": "获取识别分类后的准确率代码正确得2分；"
      },
      {
        "id": "M7",
        "score": 2,
        "desc": "获取预测的类别索引代码正确得2分；"
      },
      {
        "id": "M8",
        "score": 2,
        "desc": "获取预测的准确值（转换为百分比）代码正确得2分；"
      },
      {
        "id": "M9",
        "score": 2,
        "desc": "获取预测的类别标签代码正确得2分；"
      },
      {
        "id": "M10",
        "score": 1,
        "desc": "截图3.2.4-1.jpg中类别和准确率正确得1分；"
      },
      {
        "id": "M11",
        "score": 1,
        "desc": "人机交互最优流程（不少于3条）正确得1分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "花朵智能识别系统在现代城市绿化管理中起着越来越重要的作用，其利用先进的计算机视觉技术，如花朵检测与识别，实现了对花朵种类的实时监控与管理。本系统要求开发一个基于已训练模型的花朵检测与分类系统，能够准确识别出不同类别的花朵。\nAI模型说明：提供的模型“flower-detection.onnx”是使用 Pytorch 框架和基于深度卷积神经网络训练得到的，专门用于进行花朵识别。对应的标签文件为“labels.txt”。 该模型的使用交互流程为：\n1)加载模型“flower-detection.onnx”和加载类别标签“labels.txt”；\n2)加载一张本地花朵图片“flower_test.png”，并预处理图像；\n3)使用flower-detection模型对花朵图片进行识别；\n4)输出花朵的预测类型和识别的准确率。\n你作为一名人工智能训练师，请完成以下工作任务：\n（1）补全该模型的使用交互流程对应的Python代码（3.2.4.ipynb），实现本地测试图片“flower _test.png”的识别，将其识别结果截图保存为jpg格式文件，命名为3.2.4-1.jpg。\n（2）在上面的使用交互流程基础上，给出在花朵智能识别系统中使用“flower-detection.onnx”模型的一种人机交互的最优流程，将其保存为docx文件，命名为3.2.4.docx。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
        "score": 0
      },
      {
        "id": "code_0",
        "type": "code",
        "title": "加载模型",
        "code": "import onnxruntime as ort\nimport numpy as np\nimport scipy.special\nfrom PIL import Image\n\n\ndef preprocess_image(image, resize_size=256, crop_size=224, mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]):\n    image = image.resize((resize_size, resize_size), Image.BILINEAR)\n    w, h = image.size\n    left = (w - crop_size) / 2\n    top = (h - crop_size) / 2\n    image = image.crop((left, top, left + crop_size, top + crop_size))\n    image = np.array(image).astype(np.float32)\n    image = image / 255.0\n    image = (image - mean) / std\n    image = np.transpose(image, (2, 0, 1))\n    image = image.reshape((1,) + image.shape)\n    return image\n\n\nsession = ___\n\n\nwith ___ as f:\n    labels = [line.strip() for line in f.readlines()]\n\n\ninput_name = session.get_inputs()[0].name\noutput_name = session.get_outputs()[0].name\n\n\nimage = ___('RGB')\n\n\nprocessed_image = ___\n\n\nprocessed_image = processed_image.astype(np.float32)\n\n\noutput = ___([output_name], {input_name: processed_image})[0]\n\n\naccuracy = ___(output, axis=-1)\n\n\npredicted_idx =  ___\n\n\nprob_percentage =  ___\n\n\npredicted_label = ___\n\n\nprint(f\"Predicted class: {predicted_label}, Accuracy: {prob_percentage:.2f}%\")",
        "cellIndex": 0,
        "blanks": [
          {
            "blankIndex": 0,
            "score": 2,
            "desc": "加载模型",
            "answer": null,
            "rubricId": "M1"
          },
          {
            "blankIndex": 1,
            "score": 2,
            "desc": "加载类别标签",
            "answer": null,
            "rubricId": "M2"
          },
          {
            "blankIndex": 2,
            "score": 2,
            "desc": "加载图片",
            "answer": null,
            "rubricId": "M3"
          },
          {
            "blankIndex": 3,
            "score": 2,
            "desc": "预处理图片",
            "answer": null,
            "rubricId": "M4"
          },
          {
            "blankIndex": 4,
            "score": 2,
            "desc": "进行图片识别",
            "answer": null,
            "rubricId": "M5"
          },
          {
            "blankIndex": 5,
            "score": 2,
            "desc": "应用 softmax 函数获取识别分类后的准确率",
            "answer": null,
            "rubricId": "M6"
          },
          {
            "blankIndex": 6,
            "score": 2,
            "desc": "predicted_idx =  ___",
            "answer": null,
            "rubricId": "M7"
          },
          {
            "blankIndex": 7,
            "score": 2,
            "desc": "prob_percentage =  ___",
            "answer": null,
            "rubricId": "M8"
          },
          {
            "blankIndex": 8,
            "score": 2,
            "desc": "predicted_label = ___",
            "answer": null,
            "rubricId": "M9"
          }
        ],
        "score": 18,
        "answer": null,
        "rubric": [
          {
            "id": "M1",
            "score": 2,
            "desc": "模型加载代码正确得2分"
          }
        ]
      },
      {
        "id": "doc_3.2.4",
        "type": "doc",
        "title": "人机交互",
        "sectionId": "3.2.4",
        "prompt": "",
        "docFile": "3.2.4.docx",
        "template": {
          "source": "3.2.4.docx",
          "layout": "sections",
          "sections": [
            {
              "type": "textarea",
              "label": "人机交互的最优方式（答对3条以上正确得1分）",
              "large": true,
              "placeholder": "请在此填写"
            }
          ]
        },
        "rubric": [
          {
            "id": "M11",
            "score": 1,
            "desc": "人机交互最优流程（不少于3条）正确得1分；"
          }
        ],
        "score": 1,
        "answer": null,
        "docAnswer": [
          "1. 系统概述\n\n1.1 系统功能描述\n\n花朵智能识别系统是一套基于深度学习的图像分类应用，能够对用户上传的花朵图片进行自动识别，输出花朵的预测类别及对应的识别准确率。系统面向花卉爱好者、园艺工作者及科研人员，提供便捷、高效的花卉种类鉴定服务。\n\n系统核心功能包括：\n- 花朵图片上传与管理\n- 基于 ONNX 模型的图像智能识别\n- 花朵类别预测结果展示\n- 识别准确率（置信度）可视化\n- 历史识别记录查询\n\n1.2 技术架构\n\n系统采用 flower-detection.onnx 预训练模型作为核心推理引擎，完整推理流程如下：\n\n加载模型和类别标签\n       ↓\n加载花朵图片（flower_test.png）\n       ↓\n图像预处理\n       ↓\n模型推理（ONNX Runtime）\n       ↓\n输出花朵预测类型和识别准确率\n\n推理流程技术细节：\n\n环节\n技术实现\n\n模型加载\nonnxruntime.InferenceSession(\"flower-detection.onnx\")\n\n标签加载\n读取 labels.txt 中的花朵类别标签列表\n\n图像输入\nPIL.Image.open() 读取 RGB 图像\n\n尺寸调整\nimage.resize((256, 256), Image.BILINEAR)\n\n中心裁剪\nimage.crop() 裁剪为 224×224\n\n类型转换\nnp.array(image).astype(np.float32)\n\n归一化\nimage / 255.0 缩放至 [0, 1]\n\n标准化\n(image - mean) / std，均值 [0.485, 0.456, 0.406]，标准差 [0.229, 0.224, 0.225]\n\n维度转换\nnp.transpose(image, (2, 0, 1))，HWC → CHW\n\n批次扩展\nimage.reshape((1,) + image.shape)，添加批次维度\n\n模型推理\nsession.run([output_name], {input_name: processed_image})[0]\n\n概率计算\nscipy.special.softmax(output, axis=-1)\n\n结果输出\nnp.argmax() 取最高置信度类别，转换为百分比\n\n---\n\n2. 最优人机交互方式设计\n\n2.1 交互界面设计\n\n综合考虑易用性、可访问性与部署成本，推荐采用 Web 界面 作为最优交互方式。\n\n选型理由：\n- 无需安装客户端，用户通过浏览器即可访问\n- 跨平台兼容（PC、平板、手机均可使用）\n- 便于集中维护与版本迭代\n- 支持前后端分离，后端可横向扩展\n\n界面布局设计：\n\n┌─────────────────────────────────────────────────┐\n│              花朵智能识别系统                      │\n├──────────────┬──────────────────────────────────┤\n│              │  识别结果区域                      │\n│  图片上传区域 │  ┌──────────────────────────┐   │\n│              │  │ 预测类别：玫瑰（Rose）     │   │\n│  [拖拽或点击  │  │ 识别准确率：96.3%         │   │\n│   上传图片]   │  │ ████████████████░░ 96%   │   │\n│              │  └──────────────────────────┘   │\n│  [预览图片]   │  候选类别 TOP-3：               │\n│              │  1. 玫瑰    96.3%               │\n│              │  2. 芍药     2.1%               │\n│  [开始识别]   │  3. 牡丹    1.6%               │\n├──────────────┴──────────────────────────────────┤\n│                   历史识别记录                    │\n└─────────────────────────────────────────────────┘\n\n2.2 用户操作流程\n\nStep 1：用户上传图片\n\n交互设计：\n- 提供两种上传方式：\n  - 拖拽上传：用户将图片文件拖入指定区域，系统自动加载预览\n  - 点击上传：点击上传按钮，弹出文件选择对话框\n- 图片上传后在左侧区域实时预览，便于用户确认\n- 支持格式：JPG、PNG、BMP、WEBP（推荐上传清晰的花朵主体图片）\n- 文件大小限制：不超过 10 MB\n- 上传完成后显示文件名与图片尺寸信息\n\n用户提示示例：\n\n请上传包含清晰花朵主体的图片，建议图片分辨率不低于 224×224 像素，以获得最佳识别效果。\n\nStep 2：系统自动预处理\n\n用户点击\"开始识别\"按钮后，系统在后端自动执行以下预处理流程（用户无需手动操作）：\n\n• 读取上传图片，通过 PIL.Image.open() 加载为 RGB 格式\n\n• 双线性插值缩放至 256×256：image.resize((256, 256), Image.BILINEAR)\n\n• 中心裁剪至 224×224：image.crop()\n\n• 转换为 float32 数组：np.array(image).astype(np.float32)\n\n• 像素值归一化至 [0, 1]：image / 255.0\n\n• ImageNet 标准化：(image - [0.485, 0.456, 0.406]) / [0.229, 0.224, 0.225]\n\n• 维度变换 HWC → CHW：np.transpose(image, (2, 0, 1))\n\n• 增加批次维度：image.reshape((1,) + image.shape)\n\n界面交互： 预处理期间显示进度动画（旋转加载图标），提示\"图片处理中，请稍候…\"\n\nStep 3：模型推理与结果展示\n\n推理过程（后端自动执行）：\n\nsession = ort.InferenceSession(\"flower-detection.onnx\")\ninput_name  = session.get_inputs()[0].name\noutput_name = session.get_outputs()[0].name\noutput = session.run([output_name], {input_name: processed_image})[0]\n\n# 后处理：Softmax → 概率 → 类别\nprobabilities = softmax(output, axis=-1)\npred_index    = np.argmax(probabilities)\nconfidence    = probabilities[0][pred_index] * 100\npred_label    = labels[pred_index]\n\n结果展示区域（前端渲染）：\n\n• 主结果卡片：大字号显示预测花朵类别名称（中英文）及置信度百分比\n\n• 置信度进度条：直观呈现准确率高低\n\n• TOP-3 候选列表：展示前三个概率最高的类别及对应置信度，帮助用户判断边界情况\n\n• 识别耗时：显示本次推理所用时间（毫秒）\n\nStep 4：结果反馈与优化\n\n用户反馈机制：\n- 在结果区域提供\"识别正确 / 识别有误\"的反馈按钮\n- 若用户标记识别有误，弹出下拉框允许用户从标签列表中选择正确类别\n- 用户反馈数据存入日志，为后续模型迭代优化提供数据支撑\n\n结果导出功能：\n- 支持一键下载识别报告（包含原图、识别类别、置信度及时间戳）\n- 支持复制识别结果文本\n\n2.3 交互界面功能模块\n\n模块名称\n功能描述\n\n图片上传模块\n拖拽/点击上传，格式校验，图片预览\n\n预处理状态模块\n进度提示，处理状态可视化\n\n推理结果展示模块\n预测类别、置信度进度条、TOP-3 候选列表\n\n用户反馈模块\n正确/错误标注，正确类别选择\n\n历史记录模块\n近期识别历史查看，支持按时间/类别筛选\n\n帮助与说明模块\n使用指引、支持格式说明、常见问题解答\n\n2.4 错误处理与用户提示\n\n错误场景\n系统响应\n用户提示\n\n上传非图片格式文件\n拒绝上传，前端校验\n\"仅支持 JPG、PNG、BMP、WEBP 格式，请重新选择文件\"\n\n图片文件超过大小限制\n拒绝上传，前端校验\n\"图片大小超过 10 MB 限制，请压缩后重新上传\"\n\n图片内容无法识别（模型置信度过低）\n返回低置信度结果\n\"识别置信度较低（< 50%），建议上传花朵主体更清晰的图片\"\n\n图片中无明显花朵特征\n返回最高置信度结果并给出提示\n\"未检测到明显花朵特征，请确认上传图片是否包含花朵\"\n\n网络超时或服务器异常\n捕获异常，返回错误码\n\"识别服务暂时不可用，请稍后重试（错误码：500）\"\n\n模型文件加载失败\n服务启动检查，报警通知运维\n\"系统正在维护中，请稍后访问\"\n\n---\n\n3. 交互优化建议\n\n3.1 性能优化\n\n批量处理：\n- 支持用户一次上传多张图片（最多 20 张），系统以批次方式送入模型推理，充分利用硬件并行计算能力，减少单张处理的平均耗时\n- 批处理结果以列表形式展示，用户可逐条查看详情\n\n缓存机制：\n- 对相同 MD5 哈希值的图片缓存识别结果（Redis 缓存，TTL 设置为 24 小时），避免重复推理，降低服务器负载\n- ONNX Runtime 推理会话（InferenceSession）在服务启动时初始化并常驻内存，避免每次请求重复加载模型（模型文件 flower-detection.onnx 加载耗时较长）\n- 类别标签文件 labels.txt 在启动时一次性读入内存列表，避免反复 I/O\n\n异步处理：\n- 采用异步任务队列（如 Celery + RabbitMQ）处理推理请求，前端通过轮询或 WebSocket 获取结果，避免长时间阻塞 HTTP 连接\n\n3.2 用户体验优化\n\n• 即时预览：图片上传后立即在界面显示预览，让用户确认上传内容正确\n\n• 进度反馈：识别过程中显示分阶段进度提示（\"上传中…→预处理中…→识别中…→结果生成中…\"），减少用户等待焦虑\n\n• 结果可读性：识别结果同时展示中文名称与英文名称，对置信度用颜色区分（绿色 ≥ 80%、黄色 50%~79%、红色 < 50%）\n\n• 响应式设计：界面适配 PC 与移动端，支持触屏操作上传图片\n\n• 操作引导：首次访问时提供简短的使用引导动画（Tooltip/Tour），降低学习成本\n\n• 一键重试：识别失败时界面提供显眼的\"重新识别\"按钮，减少用户操作步骤\n\n3.3 可靠性保障\n\n• 输入校验：前端与后端双重验证图片格式与大小，防止恶意输入\n\n• 异常捕获：推理流程中对每个步骤（加载、预处理、推理、后处理）独立设置 try-except，精准定位故障点\n\n• 服务健康检查：提供 /health 接口，监控模型是否正常加载，供运维平台定期探测\n\n• 日志记录：记录每次识别请求的时间戳、图片哈希、预测结果与耗时，便于问题追溯与性能分析\n\n• 模型版本管理：为模型文件配置版本标识，支持灰度发布与回滚，保障生产环境稳定性\n\n---\n\n4. 实施建议\n\n4.1 推荐技术栈\n\n层次\n推荐技术\n\n前端界面\nVue 3 + Element Plus（或 React + Ant Design）\n\n后端服务\nPython FastAPI（异步高性能，与 ONNX Runtime 集成便捷）\n\n模型推理\nONNX Runtime（onnxruntime 库）\n\n图像处理\nPillow（PIL）、NumPy\n\n后处理\nSciPy（softmax）\n\n缓存\nRedis\n\n部署\nDocker 容器化部署，Nginx 反向代理\n\n4.2 部署与上线流程\n\n• 将 flower-detection.onnx 与 labels.txt 打包至后端服务容器\n\n• 后端服务启动时预加载模型（InferenceSession 初始化）与标签列表\n\n• 前端静态资源部署至 CDN 或 Nginx，后端 API 通过 Nginx 反向代理对外暴露\n\n• 配置接口限流（如每分钟每 IP 最多 30 次请求），防止滥用\n\n4.3 后续迭代方向\n\n• 扩充 labels.txt 标签体系，支持更多花卉品种识别\n\n• 引入目标检测模型，支持对图片中多朵花卉的同时检测与定位\n\n• 收集用户反馈数据，对 flower-detection.onnx 模型进行持续微调，提升识别准确率\n\n• 提供 API 接口文档，支持第三方开发者集成调用\n\n---\n\n总结： 本方案以 Web 界面为载体，将花朵智能识别的核心流程（图片上传→自动预处理→flower-detection.onnx 模型推理→结果展示→用户反馈）有机串联，兼顾了操作便捷性、结果可读性与系统可靠性，是面向通用用户群体的最优人机交互设计方案。"
        ]
      }
    ],
    "answer": null
  },
  {
    "id": "3.2.5",
    "code": "3.2.5",
    "name": "人脸AI智能检测系统交互流程设计",
    "chapter": 3,
    "chapterName": "智能系统设计",
    "time": "20min",
    "tasks": "在安防监控、智能交通等领域，实时准确的人脸检测需求日益增长。传统的人脸检测方法在面对复杂光照、多角度、遮挡等情况时，检测效果往往不尽人意。随着深度学习技术的发展，基于深度神经网络的人脸检测模型展现出强大的性能优势。ONNX（Open Neural Network Exchange）作为一种开放式的神经网络交换格式，能够实现不同深度学习框架间的模型转换与共享，使得基于 ONNX 的人脸检测模型可以在多种环境下高效运行。本系统所使用的 “version-RFB-320.onnx” 模型，通过大量数据训练，能够快速准确地检测出图像中的人脸，在实际应用场景中具有重要价值。\nAI 模型说明：“version-RFB-320.onnx” 模型是用于人脸检测的 ONNX 格式模型，对应的类别标签文件为 “voc-model-labels.txt” 。该模型的使用交互流程为：\n（1）加载 “version-RFB-320.onnx” 模型和 “voc-model-labels.txt” 类别标签；\n（2）加载本地测试图片文件夹 “imgs” 中的所有图片，并对每张图片进行预处理以符合模型输入要求；\n（3）使用 “version-RFB-320.onnx” 模型对加载的图片进行人脸检测；\n（4）在图片上绘制检测到的人脸框，并将处理后的图片保存到 “./detect_imgs_results_onnx” 文件夹中；\n（5）统计所有图片中检测到的人脸总数并输出。\n你作为一名人工智能训练师，请完成以下工作任务：\n（1）补全该模型的使用交互流程对应的 Python 代码（3.2.5.ipynb），实现本地测试图片文件夹 “imgs” 中所有图片的人脸检测，将运行结果截图保存到3.2.5-1.jpg中，并将检测结果的图片上传。\n（2）在上面的使用交互流程基础上，结合实际应用场景，设计在人脸检测系统中使用 “version-RFB-320.onnx” 模型的一种人机交互优化方案，包括交互界面布局、操作流程等内容，将其保存为docx文件，命名为 3.2.5.docx。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为 “准考证号 + 身份证号后六位”。",
    "totalScore": 20,
    "rubric": [
      {
        "id": "M1",
        "score": 2,
        "desc": "从标签文件中读取每一行，并去除行首尾的空白字符，得到类别名称列表代码正确得2分；"
      },
      {
        "id": "M2",
        "score": 2,
        "desc": "创建 ONNX Runtime 的推理会话，用于运行模型进行推理代码正确得2分；"
      },
      {
        "id": "M3",
        "score": 2,
        "desc": "获取模型输入的名称代码正确得2分；"
      },
      {
        "id": "M4",
        "score": 2,
        "desc": "果保存结果的目录不存在，则创建该目录代码得2分；"
      },
      {
        "id": "M5",
        "score": 2,
        "desc": "使用 OpenCV 读取图像文件 2分代码正确得2分；"
      },
      {
        "id": "M6",
        "score": 2,
        "desc": "将图像调整为 320x240 的尺寸（符合模型输入的尺寸要求）代码正确得2分；"
      },
      {
        "id": "M7",
        "score": 2,
        "desc": "定义图像归一化的均值数组代码正确得2分；"
      },
      {
        "id": "M8",
        "score": 1,
        "desc": "在第一个维度上扩展一个维度，将图像变为 (1, 通道数, 高度, 宽度)，以符合模型输入的维度要求代码正确得2分；"
      },
      {
        "id": "M9",
        "score": 2,
        "desc": "使用 ONNX Runtime 运行模型，输入图像数据，得到模型输出的置信度和边界框代码正确得2分；"
      },
      {
        "id": "M10",
        "score": 1,
        "desc": "本地保存运行结果的截图3.2.5-1.jpg中人脸数量正确：得1分；"
      },
      {
        "id": "M11",
        "score": 1,
        "desc": "检测结果的图片中人脸标注框和数量都正确得1分；"
      },
      {
        "id": "M12",
        "score": 1,
        "desc": "人机交互最优流程（不少于3条）正确得1分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "在安防监控、智能交通等领域，实时准确的人脸检测需求日益增长。传统的人脸检测方法在面对复杂光照、多角度、遮挡等情况时，检测效果往往不尽人意。随着深度学习技术的发展，基于深度神经网络的人脸检测模型展现出强大的性能优势。ONNX（Open Neural Network Exchange）作为一种开放式的神经网络交换格式，能够实现不同深度学习框架间的模型转换与共享，使得基于 ONNX 的人脸检测模型可以在多种环境下高效运行。本系统所使用的 “version-RFB-320.onnx” 模型，通过大量数据训练，能够快速准确地检测出图像中的人脸，在实际应用场景中具有重要价值。\nAI 模型说明：“version-RFB-320.onnx” 模型是用于人脸检测的 ONNX 格式模型，对应的类别标签文件为 “voc-model-labels.txt” 。该模型的使用交互流程为：\n（1）加载 “version-RFB-320.onnx” 模型和 “voc-model-labels.txt” 类别标签；\n（2）加载本地测试图片文件夹 “imgs” 中的所有图片，并对每张图片进行预处理以符合模型输入要求；\n（3）使用 “version-RFB-320.onnx” 模型对加载的图片进行人脸检测；\n（4）在图片上绘制检测到的人脸框，并将处理后的图片保存到 “./detect_imgs_results_onnx” 文件夹中；\n（5）统计所有图片中检测到的人脸总数并输出。\n你作为一名人工智能训练师，请完成以下工作任务：\n（1）补全该模型的使用交互流程对应的 Python 代码（3.2.5.ipynb），实现本地测试图片文件夹 “imgs” 中所有图片的人脸检测，将运行结果截图保存到3.2.5-1.jpg中，并将检测结果的图片上传。\n（2）在上面的使用交互流程基础上，结合实际应用场景，设计在人脸检测系统中使用 “version-RFB-320.onnx” 模型的一种人机交互优化方案，包括交互界面布局、操作流程等内容，将其保存为docx文件，命名为 3.2.5.docx。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为 “准考证号 + 身份证号后六位”。",
        "score": 0
      },
      {
        "id": "code_0",
        "type": "code",
        "title": "从标签文件中读取每一行，并去除行首尾的空白字符，得到类别名称列表",
        "code": "import os\nimport time\nimport cv2\nimport numpy as np\nimport vision.utils.box_utils_numpy as box_utils\nimport onnxruntime as ort\n\ndef predict(width, height, confidences, boxes, prob_threshold, iou_threshold=0.3, top_k=-1):\n    boxes = boxes[0]\n    confidences = confidences[0]\n    picked_box_probs = []\n    picked_labels = []\n    for class_index in range(1, confidences.shape[1]):\n        probs = confidences[:, class_index]\n        mask = probs > prob_threshold\n        probs = probs[mask]\n        if probs.shape[0] == 0:\n            continue\n        subset_boxes = boxes[mask, :]\n        box_probs = np.concatenate([subset_boxes, probs.reshape(-1, 1)], axis=1)\n        box_probs = box_utils.hard_nms(box_probs,\n                                       iou_threshold=iou_threshold,\n                                       top_k=top_k,\n                                       )\n        picked_box_probs.append(box_probs)\n        picked_labels.extend([class_index] * box_probs.shape[0])\n    if not picked_box_probs:\n        return np.array([]), np.array([]), np.array([])\n    picked_box_probs = np.concatenate(picked_box_probs)\n    picked_box_probs[:, 0] *= width\n    picked_box_probs[:, 1] *= height\n    picked_box_probs[:, 2] *= width\n    picked_box_probs[:, 3] *= height\n    return picked_box_probs[:, :4].astype(np.int32), np.array(picked_labels), picked_box_probs[:, 4]\n\nclass_names = [___ for name in open('voc-model-labels.txt').readlines()]\n\nort_session = ___('version-RFB-320.onnx')\n\ninput_name = ___()[0].name\n\nresult_path = \"./detect_imgs_results_onnx\"\n\nthreshold = 0.7\npath = \"imgs\"\nsum = 0\n\nif not os.path.exists(result_path):\n    os.___\n    \nlistdir = os.listdir(path)\n\nfor file_path in listdir:\n    img_path = os.path.join(path, file_path)\n    orig_image = ___\n    image = cv2.cvtColor(orig_image, cv2.COLOR_BGR2RGB)\n    image = ___(___, (320, 240))\n    image_mean = ___([127, 127, 127])\n    image = (image - image_mean) / 128\n    image = np.transpose(image, [2, 0, 1])\n    image = ___(image, axis=0)\n    image = image.astype(np.float32)\n    time_time = time.time()\n    confidences, boxes = ___(None, {input_name: image})\n    print(\"cost time:{}\".format(time.time() - time_time))\n    boxes, labels, probs = predict(orig_image.shape[1], orig_image.shape[0], confidences, boxes, threshold)\n    for i in range(boxes.shape[0]):\n        box = boxes[i, :]\n        label = f\"{class_names[labels[i]]}: {probs[i]:.2f}\"\n\n        cv2.rectangle(orig_image, (box[0], box[1]), (box[2], box[3]), (255, 255, 0), 4)\n        cv2.imwrite(os.path.join(result_path, file_path), orig_image)\n    sum += boxes.shape[0]\nprint(\"sum:{}\".format(sum))",
        "cellIndex": 0,
        "blanks": [
          {
            "blankIndex": 0,
            "score": 2,
            "desc": "从标签文件中读取每一行，并去除行首尾的空白字符，得到类别名称列表",
            "answer": null,
            "rubricId": "M1"
          },
          {
            "blankIndex": 1,
            "score": 2,
            "desc": "创建 ONNX Runtime 的推理会话，用于运行模型进行推理",
            "answer": null,
            "rubricId": "M2"
          },
          {
            "blankIndex": 2,
            "score": 2,
            "desc": "获取模型输入的名称",
            "answer": null,
            "rubricId": "M3"
          },
          {
            "blankIndex": 3,
            "score": 2,
            "desc": "如果保存结果的目录不存在，则创建该目录",
            "answer": null,
            "rubricId": "M4"
          },
          {
            "blankIndex": 4,
            "score": 2,
            "desc": "使用 OpenCV 读取图像文件",
            "answer": null,
            "rubricId": "M5"
          },
          {
            "blankIndex": 5,
            "score": 1,
            "desc": "将图像调整为 320x240 的尺寸（符合模型输入的尺寸要求）",
            "answer": null,
            "rubricId": "M6"
          },
          {
            "blankIndex": 6,
            "score": 1,
            "desc": "将图像调整为 320x240 的尺寸（符合模型输入的尺寸要求）",
            "answer": null,
            "rubricId": "M7"
          },
          {
            "blankIndex": 7,
            "score": 2,
            "desc": "定义图像归一化的均值数组",
            "answer": null,
            "rubricId": "M8"
          },
          {
            "blankIndex": 8,
            "score": 1,
            "desc": "在第一个维度上扩展一个维度，将图像变为 (1, 通道数, 高度, 宽度)，以符合模型输入的维度要求",
            "answer": null,
            "rubricId": "M9"
          },
          {
            "blankIndex": 9,
            "score": 2,
            "desc": "使用 ONNX Runtime 运行模型，输入图像数据，得到模型输出的置信度和边界框",
            "answer": null
          }
        ],
        "score": 17,
        "answer": null,
        "rubric": [
          {
            "id": "M1",
            "score": 2,
            "desc": "从标签文件中读取每一行，并去除行首尾的空白字符，得到类别名称列表代码正确得2分；"
          }
        ]
      }
    ],
    "answer": null
  },
  {
    "id": "4.1.1",
    "code": "4.1.1",
    "name": "Label studio培训大纲编写",
    "chapter": 4,
    "chapterName": "培训与指导",
    "time": "10min",
    "tasks": "A企业是一家康复训练机构，需要利用人工智能技术为康复患者提供个性化的康复训练计划，并实时监控训练效果。为了提高人工智能技术的应用效果，现计划对新进技术人员进行数据标注的培训。这次培训，将会使新进技术人员掌握Label studio标注工具的使用，能对文本、图像、视频、音频进行标注，达到人工智能训练师五级/初级工的技能水平。\n请你根据要求补全素材4.1.1.docx中的培训大纲。",
    "totalScore": 5,
    "rubric": [
      {
        "id": "M1",
        "score": 5,
        "desc": "回答内容与答案类似得1分；最多5分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "A企业是一家康复训练机构，需要利用人工智能技术为康复患者提供个性化的康复训练计划，并实时监控训练效果。为了提高人工智能技术的应用效果，现计划对新进技术人员进行数据标注的培训。这次培训，将会使新进技术人员掌握Label studio标注工具的使用，能对文本、图像、视频、音频进行标注，达到人工智能训练师五级/初级工的技能水平。\n请你根据要求补全素材4.1.1.docx中的培训大纲。",
        "score": 0
      },
      {
        "id": "doc_4.1.1",
        "type": "doc",
        "title": "培训大纲",
        "sectionId": "4.1.1",
        "prompt": "",
        "docFile": "4.1.1.docx",
        "template": {
          "source": "4.1.1.docx",
          "layout": "sections",
          "sections": [
            {
              "type": "subheading",
              "text": "根据学习大纲补充学习目标"
            },
            {
              "type": "block_title",
              "text": "引言"
            },
            {
              "type": "text_line",
              "text": "学习目标：了解数据标注的重要性和应用场景。"
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "介绍人工智能在康复训练中的应用，数据标注在个性化康复训练计划中的作用。"
            },
            {
              "type": "block_title",
              "text": "数据标注基础理论"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "学习目标："
                },
                {
                  "type": "blank"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "什么是数据标注？"
            },
            {
              "type": "text_line",
              "text": "数据标注的类型：文本、图像、视频、音频。"
            },
            {
              "type": "text_line",
              "text": "数据标注在人工智能中的作用和重要性。"
            },
            {
              "type": "block_title",
              "text": "Label Studio简介与安装"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "学习目标："
                },
                {
                  "type": "blank"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "Label Studio简介及应用场景。"
            },
            {
              "type": "text_line",
              "text": "安装与配置Label Studio。"
            },
            {
              "type": "text_line",
              "text": "Label Studio界面介绍和基本操作。"
            },
            {
              "type": "block_title",
              "text": "文本数据标注"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "学习目标："
                },
                {
                  "type": "blank"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "文本标注类型：命名实体识别、情感分析等。"
            },
            {
              "type": "text_line",
              "text": "Label Studio文本标注功能演示。"
            },
            {
              "type": "text_line",
              "text": "实践操作：标注一个文本数据集。"
            },
            {
              "type": "block_title",
              "text": "图像数据标注"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "学习目标："
                },
                {
                  "type": "blank"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "图像标注类型：图像分类、目标检测、图像分割等。"
            },
            {
              "type": "text_line",
              "text": "Label Studio图像标注功能演示。"
            },
            {
              "type": "text_line",
              "text": "实践操作：标注一个图像数据集。"
            },
            {
              "type": "block_title",
              "text": "视频数据标注"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "学习目标："
                },
                {
                  "type": "blank"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "视频标注类型：动作识别、事件检测等。"
            },
            {
              "type": "text_line",
              "text": "Label Studio视频标注功能演示。"
            },
            {
              "type": "text_line",
              "text": "实践操作：标注一个视频数据集。"
            },
            {
              "type": "block_title",
              "text": "音频数据标注"
            },
            {
              "type": "text_line",
              "text": "学习目标：掌握音频数据标注的方法和技巧。"
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "音频标注类型：语音识别、情感分析等。"
            },
            {
              "type": "text_line",
              "text": "Label Studio音频标注功能演示。"
            },
            {
              "type": "text_line",
              "text": "实践操作：标注一个音频数据集。"
            },
            {
              "type": "block_title",
              "text": "综合项目实践"
            },
            {
              "type": "text_line",
              "text": "学习目标：综合运用所学知识进行数据标注项目。"
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "项目介绍：为康复训练项目进行多模态数据标注（包括文本、图像、视频、音频）。"
            },
            {
              "type": "text_line",
              "text": "数据标注：学员分组进行实际数据标注任务。"
            },
            {
              "type": "text_line",
              "text": "项目评审：展示标注成果，讲解标注思路和遇到的问题。"
            },
            {
              "type": "block_title",
              "text": "总结与答疑"
            },
            {
              "type": "text_line",
              "text": "学习目标：巩固所学内容，解决学员疑问。"
            },
            {
              "type": "text_line",
              "text": "内容：培训内容总结，关键点回顾，学员提问与解答。"
            },
            {
              "type": "block_title",
              "text": "评估测试"
            },
            {
              "type": "text_line",
              "text": "学习目标：评估学员掌握的数据标注技能。"
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "理论测试：关于数据标注基本概念和Label Studio使用的笔试。"
            },
            {
              "type": "text_line",
              "text": "实操测试：要求学员完成指定的数据标注任务。"
            }
          ]
        },
        "rubric": [
          {
            "id": "M1",
            "score": 5,
            "desc": "回答内容与答案类似得1分；最多5分；"
          }
        ],
        "score": 5,
        "answer": null,
        "docAnswer": [
          "了解数据标注的基本概念、常见类型及其在人工智能训练中的重要性。",
          "掌握Label Studio的安装配置方法及界面基本操作。",
          "掌握使用Label Studio进行文本数据标注的方法，能够完成命名实体识别、情感分析等文本标注任务。",
          "掌握使用Label Studio进行图像数据标注的方法，能够完成图像分类、目标检测、图像分割等标注任务。",
          "掌握使用Label Studio进行视频数据标注的方法，能够完成动作识别、事件检测等视频标注任务。"
        ]
      }
    ],
    "answer": null
  },
  {
    "id": "4.1.2",
    "code": "4.1.2",
    "name": "爬虫培训大纲编写",
    "chapter": 4,
    "chapterName": "培训与指导",
    "time": "10min",
    "tasks": "A企业是一家互联网金融机构，需要利用人工智能技术获取大量上市公司的财务报告。为了提高获取效率，现计划对新进技术人员进行网页爬虫工具的使用培训。通过这次培训，将会使新进技术人员掌握常用网页爬虫工具的使用，能对网络公开的上市公司财务报告进行获取，达到人工智能训练师四级/中级工的技能水平。\n请你根据要求补全素材4.1.2.docx中的培训大纲。",
    "totalScore": 5,
    "rubric": [
      {
        "id": "M1",
        "score": 5,
        "desc": "回答内容与答案类似得1分；最多5分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "A企业是一家互联网金融机构，需要利用人工智能技术获取大量上市公司的财务报告。为了提高获取效率，现计划对新进技术人员进行网页爬虫工具的使用培训。通过这次培训，将会使新进技术人员掌握常用网页爬虫工具的使用，能对网络公开的上市公司财务报告进行获取，达到人工智能训练师四级/中级工的技能水平。\n请你根据要求补全素材4.1.2.docx中的培训大纲。",
        "score": 0
      },
      {
        "id": "doc_4.1.2",
        "type": "doc",
        "title": "培训大纲",
        "sectionId": "4.1.2",
        "prompt": "",
        "docFile": "4.1.2.docx",
        "template": {
          "source": "4.1.2.docx",
          "layout": "sections",
          "sections": [
            {
              "type": "subheading",
              "text": "根据学习大纲补充学习目标"
            },
            {
              "type": "block_title",
              "text": "引言"
            },
            {
              "type": "text_line",
              "text": "学习目标：了解网页爬虫的重要性和应用场景。"
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "介绍人工智能在金融数据采集中的应用，网页爬虫在获取上市公司财务报告中的作用。"
            },
            {
              "type": "block_title",
              "text": "网页爬虫基础理论"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "学习目标："
                },
                {
                  "type": "blank"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "什么是网页爬虫？"
            },
            {
              "type": "text_line",
              "text": "网页爬虫的工作流程和基本结构。"
            },
            {
              "type": "text_line",
              "text": "机器人协议（robots.txt）的作用和遵守方法。"
            },
            {
              "type": "block_title",
              "text": "常用网页爬虫工具简介"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "学习目标："
                },
                {
                  "type": "blank"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "BeautifulSoup：用于解析HTML和XML文档。"
            },
            {
              "type": "text_line",
              "text": "Scrapy：一个快速、高效的网页爬虫框架。"
            },
            {
              "type": "text_line",
              "text": "Selenium：用于模拟浏览器操作，处理动态网页。"
            },
            {
              "type": "block_title",
              "text": "环境搭建与工具安装"
            },
            {
              "type": "text_line",
              "text": "学习目标：掌握网页爬虫工具的安装和环境配置。"
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "安装Python和pip包管理工具。"
            },
            {
              "type": "text_line",
              "text": "安装并配置BeautifulSoup、Scrapy、Selenium。"
            },
            {
              "type": "block_title",
              "text": "网页数据解析"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "学习目标："
                },
                {
                  "type": "blank"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "使用BeautifulSoup进行HTML解析。"
            },
            {
              "type": "text_line",
              "text": "使用XPath和CSS选择器提取数据。"
            },
            {
              "type": "text_line",
              "text": "实践操作：解析一个简单的网页数据。"
            },
            {
              "type": "block_title",
              "text": "动态网页处理"
            },
            {
              "type": "text_line",
              "text": "学习目标：掌握处理动态网页的方法。"
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "使用Selenium模拟浏览器操作。"
            },
            {
              "type": "text_line",
              "text": "处理动态加载的数据，如Ajax请求。"
            },
            {
              "type": "text_line",
              "text": "实践操作：爬取一个动态加载的网页数据。"
            },
            {
              "type": "block_title",
              "text": "Scrapy框架实战"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "学习目标："
                },
                {
                  "type": "blank"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "Scrapy项目的创建和基本配置。"
            },
            {
              "type": "text_line",
              "text": "编写爬虫脚本，设置抓取规则。"
            },
            {
              "type": "text_line",
              "text": "数据存储与导出：将数据保存为CSV、JSON等格式。"
            },
            {
              "type": "text_line",
              "text": "实践操作：构建一个Scrapy爬虫项目，获取上市公司财务报告。"
            },
            {
              "type": "block_title",
              "text": "数据清洗与处理"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "学习目标："
                },
                {
                  "type": "blank"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "数据去重、缺失值处理。"
            },
            {
              "type": "text_line",
              "text": "数据格式转换与规范化。"
            },
            {
              "type": "text_line",
              "text": "实践操作：对获取的财务报告数据进行清洗和处理。"
            },
            {
              "type": "block_title",
              "text": "综合项目实践"
            },
            {
              "type": "text_line",
              "text": "学习目标：综合运用所学知识进行网页爬虫项目。"
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "项目介绍：构建一个完整的财务报告爬虫项目。"
            },
            {
              "type": "text_line",
              "text": "数据采集：获取多个网站的财务报告数据。"
            },
            {
              "type": "text_line",
              "text": "数据处理与分析：清洗并分析获取的数据。"
            },
            {
              "type": "text_line",
              "text": "项目评审：展示爬虫成果，讲解实现思路和遇到的问题。"
            },
            {
              "type": "block_title",
              "text": "总结与答疑"
            },
            {
              "type": "text_line",
              "text": "学习目标：巩固所学内容，解决学员疑问。"
            },
            {
              "type": "text_line",
              "text": "内容：培训内容总结，关键点回顾，学员提问与解答。"
            },
            {
              "type": "block_title",
              "text": "评估测试"
            },
            {
              "type": "text_line",
              "text": "学习目标：评估学员掌握的网页爬虫技能。"
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "理论测试：关于网页爬虫基本概念和工具使用的笔试。"
            },
            {
              "type": "text_line",
              "text": "实操测试：要求学员完成指定的网页爬虫任务。"
            }
          ]
        },
        "rubric": [
          {
            "id": "M1",
            "score": 5,
            "desc": "回答内容与答案类似得1分；最多5分；"
          }
        ],
        "score": 5,
        "answer": null,
        "docAnswer": [
          "了解网页爬虫的基本概念、工作流程及合规使用要求（robots.txt协议）。",
          "了解BeautifulSoup、Scrapy、Selenium等常用爬虫工具的特点和适用场景。",
          "掌握使用BeautifulSoup进行HTML解析及使用XPath/CSS选择器提取数据的方法。",
          "掌握Scrapy框架的基本使用方法，能够构建爬虫项目并获取上市公司财务报告数据。",
          "掌握对爬取数据进行去重、缺失值处理及格式转换等基本清洗操作的方法。"
        ]
      }
    ],
    "answer": null
  },
  {
    "id": "4.1.3",
    "code": "4.1.3",
    "name": "数据清洗培训大纲编写",
    "chapter": 4,
    "chapterName": "培训与指导",
    "time": "10min",
    "tasks": "A企业是一家康复训练机构，需要利用人工智能技术为康复患者提供个性化的康复训练计划，并实时监控训练效果。为了提高人工智能技术的应用效果，其采集了大量的康复数据，现计划对新进技术人员进行数据清洗工具的使用培训。通过这次培训，将会使新进技术人员掌握4中基于Python的数据清洗工具的使用，能对大量的康复数据进行清洗，达到人工智能训练师四级/中级工的技能水平。\n请你根据要求补全素材4.1.3.docx中的培训大纲。",
    "totalScore": 5,
    "rubric": [
      {
        "id": "M1",
        "score": 5,
        "desc": "回答内容与答案类似得1分；最多5分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "A企业是一家康复训练机构，需要利用人工智能技术为康复患者提供个性化的康复训练计划，并实时监控训练效果。为了提高人工智能技术的应用效果，其采集了大量的康复数据，现计划对新进技术人员进行数据清洗工具的使用培训。通过这次培训，将会使新进技术人员掌握4中基于Python的数据清洗工具的使用，能对大量的康复数据进行清洗，达到人工智能训练师四级/中级工的技能水平。\n请你根据要求补全素材4.1.3.docx中的培训大纲。",
        "score": 0
      },
      {
        "id": "doc_4.1.3",
        "type": "doc",
        "title": "培训大纲",
        "sectionId": "4.1.3",
        "prompt": "",
        "docFile": "4.1.3.docx",
        "template": {
          "source": "4.1.3.docx",
          "layout": "sections",
          "sections": [
            {
              "type": "subheading",
              "text": "根据学习大纲补充学习目标"
            },
            {
              "type": "block_title",
              "text": "引言"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "学习目标："
                },
                {
                  "type": "blank"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "介绍人工智能在康复训练中的应用，数据清洗在处理康复数据中的作用。"
            },
            {
              "type": "block_title",
              "text": "数据清洗基础理论"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "学习目标："
                },
                {
                  "type": "blank"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "什么是数据清洗？"
            },
            {
              "type": "text_line",
              "text": "数据清洗的常见任务：数据去重、缺失值处理、数据格式转换等。"
            },
            {
              "type": "text_line",
              "text": "数据清洗在数据分析和模型训练中的重要性。"
            },
            {
              "type": "block_title",
              "text": "常用数据清洗工具简介"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "学习目标："
                },
                {
                  "type": "blank"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "Pandas：强大的数据处理与分析工具。"
            },
            {
              "type": "text_line",
              "text": "NumPy：高性能科学计算和数据处理库。"
            },
            {
              "type": "text_line",
              "text": "OpenRefine：用于数据清洗的开源工具。"
            },
            {
              "type": "text_line",
              "text": "Dask：用于处理大规模数据的并行计算库。"
            },
            {
              "type": "block_title",
              "text": "环境搭建与工具安装"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "学习目标："
                },
                {
                  "type": "blank"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "安装Python和pip包管理工具。"
            },
            {
              "type": "text_line",
              "text": "安装并配置Pandas、NumPy、OpenRefine、Dask。"
            },
            {
              "type": "block_title",
              "text": "Pandas实战"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "学习目标："
                },
                {
                  "type": "blank"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "数据导入与导出：读取和保存CSV、Excel等格式的数据。"
            },
            {
              "type": "text_line",
              "text": "数据筛选与过滤：条件筛选、去重、缺失值处理。"
            },
            {
              "type": "text_line",
              "text": "数据转换：数据类型转换、时间序列处理。"
            },
            {
              "type": "text_line",
              "text": "实践操作：使用Pandas清洗一个康复数据集。"
            },
            {
              "type": "block_title",
              "text": "NumPy实战"
            },
            {
              "type": "text_line",
              "text": "学习目标：综合运用所学知识进行数据清洗项目。"
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "项目介绍：清洗一个多来源、多格式的康复数据集。"
            },
            {
              "type": "text_line",
              "text": "数据采集：导入多种格式的数据。"
            },
            {
              "type": "text_line",
              "text": "数据清洗：使用Pandas、NumPy、OpenRefine、Dask进行清洗。"
            },
            {
              "type": "text_line",
              "text": "项目评审：展示清洗成果，讲解实现思路和遇到的问题。"
            }
          ]
        },
        "rubric": [
          {
            "id": "M1",
            "score": 5,
            "desc": "回答内容与答案类似得1分；最多5分；"
          }
        ],
        "score": 5,
        "answer": null,
        "docAnswer": [
          "了解数据清洗的重要性及其在人工智能康复训练数据处理中的应用价值。",
          "了解数据清洗的基本概念、常见任务及其在数据分析和模型训练中的重要性。",
          "了解Pandas、NumPy、OpenRefine、Dask四种数据清洗工具的功能特点和适用场景。",
          "掌握Python环境及Pandas、NumPy、OpenRefine、Dask的安装与配置方法。",
          "掌握使用Pandas进行数据导入导出、筛选过滤、缺失值处理及数据类型转换的方法，能够完成康复数据的清洗任务。"
        ]
      }
    ],
    "answer": null
  },
  {
    "id": "4.1.4",
    "code": "4.1.4",
    "name": "Pandas数据清洗培训大纲编写",
    "chapter": 4,
    "chapterName": "培训与指导",
    "time": "10min",
    "tasks": "A企业是一家康复训练机构，需要利用人工智能技术为康复患者提供个性化的康复训练计划。为了提高人工智能技术的应用效果，其采集了大量的康复数据，现计划对新进技术人员进行数据清洗工具的使用培训。因为Pandas是Python中最为广泛使用的数据分析和操作库之一，因此这次培训将使新进技术人员掌握Pandas的主要数据清洗功能使用，能对大量的康复数据进行清洗，达到人工智能训练师四级/中级工的技能水平。\n请你根据要求补全素材4.1.4.docx中的培训大纲。",
    "totalScore": 5,
    "rubric": [
      {
        "id": "M1",
        "score": 5,
        "desc": "回答内容与答案类似得1分；最多5分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "A企业是一家康复训练机构，需要利用人工智能技术为康复患者提供个性化的康复训练计划。为了提高人工智能技术的应用效果，其采集了大量的康复数据，现计划对新进技术人员进行数据清洗工具的使用培训。因为Pandas是Python中最为广泛使用的数据分析和操作库之一，因此这次培训将使新进技术人员掌握Pandas的主要数据清洗功能使用，能对大量的康复数据进行清洗，达到人工智能训练师四级/中级工的技能水平。\n请你根据要求补全素材4.1.4.docx中的培训大纲。",
        "score": 0
      },
      {
        "id": "doc_4.1.4",
        "type": "doc",
        "title": "培训大纲",
        "sectionId": "4.1.4",
        "prompt": "",
        "docFile": "4.1.4.docx",
        "template": {
          "source": "4.1.4.docx",
          "layout": "sections",
          "sections": [
            {
              "type": "subheading",
              "text": "根据学习大纲补充学习目标"
            },
            {
              "type": "block_title",
              "text": "数据清洗基础理论"
            },
            {
              "type": "text_line",
              "text": "学习目标：掌握数据清洗的基本概念和流程。"
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "什么是数据清洗？"
            },
            {
              "type": "text_line",
              "text": "数据清洗的常见任务：数据去重、缺失值处理、数据格式转换等。"
            },
            {
              "type": "text_line",
              "text": "数据清洗在数据分析和模型训练中的重要性。"
            },
            {
              "type": "block_title",
              "text": "Pandas简介与安装"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "学习目标："
                },
                {
                  "type": "blank"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "读取CSV、Excel、SQL等格式的数据。"
            },
            {
              "type": "text_line",
              "text": "保存数据到CSV、Excel等格式。"
            },
            {
              "type": "text_line",
              "text": "实践操作：导入和导出康复数据集。"
            },
            {
              "type": "block_title",
              "text": "数据筛选与过滤"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "学习目标："
                },
                {
                  "type": "blank"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "条件筛选：基于单列或多列的条件筛选数据。"
            },
            {
              "type": "text_line",
              "text": "数据去重：去除重复记录。"
            },
            {
              "type": "text_line",
              "text": "缺失值处理：识别、删除和填充缺失值。"
            },
            {
              "type": "text_line",
              "text": "实践操作：筛选和过滤康复数据。"
            },
            {
              "type": "block_title",
              "text": "数据转换"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "学习目标："
                },
                {
                  "type": "blank"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "数据类型转换：转换数据类型（如字符串到日期）。"
            },
            {
              "type": "text_line",
              "text": "时间序列处理：处理和分析时间序列数据。"
            },
            {
              "type": "text_line",
              "text": "数据分列和合并：分割和合并数据列。"
            },
            {
              "type": "text_line",
              "text": "实践操作：转换和处理康复数据。"
            },
            {
              "type": "block_title",
              "text": "数据合并与重塑"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "学习目标："
                },
                {
                  "type": "blank"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "数据合并：concat和merge方法。"
            },
            {
              "type": "text_line",
              "text": "数据重塑：pivot和melt方法。"
            },
            {
              "type": "text_line",
              "text": "实践操作：合并和重塑康复数据。"
            },
            {
              "type": "block_title",
              "text": "数据分组与聚合"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "学习目标："
                },
                {
                  "type": "blank"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "数据分组：groupby方法。"
            },
            {
              "type": "text_line",
              "text": "聚合函数：sum、mean、count等。"
            },
            {
              "type": "text_line",
              "text": "实践操作：分组和聚合康复数据。"
            },
            {
              "type": "block_title",
              "text": "数据可视化"
            },
            {
              "type": "text_line",
              "text": "学习目标：综合运用所学知识进行数据清洗项目。"
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "项目介绍：清洗一个多来源的康复数据集。"
            },
            {
              "type": "text_line",
              "text": "数据采集：导入多种格式的数据。"
            },
            {
              "type": "text_line",
              "text": "数据清洗：使用Pandas进行数据清洗和转换。"
            },
            {
              "type": "text_line",
              "text": "项目评审：展示清洗成果，讲解实现思路和遇到的问题。"
            }
          ]
        },
        "rubric": [
          {
            "id": "M1",
            "score": 5,
            "desc": "回答内容与答案类似得1分；最多5分；"
          }
        ],
        "score": 5,
        "answer": null,
        "docAnswer": [
          "了解Pandas库的功能特点及应用场景，掌握数据的导入与导出操作。",
          "掌握使用Pandas进行条件筛选、数据去重和缺失值处理的方法。",
          "掌握使用Pandas进行数据类型转换、时间序列处理及数据列分割合并的方法。",
          "掌握使用Pandas的concat、merge方法合并数据及pivot、melt方法重塑数据的方法。",
          "掌握使用Pandas的groupby方法对数据进行分组，并运用聚合函数（sum、mean、count等）进行统计分析的方法。"
        ]
      }
    ],
    "answer": null
  },
  {
    "id": "4.1.5",
    "code": "4.1.5",
    "name": "Python数据可视化培训大纲编写",
    "chapter": 4,
    "chapterName": "培训与指导",
    "time": "10min",
    "tasks": "A企业是一家康复训练机构，需要利用人工智能技术为康复患者提供个性化的康复训练计划，并实时监控训练效果。为了提高人工智能技术的应用效果，其采集了大量的康复数据，现计划对新进技术人员进行数据可视化工具的使用培训。通过这次培训，将会使新进技术人员掌握Python的数据可视化工具的使用，能对重要数据进行可视化操作，达到人工智能训练师四级/中级工的技能水平。\n请你根据要求补全素材4.1.5.docx中的培训大纲。",
    "totalScore": 5,
    "rubric": [
      {
        "id": "M1",
        "score": 5,
        "desc": "回答内容与答案类似得1分；最多5分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "A企业是一家康复训练机构，需要利用人工智能技术为康复患者提供个性化的康复训练计划，并实时监控训练效果。为了提高人工智能技术的应用效果，其采集了大量的康复数据，现计划对新进技术人员进行数据可视化工具的使用培训。通过这次培训，将会使新进技术人员掌握Python的数据可视化工具的使用，能对重要数据进行可视化操作，达到人工智能训练师四级/中级工的技能水平。\n请你根据要求补全素材4.1.5.docx中的培训大纲。",
        "score": 0
      },
      {
        "id": "doc_4.1.5",
        "type": "doc",
        "title": "培训大纲",
        "sectionId": "4.1.5",
        "prompt": "",
        "docFile": "4.1.5.docx",
        "template": {
          "source": "4.1.5.docx",
          "layout": "sections",
          "sections": [
            {
              "type": "subheading",
              "text": "根据学习大纲补充学习目标"
            },
            {
              "type": "block_title",
              "text": "数据可视化基础理论"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "学习目标："
                },
                {
                  "type": "blank"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "什么是数据可视化？"
            },
            {
              "type": "text_line",
              "text": "数据可视化的目的和优势。"
            },
            {
              "type": "text_line",
              "text": "常见的数据可视化类型：条形图、折线图、散点图、饼图等。"
            },
            {
              "type": "block_title",
              "text": "Matplotlib简介与安装"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "学习目标："
                },
                {
                  "type": "blank"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "Matplotlib简介及其应用场景。"
            },
            {
              "type": "text_line",
              "text": "安装与配置Matplotlib库。"
            },
            {
              "type": "text_line",
              "text": "Matplotlib基本构架与常用组件。"
            },
            {
              "type": "block_title",
              "text": "Matplotlib基本绘图"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "学习目标："
                },
                {
                  "type": "blank"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "创建简单图表：折线图、条形图、饼图。"
            },
            {
              "type": "text_line",
              "text": "图表定制：标题、轴标签、图例、颜色等。"
            },
            {
              "type": "text_line",
              "text": "实践操作：使用Matplotlib绘制康复数据的基本图表。"
            },
            {
              "type": "block_title",
              "text": "Plotly简介与安装"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "学习目标："
                },
                {
                  "type": "blank"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "Plotly简介及其应用场景。"
            },
            {
              "type": "text_line",
              "text": "安装与配置Plotly库。"
            },
            {
              "type": "text_line",
              "text": "Plotly与Jupyter Notebook的结合使用。"
            },
            {
              "type": "block_title",
              "text": "Plotly交互式绘图"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "学习目标："
                },
                {
                  "type": "blank"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "创建交互式图表：折线图、散点图、饼图、地理图表。"
            },
            {
              "type": "text_line",
              "text": "图表交互功能：缩放、平移、悬停显示。"
            },
            {
              "type": "text_line",
              "text": "实践操作：使用Plotly绘制交互式康复数据图表。"
            },
            {
              "type": "block_title",
              "text": "数据可视化项目实战"
            },
            {
              "type": "text_line",
              "text": "学习目标：综合运用所学知识进行数据可视化项目。"
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "项目介绍：对康复数据进行可视化分析。"
            },
            {
              "type": "text_line",
              "text": "数据采集与预处理：导入并清洗康复数据。"
            },
            {
              "type": "text_line",
              "text": "数据可视化：使用Matplotlib、Seaborn、Plotly进行可视化分析。"
            },
            {
              "type": "text_line",
              "text": "项目评审：展示可视化成果，讲解实现思路和遇到的问题。"
            },
            {
              "type": "block_title",
              "text": "总结与答疑"
            },
            {
              "type": "text_line",
              "text": "学习目标：巩固所学内容，解决学员疑问。"
            },
            {
              "type": "text_line",
              "text": "内容：培训内容总结，关键点回顾，学员提问与解答。"
            },
            {
              "type": "block_title",
              "text": "评估测试"
            },
            {
              "type": "text_line",
              "text": "学习目标：评估学员掌握的数据可视化技能。"
            },
            {
              "type": "text_line",
              "text": "内容："
            },
            {
              "type": "text_line",
              "text": "理论测试：关于数据可视化基本概念和工具使用的笔试。"
            },
            {
              "type": "text_line",
              "text": "实操测试：要求学员完成指定的数据可视化任务。"
            }
          ]
        },
        "rubric": [
          {
            "id": "M1",
            "score": 5,
            "desc": "回答内容与答案类似得1分；最多5分；"
          }
        ],
        "score": 5,
        "answer": null,
        "docAnswer": [
          "了解数据可视化的基本概念、目的与优势，熟悉常见图表类型及其适用场景。",
          "了解Matplotlib库的功能特点和应用场景，掌握其安装配置及基本框架结构。",
          "掌握使用Matplotlib绘制折线图、条形图、饼图等基本图表及自定义图表样式的方法。",
          "了解Plotly库的功能特点和交互式可视化优势，掌握其安装配置及与Jupyter Notebook的结合使用方法。",
          "掌握使用Plotly创建交互式折线图、散点图、饼图等图表，并实现缩放、平移、悬停等交互功能的方法。"
        ]
      }
    ],
    "answer": null
  },
  {
    "id": "4.2.1",
    "code": "4.2.1",
    "name": "智能零售分析系统数据采集和处理指导",
    "chapter": 4,
    "chapterName": "培训与指导",
    "time": "10min",
    "tasks": "在快速发展的零售行业中，商家面临着巨大的竞争压力，需要精准地了解消费者行为、优化库存管理、预测销售趋势以及提升顾客体验。为了应对这些挑战，某大型连锁超市决定部署一套智能零售分析系统，该系统将利用人工智能和大数据分析来提升其业务效率和客户满意度。\n智能零售分析系统的目标包括：\n• 提高销售转化率和客户忠诚度。\n• 减少库存成本，避免滞销和断货。\n• 降低运营成本，提高供应链效率。\n• 加强市场竞争力，快速响应市场变化。\n智能零售分析系统的业务需求包括：\n• 顾客行为分析：收集顾客购物习惯、偏好和购买频率，以便于定制个性化营销策略。\n• 库存优化：实时监测货架上的商品存量，预测补货需求，减少过度库存和缺货情况。\n• 销售预测：基于历史销售数据和市场趋势，预测未来销售，辅助决策。\n• 动态定价：根据供需关系、竞争对手价格变动等因素，动态调整商品价格。\n• 客户满意度提升：通过分析顾客反馈和评论，识别服务短板，改进服务质量。\n你作为一名人工智能训练师，根据上述的智能零售分析系统的系统目标和业务需求，补全智能零售分析系统的数据采集和处理指导方案（见素材文件夹中的4.2.1.docx）。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
    "totalScore": 5,
    "rubric": [
      {
        "id": "M1",
        "score": 5,
        "desc": "正确补充方案内容的每1个内容点得1分，总计得5分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "在快速发展的零售行业中，商家面临着巨大的竞争压力，需要精准地了解消费者行为、优化库存管理、预测销售趋势以及提升顾客体验。为了应对这些挑战，某大型连锁超市决定部署一套智能零售分析系统，该系统将利用人工智能和大数据分析来提升其业务效率和客户满意度。\n智能零售分析系统的目标包括：\n提高销售转化率和客户忠诚度。\n减少库存成本，避免滞销和断货。\n降低运营成本，提高供应链效率。\n加强市场竞争力，快速响应市场变化。\n智能零售分析系统的业务需求包括：\n顾客行为分析：收集顾客购物习惯、偏好和购买频率，以便于定制个性化营销策略。\n库存优化：实时监测货架上的商品存量，预测补货需求，减少过度库存和缺货情况。\n销售预测：基于历史销售数据和市场趋势，预测未来销售，辅助决策。\n动态定价：根据供需关系、竞争对手价格变动等因素，动态调整商品价格。\n客户满意度提升：通过分析顾客反馈和评论，识别服务短板，改进服务质量。\n你作为一名人工智能训练师，根据上述的智能零售分析系统的系统目标和业务需求，补全智能零售分析系统的数据采集和处理指导方案（见素材文件夹中的4.2.1.docx）。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
        "score": 0
      },
      {
        "id": "doc_4.2.1",
        "type": "doc",
        "title": "指导方案",
        "sectionId": "4.2.1",
        "prompt": "",
        "docFile": "4.2.1.docx",
        "template": {
          "source": "4.2.1.docx",
          "layout": "sections",
          "sections": [
            {
              "type": "subheading",
              "text": "智能零售分析系统数据采集和处理指导方案"
            },
            {
              "type": "block_title",
              "text": "1. 数据源确定"
            },
            {
              "type": "text_line",
              "text": "• 销售点（POS）数据：从收银系统获取交易记录，包括商品种类、数量、价格和购买时间。"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "• 顾客信息：会员卡使用数据，包括"
                },
                {
                  "type": "blank"
                },
                {
                  "type": "text",
                  "value": "。"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "• 库存管理系统：实时库存量、入库和出库记录。"
            },
            {
              "type": "text_line",
              "text": "• 顾客反馈：在线评价、投诉和建议。"
            },
            {
              "type": "text_line",
              "text": "• 外部数据：天气预报、节假日信息、竞争对手价格数据。"
            },
            {
              "type": "block_title",
              "text": "2. 数据采集方法"
            },
            {
              "type": "text_line",
              "text": "• API接口：与内部系统（如POS、CRM）和外部数据提供商建立API连接，自动化数据抓取。"
            },
            {
              "type": "text_line",
              "text": "• 传感器和物联网设备：在货架上安装RFID标签和重量传感器，监测商品存量。"
            },
            {
              "type": "text_line",
              "text": "• 社交媒体监听：通过社交媒体API监听品牌相关的公众讨论和评价。"
            },
            {
              "type": "text_line",
              "text": "• 顾客调查：定期发送电子问卷，收集顾客反馈。"
            },
            {
              "type": "block_title",
              "text": "3. 数据预处理"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "• 清洗："
                },
                {
                  "type": "blank"
                },
                {
                  "type": "text",
                  "value": "。"
                }
              ]
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "• 标准化："
                },
                {
                  "type": "blank"
                },
                {
                  "type": "text",
                  "value": "。"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "• 整合：将来自不同来源的数据合并到单一数据库中，创建关联字段。"
            },
            {
              "type": "block_title",
              "text": "4. 数据安全与合规"
            },
            {
              "type": "text_line",
              "text": "• 加密传输：确保数据在传输过程中的安全。"
            },
            {
              "type": "text_line",
              "text": "• 访问控制：限制对敏感数据的访问权限，只允许授权人员查看。"
            },
            {
              "type": "text_line",
              "text": "• 匿名化处理：对个人信息进行去标识化，遵守GDPR等数据保护法规。"
            },
            {
              "type": "block_title",
              "text": "5. 数据存储与管理"
            },
            {
              "type": "text_line",
              "text": "• 云存储：选择可靠的云服务商，如AWS或Azure，存储海量数据。"
            },
            {
              "type": "text_line",
              "text": "• 备份与恢复：定期备份数据，并测试恢复流程，以防数据丢失。"
            },
            {
              "type": "block_title",
              "text": "6. 数据分析与应用"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "• 建模："
                },
                {
                  "type": "blank"
                },
                {
                  "type": "text",
                  "value": "。"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "• 可视化：开发仪表板展示关键指标，帮助管理层做出决策。"
            },
            {
              "type": "text_line",
              "text": "• 报告：定期生成销售、库存和顾客满意度报告，提供业务洞察。"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "• 通过上述方案，智能零售分析系统能够有效地采集、处理和分析大量数据，为企业提供决策支持，最终达到"
                },
                {
                  "type": "blank"
                },
                {
                  "type": "text",
                  "value": "的目标。"
                }
              ]
            }
          ]
        },
        "rubric": [
          {
            "id": "M1",
            "score": 5,
            "desc": "正确补充方案内容的每1个内容点得1分，总计得5分；"
          }
        ],
        "score": 5,
        "answer": null,
        "docAnswer": [
          "顾客购物频率、偏好商品类别、历史消费金额、积分余额及会员等级等信息",
          "去除重复记录，处理缺失值（数值型字段用均值或中位数填充，关键字段人工核查），纠正格式错误数据，确保数据准确性和完整性",
          "统一数据格式（日期格式、货币单位、编码标准），对数值型特征进行归一化处理，消除量纲差异，便于多源数据集成分析",
          "利用机器学习算法（如随机森林、XGBoost、协同过滤）构建销售预测模型、顾客细分模型和需求预测模型，为库存优化和个性化推荐提供决策支持",
          "提高销售转化率和客户忠诚度、减少库存成本、降低运营成本、加强市场竞争力"
        ]
      }
    ],
    "answer": null
  },
  {
    "id": "4.2.2",
    "code": "4.2.2",
    "name": "AI辅助的医疗影像诊断系统数据采集和处理指导",
    "chapter": 4,
    "chapterName": "培训与指导",
    "time": "10min",
    "tasks": "随着医疗科技的进步，AI在医疗影像诊断领域的应用日益广泛。AI辅助的医疗影像诊断系统能够通过深度学习技术，分析X射线、CT、MRI等医学影像，帮助医生更快速、更准确地识别病灶，评估病情，尤其在早期癌症筛查、骨伤评估、神经系统疾病诊断等方面展现出巨大潜力。这种系统不仅提高了诊断效率，降低了误诊率，还为偏远地区或医疗资源匮乏的地方提供了高水平的医疗影像分析服务。\nAI辅助的医疗影像诊断系统的目标包括：\n• 提高诊断准确率：利用AI技术，辅助医生识别细微的病灶特征，减少漏诊和误诊；\n• 加速诊断流程：自动化分析影像，缩短医生等待影像分析结果的时间，加快治疗进程；\n• 个性化诊疗方案：基于AI分析的结果，为患者提供更为精准的个性化治疗建议；\n• 医疗资源均衡分配：通过远程诊断，协助基层医疗机构提高诊疗水平，缩小城乡医疗差距；\n你作为一名人工智能训练师，根据上述的AI辅助的医疗影像诊断系统的系统目标，补全AI辅助的医疗影像诊断系统的数据采集和处理指导方案（见素材文件夹中4.2.2.docx）。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
    "totalScore": 5,
    "rubric": [
      {
        "id": "M1",
        "score": 5,
        "desc": "正确补充方案内容的每1个内容点得1分，总计得5分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "随着医疗科技的进步，AI在医疗影像诊断领域的应用日益广泛。AI辅助的医疗影像诊断系统能够通过深度学习技术，分析X射线、CT、MRI等医学影像，帮助医生更快速、更准确地识别病灶，评估病情，尤其在早期癌症筛查、骨伤评估、神经系统疾病诊断等方面展现出巨大潜力。这种系统不仅提高了诊断效率，降低了误诊率，还为偏远地区或医疗资源匮乏的地方提供了高水平的医疗影像分析服务。\nAI辅助的医疗影像诊断系统的目标包括：\n提高诊断准确率：利用AI技术，辅助医生识别细微的病灶特征，减少漏诊和误诊；\n加速诊断流程：自动化分析影像，缩短医生等待影像分析结果的时间，加快治疗进程；\n个性化诊疗方案：基于AI分析的结果，为患者提供更为精准的个性化治疗建议；\n医疗资源均衡分配：通过远程诊断，协助基层医疗机构提高诊疗水平，缩小城乡医疗差距；\n你作为一名人工智能训练师，根据上述的AI辅助的医疗影像诊断系统的系统目标，补全AI辅助的医疗影像诊断系统的数据采集和处理指导方案（见素材文件夹中4.2.2.docx）。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
        "score": 0
      },
      {
        "id": "doc_4.2.2",
        "type": "doc",
        "title": "指导方案",
        "sectionId": "4.2.2",
        "prompt": "",
        "docFile": "4.2.2.docx",
        "template": {
          "source": "4.2.2.docx",
          "layout": "sections",
          "sections": [
            {
              "type": "subheading",
              "text": "AI辅助的医疗影像诊断系统数据采集和处理指导方案"
            },
            {
              "type": "block_title",
              "text": "1. 数据采集方案"
            },
            {
              "type": "text_line",
              "text": "• 医学影像获取：确保影像质量，使用高分辨率的医疗设备获取清晰的影像资料，涵盖多种疾病类型和人群。"
            },
            {
              "type": "text_line",
              "text": "• 患者信息收集：在符合HIPAA等隐私保护法规的前提下，收集患者的病史、年龄、性别等基本信息，以及相关的实验室检查结果。"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "• "
                },
                {
                  "type": "blank"
                },
                {
                  "type": "text",
                  "value": "：邀请经验丰富的医生对影像进行标注，标记病灶位置、类型、大小等关键信息，作为训练AI模型的标注数据集。"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "• 数据脱敏处理：对收集的患者信息进行脱敏处理，确保患者隐私安全。"
            },
            {
              "type": "block_title",
              "text": "2. 数据处理方案"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "• 数据清洗与预处理："
                },
                {
                  "type": "blank"
                },
                {
                  "type": "text",
                  "value": "。"
                }
              ]
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "• 模型训练与验证："
                },
                {
                  "type": "blank"
                },
                {
                  "type": "text",
                  "value": "。"
                }
              ]
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "• 模型测试与优化："
                },
                {
                  "type": "blank"
                },
                {
                  "type": "text",
                  "value": "。"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "• 系统集成与部署：将训练好的模型集成到医疗影像诊断系统中，部署在医院的服务器上，确保医生可以随时调用AI分析结果。"
            },
            {
              "type": "block_title",
              "text": "3. 数据安全与隐私保护"
            },
            {
              "type": "text_line",
              "text": "• 所有数据传输和存储过程都需加密，防止数据泄露。"
            },
            {
              "type": "text_line",
              "text": "• 遵守HIPAA等隐私法规，确保患者信息不被非法访问或滥用。"
            },
            {
              "type": "text_line",
              "text": "• 使用数据脱敏技术，如差分隐私，保护患者身份不被识别。"
            },
            {
              "type": "block_title",
              "text": "4. 系统优化与升级"
            },
            {
              "type": "text_line",
              "text": "• 定期收集医生和患者的反馈，评估系统性能，根据实际需求调整AI模型。"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "• 不断更新训练数据集，加入新的疾病类型或变异特征，提高"
                },
                {
                  "type": "blank"
                },
                {
                  "type": "text",
                  "value": "。"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "• 跟踪AI技术的最新进展，适时引入更先进的算法，提升系统性能。"
            }
          ]
        },
        "rubric": [
          {
            "id": "M1",
            "score": 5,
            "desc": "正确补充方案内容的每1个内容点得1分，总计得5分；"
          }
        ],
        "score": 5,
        "answer": null,
        "docAnswer": [
          "专家标注与数据标签化",
          "对收集的医学影像进行去噪、对比度增强和归一化处理；统一影像格式（转换为DICOM或PNG标准格式）；去除图像质量不合格的样本；对患者信息进行脱敏处理，确保符合HIPAA等隐私法规要求",
          "使用标注好的影像数据集训练深度学习模型（如ResNet、U-Net等卷积神经网络）；采用交叉验证方法评估模型性能；通过数据增强（旋转、翻转、缩放）扩充训练集，提升模型泛化能力",
          "在独立测试集上评估模型的准确率、灵敏度、特异性和AUC值；针对假阳性和假阴性样本进行错误分析；根据测试结果调整模型超参数或优化网络结构，反复迭代直至性能达标",
          "模型对新型病变特征的识别精度和临床适用性"
        ]
      }
    ],
    "answer": null
  },
  {
    "id": "4.2.3",
    "code": "4.2.3",
    "name": "AI智能安防监控系统采集和处理指导",
    "chapter": 4,
    "chapterName": "培训与指导",
    "time": "10min",
    "tasks": "在现代社会，公共安全和个人隐私保护成为人们日益关注的焦点。AI智能安防监控系统利用计算机视觉、深度学习和大数据分析技术，能够在公共场所、住宅区、企业园区等场景下，实时监测异常行为，预警潜在威胁，同时保护正常活动的隐私不受侵犯。系统通过摄像头捕捉视频流，利用AI算法分析人物行为、车辆移动、物品遗留等情况，自动识别可疑活动，如闯入禁区、夜间徘徊、暴力冲突等，并及时通知安保人员，有效提升安全管理水平。\nAI智能安防监控系统的目标包括：\n• 实时监测与异常行为识别：通过视频分析，即时发现并标记异常行为，减少人工监控的盲点。\n• 隐私保护：在识别异常行为的同时，确保普通人的日常活动不被过度关注，尊重个人隐私。\n• 快速响应：一旦发现紧急情况，立即触发警报，通知相关人员或机构，加快响应速度。\n• 数据分析与报告：对监控数据进行长期分析，为安全策略的制定和优化提供数据支持。\n你作为一名人工智能训练师，根据上述的AI智能安防监控系统的目标，补全AI智能安防监控系统的数据采集和处理指导方案（见素材文件夹中的4.2.3.docx）。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
    "totalScore": 5,
    "rubric": [
      {
        "id": "M1",
        "score": 5,
        "desc": "正确补充方案内容的每1个内容点得1分，总计得5分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "在现代社会，公共安全和个人隐私保护成为人们日益关注的焦点。AI智能安防监控系统利用计算机视觉、深度学习和大数据分析技术，能够在公共场所、住宅区、企业园区等场景下，实时监测异常行为，预警潜在威胁，同时保护正常活动的隐私不受侵犯。系统通过摄像头捕捉视频流，利用AI算法分析人物行为、车辆移动、物品遗留等情况，自动识别可疑活动，如闯入禁区、夜间徘徊、暴力冲突等，并及时通知安保人员，有效提升安全管理水平。\nAI智能安防监控系统的目标包括：\n实时监测与异常行为识别：通过视频分析，即时发现并标记异常行为，减少人工监控的盲点。\n隐私保护：在识别异常行为的同时，确保普通人的日常活动不被过度关注，尊重个人隐私。\n快速响应：一旦发现紧急情况，立即触发警报，通知相关人员或机构，加快响应速度。\n数据分析与报告：对监控数据进行长期分析，为安全策略的制定和优化提供数据支持。\n你作为一名人工智能训练师，根据上述的AI智能安防监控系统的目标，补全AI智能安防监控系统的数据采集和处理指导方案（见素材文件夹中的4.2.3.docx）。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
        "score": 0
      },
      {
        "id": "doc_4.2.3",
        "type": "doc",
        "title": "指导方案",
        "sectionId": "4.2.3",
        "prompt": "",
        "docFile": "4.2.3.docx",
        "template": {
          "source": "4.2.3.docx",
          "layout": "sections",
          "sections": [
            {
              "type": "subheading",
              "text": "AI智能安防监控系统采集和处理指导方案"
            },
            {
              "type": "block_title",
              "text": "1. 数据采集方法"
            },
            {
              "type": "text_line",
              "text": "• 高清视频流采集：部署高清摄像头，确保视频画面清晰，便于AI算法识别细节。"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "• 多角度覆盖：合理布置摄像头，确保"
                },
                {
                  "type": "blank"
                },
                {
                  "type": "text",
                  "value": "无死角，覆盖所有入口、出口和敏感区域。"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "• 夜间与低光环境适应：使用带有红外夜视功能的摄像头，保证夜间或低光条件下仍能捕捉到清晰图像。"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "• 数据传输与存储：采用稳定的数据传输网络，确保视频流的实时传输，同时建立安全的"
                },
                {
                  "type": "blank"
                },
                {
                  "type": "text",
                  "value": "，保存原始视频和分析结果。"
                }
              ]
            },
            {
              "type": "block_title",
              "text": "2. 数据处理方案"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "• 视频流预处理："
                },
                {
                  "type": "blank"
                },
                {
                  "type": "text",
                  "value": "。"
                }
              ]
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "• 行为分析与异常检测："
                },
                {
                  "type": "blank"
                },
                {
                  "type": "text",
                  "value": "。"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "• 隐私保护算法：在不影响异常行为识别的前提下，对视频中无关个体进行模糊处理，保护个人隐私。"
            },
            {
              "type": "text_line",
              "text": "• 数据融合与决策支持：结合多个摄像头的数据，进行空间和时间上的数据融合，构建更全面的场景理解，为安全决策提供依据。"
            },
            {
              "type": "block_title",
              "text": "3. 系统优化与安全措施"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "• 算法优化：持续训练和优化AI模型，提升"
                },
                {
                  "type": "blank"
                },
                {
                  "type": "text",
                  "value": "。"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "• 隐私合规：确保系统设计和运营遵守GDPR、CCPA等数据保护法规，定期进行隐私影响评估。"
            },
            {
              "type": "text_line",
              "text": "• 安全防护：实施数据加密、访问控制和防火墙等安全措施，防止数据泄露和系统被攻击。"
            }
          ]
        },
        "rubric": [
          {
            "id": "M1",
            "score": 5,
            "desc": "正确补充方案内容的每1个内容点得1分，总计得5分；"
          }
        ],
        "score": 5,
        "answer": null,
        "docAnswer": [
          "监控区域（公共场所、入口通道、敏感区域）",
          "数据存储系统（本地服务器与云端备份相结合的存储架构）",
          "对采集的视频流进行帧提取、图像去噪和画质增强处理；统一视频分辨率和帧率格式；对视频中无关人员进行自动模糊处理以保护隐私；提取关键帧用于后续行为分析",
          "运用目标检测算法（如YOLO）识别视频中的人员和车辆；利用行为识别模型分析人员动作，识别异常行为（如闯入禁区、滞留、暴力冲突）；设置预警阈值，检测到异常行为时自动触发告警并通知安保人员",
          "异常行为识别的准确率和实时响应能力，降低误报率"
        ]
      }
    ],
    "answer": null
  },
  {
    "id": "4.2.4",
    "code": "4.2.4",
    "name": "自动驾驶汽车感知系统数据采集与标注指导",
    "chapter": 4,
    "chapterName": "培训与指导",
    "time": "10min",
    "tasks": "随着自动驾驶技术的不断进步，汽车行业正向着更高的自动化水平迈进。自动驾驶汽车的感知系统是实现这一目标的关键技术之一，它通过各种传感器（如摄像头、雷达、激光雷达等）收集环境信息，然后通过AI算法处理这些数据，使车辆能够识别周围的障碍物、道路状况、交通标志等，从而做出安全的驾驶决策。为了训练这些AI算法，需要大量高质量的标注数据，以确保自动驾驶汽车在各种驾驶环境下都能够准确地感知和理解环境。\n自动驾驶汽车感知系统的业务需求包括：\n• 数据多样性：系统需要收集覆盖各种天气条件、不同时间、不同地域以及各种驾驶场景的数据，以确保AI模型的泛化能力。\n• 高精度标注：对收集到的数据进行精细标注，包括但不限于车辆、行人、自行车、动物、交通标志、车道线、红绿灯等。\n• 实时数据处理：系统应能实时接收和处理来自车辆传感器的数据流，以支持即时的决策制定。\n• 数据安全性：确保数据在采集、传输和存储过程中的安全性，遵守相关数据保护法规。\n• 高效数据管理：提供数据检索、数据集构建、数据清洗和数据版本控制等功能，以支持数据科学家和工程师的工作。\n• 持续学习与更新：系统应支持模型的持续训练和优化，以适应不断变化的道路环境和交通规则。\n你作为一名人工智能训练师，根据上述的自动驾驶汽车感知系统的业务需求，补全自动驾驶汽车感知系统的数据采集和数据标注指导方案（见素材文件夹中的4.2.4.docx）。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
    "totalScore": 5,
    "rubric": [
      {
        "id": "M1",
        "score": 5,
        "desc": "正确补充方案内容的每1个内容点得1分，总计得5分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "随着自动驾驶技术的不断进步，汽车行业正向着更高的自动化水平迈进。自动驾驶汽车的感知系统是实现这一目标的关键技术之一，它通过各种传感器（如摄像头、雷达、激光雷达等）收集环境信息，然后通过AI算法处理这些数据，使车辆能够识别周围的障碍物、道路状况、交通标志等，从而做出安全的驾驶决策。为了训练这些AI算法，需要大量高质量的标注数据，以确保自动驾驶汽车在各种驾驶环境下都能够准确地感知和理解环境。\n自动驾驶汽车感知系统的业务需求包括：\n数据多样性：系统需要收集覆盖各种天气条件、不同时间、不同地域以及各种驾驶场景的数据，以确保AI模型的泛化能力。\n高精度标注：对收集到的数据进行精细标注，包括但不限于车辆、行人、自行车、动物、交通标志、车道线、红绿灯等。\n实时数据处理：系统应能实时接收和处理来自车辆传感器的数据流，以支持即时的决策制定。\n数据安全性：确保数据在采集、传输和存储过程中的安全性，遵守相关数据保护法规。\n高效数据管理：提供数据检索、数据集构建、数据清洗和数据版本控制等功能，以支持数据科学家和工程师的工作。\n持续学习与更新：系统应支持模型的持续训练和优化，以适应不断变化的道路环境和交通规则。\n你作为一名人工智能训练师，根据上述的自动驾驶汽车感知系统的业务需求，补全自动驾驶汽车感知系统的数据采集和数据标注指导方案（见素材文件夹中的4.2.4.docx）。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
        "score": 0
      },
      {
        "id": "doc_4.2.4",
        "type": "doc",
        "title": "指导方案",
        "sectionId": "4.2.4",
        "prompt": "",
        "docFile": "4.2.4.docx",
        "template": {
          "source": "4.2.4.docx",
          "layout": "sections",
          "sections": [
            {
              "type": "subheading",
              "text": "自动驾驶汽车感知系统数据采集与标注指导方案"
            },
            {
              "type": "block_title",
              "text": "1. 数据采集方案"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "• 多传感器融合："
                },
                {
                  "type": "blank"
                },
                {
                  "type": "text",
                  "value": "。"
                }
              ]
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "• 场景覆盖："
                },
                {
                  "type": "blank"
                },
                {
                  "type": "text",
                  "value": "。"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "• 事件触发采集：在特定事件发生时（如紧急刹车、避让行动），自动触发额外数据采集，以捕获关键时刻。"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "• 数据质量控制："
                },
                {
                  "type": "blank"
                },
                {
                  "type": "text",
                  "value": "。"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "• 数据加密与传输：采用安全的数据传输协议，确保数据在传输过程中的安全性。"
            },
            {
              "type": "block_title",
              "text": "2. 数据标注方案"
            },
            {
              "type": "text_line",
              "text": "• 定义标注标准：明确标注类别、边界框精度要求、遮挡处理规则等。"
            },
            {
              "type": "text_line",
              "text": "• 选择标注工具：使用专业的数据标注软件，支持2D框、3D框、语义分割等标注类型。"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "• "
                },
                {
                  "type": "blank"
                },
                {
                  "type": "text",
                  "value": "：对标注员进行专业培训，确保他们理解标注标准，熟悉工具使用。"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "• 执行标注任务：分配数据给标注团队，设定清晰的任务指标和截止日期。"
            },
            {
              "type": "text_line",
              "text": "• 质量控制与复查：实施多级检查，包括自动检查和人工复查，确保标注的准确性和一致性。"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "• 数据整合与存储：将标注后的数据整合，形成"
                },
                {
                  "type": "blank"
                },
                {
                  "type": "text",
                  "value": "数据集，存储在安全的数据仓库中，供模型训练使用。"
                }
              ]
            }
          ]
        },
        "rubric": [
          {
            "id": "M1",
            "score": 5,
            "desc": "正确补充方案内容的每1个内容点得1分，总计得5分；"
          }
        ],
        "score": 5,
        "answer": null,
        "docAnswer": [
          "同步部署摄像头（可见光/红外）、激光雷达（LiDAR）、毫米波雷达和GPS/IMU传感器，通过时间戳对齐实现多传感器数据同步，利用数据融合算法（卡尔曼滤波、深度学习融合）整合各传感器信息，构建完整的环境感知数据集",
          "覆盖多种天气条件（晴、雨、雪、雾）、不同时段（白天、夜间、黄昏）、不同地域（城市、高速、乡村）及多样化驾驶场景（交叉路口、隧道、停车场），确保训练数据的多样性和代表性",
          "对采集数据进行实时质量检测，过滤传感器故障帧和低质量数据；建立数据质量评估指标（图像清晰度、点云密度、传感器同步精度）；不合格数据重采或人工审核后决定是否纳入数据集",
          "标注员培训",
          "结构化、多模态、版本可控的高质量标注"
        ]
      }
    ],
    "answer": null
  },
  {
    "id": "4.2.5",
    "code": "4.2.5",
    "name": "智能化数据标注在文化遗产数字化保护中的应用指导",
    "chapter": 4,
    "chapterName": "培训与指导",
    "time": "10min",
    "tasks": "文化遗产是人类历史和文明的重要载体，包括艺术、建筑、手工艺品、文献等，它们承载着丰富的人文价值和历史信息。然而，随着时间的流逝，许多文化遗产面临着自然侵蚀、人为破坏以及缺乏有效保护手段的威胁。近年来，数字化技术，尤其是人工智能和机器学习，为文化遗产的保护和传承提供了新的机遇。通过高精度的图像和三维模型采集，结合智能化数据标注，可以创建文化遗产的数字档案，不仅能够永久保存文化遗产的状态，还能为修复、研究和公众教育提供丰富的资源。\n智能化数据标注在文化遗产数字化保护中的业务需求包括：\n• 高精度标注：为了确保数字化模型的准确性和完整性，需要对文化遗产的每一个细节进行精确标注，包括文物的材质、纹理、结构特征、损伤区域等。\n• 自动化与智能化：利用AI技术，实现对文化遗产图像和三维模型的自动化分析和标注，减少人力成本，提高工作效率。\n• 多维度数据融合：结合不同来源和类型的图像、视频、三维扫描数据，创建综合性的文化遗产数字档案。\n• 跨学科协作：促进文化遗产专家、数据科学家和AI工程师之间的合作，共同推进文化遗产的数字化保护。\n• 数据安全与隐私保护：确保数字化文化遗产数据的安全存储和合法使用，尊重文化遗产持有者的权利和利益。\n你作为一名人工智能训练师，根据上述内容，补全智能化数据标注在文化遗产数字化保护中的应用指导方案（见素材文件夹中的4.2.5.docx）。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
    "totalScore": 5,
    "rubric": [
      {
        "id": "M1",
        "score": 5,
        "desc": "正确补充方案内容的每1个内容点得1分，总计得5分；"
      }
    ],
    "items": [
      {
        "id": "tasks",
        "type": "intro",
        "title": "工作任务",
        "content": "文化遗产是人类历史和文明的重要载体，包括艺术、建筑、手工艺品、文献等，它们承载着丰富的人文价值和历史信息。然而，随着时间的流逝，许多文化遗产面临着自然侵蚀、人为破坏以及缺乏有效保护手段的威胁。近年来，数字化技术，尤其是人工智能和机器学习，为文化遗产的保护和传承提供了新的机遇。通过高精度的图像和三维模型采集，结合智能化数据标注，可以创建文化遗产的数字档案，不仅能够永久保存文化遗产的状态，还能为修复、研究和公众教育提供丰富的资源。\n智能化数据标注在文化遗产数字化保护中的业务需求包括：\n高精度标注：为了确保数字化模型的准确性和完整性，需要对文化遗产的每一个细节进行精确标注，包括文物的材质、纹理、结构特征、损伤区域等。\n自动化与智能化：利用AI技术，实现对文化遗产图像和三维模型的自动化分析和标注，减少人力成本，提高工作效率。\n多维度数据融合：结合不同来源和类型的图像、视频、三维扫描数据，创建综合性的文化遗产数字档案。\n跨学科协作：促进文化遗产专家、数据科学家和AI工程师之间的合作，共同推进文化遗产的数字化保护。\n数据安全与隐私保护：确保数字化文化遗产数据的安全存储和合法使用，尊重文化遗产持有者的权利和利益。\n你作为一名人工智能训练师，根据上述内容，补全智能化数据标注在文化遗产数字化保护中的应用指导方案（见素材文件夹中的4.2.5.docx）。\n所有结果文件储存在桌面新建的考生文件夹中，文件夹命名为“准考证号+身份证号后六位”。",
        "score": 0
      },
      {
        "id": "doc_4.2.5",
        "type": "doc",
        "title": "指导方案",
        "sectionId": "4.2.5",
        "prompt": "",
        "docFile": "4.2.5.docx",
        "template": {
          "source": "4.2.5.docx",
          "layout": "sections",
          "sections": [
            {
              "type": "subheading",
              "text": "智能化数据标注在文化遗产数字化保护中的应用指导方案"
            },
            {
              "type": "block_title",
              "text": "1. 数据标注工具与方法"
            },
            {
              "type": "text_line",
              "text": "• 图像标注："
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "  · 使用"
                },
                {
                  "type": "blank"
                },
                {
                  "type": "text",
                  "value": "等标注工具，为文化遗产图像添加边界框、多边形、点、线段等标注。"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "  · 对于复杂的文物细节，可以使用语义分割或实例分割技术，精细到每个物体的每一部分。"
            },
            {
              "type": "text_line",
              "text": "• 三维模型标注："
            },
            {
              "type": "text_line",
              "text": "  · 采用MeshLab或Blender等软件，对3D模型进行顶点、面、体素级别的标注。"
            },
            {
              "type": "text_line",
              "text": "  · 实现对模型内部结构和外部特征的全面标注。"
            },
            {
              "type": "text_line",
              "text": "• 属性标签："
            },
            {
              "type": "text_line",
              "text": "  · 文物的材料、风格、时代、作者、位置等元数据，使用CSV、JSON等格式记录，并关联至相应的图像或模型。"
            },
            {
              "type": "text_line",
              "text": "  · 可以使用数据库管理系统（如MySQL、MongoDB）来存储和管理这些信息。"
            },
            {
              "type": "block_title",
              "text": "2. 智能化辅助标注"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "• 深度学习模型：训练"
                },
                {
                  "type": "blank"
                },
                {
                  "type": "text",
                  "value": "的模型，如Mask R-CNN、U-Net等，用于自动识别和标记文物的特定特征。"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "• 模型训练数据集：构建一个包含大量已标注文化遗产图像的数据集，用于模型训练和验证。"
            },
            {
              "type": "text_line",
              "text": "• 模型迭代与优化：定期更新模型，引入新发现的文物类型和特征，提升识别精度。"
            },
            {
              "type": "block_title",
              "text": "3. 跨学科团队协作"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "• 组建由考古学家、艺术史家、计算机视觉专家、AI工程师组成的"
                },
                {
                  "type": "blank"
                },
                {
                  "type": "text",
                  "value": "团队，共同制定标注标准和工作流程。"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "• 定期举行会议，讨论标注过程中的问题，调整标注策略。"
            },
            {
              "type": "block_title",
              "text": "4. 数据安全与隐私保护"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "• 使用"
                },
                {
                  "type": "blank"
                },
                {
                  "type": "text",
                  "value": "存储和传输数据，确保文化遗产信息不被非法获取。"
                }
              ]
            },
            {
              "type": "text_line",
              "text": "• 遵守相关法律法规，特别是涉及文化遗产的所有权和使用权的规定。"
            },
            {
              "type": "block_title",
              "text": "5. 用户体验与公众教育"
            },
            {
              "type": "text_line",
              "text": "• 开发Web应用或移动应用程序，允许用户在线浏览、搜索和学习文化遗产的数字化资料。"
            },
            {
              "type": "fill_line",
              "segments": [
                {
                  "type": "text",
                  "value": "• 利用"
                },
                {
                  "type": "blank"
                },
                {
                  "type": "text",
                  "value": "技术，为用户提供沉浸式文化遗产体验，增加教育和娱乐价值。"
                }
              ]
            },
            {
              "type": "block_title",
              "text": "6. 技术融合与未来展望"
            },
            {
              "type": "text_line",
              "text": "• 探索区块链技术的应用，为文化遗产的数字档案提供不可篡改的记录，增强其权威性和可信度。"
            },
            {
              "type": "text_line",
              "text": "• 结合AI和物联网技术，监测和预警文化遗产的物理状态变化，及时采取保护措施。"
            }
          ]
        },
        "rubric": [
          {
            "id": "M1",
            "score": 5,
            "desc": "正确补充方案内容的每1个内容点得1分，总计得5分；"
          }
        ],
        "score": 5,
        "answer": null,
        "docAnswer": [
          "Label Studio、CVAT、VGG Image Annotator (VIA)",
          "针对文化遗产图像特征识别和分割任务专门定制",
          "跨学科协作",
          "端到端加密技术（如AES-256加密存储、TLS/SSL加密传输）",
          "虚拟现实（VR）和增强现实（AR）"
        ]
      }
    ],
    "answer": null
  }
];
