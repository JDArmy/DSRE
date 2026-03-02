# JDARMY DSRE - Data Security Risk Enumeration

[中文](README_ZH.md) | English

## Introduction

JDARMY DSRE (Data Security Risk Enumeration) is an open-source framework for enumerating data security risks.

Online Demo: [DSRE.JD.ARMY](https://dsre.jd.army)

> JDArmy DSRE is created, owned, and managed by JD.Army. JD.Army is a professional red team focused on identifying and resolving enterprise security operational risks. JD.Army reserves the right to periodically update DSRE and this documentation at its sole discretion. While JD.Army owns all rights and interests in DSRE, it licenses the public to use it freely under the relevant open-source license.

## Background

Currently, major internet companies have established blue team units to evaluate and strengthen security capabilities through "offense-driven defense." This approach takes various forms, including practical attack-defense exercises, red-blue confrontation drills, blue team assessments, and tabletop exercises. However, two major issues remain unresolved in blue team operations: **first**, how to quantify the results of "offense-driven defense," and **second**, the scope and methodology of "offense-driven defense."

To address the first issue, we open-sourced the "JDARMY RTASS Red-Blue Confrontation Scoring Framework" ([RTASS.JD.ARMY](https://rtass.jd.army)) in July this year. Following the CVSS scoring model, it can evaluate the effective output of both red and blue teams in a single exercise through a questionnaire format, while measuring the security level of enterprises and businesses. After back-to-back scoring on the system following practical attack-defense exercises, our red and blue teams achieved largely consistent scores that were recognized by both sides, demonstrating the framework's objective evaluation capability and largely solving the first aspect of blue team work.

Regarding the second issue, we believe that traditional blue teams focus solely on network security attack-defense, unable to comprehensively assess and simulate the various threats enterprises face in information security. For example, traditional blue teams essentially simulate hackers, which we call "network blue teams," but lack the capability to simulate black/gray markets, insiders, supply chains, third-party partners, and regulators.

Black/gray markets generally correspond to business security issues. Simulating black/gray markets is what we call "business blue teams." Business blue teams are fundamentally different from network blue teams - we can no longer rely on network security thinking and methodologies like CYBER KILLCHAIN, MITRE ATT&CK, or OWASP TOP 10. To this end, we open-sourced the "JDARMY BREAK Business Risk Enumeration and Avoidance Knowledge Framework" ([BREAK.JD.ARMY](https://break.jd.army)) in November. Following the MITRE ATT&CK model, it enumerates 80 risks (including 24 sub-risks) across different dimensions such as business, content, identity, and confrontation, categorizes 15 business scenarios including finance, e-commerce, and social networking, and introduces 31 attack tools and techniques, along with 31 risk avoidance and mitigation measures with corresponding risks, facilitating red-blue confrontation work for both offensive and defensive teams.

In recent years, ransomware and data breach incidents have been occurring frequently, with both international and domestic legislation strengthening data control. Data security has risen to unprecedented importance, and simulating threats to data will become an important responsibility and mission of blue teams. Establishing "data blue teams" will become an inevitable trend. Data blue teams will simulate the threats and risks that hackers, black/gray markets, insiders, supply chains, third parties, and regulatory units can pose to enterprises in the data security domain, ultimately effectively assessing the current data security shortcomings enterprises face. But how should this work be carried out? This is precisely the original intention behind our open-sourcing of the "JDARMY DSRE Data Security Risk Enumeration" ([DSRE.JD.ARMY](https://dsre.jd.army)) knowledge framework to the community. We also hope to use the BREAK and DSRE frameworks to solve the second aspect of blue team issues.

## Framework Construction Approach and Methodology

In the BREAK Business Risk Enumeration and Avoidance Knowledge Framework, we actually adopted an enumerate-first-then-categorize approach, due to the complexity and multi-scenario nature of business. In the DSRE Data Security Risk Enumeration Framework, we adopted a categorize-first-then-enumerate construction approach, due to data being both atomic and having flow characteristics. Because data is atomic, we can better enumerate its attributes; and because data has flow characteristics, we can easily summarize its lifecycle.

For data attributes, we combined mature industry theories: the three basic security elements CIA and the three basic security functions AAA, forming six major dimensions for data security requirements. The three elements are: Confidentiality, Integrity, and Availability; the three functions are: Authentication, Authorization, and Accounting (Auditability). The security threats corresponding to these six dimensions are: disclosure, tampering, denial of service, spoofing, privilege abuse, and repudiation.

For the data lifecycle, we directly adopted the complete data security lifecycle: data collection, data transmission, data storage, data processing, data exchange, and data destruction - these six stages.

Finally, using data attributes (threats) as the horizontal axis and data lifecycle as the vertical axis, through cross-enumeration, we formed our data security risk enumeration knowledge framework.

## Conducting Data Security Red-Blue Confrontation by Risk Category

Through comprehensive enumeration of different issues data faces at different stages, in the current version (v0.3.0), we have summarized 112 risk items. However, because the risk dimensions are quite complex, it would be difficult to implement confrontation if taken as a whole. Therefore, we categorized risks into seven major categories based on their occurrence domain: Compliance, Functional, Vulnerability, Confrontational, Weakness, Norms, and AI Security.

- **Compliance Risks**: Risks arising from non-compliance with data security laws and regulations issued by national regulatory units, functional departments, and organizations. Currently 18 items.

- **Functional Risks**: Risks caused by functional bugs in the data system implementation process. 12 items.

- **Vulnerability Risks**: Risks that may be discovered and exploited by attackers to cause certain data security impacts. 29 items.

- **Confrontational Risks**: Risks that involve certain confrontation stages and require continuous capability improvement. 12 items.

- **Weakness Risks**: Risks that won't be directly exploited by attackers but may cause problems when combined with certain vulnerabilities or in specific scenarios. 12 items.

- **Norms Risks**: Risks arising from non-compliance with data security norms that should be possessed and followed, excluding "compliance." 21 items.

- **AI Security Risks**: Data security risks arising from the introduction of artificial intelligence, large language models (LLM), machine learning, and other technologies. 8 items.

After categorizing security risks, security teams can decide which work to undertake based on their capability reserves and work intentions in data security risk assessment, i.e., reusing existing security capabilities. For example: network blue teams can choose "vulnerability" and "confrontational" categories for red-blue confrontation work; "compliance" and "norms" categories can be undertaken by security governance teams; "functional" and "weakness" categories can be undertaken by security operations and testing teams; "AI security" category can be undertaken by AI security teams or data security teams.

## Building a Complete Enterprise Confrontation Assessment System

By combining network blue teams, business blue teams, and data blue teams, we can comprehensively cover various information security risk scenarios enterprises face, constructing a complete "offense-driven defense" blue team confrontation assessment system. The three frameworks RTASS ([https://github.com/JDArmy/RTASS](https://github.com/JDArmy/RTASS)), BREAK ([https://github.com/JDArmy/BREAK](https://github.com/JDArmy/BREAK)), and DSRE ([https://github.com/JDArmy/DSRE](https://github.com/JDArmy/DSRE)) can respectively provide strong support for the three blue team work scenarios, facilitating better execution of related work. Of course, "one family's opinion" always has shortcomings. We never dare to presume to represent the entire industry, so we open-source these three frameworks, hoping that the open-source community will give back to the frameworks themselves, making them more objective, accurate, and comprehensive blue team operational systems.

## Collaboration & Contribution

Like the RTASS and BREAK frameworks, the DSRE framework is systematically described in JSON format. See the "/src/DSRE" folder, where risk items are placed in "risks.json." Collaborators can cooperate with us in the collaborative development of this system framework by directly modifying this file, or provide opinions or suggestions by submitting issues on GitHub.

## Version Update Log

### v0.3.0 (2026-03)
- **Added AI Security Risk Category**: Added 8 AI/LLM-related data security risks (R0096-R0103), covering training data poisoning, model reverse attacks, prompt injection, RAG knowledge base leakage, AI agent privilege escalation, etc.
- **Filled Blank Risks**: Completed 6 blank risk items (R0064, R0065, R0071, R0072, R0082, R0084)
- **Added Cloud Native & Supply Chain Risks**: Added cloud storage misconfiguration, container image sensitive data leakage, open-source component vulnerabilities, third-party SDK unauthorized collection, etc. (R0104-R0108)
- **Added API Security Risks**: Added API data aggregation attacks, shadow API data leakage, etc. (R0111-R0112)
- **Updated Compliance Risks**: Added data cross-border security assessment, data classification and grading, and other 2024 new regulatory requirements (R0109-R0110)
- **Added Security Implementation Measures**: Added 4 protection measures including privacy computing, zero trust architecture, AI security protection, and data lineage tracking (total 36 measures)
- **Added Security Implements Mapping**: Each risk now has precise one-to-many mapping with security implementation measures (average 2.16 measures per risk, total 242 mappings)
- **Enhanced UI Features**: Added lifecycle sub-stage tooltips, last updated timestamp display, and improved visual design
- **Technology Stack Upgrade**: Upgraded to Vue 3.5, Vite 6, TypeScript 5.7, Element Plus 2.9, and other latest versions
- **Fixed Issues**: Corrected Spoofing spelling error (was Snoofing)
- **Total Risks**: Increased from 95 to 112 items (18 Compliance, 12 Functional, 29 Vulnerability, 12 Confrontational, 12 Weakness, 21 Norms, 8 AI Security)

### v0.2.0 (2023-12)
- Initial public release with comprehensive risk enumeration

### v0.1.4 (2023-06)
- General optimizations

### v0.1.3
- Fixed mobile table serialization issues

### v0.1.2
- Added detailed threat descriptions and examples

### v0.1.1
- Initial version release

## Acknowledgments

We would like to thank all contributors and the open-source community for their support and feedback.

## License

Apache 2.0
