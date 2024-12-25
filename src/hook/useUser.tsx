import { supabaseBrowser } from "@/lib/supabase/browser";
import { useQuery } from "@tanstack/react-query";

const initIUser = {
  id: "",
  display_name: "",
  email: "",
  image_url: "",
  created_at: "",
};

const useUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const supabase = supabaseBrowser();
      const { data } = await supabase.auth.getSession();
      console.log("🚀 ~ queryFn: ~ data:", data);
      if (data.session) {
        const { data: user } = await supabase
          .from("profile")
          .select("*")
          .eq("id", data.session.user.id)
          .single();
        return user;
      }
      return initIUser;
    },
  });
};

export default useUser;
