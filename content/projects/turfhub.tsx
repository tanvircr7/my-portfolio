// content/projects/turfhub.tsx
export default function TurfHubContent() {
  return (
    <>
      <p className="text-sky-600 dark:text-sky-400 italic">
        TurfHub — because coordinating a 5-a-side match shouldn't feel like a distributed consensus problem.
      </p>

      <h3 className="mt-5 mb-2 text-lg font-semibold text-sky-700 dark:text-sky-400">
        The Booking Bottleneck
      </h3>
      <p className="text-slate-800 dark:text-slate-200">
        At Tecpen, I was tasked with engineering the core logic for TurfHub, a React-based 
        booking engine. The challenge wasn't just UI; it was maintaining <strong>data consistency</strong> across high-concurrency booking, payment, and authentication states without dropping a single packet.
      </p>

      <h3 className="mt-5 mb-2 text-lg font-semibold text-sky-700 dark:text-sky-400">
        Engineered Reliability
      </h3>
      <p className="text-slate-800 dark:text-slate-200">
        I built structured data pipelines that bridged the gap between the frontend state and 
        database integrity. By optimizing the interaction between the booking workflows and 
        backend reporting, we ensured that "double-booking" remained a theoretical impossibility rather 
        than a production bug.
      </p>

      <ul className="list-disc pl-6 mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <li>Architected booking & payment workflows with 100% data consistency.</li>
        <li>Implemented secure authentication layers to guard operational data.</li>
        <li>Synchronized backend monitoring tools to track real-time turf availability.</li>
        <li>Shipped a streamlined React stack that scaled from local pitches to city-wide leagues.</li>
      </ul>
    </>
  );
}