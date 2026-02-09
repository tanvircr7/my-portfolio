// content/projects/bolt-inference.tsx
export default function BOLTInferenceContent() {
  return (
    <>
      <p className="text-indigo-700 dark:text-indigo-300 italic">
        BOLT: Budget-Optimal LLM Inference via Quantization, Adaptive Exits, and Test-Time Verification.
      </p>

      <h3 className="mt-5 mb-2 text-lg font-semibold text-sky-700 dark:text-sky-400">
        The Pareto Frontier of Open Inference
      </h3>
      <p className="text-slate-800 dark:text-slate-200">
        Open-weight LLM deployment is often a zero-sum game between memory, latency, and accuracy. 
        While quantization and early-exit methods are usually studied in isolation, 
        <strong> BOLT</strong> treats them as a unified, joint optimization problem. 
        By co-tuning INT4 precision with adaptive layer-skipping, we recover the "reasoning tax" 
        imposed by compression through lightweight test-time verification.
      </p>

      <h3 className="mt-5 mb-2 text-lg font-semibold text-sky-700 dark:text-sky-400">
        The 3-Knob Stack: Efficiency without Collapse
      </h3>
      <p className="text-slate-800 dark:text-slate-200">
        Our research investigates the interplay between three distinct inference "knobs" across 
        Qwen2.5-7B and 14B architectures:
      </p>
      <ul className="list-disc ml-5 space-y-1 text-slate-800 dark:text-slate-200">
        <li><strong>Adaptive Exits:</strong> A confidence-based controller (logit margin/entropy) that terminates computation once a hidden state stabilizes.</li>
        <li><strong>Test-Time Verification:</strong> A budget-constrained reranking pipeline using <em>self-consistency</em> and LLM-as-judge to validate INT4 outputs.</li>
        <li><strong>KV Compression:</strong> Dynamic token-dropping policies that preserve global attention mass for long-context stability.</li>
      </ul>

      <h3 className="mt-5 mb-2 text-lg font-semibold text-sky-700 dark:text-sky-400">
        Methodology & COLM-Next Benchmarking
      </h3>
      <p className="text-slate-800 dark:text-slate-200">
        Designed for reproducibility on a single-GPU (A100) budget, the project generates a 
        multi-modal failure taxonomy across math (GSM8K), code (HumanEval), and long-context QA. 
        We map the <strong>Accuracy vs. Effective Compute</strong> curve, identifying the specific 
        regimes where verification compensates for quantization noise and where early-exit 
        heuristics break complex reasoning chains.
      </p>

      <div className="mt-6 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg border-l-4 border-sky-500">
        <p className="text-sm font-mono text-slate-700 dark:text-slate-300">
          // Execution Plan: <br />
          Prototype: Colab (bitsandbytes NF4) <br />
          Production: HPC Job Arrays (A100) <br />
          Metrics: Pareto Frontiers + Calibration + Failure Breakdown
        </p>
      </div>
    </>
  );
}