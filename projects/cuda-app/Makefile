# Current dependencies: g++, nvcc

CC			= g++ 2>> log.json
NVCC		= nvcc

UTILS_LIB	= ./bin

CPPSTD		= 20

FLAGS		= -std=c++$(CPPSTD) -foptimize-sibling-calls -fcoroutines \
				-Ipch \
				-Wall -Wextra -Wpedantic \
				-Werror=return-type \
				-fdiagnostics-format=json

CARCH		= 64

# Pascal Architecture: compute/sm_60-62
# compute/sm_61: GTX 1080, GTX 1070, GTX 1060, GTX 1050, GTX 1030 (GP108), GT 1010 (GP108) Titan Xp, Tesla P40, Tesla P4, Discrete GPU on the NVIDIA Drive PX2
GARCH		= 61

NVFLAGS		= -m$(CARCH) -gencode arch=compute_$(GARCH),code=sm_$(GARCH)

ifeq ($(mode),release)
	FLAGS		+= -O2 -DDOCTEST_CONFIG_DISABLE
else ifeq ($(mode),debug)
	FLAGS 		+= -Og -g
else
	FLAGS 		+= -Og -g
endif

FILE_MAIN	= main
FILE_LIB	= utils
STATIC_LIB 	= utils_cuda

.PHONY: default all

default: all

all: app_object shared_lib_object shared_lib static_lib_object \
	link

.PHONY: prebuild
prebuild: dir stdc++.h.gch

.PHONY: dir
dir:
	mkdir -p bin asm pch/bits

.PHONY: app_object
app_object: bin/$(FILE_MAIN).o
bin/$(FILE_MAIN).o: $(FILE_MAIN).cpp
	$(CC) $(FLAGS) \
	-o bin/$(FILE_MAIN).o -c $(FILE_MAIN).cpp

.PHONY: shared_lib_object
lib_object: bin/$(FILE_LIB).o
bin/$(FILE_LIB).o: $(FILE_LIB).cpp
	$(CC) $(FLAGS) \
	-o bin/$(FILE_LIB).o -c -fPIC $(FILE_LIB).cpp

.PHONY: shared_lib
shared_lib: bin/lib$(FILE_LIB).so
bin/lib$(FILE_LIB).so: bin/$(FILE_LIB).o
	$(CC) $(FLAGS) -shared -o bin/lib$(FILE_LIB).so bin/$(FILE_LIB).o

.PHONY: static_lib_object
lib_object: bin/$(STATIC_LIB).o
bin/$(STATIC_LIB).o: $(STATIC_LIB).cpp
	$(NVCC) -ccbin $(CC) $(NVFLAGS) -dc \
	-o bin/$(STATIC_LIB).o -c $(STATIC_LIB).cpp

.PHONY: link
link: main
main: bin/$(FILE_MAIN).o bin/lib$(FILE_LIB).so bin/$(STATIC_LIB).o
	$(NVCC) -ccbin $(CC) $(NVFLAGS) \
	-o bin/$(FILE_MAIN) bin/$(FILE_MAIN).o bin/$(STATIC_LIB).o \
	-L$(UTILS_LIB) \
	-lstdc++ -lm -lcudnn -lcublas -lcublasLt \
	-lutils -Xlinker=-rpath,'$$ORIGIN'

# [--linker-options/-Xlinker] is the equivalent of g++'s [-Wl] for nvcc
# [-rpath,'$$ORIGIN'] allows an executable or library to link to dependencies located in whatever its 'current' directory during runtime
# [-Xcompiler -fPIC] passes [-fPIC] to g++

.PHONY: clean
clean:
	rm bin/*

.PHONY: wipe
wipe:
	echo "" > log.json

.PHONY: run
run:
	./bin/main

stdc++.h.gch: stdc++.h
	$(CC) -O2 -std=c++$(CPPSTD) -pedantic-errors \
	-o pch/bits/stdc++.h.gch -c stdc++.h
