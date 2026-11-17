import { Icon, PrimaryButton } from "./ui";

export default function StartScreen({ onStart }: { onStart: () => void }) {
  return (
    <main className="flex min-h-dvh flex-col justify-between py-space-lg">
      {/* Top brand line */}
      <div className="flex items-center gap-2">
        <span className="text-label-sm uppercase text-outline">Globio</span>
        <span className="h-1.5 w-1.5 rounded-full bg-primary-container" />
        <span className="text-label-sm text-on-surface-variant">Goethe A1</span>
      </div>

      {/* Centre */}
      <div className="my-auto flex flex-col items-center text-center">
        <div className="mb-space-md inline-flex items-center gap-1.5 rounded-full bg-surface-container px-3 py-1 text-primary shadow-sm">
          <Icon name="verified" filled className="text-[16px] text-primary-container" />
          <span className="text-label-sm">A1 READINESS CHECK</span>
        </div>

        <h1 className="text-display text-on-surface">Am I exam-ready?</h1>

        <p className="mt-space-sm text-body-md font-medium text-outline">
          15 questions · 3 sections · about 10 minutes
        </p>

        {/* Note that "I'm not sure" is a smart answer */}
        <div className="mt-space-lg rounded bg-surface-container-low px-space-md py-space-sm text-left">
          <p className="text-body-md text-on-surface-variant">
            <span className="font-semibold text-on-surface">&ldquo;I&rsquo;m not sure&rdquo; is a smart answer.</span>{" "}
            A wrong guess costs points, an honest &ldquo;I&rsquo;m not sure&rdquo; costs nothing.
          </p>
        </div>
      </div>

      {/* Bottom action */}
      <div className="flex flex-col items-center gap-space-sm">
        <PrimaryButton onClick={onStart}>
          <span>Start the check</span>
          <Icon name="arrow_forward" className="text-[20px]" />
        </PrimaryButton>
        <span className="text-label-sm text-outline/80">No login · Runs in your browser</span>
      </div>
    </main>
  );
}
