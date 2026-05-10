import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About — KeyZen",
  description:
    "KeyZen is a hobby open-source typing test inspired by Monkeytype.",
}

export const revalidate = 3600



export default async function AboutPage() {

  return (
    <main className="flex flex-1 flex-col px-6 py-10 md:py-16">
      <article className=" w-full mx-auto max-w-5xl space-y-6 text-muted-foreground">
        <h1 className="font-(family-name:--font-doto) text-3xl font-bold text-foreground md:text-4xl">
          About KeyZen
        </h1>
        <p className="text-sm text-muted-foreground/50 -mt-2">
          🚀 Proudly launched on April 13, 2025
        </p>
        <p className="leading-relaxed">
          KeyZen is a small side project: a clean, browser-based typing speed
          test built for practice and fun. It is{" "}
          <a
            href="https://github.com/Suryanshu-Nabheet/KeyZen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-4 hover:underline"
          >
            open source
          </a>{" "}
          and free to use or fork.
        </p>
        <p className="leading-relaxed">
          The UI and flow are heavily inspired by{" "}
          <a
            href="https://monkeytype.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-4 hover:underline"
          >
            Monkeytype
          </a>
          , a benchmark for minimal typing-test design. KeyZen is not affiliated
          with Monkeytype; it is an independent hobby implementation with its own
          stack and features.
        </p>
        <p className="leading-relaxed">
          Want the full tour? Visit the{" "}
          <Link
            href="/landing"
            className="text-primary underline-offset-4 hover:underline"
          >
            landing page
          </Link>
          .
        </p>
        <p className="leading-relaxed">
          If you spot a bug or want to improve something,{" "}
          <a
            href="https://github.com/Suryanshu-Nabheet/KeyZen/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-4 hover:underline"
          >
            raise an issue or request a feature
          </a>{" "}
          on GitHub.
        </p>

        <h2 className="font-(family-name:--font-doto) text-xl font-semibold text-foreground">
          Keyboard Shortcuts
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-foreground mb-2">Typing Test</h3>
            <ul className="list-inside list-disc space-y-1 text-sm">
              <li><kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">tab</kbd> + <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">enter</kbd> - Restart test</li>
              <li><kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">shift</kbd> + <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">enter</kbd> - End test (Zen mode)</li>
              <li><kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">ctrl</kbd> / <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">alt</kbd> + <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">backspace</kbd> - Delete current word</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">Results Screen</h3>
            <ul className="list-inside list-disc space-y-1 text-sm">
              <li><kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">enter</kbd> - Next test</li>
              <li><kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">ctrl</kbd> / <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">cmd</kbd> + <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">enter</kbd> - Restart test</li>
            </ul>
          </div>
        </div>

        <h2 className="font-(family-name:--font-doto) text-xl font-semibold text-foreground">
          Privacy & Data Collection
        </h2>
        <p className="leading-relaxed">
          KeyZen uses Google Analytics to collect anonymous usage data such as typing
          speed, accuracy, and feature usage. This helps identify bugs, improve UX, and
          prioritize new features. No personal information is collected. Data is
          processed in accordance with Google&apos;s{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-4 hover:underline"
          >
            Privacy Policy
          </a>
          .
        </p>




        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Suryanshu Nabheet.
        </p>

        <p>
          <Link
            href="/"
            className="text-sm text-primary underline-offset-4 hover:underline"
          >
            ← Back to typing test
          </Link>
        </p>
      </article>
    </main>
  )
}
