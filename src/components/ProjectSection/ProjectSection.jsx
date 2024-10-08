import { ProjectCard } from "./ProjectCard";
import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.jpg";
import { SectionHeading } from "../sectionHeading/SectionHeading";

export const ProjectSection = () => {
  return (
    <div>
      <SectionHeading heading="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ProjectCard
          link="https://wisdom-library-1acce.web.app/"
          client="https://github.com/rjspyk5/wisdom-library-client"
          server="https://github.com/rjspyk5/wisdom-library-server"
          img={p1}
          name="Wisdom Library"
          descreption="Welcome to Wisdom Library, your digital gateway to a world of reading adventures! Explore our extensive collection, manage your books with ease, and enjoy a seamless reading experience with our intuitive platform and night mode feature."
        />
        <ProjectCard
          link="https://elegance-artistry.web.app/"
          client="https://github.com/rjspyk5/elegance-artistry-client"
          server="https://github.com/rjspyk5/elegance-artistry-server"
          img={p2}
          name="Elegance Artistry"
          descreption="Elegance Artistry is a dynamic web platform showcasing a curated collection of artworks, including paintings, drawings, and more. Users can explore various categories of artworks, add new pieces, and interact with the community through reviews and ratings."
        />
        <ProjectCard
          link="https://parcel-go-a241e.web.app/"
          client="https://github.com/rjspyk5/parcel-go-client"
          server="https://github.com/rjspyk5/parcel-go-server"
          img={p3}
          name="Parcel Go"
          descreption="ParcelGo simplifies parcel delivery with intuitive booking and tracking. It features role-based dashboards for users, delivery personnel, and admins, enabling efficient parcel management, status updates, and reviews. "
        />
      </div>
      <div className="flex justify-end">
        <button className="btn ">See All</button>
      </div>
    </div>
  );
};
