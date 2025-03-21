import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "~/components/Button";
import { Separator } from "~/components/Separator";

export function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-20 flex flex-col items-center text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          About Social Feed Inc
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
          We're on a mission to build the most innovative solutions for
          tomorrow's challenges.
        </p>
      </section>

      {/* Our Story */}
      <section className="mb-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
            <p className="text-muted-foreground">
              Founded in 2015, Social Feed Inc began with a simple idea:
              technology should make life better for everyone. What started as a
              small team working out of a garage has grown into a global company
              with offices in 12 countries.
            </p>
            <p className="text-muted-foreground">
              Our journey hasn't always been easy, but our commitment to
              innovation and customer satisfaction has never wavered. We've
              overcome challenges, celebrated victories, and learned valuable
              lessons along the way.
            </p>
            <p className="text-muted-foreground">
              Today, we're proud to serve millions of customers worldwide,
              helping them achieve their goals through our cutting-edge products
              and services.
            </p>
          </div>
          <div className="relative h-[300px] overflow-hidden rounded-xl bg-muted sm:h-[400px] md:h-full">
            <img
              src="https://img.freepik.com/photos-gratuite/interieur-espace-bureau-moderne_158595-5206.jpg"
              alt="Our office"
              className="h-[400px] w-[600px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mb-20 rounded-xl bg-muted p-8">
        <div className="grid gap-8 text-center sm:grid-cols-2 md:grid-cols-4">
          {[
            { label: "Customers", value: "10M+" },
            { label: "Countries", value: "120+" },
            { label: "Team Members", value: "500+" },
            { label: "Years in Business", value: "8+" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <h3 className="text-4xl font-bold">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mb-12">
        <div className="rounded-xl border bg-card p-8 text-card-foreground shadow">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight">
                Get in Touch
              </h2>
              <p className="mb-6 text-muted-foreground">
                Have questions or want to learn more about our company? We'd
                love to hear from you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <p>123 Innovation Way, Tech City, TC 10101</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <p>(555) 123-4567</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <p>hello@acmeinc.example</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <Button className="group w-full justify-between">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Separator className="my-6" />
              <div className="text-center">
                <p className="mb-2 text-sm text-muted-foreground">
                  Looking to join our team?
                </p>
                <a
                  href="/"
                  className="text-sm font-medium underline underline-offset-4"
                >
                  View open positions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
