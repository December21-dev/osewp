# Metrics Service

## Introduction


The health metrics of an open source project are quantitative and qualitative benchmarks that assess its sustainability, community engagement, code quality, and ecosystem impact, providing critical insights for maintainers, contributors, and stakeholders.These metrics are highly valuable for assessing a project's current status, forecasting its development trending, and identifying potential risks in advance.


## 1. Popular Evaluation Frameworks for Open Source Project Health

### 1.1 CHAOSS Metrics System

CHAOSS is a project under the Linux Foundation that focuses on defining community health through metric-based analysis. The CHAOSS project has the following four objectives:

（1）Develop standardized metrics and models to evaluate the health of open source communities.

（2）Develop open source tools and initiatives for measuring community health.

（3）Formulate a plan to implement indicators that cannot be achieved through data tracking.

（4）Collaborate with global partners to redefine how open source community health is measured

#### 1.2 Evolution of development stages 
##### Early stage (5 working group models)

 
| working group name | core secters|
|-----------|-------------|
| General Metrics Working Group (Current Metrics Development Working Group | Contribution types, contributors, contribution locations, time dimension|
| Diversity, Equity, and Inclusion Working Group | Communication inclusiveness, contributor diversity, activity diversity, governance structure |
| Progress Working Group| Code development activity/efficiency/quality, issue resolution, community growth|
| Value Working Group (inactive) | Measuring the Value of Open Source Participation|
| Risk Management Working Group | business risk, code quality, licensing, security, transparency, and dependency risk|

#####  Latest Developments
- **Ungrouped indicator list**：The 89 indicators are shown in a single list without any categorization.
- **Model-driven Transformation**：

  -  Huawei company initiated the establishment of the Metrics Evaluation Model Working Group.

  - In 2023, the CHAOSS community shifted its focus toward the Working Group on Evaluation Models.

  - Up to 2025, a total of 17 metrics models have been released by CHAOSS.

#### 1.3 Typical Model Example: Development Responsiveness
**Definition**：A comprehensive evaluation model reflecting a project's operational capability.
Responsiveness can reflect the level of investment in a project (including abandonment), capabilities, and engineering priorities.
It may also reflect certain types of interactions and contributors.Responsiveness can reveal a lot — including things you might overlook — such as how effective bots are at addressing Challenges

**indicators**：
1. **Change Request Review Cycle**
   - Measures the time taken for the complete review process
   - Identifies bottlenecks in the review workflow

2. **Change Request Duration**
   - Only accepted change requests are counted
   - Reflects overall processing efficiency

3. **Issue Response Time**
   - Time to First Non-Author Response
   - Measure the responsiveness of the community

4. **Bug Resolution Duration**
   - Median Duration from Issue Reporting to Resolution
   - Reflects the efficiency of the maintenance team

#### 1.4 System Evaluation
##### Advantageg
- Open Governance Model for Global Collaboration
- Providing rich insights into metrics design
- Demonstrating continuous evolution from discrete metrics to evaluation models

##### Chanllenges
-  Overlapping and redundant metrics (e.g., Evolution group and Risk group)
-  Excessive granularity limits practical applicability
-  Decreasing adoption in community implementations

##### Lessons Learned
- A balance is needed between metric completeness and practicality
- Model-driven approaches are an important direction for future development
- More real-world case validation is required



### 2.Health Checklist From Red Hat

In March 2021, Red Hat released a checklist for measuring the health of open source projects.In contrast to CHAOSS, the checklist introduces a clear and streamlined framework, dividing the evaluation of open source project health into seven primary categories and over ten subcategories.The checklist for evaluating the health of open source projects is as follows:

#### 1.Infrastructures  
-  project website
-  Governance Document


#### 2.Licensing Agreement 
- Open Source License

#### 3. Leadership and Governance
-  Governance Model
-  Decision-Making Process

#### 4. 发布管理
|  Subcategory   | Checklist Item             |
|------------|---------------------|
| Release Frequency   | Regular/Irregular |
| Release Conventions | Conventions for version numbering, etc.   |
| Release tools  | 使用的发布工具链    |
| Release Availability | 安装包可获得性      |

#### 5. 新人培训
- 新人指南
- 贡献者培养计划

#### 6. 文档体系
- 内容与样式标准
- 文档编写规范

#### 7. 推广运营
- 项目讯息发布
- 推广活动频率
- 社区贡献引导

#### 红帽公司检查清单评价分析
  虽有助于快速了解开源项目健康度的相关概念与涵盖范围，但是对进一步实操没有太大的帮助。













### 3. OSS Compass开源指南针
我国首个开源生态健康评估平台（2023年发布），由由国内的多家高校、企业、开源社区联合打造的一个兼具理论深度与实用价值的平台。开源指南针展示的开源生态评估体系包括开源生态、“协作、人、软件”和评估模型

![图1 OSS Compass 开源指南针的开源生态评估体系](images/%E5%BC%80%E6%BA%90%E7%94%9F%E6%80%81%E8%AF%84%E4%BC%B0%E4%BD%93%E7%B3%BB%E5%9B%BE.png )
*图1  OSS Compass 开源指南针的开源生态评估体系。*

**开源指南针**  针对开源生态构建了生产力、稳健性和创新力三大核心维度的模型。
#### 3.1 生产力：开源生态将投入转化为产出的能力
(1) 协作开发指标

| 指标名称               | 定义                                                                                     | 阈值   | 权重    |
|------------------------|------------------------------------------------------------------------------------------|--------|---------|
| 代码参与者数量         | 过去90天内活跃的代码提交者、代码审核者和PR提交者数量                                     | 1000   | 19.99%  |
| 代码提交频率           | 过去90天内平均每周代码提交次数                                                           | 1000   | 16.36%  |
| 是否维护               | 单仓场景：过去90天内至少提交一次代码的周百分比；多仓场景：过去30天有提交记录的代码仓百分比 | 100%   | 13.85%  |
| 代码提交关联PR的比率   | 过去90天内提交代码链接PR的百分比                                                         | 100%   | 12.61%  |
| PR关联Issue的比率      | 过去90天内新建PR关联Issue的百分比                                                        | 100%   | 11.32%  |
| 代码审查比率           | 过去90天内提交代码中至少包含一名非PR创建者审核者的百分比                                 | 100%   | 10.11%  |
| 代码合并比率           | 过去90天内PR合并者和作者不属于同一人的百分比                                             | 100%   | 10.11%  |
| 代码行数               | 过去90天内平均每周提交的代码行数（增加+删除）                                            | 300000 | 5.64%   |

(2) 社区服务与支撑指标

| 指标名称               | 定义                                                                                     | 阈值   | 权重    |
|------------------------|------------------------------------------------------------------------------------------|--------|---------|
| 更新Issue数量          | 过去90天Issue更新的数量                                                                  | 2000   | 19.72%  |
| 关闭PR数量             | 过去90天内合并和拒绝的PR数量                                                             | 4500   | 19.72%  |
| Issue首次响应时间      | 新建Issue首次响应时间的均值和中位数（天）（排除机器人响应、创建者评论和分配动作）         | 15     | -14.37%  |
| Bug类Issue处理时间     | 新建Bug类Issue处理时间的均值和中位数（天）（含已关闭和未解决的）                         | 60     | -12.88%  |
| PR处理时间             | 新建PR处理时间的均值和中位数（天）（含已关闭和未解决的）                                 | 30     | -12.88%  |
| Issue评论频率          | 新建Issue的平均评论数（排除机器人和作者评论）                                             | 5      | 10.22%  |
| 代码审查评论频率       | 新建PR的平均评论数量（排除机器人和作者评论）                                              | 8      | 10.22%  |

#### 3.2 稳健性：生态系统自我恢复能力

（1） 活跃度指标

| 指标名称               | 定义                                                                                     | 阈值   | 权重    |
|------------------------|------------------------------------------------------------------------------------------|--------|---------|
| 贡献者数量             | 过去90天活跃的代码提交者、PR作者、审查者、Issue作者和评论者数量                          | 2000   | 18.01%  |
| 代码提交频率           | 过去90天内平均每周代码提交次数                                                           | 1000   | 18.01%  |
| 更新于                 | 代码仓自上次更新以来的平均时间（月份）                                                   | 0.25   | 12.74%  |
| 组织数量               | 过去90天内活跃代码提交者所属组织的数目                                                   | 10     | 11.50%  |
| 创建于                 | 代码仓自创建以来存在的时间（月份）                                                       | 120    | 7.77%   |
| Issue评论频率          | 新建Issue的平均评论数（排除机器人和作者评论）                                             | 5      | 7.77%   |
| 代码审查评论频率       | 新建PR的平均评论数量（排除机器人和作者评论）                                              | 8      | 4.92%   |
| 更新Issue数量          | 过去90天Issue更新的数量                                                                  | 2500   | 4.92%   |
| 最近版本发布次数       | 过去12个月版本发布的数量                                                                 | 12     | 3.18%   |
| 维护者数量             | 过去90天活跃的维护者数量                                                                 | 100    | 2.09%   |
| 会议数量               | 过去90天内举行会议的次数                                                                 | 100    | 2.09%   |
| 与会者数量             | 过去90天内每次会议的与会者平均人数                                                       | 10     | 2.09%   |

#### 3.3 创新力：创造多样性创新的能力
（1） 组织活跃度指标

| 指标名称               | 定义                                                                                     | 阈值   | 权重    |
|------------------------|------------------------------------------------------------------------------------------|--------|---------|
| 组织数量               | 过去90天内活跃代码提交者所属组织的数目                                                   | 30     | 32.26%  |
| 组织贡献者数量         | 过去90天内有组织附属关系的活跃代码贡献者人数                                             | 300    | 25.81%  |
| 组织代码提交频率       | 过去90天内平均每周有组织归属的代码提交次数                                               | 800    | 25.81%  |
| 组织持续贡献           | 过去90天所有组织向社区有代码贡献的累计时间（周）                                         | 200    | 16.13%  |

#### 3.4 生产力补充模型
1. **贡献者领域划分模型**：
   - 观察、问题、代码、论坛聊天、媒体平台、活动、赞助
2. **贡献者角色划分模型**：
   - 组织/个人管理者、组织/个人参与者
3. **贡献者里程模型**：
   - 核心、常客、访客、静默与无状态

#### 3.5 开源指南针体系评价
1. **优势特点**：
   - 清晰的顶层架构设计
   - 可落地的分层指标分解
   - 提供可观测的量化数值
2. **实践价值**：
   - 提供开源的Compass平台系统
   - 支持官网直接使用或本地部署
   - 具备高实用性和可操作性
