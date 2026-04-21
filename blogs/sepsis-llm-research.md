---
title: 82% Adjudication Accuracy on Sepsis Cases Using Fine-Tuned GPT-3.5
date: 2025-05-20
excerpt: How our team at LSU fine-tuned GPT-3.5 to match physician-level sepsis case adjudication accuracy — with zero false negatives.
tags: AI, healthcare, research, LLMs, fine-tuning
---

# 82% Adjudication Accuracy on Sepsis Cases Using Fine-Tuned GPT-3.5

Clinical trials for sepsis diagnostic devices face a consistent bottleneck: adjudicating whether each enrolled patient actually meets the Sepsis-3 criteria. This is traditionally done by expert physicians manually reviewing hundreds of pages of medical records — slow, expensive, and hard to scale.

Our team at LSU set out to change that.

## The Partnership

We worked with **Our Lady of the Lake Hospital** in Baton Rouge and **Cytovale**, a medical device company developing a rapid sepsis diagnostic test. Cytovale needed a faster way to adjudicate patient cases for their clinical trials. The goal: determine whether an LLM could replace or augment physician review.

## The Approach

Working with a team of four, we went through the full ML pipeline:

**1. Data Collection & Cleaning**

We worked with hundreds of de-identified patient records. Medical records are messy — inconsistent terminology, missing values, varying documentation styles across different units and providers. A significant chunk of the project was just getting the data into a usable state.

**2. Ground Truth Labeling**

Each case was labeled by physician consensus: sepsis or not sepsis, based on the Sepsis-3 definition (suspected infection plus organ dysfunction measured by SOFA score). This became our training signal.

**3. Fine-Tuning GPT-3.5**

We structured inputs as clinical vignettes — a standardized summary of each case that included relevant vitals, lab values, clinical notes, and timing. The model was fine-tuned on our labeled dataset using OpenAI's fine-tuning API.

Prompt engineering was critical. Getting the model to reason correctly about SOFA scores and the Sepsis-3 criteria required explicit framing. We experimented with several input structures before landing on one that consistently produced reliable outputs.

**4. Threshold Tuning**

Standard accuracy metrics weren't enough. In a clinical context, a false negative — telling a trial investigator a patient doesn't have sepsis when they do — is a much worse error than a false positive. We tuned the decision threshold to eliminate false negatives entirely, accepting a higher false positive rate as the appropriate clinical tradeoff.

## Results

- **82% overall adjudication accuracy** against physician ground truth
- **0 false negatives** across the test set
- Processing time: seconds per case (vs. hours for physician review)

An 82% match with physician consensus is meaningful. Physicians don't always agree with each other — inter-rater reliability on complex sepsis cases is imperfect by nature. Our model is performing in a range competitive with a second expert reviewer.

## What Made This Hard

**Reasoning about clinical criteria is genuinely complex.** Sepsis-3 requires reasoning about multiple organ systems, timing of interventions, and clinical context. A patient might have a SOFA score elevation that's pre-existing rather than sepsis-related. The model had to learn these nuances.

**Data scarcity.** We had hundreds of cases — not thousands. Fine-tuning on small datasets requires careful attention to overfitting and evaluation methodology. We used strict train/test splits and cross-validated our threshold selection.

**Medical terminology.** The vocabulary in clinical notes doesn't always map cleanly to the terminology in the Sepsis-3 definition. Preprocessing and normalization mattered more than I expected.

## Presentation

We presented these results at **LSU's AI Symposium** in May 2025 to an audience of 80+ researchers, clinicians, and students. The reaction was strong — the healthcare AI space is hungry for tools that handle this kind of clinical reasoning reliably.

The broader implication: if systems like this reach production, they could meaningfully speed up clinical trials for sepsis diagnostics. Faster trials mean faster FDA clearance, which means faster access for hospitals and, ultimately, better patient outcomes.

That's a long chain of causality. But it starts with better adjudication software.
