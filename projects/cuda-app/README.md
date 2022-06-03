# Systems Programming Testbed

## To-Do

- Create a toy rendering pipeline (with the Thrust API for CUDA) for future extension and experimentation using the parallel _pipeline (pipes & filters)_ pattern
- Get a proof-of-concept still image render of an import made using the assimp library
- Use _pure_ builds with flakes to avoid reliance on implicit dependencies for workspace to function (include everything explicitly inside flake.nix)

## Current Issues

- Either VS Code or the `ccls` language server has issues hooking up with direnv and nix-shell or nix develop when a .cpp file is open as the editor starts (opening files after opening the folder results in both warnings and ctrl + click working correctly)

- Closing all files before closing the editor lets it re-open the most recent folder correctly without the above glitch

- Getting a tarball for nix that matches the current system for a shell.nix file seems to be more involved than just using `inherit` in a flake.nix file

- Currently just using the system's flake.lock for reference for a manual copy & paste

  ```json
  "nixpkgs_2": {
    "locked": {
      "lastModified": 1653920503,
      "narHash": "sha256-BBeCZwZImtjP3oYy4WogkQYy5OxNyfNciVSc1AfZgLQ=",
      "owner": "NixOS",
      "repo": "nixpkgs",
      "rev": "a634c8f6c1fbf9b9730e01764999666f3436f10a",
      "type": "github"
    },
    "original": {
      "owner": "NixOS",
      "ref": "nixos-22.05",
      "repo": "nixpkgs",
      "type": "github"
    }
  }
  ```

- Leaving the shell.nix file in its un-updated state for now (too tedious to keep in sync with flake.nix manually)

## 3rd Party Libraries Used

- CUDA - GPGPU API
- Thrust - Higher-level abstraction for CUDA
- cuDNN - Dlib dependency
- doctest - Unit testing
- Tracy - Profiling
- Dlib - Clean C++ ML API
- Boost - Misc utils
- STL - Set of official C++ template classes for common tasks
  - Using <bits/stdc++.h> with pre-compiled headers

## Tools Used

- GCC
- Valgrind
- VS Code
- Nsight

## References
