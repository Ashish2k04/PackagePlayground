# Full-Stack Developer & SDE Terminology

A practical reference of software engineering terms that a full-stack
developer should know when working on real-world projects.

  -----------------------------------------------------------------------
  Term                                Meaning
  ----------------------------------- -----------------------------------
  SRS (Software Requirements          A document that describes the
  Specification)                      functional and non-functional
                                      requirements of a software system
                                      in detail.

  PRD (Product Requirements Document) A document that explains what a
                                      product should do, who it is for,
                                      and what features it should
                                      provide.

  BRD (Business Requirements          A document describing the business
  Document)                           goals, needs, and expected outcomes
                                      of a project.

  MVP (Minimum Viable Product)        The smallest version of a product
                                      that provides enough value to real
                                      users and validates the core idea.

  Functional Requirement              A requirement describing what the
                                      system must do, such as allowing
                                      users to log in or place an order.

  Non-Functional Requirement          A requirement describing how the
                                      system should behave, such as
                                      performance, security, reliability,
                                      and scalability.

  User Story                          A short requirement written from
                                      the user's perspective, usually
                                      describing the user, desired
                                      action, and reason.

  Acceptance Criteria                 Conditions that must be satisfied
                                      for a feature or user story to be
                                      considered complete and accepted.

  Scope                               The defined boundaries of a
                                      project, including what is included
                                      and excluded.

  Use Case                            A description of how a user or
                                      another system interacts with the
                                      software to achieve a specific
                                      goal.

  Requirement Traceability            The ability to trace a requirement
                                      through design, implementation, and
                                      testing to ensure it has been
                                      fulfilled.

  Stakeholder                         A person or organization that has
                                      an interest in, influence over, or
                                      is affected by a software project.

  Specification                       A detailed description of the
                                      expected behavior, requirements, or
                                      technical characteristics of a
                                      system.

  ERD (Entity Relationship Diagram)   A diagram showing database
                                      entities, their attributes, and
                                      relationships between them.

  Entity                              A distinct object or concept
                                      represented in a database, such as
                                      User, Product, or Order.

  Attribute                           A property or piece of information
                                      belonging to an entity, such as a
                                      user's email or a product's price.

  Relationship                        A connection between database
                                      entities, such as a User having
                                      many Orders.

  Primary Key                         A column or set of columns that
                                      uniquely identifies each record in
                                      a database table.

  Foreign Key                         A column that references a key in
                                      another table to establish a
                                      relationship between records.

  Composite Key                       A key made from multiple columns
                                      that together uniquely identify a
                                      record.

  Cardinality                         The number of records that can
                                      participate in a relationship, such
                                      as one-to-one, one-to-many, or
                                      many-to-many.

  Schema                              The structure that defines how data
                                      is organized and stored in a
                                      database.

  Normalization                       The process of organizing database
                                      data to reduce unnecessary
                                      duplication and improve
                                      consistency.

  Denormalization                     Intentionally duplicating some data
                                      to improve read performance or
                                      simplify certain queries.

  Database Index                      A data structure that helps the
                                      database find records faster
                                      without scanning the entire table
                                      or collection.

  Database Transaction                A group of database operations
                                      treated as one logical unit that
                                      should either complete successfully
                                      or be rolled back.

  ACID                                A set of properties describing
                                      reliable database transactions:
                                      Atomicity, Consistency, Isolation,
                                      and Durability.

  Migration                           A controlled change to a database
                                      schema or structure, usually
                                      tracked and applied through
                                      versioned files.

  CRUD                                The four basic data operations:
                                      Create, Read, Update, and Delete.

  MVC (Model-View-Controller)         An architectural pattern that
                                      separates data and business logic,
                                      user interface, and request
                                      handling responsibilities.

  Model                               The part of an application
                                      responsible for representing and
                                      working with application data.

  View                                The part of an application
                                      responsible for presenting
                                      information to the user.

  Controller                          The component that receives
                                      requests, coordinates application
                                      logic, and returns responses.

  Service Layer                       A layer that contains business
                                      logic and coordinates operations
                                      between controllers, repositories,
                                      APIs, and other components.

  Repository Pattern                  A pattern that separates
                                      data-access logic from the rest of
                                      the application.

  Layered Architecture                An architecture that separates an
                                      application into layers such as
                                      presentation, business logic, and
                                      data access.

  Monolithic Architecture             An architecture where major
                                      application functionality is
                                      deployed as one application unit.

  Microservices                       An architecture where an
                                      application is divided into
                                      independently developed and
                                      deployed services.

  Modular Monolith                    A monolithic application internally
                                      divided into well-defined modules
                                      with clear boundaries.

  Separation of Concerns              The practice of keeping different
                                      responsibilities in separate parts
                                      of a system.

  Single Responsibility Principle     A design principle stating that a
                                      module or class should have one
                                      primary responsibility and one
                                      reason to change.

  SOLID                               Five principles for designing
                                      maintainable and flexible
                                      object-oriented software.

  Design Pattern                      A reusable solution to a commonly
                                      occurring software design problem.

  Dependency Injection                A technique where an object's
                                      dependencies are provided from
                                      outside instead of being created
                                      internally.

  Coupling                            The degree to which one software
                                      component depends on another
                                      component.

  Cohesion                            How closely related the
                                      responsibilities within a component
                                      are.

  Technical Debt                      The future cost created by choosing
                                      a quick or imperfect technical
                                      solution instead of a better
                                      long-term solution.

  API (Application Programming        A defined interface that allows one
  Interface)                          software system or component to
                                      communicate with another.

  REST                                An architectural style commonly
                                      used to design HTTP-based APIs
                                      around resources and standard HTTP
                                      methods.

  REST API                            An API that follows REST-style
                                      principles and uses HTTP to expose
                                      and manipulate resources.

  Endpoint                            A specific API URL through which a
                                      client can interact with a server.

  HTTP                                The protocol used for communication
                                      between clients and servers on the
                                      web.

  HTTP Method                         An HTTP operation such as GET,
                                      POST, PUT, PATCH, or DELETE that
                                      indicates the intended action.

  Request                             Data sent from a client to a
                                      server, including information such
                                      as headers, parameters, and body
                                      data.

  Response                            Data returned by a server to a
                                      client after processing a request.

  HTTP Status Code                    A numeric code indicating the
                                      result of an HTTP request, such as
                                      200, 404, or 500.

  Request Headers                     Metadata sent with an HTTP request,
                                      such as authorization tokens or
                                      content type.

  Request Body                        Data sent in the body of an HTTP
                                      request, commonly used with POST,
                                      PUT, and PATCH requests.

  Query Parameter                     A key-value parameter added to a
                                      URL to provide optional filtering,
                                      sorting, searching, or pagination
                                      information.

  Path Parameter                      A variable value embedded directly
                                      in a URL path, usually identifying
                                      a specific resource.

  Middleware                          A function or component that runs
                                      during request processing and can
                                      inspect, modify, reject, or pass
                                      along a request.

  Authentication                      The process of verifying who a user
                                      or system is.

  Authorization                       The process of determining what an
                                      authenticated user or system is
                                      allowed to access or perform.

  JWT (JSON Web Token)                A signed token format commonly used
                                      to carry claims between parties and
                                      support stateless authentication.

  Session                             Server-managed state used to
                                      remember information about a
                                      client's interaction with an
                                      application.

  Cookie                              Small data stored by the browser
                                      and sent with requests to the
                                      associated website.

  CORS                                A browser security mechanism that
                                      controls which origins are allowed
                                      to access resources across origins.

  Rate Limiting                       Restricting how many requests a
                                      client can make within a defined
                                      period.

  Idempotency                         A property where repeating the same
                                      operation produces the same
                                      intended final state after the
                                      first successful execution.

  Pagination                          Dividing a large set of results
                                      into smaller pages instead of
                                      returning everything at once.

  Webhook                             A mechanism where one system sends
                                      an HTTP request to another system
                                      when a specific event occurs.

  API Versioning                      Maintaining different versions of
                                      an API so changes can be introduced
                                      without unexpectedly breaking
                                      existing clients.

  API Contract                        The agreed structure and behavior
                                      of an API, including endpoints,
                                      inputs, outputs, status codes, and
                                      errors.

  OpenAPI                             A standard specification for
                                      describing HTTP APIs in a
                                      machine-readable format.

  SDK (Software Development Kit)      A collection of tools, libraries,
                                      and utilities that helps developers
                                      build applications for a platform
                                      or service.

  Unit Test                           A test that verifies a small,
                                      isolated unit of code such as a
                                      function or class.

  Integration Test                    A test that verifies multiple
                                      components work correctly together.

  End-to-End Test                     A test that verifies a complete
                                      user or system workflow from
                                      beginning to end.

  Regression Testing                  Testing existing functionality
                                      after changes to ensure previously
                                      working behavior has not been
                                      broken.

  Test Case                           A defined set of inputs, actions,
                                      conditions, and expected results
                                      used to verify behavior.

  Mock                                A controlled replacement for a real
                                      dependency used during testing.

  Test Coverage                       A measurement of how much of the
                                      code or behavior is exercised by
                                      tests.

  CI (Continuous Integration)         The practice of automatically
                                      building and testing code whenever
                                      changes are integrated into a
                                      shared codebase.

  CD (Continuous Delivery/Deployment) Automating the process of preparing
                                      or deploying software releases.

  Docker                              A platform for packaging
                                      applications and their dependencies
                                      into portable containers.

  Container                           An isolated runtime environment
                                      containing an application and the
                                      dependencies it needs.

  Docker Image                        A packaged, immutable template used
                                      to create containers.

  Reverse Proxy                       A server that receives client
                                      requests and forwards them to
                                      backend services.

  Nginx                               A web server and reverse proxy
                                      commonly used for serving static
                                      files, routing traffic, and load
                                      balancing.

  Load Balancer                       A system that distributes incoming
                                      traffic across multiple servers or
                                      service instances.

  CDN (Content Delivery Network)      A distributed network that delivers
                                      cached content from locations
                                      closer to users.

  Horizontal Scaling                  Increasing capacity by adding more
                                      server instances.

  Vertical Scaling                    Increasing the CPU, memory,
                                      storage, or other resources of an
                                      existing server.

  Auto Scaling                        Automatically increasing or
                                      decreasing infrastructure capacity
                                      based on demand or defined metrics.

  Availability                        The degree to which a system
                                      remains accessible and operational
                                      when users need it.

  Reliability                         The ability of a system to
                                      consistently perform correctly over
                                      time.

  Fault Tolerance                     The ability of a system to continue
                                      operating when some components
                                      fail.

  Latency                             The time taken for an operation or
                                      request to receive a response.

  Throughput                          The amount of work a system can
                                      process during a given period.

  Scalability                         The ability of a system to handle
                                      increasing workload by adding or
                                      adjusting resources.

  Caching                             Temporarily storing frequently
                                      accessed data so future requests
                                      can be served faster.

  Cache Invalidation                  The process of removing or updating
                                      cached data when the underlying
                                      data changes.

  Redis                               An in-memory data store commonly
                                      used for caching, sessions, queues,
                                      counters, and other fast-access
                                      workloads.

  Database Replication                Maintaining copies of database data
                                      on multiple database servers.

  Read Replica                        A database replica primarily used
                                      to handle read operations and
                                      reduce load on a primary database.

  Database Sharding                   Splitting data across multiple
                                      database servers or partitions to
                                      distribute storage and workload.

  Message Queue                       A system that stores messages until
                                      consumers are ready to process them
                                      asynchronously.

  Message Broker                      Infrastructure that receives,
                                      routes, stores, and delivers
                                      messages between producers and
                                      consumers.

  Pub/Sub                             A messaging pattern where
                                      publishers send messages to topics
                                      and subscribers receive messages
                                      from those topics.

  Asynchronous Processing             Processing work separately from the
                                      immediate request so the requester
                                      does not have to wait for
                                      completion.

  Event-Driven Architecture           An architecture where components
                                      communicate and react to events
                                      rather than relying only on direct
                                      requests.

  Eventual Consistency                A consistency model where replicas
                                      may temporarily differ but converge
                                      to the same state over time.

  CAP Theorem                         A distributed-system principle
                                      stating that during a network
                                      partition, a system must trade off
                                      between consistency and
                                      availability.

  Distributed System                  A system whose components run
                                      across multiple machines or
                                      processes and communicate over a
                                      network.

  Security                            The practice of protecting
                                      software, systems, and data from
                                      unauthorized access, misuse, and
                                      attacks.

  Hashing                             A one-way transformation that
                                      converts data into a fixed-size
                                      value, commonly used for securely
                                      storing passwords.

  Encryption                          Transforming data into a protected
                                      form that can be reversed using the
                                      appropriate key.

  HTTPS                               HTTP transmitted over TLS to
                                      provide encrypted and authenticated
                                      communication.

  TLS                                 A cryptographic protocol used to
                                      secure communication over networks.

  XSS (Cross-Site Scripting)          A vulnerability where
                                      attacker-controlled scripts are
                                      injected into content viewed by
                                      other users.

  CSRF (Cross-Site Request Forgery)   An attack where a user's browser is
                                      tricked into sending an unwanted
                                      authenticated request.

  SQL Injection                       An attack where malicious input
                                      manipulates a SQL query.

  NoSQL Injection                     An attack where malicious input
                                      manipulates a NoSQL query or
                                      database operation.

  Input Validation                    Checking whether incoming data
                                      meets expected rules and formats
                                      before processing it.

  Sanitization                        Cleaning or transforming input to
                                      remove or neutralize potentially
                                      dangerous content.

  Secret                              Sensitive information such as API
                                      keys, passwords, or private
                                      credentials that should not be
                                      exposed.

  Environment Variable                A configuration value supplied
                                      through the runtime environment
                                      rather than hardcoded into
                                      application source code.

  Git                                 A distributed version control
                                      system used to track changes to
                                      source code.

  Repository                          A Git-managed project containing
                                      source code, history, and related
                                      files.

  Branch                              An independent line of development
                                      within a Git repository.

  Commit                              A recorded snapshot of changes in a
                                      Git repository.

  Pull Request                        A request to review and merge
                                      changes from one branch into
                                      another.

  Code Review                         The process of examining code
                                      changes for correctness, quality,
                                      security, and maintainability.

  Merge Conflict                      A situation where Git cannot
                                      automatically combine conflicting
                                      changes.

  Rebase                              A Git operation that reapplies
                                      commits onto a different base
                                      commit or branch.

  Tag                                 A named reference to a specific Git
                                      commit, commonly used to mark
                                      releases.

  Semantic Versioning                 A versioning convention using
                                      MAJOR.MINOR.PATCH to communicate
                                      compatibility and changes.

  Agile                               A software development approach
                                      that emphasizes iterative
                                      development, feedback, and
                                      adaptation.

  Scrum                               An Agile framework that organizes
                                      work into iterations called sprints
                                      with defined roles and ceremonies.

  Sprint                              A fixed development period during
                                      which a team works on a selected
                                      set of tasks.

  Backlog                             An ordered list of work items,
                                      features, bugs, and improvements
                                      that may be implemented.

  Epic                                A large body of work that can be
                                      divided into smaller user stories
                                      or tasks.

  Task                                A specific piece of work required
                                      to complete a feature or larger
                                      work item.

  Bug                                 A defect that causes software to
                                      behave differently from its
                                      intended behavior.

  Ticket                              A tracked work item representing a
                                      feature, bug, task, or request.

  Milestone                           A significant point or target in a
                                      project's development timeline.

  Release                             A specific version of software made
                                      available to users or another
                                      environment.

  Changelog                           A record of notable changes made
                                      across software releases.

  Documentation                       Written information explaining how
                                      a system works, how to use it, or
                                      how to maintain it.

  README                              A project document that usually
                                      explains what the project is, how
                                      to install it, how to use it, and
                                      other important information.

  Architecture Diagram                A visual representation of major
                                      system components and how they
                                      communicate.

  Sequence Diagram                    A diagram showing how components
                                      interact with each other over time
                                      in a particular workflow.

  Flowchart                           A diagram that represents the steps
                                      and decision flow of a process.

  ADR (Architecture Decision Record)  A short document that records an
                                      important architecture decision,
                                      its context, alternatives, and
                                      reasoning.

  Codebase                            The complete collection of source
                                      code that makes up a software
                                      project.

  Refactoring                         Improving the internal structure of
                                      code without intentionally changing
                                      its external behavior.

  Clean Code                          Code written to be readable,
                                      understandable, maintainable, and
                                      easy to change.

  DRY (Don't Repeat Yourself)         A principle that encourages
                                      avoiding unnecessary duplication of
                                      logic or knowledge.

  KISS (Keep It Simple)               A principle that favors simple
                                      solutions over unnecessary
                                      complexity.

  YAGNI (You Aren't Gonna Need It)    A principle that discourages
                                      implementing functionality before
                                      it is actually needed.

  Separation of Concerns              Organizing software so different
                                      responsibilities are handled by
                                      different components or modules.

  Observability                       The ability to understand a
                                      system's internal state through
                                      outputs such as logs, metrics, and
                                      traces.

  Logging                             Recording application events,
                                      errors, and useful diagnostic
                                      information.

  Metrics                             Numerical measurements used to
                                      understand system behavior and
                                      performance.

  Monitoring                          Continuously observing systems and
                                      infrastructure to detect problems
                                      and performance changes.

  Distributed Tracing                 Tracking a request as it travels
                                      through multiple services in a
                                      distributed system.

  Alerting                            Automatically notifying developers
                                      or operators when defined system
                                      conditions or thresholds are
                                      reached.

  SLA (Service Level Agreement)       A formal agreement defining
                                      expected service levels between a
                                      provider and customer.

  SLO (Service Level Objective)       A specific reliability or
                                      performance target used to measure
                                      whether a service meets
                                      expectations.

  SLA vs SLO                          An SLA is a formal agreement, while
                                      an SLO is a measurable target used
                                      to define expected service
                                      performance.

  RTO (Recovery Time Objective)       The maximum acceptable time
                                      required to restore a service after
                                      a disruption.

  RPO (Recovery Point Objective)      The maximum acceptable amount of
                                      data loss measured in time.

  Disaster Recovery                   The processes and infrastructure
                                      used to restore systems after major
                                      failures or disasters.

  Backup                              A separate copy of data that can be
                                      used to restore information after
                                      loss or corruption.

  High Availability                   Designing systems so they remain
                                      operational with minimal downtime
                                      despite failures.

  Production                          The live environment used by real
                                      users.

  Staging                             An environment designed to closely
                                      resemble production for final
                                      testing before release.

  Development Environment             An environment used by developers
                                      to build and test changes during
                                      development.

  Environment Parity                  Keeping development, staging, and
                                      production environments
                                      sufficiently similar to reduce
                                      environment-specific failures.

  Feature Flag                        A mechanism that allows
                                      functionality to be enabled or
                                      disabled without deploying a new
                                      code version.

  Blue-Green Deployment               A deployment strategy that
                                      maintains two environments and
                                      switches traffic from the old
                                      version to the new version.

  Canary Deployment                   A deployment strategy that
                                      gradually releases a new version to
                                      a small percentage of users before
                                      expanding it.

  Rollback                            Returning an application or
                                      deployment to a previous known-good
                                      version.

  Build                               The process of converting source
                                      code into a runnable or deployable
                                      form.

  Artifact                            A file or package produced by a
                                      build process, such as a compiled
                                      application, Docker image, or
                                      package.

  Package Manager                     A tool that installs, updates, and
                                      manages software dependencies.

  Dependency                          An external library, package,
                                      service, or component that an
                                      application relies on.

  Semantic API Compatibility          The ability of an API change to
                                      preserve the expected behavior of
                                      existing clients.

  Backward Compatibility              The ability of a newer version to
                                      continue working with older
                                      clients, data, or interfaces.

  Breaking Change                     A change that causes existing
                                      consumers or integrations to stop
                                      working without modification.

  POC (Proof of Concept)              A small experiment built to
                                      determine whether a technical idea
                                      is feasible.

  Prototype                           An early implementation used to
                                      explore or demonstrate an idea
                                      before building the final product.

  Spike                               A time-boxed investigation used to
                                      research an unknown technical
                                      problem or approach.

  Technical Design                    A detailed technical plan
                                      describing how a feature or system
                                      will be implemented.

  System Design                       The process of defining the
                                      architecture, components, data
                                      flow, interfaces, and
                                      infrastructure of a system.
  -----------------------------------------------------------------------
