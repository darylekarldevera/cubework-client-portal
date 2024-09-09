import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

export default function ProfilesButtons() {
  return (
    <div className="flex flex-row gap-4 items-center">
      <div>
        <button className="rounded-full w-12 h-12 overflow-hidden">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </button>
      </div>
      <div>Logout</div>
    </div>
  );
}