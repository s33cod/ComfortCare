import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Pill } from "lucide-react";

export default function Prescriptions() {
  return (
    <Layout
      title="Prescription Collection"
      description="Safe and reliable prescription collection and delivery service with pharmacy coordination and safety protocols."
    >
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-care-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Pill className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-care-800 mb-6">
            Prescription Collection
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Safe and reliable prescription collection and delivery service. We
            coordinate with your pharmacy to ensure you never miss your
            medications.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Learn More</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
