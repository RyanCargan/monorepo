cmake_minimum_required (VERSION 3.21) 
project (
	timehackmeta
	VERSION 0.1.0
	DESCRIPTION "Time tracking & management app project"
	LANGUAGES CXX)

find_package(doctest REQUIRED)
#[[set(DOCTEST_INCLUDE "$ENV{DOCTEST_PATH}/include/doctest")]]

set(CMAKE_CXX_FLAGS_RELEASE "${CMAKE_CXX_FLAGS_RELEASE} -DDOCTEST_CONFIG_DISABLE")

set(LIB_DIR "./src/lib")
set(APP_DIR "./src/app")
add_subdirectory(${LIB_DIR})
add_subdirectory(${APP_DIR})

# install(TARGETS
# 			TimeHackApp
# 			TimeHackStub
# 			app_test
# 			lib_test
# 		DESTINATION bin)

#message( "EXT_LIB_DIR: " ${DOCTEST_INCLUDE} )
