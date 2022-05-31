# Current Projects

## C++

### Timekeeper Library

- Tech & techniques used:
  - doctest for unit testing
  - Tracy for profiling
  - Valgrind & GDB for debugging
  - \<chrono\> from C++ standard library
  - algorithms involving modular arithmetic
  - CMake (meta) build system
  - Emscripten & Embind for porting to WebAssembly

### CUDA Testbed

- Tech & techniques used:
  - doctest for unit testing
  - Tracy for profiling
  - Valgrind & GDB for debugging
  - Makefile build system
  - mix of single-threaded & multi-threaded standard C++ with massively parallel CUDA code
  - parallel versions of some common algorithms from coding challenges
  - abstract data types
  - generic programming paradigm
    - type deduction (type inference) with 'auto' keyword
    - templates (allowing compile-time polymorphism)
    - variadic templates (allowing templates to have a variable number of parameters)
    - concepts (allowing template conditions)
  - coroutines (experimental C++20 concurrency feature)
  - C++11 thread features
  - recursion with tail-call optimization for some algorithms
  - Netwide x86_64 assembly
  - Composable node-based data structures (linked lists, trees & graphs)

## Go

### REST API

- Tech & techniques used:
  - Makefile build system
  - multiple auth strategies (sessions, username with pass, email with magic link & OAuth)
  - sqlx extension package for database/sql from Go's standard library
  - PostgreSQL for databse
    - PostGIS extension for geospatial database queries
    - TimescaleDB extension for time-series data manipulation
    - pg_stat_statements built-in extension for database profiling
    - postgres_fdw built-in extension for cross-server database operations
  - NixOS for hosted server
  - hoppscotch.io for API testing
  - virtual private server setup & automation
    - GitHub Actions for REST calls to iniated automatic pulls
    - Supervisor Python package for process management
    - Bash scripts with nix-shell for some automation needs
    - scp command for quick file transfers
      - e.g. scp file.txt user@address:~/workspace
    - SSH tunnelling script for forwarding local ports to server for public access

## JavaScript

### Blog

- Tech & techniques used:
  - PM2 for process management
  - MDX for JSX embedded in markup
  - Vite for SCSS transpiling, SSR & file-based routing
  - pnpm for package managment
  - NixOS for hosted server

### Chromium Browser Extension

- Tech & techniques used:
  - Vite for bundling

## TypeScript

### Utilities Library for Chrome Puppeteer

- Tech & techniques used:
  - Vite & esbuild for transpiling (20~30x faster than tsc)
  - tsc for static analysis &  type checking
