// global.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    "openai-chatkit": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      workflow?: string;
      theme?: string;
      greeting?: string;
      "starter-prompts"?: string;
    };
  }
}
