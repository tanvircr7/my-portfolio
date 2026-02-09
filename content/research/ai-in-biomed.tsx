// content/projects/ualr-chatbot.tsx
export default function AiBiomedContent() {
  return (
    <>
      <p className="text-slate-600 dark:text-slate-400 italic">
        AI in biomarker discovery and hypothesis validation — whole slide images and survival curves.
      </p>

      <h3 className="mt-5 mb-2 text-lg font-semibold text-sky-600 dark:text-sky-400">
        Setting
      </h3>
      <p className="text-slate-800 dark:text-slate-200">
        Fields of science has indiosyncracies, each field interacts differently with AI thus surfacing different
        use-cases and also failure modes. 
      </p>

      <h3 className="mt-5 mb-2 text-lg font-semibold text-sky-600 dark:text-sky-400">
        Validation Centric Pipeline
      </h3>
      <p className="text-slate-800 dark:text-slate-200">
        At the Madabhushi Lab, I am developing hypothesis-validation techniques using LLMs to accelerate cancer research. My main responsibility is building a coding agent that can take an upstream generated hypothesis, decompose it, construct a workflow of experiments, and assemble the right modular tools—computer vision models, GPU inference functions, clinical and genomic data parsers—to validate the hypothesis with survival analysis and other statistical methods.

        Today, none of this is automated. Our goal is to fast-track the scientific cycle itself. To borrow from Nassim Taleb, scientific research has a convex payoff function: the upside of success far outweighs the downside of failure, so maximizing iteration speed is the optimal strategy.

        
        <br></br>The agentic pipeline exhibited two distinct characteristics: open-ended hypothesis generation and closed-ended hypothesis validation. My work concentrated on the latter. Unlike open-ended RAG systems, where correctness can be difficult to assess, a coding agent receives clear environmental feedback. Our goal was to emulate how a pathologist validates a diagnostic hypothesis—through structured reasoning and well-defined workflows.

        <br></br>The central bottleneck was data and workflow engineering. Generating intructions for agents required coordination with digital pathologists and clinicians, with successful validation of a hypothesis being the result of careful curation. Conversely, failures in sequencing critical steps—such as patch extraction and TLS segmentation—revealed limitations in our workflow representations rather than shortcomings of the agent itself. However, manually constructing detailed workflows for every hypothesis is not scalable.

        To address this, we experimented with a Verbal RL approach that integrated external feedback signals (e.g., syntax errors, missing values), budgeted operational loops, and controlled restarts. This significantly improved the agent’s ability to complete validation workflows and increased the number of hypotheses successfully tested.
      </p>

      <h3 className="mt-5 mb-2 text-lg font-semibold text-sky-600 dark:text-sky-400">
        Imaging Pipeline
      </h3>
      <p className="text-slate-800 dark:text-slate-200">
        I had to work with different imaging tools, from Hovernets to Segment Anything Models (SAM). Getting a Decompression Bomb warning for opening a slide at 40x level was definitely a first.
        The most daunting part of the project is coordination between the cognitive architecture with its tools. Each tool is very expensive in terms of resources (Patch Extraction on 2 GPUs for 2 days).
      </p>

      <h3 className="mt-5 mb-2 text-lg font-semibold text-sky-600 dark:text-sky-400">
        Future Directions
      </h3>
      <p className="text-slate-800 dark:text-slate-200">
        Establishing the right contract between the central agents and its tools is still a work in progress. We are yet to use free-form coding and cooridnation with zero expert supervision.
        So far our most successful validation: linking TLS to the EFABP gene, definitely proves the potential for such systems.
      </p>

    </>
  );
}