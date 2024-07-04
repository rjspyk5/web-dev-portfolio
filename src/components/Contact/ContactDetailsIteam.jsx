export const ContactDetailsIteam = ({ text, logo, contactDetails }) => {
  return (
    <div className="flex gap-8 items-center">
      <div className="py-5 px-10 rounded-xl flex bg-base-100 shadow-2xl justify-center items-center">
        {logo}
      </div>
      <div>
        <p className="opacity-80 mb-1">{text}</p>
        <p>{contactDetails[0]}</p>
        <p>{contactDetails[1] && contactDetails[1]}</p>
      </div>
    </div>
  );
};
