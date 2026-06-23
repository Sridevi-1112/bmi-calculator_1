# BMI Calculator

A dark-themed, animated BMI calculator with metric/imperial unit toggle, a live BMI scale, and personalised tips + weekly plan based on your result.

## Files

```
bmi-calculator/
├── index.html         # Page markup
├── style.css          # All styling
├── script.js          # Calculator logic & DOM updates
├── push_to_github.py  # One-command script to publish this repo to GitHub
└── README.md          # This file
```

## Run it locally

No build step needed — just open `index.html` in a browser, or serve it:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Push to your GitHub account

1. Create a GitHub Personal Access Token (classic) with `repo` scope:
   https://github.com/settings/tokens
2. Run:

   ```bash
   python push_to_github.py
   ```

3. Enter your GitHub username, the repo name you want, and the token when prompted.

The script will create the GitHub repo (if it doesn't already exist), commit all files, and push them. It prints the clone URL at the end:

```bash
git clone https://github.com/<your-username>/bmi-calculator.git
```

## Notes

BMI is a general screening tool only — it doesn't account for muscle mass, bone density, age, sex, or ethnicity.
