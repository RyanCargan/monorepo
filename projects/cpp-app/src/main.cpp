#include <iostream>
#include <chrono>
#include <ctime>
#include <string>

using namespace std;

string asString (const chrono::system_clock::time_point& tp)
{
  time_t t = chrono::system_clock::to_time_t(tp);
  string ts = ctime(&t);
  ts.resize(ts.size()-1);
  return ts;
}

int main(int argc, char* argv[])
{
  cout << "You have entered " << argc << " arguments:" << "\n";
  for (int i = 0; i < argc; ++i)
    cout << argv[i] << "\n";
  
  chrono::system_clock::time_point time_epoch, time_now, time_min, time_max;
  cout << "epoch: " << asString(time_epoch) << "\n";

  time_now = chrono::system_clock::now();
  cout << "now: " << asString(time_now) << "\n";

  time_min = chrono::system_clock::time_point::min();
  cout << "min: " << asString(time_min) << "\n";

  time_max = chrono::system_clock::time_point::max();
  cout << "max: " << asString(time_max) << "\n";

  chrono::hours aDay(24);
  chrono::minutes min = aDay;
  
  cout << min.count() << " minutes" << "\n";

  cout << aDay.count() << " hours" << "\n";
}
