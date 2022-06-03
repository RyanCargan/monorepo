#include "utils_cuda.hpp"

using std::cout;

namespace utils_cuda
{
    void print_compute_capability()
    {
        int num_GPUs;
        cudaGetDeviceCount(&num_GPUs);
        if (num_GPUs == 1)
            cout << "Found " << num_GPUs << " \033[1;32mGPU\033[0m." << "\n";
        else
            cout << "Found " << num_GPUs << " \033[1;32mGPUs\033[0m." << "\n";
        cudaSetDevice(0);
        int device; 
        struct cudaDeviceProp devProp;
        cudaGetDevice(&device);
        cudaGetDeviceProperties(&devProp, device);
        cout
            << "Current \033[1;32mGPU\033[0m compute capability: "
            << devProp.major
            << "."
            << devProp.minor
        << "\n";
    }
}
namespace utils_cudnn
{
	void create_handle()
	{
		cudnnHandle_t handle_;
		cudnnCreate(&handle_);
		cout << "Created cuDNN handle" << "\n";
	}
}
