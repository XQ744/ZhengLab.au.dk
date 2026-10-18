(function () {
  "use strict";

  const root = document.documentElement;
  const storage = {
    get(key) {
      try {
        return window.localStorage.getItem(key);
      } catch (_) {
        return null;
      }
    },
    set(key, value) {
      try {
        window.localStorage.setItem(key, value);
      } catch (_) {
        // The controls still work when storage is unavailable.
      }
    }
  };

  const systemPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = storage.get("zheng-lab-theme") || (systemPrefersDark ? "dark" : "light");
  const initialLanguage = storage.get("zheng-lab-language") === "zh-CN" ? "zh-CN" : "en";

  root.dataset.theme = initialTheme;
  root.lang = initialLanguage;

  const zh = {
    "Research": "研究方向",
    "Representative Work": "代表性成果",
    "Platform & Equipment": "平台与设备",
    "Team": "团队成员",
    "Join": "加入我们",
    "Aarhus University · Department of Biomedicine": "奥胡斯大学 · 生物医学系",
    "Spatial proteomics for": "空间蛋白质组学赋能",
    "precision oncology.": "精准肿瘤学。",
    "Dr. Xiang Zheng leads translational spatial proteomics programs that decode tumor-immune ecosystems, discover biomarkers of therapy resistance, and bridge multiplexed imaging with deep proteomic profiling for precision oncology.": "郑翔博士带领转化空间蛋白质组学研究，解析肿瘤—免疫生态系统，发现治疗耐药生物标志物，并将多重成像与深度蛋白质组分析相结合，推动精准肿瘤学发展。",
    "View Representative Work": "查看代表性成果",
    "Explore Research": "了解研究方向",
    "publications (11 first-author, 4 corresponding-author)": "篇论文（11 篇第一作者，4 篇通讯作者）",
    "invited or selected international conference talks": "次受邀或入选国际会议报告",
    "≈17M DKK": "≈1,700万 DKK",
    "secured across 8 competitive research grants": "来自 8 项竞争性科研资助",
    "Dr. Xiang Zheng": "郑翔博士",
    "Group Leader and LEO Foundation Dr. Abildgaard Fellow": "课题组负责人、LEO Foundation Dr. Abildgaard Fellow",
    "Contact": "联系方式",
    "Email for collaborations, speaking invitations, and student inquiries.": "欢迎通过邮件联系科研合作、学术报告及学生申请事宜。",
    "Orcid:": "ORCID：",
    "Scan for LinkedIn": "扫码访问 LinkedIn",
    "Research Focus": "研究方向",
    "Understanding disease as a spatially organized ecosystem.": "从空间组织的生态系统视角理解疾病。",
    "The lab combines clinical questions with high-dimensional imaging, laser microdissection, mass spectrometry, and computational interpretation to resolve molecular programs inside tissue.": "课题组围绕临床问题，结合高维成像、激光显微切割、质谱分析和计算解析，揭示组织内部的分子程序。",
    "Tumor-Immune Crosstalk": "肿瘤—免疫互作",
    "Decode how cancer cells, macrophages, T cells, and stromal neighborhoods interact to shape immune evasion and therapy response.": "解析癌细胞、巨噬细胞、T 细胞与基质微环境如何相互作用，并共同影响免疫逃逸和治疗反应。",
    "Spatial Proteomics": "空间蛋白质组学",
    "Build and apply mipDVP workflows that connect multiplexed tissue images with deep proteomic measurements at spatially defined cell populations.": "开发并应用 mipDVP 工作流程，将多重组织成像与空间定义细胞群体的深度蛋白质组测量相连接。",
    "Precision Medicine": "精准医学",
    "Transform archived and clinical tissues into molecular maps that reveal biomarkers, vulnerabilities, and patient-specific therapeutic hypotheses.": "将存档及临床组织转化为分子图谱，发现生物标志物、治疗脆弱点和患者特异性治疗假设。",
    "Highly multiplexed imaging and deep visual proteomics.": "高通量多重成像与深度视觉蛋白质组学。",
    "The provided representative article introduces mipDVP and applies it to colorectal and tonsil cancer tissues to reveal spatially regulated tumor-immune interactions.": "该代表性论文介绍了 mipDVP，并将其应用于结直肠癌和扁桃体癌组织，揭示受空间调控的肿瘤—免疫相互作用。",
    "Deciphering functional tumor-immune crosstalk through highly multiplexed imaging and deep visual proteomics": "利用高通量多重成像与深度视觉蛋白质组学解析功能性肿瘤—免疫互作",
    "Developed an advanced strategy combining multiplexed imaging, single-cell laser microdissection, and sensitive mass spectrometry.": "建立了结合多重成像、单细胞激光显微切割和高灵敏度质谱的先进策略。",
    "Identified 21 cell populations and thousands of proteins while preserving spatial tissue context.": "在保留组织空间背景的同时，鉴定出 21 类细胞群体和数千种蛋白质。",
    "Revealed an immunosuppressive macrophage barrier that may impede T-cell infiltration in cold tumors.": "揭示了可能阻碍 T 细胞浸润冷肿瘤的免疫抑制性巨噬细胞屏障。",
    "Discovered spatial T-cell adaptations in hypoxic tumor regions and potential immunotherapy targets.": "发现缺氧肿瘤区域中的 T 细胞空间适应机制及潜在免疫治疗靶点。",
    "Open Full Paper PDF": "打开论文全文 PDF",
    "A platform for reading tissue architecture and proteomic depth together, enabling spatial insights for personalized oncology.": "一个同时解析组织结构与深度蛋白质组信息的平台，为个体化肿瘤学提供空间层面的洞见。",
    "Platform": "平台",
    "A tissue-to-proteome workflow built for clinical questions.": "面向临床问题的组织到蛋白质组工作流程。",
    "The design emphasizes the lab's methodological identity: spatial context first, then deep molecular profiling, then translational interpretation.": "该流程体现课题组的方法学特色：先保留空间背景，再开展深度分子分析，最终进行转化医学解读。",
    "Multiplexed Imaging": "多重成像",
    "Visualize tumor, immune, and stromal markers across intact clinical tissue sections.": "在完整临床组织切片中呈现肿瘤、免疫与基质标志物。",
    "Spatial Selection": "空间选择",
    "Choose cell populations and niches based on tissue context and biological hypotheses.": "根据组织空间背景和生物学假设选择细胞群体及微环境。",
    "Proteomic Profiling": "蛋白质组分析",
    "Measure thousands of proteins from selected cells using sensitive mass spectrometry.": "利用高灵敏度质谱测量所选细胞中的数千种蛋白质。",
    "Clinical Translation": "临床转化",
    "Identify biomarkers, immune adaptations, and therapeutic targets for precision medicine.": "发现精准医学所需的生物标志物、免疫适应机制和治疗靶点。",
    "Research Infrastructure": "科研基础设施",
    "Our spaces and scientific equipment.": "我们的实验空间与科研设备。",
    "Based in the Skou Building at Aarhus University, our research infrastructure brings together automated multiplexing, laser microdissection, mass spectrometry, and spatial metabolomics.": "课题组位于奥胡斯大学 Skou 大楼，科研基础设施涵盖自动化多重分析、激光显微切割、质谱分析和空间代谢组学。",
    "The Skou Building": "Skou 大楼",
    "Main hub": "主要基地",
    "Lab space": "实验室空间",
    "Automated multiplexing": "自动化多重分析",
    "Laser microdissection": "激光显微切割",
    "Mass spectrometry": "质谱分析",
    "Spatial metabolomics": "空间代谢组学",
    "Our Team": "团队成员",
    "Meet the people behind Zheng Lab.": "认识 Zheng Lab 的团队成员。",
    "Our independent research group at Aarhus University is backed by a 12 million DKK LEO Foundation starting grant. Together, we study spatial proteomics for precision oncology and dermatology.": "我们是奥胡斯大学的独立研究团队，获得 LEO Foundation 1,200 万丹麦克朗启动经费支持，聚焦空间蛋白质组学在精准肿瘤学和皮肤病学中的应用。",
    "Postdoc": "博士后",
    "Research trainees": "科研实习生",
    "Technical staff": "技术人员",
    "CV / About": "简历 / 关于",
    "Academic profile, leadership, and translational impact.": "学术经历、团队领导与转化影响力。",
    "Xiang Zheng, PhD, is a Group Leader and LEO Foundation Dr. Abildgaard Fellow at Aarhus University, advancing spatial proteomics, immune microenvironment biology, and precision medicine.": "郑翔博士现任奥胡斯大学课题组负责人、LEO Foundation Dr. Abildgaard Fellow，致力于推动空间蛋白质组学、免疫微环境生物学和精准医学研究。",
    "Overview": "概览",
    "Author of 22 publications, including 11 as first author and 4 as corresponding author. Secured 8 competitive research grants totalling approximately 17 million DKK, received travel or award-based funding on 9 occasions, delivered 42 invited or selected international conference talks, and received 20 international awards.": "发表论文 22 篇，其中第一作者论文 11 篇、通讯作者论文 4 篇；获得 8 项竞争性科研资助，总额约 1,700 万丹麦克朗；获得 9 次差旅或奖励类资助；完成 42 次受邀或入选国际会议报告，并获得 20 项国际奖项。",
    "Academic Appointments": "工作经历",
    "2026–present · Group Leader, LEO Foundation Dr. Abildgaard Fellow, Aarhus University": "2026–至今 · 奥胡斯大学课题组负责人、LEO Foundation Dr. Abildgaard Fellow",
    "2024–2026 · Assistant Professor, Aarhus University": "2024–2026 · 奥胡斯大学助理教授",
    "(mentor: Prof. Robert A. Fenton)": "（导师：Robert A. Fenton 教授）",
    "2021–2024 · Postdoctoral Researcher, University of Copenhagen": "2021–2024 · 哥本哈根大学博士后研究员",
    "(mentor: Prof. Matthias Mann)": "（导师：Matthias Mann 教授）",
    "Education": "教育背景",
    "2021 · PhD, Human Biomedicine, Max Planck Institute, Bad Nauheim, Germany": "2021 · 德国巴特瑙海姆马克斯·普朗克研究所，人类生物医学博士",
    "2014 · MSc, Molecular Biology and Oncology, Peking University, Beijing, China": "2014 · 北京大学分子生物学与肿瘤学硕士",
    "2011 · Bachelor of Clinical Medicine, Nanchang University, Nanchang, China": "2011 · 南昌大学临床医学学士",
    "Scientific Focus Areas": "科研方向",
    "Spatial proteomics:": "空间蛋白质组学：",
    "developed mipDVP, now expanding to 3D and immune clone-resolved spatial multiomics.": "开发 mipDVP 平台，目前正拓展至三维空间多组学和免疫克隆分辨空间多组学。",
    "Immune microenvironment:": "免疫微环境：",
    "high-resolution spatial profiling of tumour and inflammatory immune ecosystems.": "对肿瘤及炎症性免疫生态系统进行高分辨率空间分析。",
    "Computational disease modeling:": "计算疾病建模：",
    "AI-driven integration of spatial omics data to predict disease progression and treatment response.": "利用人工智能整合空间组学数据，预测疾病进展和治疗反应。",
    "Precision medicine:": "精准医学：",
    "translating spatial biomarkers into clinical diagnostics and therapeutic targets.": "将空间生物标志物转化为临床诊断工具和治疗靶点。",
    "Teaching and Supervision": "教学与人才培养",
    "Supervised or co-supervised 12 junior researchers: 4 Bachelor's, 2 Master's, 2 PhD students (co-supervision), 1 postdoctoral researcher, and 3 laboratory technicians.": "指导或共同指导 12 名青年研究人员，包括 4 名本科生、2 名硕士生、2 名博士生（共同指导）、1 名博士后和 3 名实验技术人员。",
    "Research-based teaching in Medical Biochemistry Lab Exercises (approximately 530 Bachelor students annually), Histology, Immunology, and Single-Cell Multiomics.": "承担医学本科生物化学实验课（每年约 530 名本科生）、组织学、免疫学及单细胞多组学等研究型教学。",
    "Invited lecturer and co-designer of Spatial Proteomics courses for PhD students and postdocs at Aarhus University and Alamein International University.": "受邀授课并共同设计面向奥胡斯大学和阿拉曼国际大学博士生及博士后的空间蛋白质组学课程。",
    "Completed University Pedagogy, Aarhus University (2025), and Introduction to University Pedagogy, University of Copenhagen (2023); ongoing PhD Supervision Course, Aarhus University (2026).": "完成奥胡斯大学高校教学法课程（2025）及哥本哈根大学高校教学法导论课程（2023）；正在参加奥胡斯大学博士生指导课程（2026）。",
    "Developed and shared SOPs for multiplexed immunofluorescence, laser microdissection, and spatial data analysis.": "开发并共享多重免疫荧光、激光显微切割和空间数据分析标准操作流程。",
    "Research Collaborations": "科研合作",
    "Prof. Matthias Mann (University of Copenhagen / MPI Biochemistry) · mipDVP platform development": "Matthias Mann 教授（哥本哈根大学 / 马克斯·普朗克生物化学研究所）· mipDVP 平台开发",
    "Prof. Robert A. Fenton (Aarhus University) · renal proteomics and the first extension of mipDVP beyond oncology": "Robert A. Fenton 教授（奥胡斯大学）· 肾脏蛋白质组学及 mipDVP 首次拓展至肿瘤学以外领域",
    "Prof. Bastian Schilling and Prof. Andreas Weigert (Goethe University Frankfurt) · skin lymphoma and lung cancer immunity": "Bastian Schilling 教授、Andreas Weigert 教授（法兰克福歌德大学）· 皮肤淋巴瘤和肺癌免疫",
    "Prof. Lars Fugger (University of Oxford) · neuro-immune and neurodegenerative disease proteomics": "Lars Fugger 教授（牛津大学）· 神经免疫与神经退行性疾病蛋白质组学",
    "Prof. Ulf Ahlgren (Umeå University) and Assoc. Prof. Melinda Rezeli (Lund University) · 3D volumetric spatial proteomics": "Ulf Ahlgren 教授（于默奥大学）、Melinda Rezeli 副教授（隆德大学）· 三维体积空间蛋白质组学",
    "Prof. Mats Nilsson (Stockholm University) and Assoc. Prof. Carina Strell (University of Bergen) · T-cell clone-resolved spatial multiomics": "Mats Nilsson 教授（斯德哥尔摩大学）、Carina Strell 副教授（卑尔根大学）· T 细胞克隆分辨空间多组学",
    "Leadership and Team Development": "领导力与团队建设",
    "2026 · Recruited the first computational postdoctoral researcher and established an independent research team.": "2026 · 招聘首位计算方向博士后并建立独立研究团队。",
    "2026 · Participating in one-to-one coaching through the LEO Foundation Leadership Coaching Programme.": "2026 · 参加 LEO Foundation Leadership Coaching Programme 一对一领导力辅导。",
    "2025–2026 · Coordinating role in the HALRIC infrastructure consortium (Aarhus–Lund–Umeå–Miltenyi Biotec), integrating 3D imaging into mipDVP.": "2025–2026 · 在 HALRIC 基础设施联盟（奥胡斯—隆德—于默奥—Miltenyi Biotec）中承担协调工作，将三维成像整合进 mipDVP。",
    "2026 · Lead applicant for a Nordic Cancer Union grant application (Aarhus–Stockholm–Bergen), integrating spatial TCR clonotyping with mipDVP.": "2026 · 作为北欧癌症联盟基金申请牵头人（奥胡斯—斯德哥尔摩—卑尔根），推动空间 TCR 克隆分型与 mipDVP 整合。",
    "Dissemination and Academic Service": "学术传播与专业服务",
    "42 selected or invited lectures worldwide, including a plenary oral presentation at HUPO Congress 2025 (Toronto), an invited presentation at EACR 2025 (Portugal), and lectures at Umeå University, Lund University, University of Copenhagen, and Karolinska Institute.": "在全球完成 42 次入选或受邀报告，包括 HUPO Congress 2025（多伦多）大会报告、EACR 2025（葡萄牙）特邀报告，以及在于默奥大学、隆德大学、哥本哈根大学和卡罗琳斯卡学院的受邀讲座。",
    "Advisory Board Member, HUPO; Editorial Board Member,": "HUPO 顾问委员会委员；",
    "; Ambassador, EACR; Founding Member, International Academic Association of Targetome (IAAT); Editorial Advisory Board Member,": "编委；EACR 大使；国际靶标组学学术协会（IAAT）创始会员；",
    ".": "编委会委员。",
    "Professional memberships: EORTC, AACR, DSBMB, HUPO, and SPS.": "专业学会会员：EORTC、AACR、DSBMB、HUPO 和 SPS。",
    "102 peer-review reports for 20+ journals and funding bodies, including": "为 20 余种期刊及资助机构完成 102 份同行评审报告，包括",
    ", and the Swiss National Science Foundation; book proposal reviewer, Elsevier (2026).": "，以及瑞士国家科学基金会；2026 年担任 Elsevier 图书提案评审人。",
    "Co-organiser, Spatial Seminar, Aarhus (2025, 80+ international participants); contributor to the Nordic Alliance for Single-Cell and Spatial Analysis (Denmark–Sweden–Norway, 2026).": "共同组织奥胡斯 Spatial Seminar（2025，80 余名国际参会者）；参与北欧单细胞与空间分析联盟（丹麦—瑞典—挪威，2026）。",
    "Entrepreneurship and Industry Collaboration": "创业与产业合作",
    "Co-Founder, InnovEdged AB (2024–present, with Dr. Jianning Zhao), developing interpretable machine-learning tools that make spatial proteomics analysis more accessible to clinical and translational users.": "InnovEdged AB 联合创始人（2024–至今，与赵建宁博士共同创立），开发可解释机器学习工具，降低临床和转化研究用户使用空间蛋白质组分析的门槛。",
    "Miltenyi Biotec (PI, EU HALRIC) · 3D imaging integration": "Miltenyi Biotec（EU HALRIC 项目负责人）· 三维成像整合",
    "Leica Microsystems (with Dr. Falk Schlaudraff) · laser microdissection software optimisation": "Leica Microsystems（与 Falk Schlaudraff 博士合作）· 激光显微切割软件优化",
    "Single-Cell Technologies (with Dr. Ferenc Kovacs) · BIAS software algorithm development": "Single-Cell Technologies（与 Ferenc Kovacs 博士合作）· BIAS 软件算法开发",
    "HiComp · skin-on-chip and microfluidic platforms": "HiComp · 皮肤芯片与微流控平台",
    "Selected Publications": "代表性论文",
    "Deciphering functional tumor-immune crosstalk through highly multiplexed imaging and deep visual proteomics. Molecular Cell, 2025.": "利用高通量多重成像与深度视觉蛋白质组学解析功能性肿瘤—免疫互作。《Molecular Cell》，2025。",
    "The HDAC2-SP1 axis orchestrates protumor macrophage polarization. Cancer Research, 2023.": "HDAC2–SP1 轴调控促肿瘤巨噬细胞极化。《Cancer Research》，2023。",
    "Fibrocytes boost tumor-supportive phenotypic switches in the lung cancer niche. Nature Communications, 2022.": "纤维细胞促进肺癌微环境中的肿瘤支持性表型转换。《Nature Communications》，2022。",
    "Metabolism in tumor-associated macrophages. European Respiratory Review, 2020.": "肿瘤相关巨噬细胞的代谢。《European Respiratory Review》，2020。",
    "Redirecting tumor-associated macrophages to become tumoricidal effectors. Oncotarget, 2017.": "重塑肿瘤相关巨噬细胞，使其成为杀伤肿瘤的效应细胞。《Oncotarget》，2017。",
    "Research Funding": "科研资助",
    "8 competitive grants · approximately 17 million DKK secured": "8 项竞争性资助 · 总额约 1,700 万丹麦克朗",
    "LEO Foundation, Dr Abildgaard Fellowship": "LEO Foundation，Dr Abildgaard Fellowship",
    "Personal fellowship / starting grant · 12,000,000 DKK · 2026–2030": "个人基金 / 启动经费 · 12,000,000 丹麦克朗 · 2026–2030",
    "Danish Cancer Society, Young Talented Cancer Researchers": "丹麦癌症协会，Young Talented Cancer Researchers",
    "Personal research grant · 3,750,000 DKK · 2027–2030": "个人科研基金 · 3,750,000 丹麦克朗 · 2027–2030",
    "Hanseatic Life Science Research Infrastructure Consortium (HALRIC)": "汉萨生命科学研究基础设施联盟（HALRIC）",
    "Project / infrastructure grant · 600,000 DKK · 2025–2026": "项目 / 基础设施基金 · 600,000 丹麦克朗 · 2025–2026",
    "Project grant · 80,000 DKK · 2025–2026": "项目基金 · 80,000 丹麦克朗 · 2025–2026",
    "Career grant · 90,000 DKK · 2026": "职业发展基金 · 90,000 丹麦克朗 · 2026",
    "Project grant · 90,000 DKK · 2026–2027": "项目基金 · 90,000 丹麦克朗 · 2026–2027",
    "Project grant · 160,000 DKK · 2026–2027": "项目基金 · 160,000 丹麦克朗 · 2026–2027",
    "Prizes and Awards": "奖项与荣誉",
    "2026 · Young Talented Cancer Researcher Award, Danish Cancer Society, Denmark": "2026 · 丹麦癌症协会青年优秀癌症研究者奖，丹麦",
    "2026 · NASSA Travel Grant, Lund, Sweden": "2026 · NASSA 差旅资助，瑞典隆德",
    "2026 · Miltenyi Biotec Publication Award, China": "2026 · Miltenyi Biotec 论文奖，中国",
    "2025 · HUPO Early Career Researcher Manuscript Competition, First Place, Canada": "2025 · HUPO 青年研究者论文竞赛第一名，加拿大",
    "2025 · AU Travel Grant, Aarhus, Denmark": "2025 · 奥胡斯大学差旅资助，丹麦奥胡斯",
    "2025 · IUPS Poster Award, International Union of Physiological Sciences Congress, Germany": "2025 · 国际生理科学联合会大会海报奖，德国",
    "2025 · SPS Travel Grant, The Scandinavian Physiological Society, Denmark": "2025 · 斯堪的纳维亚生理学会差旅资助，丹麦",
    "2025 · Finalist, HUPO ECR Manuscript Competition, Canada": "2025 · HUPO 青年研究者论文竞赛决赛入围，加拿大",
    "2024 · Emerging Technologies Funding Award, GENEWIZ Week Awards, America": "2024 · GENEWIZ Week Awards 新兴技术资助奖，美国",
    "2024 · Winner of the Danish Bioimaging Image Contest, Denmark": "2024 · 丹麦生物成像图片竞赛冠军，丹麦",
    "2023 · Best Poster Award, CNHUPO Congress, China": "2023 · CNHUPO 大会最佳海报奖，中国",
    "2023 · HUPO Travel Award, HUPO Congress, South Korea": "2023 · HUPO 大会差旅奖，韩国",
    "2023 · TME Travel Award, EACR Congress, Italy": "2023 · EACR 大会 TME 差旅奖，意大利",
    "2022 · FEBS Youth Travel Fund Grant, Sweden": "2022 · FEBS 青年差旅基金，瑞典",
    "2022 · Keystone Symposia Future of Science Fund Scholarship, Italy": "2022 · Keystone Symposia Future of Science Fund 奖学金，意大利",
    "2020 · Poster Prize, DZL Congress, Germany": "2020 · DZL 大会海报奖，德国",
    "2019 · Poster Prize, DZL Congress, Germany": "2019 · DZL 大会海报奖，德国",
    "2017 · Best Poster Award, MPI Retreat, Germany": "2017 · MPI Retreat 最佳海报奖，德国",
    "2017 · International Trainee Scholarship Award, ATS Congress, America": "2017 · ATS 大会国际青年研究者奖学金，美国",
    "2017 · William MacNee Award, ERS Congress, Portugal": "2017 · ERS 大会 William MacNee 奖，葡萄牙",
    "We’re growing. More opportunities coming soon!": "团队正在发展壮大，更多机会即将发布！",
    "Join Zheng Lab in Aarhus.": "加入位于奥胡斯的 Zheng Lab。",
    "We welcome students, postdocs, clinicians, and computational collaborators who want to work at the interface of imaging, proteomics, cancer biology, and precision medicine.": "我们欢迎希望在成像、蛋白质组学、肿瘤生物学与精准医学交叉领域开展工作的学生、博士后、临床医生和计算研究合作者。",
    "Contact the Lab": "联系课题组",
    "© Zheng Lab · Aarhus University": "© Zheng Lab · 奥胡斯大学",
    "Spatial Proteomics · Tumor Microenvironment · Precision Oncology": "空间蛋白质组学 · 肿瘤微环境 · 精准肿瘤学"
  };

  const titleByLanguage = {
    en: "Zheng Lab | Spatial Proteomics at Aarhus University",
    "zh-CN": "Zheng Lab | 奥胡斯大学空间蛋白质组学课题组"
  };

  const descriptionByLanguage = {
    en: "Zheng Lab at Aarhus University develops spatial proteomics and deep visual proteomics approaches for tumor-immune biology and precision oncology.",
    "zh-CN": "奥胡斯大学 Zheng Lab 开发空间蛋白质组学和深度视觉蛋白质组学方法，研究肿瘤免疫生物学与精准肿瘤学。"
  };

  const translatedAttributes = {
    "Zheng Lab home": "Zheng Lab 首页",
    "Primary navigation": "主导航",
    "Display settings": "显示设置",
    "Lab highlights": "课题组亮点",
    "Dr. Xiang Zheng profile": "郑翔博士简介",
    "Contact information": "联系信息",
    "Publication summary": "论文摘要",
    "Research funding and awards": "科研资助与奖项",
    "The Skou Building at Aarhus University": "奥胡斯大学 Skou 大楼",
    "Lab space at Aarhus University": "奥胡斯大学实验室空间",
    "MACSima — Automated multiplexing": "MACSima — 自动化多重分析",
    "LMD7 — Laser microdissection": "LMD7 — 激光显微切割",
    "Orbitrap Ascend — Mass spectrometry": "Orbitrap Ascend — 质谱分析",
    "timsTOF fleX MALDI-2 — Spatial metabolomics": "timsTOF fleX MALDI-2 — 空间代谢组学",
    "Zheng Lab research trainee portrait 1": "Zheng Lab 科研实习生照片 1",
    "Zheng Lab research trainee portrait 2": "Zheng Lab 科研实习生照片 2",
    "Zheng Lab research trainee portrait 3": "Zheng Lab 科研实习生照片 3",
    "Zheng Lab research trainee portrait 4": "Zheng Lab 科研实习生照片 4",
    "Zheng Lab technical staff portrait 1": "Zheng Lab 技术人员照片 1",
    "Zheng Lab technical staff portrait 2": "Zheng Lab 技术人员照片 2",
    "Zheng Lab technical staff portrait 3": "Zheng Lab 技术人员照片 3",
    "Dr. Xiang Zheng in a laboratory setting": "郑翔博士在实验室",
    "Dr. Xiang Zheng LinkedIn QR code": "郑翔博士 LinkedIn 二维码"
  };

  document.addEventListener("DOMContentLoaded", function () {
    const languageToggle = document.getElementById("language-toggle");
    const languageLabel = document.getElementById("language-label");
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const themeLabel = document.getElementById("theme-label");
    const themeColor = document.querySelector('meta[name="theme-color"]');
    const description = document.querySelector('meta[name="description"]');
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if (node.parentElement.closest("#language-toggle, #theme-toggle")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const textNodes = [];
    const originalText = new Map();
    let node;

    while ((node = walker.nextNode())) {
      textNodes.push(node);
      originalText.set(node, node.nodeValue);
    }

    const attributeNodes = Array.from(document.querySelectorAll("[aria-label], [alt]"));
    const originalAttributes = new Map(attributeNodes.map((element) => [element, {
      ariaLabel: element.getAttribute("aria-label"),
      alt: element.getAttribute("alt")
    }]));

    function normalize(value) {
      return value.replace(/\s+/g, " ").trim();
    }

    function replaceText(textNode, replacement) {
      const source = originalText.get(textNode);
      const leading = source.match(/^\s*/)[0];
      const trailing = source.match(/\s*$/)[0];
      textNode.nodeValue = leading + replacement + trailing;
    }

    function updateControls(language) {
      const isChinese = language === "zh-CN";
      const isDark = root.dataset.theme === "dark";

      languageLabel.textContent = isChinese ? "EN" : "中文";
      languageToggle.querySelector(".control-icon").textContent = isChinese ? "A" : "文";
      languageToggle.setAttribute("aria-label", isChinese ? "Switch to English" : "切换为中文");
      languageToggle.title = isChinese ? "Switch to English" : "切换为中文";

      themeIcon.textContent = isDark ? "☀" : "☾";
      themeLabel.textContent = isChinese ? (isDark ? "浅色" : "深色") : (isDark ? "Light" : "Dark");
      const themeAction = isChinese
        ? (isDark ? "切换为浅色模式" : "切换为深色模式")
        : (isDark ? "Switch to light mode" : "Switch to dark mode");
      themeToggle.setAttribute("aria-label", themeAction);
      themeToggle.title = themeAction;
      themeToggle.setAttribute("aria-pressed", String(isDark));
    }

    function applyLanguage(language) {
      const isChinese = language === "zh-CN";
      root.lang = language;
      document.title = titleByLanguage[language];
      description.content = descriptionByLanguage[language];

      textNodes.forEach((textNode) => {
        const source = originalText.get(textNode);
        const key = normalize(source);
        replaceText(textNode, isChinese && zh[key] ? zh[key] : source.trim());
      });

      attributeNodes.forEach((element) => {
        const source = originalAttributes.get(element);
        if (source.ariaLabel !== null) {
          element.setAttribute("aria-label", isChinese && translatedAttributes[source.ariaLabel]
            ? translatedAttributes[source.ariaLabel]
            : source.ariaLabel);
        }
        if (source.alt !== null) {
          element.setAttribute("alt", isChinese && translatedAttributes[source.alt]
            ? translatedAttributes[source.alt]
            : source.alt);
        }
      });

      storage.set("zheng-lab-language", language);
      updateControls(language);
      window.dispatchEvent(new CustomEvent("site-language-change", { detail: { language } }));
    }

    function applyTheme(theme) {
      root.dataset.theme = theme;
      themeColor.content = theme === "dark" ? "#07131f" : "#f6f9fc";
      storage.set("zheng-lab-theme", theme);
      updateControls(root.lang);
    }

    languageToggle.addEventListener("click", function () {
      applyLanguage(root.lang === "zh-CN" ? "en" : "zh-CN");
    });

    themeToggle.addEventListener("click", function () {
      applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
    });

    applyTheme(initialTheme);
    applyLanguage(initialLanguage);

    window.zhengLabPreferences = {
      setLanguage: applyLanguage,
      setTheme: applyTheme
    };
  });
})();
