import { env } from "@/lib/env";
import { createBrowserClient } from "@supabase/ssr";
import { Database } from "../types/database.types";

export const supabaseBrowser = () => {
  return createBrowserClient<Database>(
    env.NEXT_PUBLIC_SUPABASE_URL!,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
};
