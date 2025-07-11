import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, CheckCircle, Heart, Smile, BookOpen } from "lucide-react";

export default function Companionship() {
  return (
    <Layout
      title="Companionship Services"
      description="Professional companionship services providing social interaction, emotional support, and meaningful activities to enhance quality of life and combat loneliness."
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-care-50 to-trust-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-care-500 p-3 rounded-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-care-800">
                  Companionship
                </h1>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Combat loneliness and isolation with our warm, professional
                companionship services. Our caregivers provide meaningful social
                interaction, emotional support, and engaging activities tailored
                to your interests.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Get Started Today</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7551473/pexels-photo-7551473.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Caregiver providing companionship"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-care-800 mb-6">
                Meaningful Connection & Support
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Social Interaction
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Enjoy engaging conversations, share stories, and maintain
                    important social connections. Our companions are excellent
                    listeners and conversationalists who genuinely care about
                    your wellbeing.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Activity Planning
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    From board games and puzzles to reading together or enjoying
                    hobbies, we help plan and participate in activities that
                    bring joy and mental stimulation to your day.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Emotional Support
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our companions provide a caring presence and emotional
                    support during difficult times, celebrating good moments and
                    offering comfort when needed.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Service Features
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Friendly conversation",
                      "Activity planning",
                      "Game playing",
                      "Reading together",
                      "Light exercise",
                      "TV/movie watching",
                      "Music appreciation",
                      "Hobby assistance",
                      "Memory sharing",
                      "Emotional support",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-care-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Meaningful Companionship?
          </h2>
          <p className="text-xl text-care-100 mb-8 max-w-2xl mx-auto">
            Experience the joy of genuine friendship and support with our
            professional companion services.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Schedule Your Consultation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
