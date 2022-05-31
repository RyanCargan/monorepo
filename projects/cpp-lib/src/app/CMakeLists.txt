cmake_minimum_required (VERSION 3.21) 
project (
	timehackapp
	VERSION 0.1.0
	DESCRIPTION "Time tracking & management app"
	LANGUAGES CXX)

#set(DOCTEST_INCLUDE "$ENV{DOCTEST_PATH}/include/doctest")
#set(LIB_DIR "../lib")

add_executable(timehackapp
	main.cpp)
target_compile_features(timehackapp PRIVATE
	cxx_std_20)
#target_include_directories(TimeHackApp PRIVATE LIB_DIR)
target_link_libraries (timehackapp PRIVATE
	timehack
	doctest::doctest)

add_executable(timehackstub
	stub.cpp)
target_compile_features(timehackstub PRIVATE
	cxx_std_20)
target_link_libraries (timehackapp PRIVATE
	doctest::doctest)
#target_include_directories(timehackstub PRIVATE)

add_executable(app_test
	app_test.cpp)
target_compile_features(app_test PRIVATE
	cxx_std_20)
target_link_libraries(app_test PRIVATE
	doctest::doctest)

install(TARGETS
	timehackapp
	timehackstub
	app_test
DESTINATION bin)
