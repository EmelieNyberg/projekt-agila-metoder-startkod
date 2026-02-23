"use server"
import { revalidatePath } from "next/cache";

// In this server action we get the id directly and pass that along to the API
// we then call revalidatePath to revalidate the cache for the homepage so that the deleted product is removed from the list
export async function deleteProductAPI(id: number) {
//  const res = await fetch(`${API_URL}/products/${id}`, {

    // Hardcoded for now, in a real app we would want to get this from an environment variable or config file
    const res = await fetch(`http://localhost:4000/products/${id}`, {
        method: "DELETE",
    });

    if(!res.ok) {
        // We need to handle this error somehow?
    }

    revalidatePath("");
}