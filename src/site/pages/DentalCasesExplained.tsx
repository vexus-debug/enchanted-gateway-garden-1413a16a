import Layout from "@/site/components/Layout";
import PageHero from "@/site/components/PageHero";
import { CheckCircle2, XCircle } from "lucide-react";

const WHATSAPP = "https://wa.me/2349017758165?text=Hello%20I%20have%20a%20question%20about%20Clinexus%20per-case%20pricing";

const steps = [
  { n: "1", t: "Buy credits in advance", d: "1 credit = 1 case = ₦1,000. Your balance shows on the wallet button in your dashboard." },
  { n: "2", t: "A credit is used on first clinical work", d: "Booking, checking in, or adding a note, plan, chart, X-ray, prescription, lab order or invoice for a patient with no open case." },
  { n: "3", t: "The case covers 30 days, up to 3 visits", d: "Everything for that patient is covered. The 4th visit, or any visit after 30 days, opens a new case." },
];

const counts = [
  "First clinical work for a patient with no open case",
  "A 4th visit within the same 30 days",
  "Any visit after the 30 days are up",
  "Moving an old appointment to a date outside its 30 days",
];
const notCounts = [
  "Registering a new patient",
  "Viewing old records, charts and reports",
  "Editing anything inside an open case",
  "Visits 2 and 3 within the same 30 days",
];

const examples = [
  { who: "Scaling today, review in 2 weeks", calc: "1 case", cost: "₦1,000" },
  { who: "Root canal: 3 visits in 30 days, crown on day 40", calc: "2 cases", cost: "₦2,000" },
  { who: "Toothache in January, filling in March", calc: "2 cases", cost: "₦2,000" },
  { who: "4 visits in the same month", calc: "2 cases", cost: "₦2,000" },
];

const faqs = [
  { q: "When do I pay?", a: "In advance. You buy credits and they are used as you go. To top up, contact Clinexus support." },
  { q: "What happens at zero credits?", a: "Old records stay open, but new cases are blocked until you top up. The wallet turns red below 5 credits." },
  { q: "Do I get a credit back if I delete a visit?", a: "No. Deleting or cancelling a visit does not return the credit." },
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
