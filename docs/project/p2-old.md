# Project 2: Implementation Milestone 1

## Learning Goals

- Practice and refine your Agile engineering approach
- Use what you've learned in the homeworks to build and plan to deploy an app
- Get feedback from users on an MVP

## Project Context

You and your team will be spending the rest of the semester building
a product prototype for your startup. This is the first technical
towards your whole product MVP; at the end of this assignment, you
will produce a minimal product that users can interact with.

## Deliverables

### 1. Repository setup

Over the course of the past homeworks, you've learned about automating
your development setup: branch protection, CI, formatters, linters,
PR templates, conventional commits, and more. It's time to create
the development setup that works best for your specific project!
At *bare minimum*, this setup should include:

- The requirement to review PRs before merging to main
- CI testing of some kind
- High level code review guidelines
- A lower-level code review checklist 

We expect to see something beyond the bare minimum. 

#### Turn in instructions

Please turn in:

- A link to your repository (after inviting the instructors to
collaborate as admins).
- A bulleted list of all the rules, actions, workflows, and checklists
you've set up, with a link to your repo and a justification for each
one.

### 2. Deployment overview

To actually ship your app, you'll need to deploy it somewhere.
*You do not need to deploy the whole thing right away*, though you
can choose to do so if you'd like. At minimum, for this step
we need a detailed description of your deployment approach.

You have access to an AWS account (the account from HW5) and
AWS credits if you choose to use them. 

#### Turn in instructions

Please turn in a deployment plan for your application similar in
detail to HW5. It should outline each step of your proposed
deployment pipeline, and each step should link to the relevant
documentation.

### 3. Sprint 1 (two weeks)

In P1, you planned your first two sprints. Now it's time to implement! You will:

- Take into account any feedback on your Sprint 1 and Sprint 2 plans from P1 and
adjust as necessary.
- Hold a sprint planning meeting: assign user stories to members of your
group and give those tasks deadlines.
- Organize a periodic standup. This should be *very fast* and can be
remote if you prefer. You may want to run this every day or just a few days a week.
We strongly recommend you have at least two standup meetings per week. One of them can be at your recitation section on Fridays.
- Implement PRs for each feature or bug ticket and review and merge those PRs.
- Record a video demo of the user stories you implemented (this can be done by anyone on your team).
- Hold a sprint retrospective.

#### Turn in instructions

You will turn in:

- A link to your GitHub project tracker, which should clearly show
tickets, who they are assigned to, and when the corresponding PRs
were merged.
- A writeup of your sprint retrospective. What worked well
this sprint? What will you change for next sprint?
- A description of how to how to use your app and try out the
user stories you've implemented; for example, you might describe
how to build a website locally and then how to interact with
that website to test out the user stories you have implemented. *The instructors
will follow these instructions when grading your demo, so make sure they work.* 
- A URL to the video demos of your user stories; please upload the demos to YouTube and keep them private.


### 5. User feedback

You must pilot test the portion of your app that you have built with one other person in the class who is not on your team. You should document the pilot test through recordings, transcripts, and analysis of how it went and lessons learned. You must document changes to any user stories that were inspired by the results of the pilot.

#### Turn in instructions

Turn in the transcripts and analysis of the pilot test. Do not turn in the raw recordings. Those are for your team to review in case someone was not available to be at the pilot test.




### 8. Viability analysis: are there reasons not to build it? Can you build it? (20 points)

Answering these questions will help you avoid attempting the impossible; please upload your answers for each.

#### 8a. Legal risk turn in instructions (1+ paragraph)

Are there any legal risks associated with your product? For example, could it condone or support illegal acts? Describe any potential legal risks you could foresee. *This will require online research.*

#### 8b. Regulatory risk turn in instructions (1+ paragraph)

Are there any regulatory risks associated with your product? For example, some medical or health products may require approval from the FDA or other government agency. This adds time and a potential to fail to obtain regulatory clearance. Describe any potential regulatory risks you could foresee. *This will require online research.*

#### 8c. Competitor risk turn in instructions (3+ paragraph)

Describe your product's competitive landscape, including its three closest competitors. What do these products do? How is your product different?

#### 8d. Technical risk turn in instructions (3+ paragraph)

**Describe, in a relatively fine-grained level of technical detail, what you are planning to build.**

What tools/frameworks/libraries are you planning to use for:
  
  - The frontend
  - The infrastructure
  - The database
  - Other technical core features. For example, if your product uses computer vision, what library are you planning to use?

**Explain why your team has the background to build these features**. 

For example, if you're building devtools for ML data processing, please outline your experience with ML and data processing. 

#### 8e. This-is-a-semester-long-course risk turn in instructions (1+ paragraph)

**Please justify why it is possible to build a prototype product over the course of this semester-long class.** 

As one anti-example, fabricating new chips for ML workloads is certainly an exciting thing to do, but it's also something you can't do over the next couple months. Avoid such endeavors.