echo "Loading shopping cart db...."
mongo --quiet --eval '
    db = db.getSiblingDB("users_db");
    db.users.insertMany(
    [
     {"name" : "Roxy", "age"  : 21, "designation":"Software Engineer"},
     {"name" : "Drake", "age"  : 25, "designation":"Software Tester"},
     {"name" : "Justin", "age"  : 28, "designation":"DevOps Engineer"},
     {"name" : "Ron", "age"  : 32, "designation":"Prject Manager"},
     {"name" : "Frank", "age"  : 22, "designation":"Technical Support Engineer"}
     ]);'
echo "DB Loaded successfully ✅"
