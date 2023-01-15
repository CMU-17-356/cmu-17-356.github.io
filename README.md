# Course Website for CMU 17-356
### Authors: Afsoon Afzal, Andrew Begel, Derek Brown, Michael Hilton, Claire Le Goues, Heather Miller, Zeeshan Lakhani

## Welcome to Software Engineering for Startups!

[17-356|17-766 Webpage (Syllabus, Course Policies, etc)](https://cmu-17-356.github.io/)
---

## To build the website

To run the built-in development server:

1. Create and activate a Python virtual environment

2. Install requirements
``` sh
pip install -r requirements.txt
```

3. Start local development server
```sh
mkdocs serve
```

You can then find the website running on [http://localhost:8000/](http://localhost:8000/)

For detailed installation instructions, configuration options, and a demo, visit
[squidfunk.github.io/mkdocs-material][Material for MkDocs]

[Material for MkDocs]: https://squidfunk.github.io/mkdocs-material/

## Pre-Semester Setup
1. Run the following to build the static site:
```sh
mkdocs build
```

2. Rename the static `site` folder to its semester-name (i.e. `F22`). Delete the `_old` folder within this.

3. Within the `docs/_data` directory, set up information for course links, new staff members, and the semester's schedule. A `generate_dates.py` script is provided to auto-populate the `schedule.yaml` file with the expected format

4. Replace the Class Calendar iframe within `docs/index.md` with a new Google calendar.

5. Toggle which pages can be navigated to in the `mkdocs.yml` file under the `nav` section
