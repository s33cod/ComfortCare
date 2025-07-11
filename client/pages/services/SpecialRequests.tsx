import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export default function SpecialRequests() {
  return (
    <Layout
      title="Special Requests"
      description="Customized care services tailored to your unique needs and preferences. Flexible, personalized solutions for any special requirements."
    >
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-care-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-care-800 mb-6">
            Special Requests
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Customized services tailored to your specific needs and preferences.
            We're flexible and accommodating to ensure you get exactly the care
            you need.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Discuss Your Needs</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
