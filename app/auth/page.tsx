"use client";

import { Button } from "@/components/ui/button";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { KeyRound } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const page = () => {
  const handleLoginWithOauth = (provider: "github" | "google") => {
    const supabase = supabaseBrowser();
    supabase.auth.signInWithOAuth({
      provider: provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="w-96 space-y-5 rounded-md border p-5">
        <div className="flex items-center gap-2">
          <KeyRound />
          <h1 className="text-2xl font-bold ">Next + Supabase</h1>
        </div>
        <p className="text-sm text-gray-300">Inscription/Connexion</p>

        <div className="flex flex-col gap-5">
          <Button
            onClick={() => handleLoginWithOauth("github")}
            className="flex w-full items-center gap-2"
            variant={"outline"}
          >
            <FaGithub /> Github
          </Button>
          <Button
            onClick={() => handleLoginWithOauth("google")}
            className="flex w-full items-center gap-2"
            variant={"outline"}
          >
            <FcGoogle /> Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
