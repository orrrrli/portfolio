import { cookies } from "next/headers";
import { Language } from "@/types";

export async function getLanguage(): Promise<Language> {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value;
  return lang === "es" ? "es" : "en";
}
