import { notFound } from "next/navigation";
import { supabase } from "./supabase";

/////////////
// GET

export async function getYourEvent(id) {
  const { data, error } = await supabase
    .from("yourevent")
    .select("*")
    .eq("id", id)
    .single();

  // For testing
  // await new Promise((res) => setTimeout(res, 2000));

  if (error) {
    console.error(error);
    notFound();
  }

  return data;
}

export const getYourEvents = async function () {
  const { data, error } = await supabase
    .from("yourevent")
    .select("id, name, startDate, endDate, duration, description, location")
    .order("name");

  // For testing
  // await new Promise((res) => setTimeout(res, 2000));

  if (error) {
    console.error(error);
    throw new Error("Your Events could not be loaded");
  }

  return data;
};

export async function getUser(email) {
  const { data, error } = await supabase
    .from("user")
    .select("*")
    .eq("email", email)
    .single();

  return data;
}

