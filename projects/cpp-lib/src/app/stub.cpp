#define DOCTEST_CONFIG_IMPLEMENT
#include "doctest/doctest.h"
#include <iostream>

int main(int argc, char* argv[])
{
	doctest::Context context;
    int res = context.run();
    if(context.shouldExit())
        return res;
    int client_stuff_return_code = 0; // Unit test library setup (app code in main function starts from here)
    
    std::cout << "Hello from stub app!" << "\n";

    return res + client_stuff_return_code; // Unit test library's final return
}

namespace testing
{
    TEST_CASE("method with x input returns false") {
        REQUIRE_FALSE(false);
        CHECK(false == false);

    }
    TEST_CASE("method with x input returns true") {
        REQUIRE(true);
        CHECK(true == true);
        WARN(false);
        WARN(true);
    }
}
