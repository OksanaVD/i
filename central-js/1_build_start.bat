rem call npm install -g grunt-cli
rem call npm install -g bower
rem call npm install -g grunt

call npm install
cd client
call npm install
call bower install
cd ..

call 2_build.bat
call 3_start.bat