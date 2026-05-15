import { useAuth } from "@/_core/hooks/useAuth";
import DashboardLayout from "@/components/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { ArrowLeft, CheckCircle2, ClipboardList, ExternalLink, FileText, Flag, Loader2, ShieldCheck } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useRoute } from "wouter";

type IntakeState = "accepted" | "queued" | "needs_more_information" | "duplicate_or_existing_record" | "rejected_invalid_payload" | "error";
type QueuedTargetState = "accepted" | "needs_more_information" | "duplicate_or_existing_record";
type RequirementStatus = "satisfied" | "partially_satisfied" | "not_satisfied";

const intakeStates: Array<{ value: "all" | IntakeState; label: string }> = [
  { value: "all", label: "All states" },
  { value: "queued", label: "Queued" },
  { value: "accepted", label: "Accepted" },
  { value: "needs_more_information", label: "Needs more information" },
  { value: "duplicate_or_existing_record", label: "Duplicate or existing record" },
  { value: "rejected_invalid_payload", label: "Rejected invalid payload" },
  { value: "error", label: "Error" },
];

const queuedTargetStates: Array<{ value: QueuedTargetState; label: string }> = [
  { value: "accepted", label: "Accepted" },
  { value: "needs_more_information", label: "Needs more information" },
  { value: "duplicate_or_existing_record", label: "Duplicate or existing record" },
];

function StaffAccessGate({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const [, navigate] = useLocation();
  const isAdmin = user?.role === "admin";

  useEffect(() => {
    if (!loading && !isAdmin) {
      navigate("/");
    }
  }, [isAdmin, loading, navigate]);

  if (loading || !isAdmin) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="pm-card flex items-center gap-3 px-6 py-5 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin text-primary" />
          Verifying staff access…
        </div>
      </div>
    );
  }

  return <DashboardLayout>{children}</DashboardLayout>;
}

function formatState(state: string) {
  return state.replace(/_/g, " ").replace(/\b\w/g, character => character.toUpperCase());
}

function formatDate(value: Date | string | null | undefined) {
  if (!value) return "—";
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  return date.toLocaleString();
}

function valueOrDash(value: string | null | undefined) {
  return value?.trim() ? value : "—";
}

function formatPayload(fullPayload: string) {
  try {
    return JSON.stringify(JSON.parse(fullPayload), null, 2);
  } catch {
    return fullPayload;
  }
}

function stateBadgeVariant(state: IntakeState) {
  if (state === "error" || state === "rejected_invalid_payload") return "destructive" as const;
  if (state === "queued" || state === "needs_more_information") return "secondary" as const;
  return "outline" as const;
}

function requirementStatusCopy(status: RequirementStatus) {
  if (status === "satisfied") return "Satisfied";
  if (status === "partially_satisfied") return "Partially satisfied";
  return "Not satisfied";
}

function requirementBadgeClass(status: RequirementStatus) {
  if (status === "satisfied") return "border-[var(--pm-teal)]/30 bg-[var(--pm-teal)]/10 text-[var(--pm-charcoal)]";
  if (status === "partially_satisfied") return "border-[var(--pm-amber)]/30 bg-[var(--pm-amber)]/10 text-[var(--pm-charcoal)]";
  return "border-[var(--pm-error)]/25 bg-[var(--pm-error)]/10 text-[var(--pm-charcoal)]";
}

export function StaffHome() {
  const [, navigate] = useLocation();

  useEffect(() => {
    navigate("/staff/intake", { replace: true });
  }, [navigate]);

  return (
    <StaffAccessGate>
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="pm-card px-6 py-5 text-sm text-muted-foreground">Opening the staff intake queue…</div>
      </div>
    </StaffAccessGate>
  );
}

export function StaffIntakeList() {
  const { user, loading } = useAuth();
  const [, navigate] = useLocation();
  const [stateFilter, setStateFilter] = useState<"all" | IntakeState>("all");
  const isAdmin = user?.role === "admin";
  const recordsQuery = trpc.intake.listRecords.useQuery(
    { limit: 100, offset: 0 },
    { enabled: isAdmin }
  );

  useEffect(() => {
    if (!loading && !isAdmin) {
      navigate("/");
    }
  }, [isAdmin, loading, navigate]);

  const filteredRecords = useMemo(() => {
    const records = recordsQuery.data ?? [];
    if (stateFilter === "all") return records;
    return records.filter(record => record.responseState === stateFilter);
  }, [recordsQuery.data, stateFilter]);

  if (loading || !isAdmin) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <DashboardLayout>
      <div className="mx-auto w-full max-w-7xl space-y-6">
        <section className="pm-card bg-gradient-to-br from-white to-[var(--pm-warm-surface)] p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-2">
              <p className="pm-eyebrow">Staff operations</p>
              <h1 className="text-3xl font-bold tracking-tight">Intake Queue</h1>
              <p className="max-w-3xl text-sm text-muted-foreground">
                Review Rev 2 organizational context submissions, monitor response state, and prepare queued records for the future grant matching workflow.
              </p>
            </div>
            <div className="pm-advisory-box max-w-sm text-sm">
              This page is staff-only. It does not expose eligibility scores, strategy memos, or grant matches to the public site.
            </div>
          </div>
        </section>

        <Card className="rounded-lg">
          <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <CardTitle className="flex items-center gap-2 text-xl">
                <ClipboardList className="h-5 w-5 text-primary" />
                Intake records
              </CardTitle>
              <p className="mt-2 text-sm text-muted-foreground">Sorted newest first. Showing up to the latest 100 records.</p>
            </div>
            <label className="flex flex-col gap-2 text-sm font-medium text-foreground md:min-w-64">
              Filter by response state
              <select
                value={stateFilter}
                onChange={event => setStateFilter(event.target.value as "all" | IntakeState)}
                className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {intakeStates.map(state => (
                  <option key={state.value} value={state.value}>{state.label}</option>
                ))}
              </select>
            </label>
          </CardHeader>
          <CardContent>
            {recordsQuery.isLoading ? (
              <div className="flex items-center justify-center py-16 text-sm text-muted-foreground">
                <Loader2 className="mr-2 h-4 w-4 animate-spin text-primary" />
                Loading intake records…
              </div>
            ) : recordsQuery.error ? (
              <div className="pm-advisory-box text-sm">Unable to load intake records: {recordsQuery.error.message}</div>
            ) : filteredRecords.length === 0 ? (
              <div className="rounded-lg border border-dashed border-border px-6 py-12 text-center text-sm text-muted-foreground">
                No intake records match the selected state filter.
              </div>
            ) : (
              <div className="overflow-x-auto rounded-lg border border-border">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-[var(--pm-warm-surface)]/70">
                      <TableHead>Organization</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Entity type</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>State</TableHead>
                      <TableHead>Grant flag</TableHead>
                      <TableHead>Submitted</TableHead>
                      <TableHead className="text-right">Open</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredRecords.map(record => (
                      <TableRow
                        key={record.id}
                        className="cursor-pointer transition-colors hover:bg-[var(--pm-warm-surface)]/60"
                        onClick={() => navigate(`/staff/intake/${record.id}`)}
                      >
                        <TableCell className="font-medium text-foreground">{valueOrDash(record.orgName)}</TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <p className="text-sm font-medium">{valueOrDash(record.contactName)}</p>
                            <p className="text-xs text-muted-foreground">{valueOrDash(record.contactEmail)}</p>
                          </div>
                        </TableCell>
                        <TableCell>{valueOrDash(record.entityType)}</TableCell>
                        <TableCell>{valueOrDash(record.orgLocation)}</TableCell>
                        <TableCell>
                          <Badge variant={stateBadgeVariant(record.responseState as IntakeState)}>{formatState(record.responseState)}</Badge>
                        </TableCell>
                        <TableCell>
                          {record.grantMatchFlagged ? (
                            <Badge className="border-[var(--pm-blue)]/25 bg-[var(--pm-blue)]/10 text-[var(--pm-charcoal)]" variant="outline">Flagged</Badge>
                          ) : (
                            <Badge variant="outline">Not flagged</Badge>
                          )}
                        </TableCell>
                        <TableCell className="whitespace-nowrap text-sm text-muted-foreground">{formatDate(record.createdAt)}</TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" variant="outline" className="rounded-lg" onClick={event => {
                            event.stopPropagation();
                            navigate(`/staff/intake/${record.id}`);
                          }}>
                            <ExternalLink className="mr-2 h-3.5 w-3.5" />
                            Open
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

export function StaffIntakeDetail() {
  const { user, loading } = useAuth();
  const [, navigate] = useLocation();
  const [, params] = useRoute<{ id: string }>("/staff/intake/:id");
  const recordId = Number(params?.id);
  const isValidRecordId = Number.isInteger(recordId) && recordId > 0;
  const isAdmin = user?.role === "admin";
  const utils = trpc.useUtils();
  const [targetState, setTargetState] = useState<QueuedTargetState>("accepted");
  const [staffNote, setStaffNote] = useState("");

  useEffect(() => {
    if (!loading && !isAdmin) {
      navigate("/");
    }
  }, [isAdmin, loading, navigate]);

  const recordQuery = trpc.intake.getRecord.useQuery(
    { id: recordId },
    { enabled: isAdmin && isValidRecordId }
  );

  const updateQueuedStateMutation = trpc.intake.updateQueuedState.useMutation({
    onSuccess: async () => {
      setStaffNote("");
      await Promise.all([
        utils.intake.getRecord.invalidate({ id: recordId }),
        utils.intake.listRecords.invalidate(),
      ]);
    },
  });

  const grantFlagMutation = trpc.intake.setGrantMatchFlag.useMutation({
    onSuccess: async () => {
      await Promise.all([
        utils.intake.getRecord.invalidate({ id: recordId }),
        utils.intake.listRecords.invalidate(),
      ]);
    },
  });

  const recordContext = recordQuery.data;
  const record = recordContext?.record;
  const isQueued = record?.responseState === "queued";

  if (loading || !isAdmin) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  const handleStateSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await updateQueuedStateMutation.mutateAsync({
      id: recordId,
      targetState,
      note: staffNote,
    });
  };

  return (
    <DashboardLayout>
      <div className="mx-auto w-full max-w-7xl space-y-6">
        <Button variant="outline" className="rounded-lg" onClick={() => navigate("/staff/intake")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to intake queue
        </Button>

        {!isValidRecordId ? (
          <Card className="rounded-lg p-8 text-center text-sm text-muted-foreground">Invalid intake record identifier.</Card>
        ) : recordQuery.isLoading ? (
          <Card className="rounded-lg p-8 text-center text-sm text-muted-foreground">
            <Loader2 className="mx-auto mb-3 h-5 w-5 animate-spin text-primary" />
            Loading intake record…
          </Card>
        ) : recordQuery.error ? (
          <Card className="rounded-lg p-8 text-sm text-muted-foreground">Unable to load intake record: {recordQuery.error.message}</Card>
        ) : record ? (
          <>
            <section className="pm-card bg-gradient-to-br from-white to-[var(--pm-warm-surface)] p-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-3">
                  <p className="pm-eyebrow">Intake record #{record.id}</p>
                  <h1 className="text-3xl font-bold tracking-tight">{valueOrDash(record.orgName)}</h1>
                  <p className="max-w-3xl text-sm text-muted-foreground">
                    Staff-only review workspace for the submitted Rev 2 organizational context payload.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant={stateBadgeVariant(record.responseState as IntakeState)}>{formatState(record.responseState)}</Badge>
                  <Badge variant="outline" className={record.grantMatchFlagged ? "border-[var(--pm-blue)]/25 bg-[var(--pm-blue)]/10 text-[var(--pm-charcoal)]" : ""}>
                    {record.grantMatchFlagged ? "Grant workflow flagged" : "Grant workflow not flagged"}
                  </Badge>
                </div>
              </div>
            </section>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)]">
              <div className="space-y-6">
                <Card className="rounded-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                      Organization and contact facts
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <dl className="grid gap-4 md:grid-cols-2">
                      <Fact label="Organization" value={record.orgName} />
                      <Fact label="Entity type" value={record.entityType} />
                      <Fact label="Location" value={record.orgLocation} />
                      <Fact label="Submitted" value={formatDate(record.createdAt)} />
                      <Fact label="Contact name" value={record.contactName} />
                      <Fact label="Contact email" value={record.contactEmail} />
                      <Fact label="Consent to contact" value={record.consentToContact ? "Recorded" : "Not recorded"} />
                      <Fact label="Last updated" value={formatDate(record.updatedAt)} />
                    </dl>
                  </CardContent>
                </Card>

                <Card className="rounded-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <FileText className="h-5 w-5 text-primary" />
                      Full submitted payload
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">Read-only organizational context submitted by the visitor from Rev 2.</p>
                  </CardHeader>
                  <CardContent>
                    <pre className="max-h-[560px] overflow-auto rounded-lg border border-border bg-[var(--pm-warm-surface)]/60 p-4 text-xs leading-relaxed text-[var(--pm-charcoal)]">
                      {formatPayload(record.fullPayload)}
                    </pre>
                  </CardContent>
                </Card>

                <Card className="rounded-lg">
                  <CardHeader>
                    <CardTitle className="text-xl">Staff note history</CardTitle>
                    <p className="text-sm text-muted-foreground">Audit trail for manual queued-record transitions.</p>
                  </CardHeader>
                  <CardContent>
                    {recordContext.staffNotes.length === 0 ? (
                      <div className="rounded-lg border border-dashed border-border px-4 py-8 text-center text-sm text-muted-foreground">No staff notes have been recorded for this intake record.</div>
                    ) : (
                      <div className="space-y-3">
                        {recordContext.staffNotes.map(note => (
                          <div key={note.id} className="rounded-lg border border-border p-4">
                            <div className="mb-2 flex flex-wrap items-center gap-2 text-sm">
                              <Badge variant="outline">{formatState(note.previousState)} → {formatState(note.newState)}</Badge>
                              <span className="text-xs text-muted-foreground">{formatDate(note.createdAt)}</span>
                            </div>
                            <p className="whitespace-pre-wrap text-sm text-foreground">{note.note}</p>
                            <p className="mt-2 text-xs text-muted-foreground">Staff user ID: {note.staffUserId}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              <aside className="space-y-6">
                {isQueued ? (
                  <Card className="rounded-lg border-[var(--pm-blue)]/30">
                    <CardHeader>
                      <CardTitle className="text-xl">State action panel</CardTitle>
                      <p className="text-sm text-muted-foreground">Queued records may be moved to one approved state with a required staff note.</p>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4" onSubmit={handleStateSubmit}>
                        <label className="flex flex-col gap-2 text-sm font-medium">
                          Target state
                          <select
                            value={targetState}
                            onChange={event => setTargetState(event.target.value as QueuedTargetState)}
                            className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          >
                            {queuedTargetStates.map(state => (
                              <option key={state.value} value={state.value}>{state.label}</option>
                            ))}
                          </select>
                        </label>
                        <label className="flex flex-col gap-2 text-sm font-medium">
                          Required staff note
                          <Textarea
                            value={staffNote}
                            onChange={event => setStaffNote(event.target.value)}
                            placeholder="Document the operational reason for this transition."
                            className="min-h-32 rounded-lg"
                          />
                        </label>
                        {updateQueuedStateMutation.error ? (
                          <p className="text-sm text-destructive">{updateQueuedStateMutation.error.message}</p>
                        ) : null}
                        <Button className="w-full rounded-lg" type="submit" disabled={updateQueuedStateMutation.isPending || staffNote.trim().length === 0}>
                          {updateQueuedStateMutation.isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <CheckCircle2 className="mr-2 h-4 w-4" />}
                          Update queued state
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                ) : null}

                <Card className="rounded-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <Flag className="h-5 w-5 text-primary" />
                      Grant workflow flag
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">Marks this record for the deferred grant matching and truth table workflow.</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Badge variant="outline" className={record.grantMatchFlagged ? "border-[var(--pm-blue)]/25 bg-[var(--pm-blue)]/10 text-[var(--pm-charcoal)]" : ""}>
                      {record.grantMatchFlagged ? "Currently flagged" : "Currently not flagged"}
                    </Badge>
                    {grantFlagMutation.error ? <p className="text-sm text-destructive">{grantFlagMutation.error.message}</p> : null}
                    <Button
                      variant={record.grantMatchFlagged ? "outline" : "default"}
                      className="w-full rounded-lg"
                      disabled={grantFlagMutation.isPending}
                      onClick={() => grantFlagMutation.mutate({ id: record.id, grantMatchFlagged: !record.grantMatchFlagged })}
                    >
                      {grantFlagMutation.isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Flag className="mr-2 h-4 w-4" />}
                      {record.grantMatchFlagged ? "Clear grant workflow flag" : "Flag for grant workflow"}
                    </Button>
                  </CardContent>
                </Card>

                <Card className="rounded-lg">
                  <CardHeader>
                    <CardTitle className="text-xl">Read-only requirement summary</CardTitle>
                    <p className="text-sm text-muted-foreground">Conservative field-based summary. This is not an eligibility score or grant determination.</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recordContext.requirementSummary.map(item => (
                        <div key={item.id} className="rounded-lg border border-border p-4">
                          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                            <h3 className="text-sm font-semibold tracking-normal">{item.label}</h3>
                            <Badge variant="outline" className={requirementBadgeClass(item.status as RequirementStatus)}>{requirementStatusCopy(item.status as RequirementStatus)}</Badge>
                          </div>
                          <p className="text-sm text-foreground">{item.evidence}</p>
                          <p className="mt-2 text-xs text-muted-foreground">{item.notes}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </aside>
            </div>
          </>
        ) : (
          <Card className="rounded-lg p-8 text-center text-sm text-muted-foreground">Intake record not found.</Card>
        )}
      </div>
    </DashboardLayout>
  );
}

function Fact({ label, value }: { label: string; value: string | null | undefined }) {
  return (
    <div className="rounded-lg border border-border bg-[var(--pm-warm-surface)]/45 p-4">
      <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{label}</dt>
      <dd className="mt-2 text-sm font-medium text-foreground">{valueOrDash(value)}</dd>
    </div>
  );
}
