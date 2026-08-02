export type Note = {
  title: string;
  description: string;
  date: string;
  slug: string;
  subject: string;
};

export type NoteCollection = {
  title: string;
  slug: string;
  description: string;
  sourceLabel: string;
  sourceUrl: string;
  notes: Note[];
};

export const noteCollections: NoteCollection[] = [
  {
    title: "Distributed Systems",
    slug: "distributed-systems",
    description:
      "Working notes from my study of distributed systems: concise ideas, observations, and explanations captured as I learn.",
    sourceLabel: "MIT 6.824 Distributed Systems",
    sourceUrl:
      "https://youtube.com/playlist?list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB&si=499UyzBchMQojAN7",
    notes: [
      {
        title: "Threads and RPC",
        description:
          "Notes on concurrency, Go routines, threads, and Remote Procedure Calls.",
        date: "2025-12-29",
        slug: "threads-and-rpc",
        subject: "Concurrency",
      },
      {
        title: "Distributed Storage Systems",
        description:
          "Why distributed storage is difficult, and how sharding, failures, replication, and consistency interact.",
        date: "2025-12-29",
        slug: "gfs-storage-systems",
        subject: "Storage",
      },
      {
        title: "Primary-Backup Replication",
        description:
          "Notes on failure models, the limits of replication, and the economic trade-offs behind fault tolerance.",
        date: "2025-12-29",
        slug: "replication",
        subject: "Replication",
      },
    ],
  },
];
