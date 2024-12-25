"use client";

import useUser from "@/hook/useUser";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Profile = () => {
  const { isFetching, data } = useUser();

  if (isFetching) {
    return <></>;
  }

  return (
    <div>
      {!data?.id ? (
        <Link href="/auth" className="animate-fade">
          <Button variant={"outline"}>S&apos;inscrire</Button>
        </Link>
      ) : (
        <Image
          src={data.image_url}
          width={50}
          height={50}
          alt={data.display_name || ""}
          className="animate-fade rounded-full"
        />
      )}
    </div>
  );
};

export default Profile;
