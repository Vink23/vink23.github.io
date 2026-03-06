## Plan: Sync Site Bullets with PDF Resume

### Changes to `src/components/ResumeSection.tsx`

**1. Machine Learning Researcher** — replace 3 bullets (lines 56-58) with PDF versions:

- • Engineer an LLM-powered clinical decision-support system for physician-facing Q&A, combining dense retrieval, cross-encoder reranking, and grounded generation over medical literature to produce faithfully sourced diagnostic answers. 
- • Build a reproducible evaluation pipeline to benchmark 54 retrieval, reranking, and generation configurations across recall, clinical relevance, and answer grounding, replacing ad hoc model selection with a systematic, versioned process. 
- • Identify failure patterns across disease categories and patient age groups through stratified error analysis, directly informing retrieval and model changes that reduced performance gaps across underrepresented diagnostic categories

**2. Graduate Student Instructor** — replace 2 bullets (lines 75-76) with 1:

- Design and grade assignments for 80+ students in causal inference, experimental design, and statistical analysis, providing written feedback to reinforce applied research skills.

**3. AI/ML Research Associate** — already matches PDF. No change.

**4. Research Data Scientist** —

• Engineered data pipelines processing high-frequency physiological signals from 3,000+ Apple Watch devices, reducing integration time by 15% and enabling rapid iteration on Apple Health’s hypertension detection algorithms.

 • Led end-to-end FDA-compliant validation for biosensor clinical trials, achieving a 100% pass rate on QA audits through rigorous statistical validation and bias analysis; work enabled product launch for a health monitoring platform. 

• Conducted fairness-aware analysis of biosensor signals across demographic subgroups (age, gender, skin tone), identifying algorithm performance disparities that informed design changes, improving signal-quality acceptance by 25% and reducing group-level performance gaps.

**5. Computer Vision Research Assistant** 

• Led a 6-person team developing bio-inspired CNN architectures with attention mechanisms to model human visual perception, establishing lab benchmarks for human behavioral data from EEG/eye-tracking studies. 

• Improved model accuracy by 11% vs. prior lab baseline via targeted augmentation, systematic hyperparameter optimization, and architecture refinements on object recognition tasks.

 • Engineered Python data pipelines for image and behavioral datasets, reducing preprocessing time by 30% through parallelization and automated quality checks.

### Changes to `src/components/ProjectsSection.tsx`

Replace `description` strings with `bullets` arrays, then render as `<ul>` lists instead of `<p>` tags.

**SurgiRAG** (replace line 10):

- • Built a domain-adaptive RAG pipeline for Q&A by fine-tuning LLaMA-3.2-11B with LoRA and pairing BioBERT retrieval with cross-encoder reranking, improving LLM-judged faithfulness from 0.25 to 0.66 vs. the base model. 
- • Designed a custom LLM-as-judge evaluation framework using GPT-4o-mini to assess faithfulness and fluency tradeoffs not well captured by standard metrics like ROUGE and BLEU. 
- • Evaluated 12 retrieval, reranking, and generation configurations, identifying cross-encoder reranking as the highest-leverage component for improving answer quality.

**PathoVision** (replace line 29):

- Built a brain tumor MRI classifier achieving 96.7% test accuracy by combining DINOv2 embeddings with handcrafted edge features, outperforming CNN baselines with a fraction of the compute. 
- • Identified contrast and orientation artifacts as key misclassification drivers through cross-source error analysis, leading to preprocessing changes that improved robustness across imaging sources.

**AgeVoicE** (replace lines 43-44):

- • Fine-tuned Whisper ASR models using LoRA for older-adult and dementia-affected speech, improving WER by 17% vs. baseline; deployed via Hugging Face Inference API and an interactive web demo for real-time transcription. 
- • Built an end-to-end AWS training pipeline with distributed training, custom preprocessing (noise removal, disfluency handling, audio normalization), experiment tracking, and systematic hyperparameter sweeps (LR, LoRA rank, dropout). 
- • Performed stratified failure analysis across acoustic conditions and speaker characteristics using regression modeling and hypothesis testing to identify drivers of elevated WER; findings guided targeted data augmentation to mitigate demographic bias