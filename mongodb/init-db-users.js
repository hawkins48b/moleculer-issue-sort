// create users collection
db.createCollection("users");
// create text index for textual search
db.users.createIndex({
	username: "text",
	name: "text"
},
{
	weights: {
		name: 2,
		username: 1
	}
}
);
