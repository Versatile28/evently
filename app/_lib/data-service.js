import { notFound } from "next/navigation";
import { supabase } from "./supabase";

export async function getYourEvent(id) {
  const { data, error } = await supabase
    .from("yourevent")
    .select("*")
    .eq("id", id)
    .single();


  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}

export async function getYourEvents(userId) {
   const { data, error, count } = await supabase
     .from("yourevent")
     .select(
      "id, created_at, name, startDate, endDate, duration, description, location, userId"
     )
     .eq("userId", userId)
     .order("startDate");
 
   if (error) {
     console.error(error);
     throw new Error("Your Events could not get loaded");
   }
 
   return data;
 }

export async function getUser(email) {
  const { data, error } = await supabase
    .from("user")
    .select("*")
    .eq("email", email)
    .single();

  return data;
}

export async function createUser(newUser) {
   const { data, error } = await supabase.from("user").insert([newUser]);
 
   if (error) {
     console.error(error);
     throw new Error("User could not be created");
   }
 
   return data;
 }

