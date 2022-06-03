#define DOCTEST_CONFIG_IMPLEMENT
#include <doctest/doctest.h>

// #include <cuda_runtime.h>
// #include <cudnn.h>

// #include "bits/stdc++.h"
#include "utils.hpp"
#include "utils_cuda.hpp"

// #warning "Hello from your main warning..."

// Minimal example for applying sigmoid activation on a tensor with cuDNN.

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
    using std::endl;
    using std::thread;

    unsigned int n = thread::hardware_concurrency();
    cout << n << " concurrent threads are supported.\n";

    utils_cuda::print_compute_capability();

    // Unit test boilerplate
    return (res + client_stuff_return_code);
}

namespace tests
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
