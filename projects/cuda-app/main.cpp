#define DOCTEST_CONFIG_IMPLEMENT
#include <doctest/doctest.h>

// #include <cuda_runtime.h>
// #include <cudnn.h>

#include "bits/stdc++.h"
#include "utils.hpp"
#include "utils_cuda.hpp"

// #warning "Hello from your main warning..."

// TODO: Minimal example for applying sigmoid activation on a tensor with cuDNN.

// using namespace std;

int main(int argc, char **argv)
{    
    // Unit test boilerplate
    doctest::Context context;
    int res = context.run();
    if(context.shouldExit())
        return res;
    int client_stuff_return_code = 0;

    using std::cout;
    using std::thread;

    unsigned int n = thread::hardware_concurrency();
    cout << n << " concurrent \033[1;34mCPU\033[0m threads are supported.\n";

    utils_cuda::print_compute_capability();

    // Unit test boilerplate
    return (res + client_stuff_return_code);
}

namespace test_main
{
    TEST_CASE("testing the utils namespace") {
        CHECK(utils::Arithmetic::Add(1, 2) == 3);
    }
    TEST_CASE("testing the algo_utils namespace") {
        CHECK(utils::Arithmetic::Add(1, 2) == 3);
    }
    TEST_CASE("testing the data_utils namespace") {
        CHECK(utils::Arithmetic::Add(1, 2) == 3);
    }
}

namespace test_utils
{
}

namespace test_utils_cuda
{
}
