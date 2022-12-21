## 介绍

JDARMY DSRE 是英文 “Data Security Risk Enumeration” 的缩写，是一个开放式的数据安全风险枚举框架。

在线查看：https://dsre.jd.army/

> JDArmy DSRE 由JD.Army创建、拥有和进行管理。JD.Army是专注于挖掘和解决企业安全运行风险隐患的专业型红队。JD.Army保留自行决定定期更新 DSRE 和本文档的权利。虽然JD.Army拥有 DSRE 的所有权利和利益，但它许可公众自由使用，遵循相关开源协议。

## 背景

目前各大头部互联网企业均建立了蓝军团队，通过“以攻促防”来评估和加强安全能力建设。“以攻促防”的形式多种多样，有实战攻防演习、红蓝对抗演练、蓝军专项评估、沙盘推演等模式。然而在蓝军工作过程中，始终有两大方面问题没有解决：**一是**如何量化“以攻促防”的结果，**二是**“以攻促防”的范畴与方法。

针对解决第一个问题，我们于今年7月首次向社区开源了“JDARMY RTASS红蓝对抗评分框架”([[RTASS.JD.ARMY]])，参照CVSS的评分模式，可以以调查问卷的形式评价红蓝双方在单次演练中的有效输出，同时对企业与业务的安全水平进行衡量。我们的红蓝双方通过在实战攻防演习后在系统上进行背靠背打分，得分基本趋向一致，并获得红蓝双方的认同，所以该评分框架具备客观的评价能力，大体上可以解决蓝军工作中的第一方面问题。

针对第二方面问题，我们认为传统的蓝军仅将战场聚焦在网络安全攻防范畴，无法更全面地评估和模拟企业在信息安全领域面临的各方面威胁。譬如传统蓝军其实是对黑客的模拟，我们称之为“网络蓝军”，但对黑灰产、内鬼、供应链、合作第三方、监管方是缺乏模拟能力的。

黑灰产一般对应于业务安全问题。对黑灰产的模拟，我们称之为“业务蓝军”。业务蓝军照比网络蓝军有着本质的不同，我们不能再通过CYBER KILLCHAIN、MITRE ATT&CK、OWASP TOP 10等这些网络安全思维和方法论来搞。为此，我们于11月向社区开源了“JDARMY BREAK业务风险枚举与规避知识框架”（[[BREAK.JD.ARMY]]），参照MITRE ATT&CK的模式，按照业务、内容、身份、对抗等不同维度，枚举了80项风险（包含24项子风险）,划分了金融、电商、社交等15种业务场景，31种攻击工具与手法，同时也对31种风险规避与缓解手段进行了介绍与风险对应，方便攻防双方参照此来开展红蓝对抗工作。

最近几年勒索病毒、数据泄露事件层出不穷，国际国内均纷纷立法加强对数据的管控力度。数据安全上升到了前所未有的高度，对数据面临威胁的模拟将成为蓝军的一项重要的工作职责与使命，组建“数据蓝军”将成为大势所趋。数据蓝军将通过模拟黑客、黑灰产、内鬼、供应链、第三方以及监管单位在数据安全领域能够给企业造成的威胁与风险，最终有效评估企业目前面临的数据安全短板。但这项工作要如何来开展呢？这也正是我们本次向社区开源“JDARMY DSRE数据安全风险枚举”（[[DSRE.JD.ARMY]]）知识框架的初衷。也希望借BREAK框架和DSRE框架来解决蓝军的第二方面问题。

## 框架构建思路与方法

在BREAK业务风险枚举与规避知识框架中，我们其实是采取的先枚举再归类的方法，这是由于业务的复杂性和多场景导致的。而在DSRE数据安全风险枚举框架中，我们则采取了先归类再枚举的构建思路，这是由于数据本身既是原子的，又具备流向性的缘故。因为数据是原子的，我们可以更好地罗列其属性；又因为数据具备流向性，我们也很容易归纳其周期。

针对数据属性，我们结合了业内成熟的理论：安全三项基本要素CIA，安全三项基本功能AAA，形成针对数据安全要求的6大维度。三要素即：保密性（Confidentiality）、完整性（Integrity）、可用性（Availability）；三功能即：认证（Authentication）、授权（Authorization）、审计（Accounting）。这6个维度对应的安全威胁分别是：泄露、篡改、拒绝服务、仿冒、权限滥用和抵赖。

针对数据周期，我们则直接搬用数据安全全生命周期：数据采集、数据传输、数据存储、数据处理、数据交换、数据销毁，这6个阶段。

最终以数据属性（威胁）为横轴、数据周期为纵轴，通过交叉枚举，形成了我们的数据安全风险枚举知识框架。

## 按风险分类开展数据安全红蓝对抗工作

通过全面枚举数据在不同阶段面临的不同问题，在目前的版本中，我们共总结出95项风险隐患。不过因为风险维度比较繁杂，如果笼统地拿出来，是很难开展对抗实施的。为此，我们按照问题的发生域，又将风险分为：合规、功能、漏洞、对抗、隐患与规范6大类。

- 合规风险：指因不符合由国家监管单位、职能部门及组织下发的相关数据安全法律法规要求导致的风险，目前有14个。

- 功能性风险：指由数据系统实现过程中的功能BUG导致的一类风险，共12个。

- 漏洞风险：指可能被攻击者发现并利用造成一定数据安全影响的风险，共20个。

- 对抗性风险：指存在一定的对抗阶段，需要持续不断进行能力提升的一类风险，共11个。

- 隐患类风险：指不会直接被攻击者利用，但与某些漏洞相结合或在某些特定场景下有可能出问题的风险，共11个。

- 规范类风险：指因不符合除“合规”外的应该具备及被遵守的相关数据安全规范导致的风险，共21个。

将安全风险分类后，各安全团队可以结合自身在数据安全风险评估上的能力储备和工作意愿来决定开展哪些工作，即：复用现有的安全能力。譬如：网络蓝军可以选择“漏洞”与“对抗”的分类来开展红蓝对抗工作；“合规”和“规范”分类可以由安全规范与治理团队来开展；“功能”和“隐患”分类可以由安全运营与测试团队来开展。

## 构建完整的企业对抗评估体系

通过网络蓝军、业务蓝军、数据蓝军相结合，可以比较全面地覆盖企业面临的各种信息安全风险场景，架构起完整的“以攻促防”蓝军对抗评估体系。而RTASS[[https://github.com/JDArmy/RTASS]]、BREAK[[https://github.com/JDArmy/BREAK]]、DSRE[[https://github.com/JDArmy/DSRE]]三个框架可以分别为蓝军三种工作场景提供有力支撑，方便我们更好地开展相关工作。当然“一家之言”总有不足，我们从不敢奢望能代表整个行业，所以我们将三个框架开源，也是希望寄托于开源社区反哺框架本身，使之成为一个更客观、准确、全面的蓝军作战体系。

## 协作 & 贡献

与RTASS、BREAK框架一样，DSRE框架采用JSON格式进行了系统描述，详见“/src/DSRE”文件夹，其中：风险项放于“risks.json”中。各协作者可以通过直接修改该文件来与我们进行该系统框架的协作开发，亦可通过在github上提issue来给我们提供意见或建议。

## 感谢

