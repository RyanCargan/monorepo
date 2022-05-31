cd build/install/bin &&
for file in *
do
  ./$file &&
  read -n 1 -p Continue?;
done
