function TechStack({ stack }: { stack: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {stack.map((s) => (
        <span
          key={s}
          className="border border-base rounded-lg px-2 py-1 text-sm"
        >
          {s}
        </span>
      ))}
    </div>
  );
}

export default TechStack;
