import Layout from "../../../components/Layout";
import ReactPlayer from 'react-player'
import { Coursetopic, courseTopics, TopicsSection } from "..";

let title = "Learn Python: The Complete Python Programming Course"
let description = "Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!"

const SingleCourseFull = () => {
    return (
        <Layout title={title} description={description}>
            <section className="main-section w-screen min-h-screen mb-1 flex lg:flex-row flex-col">
            <section className="video-side lg:w-3/5 h-3/5 relative w-full">
                <ReactPlayer url={"/videos/vid3.mp4"} playing width={"100%"} style={{ objectFit:"fill" }} className="w-full h-full" controls='true'/>
                <div className="details hidden lg:flex flex-col">
                    <h1 className="font-bold text-lg">{title}</h1>
                    <p className="font-normal">{description}</p>
                </div>
            </section>
            <section className="course-content lg:w-2/5 h-full w-full">
                {courseTopics.map(topic => <TopicsSection key={topic.name} topic={topic} width={`w-full`}/>)}
            </section>
            </section>
            
        </Layout>
    )
}

export default SingleCourseFull;