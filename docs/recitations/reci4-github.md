# Recitation #4 – GitHub Basics

## What is GitHub?
GitHub is a **web-based version control platform** that uses Git, a popular version control system. It is widely used by **individuals, teams, and organizations** to manage software development projects. GitHub also hosts many **open-source projects and enterprise solutions**.

### Why Use GitHub?
- **Collaboration** – Multiple developers can work on the same project seamlessly.
- **Version Control** – Allows easy rollback and tracking of changes.
- **Automated Deployment** – Supports seamless automated solution deployment.

## Understanding Commits
### What is a commit?
A commit is a **snapshot of changes** in a codebase.

### Best Practices for Commits
- **Write meaningful commit messages** – Clearly describe the change.
- **Use atomic commits** – Keep changes small and focused.

## Pull Requests
### What is a Pull Request (PR)?
A pull request is a **code difference analysis tool** that enables reviewing and merging changes into the main codebase.

### Review Process
- **Code approvals** – Ensure quality and correctness.
- **Comments for feedback** – Encourage discussion and improvements.

## Linking Issues to Pull Requests
### What is an issue?
An issue is a log of **tasks, bug reports, and feature requests** used to track development progress.

### Linking Issues to PRs
- Use **keywords** like `Fixes #21` or `Closes #42` in PR descriptions.
- Improves **traceability** and **automates issue closure** upon merging.

## Managing Releases
### What is a release?
A **versioned snapshot** of the code after key milestones.

### Key Aspects of Releases
- **Tagging versions** – Use versioning strategies like **Semantic Versioning** (`v1.0.0`).
- **Drafting release notes** – Document key changes and improvements.
- **Attaching binaries** – Include compiled files if necessary.

## Good Coding Practices
### Branching Strategies
- **Git Flow** – Main branch with feature and hotfix branches.
- **Feature Branching** – Separate branches for new features.
- **Hotfixes** – Patches for critical issues.

### Commit and PR Guidelines
- **Clear, concise commit messages**
- **Descriptive PRs** with context and explanation

### Code Review Etiquette
- **Provide constructive feedback**
- **Encourage respectful discussions**

## Introduction to GitHub Actions
GitHub Actions is an **automation tool** for CI/CD workflows.

### Triggers for Workflows
- **Push and Pull Requests** – Automate actions based on repository events.
- **Jobs and Steps** – Define a sequence of automated actions.

### Common Use Cases
- **Automated Testing** – Run unit tests on new commits.
- **Automated Deployment** – Deploy code to production or staging environments.
- **Code Linting** – Enforce coding standards automatically.

## Practice
To apply these concepts, follow the steps below:

1. **Fork** the repository: [simple-calculator](https://github.com/Jacqueline-Tsai/simple-calculator)
2. **Set up** the application locally.
3. **Create an issue** (e.g., "Developer Log") to track your changes.
4. **Create a Pull Request (PR)** that adds a `console.log` whenever a calculation takes place.
5. **Link the issue to the PR** using GitHub keywords.
6. **Merge the PR** once approved.