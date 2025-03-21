import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Button } from "./components/Button";

export function App() {
  return (
    <div className="flex flex-col">
      <section className="flex flex-col items-center justify-center px-4 py-24 text-center md:px-6 lg:py-32">
        <div className="container max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Welcome to the Winamp Social Feed App
          </h1>
          <p className="mb-8 text-xl text-slate-600">
            To get started, take a look at the README of the project. Once
            You're ready you can navigate to the feed page by clicking the
            button below.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link to="/feed">
              <Button className="gap-2">
                Let's go <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
