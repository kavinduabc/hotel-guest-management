
  //** create the api function with email validation  */
import pb from "@/lib/pocketbase";

await pb.admins.authWithPassword("piumalranepura@gmail.com", "@Kavi123@@");

export async function createGuest(data : {
    first_name : string ;
    last_name : string;
    email : string;
    phone? : string;
    address? : string;
    date_of_birth?: string;
}) {

    try {

        const existing = await pb.collection("guests").getFullList({
            filter : `email = "${data.email}"`
        });

        if(existing.length > 0){
            throw new Error("Email already exists. plase use a different email.");
        }
        
        const record = await pb.collection("guests").create(data);
        console.log("Guest added successfully");
        return record;
    } catch (err) {

        console.error("Failed to create guest:",err);
        throw err;
        
    }
    
}