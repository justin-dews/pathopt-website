# Hidden Case Study Sections

These sections have been hidden from the website until the case study content is ready for public display. To re-enable them, uncomment the relevant code in each file.

---

## 1. Navbar - Case Studies Link

**File:** `src/components/layout/Navbar.tsx`

**Location:** Line 47 in `navLinks` array

**What was hidden:** The "Case Studies" navigation link

```tsx
// { label: 'Case Studies', href: '/case-studies' }, // Hidden until case study content is ready
```

**To restore:** Uncomment the line above.

---

## 2. Navbar - Featured Case Study Section

**File:** `src/components/layout/Navbar.tsx`

**Location:** Lines 178-204 in the "How We Help" dropdown menu

**What was hidden:** The "Featured Case Study" column showing HomeWorks Construction

```tsx
{/* Featured Case Study Column - Hidden until case study content is ready
<div>
  <h4 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-brown)] mb-4">
    Featured Case Study
  </h4>
  <div className="bg-[var(--color-bg-alt)] rounded-lg p-4">
    <div className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-widest text-[var(--color-accent)] mb-2">
      Case Study
    </div>
    <div className="font-[family-name:var(--font-display)] font-semibold text-base mb-2">
      HomeWorks Construction
    </div>
    <div className="font-[family-name:var(--font-mono)] text-[0.85rem] text-[var(--color-green)] mb-3">
      $47 → $27 cost per lead in 30 days
    </div>
    <Link
      href="/case-studies/homeworks-construction"
      className="inline-flex items-center gap-1 text-[0.85rem] text-[var(--color-accent)] font-medium hover:gap-2 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
      role="menuitem"
      onClick={() => setHowWeHelpOpen(false)}
    >
      Read the Case Study
      <ArrowRight className="w-4 h-4" aria-hidden="true" />
    </Link>
  </div>
</div>
*/}
```

**To restore:**
1. Uncomment the JSX block
2. Change the container div back to `grid grid-cols-2 gap-8 min-w-[600px]` from `min-w-[320px]`

---

## 3. Performance Marketing Page - Case Study Preview

**File:** `src/app/services/performance-marketing/page.tsx`

**Location:** Lines 112-118 in `proofData` object

**What was hidden:** The case study preview in the Proof section

```tsx
// Case study hidden until content is ready
// caseStudy: {
//   title: 'HomeWorks Construction and Remodeling',
//   description:
//     'Before PathOpt: $47 cost per lead. Unclear which campaigns were working. Frustrated with agency lack of transparency. After 30 days: $27 cost per lead. Tripled qualified leads. Reduced total spend while increasing results. Complete visibility into every campaign.',
//   href: '/case-studies/homeworks-construction',
// },
```

**To restore:** Uncomment the `caseStudy` object.

---

## 4. Trades & Home Services Page - Results Section

**File:** `src/app/industries/trades-home-services/page.tsx`

**What was hidden:**

### A. Import Statement (Line 6)
```tsx
// import { IndustryProofSection } from '@/components/sections/IndustryProofSection'; // Hidden until case study content is ready
```

### B. Secondary CTA in Hero (Lines 50-54)
```tsx
// Secondary CTA hidden until case study content is ready
// secondaryCTA: {
//   text: 'See the HomeWorks Case Study',
//   href: '/case-studies/homeworks-construction',
// },
```

### C. Proof Data Object (Lines 145-178)
```tsx
// Hidden until case study content is ready
// const proofData = {
//   label: 'Results',
//   headline: 'HomeWorks Construction: From $47 to $27 Cost Per Lead in 30 Days',
//   situation:
//     "HomeWorks Construction and Remodeling was spending $4,500/month on digital marketing. They were getting leads—but had no idea if they were getting their money's worth. Sound familiar?",
//   problemTitle: 'The Problem:',
//   problemBullets: [
//     'Cost per lead: $47 (industry average, nothing special)',
//     'Lead quality: Mixed—lots of tire-kickers, not enough serious buyers',
//     'Reporting: Monthly PDF nobody understood',
//     'Optimization: Set-it-and-forget-it',
//   ],
//   solutionTitle: 'What We Did:',
//   solutionBullets: [
//     'Complete account transparency (they could see everything, anytime)',
//     'Lead quality tracking (not just quantity—quality)',
//     'Daily optimization (not monthly check-ins)',
//     'Cost per lead focus (the metric that actually matters)',
//   ],
//   resultsTitle: 'The Results (30 Days):',
//   results: [
//     { label: 'Cost per lead', value: '$47 → $27' },
//     { label: 'Qualified leads', value: 'Tripled' },
//     { label: 'Marketing spend', value: 'Reduced' },
//     { label: 'ROI', value: 'Finally measurable' },
//   ],
//   quote:
//     'For the first time, I actually know what my marketing is doing. I can see it. Every day. That alone is worth the investment.',
//   quoteAuthor: 'Chad',
//   quoteCompany: 'HomeWorks Construction',
//   ctaText: 'Read the Full Case Study',
//   ctaHref: '/case-studies/homeworks-construction',
// };
```

### D. Component Usage (Line 248)
```tsx
{/* Proof Section (Case Study) - Hidden until case study content is ready */}
{/* <IndustryProofSection {...proofData} /> */}
```

**To restore:** Uncomment all four sections (A, B, C, D).

---

## Summary

| Location | Section Hidden | File |
|----------|---------------|------|
| Navbar | "Case Studies" link | `Navbar.tsx` |
| Navbar dropdown | Featured Case Study column | `Navbar.tsx` |
| /services/performance-marketing | Case study preview card | `performance-marketing/page.tsx` |
| /industries/trades-home-services | Hero secondary CTA + entire Results section | `trades-home-services/page.tsx` |

---

*Last updated: January 12, 2026*
