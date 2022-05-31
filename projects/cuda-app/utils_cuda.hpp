#pragma once

#include "bits/stdc++.h"

#include <cuda_runtime.h>
#include <cudnn.h>

// CUDA lib utilities
namespace utils_cuda
{
    void print_compute_capability();
}
// cuDNN  lib utilities
namespace utils_cudnn
{
	void create_handle();
}
// Thrust lib utilities
