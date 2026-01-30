//import { teamData } from "@/static-data/team";
import axios from "axios";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";
import { SocialLink } from "@/types/team";

interface TeamMember {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export default async function Team() {
  let teamData: TeamMember[] = [];

  // Fetch API
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );
    teamData = await response.json();
  } catch (error) {
      console.error(error);
      return <> </>;
  }


  // Axios
    try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
    );
    teamData = response.data;
  } catch (error) {
      console.error(error);
      return <> </>;
  }


  return (
    <section id="team" className="pt-14 sm:pt-20 lg:pt-32.5">
      <div className="px-4 xl:container">
        <SectionTitle
          mainTitle="OUR TEAM"
          title="Meet With Our Creative Dedicated Team"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus."
        />

        <div className="-mx-4 flex flex-wrap justify-center">
          {teamData.map((team) => (
            <SingleTeam key={team?.id} team={{
              id: team.id, 
              name: team.name, 
              designation: 'Developer', 
              image: 'https://picsum.photos/370/360', 
              socialLinks: [
                {
                  id:  team.address.zipcode, 
                  name: "Facebook", 
                  link: team.website},
                {
                  id: team.address.zipcode + 1, 
                  name: "Twitter", 
                  link: team.website},
                ]}} />
          ))}
        </div>
      </div>
    </section>
  );
}
