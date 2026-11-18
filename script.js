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
  const initialLanguage = storage.get("zheng-lab-language") === "da" ? "da" : "en";

  root.dataset.theme = initialTheme;
  root.lang = initialLanguage;

  const da = {
    "Research": "Forskning",
    "Representative Work": "Udvalgte arbejder",
    "Platform & Equipment": "Platform og udstyr",
    "Team": "Team",
    "Aarhus University · Department of Biomedicine": "Aarhus Universitet · Institut for Biomedicin",
    "Spatial proteomics for": "Rumlig proteomik til",
    "precision oncology.": "præcisionsonkologi.",
    "Dr. Xiang Zheng leads translational spatial proteomics programs that decode tumor-immune ecosystems, discover biomarkers of therapy resistance, and bridge multiplexed imaging with deep proteomic profiling for precision oncology.": "Dr. Xiang Zheng leder translationelle programmer inden for rumlig proteomik, som afkoder tumor-immun-økosystemer, finder biomarkører for behandlingsresistens og forbinder multiplex-billeddannelse med dyb proteomisk profilering til præcisionsonkologi.",
    "View Representative Work": "Se udvalgte arbejder",
    "Explore Research": "Udforsk forskningen",
    "publications (11 first-author, 4 corresponding-author)": "publikationer (11 som førsteforfatter, 4 som korresponderende forfatter)",
    "international awards": "internationale priser",
    "invited or selected international conference talks": "inviterede eller udvalgte internationale konferenceforedrag",
    "17M DKK": "17 mio. DKK",
    "secured across 8 competitive research grants": "hjemtaget gennem 8 konkurrenceudsatte forskningsbevillinger",
    "Dr. Xiang Zheng": "Dr. Xiang Zheng",
    "Group Leader and LEO Foundation Dr. Abildgaard Fellow": "Gruppeleder og LEO Foundation Dr. Abildgaard Fellow",
    "Contact": "Kontakt",
    "Orcid:": "ORCID:",
    "Scan for LinkedIn": "Scan til LinkedIn",
    "Research Focus": "Forskningsfokus",
    "Understanding disease as a spatially organized ecosystem.": "At forstå sygdom som et rumligt organiseret økosystem.",
    "The lab combines clinical questions with high-dimensional imaging, laser microdissection, mass spectrometry, and computational interpretation to resolve molecular programs inside tissue.": "Laboratoriet forbinder kliniske spørgsmål med højdimensional billeddannelse, lasermikrodissektion, massespektrometri og beregningsmæssig fortolkning for at afdække molekylære programmer i væv.",
    "Tumor-Immune Crosstalk": "Tumor-immun-samspil",
    "Decode how cancer cells, macrophages, T cells, and stromal neighborhoods interact to shape immune evasion and therapy response.": "Afdæk, hvordan kræftceller, makrofager, T-celler og stromale naboskaber påvirker immunundvigelse og behandlingsrespons.",
    "Spatial Proteomics": "Rumlig proteomik",
    "Build and apply mipDVP workflows that connect multiplexed tissue images with deep proteomic measurements at spatially defined cell populations.": "Udvikle og anvende mipDVP-arbejdsgange, der forbinder multiplex-vævsbilleder med dybe proteommålinger af rumligt definerede cellepopulationer.",
    "Precision Medicine": "Præcisionsmedicin",
    "Transform archived and clinical tissues into molecular maps that reveal biomarkers, vulnerabilities, and patient-specific therapeutic hypotheses.": "Omsæt arkiveret og klinisk væv til molekylære kort, der afdækker biomarkører, sårbarheder og patientspecifikke behandlingsidéer.",
    "Highly multiplexed imaging and deep visual proteomics.": "Højt multiplekset billeddannelse og dyb visuel proteomik.",
    "The provided representative article introduces mipDVP and applies it to colorectal and tonsil cancer tissues to reveal spatially regulated tumor-immune interactions.": "Den udvalgte artikel introducerer mipDVP og anvender metoden på væv fra kolorektal- og tonsilcancer for at afdække rumligt regulerede tumor-immun-interaktioner.",
    "Deciphering functional tumor-immune crosstalk through highly multiplexed imaging and deep visual proteomics": "At afkode funktionelt tumor-immun-samspil gennem højt multiplekset billeddannelse og dyb visuel proteomik",
    "Developed an advanced strategy combining multiplexed imaging, single-cell laser microdissection, and sensitive mass spectrometry.": "Udviklede en avanceret strategi, der kombinerer multiplex-billeddannelse, enkeltcellet lasermikrodissektion og følsom massespektrometri.",
    "Identified 21 cell populations and thousands of proteins while preserving spatial tissue context.": "Identificerede 21 cellepopulationer og tusindvis af proteiner og bevarede samtidig vævets rumlige sammenhæng.",
    "Revealed an immunosuppressive macrophage barrier that may impede T-cell infiltration in cold tumors.": "Afdækkede en immunsuppressiv makrofagbarriere, som kan hæmme T-celleinfiltration i kolde tumorer.",
    "Discovered spatial T-cell adaptations in hypoxic tumor regions and potential immunotherapy targets.": "Opdagede rumlige T-celle-tilpasninger i hypoksiske tumorområder og mulige mål for immunterapi.",
    "Open Full Paper PDF": "Åbn artiklens PDF",
    "A platform for reading tissue architecture and proteomic depth together, enabling spatial insights for personalized oncology.": "En platform, der læser vævsarkitektur og proteomisk dybde sammen og giver rumlig indsigt til personaliseret onkologi.",
    "Platform": "Platform",
    "A tissue-to-proteome workflow built for clinical questions.": "En arbejdsgang fra væv til proteom, bygget til kliniske spørgsmål.",
    "The design emphasizes the lab's methodological identity: spatial context first, then deep molecular profiling, then translational interpretation.": "Designet fremhæver laboratoriets metodiske identitet: først rumlig kontekst, derefter dyb molekylær profilering og til sidst translationel fortolkning.",
    "Multiplexed Imaging": "Multiplex-billeddannelse",
    "Visualize tumor, immune, and stromal markers across intact clinical tissue sections.": "Visualiser tumor-, immun- og stromamarkører på intakte kliniske vævssnit.",
    "Spatial Selection": "Rumlig udvælgelse",
    "Choose cell populations and niches based on tissue context and biological hypotheses.": "Vælg cellepopulationer og nicher ud fra vævskontekst og biologiske hypoteser.",
    "Proteomic Profiling": "Proteomisk profilering",
    "Measure thousands of proteins from selected cells using sensitive mass spectrometry.": "Mål tusindvis af proteiner fra udvalgte celler med følsom massespektrometri.",
    "Clinical Translation": "Klinisk translation",
    "Identify biomarkers, immune adaptations, and therapeutic targets for precision medicine.": "Find biomarkører, immuntilpasninger og behandlingsmål til præcisionsmedicin.",
    "Research Infrastructure": "Forskningsinfrastruktur",
    "Our spaces and scientific equipment.": "Vores rum og videnskabelige udstyr.",
    "Based in the Skou Building at Aarhus University, our research infrastructure brings together automated multiplexing, laser microdissection, mass spectrometry, and spatial metabolomics.": "I Skou-bygningen på Aarhus Universitet samler vores forskningsinfrastruktur automatiseret multiplex-analyse, lasermikrodissektion, massespektrometri og rumlig metabolomik.",
    "The Skou Building": "Skou-bygningen",
    "Main hub": "Hovedbase",
    "Lab space": "Laboratorieplads",
    "Automated multiplexing": "Automatiseret multiplex-analyse",
    "Laser microdissection": "Lasermikrodissektion",
    "Mass spectrometry": "Massespektrometri",
    "Spatial metabolomics": "Rumlig metabolomik",
    "Our Team": "Vores team",
    "Meet the people behind Zheng Lab.": "Mød menneskene bag Zheng Lab.",
    "Our independent research group at Aarhus University is backed by a 12 million DKK LEO Foundation starting grant. Together, we study spatial proteomics for precision oncology and dermatology.": "Vores selvstændige forskningsgruppe på Aarhus Universitet er støttet af et startlegat på 12 mio. DKK fra LEO Foundation. Sammen undersøger vi rumlig proteomik til præcisionsonkologi og dermatologi.",
    "Postdoc": "Postdoc",
    "Research trainees": "Forskningsstuderende",
    "Technical staff": "Teknisk personale",
    "(Computational Systems Biologist)": "(Beregningsmæssig systembiolog)",
    "(Histology Specialist)": "(Histologispecialist)",
    "(Organ-on-Chip Engineer)": "(Organ-on-chip-ingeniør)",
    "(Cell Culture Specialist)": "(Cellekulturspecialist)",
    "(Molecular Biology Specialist)": "(Molekylærbiologisk specialist)",
    "CV / About": "CV / Om",
    "Academic profile": "Akademisk profil",
    "Academic profile, leadership, and translational impact.": "Akademisk profil, ledelse og translationel gennemslagskraft.",
    "Research funding and awards": "Forskningsbevillinger og priser",
    "Xiang Zheng, PhD, is a Group Leader and LEO Foundation Dr. Abildgaard Fellow at Aarhus University, advancing spatial proteomics, immune microenvironment biology, and precision medicine.": "Xiang Zheng, ph.d., er gruppeleder og LEO Foundation Dr. Abildgaard Fellow ved Aarhus Universitet og arbejder med rumlig proteomik, immunmikromiljøbiologi og præcisionsmedicin.",
    "Overview": "Overblik",
    "Author of 22 publications, including 11 as first author and 4 as corresponding author. Secured 8 competitive research grants totalling approximately 17 million DKK, received travel or award-based funding on 9 occasions, delivered 42 invited or selected international conference talks, and received 20 international awards.": "Forfatter til 22 publikationer, heraf 11 som førsteforfatter og 4 som korresponderende forfatter. Har hjemtaget 8 konkurrenceudsatte forskningsbevillinger på i alt ca. 17 mio. DKK, modtaget rejse- eller præmiebaseret støtte 9 gange, holdt 42 inviterede eller udvalgte internationale konferenceforedrag og modtaget 20 internationale priser.",
    "Academic Appointments": "Akademiske ansættelser",
    "2026–present · Group Leader, LEO Foundation Dr. Abildgaard Fellow, Aarhus University": "2026–nu · Gruppeleder, LEO Foundation Dr. Abildgaard Fellow, Aarhus Universitet",
    "2024–2026 · Assistant Professor, Aarhus University": "2024–2026 · Adjunkt, Aarhus Universitet",
    "(mentor: Prof. Robert A. Fenton)": "(mentor: prof. Robert A. Fenton)",
    "2021–2024 · Postdoctoral Researcher, University of Copenhagen": "2021–2024 · Postdoc, Københavns Universitet",
    "(mentor: Prof. Matthias Mann)": "(mentor: prof. Matthias Mann)",
    "Education": "Uddannelse",
    "2021 · PhD, Human Biomedicine, Max Planck Institute, Bad Nauheim, Germany": "2021 · Ph.d. i human biomedicin, Max Planck Institute, Bad Nauheim, Tyskland",
    "2014 · MSc, Molecular Biology and Oncology, Peking University, Beijing, China": "2014 · Kandidat i molekylærbiologi og onkologi, Peking University, Beijing, Kina",
    "2011 · Bachelor of Clinical Medicine, Nanchang University, Nanchang, China": "2011 · Bachelor i klinisk medicin, Nanchang University, Nanchang, Kina",
    "Scientific Focus Areas": "Videnskabelige fokusområder",
    "Spatial proteomics:": "Rumlig proteomik:",
    "developed mipDVP, now expanding to 3D and immune clone-resolved spatial multiomics.": "udviklede mipDVP og udvider nu til 3D og immunklon-opløst rumlig multiomik.",
    "Immune microenvironment:": "Immunmikromiljø:",
    "high-resolution spatial profiling of tumour and inflammatory immune ecosystems.": "højtopløselig rumlig profilering af tumor- og inflammatoriske immunøkosystemer.",
    "Computational disease modeling:": "Beregningsmæssig sygdomsmodellering:",
    "AI-driven integration of spatial omics data to predict disease progression and treatment response.": "AI-drevet integration af rumlige omikdata til at forudsige sygdomsforløb og behandlingsrespons.",
    "Precision medicine:": "Præcisionsmedicin:",
    "translating spatial biomarkers into clinical diagnostics and therapeutic targets.": "omsætning af rumlige biomarkører til klinisk diagnostik og behandlingsmål.",
    "Teaching and Supervision": "Undervisning og vejledning",
    "Supervised or co-supervised 12 junior researchers: 4 Bachelor's, 2 Master's, 2 PhD students (co-supervision), 1 postdoctoral researcher, and 3 laboratory technicians.": "Har vejledt eller medvejledt 12 yngre forskere: 4 bachelorstuderende, 2 kandidatstuderende, 2 ph.d.-studerende (medvejledning), 1 postdoc og 3 laboranter.",
    "Research-based teaching in Medical Biochemistry Lab Exercises (approximately 530 Bachelor students annually), Histology, Immunology, and Single-Cell Multiomics.": "Forskningsbaseret undervisning i medicinsk biokemi (laboratorieøvelser, ca. 530 bachelorstuderende årligt), histologi, immunologi og enkeltcellet multiomik.",
    "Invited lecturer and co-designer of Spatial Proteomics courses for PhD students and postdocs at Aarhus University and Alamein International University.": "Inviteret underviser og medudvikler af kurser i rumlig proteomik for ph.d.-studerende og postdocs ved Aarhus Universitet og Alamein International University.",
    "Completed University Pedagogy, Aarhus University (2025), and Introduction to University Pedagogy, University of Copenhagen (2023); ongoing PhD Supervision Course, Aarhus University (2026).": "Gennemført universitetspædagogik, Aarhus Universitet (2025), og introduktion til universitetspædagogik, Københavns Universitet (2023); i gang med ph.d.-vejlederkursus, Aarhus Universitet (2026).",
    "Developed and shared SOPs for multiplexed immunofluorescence, laser microdissection, and spatial data analysis.": "Har udviklet og delt SOP'er for multiplekset immunofluorescens, lasermikrodissektion og rumlig dataanalyse.",
    "Dissemination and Academic Service": "Formidling og fagligt virke",
    "42 selected or invited lectures worldwide, including a plenary oral presentation at HUPO Congress 2025 (Toronto), an invited presentation at EACR 2025 (Portugal), and lectures at Umeå University, Lund University, University of Copenhagen, and Karolinska Institute.": "42 udvalgte eller inviterede foredrag verden over, herunder et plenarforedrag ved HUPO Congress 2025 (Toronto), et inviteret foredrag ved EACR 2025 (Portugal) samt foredrag ved Umeå Universitet, Lunds Universitet, Københavns Universitet og Karolinska Institutet.",
    "Advisory Board Member, HUPO; Editorial Board Member,": "Medlem af HUPO's advisory board; redaktionsmedlem,",
    "; Ambassador, EACR; Founding Member, International Academic Association of Targetome (IAAT); Editorial Advisory Board Member,": "; ambassadør for EACR; stiftende medlem af International Academic Association of Targetome (IAAT); medlem af redaktionsrådet,",
    ".": ".",
    "Professional memberships: EORTC, AACR, DSBMB, HUPO, and SPS.": "Faglige medlemskaber: EORTC, AACR, DSBMB, HUPO og SPS.",
    "102 peer-review reports for 20+ journals and funding bodies, including": "102 fagfællebedømmelser for mere end 20 tidsskrifter og bevillingsgivere, herunder",
    ", and the Swiss National Science Foundation; book proposal reviewer, Elsevier (2026).": ", samt Swiss National Science Foundation; bedømmer af bogforslag, Elsevier (2026).",
    "Co-organiser, Spatial Seminar, Aarhus (2025, 80+ international participants); contributor to the Nordic Alliance for Single-Cell and Spatial Analysis (Denmark–Sweden–Norway, 2026).": "Medarrangør af Spatial Seminar, Aarhus (2025, over 80 internationale deltagere); bidragyder til Nordic Alliance for Single-Cell and Spatial Analysis (Danmark–Sverige–Norge, 2026).",
    "Entrepreneurship and Industry Collaboration": "Iværksætteri og industrisamarbejde",
    "Co-Founder, InnovEdged AB (2024–present, with Dr. Jianning Zhao), developing interpretable machine-learning tools that make spatial proteomics analysis more accessible to clinical and translational users.": "Medstifter af InnovEdged AB (2024–nu, sammen med dr. Jianning Zhao) og udvikler fortolkelige maskinlæringsværktøjer, der gør rumlig proteomanalyse mere tilgængelig for kliniske og translationelle brugere.",
    "Miltenyi Biotec (PI, EU HALRIC) · 3D imaging integration": "Miltenyi Biotec (PI, EU HALRIC) · integration af 3D-billeddannelse",
    "Leica Microsystems (with Dr. Falk Schlaudraff) · laser microdissection software optimisation": "Leica Microsystems (med dr. Falk Schlaudraff) · optimering af software til lasermikrodissektion",
    "Single-Cell Technologies (with Dr. Ferenc Kovacs) · BIAS software algorithm development": "Single-Cell Technologies (med dr. Ferenc Kovacs) · udvikling af algoritmer til BIAS-softwaren",
    "HiComp · skin-on-chip and microfluidic platforms": "HiComp · hud-på-chip og mikrofluidiske platforme",
    "10 Selected Publications": "10 udvalgte publikationer",
    "(*: First Author; #: Corresponding Author)": "(*: førsteforfatter; #: korresponderende forfatter)",
    "Deciphering functional tumor-immune crosstalk through highly multiplexed imaging and deep visual proteomics.": "At afkode funktionelt tumor-immun-samspil gennem højt multiplekset billeddannelse og dyb visuel proteomik.",
    "Spatial density and distribution of tumor-associated macrophages predict survival in non-small-cell lung carcinoma.": "Rumlig tæthed og fordeling af tumorassocierede makrofager forudsiger overlevelse ved ikke-småcellet lungekræft.",
    "Deep visual proteomics reveals distinct proximal tubular and glomerular injury programs in experimental diabetic kidney disease. Preprint, bioRxiv, 2026. doi:": "Dyb visuel proteomik afdækker forskellige skadesprogrammer i proksimale tubuli og glomeruli ved eksperimentel diabetisk nyresygdom. Preprint, bioRxiv, 2026. doi:",
    "The HDAC2-SP1 axis orchestrates protumor macrophage polarization.": "HDAC2–SP1-aksen styrer protumor makrofagpolarisering.",
    "Fibrocytes boost tumor-supportive phenotypic switches in the lung cancer niche via the endothelin system.": "Fibrocytter fremmer tumorstøttende fænotypiske skift i lungekræftnichen via endotelinsystemet.",
    "Protocol for spatial proteomic profiling of tonsil cancer microenvironments using multiplexed imaging-powered Deep Visual Proteomics (mipDVP).": "Protokol til rumlig proteomisk profilering af tonsilcancermikromiljøer med multiplex-billeddrevet Deep Visual Proteomics (mipDVP).",
    "Metabolism in tumor-associated macrophages: a quid pro quo with the tumor microenvironment.": "Metabolisme i tumorassocierede makrofager: en udveksling med tumormikromiljøet.",
    "Tumor-associated macrophage-specific β-catenin-FOSL2-ARID5A axis is a major driver of macrophage reprogramming and progression of lung cancer.": "Den tumorassocierede makrofagspecifikke β-catenin–FOSL2–ARID5A-akse er en væsentlig drivkraft for omprogrammering af makrofager og progression af lungekræft.",
    "Microenvironmental Th9- and Th17- lymphocytes induce metastatic spreading in lung cancer.": "Th9- og Th17-lymfocytter i mikromiljøet fremkalder metastatisk spredning ved lungekræft.",
    "Redirecting tumor-associated macrophages to become tumoricidal effectors as a novel strategy for cancer therapy.": "At omdirigere tumorassocierede makrofager til tumoridræbende effektorceller som en ny strategi for kræftbehandling.",
    "(as a journal cover article)": "(forsideartikel)",
    "Research Funding": "Forskningsbevillinger",
    "8 competitive grants · approximately 17 million DKK secured": "8 konkurrenceudsatte bevillinger · ca. 17 mio. DKK hjemtaget",
    "LEO Foundation, Dr Abildgaard Fellowship": "LEO Foundation, Dr Abildgaard Fellowship",
    "Personal fellowship / starting grant · 12,000,000 DKK · 2026–2030": "Personligt fellowship / startbevilling · 12.000.000 DKK · 2026–2030",
    "Danish Cancer Society, Young Talented Cancer Researchers": "Kræftens Bekæmpelse, Young Talented Cancer Researchers",
    "Personal research grant · 3,750,000 DKK · 2027–2030": "Personlig forskningsbevilling · 3.750.000 DKK · 2027–2030",
    "Hanseatic Life Science Research Infrastructure Consortium (HALRIC)": "Hanseatic-konsortiet for forskningsinfrastruktur inden for life science (HALRIC)",
    "Project / infrastructure grant · 600,000 DKK · 2025–2026": "Projekt- / infrastrukturbevilling · 600.000 DKK · 2025–2026",
    "Project grant · 80,000 DKK · 2025–2026": "Projektbevilling · 80.000 DKK · 2025–2026",
    "Career grant · 90,000 DKK · 2026": "Karrierebevilling · 90.000 DKK · 2026",
    "Project grant · 90,000 DKK · 2026–2027": "Projektbevilling · 90.000 DKK · 2026–2027",
    "Project grant · 160,000 DKK · 2026–2027": "Projektbevilling · 160.000 DKK · 2026–2027",
    "Prizes and Awards": "Priser og udmærkelser",
    "2026 · Young Talented Cancer Researcher Award, Danish Cancer Society, Denmark": "2026 · Young Talented Cancer Researcher Award, Kræftens Bekæmpelse, Danmark",
    "2026 · NASSA Travel Grant, Lund, Sweden": "2026 · NASSA-rejsestøtte, Lund, Sverige",
    "2026 · Miltenyi Biotec Publication Award, China": "2026 · Miltenyi Biotec Publication Award, Kina",
    "2025 · HUPO Early Career Researcher Manuscript Competition, First Place, Canada": "2025 · HUPO Early Career Researcher Manuscript Competition, førsteplads, Canada",
    "2025 · AU Travel Grant, Aarhus, Denmark": "2025 · AU-rejsestøtte, Aarhus, Danmark",
    "2025 · IUPS Poster Award, International Union of Physiological Sciences Congress, Germany": "2025 · IUPS-posterpris, International Union of Physiological Sciences Congress, Tyskland",
    "2025 · SPS Travel Grant, The Scandinavian Physiological Society, Denmark": "2025 · SPS-rejsestøtte, The Scandinavian Physiological Society, Danmark",
    "2025 · Finalist, HUPO ECR Manuscript Competition, Canada": "2025 · Finalist, HUPO ECR Manuscript Competition, Canada",
    "2024 · Emerging Technologies Funding Award, GENEWIZ Week Awards, America": "2024 · Emerging Technologies Funding Award, GENEWIZ Week Awards, USA",
    "2024 · Winner of the Danish Bioimaging Image Contest, Denmark": "2024 · Vinder af Danish Bioimaging Image Contest, Danmark",
    "2023 · Best Poster Award, CNHUPO Congress, China": "2023 · Bedste poster, CNHUPO Congress, Kina",
    "2023 · HUPO Travel Award, HUPO Congress, South Korea": "2023 · HUPO-rejsestøtte, HUPO Congress, Sydkorea",
    "2023 · TME Travel Award, EACR Congress, Italy": "2023 · TME-rejsestøtte, EACR Congress, Italien",
    "2022 · FEBS Youth Travel Fund Grant, Sweden": "2022 · FEBS Youth Travel Fund, Sverige",
    "2022 · Keystone Symposia Future of Science Fund Scholarship, Italy": "2022 · Keystone Symposia Future of Science Fund-stipendium, Italien",
    "2020 · Poster Prize, DZL Congress, Germany": "2020 · Posterpris, DZL Congress, Tyskland",
    "2019 · Poster Prize, DZL Congress, Germany": "2019 · Posterpris, DZL Congress, Tyskland",
    "2017 · Best Poster Award, MPI Retreat, Germany": "2017 · Bedste poster, MPI Retreat, Tyskland",
    "2017 · International Trainee Scholarship Award, ATS Congress, America": "2017 · International Trainee Scholarship Award, ATS Congress, USA",
    "2017 · William MacNee Award, ERS Congress, Portugal": "2017 · William MacNee Award, ERS Congress, Portugal",
    "We’re growing. More opportunities coming soon!": "Vi vokser. Flere muligheder kommer snart!",
    "Download video": "Download video",
    "© Zheng Lab · Aarhus University": "© Zheng Lab · Aarhus Universitet",
    "Spatial Proteomics · Tumor Microenvironment · Precision Oncology": "Rumlig proteomik · Tumormikromiljø · Præcisionsonkologi"
  };

  const titleByLanguage = {
    en: "Zheng Lab | Spatial Proteomics at Aarhus University",
    da: "Zheng Lab | Rumlig proteomik ved Aarhus Universitet"
  };

  const descriptionByLanguage = {
    en: "Zheng Lab at Aarhus University develops spatial proteomics and deep visual proteomics approaches for tumor-immune biology and precision oncology.",
    da: "Zheng Lab ved Aarhus Universitet udvikler rumlig proteomik og dyb visuel proteomik til tumor-immun-biologi og præcisionsonkologi."
  };

  const translatedAttributes = {
    "Zheng Lab home": "Zheng Lab-forside",
    "Primary navigation": "Primær navigation",
    "Display settings": "Visningsindstillinger",
    "Lab highlights": "Laboratoriets nøgletal",
    "Zheng Lab video": "Zheng Lab-video",
    "Miltenyi video": "Miltenyi-video",
    "Dr. Xiang Zheng profile": "Profil for dr. Xiang Zheng",
    "Contact information": "Kontaktoplysninger",
    "Publication summary": "Publikationsresumé",
    "Research funding and awards": "Forskningsbevillinger og priser",
    "The Skou Building at Aarhus University": "Skou-bygningen ved Aarhus Universitet",
    "Lab space at Aarhus University": "Laboratorieplads ved Aarhus Universitet",
    "MACSima — Automated multiplexing": "MACSima — automatiseret multiplex-analyse",
    "LMD7 — Laser microdissection": "LMD7 — lasermikrodissektion",
    "Orbitrap Ascend — Mass spectrometry": "Orbitrap Ascend — massespektrometri",
    "timsTOF fleX MALDI-2 — Spatial metabolomics": "timsTOF fleX MALDI-2 — rumlig metabolomik",
    "Zheng Lab research trainee portrait 1": "Zheng Lab-portræt af forskningsstuderende 1",
    "Zheng Lab research trainee portrait 2": "Zheng Lab-portræt af forskningsstuderende 2",
    "Zheng Lab research trainee portrait 3": "Zheng Lab-portræt af forskningsstuderende 3",
    "Zheng Lab research trainee portrait 4": "Zheng Lab-portræt af forskningsstuderende 4",
    "Zheng Lab technical staff portrait 1": "Zheng Lab-portræt af teknisk personale 1",
    "Zheng Lab technical staff portrait 2": "Zheng Lab-portræt af teknisk personale 2",
    "Zheng Lab technical staff portrait 3": "Zheng Lab-portræt af teknisk personale 3",
    "Dr. Xiang Zheng in a laboratory setting": "Dr. Xiang Zheng i laboratoriet",
    "Dr. Xiang Zheng LinkedIn QR code": "QR-kode til dr. Xiang Zhengs LinkedIn"
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
      const isDanish = language === "da";
      const isDark = root.dataset.theme === "dark";

      languageLabel.textContent = isDanish ? "EN" : "Dansk";
      languageToggle.querySelector(".control-icon").textContent = isDanish ? "A" : "D";
      languageToggle.setAttribute("aria-label", isDanish ? "Switch to English" : "Skift til dansk");
      languageToggle.title = isDanish ? "Switch to English" : "Skift til dansk";

      themeIcon.textContent = isDark ? "☀" : "☾";
      themeLabel.textContent = isDanish ? (isDark ? "Lys" : "Mørk") : (isDark ? "Light" : "Dark");
      const themeAction = isDanish
        ? (isDark ? "Skift til lys tilstand" : "Skift til mørk tilstand")
        : (isDark ? "Switch to light mode" : "Switch to dark mode");
      themeToggle.setAttribute("aria-label", themeAction);
      themeToggle.title = themeAction;
      themeToggle.setAttribute("aria-pressed", String(isDark));
    }

    function applyLanguage(language) {
      const isDanish = language === "da";
      root.lang = language;
      document.title = titleByLanguage[language];
      description.content = descriptionByLanguage[language];

      textNodes.forEach((textNode) => {
        const source = originalText.get(textNode);
        const key = normalize(source);
        replaceText(textNode, isDanish && da[key] ? da[key] : source.trim());
      });

      attributeNodes.forEach((element) => {
        const source = originalAttributes.get(element);
        if (source.ariaLabel !== null) {
          element.setAttribute("aria-label", isDanish && translatedAttributes[source.ariaLabel]
            ? translatedAttributes[source.ariaLabel]
            : source.ariaLabel);
        }
        if (source.alt !== null) {
          element.setAttribute("alt", isDanish && translatedAttributes[source.alt]
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
      applyLanguage(root.lang === "da" ? "en" : "da");
    });

    document.querySelectorAll(".cv-toggle").forEach((button) => {
      const panel = document.getElementById(button.getAttribute("aria-controls"));
      button.addEventListener("click", function () {
        const open = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", String(!open));
        panel.hidden = open;
      });
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
