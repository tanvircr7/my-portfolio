// content/projects/dspy-philosophy.tsx
export default function DSPyIntegrationContent() {
  return (
    <>
      <p className="text-sky-600 dark:text-sky-400 italic">
        Moving from Hand-Crafted Prompts to Compiled Reasoners: Why DSPy is the end of "Prompt Engineering."
      </p>

      <h3 className="mt-5 mb-2 text-lg font-semibold text-sky-700 dark:text-sky-400">
        The CrewAI (Prompt-Centric) vs. DSPy Dichotomy
      </h3>
      <p className="text-slate-800 dark:text-slate-200">
        I have spent significant time building agentic workflows in <strong>CrewAI</strong>—which is excellent 
        for defining persona-based roles—but it often suffers from <strong>prompt fragility</strong>. 
        When an agent fails to conclude a task, it is often unclear if the failure lies in the 
        underlying logic or just a poorly phrased instruction. My shift toward <strong>DSPy</strong> is 
        a move toward <strong>differentiable programming</strong>.
      </p>

      

      <h3 className="mt-5 mb-2 text-lg font-semibold text-sky-700 dark:text-sky-400">
        Hands-Off Optimization
      </h3>
      <p className="text-slate-800 dark:text-slate-200">
        By treating the prompt as a <strong>signature</strong> rather than a static string, DSPy allows 
        the system to <em>compile</em> its own strategy. Instead of manual trial-and-error, we 
        can programmatically optimize the model to satisfy specific <strong>telemetric metrics</strong>. 
        This transitions the developer's role from a "prompt hacker" to a "system architect," 
        where the goal is defining robust input/output schemas that the optimizer then populates 
        with the most effective instructions.
      </p>

      <ul className="list-disc pl-6 mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <li>Replaced manual prompt tuning with <strong>Signature-based programming</strong>.</li>
        <li>Utilizing <strong>BootstrapFewShot</strong> to automatically generate high-performing few-shot exemplars.</li>
        <li>Implemented metric-driven evaluation to ensure <strong>reasoning consistency</strong> across model updates.</li>
        <li>Transitioned from "agent-as-a-role" to <strong>agent-as-an-optimizer</strong>.</li>
      </ul>
    </>
  );
}