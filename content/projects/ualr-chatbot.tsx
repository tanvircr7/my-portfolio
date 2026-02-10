// content/projects/ualr-chatbot.tsx
export default function UALRChatbotContent() {
  return (
    <>
      <p className="text-slate-700 dark:text-slate-300 italic">
        UALR Chatbot – How data engineering and careful curation is the most boring and successful lever.”
      </p>

      <h3 className="mt-5 mb-2 text-lg font-semibold text-sky-700 dark:text-sky-400">
        The Dispatch
      </h3>
      <p className="text-slate-800 dark:text-slate-200">
        Marla Johnson recruited me for the role at Tech Launch, during the summer of 2025. The
        task: fix their retrieval-augmented chatbot.
        My mission: diagnose the issues, implement solutions, and get that accuracy soaring above 80%-ish.
      </p>

      <h3 className="mt-5 mb-2 text-lg font-semibold text-sky-700 dark:text-sky-400">
        Garbage In, Garbage Out—Shocking, I Know
      </h3>
      <p className="text-slate-800 dark:text-slate-200">
        First incision: the data. An audit revealed that the ingestion pipeline indiscriminately harvested
        undergraduate-facing pages, introducing lexical priors misaligned with the graduate-student
        information need. I engineered a domain-specific scraper that enforced graduate-level URL patterns,
        applied regex-based content filters, and re-indexed the corpus, reducing irrelevant tokens by 50%.
      </p>

      <h3 className="mt-5 mb-2 text-lg font-semibold text-sky-700 dark:text-sky-400">
        Chunking
      </h3>
      <p className="text-slate-800 dark:text-slate-200">
        Next pathology: chunk salad. The existing segmentation strategy produced atomic passages devoid of
        discourse context, yielding low-recall retrieval. We implemented a semantically coherent chunking
        policy—merging adjacent paragraphs, preserving section headings, and injecting manually curated
        metadata—improving answer-level BLEU by 18 % and user-reported satisfaction from 2.1 → 4.6 / 5.
      </p>

      <ul className="list-disc pl-6 mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <li>Diagnosed data ingestion pipeline; evicted undergrad noise.</li>
        <li>Built grad-student-only scraper—think VIP list, but for knowledge.</li>
        <li>Redesigned chunking & annotation schema; context no longer MIA.</li>
        <li>Shipped a bot that finally answers questions without sounding like it skipped med school.</li>
      </ul>
    </>
  );
}