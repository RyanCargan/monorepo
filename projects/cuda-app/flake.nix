{
  description = "Flake for Nix-based C++ project setup.";
  nixConfig.bash-prompt = "\[nix-develop\]$ ";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/22.05";

    utils.url = "github:numtide/flake-utils";
    utils.inputs.nixpkgs.follows = "nixpkgs";
  };

  outputs = { self, nixpkgs, ... }@inputs: inputs.utils.lib.eachSystem [
    "x86_64-linux" "i686-linux" "aarch64-linux" "x86_64-darwin"
  ] (system: let pkgs = import nixpkgs {
                   inherit system;
                   config = { allowUnfree = true; };
                 };
             in {
               devShell = pkgs.mkShell rec {
                 name = "cuda-app-c++-project";

                 packages = with pkgs; [
                    # Development Tools
                    doctest # Minimalist C++ unit testing library
                    cudaPackages_11_2.cudatoolkit # Nvidia GPUGPU library
                    cudaPackages_11_2.cudnn # Neural network library for CUDA
                 ];

                shellHook = let
                  # cupath = pkgs.cudaPackages_11_2.cudatoolkit;
                  # cudnnpath = pkgs.cudaPackages_11_2.cudnn;
                in ''
                '';
               };
             });
}
