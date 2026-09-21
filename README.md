# Data Mining Laboratory (DML) - IUST

Official research laboratory website for the **Data Mining Laboratory ** at the **School of Computer Engineering, Iran University of Science and Technology (IUST)**, directed by **Prof. Behrouz Minaei-Bidgoli**.

**Lab Domain**: `http://dml.iust.ac.ir/`

---

## 🏛️ Design Philosophy & Aesthetics

- **Ultra-Minimalist Academic Aesthetic**: Clean typography, black/slate on crisp white background, subtle hairline borders, and high informational density inspired by classic CS research group pages at Stanford, MIT, and Berkeley.
- **No Dark Mode**: Pure, accessible, distraction-free light mode.
- **Strictly No Agent/AI Clichés**: No gradient cards, glowing neon shadows, or startup-style marketing slogans.
- **Real Lab Data**: Complete roster of active Ph.D. candidates and M.Sc. researchers extracted directly from the lab's operational records (`Data Mining Lab.xlsx`), including seminar schedules and thesis proposals.

---

## 📂 Project Structure

```
dml-lab/
├── index.html           # Lab overview, news ticker, research pillars, featured work
├── people.html          # Faculty, Ph.D. candidates, M.Sc. researchers, seminar schedule
├── research.html        # 4 Core themes: Faithful RAG, FarsBase KG, Argumentation, RecSys
├── projects.html        # Flagship systems: FarsBase, FAIR-RAG, PersianMHQA, LON-CAPA
├── publications.html    # Chronological citations with search, filter, and 1-click BibTeX modal
├── join.html            # Prospective student requirements, application instructions
├── contact.html         # Room 303 CE building, transit directions, contact details
├── src/
│   ├── styles/main.css  # Academic typography and Tailwind CSS v4 styling
│   └── data/
│       ├── students.json     # 36 real active researchers + seminar presentation calendar
│       ├── projects.json     # Lab research initiatives
│       ├── publications.json # High-impact conference/journal papers
│       └── news.json         # Lab announcements and achievements
├── package.json
└── vite.config.js       # Vite multi-page build configuration
```

---

## 🚀 Getting Started

### 1. Installation

```bash
cd dml-lab
npm install
```

### 2. Local Development

To start the local development server:

```bash
npm run dev
```

Then open your browser at the URL shown in the terminal (typically `http://localhost:5173/`).

### 3. Production Build

To build the static website for deployment to the university server:

```bash
npm run build
```

The optimized, production-ready static files will be generated in `dml-lab/dist/`.

### 4. Preview Build

```bash
npm run preview
```

---

## 🌐 Deployment to `dml.iust.ac.ir`

Simply copy the contents of the `dist/` directory to the university web server's document root (e.g., Apache `htdocs` or Nginx `html`). No Node.js runtime is required on the production server.
