// content/projects/agent-stalls.tsx
export default function AgentSystemsContent() {
  return (
    <>
      <p className="text-indigo-700 dark:text-indigo-300 italic">
        Progress Starvation in Agentic Loops: The vulnerability of delegated authority.
      </p>

      <h3 className="mt-5 mb-2 text-lg font-semibold text-sky-700 dark:text-sky-400">
        The Liveness Violation
      </h3>
      <p className="text-slate-800 dark:text-slate-200">
        Drawing from <em>Lamport (1977)</em>... <br></br>we investigate why agentic systems fail to satisfy 
        the property of "eventual progress." By utilizing <strong>indirect prompt injection</strong>, 
        we demonstrate how an agent can be coerced into a perpetual state of <strong>epistemic starvation</strong>, 
        where it continues to consume resources (e.g., repeating a 2+2=? request) while 
        remaining computationally unable to reach termination.
      </p>

      <h3 className="mt-5 mb-2 text-lg font-semibold text-sky-700 dark:text-sky-400">
        Delegation as a Structural Flaw
      </h3>
      <p className="text-slate-800 dark:text-slate-200">
        We frame <strong>Delegation</strong>—whether to a RAG corpus, an external tool, or a peer agent—as 
        the primary attack surface. This "delegated control" allows an adversary to influence 
        the agent's internal logic from the outside, effectively capturing the control flow 
        without direct instruction modification.
      </p>
      <ul className="list-disc ml-5 space-y-1 text-slate-800 dark:text-slate-200">
        <li><strong>Recursive Deferral:</strong> Forcing the agent into infinite verification loops by withholding closure signals.</li>
        <li><strong>Local vs. Global Rationality:</strong> The agent makes "correct" local decisions that result in a total system stall.</li>
        <li><strong>Resource Saturation:</strong> Shifting the focus from "Denial of Wallet" to a fundamental failure of the decision-making pipeline.</li>
      </ul>

      <h3 className="mt-5 mb-2 text-lg font-semibold text-sky-700 dark:text-sky-400">
        Experimental Focus: Benchmarks and Mitigations
      </h3>
      <p className="text-slate-800 dark:text-slate-200">
        Our benchmarks map how specific adversarial inputs induce <strong>Progress Failure</strong> 
         across various agent architectures. We propose a <em>Gated Defense Branching</em> <br></br>
        framework to break these loops, ensuring that agents can differentiate between 
        legitimate uncertainty and synthetic stalling patterns.
      </p>

      <div className="mt-6 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg border-l-4 border-indigo-500">
        <p className="text-sm font-mono text-slate-700 dark:text-slate-300">
          // State Analysis: <br />
          Threat Model: Epistemic Deception <br />
          Failure Mode: Eternal Deferral <br />
          Countermeasure: branching-based Decision Gates
        </p>
      </div>
    </>
  );
}