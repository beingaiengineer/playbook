# Course: Applied Data Structures (FDE Focus)

## Why This Course?
Data structures are the invisible backbone of every system an FDE touches. When you're deployed to a client site and their database queries are crawling, their search is broken, or their cache is eating all the memory — you need to understand *what's actually happening* under the hood, not just how to pass a LeetCode problem.

This course teaches data structures through the lens of a Forward Deployed Engineer solving real integration and scaling problems on client infrastructure.

## Core Topics

### 1. Arrays & Memory Layout (`arrays-memory.mdx`)
- **FDE Scenario:** Processing massive client data exports. Why contiguous memory and cache-line alignment matter.
- **Sidebar Position:** 1

### 2. Linked Lists (`linked-lists.mdx`)
- **FDE Scenario:** Building undo/redo for client-facing editors. Why linked lists lose to arrays in cache performance but win in specific insertion patterns.
- **Sidebar Position:** 2

### 3. Stacks & Queues (`stacks-queues.mdx`)
- **FDE Scenario:** Expression parsing, BFS for dependency resolution in client configuration graphs.
- **Sidebar Position:** 3

### 4. Hash Maps Deep Dive (`hash-maps.mdx`)
- **FDE Scenario:** Caching slow legacy API responses in your integration layer. Collision resolution, load factors, and rehashing.
- **Sidebar Position:** 4

### 5. Consistent Hashing (`consistent-hashing.mdx`)
- **FDE Scenario:** Distributing cache across client nodes without catastrophic reshuffling when servers are added or removed.
- **Sidebar Position:** 5

### 6. Trees & Binary Search Trees (`trees-bst.mdx`)
- **FDE Scenario:** Hierarchical client org structures, permission trees, recursive traversals.
- **Sidebar Position:** 6

### 7. B-Trees & Database Indexing (`b-trees-indexing.mdx`)
- **FDE Scenario:** Why the client's PostgreSQL queries are slow — understanding what indexes actually are under the hood.
- **Sidebar Position:** 7

### 8. Heaps & Priority Queues (`heaps-priority-queues.mdx`)
- **FDE Scenario:** SLA-aware task scheduling and job prioritization in client deployment pipelines.
- **Sidebar Position:** 8

### 9. Graphs & Traversals (`graphs-traversals.mdx`)
- **FDE Scenario:** Mapping client infrastructure dependencies, detecting circular dependencies in microservices.
- **Sidebar Position:** 9

### 10. Tries (Prefix Trees) (`tries.mdx`)
- **FDE Scenario:** Autocomplete for client search UIs, IP routing and longest-prefix matching in network configs.
- **Sidebar Position:** 10

### 11. Bloom Filters (`bloom-filters.mdx`)
- **FDE Scenario:** Protecting fragile client databases from millions of unnecessary existence checks.
- **Sidebar Position:** 11

### 12. HyperLogLog (`hyperloglog.mdx`)
- **FDE Scenario:** Counting unique events (users, sessions) on memory-constrained client infrastructure using kilobytes instead of gigabytes.
- **Sidebar Position:** 12

### 13. Merkle Trees (`merkle-trees.mdx`)
- **FDE Scenario:** Data integrity verification for compliance-heavy, air-gapped government deployments.
- **Sidebar Position:** 13

### 14. Knowledge Graphs (`knowledge-graphs.mdx`)
- **FDE Scenario:** Structuring messy, scattered client data (PDFs, SQL, wikis) for RAG pipelines and agentic AI workflows.
- **Sidebar Position:** 14
