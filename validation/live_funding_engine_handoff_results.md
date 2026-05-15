
## Live browser submission validation — 2026-05-15

The rebuilt production Explore Funding route was opened at `http://localhost:4180/explore-funding`. The live health indicator displayed **Funding Engine connection: Online** with the message that the intake is online and accepting `rev2-public-intent-v1` handoffs through the same-origin proxy.

A browser submission was completed with the approved visible handoff flow: organization context fields were filled, the organization type and timing selects were set, the required acknowledgement checkboxes were affirmed, and the affirmative **Send Organization Context to Funding Engine** button was clicked.

The live receiver returned and the UI surfaced the approved public response state **`rejected_invalid_payload`**. The page rendered the correct public-safe status copy: **“Funding Engine rejected the payload contract.”** It also surfaced the returned missing/invalid field details without exposing internal Funding Engine artifacts: `contactName`, `contactEmail`, `orgName`, `orgLocation`, `entityType`, `projectGoal`, and `consentToContact`.

This confirms that the live POST path reaches the Funding Engine through the same-origin proxy and that the approved response-state handling for `rejected_invalid_payload` works correctly. The approved Rev 2 payload structure and consent language were not changed to satisfy the receiver’s alternate field expectations.

Endpoint-level validation had already confirmed the same response state through the proxy before browser validation.

