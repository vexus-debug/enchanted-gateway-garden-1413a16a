import Layout from "@/site/components/Layout";
import PageHero from "@/site/components/PageHero";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import CaseCalculator from "@/site/components/CaseCalculator";

const WHATSAPP = "https://wa.me/2349017758165?text=Hello%20I%20would%20like%20to%20know%20more%20about%20Clinexus%20dental%20pricing";

const DentalPricing = () => (
  <Layout>
    <PageHero
      eyebrow="Dental clinic pricing"
      title="Simple pricing. You only pay when you see patients."
      description="A one-time setup fee to get your clinic running, then a small fee per patient case. No monthly subscription."
      primaryCta={{ label: "Talk to us on WhatsApp", href: WHATSAPP, external: true }}
    />
    <div className="mx-auto grid max-w-4xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-2">
      <div className="rounded-2xl border border-border bg-card p-8">
        <p className="text-sm font-medium text-muted-foreground">One-time setup fee</p>
        <p className="mt-2 text-3xl font-bold text-foreground">₦30,000 – ₦50,000</p>
        <p className="mt-3 text-muted-foreground">Depends on your clinic size — number of branches, chairs and staff. Paid once.</p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-8">
        <p className="text-sm font-medium text-muted-foreground">Per patient case</p>
        <p className="mt-2 text-3xl font-bold text-foreground">₦1,000</p>
        <p className="mt-3 text-muted-foreground">1 case = 1 credit. A case covers one patient for 30 days, up to 3 visits. Buy credits in advance; they're used as you go. You start with 10 free cases at signup, and credits never expire.</p>
      </div>
      <ul className="space-y-3 md:col-span-2">
        {["10 free cases at signup", "Credits never expire", "Setup, training and data import included", "All features included — no add-ons", "No monthly subscription"].map((t) => (
          <li key={t} className="flex items-center gap-3 text-foreground">
            <CheckCircle2 className="h-5 w-5 text-primary" /> {t}
          </li>
        ))}
      </ul>
      <CaseCalculator />
      <Link to="/industries/dental-clinics/how-cases-work" className="font-semibold text-primary underline md:col-span-2">How does ₦1,000 per case work? →</Link>
    </div>
  </Layout>
);

export default DentalPricing;
