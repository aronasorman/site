---
draft: false
title: "AI Agent Prompts"
tags: ["ai", "code"]
summary: "Where I dump my learnings about what prompts work best for coding."
---

**[Jump straight to the prompts](#prompts)**

# Background

I've started using AI coding agents in earnest since March of 2025.

Restrictions:

- All AI agents will have a limited context -- it'll eventually get to the point where the conversation will have to be compacted, or even picked up from scratch.
- Even within a context, an AI agent will tend to get off the rails eventually -- it'll make workaround for test failures, discard scripts it just made entirely, make workarounds for logic it couldn't figure out, etc.

# Workflow

1. Start with a workplan -- a document where the agent will outline its understanding of the problem, and describe the architecture of its solution and how it'll approach it. This should describe a step by step plan for future agents (with a clear context) to follow.
1. Review the plan and make corrections as needed. Tell the agent what corrections to make.
1. When the workplan looks good, create a new conversation and tell it to read the workplan you just created.
1. I'll usually be guiding the agent throughout the process. Reading its output, approving terminal commands, and judging whether we're going in the right direction. I'll also frequently tell it to write and run tests before proceeding.

# Prompts

## Creating the workplan

> We are starting a new task. Before coding anything, I want you to think hard about the task and how you are gonna go about it. Scan the codebase for any potential gotchas for the solution you are approaching. Think of potential pitfalls for your approach and propose mitigations. Write about your understanding about the problem, your proposed solution, pitfalls and gotchas, into a markdown file inside the TASKS/ folder. Keep the plan at a high level, providing a high level overview of each script that's needed and only critical snippets at most for nuanced portions you want to convey. If given an issue ID, name the task \<issue ID\>: \<title\>. List out in an ## IMPLEMENTATION section each high level task, with nuanced descriptions of each task and any snippets that you deem important. For the next section of the workplan, you will add the list of subtasks for this task in a ## TASKS section, a ## LEARNINGS section which is initially empty and which you will update with insights and gotchas you find along the way,, and a new section called ## LOG which you will update every time you make progress. You will modify this workplan along the way for any changes to the architecture, update on tasks, and log of work you've done. The workplan will be the authoritative source for our current implementation and progress in this task. After I approve your workplan, give me a 2 paragraph max description of this task I can copy paste to JIRA. Give background info and implementation overview in the JIRA description. Once that's approved, we will start immediately with Test-Driven Methodology. Start with tests (either a test script, unit tests, or integration tests) that will measure your progress on this task. You will write smaller tests along the way to test any code you write. Make sure to read @README.md. Your task is:

## Updating the workplan after work is done

> Think hard on what else you should add to the workplan. We will be clearing your context so make sure the next claude instance has enough info it needs in the workplan. MAKE SURE NOT TO INCLUDE SENSITIVE INFORMATION. Make sure to read @README.md Update the architecture, learnings and logs if you deem them necessary.

## Continuing from the workplan from a new context

> You are a senior software engineer continuing the work from a previous engineer. You will get the context from a workplan to see what the task is, what the subtasks are, the learnings and the log of work done. The workplan is and should be the authoritative source of the task at hand. Make sure it is up-to-date if implementation details change. Make sure the learnings are updated with insights and gotchas you find along the way. Make sure you update the log when you have achieved a major milestone, or when requested to make an update. Read any files you think are relevant, after reading the workplan. Then scan the codebase for any additional context you might need. Start immediately with Test-Driven Methodology. Start with tests (either a test script, unit tests, or integration tests) that will measure your progress on this task. You will write smaller tests along the way to test any code you write. I want you to think hard about the task and how you are gonna go about it. Construct the TODO list for this session and show me first. Make sure to read @README.md The workplan is:

## Reviewing the changes that aren't committed yet

> You are a senior software engineer. Give a critical, no-BS review the changes currently in the git index. Ultrathink on whether the logic and solves the issue in the best way, according to your knowledge. Look for code smells and inconsistencies in how things are coded right now vs. what's in the rest of the codebase. Point out over-engineered solutions for the problem space. We may feed your output into another AI agent, so make sure you provide the context of the work and enough description and suggestions for how to address your comments. For context of the work, the workplan is:

## Proposing commits with commit messages and the contents of each commit

> You are a senior software engineer now prepping the work done so far into PR review. Review the pending changes we've made using git status. The reviewer will go commit by commit, reviewing the changes on a per-commit basis. Think hard about how you want to group the changes by commit. Make sure each commit's changes are logically chunked and can be described in a single sentence in the commit message. ONLY SHOW ME THE COMMITS AND CHANGES PER COMMIT. Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for formatting the change, and use something like feat(<issue ID>) if the issue ID is given. Make sure to read @README.md. DO NOT SAY THIS WAS DONE BY CLAUDE CODE. Review this workplan to find out the context:

# Tips

1. It's worth starting without Extended Thinking at first, as the agent won't waste precious context space on "thinking" and will make less overengineered solutions. Replies will also be faster. I use extended thinking when first creating the workplan, or trying to get it out of a doom loop of workarounds and get to the root of the problem.
1. Using different models for different stages works well. Gemini tends to be good at fixing bugs quickly, while Claude is good at general architecture and writing the initial workplan. I do like Gemini's conversation tone more. Claude is polite.
1. People who "vibe code" and just auto-accept suggestions are crazy and/or work in greenfield projects. You generally need to monitor the output closely for code smells and anti-patterns that the agent may do. It's also prone to overengineering the code, so reviewing it yourself and asking it for simpler approaches will be a common occurrence.
