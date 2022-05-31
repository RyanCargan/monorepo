with import <nixpkgs> {};

mkShell {
  nativeBuildInputs = [
    doctest # Minimalist C++ unit testing library
    cudatoolkit_11_2
    cudnn_cudatoolkit_11_2
  ];
  shellHook = ''
  export CUDA_PATH="${cudatoolkit_11_2}"
  export CUDNN_PATH="${cudnn_cudatoolkit_11_2}"
  '';
}
