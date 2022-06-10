# Required dependencies: g++, nvcc, ccache
# Optional dependencies: nix, direnv

CCC			= ccache g++ 2>> log.json
CC			= g++ 2>> log.json
NVCC		= nvcc

UTILS_LIB	= ./bin

CPPSTD		= 20

FLAGS		= -std=c++$(CPPSTD) -foptimize-sibling-calls -fcoroutines \
				-Ipch \
				-Wall -Wextra -Wpedantic \
				-Werror=return-type \
				-fdiagnostics-color=always

# [-fdiagnostics-format=json] when you need logs

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

MAIN	= main
SHARED	= utils
STATIC 	= utils_cuda

.PHONY: default all
default: all
all: app_object link

.PHONY: app_object
app_object: bin/$(MAIN).o
bin/$(MAIN).o: $(MAIN).cpp
	$(CCC) $(FLAGS) \
	-o bin/$(MAIN).o -c $(MAIN).cpp

.PHONY: link
link: main
main: bin/$(MAIN).o
	$(NVCC) $(NVFLAGS) \
	-o bin/$(MAIN) bin/$(MAIN).o \
	-lstdc++ -lcuda \
 	-laf -lforge

.PHONY: clean
clean:
	rm bin/*

.PHONY: run
run:
	./bin/main
