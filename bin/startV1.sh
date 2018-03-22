killall node mongod
/usr/bin/mongod --smallfiles &
sleep 5 
cd /home/ubuntu/node/vsMacClientSp
/usr/bin/node app.js &
sleep 5 
haraka -c ~/mail/haraka-outbound/  &
