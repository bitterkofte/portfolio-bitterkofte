import SvgIcon from "../SVGs/SvgIcon"
import contact from "./contact"

const Contacts = () => {
  const myContacts = ["github", "linkedin", "gmail", "codewars", "stackoverflow"];
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold dark:text-neutral-200 transition-all duration-500">Me On Other Places</h3>
      <div className="w-fit flex flex-wrap items-center gap-5 rounded-md">
        {/* {contact.map(con => (
          <div key={con.id} className="w-14 h-14 bg-contact-bg rounded-md flex items-center hover:scale-105 transition-all duration-300">
            <img className="p-4 hover:my-drop-shadow" src={con.src} alt={con.name} />
          </div>
        ))} */}
        {myContacts.map((platform, i) => (
          <div key={i} className="w-14 h-14 bg-contact-bg rounded-md flex items-center hover:scale-105 transition-all duration-300">
            <SvgIcon icon={platform} style="p-4 w-14 h-14 dark:fill-neutral-200 hover:my-drop-shadow transition-all duration-300" />
          </div>
        ))}
      </div>
    </div>
  )
}
export default Contacts