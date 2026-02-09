// content/projects/ualr-chatbot.tsx
export default function UALRChatbotContent() {
  return (
    <>
      <p>
        UALR Chatbot – or as I like to call it, “How I Learned to Stop Worrying and Love the Garbage.”
      </p>

      <h3 className="mt-4 mb-2 text-lg font-semibold">The Dispatch</h3>
      <p>
        Marla Johnson recruited me to rescue me for the role to work as a technical lead on UALR's chatbot project.
        The bot was supposed to help prospective students navigate UALR's sprawling website. Going into this,
        My mission was: diagnose the bot's ailments, prescribe fixes, and get it to pass the Turing test (or at least
        not sound like it failed anatomy).
      </p>

      <h3 className="mt-4 mb-2 text-lg font-semibold">Garbage In, Garbage Out—Shocking, I Know</h3>
      <p>
        First incision: the data. Turns out we were force-feeding the poor thing undergraduate brochures
        while promising it grad-student caviar. I built a new scraper that pulled only graduate-level pages,
        filtered out the noise, and fed the bot a diet it could actually digest.
      </p>

      <h3 className="mt-4 mb-2 text-lg font-semibold">Chunking: Not Just for Guacamole</h3>
      <p>
        Next pathology: chunk salad. Vectors were sliced so thin they carried zero context.
        We manually reorganized and annotated the sections so each chunk arrived with enough surrounding sense
        to answer a question without sounding like it woke up in the middle of someone else’s lecture.
      </p>

      <ul className="list-disc pl-6 mt-3 space-y-1 text-sm">
        <li>Diagnosed data ingestion pipeline; evicted undergrad noise.</li>
        <li>Built grad-student-only scraper—think VIP list, but for knowledge.</li>
        <li>Redesigned chunking & annotation schema; context no longer MIA.</li>
        <li>Shipped a bot that finally answers questions without sounding like it skipped med school.</li>
      </ul>
    </>
  );
}