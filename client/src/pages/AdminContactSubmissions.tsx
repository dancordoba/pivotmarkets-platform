import { useState, useEffect } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Loader2, Mail, Check, Reply, ExternalLink } from "lucide-react";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLocation } from "wouter";

export default function AdminContactSubmissions() {
  const { user, loading: authLoading } = useAuth();
  const [, navigate] = useLocation();
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [showCompose, setShowCompose] = useState(false);
  const [composeTo, setComposeTo] = useState("");
  const [composeSubject, setComposeSubject] = useState("");

  // Fetch submissions
  const { data: submissionsData, isLoading } = trpc.contact.getSubmissions.useQuery(
    { limit: 50, offset: 0 },
    { enabled: user?.role === "admin" }
  );

  // Update status mutation
  const updateStatusMutation = trpc.contact.updateStatus.useMutation();

  useEffect(() => {
    if (submissionsData) {
      setSubmissions(submissionsData);
    }
  }, [submissionsData]);

  // Redirect if not admin
  if (!authLoading && user?.role !== "admin") {
    navigate("/");
    return null;
  }

  if (authLoading || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="animate-spin w-8 h-8 text-primary" />
      </div>
    );
  }

  const handleStatusChange = async (id: number, status: "new" | "read" | "replied") => {
    try {
      await updateStatusMutation.mutateAsync({ id, status });
      // Update local state
      setSubmissions(submissions.map(s => s.id === id ? { ...s, status } : s));
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  const handleComposeEmail = (email: string, name: string) => {
    setComposeTo(email);
    setComposeSubject(`Re: Your message from PivotMarkets`);
    setShowCompose(true);
  };

  const openGmailCompose = () => {
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(composeTo)}&su=${encodeURIComponent(composeSubject)}`;
    window.open(mailtoLink, "_blank");
    setShowCompose(false);
    setComposeTo("");
    setComposeSubject("");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto py-12">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Contact Submissions</h1>
              <p className="text-muted-foreground">Manage and track all contact form submissions from your website</p>
            </div>
          </div>

          {/* Email Compose Panel */}
          {showCompose && (
            <Card className="p-6 bg-blue-50 border-blue-200">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Compose Email
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">To:</label>
                  <div className="mt-1 p-3 bg-white border border-border rounded-md text-sm">
                    {composeTo}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Subject:</label>
                  <input
                    type="text"
                    value={composeSubject}
                    onChange={(e) => setComposeSubject(e.target.value)}
                    className="w-full mt-1 px-3 py-2 border border-border rounded-md text-sm"
                  />
                </div>
                <div className="bg-white p-4 rounded-md border border-border">
                  <p className="text-sm text-muted-foreground mb-3">
                    Click "Open in Gmail" to compose and send your reply. You'll be able to write your message and send it from contact@pivotmarkets.ai.
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={openGmailCompose}
                    className="gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open in Gmail
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setShowCompose(false);
                      setComposeTo("");
                      setComposeSubject("");
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {/* Submissions List */}
          {submissions.length === 0 ? (
            <Card className="p-8 text-center">
              <Mail className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground">No submissions yet</p>
            </Card>
          ) : (
            <div className="space-y-3">
              {submissions.map((submission) => (
                <Card
                  key={submission.id}
                  className="p-4 cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => setExpandedId(expandedId === submission.id ? null : submission.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="font-semibold">{submission.name}</p>
                          <p className="text-sm text-muted-foreground">{submission.email}</p>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        {new Date(submission.createdAt).toLocaleString()}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <select
                        value={submission.status}
                        onChange={(e) => {
                          e.stopPropagation();
                          handleStatusChange(submission.id, e.target.value as "new" | "read" | "replied");
                        }}
                        className="text-xs px-2 py-1 rounded border border-border"
                      >
                        <option value="new">New</option>
                        <option value="read">Read</option>
                        <option value="replied">Replied</option>
                      </select>
                      {submission.status === "replied" && <Check className="w-4 h-4 text-green-600" />}
                    </div>
                  </div>

                  {expandedId === submission.id && (
                    <div className="mt-4 pt-4 border-t">
                      <div className="bg-muted p-4 rounded-lg mb-4">
                        <p className="text-sm whitespace-pre-wrap">
                          {submission.message}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="gap-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleComposeEmail(submission.email, submission.name);
                          }}
                        >
                          <Reply className="w-4 h-4" />
                          Reply
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.location.href = `mailto:${submission.email}`;
                          }}
                        >
                          Open Email Client
                        </Button>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
