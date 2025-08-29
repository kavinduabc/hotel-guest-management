
  //** create the api function with email validation  */
import pb from "@/lib/pocketbase";


await pb.admins.authWithPassword("piumalranepura@gmail.com", "@Kavi123@@");

// implement function for add guest

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
    } catch (error) {

        console.error("Failed to create guest:",error);
        throw error;
        
    }
    
}

//implement function for get all guests
export async function getGuest(){

    try {
        const record = await pb.collection("guests").getFullList();
        console.log("Get all users");
        return record;
    } catch (error) {
        console.error("faild to get all users:",error)
        throw error;
        
    }
}


export async function getGuestById(id: string) {
  try {
    const record = await pb.collection("guests").getOne(id) // no signal here
    return record
  } catch (error) {
    console.error("Error fetching guest:", error)
    throw error
  }
}


export async function updateGuest(id: string, data: any) {
  try {
    const record = await pb.collection("guests").update(id, data) // clean
    return record
  } catch (error) {
    console.error("Error updating guest:", error)
    throw error
  }
}




export async function DeleteGuestById(id: string) {
  try {
    
    const guest = await pb.collection("guests").delete(id)
    return guest 
  } catch (error) {
    console.error("Error deleting guest:", error)
    throw error
  }
}
