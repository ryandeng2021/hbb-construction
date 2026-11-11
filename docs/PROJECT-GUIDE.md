# HBB interactive project guide

Replaces a long FAQ presentation with six topic entrances, suggested questions,
conversational answers, follow-up suggestions, free-text lookup and a handoff to
the existing contact form. Available on the home page and `/ask-hbb/`.

This version is a working browser-side guided FAQ, not a generative AI service.
It uses a curated HBB answer set and deterministic keyword matching, including
English and common Chinese search terms. It cannot understand arbitrary questions
or reliably resolve multi-intent requests. Unknown questions are explicitly handed
off; it never pretends to consult an AI model or a live human operator.

## Topics

Quotes/budget; process/timing; design/permits; construction details; ADUs/property;
working with HBB. Topic selection preserves the visible conversation and switches
suggestions; follow-up buttons lead to related confirmed answers. Start over
clears the on-screen conversation. There is no transcript persistence.

## Source and answer boundaries

Reference FAQ reviewed for topic organization only:
https://www.greenberg.construction/general-contractor-faq

Owner corrections from 2026-11-10 take precedence over earlier draft wording.
The answer set now has 17 entries. See PROJECT-GUIDE-ZH-REVIEW.md for the
Chinese review and original numbering.

HBB content: src/data/process.js, whyChoose.js, projects, tourBooking.js and
about/team content. Greenberg's prices, financing, certifications, showroom,
warranties, contract terms and completion promises are not HBB facts.

The guide provides the owner-confirmed approximate $330–$350/sq ft range for
new construction through finish installation, including general finish labor
and excluding client-selected finish materials. It does not apply this range
to additions/remodels. The owner confirmed a typical 4–6 month on-site
addition/remodel period, 20+ completion/acceptance-based payment milestones,
in-house design/engineering disciplines, and PM/CA change coordination.
It does not invent financing/deposit/warranty terms or parcel approvals.
Its source links take users to HBB content. Only selected question IDs/topic IDs
are tracked; free-text questions and conversations are not sent to analytics.
Clicking Talk to HBB opens the existing form with the latest question prefilled.
No enquiry is sent until the visitor submits that form.

## Generative AI production option

The current site exports to GitHub Pages and has no private server runtime.
True open-ended AI answers require a separate backend/Worker or a configured
hosted assistant service. Keep model credentials on the server, retrieve from an
HBB-approved knowledge base, return grounded answers, limit requests and provide
a clear escalation path. Never embed a model API key in NEXT_PUBLIC variables,
client JavaScript or this repository. No AI account was connected or billed for
this prototype. Existing hosting and forms are preserved.
