#include <iostream>
#include <chrono>
#include <string>
#include <typeinfo>

using namespace std::chrono;
// using days = duration<int, std::ratio_multiply<std::ratio<24>, hours::period>>;
// using days = duration<int, ratio<86400>>; // same thing

template <typename T>
void print_time(T x)
{
  std::string unit = "";

  std::cout << typeid(x).name() << '\n';
  std::cout << x.count() << unit << "\n";
}

void process_args(int argc, char* argv[])
{
  std::cout
    << "You have entered "
    << argc << " arguments:" << "\n";
  
  for (int i = 0; i < argc; ++i)
    std::cout << argv[i] << "\n";
}

int main(int argc, char* argv[])
{
  process_args(argc, argv);
  
  auto x = 3s;

  print_time(x);
}
