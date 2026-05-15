
## Live browser submission validation — 2026-05-15

The rebuilt production Explore Funding route was opened at `http://localhost:4180/explore-funding`. The live health indicator displayed **Funding Engine connection: Online** with the message that the intake is online and accepting `rev2-public-intent-v1` handoffs through the same-origin proxy.

A browser submission was completed with the approved visible handoff flow: organization context fields were filled, the organization type and timing selects were set, the required acknowledgement checkboxes were affirmed, and the affirmative **Send Organization Context to Funding Engine** button was clicked.

The live receiver returned and the UI surfaced the approved public response state **`rejected_invalid_payload`**. The page rendered the correct public-safe status copy: **“Funding Engine rejected the payload contract.”** It also surfaced the returned missing/invalid field details without exposing internal Funding Engine artifacts: `contactName`, `contactEmail`, `orgName`, `orgLocation`, `entityType`, `projectGoal`, and `consentToContact`.

This confirms that the live POST path reaches the Funding Engine through the same-origin proxy and that the approved response-state handling for `rejected_invalid_payload` works correctly. The approved Rev 2 payload structure and consent language were not changed to satisfy the receiver’s alternate field expectations.

Endpoint-level validation had already confirmed the same response state through the proxy before browser validation.


## Live browser retest after approved field-name mapping

Date: 2026-05-15 EDT

Route: `http://localhost:4180/explore-funding`

Implementation under test: approved submit-only field-name mapping adapter in the POST body construction layer. The visible form fields, consent language, public UI, versioned payload preview, and boundary protection copy were not changed.

Live browser result: **PASS**.

The same validation form values were submitted through the rebuilt local production server and same-origin Funding Engine proxy. The Funding Engine returned the approved response state **`queued`**. The `/explore-funding` UI handled the state correctly and displayed: **“Funding Engine handoff queued.”** The public-safe response message shown was: **“Funding inquiry received and queued for staff review. This appears to be an early-intent submission; no follow-up action is required from you at this time.”**

Conclusion: the seven approved field-name mappings resolved the prior `rejected_invalid_payload` missing-field issue and the live receiver accepted the handoff into an approved processing state.

Mappings validated in the live POST construction layer:

| Rev 2 source field | Receiver field |
|---|---|
| `contact.name` | `contactName` |
| `contact.email` | `contactEmail` |
| `organization.name` | `orgName` |
| `organization.geography.country/stateRegion/city` | `orgLocation` |
| `organization.type` | `entityType` |
| `goals.primaryGoals` + `fundingNeed.description` | `projectGoal` |
| Required consent acknowledgements | `consentToContact` |
