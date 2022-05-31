#include "utils_cuda.hpp"

using std::cout;
using std::endl;

namespace utils_cuda
{
    void print_compute_capability()
    {
        int num_GPUs;
        cudaGetDeviceCount(&num_GPUs);
        cout << "Found " << num_GPUs << " GPUs." << endl;
        cudaSetDevice(0);
        int device; 
        struct cudaDeviceProp devProp;
        cudaGetDevice(&device);
        cudaGetDeviceProperties(&devProp, device);
        cout
            << "Current compute capability:"
            << devProp.major
            << "."
            << devProp.minor
        << endl;
    }
}
namespace utils_cudnn
{
	void create_handle()
	{
		cudnnHandle_t handle_;
		cudnnCreate(&handle_);
		cout << "Created cuDNN handle" << endl;
	}
}
