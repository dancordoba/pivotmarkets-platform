# Batch 2 Partial Browser Review Notes

## Explore Funding

The `/explore-funding` route renders with the corrected document title: `PivotMarkets | Prepare Organizational Context for Funding Strategy Review`.

Observed approved Handoff Gate elements:

| Requirement | Browser Finding |
|---|---|
| Sole trigger route | Hero and contract panel explicitly state `/explore-funding only`. |
| Handoff trigger behavior | Page presents review summary, required consent, and an affirmative `Send Organization Context to Funding Engine` button. |
| Versioned payload | Payload preview includes `handoffVersion: rev2-public-intent-v1`, `handoffTimestamp`, and `sourceRoute: /explore-funding`. |
| Required fields | Visible inputs include contact name, contact email, organization name, organization type, industry, country, primary goals, funding need description, and decision window. |
| Consent acknowledgements | Three required acknowledgements and one optional follow-up permission are visible before submission. |
| Boundary protection | Page states Rev 2 does not display eligibility scores, grant matches, truth table logic, risk registers, strategy memos, application drafts, or internal Funding Engine outputs. |
| Response semantics | All six public-safe states are displayed: accepted, queued, needs_more_information, duplicate_or_existing_record, rejected_invalid_payload, and error. |

## FAQ

The `/faq` route renders with answer-first B2B AEO content and boundary language. It includes the approved decision-maker questions about what PivotMarkets is, who it serves, funding guarantees, organizational story meaning, post-handoff flow, public-site grant evaluation limits, required information, and information use.

## Contact

The `/contact` route renders as a business inquiry path for organizations. It explicitly states that contacting PivotMarkets is not a funding approval path and that contact inquiries do not create applications, determine eligibility, or send organizational context to the Funding Engine. The visible form captures name, email, organization, inquiry type, and message for professional inquiry context.

## Explore Funding Retest Setup

Returned to `/explore-funding` for interactive review. The route continues to show the corrected document title, required review summary, required consent acknowledgements, versioned payload preview, and all six response semantics.

## Explore Funding Interactive Payload Validation

Interactive sample entry confirms that the required payload fields update the visible versioned payload preview. The observed payload includes `handoffVersion`, `handoffTimestamp`, `sourceRoute`, `contact.name`, `contact.email`, `contact.roleTitle`, `organization.name`, `organization.type`, `organization.industry`, `organization.geography.country`, `organization.geography.stateRegion`, `organization.geography.city`, `goals.primaryGoals`, `fundingNeed.description`, and `timeline.decisionWindow`.

Organization type selection updates to `business`. Decision window selection updates to `this_quarter`. Required consent values remain false until the visitor affirmatively checks the acknowledgements.

Required handoff consent interaction is working: checking the first acknowledgement changes `consent.handoffApproved` to `true`, and checking the second acknowledgement changes `consent.authorizedRepresentative` to `true` in the visible payload preview. The required boundary acknowledgement remains intentionally false until separately checked.

Explore Funding affirmative handoff trigger was tested with safe sample data. The visible payload preview included `handoffVersion: rev2-public-intent-v1`, `sourceRoute: /explore-funding`, required contact fields, required organization fields, primary goals array, funding need description, decision window, and required consent booleans. After checking all three required acknowledgements and clicking the submission button, the UI displayed the approved confirmation language: the handoff payload is ready for the Funding Engine connection. The page preserves boundary protection and states that the connected environment would submit only at this single handoff point.

