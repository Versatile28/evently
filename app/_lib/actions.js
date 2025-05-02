"use server"

import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { getYourEvents } from "./data-service";


export async function deleteYourEvent(eventId) {
   const session = await auth();
   if (!session) throw new Error("You must be logged in");
 
   const yourEvents = await getYourEvents(session.user.guestId);
   const yourEventIds = yourEvents.map((event) => event.id);
 
   if (!yourEventIds.includes(eventId))
     throw new Error("You are not allowed to delete this booking");
 
   const { error } = await supabase
     .from("yourevent")
     .delete()
     .eq("id", eventId);
 
   if (error) throw new Error("Booking could not be deleted");
 
   revalidatePath("/yourevents");
 }

 export async function signInAction() {
   await signIn("google", { redirectTo: "/account" });
 }
 
 export async function signOutAction() {
   await signOut({ redirectTo: "/" });
 }