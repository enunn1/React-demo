export default function Page() {
  return  (
  <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center sm:text-left">
        About Page
    </h1>
    <h2 className="text-2xl sm:text-3xl font-semibold text-center sm:text-left">Who am I?</h2>
    <p className="self-start text-lg sm:text-xl text-center sm:text-left">
        I was born in Rock Island, IL, and raised in Cottage Grove, MN. My interest in computers and technology began early and quickly grew into a lifelong passion. What started as a childhood hobby eventually became my career—I earned an Associate’s degree in Computer Programming followed by a Bachelor’s in Computer Science, graduating with high honors from both.<br/><br/>
        Today, I'm a Software Engineer with hands-on experience in full-stack web development, cloud platforms, and Agile methodologies. At Optum, I contributed to building secure and scalable web applications using modern technologies like React.js, Next.js, Angular, and Spring Boot. I’ve worked extensively in cloud environments, deploying applications to Microsoft Azure and leveraging tools like Kubernetes and Kafka to manage and optimize data workflows.<br/><br/>
        I’m a Microsoft Certified Azure Fundamentals holder with a strong focus on clean code, CI/CD practices, security mitigation, and team collaboration. Whether it's refining legacy systems or building new features from the ground up, I enjoy solving complex problems and constantly improving my craft.
    </p>
  </div>);
}