---
title: Building AcornBids — Disrupting Government Procurement with AI
date: 2025-09-15
excerpt: What I learned founding a B2B platform to compete with Deltek GovWin IQ using AI-powered federal contract discovery.
tags: startups, AI, government procurement, react
---

# Building AcornBids — Disrupting Government Procurement with AI

When I graduated from LSU in May 2025, I knew I wanted to build something. The government procurement market is a $700B+ industry dominated by legacy software that hasn't fundamentally changed in decades. I saw an opportunity.

## The Problem

Federal contractors spend hours every week manually searching for relevant opportunities across SAM.gov, agency portals, and third-party databases. Incumbent tools like Deltek GovWin IQ are expensive, slow, and built on outdated technology stacks. Small businesses — who win a significant portion of federal contracts — often can't afford these tools at all.

The irony: the government publishes all opportunities for free on SAM.gov. The problem isn't access to data. It's the signal-to-noise ratio. Thousands of new opportunities are posted daily, and without smart filtering, most contractors miss the ones most relevant to them.

## What We Built

AcornBids is a B2B platform that uses AI to surface relevant federal contracts to small-to-mid sized contractors. At its core:

- **Nightly data pipeline** pulling from the SAM.gov API to keep opportunities current
- **RAG-based search** that understands natural language queries — "I want construction contracts in Louisiana under $500K" actually works
- **Smart filters** that learn from a contractor's NAICS codes, past awards, and stated preferences
- **React/Tailwind frontend** designed to get you from login to qualified leads in under 60 seconds

## Technical Architecture

I built the entire platform solo. The backend uses asynchronous queues to handle nightly data ingestion without blocking the web server. The AI layer uses retrieval-augmented generation: opportunity descriptions and synopses are embedded into a vector store for semantic search, with metadata filters for location, set-aside type, value range, and agency.

The frontend stack: React, Tailwind CSS, React Router. Fast to iterate, clean components, and a design system I can extend quickly as features evolve.

Railway handles deployment. The infra is simple on purpose — complexity should live in the product, not the operations.

## The Competitive Landscape

Deltek GovWin IQ starts at around $5K/year. They have brand recognition, deep integrations, and a massive database. We're not trying to out-feature them on day one — we're going after the segment they price out: growing small businesses that need a smarter, faster, more affordable way to find opportunities.

The wedge is UX and AI. When a user can describe what they're looking for in plain English and get back a curated, scored list of relevant opportunities in seconds, that's genuinely better than keyword searches in a 2010-era interface.

## What I've Learned

**Build for the next conversation, not the last one.** Every feature I've shipped has been validated by a contractor conversation. Every feature I've skipped was something *I* wanted, not something they asked for.

**Distribution is the product.** Great software that contractors don't know about doesn't win contracts. I've spent as much time thinking about how AcornBids gets in front of the right people as I have building it.

**Solo is fast until it isn't.** Building alone means no coordination overhead. It also means every bottleneck is you. The balance between building and talking to users is a constant calibration.

More updates as AcornBids grows. If you're a federal contractor, I'd love to hear what you struggle with.
