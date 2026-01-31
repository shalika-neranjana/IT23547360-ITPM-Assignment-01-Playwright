# Playwright Test Automation Project

## Student Details
- **Name:** NERANJANA K. H. P. S.
- **Student ID:** IT 23 5473 60
- **Group:** Weekend 1.1

---

## Prerequisites

Before you begin, make sure you have the following installed:

- **Git** (to clone the project)
- **Node.js (LTS recommended)** + **npm**
  - Check your versions:
    ```bash
    node -v
    npm -v
    ```

> If you don’t have Node.js installed yet, follow the step-by-step instructions below.

---

## Step 1 — Install Node.js (LTS)

### Option A: Install from the official website (recommended for most users)
1. Go to: https://nodejs.org/
2. Download the **LTS** installer for your operating system.
3. Run the installer and complete setup.
4. Verify installation:
   ```bash
   node -v
   npm -v
   ```

### Option B: Install using a Node version manager (optional, advanced)
- **Windows:** nvm-windows
- **macOS/Linux:** nvm

This method is useful if you need to switch Node versions.

---

## Step 2 — Clone the Repository

Open a terminal and run:

```bash
git clone https://github.com/shalika-neranjana/IT23547360-ITPM-Assignment-01-Playwright.git
cd IT23547360-ITPM-Assignment-01-Playwright
```

---

## Step 3 — Install Project Dependencies

Install the Node dependencies:

```bash
npm install
```

---

## Step 4 — Install Playwright Browsers

Playwright requires browser binaries (Chromium/Firefox/WebKit). Install them using:

```bash
npx playwright install
```

If your environment needs extra OS dependencies (common on Linux/CI), run:

```bash
npx playwright install-deps
```

---

## Step 5 — Run the Tests

### Run all tests
```bash
npx playwright test
```

### Run tests in headed mode (see browser UI)
```bash
npx playwright test --headed
```

### Run tests in a specific browser
```bash
npx playwright test --project=chromium
```

(You can also use `firefox` or `webkit` depending on the project configuration.)

### Run a specific test file
```bash
npx playwright test path/to/your-test-file.spec.js
```

---

## Step 6 — View the HTML Report

After a test run, open the Playwright HTML report:

```bash
npx playwright show-report
```

---

## Common Troubleshooting

### 1) `playwright: command not found` or browsers missing
Make sure you ran:
```bash
npm install
npx playwright install
```

### 2) Tests fail on Linux due to missing dependencies
Run:
```bash
npx playwright install-deps
```

### 3) Using an unsupported Node version
Install an **LTS** version of Node.js and try again.

---

## Project Structure (Typical)

Depending on how the repository is organized, common folders/files include:

- `tests/` — test specs
- `playwright.config.*` — Playwright configuration
- `package.json` — dependencies and scripts

---

## Tech Stack

- **Node.js**
- **Playwright**
- JavaScript / TypeScript (depending on the project setup)

---

## License

Add a license if required for your course/project (e.g., MIT). If this repository is for an academic assignment, include your institution/module guidelines here.