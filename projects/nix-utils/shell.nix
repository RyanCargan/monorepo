with import <nixpkgs> {};

mkShell {
  buildInputs = [
    doctest
  ];
  shellHook = ''
  export TEST_PATH="${doctest}"
  '';
}
