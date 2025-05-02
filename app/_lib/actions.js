"use server"

import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { getYourEvents } from "./data-service";
import { redirect } from "next/navigation";


export async function createEvent(eventData, formData) {
   const session = await auth();
   if (!session) throw new Error("You must be logged in");
 
   const newEvent = {
     ...eventData,
     userId: session.user.userId,
     name: formData.get("name"),
     duration: formData.get("duration"),
     location: formData.get("location"),
     description: (formData.get("description") || "").toString().slice(0, 1000)
   };
 
   const { error } = await supabase.from("yourevent").insert([newEvent]);
 
   if (error) throw new Error("Event could not be created");
 
   redirect("/yourevents");
 }

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

 export async function updateEvent(formData) {
   const eventId = Number(formData.get("eventId"));

   const session = await auth();
   if (!session) throw new Error("You must be logged in");

   const userEvents = await getYourEvents(session.user.userId);
   const userEventIds = userEvents.map((event) => event.id);
 
   if (!userEventIds.includes(eventId))
     throw new Error("You are not allowed to update this booking");
 
   const updateData = {
      name: formData.get("name"),
      duration: formData.get("duration"),
      location: formData.get("location"),
      description: (formData.get("description") || "").toString().slice(0, 1000)
   };

   const { error } = await supabase
     .from("yourevent")
     .update(updateData)
     .eq("id", eventId)
     .select()
     .single();
 
   if (error) throw new Error("Booking could not be updated");

   revalidatePath(`/yourevents/edit/${eventId}`);
   revalidatePath("/yourevents");
 
   redirect("/yourevents");
 }

 export async function signInAction() {
   await signIn("google", { redirectTo: "/" });
 }
 
 export async function signOutAction() {
   await signOut({ redirectTo: "/" });
 }