cd server
rm -rf build
cd ..
cd react 
yarn build
mv ./build ../server/
