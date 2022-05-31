cmake_minimum_required (VERSION 3.21) 
project (
	timehack
	VERSION 0.1.0
	DESCRIPTION "Time tracking & management lib"
	LANGUAGES CXX)

#set(DOCTEST_INCLUDE "$ENV{DOCTEST_PATH}/include/doctest")

add_library(timehack SHARED
	timehack.cpp)
target_compile_features(timehack PRIVATE
	cxx_std_20)
target_link_libraries(timehack PRIVATE
	doctest::doctest)
#target_include_directories(TimeHackLib PUBLIC DOCTEST_INCLUDE)

add_executable(lib_test
	lib_test.cpp)
target_compile_features(lib_test PRIVATE
	cxx_std_20)
target_link_libraries(lib_test PRIVATE
	doctest::doctest)

install(TARGETS
	timehack
DESTINATION lib)
install(FILES
	timehack.hpp
DESTINATION include)
install(TARGETS
	lib_test
DESTINATION bin)
