import Layout from "@/site/components/Layout";
import PageHero from "@/site/components/PageHero";
import { CheckCircle2, XCircle } from "lucide-react";

const WHATSAPP = "https://wa.me/2349017758165?text=Hello%20I%20have%20a%20question%20about%20Clinexus%20per-case%20pricing";

const steps = [
  { n: "1", t: "A patient comes in with a problem", d: "For example, a toothache, a cleaning, or braces. That problem is one case." },
  { n: "2", t: "You open a case for it", d: "The case holds everything for that problem: visits, charting, treatment, payments." },
  { n: "3", t: "You're charged ₦1,000 once", d: "That's it for that case — no matter how many follow-up visits it takes." },
];

const counts = [
  "A new patient with a new problem",
  "An existing patient back with a different problem",
  "Two separate problems treated separately (2 cases)",
];
const notCounts = [
  "Follow-up or review visits for the same case",
  "Adding notes, X-rays, payments or appointments to an open case",
  "Patients who only booked and never came",
  "Simply registering a patient",
];

const examples = [
  { who: "Root canal over 3 visits", calc: "1 case", cost: "₦1,000" },
  { who: "Braces over 18 months of reviews", calc: "1 case", cost: "₦1,000" },
  { who: "Cleaning today, filling next month (different problem)", calc: "2 cases", cost: "₦2,000" },
  { who: "Clinic handles 120 cases in a month", calc: "120 × ₦1,000", cost: "₦120,000" },
];

const faqs = [
  { q: "When do I pay?", a: "At the end of each month you get a simple bill showing the number of cases you opened." },
  { q: "What if it's a quiet month?", a: "Fewer cases, smaller bill. No cases, no bill." },
  { q: "Can I see my count?", a: "Yes. Your dashboard shows how many cases you've opened this month at any time." },
  { q: "Is there a monthly subscription too?", a: "No. Only the one-time setup fee (₦30,000–₦50,000) and ₦1,000 per case." },
];

const DentalCasesExplained = () => (
  <Layout>
    <PageHero
      eyebrow="How per-case pricing works"
      title="₦1,000 per patient case, explained simply."
      description="One problem, one case, one ₦1,000 — no matter how many visits it takes."
      primaryCta={{ label: "Ask us on WhatsApp", href: WHATSAPP, external: true }}
      secondaryCta={{ label: "Back to pricing", href: "/industries/dental-clinics/pricing" }}
    />
    <div className="mx-auto max-w-4xl space-y-16 px-4 py-16 sm:px-6">
      <section>
        <h2 className="mb-6 text-2xl font-bold text-foreground">What is a case?</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card p-6">
              <p className="text-3xl font-bold text-primary">{s.n}</p>
              <p className="mt-2 font-semibold text-foreground">{s.t}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="mb-4 font-semibold text-foreground">Counts as a case</h3>
          <ul className="space-y-3">{counts.map((c) => <li key={c} className="flex gap-2 text-sm text-muted-foreground"><CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />{c}</li>)}</ul>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="mb-4 font-semibold text-foreground">Free — not a new case</h3>
          <ul className="space-y-3">{notCounts.map((c) => <li key={c} className="flex gap-2 text-sm text-muted-foreground"><XCircle className="h-5 w-5 shrink-0 text-muted-foreground" />{c}</li>)}</ul>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold text-foreground">Examples</h2>
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          {examples.map((e) => (
            <div key={e.who} className="flex items-center justify-between gap-4 border-b border-border p-4 last:border-b-0">
              <div><p className="text-sm font-medium text-foreground">{e.who}</p><p className="text-xs text-muted-foreground">{e.calc}</p></div>
              <p className="font-bold text-primary">{e.cost}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold text-foreground">Quick answers</h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-border bg-card p-5">
              <p className="font-semibold text-foreground">{f.q}</p>
              <p className="mt-1 text-sm text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  </Layout>
);

export default DentalCasesExplained;
