mkdir -p build &&
cd build &&
if [ $# -eq 0 ];
	then
    	var="Debug"
	else
		var="$1"
fi &&
cmake -DCMAKE_BUILD_TYPE="$var" -DCMAKE_INSTALL_PREFIX=./install -G "Ninja" ..
