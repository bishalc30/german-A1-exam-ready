// Small pieces shared by several screens.

export function Icon({ name, filled, className = "" }: { name: string; filled?: boolean; className?: string }) {
  return (
    <span aria-hidden className={`icon ${filled ? "icon-filled" : ""} ${className}`}>
      {name}
    </span>
  );
}

// Without `onExit` (the results screen), there is no close button.
export function Header({ onExit, confirmExit }: { onExit?: () => void; confirmExit?: boolean }) {
  function handleExit() {
    if (confirmExit && !window.confirm("Leave the check? Your answers will be lost.")) return;
    onExit?.();
  }
  return (
    <header className="flex h-16 items-center justify-between">
      <span className="text-headline font-bold tracking-tight text-primary-container">Globio</span>
      {onExit && (
        <button
          type="button"
          onClick={handleExit}
          aria-label="Leave the check"
          className="-mr-3 flex h-11 w-11 items-center justify-center rounded-full text-on-surface-variant hover:text-on-surface"
        >
          <Icon name="close" className="text-[20px]" />
        </button>
      )}
    </header>
  );
}

// Thin 4px bar from the design system. `value` is 0 to 1.
export function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-1 w-full overflow-hidden rounded-full bg-surface-container">
      <div
        className="h-full rounded-full bg-primary-container transition-all duration-300"
        style={{ width: `${value * 100}%` }}
      />
    </div>
  );
}

export function PrimaryButton({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="flex min-h-[58px] w-full items-center justify-center gap-2 rounded-full bg-primary-container px-space-lg text-label-lg text-on-primary shadow-sm transition-all hover:bg-primary active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-primary-container"
    >
      {children}
    </button>
  );
}
