import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <span className="text-sm font-semibold">NW</span>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">Nextworks Blocks Demo</div>
              <div className="text-xs text-muted-foreground">
                Gallery + templates (no database required)
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 [--navbar-toggle-bg:var(--background)] [--navbar-accent:var(--foreground)] [--navbar-hover-bg:var(--accent)] [--navbar-border:var(--border)] [--navbar-ring:var(--ring)]">
            <ThemeToggle />
            <Button asChild variant="outline" size="sm">
              <a
                href="https://github.com/jblh/nextworks-demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a
                href="https://github.com/jblh/nextworks-cli"
                target="_blank"
                rel="noopener noreferrer"
              >
                CLI (alpha)
              </a>
            </Button>
            <Button asChild size="sm">
              <a
                href="https://www.npmjs.com/package/nextworks"
                target="_blank"
                rel="noopener noreferrer"
              >
                npm
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-6 py-10">
        <section className="space-y-3">
          <h1 className="text-balance text-3xl font-semibold tracking-tight">
            Browse Nextworks UI blocks and templates
          </h1>
          <p className="max-w-2xl text-pretty text-muted-foreground">
            This demo app is a simple way to explore the <strong>Blocks</strong>{" "}
            kit: core UI components, shared sections, and complete templates
            built from those same parts. The gallery shows the building blocks,
            while the templates show how they can come together in fuller pages.
            If you want to use the same files in your own Next.js project, you
            can install them with:
          </p>
          <pre className="overflow-x-auto rounded-lg border border-border bg-card p-4 text-sm">
            <code>npx nextworks add blocks --sections --templates</code>
          </pre>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-2">
          <DemoCard
            title="Gallery"
            description="A browseable gallery of sections/components. Best starting point."
            href="/templates/gallery"
            cta="Open gallery"
          />
          <DemoCard
            title="AI Workflow"
            description="A dark, AI-agent-style landing page for workflow automation offers."
            href="/templates/aiworkflow"
            cta="Open template"
          />
          <DemoCard
            title="Product Launch"
            description="A marketing/launch template composed from sections."
            href="/templates/productlaunch"
            cta="Open template"
          />
          <DemoCard
            title="SaaS Dashboard"
            description="A SaaS-style landing + dashboard marketing layout."
            href="/templates/saasdashboard"
            cta="Open template"
          />
          <DemoCard
            title="Digital Agency"
            description="Agency-style homepage with portfolio sections."
            href="/templates/digitalagency"
            cta="Open template"
          />
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div>Built with Nextworks Blocks. MIT licensed.</div>
          <div className="flex gap-4">
            <a
              className="hover:text-foreground"
              href="https://www.npmjs.com/package/nextworks"
              target="_blank"
              rel="noopener noreferrer"
            >
              nextworks on npm
            </a>
            <a
              className="hover:text-foreground"
              href="https://github.com/jblh/nextworks-demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              source
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function DemoCard(props: {
  title: string;
  description: string;
  href: string;
  cta: string;
}) {
  return (
    <Card className="p-6">
      <div className="flex h-full flex-col">
        <div className="space-y-2">
          <h3 className="text-base font-semibold">{props.title}</h3>
          <p className="text-sm text-muted-foreground">{props.description}</p>
        </div>

        <div className="mt-6">
          <Button asChild>
            <Link href={props.href}>{props.cta}</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}
