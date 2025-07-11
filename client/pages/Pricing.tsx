import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { DollarSign } from "lucide-react";

export default function Pricing() {
  return (
    <Layout
      title="Pricing"
      description="Transparent, affordable pricing for our comprehensive home care services. Contact us for a personalized quote and free consultation."
    >
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-care-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <DollarSign className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-care-800 mb-6">
            Pricing & Plans
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transparent, affordable pricing for our comprehensive home care
            services. Every plan is customized to your specific needs and
            budget.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Get Your Free Quote</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
