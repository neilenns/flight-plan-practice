interface FPETextAreaProperties
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export function FPETextArea({
  className = "",
  ...properties
}: FPETextAreaProperties) {
  return (
    <textarea
      rows={2}
      className={`resize-none scrollbar-thin scrollbar-thumb-[#4b5563] scrollbar-track-transparent scrollbar-thumb-rounded-md text-[var(--color-fpe-input-foreground)] border border-[var(--color-fpe-input-border)] px-[6px] pt-[1px] pb-0 min-h-[24px] text-center mb-1 focus:outline-none ${className}`}
      {...properties}
    />
  );
}
