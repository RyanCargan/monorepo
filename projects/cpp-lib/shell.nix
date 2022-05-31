with import <nixpkgs> {};

mkShell {
  nativeBuildInputs = [
    doctest # Minimalist C++ unit testing library
  ];
  # buildInputs = [ pkg-config ];
  
  # CMake relies on {pkgname}_DIR format for environment variables
  shellHook = ''
  export doctest_DIR="${doctest}/lib/cmake/doctest"
  '';
}
