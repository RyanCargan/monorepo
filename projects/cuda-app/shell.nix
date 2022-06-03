let
  nixpkgs = import (builtins.fetchTarball {
    name = "nixos-22.05";
    url =
      "https://github.com/nixos/nixpkgs/archive/a634c8f6c1fbf9b9730e01764999666f3436f10a.tar.gz";
    sha256 = "1d40v43x972li5fg7jadxkj341li41mf2cl6vv7xi6j80rkq45q4";
  }) { };

in nixpkgs.mkShell {
  nativeBuildInputs = [
    nixpkgs.doctest # Minimalist C++ unit testing library
    nixpkgs.cudaPackages_11_2.cudatoolkit
    nixpkgs.cudaPackages_11_2.cudnn
  ];
  shellHook = ''
  export CUDA_PATH="${nixpkgs.cudaPackages_11_2.cudatoolkit}"
  export CUDNN_PATH="${nixpkgs.cudaPackages_11_2.cudnn}"
  '';
}
