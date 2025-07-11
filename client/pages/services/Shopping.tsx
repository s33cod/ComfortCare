import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export default function Shopping() {
  return (
    <Layout
      title="Shopping & Errands"
      description="Professional shopping and errand services including grocery shopping, prescription pickup, banking, and personal shopping assistance."
    >
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-care-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingCart className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-care-800 mb-6">
            Shopping & Errands
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Grocery shopping, prescription collection, and assistance with daily
            errands. We help you get everything you need without leaving home.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Learn More</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
