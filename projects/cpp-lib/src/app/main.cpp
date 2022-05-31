#include <iostream>
#include <stdio.h>
#include "../lib/timehack.hpp"

int main(int argc, char* argv[])
{
	std::cout << "Hello from main app!" << "\n";

    double d = 100;
    printf("sqrt(%3.0f)=%2.0f\n",d,calcSqrt(d));
}
