import "./AboutUs.css";
import { IoArrowForward } from "react-icons/io5";
export default function AboutUs() {
  return (
    <>
      <div className="usContainerCompon">
        <div className="usName">Your style</div>
        <p className="usDescription">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
          quod non consequuntur obcaecati ipsa facere alias inventore dolorum
          accusamus similique consectetur sint doloribus labore animi, earum
          maiores culpa voluptate nobis dolore porro quisquam. Voluptatibus
          saepe sint odit, sequi voluptatum inventore pariatur, explicabo omnis
          repudiandae, quis illum rerum mollitia minima sunt?
        </p>
        <div className="readMore">
          Read more <IoArrowForward className="arrowUs" />
        </div>
      </div>
    </>
  );
}
