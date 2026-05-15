from pathlib import Path

path = Path('/home/ubuntu/pivotmarkets-platform/client/src/pages/ExploreFunding.tsx')
text = path.read_text()

text = text.replace(
    'import { AlertTriangle, CheckCircle2, ClipboardCheck, FileJson, RefreshCw, ShieldCheck } from "lucide-react";',
    'import { AlertTriangle, CheckCircle2, ClipboardCheck, FileJson, RefreshCw, ShieldCheck, Wifi, WifiOff } from "lucide-react";'
)

text = text.replace(
    'type FormState = {',
    'type ConnectionStatus = "checking" | "online" | "offline";\n\ntype FormState = {'
)

text = text.replace(
    'const schemaId = "pivotmarkets-rev2-explore-funding-schema";\n',
    'const schemaId = "pivotmarkets-rev2-explore-funding-schema";\nconst intakeEndpoint = "https://3000-ie30avmzogehqzr82k40n-7de9ed1b.us2.manus.computer/api/funding-intake";\nconst healthEndpoint = "https://3000-ie30avmzogehqzr82k40n-7de9ed1b.us2.manus.computer/api/funding-intake/health";\n\n'
)

insert_after_states = '''const responseStates: Array<{ status: HandoffStatus; title: string; meaning: string; uiBehavior: string }> = [\n'''
if insert_after_states not in text:
    raise SystemExit('responseStates marker not found')

text = text.replace(
    '''];\n\nfunction splitList(value: string) {''',
    '''];\n\nconst responseStateCopy: Record<HandoffStatus, { title: string; message: string }> = {\n  accepted: {\n    title: "Funding Engine handoff accepted.",\n    message: "The Funding Engine received the approved organizational context package and created or linked the appropriate intake record.",\n  },\n  queued: {\n    title: "Funding Engine handoff queued.",\n    message: "The Funding Engine received the approved organizational context package and queued it for asynchronous review.",\n  },\n  needs_more_information: {\n    title: "More information is needed before handoff can proceed.",\n    message: "The required context or acknowledgement fields need attention. Your entered data has been preserved for correction.",\n  },\n  duplicate_or_existing_record: {\n    title: "Existing Funding Engine record located.",\n    message: "The Funding Engine identified an existing organization or session record and returned a public-safe status for follow-up handling.",\n  },\n  rejected_invalid_payload: {\n    title: "Funding Engine rejected the payload contract.",\n    message: "The Funding Engine rejected the handoff because the submitted contract was malformed or contained invalid required fields.",\n  },\n  error: {\n    title: "Funding Engine handoff could not be completed.",\n    message: "The Funding Engine or network connection did not complete the request. Please retry or use the contact path while preserving your entered data.",\n  },\n};\n\nconst approvedStatuses: HandoffStatus[] = [\n  "accepted",\n  "queued",\n  "needs_more_information",\n  "duplicate_or_existing_record",\n  "rejected_invalid_payload",\n  "error",\n];\n\nfunction normalizeHandoffStatus(value: unknown): HandoffStatus {\n  return typeof value === "string" && approvedStatuses.includes(value as HandoffStatus) ? (value as HandoffStatus) : "error";\n}\n\nfunction extractMissingFields(value: unknown): string[] {\n  if (!Array.isArray(value)) return [];\n  return value.map((item) => String(item)).filter(Boolean);\n}\n\nfunction splitList(value: string) {''',
    1
)

text = text.replace(
    '  const [submittedStatus, setSubmittedStatus] = useState<HandoffStatus | null>(null);\n  const [missingFields, setMissingFields] = useState<string[]>([]);',
    '  const [submittedStatus, setSubmittedStatus] = useState<HandoffStatus | null>(null);\n  const [responseMessage, setResponseMessage] = useState<string>("");\n  const [responseReference, setResponseReference] = useState<string>("");\n  const [missingFields, setMissingFields] = useState<string[]>([]);\n  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus>("checking");\n  const [connectionMessage, setConnectionMessage] = useState("Checking Funding Engine connection…");\n  const [isSubmitting, setIsSubmitting] = useState(false);'
)

text = text.replace(
    '  const payloadPreview = useMemo(() => buildPayload(form), [form]);',
    '''  const checkConnection = async () => {\n    setConnectionStatus("checking");\n    setConnectionMessage("Checking Funding Engine connection…");\n\n    try {\n      const response = await fetch(healthEndpoint, { method: "GET", headers: { Accept: "application/json" } });\n      const data = await response.json().catch(() => null) as { status?: string; acceptedHandoffVersion?: string } | null;\n\n      if (response.ok && data?.status === "ok" && data.acceptedHandoffVersion === "rev2-public-intent-v1") {\n        setConnectionStatus("online");\n        setConnectionMessage("Funding Engine intake is online and accepting rev2-public-intent-v1 handoffs.");\n        return;\n      }\n\n      setConnectionStatus("offline");\n      setConnectionMessage("Funding Engine intake did not confirm the approved handoff version. Please retry before submitting.");\n    } catch {\n      setConnectionStatus("offline");\n      setConnectionMessage("Funding Engine intake is not reachable from this browser session. Please retry before submitting.");\n    }\n  };\n\n  useEffect(() => {\n    void checkConnection();\n  }, []);\n\n  const payloadPreview = useMemo(() => buildPayload(form), [form]);'''
)

text = text.replace(
    '  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {\n    event.preventDefault();\n\n    if (requiredMissing.length > 0) {\n      setMissingFields(requiredMissing);\n      setSubmittedStatus("needs_more_information");\n      return;\n    }\n\n    setMissingFields([]);\n    setSubmittedStatus("accepted");\n  };',
    '''  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {\n    event.preventDefault();\n\n    if (requiredMissing.length > 0) {\n      setMissingFields(requiredMissing);\n      setResponseReference("");\n      setResponseMessage(responseStateCopy.needs_more_information.message);\n      setSubmittedStatus("needs_more_information");\n      return;\n    }\n\n    setIsSubmitting(true);\n    setMissingFields([]);\n    setResponseReference("");\n    setResponseMessage("");\n\n    try {\n      const response = await fetch(intakeEndpoint, {\n        method: "POST",\n        headers: {\n          Accept: "application/json",\n          "Content-Type": "application/json",\n        },\n        body: JSON.stringify(buildPayload(form)),\n      });\n      const data = await response.json().catch(() => null) as {\n        status?: unknown;\n        state?: unknown;\n        responseState?: unknown;\n        message?: unknown;\n        referenceId?: unknown;\n        intakeId?: unknown;\n        missingFields?: unknown;\n        errors?: unknown;\n      } | null;\n      const nextStatus = normalizeHandoffStatus(data?.status ?? data?.state ?? data?.responseState ?? (!response.ok ? "error" : undefined));\n      const nextMissingFields = extractMissingFields(data?.missingFields ?? data?.errors);\n\n      setSubmittedStatus(nextStatus);\n      setMissingFields(nextStatus === "needs_more_information" || nextStatus === "rejected_invalid_payload" ? nextMissingFields : []);\n      setResponseMessage(typeof data?.message === "string" && data.message.trim().length > 0 ? data.message : responseStateCopy[nextStatus].message);\n      setResponseReference(String(data?.referenceId ?? data?.intakeId ?? ""));\n    } catch {\n      setSubmittedStatus("error");\n      setMissingFields([]);\n      setResponseMessage(responseStateCopy.error.message);\n      setResponseReference("");\n    } finally {\n      setIsSubmitting(false);\n      void checkConnection();\n    }\n  };'''
)

text = text.replace(
    '              <div className="mb-8">\n                <p className="pm-eyebrow">Review summary</p>',
    '''              <div className="mb-8">\n                <p className="pm-eyebrow">Review summary</p>'''
)

text = text.replace(
    '                <p className="mt-4 text-sm leading-7 text-muted-foreground">\n                  Complete the minimum approved fields and consent acknowledgements. Optional details can improve context quality, but the public site remains a handoff layer only.\n                </p>\n              </div>',
    '''                <p className="mt-4 text-sm leading-7 text-muted-foreground">\n                  Complete the minimum approved fields and consent acknowledgements. Optional details can improve context quality, but the public site remains a handoff layer only.\n                </p>\n                <div className="mt-5 rounded-lg border border-border bg-secondary/55 p-4" role="status" aria-live="polite">\n                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">\n                    <div className="flex gap-3">\n                      {connectionStatus === "online" ? (\n                        <Wifi className="mt-1 h-5 w-5 text-[var(--pm-teal)]" aria-hidden="true" />\n                      ) : (\n                        <WifiOff className="mt-1 h-5 w-5 text-[var(--pm-amber)]" aria-hidden="true" />\n                      )}\n                      <div>\n                        <p className="text-sm font-bold">Funding Engine connection: {connectionStatus === "online" ? "Online" : connectionStatus === "checking" ? "Checking" : "Needs retry"}</p>\n                        <p className="mt-1 text-sm leading-6 text-muted-foreground">{connectionMessage}</p>\n                      </div>\n                    </div>\n                    <Button type="button" variant="outline" size="sm" onClick={() => void checkConnection()} disabled={connectionStatus === "checking"}>\n                      Check connection\n                    </Button>\n                  </div>\n                </div>\n              </div>'''
)

text = text.replace(
    '''              {submittedStatus && (\n                <div className="mt-6 rounded-lg border border-border bg-secondary/55 p-5" role="status">\n                  <div className="flex gap-3">\n                    {submittedStatus === "accepted" ? <CheckCircle2 className="mt-1 h-5 w-5 text-[var(--pm-teal)]" aria-hidden="true" /> : <AlertTriangle className="mt-1 h-5 w-5 text-[var(--pm-amber)]" aria-hidden="true" />}\n                    <div>\n                      <p className="font-bold">{submittedStatus === "accepted" ? "Handoff payload is ready for the Funding Engine connection." : "More information is required before handoff."}</p>\n                      <p className="mt-2 text-sm leading-7 text-muted-foreground">\n                        {submittedStatus === "accepted"\n                          ? "The approved trigger assembled the versioned payload with required fields and consent. In a connected environment, this is the single point that submits to the Funding Engine."\n                          : `Missing fields: ${missingFields.join(", ")}. Your entered data has been preserved for correction.`}\n                      </p>\n                    </div>\n                  </div>\n                </div>\n              )}''',
    '''              {submittedStatus && (\n                <div className="mt-6 rounded-lg border border-border bg-secondary/55 p-5" role="status" aria-live="polite">\n                  <div className="flex gap-3">\n                    {submittedStatus === "accepted" || submittedStatus === "queued" || submittedStatus === "duplicate_or_existing_record" ? (\n                      <CheckCircle2 className="mt-1 h-5 w-5 text-[var(--pm-teal)]" aria-hidden="true" />\n                    ) : (\n                      <AlertTriangle className="mt-1 h-5 w-5 text-[var(--pm-amber)]" aria-hidden="true" />\n                    )}\n                    <div>\n                      <p className="font-bold">{responseStateCopy[submittedStatus].title}</p>\n                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{responseMessage || responseStateCopy[submittedStatus].message}</p>\n                      {responseReference && <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Reference: {responseReference}</p>}\n                      {missingFields.length > 0 && (\n                        <p className="mt-2 text-sm leading-7 text-muted-foreground">Missing or invalid fields: {missingFields.join(", ")}.</p>\n                      )}\n                    </div>\n                  </div>\n                </div>\n              )}'''
)

text = text.replace(
    '<Button type="submit" size="lg">Send Organization Context to Funding Engine</Button>',
    '<Button type="submit" size="lg" disabled={isSubmitting}>{isSubmitting ? "Sending Organization Context…" : "Send Organization Context to Funding Engine"}</Button>'
)

text = text.replace(
    'onClick={() => { setForm(initialFormState); setSubmittedStatus(null); setMissingFields([]); }}',
    'onClick={() => { setForm(initialFormState); setSubmittedStatus(null); setMissingFields([]); setResponseMessage(""); setResponseReference(""); }}'
)

path.write_text(text)
print('wired live funding intake endpoint')
