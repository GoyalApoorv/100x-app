function NewTweet() {
  return (
    <div className="flex w-full items-center justify-center gap-3 px-4 py-2">
      <img
        alt="profile_avatar"
        className="h-9 w-9 flex-shrink-0 self-start rounded-7xl"
        src="../../public/images/profile_avatar.png"
      />
      {/* <input
type="text"
placeholder="What’s happening?"
class="flex flex-shrink-0 grow items-center self-stretch bg-transparent text-xl font-normal text-neutral-50 focus:outline-none"
    /> */}
      <textarea
        name
        id
        cols={30}
        rows={10}
        placeholder="What's happening?"
        className="font-regular w-full resize-none bg-transparent text-base leading-normal text-neutral-50 placeholder:text-neutral-600 focus:outline-none"
        defaultValue={""}
      />
    </div>
  );
}

export default NewTweet;
