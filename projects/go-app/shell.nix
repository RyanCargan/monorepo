let
  unstableTarball = fetchTarball https://github.com/NixOS/nixpkgs/archive/nixos-unstable.tar.gz;
  pkgs = import <nixpkgs> {}; 
  unstable = import unstableTarball {};

  # stdenvMinimal = unstable.stdenvNoCC.override {
  #   cc = null;
  #   preHook = "";
  #   allowedRequisites = null;
  #   initialPath = unstable.lib.filter
  #     (a: unstable.lib.hasPrefix "coreutils" a.name)
  #     unstable.stdenvNoCC.initialPath;
  #   extraNativeBuildInputs = [ ];
  # };

  shell = unstable.mkShell.override {
    stdenv = unstable.gcc10Stdenv;
    # stdenv = stdenvMinimal;
  };

in shell {
  name = "build-shell";
  nativeBuildInputs = [
    unstable.libcap
    unstable.gcc
    unstable.go
  ];
   shellHook = ''
  '';
}
