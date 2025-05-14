"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Data & Business Analytics",
    description:
      "With a strong foundation in data analysis and business intelligence, I specialize in transforming raw data into valuable insights that drive strategic decisions. I am proficient in using Power BI, Excel, and Microsoft Fabric to build interactive dashboards and reports that enable organizations to understand key performance indicators (KPIs) and make data-driven decisions. My expertise extends to advanced data modeling, DAX (Data Analysis Expressions), and data automation, ensuring that analytics solutions are both scalable and actionable. I also leverage SQL for data extraction, manipulation, and complex querying, enabling seamless integration across multiple data sources. By combining my technical skills with a deep understanding of business needs, I help businesses optimize their processes, improve customer experiences, and achieve measurable outcomes.",
    href: "",
  },
  {
    num: "02",
    title: "Data Visualizing with Power BI & Tableau",
    description:
      "I specialize in creating interactive and insightful dashboards using Power BI and Tableau, empowering organizations to make data-driven decisions. With expertise in both tools, I design intuitive visualizations that transform complex data into easily digestible insights. I am proficient in using DAX in Power BI for advanced calculations and custom metrics, and in Tableau, I leverage Level of Detail (LOD) expressions to provide deep analysis. My experience includes connecting to various data sources, building dynamic reports, and optimizing visualizations for performance. I focus on user-centric design, ensuring that my dashboards not only look great but also provide actionable insights, improving business outcomes across multiple sectors, including healthcare and sales. Through storytelling with data, I make sure that decision-makers can easily track KPIs and trends that drive their strategies.",
    href: "",
  },
  {
    num: "03",
    title: "Azure Data Engineering",
    description:
      "I have hands-on experience in designing and implementing scalable data engineering solutions on Microsoft Azure, leveraging its robust suite of tools such as Azure Data Factory, Azure Databricks, and Azure Synapse Analytics. I specialize in creating end-to-end data pipelines, from ingestion and transformation to storage and analysis, ensuring seamless data integration across multiple platforms. My expertise also extends to managing large datasets using Azure SQL Database and Azure Blob Storage, while optimizing performance through data partitioning and indexing strategies. Additionally, I am proficient in automating data workflows, ensuring data quality, and creating real-time data processing solutions using Azure Stream Analytics. By applying Azure’s cloud-based technologies, I help organizations build efficient, secure, and cost-effective data infrastructures that support business intelligence and advanced analytics.",
    href: "",
  },
  {
    num: "04",
    title: "Data Science & Generative AI",
    description:
      "I have extensive experience in data science, utilizing machine learning algorithms, statistical modeling, and data manipulation to extract insights and predict future trends. My expertise includes working with tools like Python, TensorFlow, and scikit-learn to build and deploy machine learning models that solve real-world problems. In the realm of Generative AI, I focus on developing innovative solutions using large language models (LLMs) and advanced techniques like retrieval-augmented generation (RAG) to create systems that can understand, generate, and interact with data in meaningful ways. By combining data-driven methodologies with cutting-edge AI technologies, I help businesses unlock new opportunities and automate complex tasks. My work also involves applying AI in various domains such as healthcare and customer analytics, where automation and predictive models can have a transformative impact.",
    href: "",
  },
  
  
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
