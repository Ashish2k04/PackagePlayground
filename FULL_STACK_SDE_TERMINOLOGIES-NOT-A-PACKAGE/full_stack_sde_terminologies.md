# Full Stack SDE Terminologies

| Term | Meaning |
|---|---|
| **SRS** | Software Requirements Specification. A document that defines the functional and non-functional requirements of a software system. |
| **PRD** | Product Requirements Document. A document describing what a product should do, who it is for, and what features it should provide. |
| **BRD** | Business Requirements Document. A document describing the business goals, requirements, and expected outcomes of a project. |
| **MVP** | Minimum Viable Product. The smallest useful version of a product that can be released to validate the core idea. |
| **Functional Requirement** | Describes what the system must do, such as allowing users to log in or place an order. |
| **Non-Functional Requirement** | Describes how the system should behave, such as performance, security, scalability, and reliability. |
| **User Story** | A short requirement written from the user's perspective, describing a desired action and its purpose. |
| **Acceptance Criteria** | Conditions that must be satisfied for a feature or user story to be considered complete. |
| **Scope** | Defines what is included and excluded from a project. |
| **Use Case** | Describes how a user or another system interacts with software to achieve a specific goal. |
| **ERD** | Entity Relationship Diagram. A diagram showing database entities and the relationships between them. |
| **Entity** | A distinct object or concept represented in a database, such as User, Product, or Order. |
| **Attribute** | A property belonging to an entity, such as a user's email or a product's price. |
| **Relationship** | A connection between database entities, such as one User having many Orders. |
| **Primary Key** | A column or set of columns that uniquely identifies each database record. |
| **Foreign Key** | A column that references a key in another table to establish a relationship. |
| **Composite Key** | A key made from multiple columns that together uniquely identify a record. |
| **Cardinality** | Defines how many records can participate in a relationship, such as one-to-one or one-to-many. |
| **Schema** | The structure that defines how data is organized and stored in a database. |
| **Normalization** | Organizing database data to reduce unnecessary duplication and improve consistency. |
| **Denormalization** | Intentionally duplicating some data to improve read performance or simplify queries. |
| **Database Index** | A data structure that helps a database find records faster. |
| **Database Transaction** | A group of database operations treated as one logical unit. |
| **ACID** | Properties of reliable database transactions: Atomicity, Consistency, Isolation, and Durability. |
| **CRUD** | The four basic data operations: Create, Read, Update, and Delete. |
| **MVC** | Model-View-Controller. An architectural pattern that separates data, presentation, and request-handling responsibilities. |
| **Model** | Represents and works with application data. |
| **View** | Presents information to the user. |
| **Controller** | Receives requests, coordinates application logic, and returns responses. |
| **Service Layer** | A layer that contains business logic and coordinates application operations. |
| **Repository Pattern** | Separates database access logic from the rest of the application. |
| **Layered Architecture** | Organizes an application into layers such as presentation, business logic, and data access. |
| **Monolith** | An application where major functionality is deployed as one application unit. |
| **Microservices** | An architecture where an application is divided into independently developed and deployed services. |
| **Modular Monolith** | A monolithic application internally divided into well-defined modules. |
| **Separation of Concerns** | Keeping different responsibilities in separate parts of a system. |
| **SOLID** | Five principles for designing maintainable and flexible object-oriented software. |
| **Design Pattern** | A reusable solution to a commonly occurring software design problem. |
| **Dependency Injection** | Providing an object's dependencies from outside instead of creating them internally. |
| **Coupling** | The degree to which one software component depends on another. |
| **Cohesion** | How closely related the responsibilities within a component are. |
| **Technical Debt** | Future cost created by choosing a quick or imperfect technical solution instead of a better long-term solution. |
| **API** | Application Programming Interface. A defined interface that allows software systems or components to communicate. |
| **REST** | An architectural style commonly used to design HTTP-based APIs around resources. |
| **REST API** | An API that follows REST principles and uses HTTP to expose and manipulate resources. |
| **Endpoint** | A specific API URL through which a client interacts with a server. |
| **HTTP** | The protocol used for communication between clients and servers on the web. |
| **HTTP Method** | An operation such as GET, POST, PUT, PATCH, or DELETE that indicates the intended action. |
| **Request** | Data sent from a client to a server. |
| **Response** | Data returned by a server to a client. |
| **HTTP Status Code** | A numeric code indicating the result of an HTTP request, such as 200, 404, or 500. |
| **Request Header** | Metadata sent with an HTTP request, such as authorization or content type. |
| **Request Body** | Data sent in the body of an HTTP request. |
| **Query Parameter** | A key-value parameter added to a URL for filtering, sorting, searching, or pagination. |
| **Path Parameter** | A variable value embedded in a URL path, usually identifying a specific resource. |
| **Middleware** | A function that runs during request processing and can inspect, modify, reject, or pass along a request. |
| **Authentication** | The process of verifying who a user or system is. |
| **Authorization** | The process of determining what an authenticated user or system is allowed to do. |
| **JWT** | JSON Web Token. A signed token format commonly used to carry claims between parties. |
| **Session** | Server-managed state used to remember information about a client's interaction with an application. |
| **Cookie** | Small data stored by a browser and sent with requests to the associated website. |
| **CORS** | A browser security mechanism controlling which origins can access resources across origins. |
| **Rate Limiting** | Restricting how many requests a client can make within a defined period. |
| **Idempotency** | A property where repeating an operation produces the same intended final state. |
| **Pagination** | Dividing a large set of results into smaller pages. |
| **Webhook** | A mechanism where one system sends an HTTP request when a specific event occurs. |
| **API Versioning** | Maintaining different API versions so changes do not unexpectedly break existing clients. |
| **API Contract** | The agreed structure and behavior of an API, including inputs, outputs, errors, and status codes. |
| **OpenAPI** | A standard specification for describing HTTP APIs in a machine-readable format. |
| **Unit Test** | A test that verifies a small isolated unit of code, such as a function. |
| **Integration Test** | A test that verifies multiple components work correctly together. |
| **End-to-End Test** | A test that verifies a complete workflow from beginning to end. |
| **Regression Testing** | Testing existing functionality after changes to ensure old behavior still works. |
| **Test Case** | A defined set of inputs, actions, conditions, and expected results used for testing. |
| **Mock** | A controlled replacement for a real dependency used during testing. |
| **Test Coverage** | A measurement of how much code or behavior is exercised by tests. |
| **CI** | Continuous Integration. Automatically building and testing code as changes are integrated. |
| **CD** | Continuous Delivery or Deployment. Automating the process of preparing or deploying software releases. |
| **Docker** | A platform for packaging applications and dependencies into portable containers. |
| **Container** | An isolated runtime environment containing an application and its dependencies. |
| **Docker Image** | A packaged template used to create containers. |
| **Reverse Proxy** | A server that receives client requests and forwards them to backend services. |
| **Nginx** | A web server and reverse proxy commonly used for routing, static files, and load balancing. |
| **Load Balancer** | A system that distributes incoming traffic across multiple servers or service instances. |
| **CDN** | Content Delivery Network. A distributed network that delivers cached content closer to users. |
| **Horizontal Scaling** | Increasing capacity by adding more server instances. |
| **Vertical Scaling** | Increasing CPU, memory, storage, or other resources of an existing server. |
| **Auto Scaling** | Automatically increasing or decreasing infrastructure capacity based on demand. |
| **Availability** | The degree to which a system remains accessible and operational when needed. |
| **Reliability** | The ability of a system to consistently perform correctly over time. |
| **Fault Tolerance** | The ability of a system to continue operating when some components fail. |
| **Latency** | The time taken for an operation or request to receive a response. |
| **Throughput** | The amount of work a system can process during a given period. |
| **Scalability** | The ability of a system to handle increasing workload by adding or adjusting resources. |
| **Caching** | Temporarily storing frequently accessed data so future requests can be served faster. |
| **Cache Invalidation** | Removing or updating cached data when the underlying data changes. |
| **Redis** | An in-memory data store commonly used for caching, sessions, queues, and fast-access workloads. |
| **Database Replication** | Maintaining copies of database data on multiple database servers. |
| **Read Replica** | A database replica primarily used to handle read operations and reduce load on a primary database. |
| **Database Sharding** | Splitting data across multiple database servers or partitions to distribute workload. |
| **Message Queue** | A system that stores messages until consumers are ready to process them asynchronously. |
| **Message Broker** | Infrastructure that receives, routes, stores, and delivers messages between producers and consumers. |
| **Pub/Sub** | A messaging pattern where publishers send messages to topics and subscribers receive them. |
| **Asynchronous Processing** | Processing work separately from the immediate request so the requester does not have to wait. |
| **Event-Driven Architecture** | An architecture where components communicate and react to events. |
| **Eventual Consistency** | A consistency model where replicas may temporarily differ but converge over time. |
| **CAP Theorem** | A distributed-system principle describing the trade-off between consistency and availability during a network partition. |
| **Distributed System** | A system whose components run across multiple machines or processes and communicate over a network. |
| **Hashing** | A one-way transformation that converts data into a fixed-size value, commonly used for password storage. |
| **Encryption** | Transforming data into a protected form that can be reversed using the appropriate key. |
| **HTTPS** | HTTP secured with TLS to provide encrypted and authenticated communication. |
| **TLS** | A cryptographic protocol used to secure communication over networks. |
| **XSS** | Cross-Site Scripting. A vulnerability involving attacker-controlled scripts being injected into content viewed by users. |
| **CSRF** | Cross-Site Request Forgery. An attack that tricks a user's browser into sending an unwanted authenticated request. |
| **SQL Injection** | An attack where malicious input manipulates a SQL query. |
| **NoSQL Injection** | An attack where malicious input manipulates a NoSQL query or database operation. |
| **Input Validation** | Checking whether incoming data meets expected rules before processing it. |
| **Sanitization** | Cleaning or transforming input to remove or neutralize potentially dangerous content. |
| **Environment Variable** | A configuration value supplied through the runtime environment rather than hardcoded in source code. |
| **Git** | A distributed version control system used to track source code changes. |
| **Repository** | A Git-managed project containing source code, history, and related files. |
| **Branch** | An independent line of development within a Git repository. |
| **Commit** | A recorded snapshot of changes in a Git repository. |
| **Pull Request** | A request to review and merge changes from one branch into another. |
| **Code Review** | The process of examining code changes for correctness, quality, security, and maintainability. |
| **Merge Conflict** | A situation where Git cannot automatically combine conflicting changes. |
| **Rebase** | A Git operation that reapplies commits onto a different base commit or branch. |
| **Tag** | A named reference to a specific Git commit, commonly used to mark releases. |
| **Semantic Versioning** | A versioning convention using MAJOR.MINOR.PATCH to communicate compatibility and changes. |
| **Agile** | A software development approach emphasizing iterative development, feedback, and adaptation. |
| **Scrum** | An Agile framework that organizes work into iterations called sprints. |
| **Sprint** | A fixed development period during which a team works on selected tasks. |
| **Backlog** | An ordered list of features, bugs, tasks, and improvements that may be implemented. |
| **Epic** | A large body of work that can be divided into smaller user stories or tasks. |
| **Task** | A specific piece of work required to complete a feature or larger work item. |
| **Bug** | A defect that causes software to behave differently from its intended behavior. |
| **Ticket** | A tracked work item representing a feature, bug, task, or request. |
| **Milestone** | A significant point or target in a project's development timeline. |
| **Release** | A specific version of software made available to users or another environment. |
| **Changelog** | A record of notable changes made across software releases. |
| **README** | A project document explaining what the project is, how to install it, how to use it, and other important information. |
| **Architecture Diagram** | A visual representation of major system components and how they communicate. |
| **Sequence Diagram** | A diagram showing how components interact with each other over time in a workflow. |
| **Flowchart** | A diagram representing the steps and decision flow of a process. |
| **ADR** | Architecture Decision Record. A document recording an important architecture decision, its context, alternatives, and reasoning. |
| **Refactoring** | Improving the internal structure of code without intentionally changing its external behavior. |
| **Clean Code** | Code written to be readable, understandable, maintainable, and easy to change. |
| **DRY** | Don't Repeat Yourself. A principle that discourages unnecessary duplication of logic or knowledge. |
| **KISS** | Keep It Simple. A principle that favors simple solutions over unnecessary complexity. |
| **YAGNI** | You Aren't Gonna Need It. A principle that discourages implementing functionality before it is actually needed. |
| **Observability** | The ability to understand a system's internal state through logs, metrics, and traces. |
| **Logging** | Recording application events, errors, and useful diagnostic information. |
| **Metrics** | Numerical measurements used to understand system behavior and performance. |
| **Monitoring** | Continuously observing systems and infrastructure to detect problems and performance changes. |
| **Distributed Tracing** | Tracking a request as it travels through multiple services in a distributed system. |
| **Alerting** | Automatically notifying developers or operators when defined system conditions are reached. |
| **SLA** | Service Level Agreement. A formal agreement defining expected service levels between a provider and customer. |
| **SLO** | Service Level Objective. A measurable reliability or performance target for a service. |
| **RTO** | Recovery Time Objective. The maximum acceptable time required to restore a service after a disruption. |
| **RPO** | Recovery Point Objective. The maximum acceptable amount of data loss measured in time. |
| **Disaster Recovery** | Processes and infrastructure used to restore systems after major failures or disasters. |
| **Backup** | A separate copy of data used to restore information after loss or corruption. |
| **High Availability** | Designing systems to remain operational with minimal downtime despite failures. |
| **Production** | The live environment used by real users. |
| **Staging** | An environment designed to resemble production for final testing before release. |
| **Development Environment** | An environment used by developers to build and test changes. |
| **Feature Flag** | A mechanism that allows functionality to be enabled or disabled without deploying a new code version. |
| **Blue-Green Deployment** | A deployment strategy using two environments and switching traffic from the old version to the new version. |
| **Canary Deployment** | A deployment strategy that gradually releases a new version to a small percentage of users before wider release. |
| **Rollback** | Returning an application or deployment to a previous known-good version. |
| **Build** | The process of converting source code into a runnable or deployable form. |
| **Dependency** | An external library, package, service, or component that an application relies on. |
| **Backward Compatibility** | The ability of a newer version to continue working with older clients, data, or interfaces. |
| **Breaking Change** | A change that causes existing consumers or integrations to stop working without modification. |
| **POC** | Proof of Concept. A small experiment built to determine whether a technical idea is feasible. |
| **Prototype** | An early implementation used to explore or demonstrate an idea before building the final product. |
| **Spike** | A time-boxed investigation used to research an unknown technical problem or approach. |
| **System Design** | The process of defining the architecture, components, data flow, interfaces, and infrastructure of a system. |
| **Technical Design** | A detailed technical plan describing how a feature or system will be implemented. |
