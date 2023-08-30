import { FaLeaf, FaSuitcase, FaShieldAlt, FaExclamationTriangle } from 'react-icons/fa';
import { IoFitness, IoBookOutline } from 'react-icons/io5';
import { GiAutoRepair, GiIndianPalace, GiMedicalPackAlt } from 'react-icons/gi';
import { LiaRobotSolid } from 'react-icons/lia';
import { MdOutlineEnergySavingsLeaf, MdSmartToy, MdMiscellaneousServices, MdAgriculture, MdElectricCar, MdEmojiTransportation } from 'react-icons/md';

export const data = [
  {
    "id": "1",
    "title": "Smart Automation",
    "icon": <GiAutoRepair />,
    "description": "Ideas focused on the intelligent use of resources for transforming and advancements of technology with combining the artificial intelligence to explore more various sources and get valuable insights.",
    "ps": [
      {
        "Organization": "Ministry of power ",
        "Problem_Statement_Title": "Developing an AI-powered energy management system for industrialcommercial facilities to optimize energy consumption.",
        "Description": "Energy consumption in industrial and commercial facilities is a major expense for businesses and contributes significantly to environmental pollution.  The lack of visibility and control over energy usage makes it difficult for businesses to manage their energy costs and reduce their carbon footprint. conventional energy management systems have limitations in terms of accuracy and scalability and often require manual intervention to operate effectively. To address these challenges, an Al-powered energy management system can be developed that uses machine learning algorithms and data analytics to optimize energy consumption in industrial and commercial facilities. The system will collect real-time energy data from various sources, such as sensors and meters, and use this data to predict energy usage patterns and identify opportunities for energy savings. The system will also provide recommendations for energy-efficient practices and automate the control of energy-consuming devices, such as lighting and HVAC systems, to optimize energy consumption.  The Al-powered energy management system will be designed to be scalable and adaptable to different types of industrial and commercial facilities. it will also be user-friendly, providing an intuitive interface for facility managers and building owners to monitor and control energy usage. The system will be designed to integrate with existing building automation systems and will be able to operate autonomously with minimal human intervention,  The goal of developing an Al-powered energy management system is to help businesses  reduce their energy costs, improve their operational efficiency, and reduce their  environmental impact by optimizing their energy consumption.    Desired Outcome: The desired outcome of developing an AI-powered energy management system for industrial and commercial facilities to optimize energy consumption is to provide businesses with a cost-effective and environmentally sustainable solution to manage their energy usage.  The system will offer several benefits, including:  1. Cost savings: By optimizing energy consumption, the system will help businesses reduce their energy bills and save money. The Al-powered system will continuously analyze energy usage patterns and provide recommendations for energy-efficient practices that can help reduce energy waste and costs.  2. lmproved energy efficiency: The system will enable businesses to monitor and control their energy consumption in real-time, allowing them to identify areas of inefficiency and implement solutions to improve energy efficiency. The system will also provide automated control of energy-consu ming devices, such as lighting and HVAC systems, to further optimize energy consumption.  3. Reduced carbon footprint: By reducing energy waste, the system will help businesses reduce their carbon footprint and contribute to a more sustainable future. This will help businesses meet their environmental targets and obligations, such as carbon reduction commitments.  4. Scalability: The Al-powered energy management system will be desiSned to be scalable and adaptable to different types of industrial and commercial facilities. This will allow businesses to implement the system across multiple sites and improve their overall energy management practices.  5. User-friendliness: The system will be designed with a user-friendly interface, making it easy for facility managers and building owners to monitor and control energy usage. The system will also be able to operate autonomously with minimal human intervention, reducing the workload on facility managers. Overall, the desired outcome of developing an Al-powered energy management system for industrial and commercial facilities to optimize energy consumption is to provide businesses with a cost-effective and sustainable solution to manage their energy usage, reduce costs, and improve their environmental impact.",
        "Category": "Hardware",
        "PS_Number": "SIH1299",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "Ministry of power ",
        "Problem_Statement_Title": "Automated Public Lighting",
        "Description": "public lighting in roads and public areas are lit even during  daytime resulting in the wastage of precious energy. The conventional method being  employed is manual switching on and off and in some places, there has been a  shift towards timer control for the on-off of public lighting. However, this has not been  very effective. System to be simulated by the participants  Desired Outcome: Smart public lighting systems, that are centrally controlled by IOT  would facilitate dynamical adjustment of illumination and provide a record of the  consumption. This would dramatically result in lower operating costs and would aid in  low downtime of failed lighting systems as the defective locations can be identified.",
        "Category": "Hardware",
        "PS_Number": "SIH1300",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "Ministry of power ",
        "Problem_Statement_Title": "Language translator tool to convert English toHindi (official Language) which can be used by all the government organizationswebsites officially.",
        "Description": "The objective is to develop a language translator tool specifically designed for government organizations in India. The tool should provide the capability to translate English content into Hindi, the official language of the country. This will enable government websites to cater to a wider audience, including Hindi-speaking citizens who may have difficulty understanding English.  The language translator tool should possess the following key features:  Translation Accuracy: The tool should offer accurate translations, maintaining the context and meaning of the original English content. It should handle various language intricacies, idiomatic expressions, and technical terms commonly used in government-related documents.  User-Friendly Interface: The tool should have a simple and intuitive interface, ensuring ease of use for both website administrators and end-users. It should seamlessly integrate into government websites, allowing users to translate content with minimal effort.  Website Integration: The language translator tool should be compatible with different website architectures and frameworks commonly used by government organizations. It should provide developers with an API or plugin that can be easily integrated into existing websites without significant code modifications.  Language Preservation: The tool should be designed to preserve the cultural and linguistic nuances of the Hindi language. It should take into account regional variations and dialects to ensure accurate translations that resonate with Hindi-speaking citizens across the country.  Security and Privacy: As government organizations handle sensitive information, the language translator tool should adhere to high security and privacy standards. It should protect user data, prevent unauthorized access, and comply with relevant data protection regulations.  Scalability: The tool should be scalable to handle a large volume of translation requests, ensuring smooth performance even during peak usage periods. It should be capable of handling concurrent translations across multiple government websites.  Participants in the hackathon are encouraged to explore innovative approaches, leveraging natural language processing (NLP) techniques, machine learning algorithms, and other relevant technologies to achieve accurate translations. The resulting language translator tool will contribute significantly to improving the accessibility and usability of government websites, facilitating effective communication between government organizations and Hindi-speaking citizens.",
        "Category": "Software ",
        "PS_Number": "SIH1301",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "Government of Punjab ",
        "Problem_Statement_Title": "The Employment Department at present has a digital platformwww.pgrkam.com and its mobile application to provide almost allservices offered to job seekers and employers through digitalmeans. The portal has multiple modules like private sector jobs,government jobs, self-employment avenues, foreign jobs, foreign study,counseling, guidance, induction into armed forces, job melas, etc.Currently, when a user visits the portal/app, there is no hand-holdingmechanism to help the user get to the part of the digital platform whichwill resolve his queries. The user is required to navigate across multiplemodules on the portal/ app to search for answers.",
        "Description": "The requirement set is given below:  1. To build a smart chatbot on top of Large Language Model (LLM)-  driven chatbots like ChatGPT that uses transformers like GPT3.  The aim is to assist the user through a digital assistant to provide  answers to all queries the user and reduce the time and effort  while navigating to any part of the PGRKAM digital platform.  2. The system should be able to intelligently addresses text and  voice queries in Punjabi/English/Hindi around job search, skill  development and foreign counseling along with recommending  jobs based on the candidateÃ¢â‚¬â„¢s preference. A multilingual screen  reading module could be added for better query handling.    3. The app will also be able to maintain candidatesÃ¢â‚¬â„¢ history and  preferences to add a level of personalization for better  recommendations.    Expected Outcome  User should be able to chat/read/listen and discover any  information pertaining to job, skill development or foreign  counseling on smartphone or laptop computer.",
        "Category": "Software ",
        "PS_Number": "SIH1305",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "Ministry of coal ",
        "Problem_Statement_Title": "Chatbot to respond to text queries pertaining to various Acts, Rules, and Regulations applicable to Mining industries",
        "Description": "A Chatbot is a computer program that uses Artificial Intelligence (AI) and Natural Language Processing (NLP) to understand customer questions and automate responses to them, imitating human conversation.As of now, various Acts, Rules and Regulations, DGMS Circulars, CoI Proceedings, etc. are applicable to Mining industries.These are some of the Acts and Rules:The Coal Mines Act, 1952Indian Explosives Act, 1884Colliery Control Order, 2000Colliery Control Rules, 2004The Coal Mines Regulations, 2017The Payment of Wages (Mines) Rules, 1956Additionally, land-related laws i.e. CBA, LA, RandR related queries can also be incorporated to develop Robust Management Information System.Hence it is proposed to make a chatbot available 24/7 for stakeholders and customers which can answer all their queries regarding the rules, acts, and circulars.",
        "Category": "Software ",
        "PS_Number": "SIH1312",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "Ministry of coal ",
        "Problem_Statement_Title": "Real-time visibility of Dumper load status to Shoveloperator",
        "Description": "Challenge Description:In large-scale mining, shovel operators are responsible for loading materials onto dumpers. However, the lack of real-time visibility regarding the load status of dumpers often leads to inefficiencies and delays in the overall workflow. Currently, shovel operators rely on manual communication or visual cues to determine whether a dumper is ready for loading or its loading has been completed. The challenge is to create a system that provides shovel operators with instant and accurate information about the load status of dumpers, eliminating the need for manual communication and improving the efficiency of the operation. The solution should leverage real-time data from sensors or other reliable sources to deliver timely updates to shovel operators, enabling them to make informed decisions and optimize their loading process.The solution should address the following key aspects:Real-time Monitoring: Develop a mechanism to continuously monitor the load status of dumpers in real time. This may involve integrating sensors, IoT devices, or any other suitable technology to collect and transmit data reliably.Visualization and Alerts: Design an intuitive interface that displays the load status of each dumper to the shovel operator in real time. The interface should provide clear visual indicators and notifications to inform the operator about the readiness of each dumper for loading as well as inform the shove operator when the loading of the dumper is completed.Data Integration: Create a system that seamlessly integrates with existing infrastructure, such as the shovel operator's workstation or control panel. The solution should ensure smooth data transmission and compatibility with other systems or software used in the mining site.Scalability and Robustness: Develop a solution that can handle a large number of dumpers simultaneously and is capable of operating reliably in challenging environments. Consider factors such as connectivity issues, data synchronization, and potential disruptions in the mining site.Security and Privacy: Implement appropriate security measures to protect the system from unauthorized access and ensure the privacy of sensitive data. Consider encryption, authentication, and other relevant security practices to safeguard the system and maintain data integrity.By addressing these aspects, the proposed solution should enhance the productivity and efficiency of shovel operators, reduce downtime caused by miscommunication or delays, and ultimately optimize the loading process in mining operations.",
        "Category": "Software ",
        "PS_Number": "SIH1314",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "Ministry of coal ",
        "Problem_Statement_Title": "Development of a Digital Platform for multi-modal visibility of coaltransportation",
        "Description": "Coal transportation involves a complex network of multiple modes of transportation, including trucks, trains, and ships. However, the lack of a unified digital platform for tracking and monitoring coal movement across these modes often leads to inefficiencies, delays, and a lack of transparency in the coal supply chain. This hampers the ability of stakeholders, such as coal producers, transporters, and end-users, to make informed decisions and optimize logistics operations.The challenge is to develop a digital platform that provides multi-modal visibility of coal transportation, allowing stakeholders to track the movement of coal from source to destination seamlessly. The platform should leverage image analytics, data integration, and advanced visualization techniques to provide real-time insights into the location, status, and condition of coal shipments. It should enable effective coordination, proactive decision-making, and optimization of logistics operations for all stakeholders involved in the coal supply chain.The solution should address the following key aspects:Data Integration: Create a scalable and robust system that integrates data from various sources, such as GPS devices, sensors, transportation management systems, and third-party APIs. The platform should be capable of handling large volumes of data from different modes of transportation and ensure the accuracy and reliability of the integrated information.Multi-Modal Tracking: Develop image analytics capabilities to analyze real-time images or video feeds from cameras installed at critical points in the coal transportation network. The platform should identify and track coal-carrying vehicles, wagons, or ships, and provide accurate information on their location, movement, and capacity utilization.Real-Time Visualization: Design an intuitive and user-friendly interface that displays real-time data on the location and status of coal shipments across multiple modes of transportation. The platform should provide interactive maps, dashboards, and alerts that enable stakeholders to monitor and analyze the coal transportation process effectively.Analytics and Optimization: Incorporate advanced analytics techniques to generate insights and actionable recommendations for optimizing coal logistics operations. The platform should identify bottlenecks, predict delays, and suggest alternative routes or transportation modes to improve efficiency, reduce costs, and minimize environmental impact.Security and Privacy: Implement robust security measures to protect sensitive data and ensure the privacy of stakeholders. The platform should adhere to industry best practices for data encryption, access control, and compliance with relevant regulations.By addressing these aspects, the proposed digital platform will enable stakeholders in the coal supply chain to gain real-time visibility and insights into multi-modal coal transportation. This will lead to improved operational efficiency, reduced transportation costs, enhanced transparency, and better decision-making for all parties involved in the coal supply chain.",
        "Category": "Software ",
        "PS_Number": "SIH1317",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "Ministry of coal ",
        "Problem_Statement_Title": "Forecasting and scheduling of railway rakes.",
        "Description": "At present rake supply is made by railway on a cluster basis / Coalfield basis for a group of mines. At times, the placement of rakes in a siding is made where coal sock is not adequate. This leads to the payment of demurrage charges. A digital platform/ algorithm needs to be created for all the available railway siding where the updated status of coal stock in siding shall be maintained online. This will help in sending railway rakes available at the nearest location and also reduce in demurrage cost of the company.",
        "Category": "Software ",
        "PS_Number": "SIH1319",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "Ministry of Chemicals and Fertilizers ",
        "Problem_Statement_Title": "Compilation and Collection of optimum Level (variable) of data set from the Chemical and Petrochemical Industries in the country, aiming to smoothen the decision-making and insight generation in the strategic initiative.",
        "Description": "The chemical and petrochemical industries generate a vast amount of data related to production, supply chain, market trends, quality control, and environmental impact. However, the availability, accessibility, and organization of this data vary across different companies and stakeholders, hindering effective decision-making and insight generation at a broader industry level.The challenge is to develop a solution that enables the compilation and collection of an optimum level of data sets from the chemical and petrochemical industries. The solution should address the following key aspects:Data Standardization and Integration: Design a framework that standardizes data formats, definitions, and structures across various companies and stakeholders within the industry. The solution should facilitate the integration of disparate data sources, including production data, laboratory test results, market data, and regulatory information, into a cohesive dataset.Data Collection and Aggregation: Develop mechanisms for efficient data collection and aggregation from chemical and petrochemical companies. The solution should include automated data collection processes, data validation, and quality checks to ensure the accuracy and reliability of the compiled dataset.Optimum Level of Data Selection: Define criteria and algorithms to determine the optimum level of data to be collected and included in the dataset. The solution should consider factors such as data relevance, representativeness, statistical significance, and data privacy regulations to ensure the collection of meaningful and valuable information without compromising data confidentiality.Data Analysis and Insight Generation: Implement analytical tools and techniques to analyze the compiled dataset and generate actionable insights. The solution should enable stakeholders to identify trends, patterns, and correlations within the data, facilitating strategic decision-making, performance benchmarking, and industry-wide improvements.Data Privacy and Security: Incorporate robust data privacy and security measures to protect sensitive information and ensure compliance with applicable regulations. The solution should prioritize data anonymization, encryption, access controls, and audit trails to safeguard the confidentiality and integrity of the collected data.By addressing these aspects, the proposed solution will streamline data compilation and collection processes within the chemical and petrochemical industries. It will enable stakeholders to access comprehensive and reliable datasets, promote data-driven decision-making, facilitate industry-wide insights and collaboration, and drive strategic initiatives for growth, sustainability, and innovation in the industry.",
        "Category": "Software ",
        "PS_Number": "SIH1321",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "Ministry of Information and Broadcasting ",
        "Problem_Statement_Title": "360-degree feedback software for the Government of India related News Stories in RegionalMedia using Artificial Intelligence / Machine Learning",
        "Description": "The Press Information Bureau (PIB) is the nodal agency of the Government of India to disseminateinformation on government policies, programs, initiatives, and achievements to the print andelectronic media. It functions as an interface between the Government and the media and providesfeedback to the Government on people‚ reactions as reflected in the media.Information is disseminated from Hqrs through Press Releases in English, Hindi, and Urdu andsubsequently translated from PIB Regional offices into other Indian languages like Punjabi,Gujarati, Marathi, Telugu, Kannada, Malayalam, Tamil, Odia, Bengali, Assamese, and Manipuri,to reach out to about 8,400 newspapers and media organizations across the country.To provide effective and timely feedback to the Government, an automated feedback system forall the above regional languages using Artificial Intelligence / Machine Learning is required. Thefeedback system should crawl the select regional media sites (around 200 websites) for the newspublished in regional languages. The software should categorize the stories into the concerneddepartments as per the tags provided. The stories should be categorized as favorable (positive),neutral, or not favorable (negative) to the Government of India. Negative stories pertaining to adepartment should be notified to the concerned PIB officer on a real-time basis by SMS or Androidnotification or by other means.E-papers of select newspapers should be scanned by the system automatically using an OpticalCharacter Recognition (OCR). The concerned news clippings if it pertains to the Government ofIndia should be cut and electronically pasted in a pre-designed template mentioning the name ofthe newspaper, the page number where the story was published, the name of the edition, etc. Theseclippings should be classified into Departments and tonality (positive, negative, and neutral). Alsoin the dashboard, the title of the newspapers should be displayed and the stories should be in aposition to be sorted/filtered using the variables like Tonality, Edition, etc.The system should also crawl through the YouTube channels of select news channels and identifythe portion of the news bulletin pertaining to the Government of India using closed captioning.If closed captioning is not available, should use audio to text feature to capture the transcript. Oncethe portion of the video is identified, the said video has to be categorized into Departments andtonality. If the story is negative, the concerned PIB officer should get the notification immediately.",
        "Category": "Software ",
        "PS_Number": "SIH1329",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "Ministry of Information and Broadcasting ",
        "Problem_Statement_Title": "Text to Video of various PIB Press Releases using Artificial Intelligence / Machine Learning/ Generative Adversarial Networks in English and 13 Regional Languages viz. Hindi, Urdu,Punjabi, Gujarati, Marathi, Telugu, Kannada, Malayalam, Tamil, Odia, Bengali, Assamese andManipuri.",
        "Description": "Press Releases of the Press Information Bureau are in the form of text. The attention span of theuser is reducing by the year, So to engage with the user in a meaningful way, the Press Releasesneed to be provided in a video format.Software should be designed in such a format to generate the videos automatically from the PressReleases published. The images and clips used for generating the video should be copyright free.There should be a provision to store a pool of images and clips for generating the video. Thegenerated video should be vetted by the concerned PIB officer before publishing.Software should be designed in such a format to generate the videos automatically from the PressReleases published. The images and clips used for generating the video should be copyright-freeand authentic sources. There should be a provision to store a pool of images and clips forgenerating the video. The generated video should be vetted by the concerned PIB officer beforepublishing. The software also includes a provision to send the notification to the concerned PIBofficer for approval. After approval, the software should have the feature of auto-uploading on theconcerned social media sites.",
        "Category": "Software ",
        "PS_Number": "SIH1330",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "Ministry of Social Justice and Empowerment ",
        "Problem_Statement_Title": "Udyog Saarthi App - (Progressive Web-based Application) forAdults undergoing Job coaching for opportunities under 4% reservation in NIEPMD and otherInstitutions.",
        "Description": "Persons with disabilities in our country, despite the progress happening on accessibility,education, skills development, and employment, still face many challenges, especially in theemployment phase of life that promotes inclusion in the family and society. Enhancingvocational training and employment prospects for people with disabilities is essential and thereare efforts happening at the National level that has to end up in employment that fetches significanteconomic benefits and dignified life for them. As per the recent survey by the Ministry of Statisticsreport on Persons with disabilities, about 64% of persons with disabilities in India are not intoemployment.The vulnerable group of the population with disabilities under the D andamp; E categories of 4%reservation in Government and PSU Jobs (Persons with disabilities of type, IntellectualDisability, Autism Spectrum Disorder, Multiple Disabilities, Mental Illness, and SpecificLearning Disabilities) are either not aware of or not getting notifications regarding theemployment vacancies, queries, or other such information due to the unavailability of access toprint media, and online services like employment news. They do require a curated and accessiblecontent with adaptations to specifically inform them of the job and details in a simple languagewith requirement information to apply, know the coaching facilities available and get trained toapply, appear for competitive examinations, get qualified and place themselves to achieve the1% reservation allocated to them. In many scenarios, the parents of such adults are also not withmuch literacy, awareness about such job opportunities through their adult children are eligiblefor them. This results in many of the jobs though published not being applied, for or the rightcandidates getting a placement as per the reservation and implementation of the Rights of Personswith Disabilities, Act 2016.Detailed Description: Accessibility and inclusion of Persons with disabilities (PwDs) in the workforce remainsa challenging one on a global scale and with much more diversity in our Country's context. Therehave been ongoing attempts and measures to ensure the inclusion of PwDs in the workforceespecially in the Government and PSUs level by the Department and other agencies working forthem. This includes the Job Coach programme, an introduction to job support services, withsupport for application, training for competitive examination in an accessible manner, guidanceto the PSUs and Department for accessible conduct of competitive examinations, counselling,and logistic support for candidates to write / attend the examination and interview thereafter.Finally, on placement, support for workplace adaptations or reasonable accommodation tosustain the job. The Department of Empowerment of Persons with Disabilities (DEPwD),National Institutions like NIEPMD, collaborating with Government and Non-GovernmentalOrganizations (NGOs) support with such job coach programme and assist Persons withDisabilities (PwDs) especially D andamp; E category, the most vulnerable group with either cognitive,learning, severe mobility, behaviour management, socialisation, or multiple such difficulties.Expected Solution:The software application intends to Create a learning profile of the candidates (The learning profile includes personsinformation with UDID, literacy, skills training, address, functional difficulties faced (asper Washington Group Extended Set Questions), assistive devices/solutions used orrequired, human assistance requirements, aspiration profile). Provide information in an accessible manner to the candidates / parents for variousopportunities happening as per 4% reservation in Government and PSUs. Additionally, inform jobs as per equal opportunity policies happening in private sector. Notification on important dates related to jobs application, examination, and interview. Support for model question paper, practice, and mock tests before qualifyingexaminations. Tracking for applied, examination attended, interview qualified and placement. Workplace support requirements requests for facilitation. Department of Adult Independent Living (DAIL), NIEPMD related other skills trainingprogrammes information notifications for getting enrolled, qualified with skillsdevelopment.",
        "Category": "Software ",
        "PS_Number": "SIH1333",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "Ministry of Railways ",
        "Problem_Statement_Title": "Natural language translation engine forannouncements and information dissemination at stations",
        "Description": "Design ofa system to provide information in a desired Indian language ondemand by passengers and other customers, in written and oral form. The system shouldbe extendable to foreign languages for tourists as and when required. Limited vocabularysystems for commonly required railway information services are acceptable.Scope ofthe system - announcements at stations, information over IVRS, informationthrough chatbots and web interfaces.constraints to be considered - voice recognition in different languages; noisy ambienceat stations; adequate computing power for on-the-fly content generation; delivery onmobile devices.",
        "Category": "Software ",
        "PS_Number": "SIH1348",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "Ministry of Railways ",
        "Problem_Statement_Title": "Using existing CCTV network for crowd management, crime prevention, andwork monitoring using AIiML",
        "Description": "The Indian Railways is one of the largest railway networks in the world,serving millions of passengers daily. However, with the increasing number of passengersand trains, the management of railway stations and trains has become a challenge,especially when it comes to crowd management, cleanliness, crime prevention, and workmonitoring. The traditional methods of manual monitoring and surveillance are time-consuming, and human error can lead to missed incidents. The integration of AI and ML technology can help the Indian Railways to overcome thesechallenges. Al-based CCTV networks can analyze large amounts of data in real-time andprovide insights into crowd management, crime prevention, and work monitoring. Thiscan improve the safety and security of passengers, as well as the efficiency of railwayoperations. For example, AI algorithms can detect unusual behavior and alert securitypersonnel, while ML algorithms can predict crowd patterns and help with resourceallocation.However, implementing Al-based GCTV networks requires a significant investment intechnology and infrastructure, as well as the development of data management systemsthat can handle the large amount of data generated by these systems. Additionally,privacy and ethical considerations must be taken into account to ensure that the use ofAItechnology does not infringe on the rights ofpassengers or workers.In conclusion, the use of AI and ML technology in the analysis of existing ccrvnetworks of the Indian Railways can bring about significant benefits for crowdmanagement, crime prevention, and work monitoring. However, careful planning andimplementation are required to ensure that these benefits are realized while respecting theprivacy and ethical concerns ofstakeholders",
        "Category": "Software ",
        "PS_Number": "SIH1349",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "Government of Jammu and Kashmir ",
        "Problem_Statement_Title": "Artificial Intelligence Driven Digitization of Cadastral Maps",
        "Description": "The Digitization of Cadastral Maps as Part of Land Records Automation Project is done manually in AutoCAD Maps by drawing lines and inserting survey numbers which is quite a labor-intensive task. Once the lines are redrawn over the existing maps, an error occurs within the map by not properly joining the lines. The Problem Statement aims to design an Al driven model that can detect the line on the scanned hand-drawn image and survey numbers and automate the process of drawing and correction by reading the existing map data from a various file formats (.jpg..jgw,.dwg..bak), so that the whole digitization process becomes quick and robust. Designing such a tool can give a huge boost to the digitization of all the hand-drawn cadastral maps with minimum human intervention Experts IIT Jammu",
        "Category": "Software ",
        "PS_Number": "SIH1350",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "Government of Jammu and Kashmir ",
        "Problem_Statement_Title": "Digital Generator Monitoring Diesel generators are widely used as backup power sources in industries, homes, and remote locations",
        "Description": "Digital Generator Monitoring Diesel generators are widely used as backup power sources in industries, homes, and remote locations. However, manual monitoring of diesel generator performance, fuel consumption, and maintenance requirements are time-consuming and prone to errors. This leads to inefficiencies, higher costs, and potential downtime. The challenge is to design a solution that can automate real-time monitoring and controlling of diesel. generator performance and maintenance requirements. The solution should collect and analyse data related to generator performance, fuel consumption, and maintenance needs and provide actionable insights and alerts to users. The overall goal is to improve efficiency, reduce costs, and minimise downtime of diesel generators by providing real time monitoring and predictive maintenance capabilities.",
        "Category": "Software ",
        "PS_Number": "SIH1351",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "Government of Jammu and Kashmir ",
        "Problem_Statement_Title": "Innovative Solution for Reducing ATandC Losses due to Power Pilferage in Electrical Sector",
        "Description": "Power department of JandK UT suffers the highest percentage of Aggregate Technical and Commercial (ATandC) losses in the country. ATandC losses of over 56% have resulted in power liabilities of Rs 14,164 crore on account of mismatches in power purchases from outside utilities and revenue collection. Power officials attribute the main reason for such high losses to power theft. Illegal tapping of overground wires and connecting crude heating gadgets especially in winter season causes damage to Distribution Transformers while also forcing unscheduled power cuts. The main way of mitigating power pilferage is by replacing Low Tension (LT) and High Tension (HT) wires with insulated overground/underground cable wires, which require significant capital investment. The objective is to develop a low-cost solution which can be installed and incorporated within the existing power infrastructure. The solution would be able to pinpoint locations and magnitude of power theft in real time and inform the concerned authorities immediately.",
        "Category": "Hardware",
        "PS_Number": "SIH1353",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "Ministry of Commerce and Industries ",
        "Problem_Statement_Title": "Contact center knowledge management tool with decision tree",
        "Description": "The problem at hand involves developing a knowledge management tool specifically designed for contact centers, aiming to streamline customer support and enhance the efficiency of agents through the implementation of a decision tree framework. Contact centers handle a vast amount of customer inquiries, and providing accurate and consistent responses is crucial for delivering high-quality customer service. The knowledge management tool with a decision tree is designed to assist contact center agents in accessing relevant information quickly and making informed decisions when interacting with customers. It leverages a decision tree structure, which is a hierarchical model that guides agents through a series of questions and steps to determine the appropriate response for a given customer query or issue.",
        "Category": "Software ",
        "PS_Number": "SIH1359",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "Ministry of Commerce and Industries ",
        "Problem_Statement_Title": "Price comparison of GeM products with other e-marketplaces",
        "Description": "The problem at hand involves developing a cost or price comparison solution specifically tailored for comparing the prices of products available on GeM (Government e-Marketplace) with other e-marketplaces or e-commerce platforms. GeM is a dedicated online platform in India that facilitates the procurement of goods and services by various government departments, organizations, and public sector undertakings. Comparing the prices of products listed on GeM with those on other platforms is crucial for ensuring fair and competitive pricing. The cost or price comparison solution aims to provide users with a convenient way to compare the prices of products available on GeM with other popular e-marketplaces or e-commerce platforms. By leveraging data scraping techniques, APIs, and data analytics, the solution will gather and analyze pricing information from multiple sources, allowing users to make informed decisions based on the best available options.",
        "Category": "Software ",
        "PS_Number": "SIH1360",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "Ministry of Social Justice and Empowerment ",
        "Problem_Statement_Title": "Despite prohibition of hazardous cleaning of sewers and septic tanks (manualcleaningof sewers and septic tanks without safety kits, safety devices andwithout adherence tosafety precautions) it is still being resorted to in manyparts of the country.",
        "Description": "Despite prohibition of hazardous cleaning of sewers and septic tanks (manualcleaning of sewers and septic tanks without safety kits, safety devices andwithout adherence tosafety precautions) it is still being resorted to in manyparts of the country. As a result,the reports of death of workers while cleaningsewers and septic tanks are still being highlighted by media. Presence ofgases like hydrogen supplied, ammonia, methane, carbon monoxide andSulphur dioxide in sewers and septic tanks, beyond certain limits, make theatmosphere in the sewers and septic tanks, hazardous, resulting infatal accidents. Cleaning of sewers and septic tanks can still be risky even withthe use of PPE Kit, Safety devices.Solution:At present, there are gas monitors of various kinds, which are available. Thereis a need of a device which can monitor the availability of these gases while aworker is on the job of cleaning, so that the persons/supervisor availableoutside the sewer/septic tank can get alarm/notification that the atmosphere inthe sewer/septic tank is not suitable for entry/working in a sewer or septictank. This device can save the lives of many people working in sewers andseptic cleaning operations.",
        "Category": "Hardware",
        "PS_Number": "SIH1368",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "Government of Jharkhand ",
        "Problem_Statement_Title": "Real time monitoring of infrastructure development",
        "Description": "Today, each sector, such as education, health, agriculture, etc., is growing at a fast pace, and so is the infrastructure required for each sector. Developing infrastructure for each sector is a huge task and involves huge costs. Currently, a few tools are being used to monitor the day-to-day progress of the infrastructure, but they are all manual. This results in additional costs and the untimely completion of the infrastructural projects; thus, it affects the overall development of any sector. For further clarification, consider the infrastructure development associated with the education sector. If any government wants to set up a technical institute, it has to go through multiple processes, and one of the major processes is the timely establishment of the institute. With geo-tagging, it is possible to identify the chunk of land within the given location, district, town, etc., but the major challenge lies when it comes to the development of infrastructure. Currently, there is no mechanism available to monitor the progress on a real-time basis, so lots of manual intervention happens to monitor the progress. To overcome this issue, it is necessary to develop GIS and Al-based solutions through which real-time monitoring of the infrastructure can be done. Further, an application can also be developed that can work in both online and offline mode and through which day-to-day progress can be fed into the system. Thus, collected data can be populated into the system, and real-time monitoring using interactive dashboards and charts is possible. Further, the system will also provide flexibility to the user through simulation interference, which will help the user analyze the impact of an external factor on the time required for completion of the project.",
        "Category": "Software ",
        "PS_Number": "SIH1370",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "Ministry of Power ",
        "Problem_Statement_Title": "Creation of Live Digital Twins for the powerProjects and integration with all existingmonitoring and database system which will give aholistic real time approach to the project and plantfrom all aspect of construction, operation andmaintenance.",
        "Description": "The comprehensive model should be able to feed-in real time data input andgive the necesaary output parameters. For example for a Hydro Project , theinflow input of water in the river should be able to give the real time data ouputsuch as Energy output, Spilling(if any), Head loss, etc. .It would be a similardynamic digital replica/mimicry of the real project.",
        "Category": "Software ",
        "PS_Number": "SIH1377",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "Ministry of Environment ",
        "Problem_Statement_Title": "Behavioural change monitoring software",
        "Description": "A software that allows the ministry to monitor the success of theirbehavioural nudges in real time with respect to consumer choices andenvironmentally friendly actions. The software will define certain measurableoutcome indicators and track the changes in them over time. The changes will becorrelated to LiFE activities and awareness programmes to measure the successof the behavioural nudges.",
        "Category": "Software ",
        "PS_Number": "SIH1391",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "Ministry of Environment ",
        "Problem_Statement_Title": "E-Waste Facility Locator",
        "Description": "Website that tells you the location of the nearest e-waste collectionand recycling facility. Offers educational pop-ups on the harmful components ofyour e-waste and their effects on the environment and human health if notdisposed correctly. There could be an option to input the model of your old deviceand earn credit points relative to the amount of precious metals recovered from thedevice if disposed correctly.",
        "Category": "Software ",
        "PS_Number": "SIH1392",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "Ministry of Environment ",
        "Problem_Statement_Title": "Water and Electricity Tracking App",
        "Description": "A mobile application that helps you limit your water and electricityusage to a predetermined goal by outlining the behavioural change that would berequired to meet those targets. Behavioural nudges ought to be embedded in theuser experience based on deep research about the best practices of efficient waterand electricity usage from around the world.",
        "Category": "Software ",
        "PS_Number": "SIH1393",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "Ministry of Home Affairs ",
        "Problem_Statement_Title": "Chatbot based helpdesk for govt employees and departments",
        "Description": "Govt. employees and departments need help in various process of general business nature ranging from procurement to implementation, authority to directions, etc. Proposed Solution: Centralised and department wise Chatbot based helpdesk should be developed Benefits:1. Increase productivity2. Increase inters department coordination3. Increase job satisfaction among Govt. employees directly and indirectly in citizens.",
        "Category": "Software ",
        "PS_Number": "SIH1407",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "Ministry of Home Affairs ",
        "Problem_Statement_Title": "Augmented/ Virtual reality system for the live training of troops",
        "Description": "Develop an Augmented Reality (AR) or Virtual Reality (VR) system for the live training of troops.AR/VR system for live training of troops requires expertise in hardware, software development, content creation, and user experience design. Collaboration with domain experts, instructional designers, and technology specialists can help ensure the system meets the specific needs of the military training environment.",
        "Category": "Software ",
        "PS_Number": "SIH1410",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "Ministry of Defence ",
        "Problem_Statement_Title": "Development of motion amplification video techniquesfor vibration analysis",
        "Description": "Motion Amplification video (MAV) is a technique forvisualizing and measuring vibration of structures andmachinery. This processes a video clip of an object,extracts feature that are moving from frame to frame,then amplifies and replays the motion in each frame.Defects at micro scales are rendered visible. Vibrationamplitudes and mode shape can be thereafter bedetermined. Time waveform and FFT spectrum can alsobe captured. This would be extremely useful inevaluating noise, vibration and shock on variousplatforms. It is also useful in automobile, power plants,industry and other engineering sectors.",
        "Category": "Software ",
        "PS_Number": "SIH1415",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "Ministry of Rural Development ",
        "Problem_Statement_Title": "AR/VR based application which helps visualize the complete house virtually at an early stage, which can help in cost estimation, planning andcompletion of the house in time'",
        "Description": "AR/VR technology based solution will help the beneficary to get a virtual miniature of the completed house at an early stage and will also give an estimate of the cost so that the beneficiary can do thenecessary planning before starting the construction.",
        "Category": "Software ",
        "PS_Number": "SIH1428",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "Ministry of Rural Development ",
        "Problem_Statement_Title": "Develop a solution to identifo discrepancies in Quality Monitoring Data on OMMAS and generate reports that highlight areas wherecorrective action is Required.",
        "Description": "The task is to develop a solution that leverages the quality monitoring data available on OMMAS to identify discrepancies between various data sources, The data is collected through an E-form report and test datasheet filled by second and third-tier quality monitors (QMs) and a quality control register (QCR) scanned copy uploaded by State/ Project lmplementation Units (PlUl.1. The QM report (which has been digitalized and called an E-from) we currently get from OMMAS is filled in by Quality Monitors (QMs). Ihe report contains data on all road layers and other pertinent information, such as geometry road furniture, drains, etc. The report includes values of important parameters from DPR, values recorded at the site by second and third-tier quality monitors, Yes/No answers, and values from QCR.2. The test report/datasheet contains values recorded at the site for every test. Test results need to be recorded in the QM report (E-form) for each test. This report is cunently uploaded by QMs as a scanned pdf. lt will be digitized in a few days, and we will receive the inspection data in digitized format only.3. Qualfi Control Registers (QCR) are the record of the tests conducted at the site by theContractor engineer and the authority engineer (JE, AE and EE). eCn has two parts. eCR part-r needs to be filled and maintained by the contractor, and part_ll needs io be filled bv the authority/ project imprementation unit (pru). prUs currentry ,pu.J ecn, ., scanned pdf copies. The solution should be able to compare the data from these sources with the standard values for each test and analyse the three sources separately. The aim is to identifo discrepancies in the data and enable effective quality monitoring of the processes involved. The solutionshould be able to process large volumes of data and provide actionable insights that can beused to improve the quality of the processes being monitored.Probable Outputs:1. Develop a machine learning algorithm/tool that can analyze the quality monitoring dataon OMMAS and identifo discrepancies between the different sources of data. Thealgorithm can be trained on historical data to identif patterns and use thess patterns topredict discrepancies in real-time. The output of the algorithm can be used to generatereports that highlight areas where corrective action is required.2. Build a dashboard that visualizes the quality monitoring data on OMMAS and enablesusers to compare the data from different sources. The dashboard can be customized todisplay data in various formaG, such as tables, charts, and graphs. The users can interactwith the dashboard to drill down into specific data points and identifo discrepanciesbetween the different sources of data.3. Develop a data processing pipeline that automates the process of analyzing the qualitymonitorin8 data on OMMAS. The pipeline can be designed to intest data from differentsources, such as the QM report (E-form), test reports, and QCRs. The pipeline canthenprocess the data using various tools and techniques, such as data cleaningtransformation, and analysis. The output of the pipeline can be used to generate reportsthat highlight areas where corrective action is required.4. Use natural language processing (NLP) techniques to analyze the quality monitoring dataon OMMAS and identifo discrepancies between the different sources of data. NLPtechniques can be used to extract relevant information from the QM report {E-form), testreports, and QCRs, and compare this information to identifo discrepancies. The output ofthe NLP analysis can be used to generate reports that highlight areas where corectiveaction is required",
        "Category": "Software ",
        "PS_Number": "SIH1429",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "Autodesk ",
        "Problem_Statement_Title": "Students to use Autodesk Fusion 360 to research and to generate NC code with machine details and tool library for any industrial component. For additional information and detailed problem statement",
        "Description": "Students are supposed to use Fusion 360 Software to generate NC code withmachine details and tool library for any industrial component.students should possess technical skills in areas such as CAD/CAM software, G-codeprogramming, toolpath optimization, and machining fundamentals. Additionally,their project ideas should demonstrate a viable solution to a real-world problem,ensuring feasibility and practicality in implementation.Computer-Aided Manufacturing (CAM) is the use of software and computer-controlledmachinery to automate a manufacturing process. Based on that definition, you need threecomponents for a CAM system to function: Software that tells a machine how to make aproduct by generating toolpaths. Machinery that can turn raw material into a finishedproduct. Post Processing converts toolpaths into a language machines can understand. Fromhigh-efficiency roughing with Adaptive Clearing to simplified control of multi-axis machineswith Tool OrientationParticipation Guidelines for Idea Submission:Each student team should submit Fusion 360 public link (toolpath included for Machining) of the Design and a PowerPoint presentation (5-7 Slides).Designs should be created using only Fusion 360 and not copied or taken from any other source.For Finale: Students must use Fusion 360 to design, Tool Path Simulation, and generate G-Code to the given final design during the finale within the given time-period and constraints, and present the following in front of the jury members:PPT explaining the final projectPublic link of the designG-code FileMarking Criteria MarksComplexity of product (CAD) 10Out-of-the-Box Thinking and Practicality 20Selection of Machine, Tools and Machining Process 30Machining Simulation 20G-code programming for CNC machine 20Total marks 100",
        "Category": "Hardware",
        "PS_Number": "SIH1443",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "National Technical Research Organisation,(NTRO) ",
        "Problem_Statement_Title": "Design, develop and implement a software bill of materials (SBOM) generation tool that can generate the complete SBOM of custom-developed software (including in-house developments by organisations)",
        "Description": "SBOM stands for Software Bill of Material and lists out all thepackages / modules used from various repositories to make the final solution. This list is essential for identification of vulnerabilities that may impact the final solution.This is critical for supply chain vulnerability management of solutions deployed within the organisation.Thus the task for developers is to develop a software which automatically lists various libraries, dependencies and modules that have been used for making of a given application and generates underlying SBOM. There would be added focus oncreating features which can red flag anomalies with an ability to lay out the context to the user. The evaluation shall be based on automation, granularity and accuracy of the SBOM generated. Example, if the developer can identify the version of thelibraries used, it shall be graded higher. Ease of use and user experience are other important metrics of evaluation.",
        "Category": "Software",
        "PS_Number": "SIH1449",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "National Technical Research Organisation,(NTRO) ",
        "Problem_Statement_Title": "Develop and deploy a Large Language Model (LLM) based tool for generating human like responses to natural language inputs for network not connected over internet",
        "Description": "LLMs have been released by various entities / research organizations for academic and commercial use. These models can be used for generating human like responses on text based systems with server-client model.The objective of the problem is to develop a tool for network not connected to internet with following basic functions:(a) AI/ML based Text Summarization of given text.(b) Summarization of Science andamp; Technology (Sandamp;T) related documents.(c) Summarization of NEWS papers headlines and editorial pages for quick overview of specific topics.(d) Reformatting and grammar checks with contextual integrity.(e) Additional capabilities which the developer can incorporate based on features available in open source LLM models.The solutions shall be graded on the capabilities, ease of use, flexibility and scalability of deployment and number of compatible models.",
        "Category": "Software",
        "PS_Number": "SIH1450",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "MathWorks India Private Limited ",
        "Problem_Statement_Title": "Get Fit Faster with a High-Tech Tracker: Analyze Human Activity and GPS Data for Improved Results",
        "Description": "Description (Background, Detailed Description, and Expected Solution):Various fields require Human Action Recognition (HAR) to function optimally. For instance, the healthcare sector needs HAR to monitor the activities of patients, the elderly, or people with specific needs. By doing so, it can offer prompt services and make decisions in real-time according to the requirements. Similarly, the sports industry also utilizes HAR to track a player's performance by monitoring their movements, identifying and comparing the actions performed, and conducting automatic statistical analysis. Consequently, it is essential to implement such workflows quickly and more efficiently based on specificdomain requirements. An effective solution is to consider various sensor data from mobile phones, such as accelerometers and GPS, and analyze such short-duration time series data. The analysis may aim at estimating the activity, distance traveled, steps taken, calories burned, and altitude climbed, among others.The solution is expected in the form of Android/iOS app that is developed using Simulink (with the help of Android/iOS support packages).References links below:1. Counting Steps by Capturing Acceleration Data from Your Mobile Devicehttps://in.mathworks.com/help/matlabmobile/ug/counting-steps-by-capturing-acceleration-data.html2. Acquire GPS Data from Your Mobile Device and Plot Your Location and Speed on a Maphttps://in.mathworks.com/help/matlabmobile/ug/acquire-gps-data-and-plot-your-location-and-speed-on-a-map.html3. Human Activity Recognition Simulink Model for Smartphone Deploymenthttps://in.mathworks.com/help/stats/human-activity-recognition-simulink-model-for-deployment.html4. High School Students Create Fitness Trackers for MATLAB STEM Challengehttps://blogs.mathworks.com/student-lounge/2019/06/05/fitness-trackers-stem-challenge/5. Introduction to Machine Learninghttps://in.mathworks.com/videos/series/introduction-to-machine-learning.htmlYouTube Link/Video Link (3-minute video explaining the problem statement):Signal Processing and Machine Learning Techniques for Sensor Data Analytics* https://www.youtube.com/watch?v=GZ3KUPqA1JM",
        "Category": "Software",
        "PS_Number": "SIH1457",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "AICTE ",
        "Problem_Statement_Title": "Integration of AI for Adaptive Learning for MCQ Selection in PARAKH",
        "Description": "All India Council for Technical Education (AICTE) has implemented a large-scaleprogram to assess and improve the skills of engineering students in India in AICTE Approved TechnicalInstitutions across the country. In respect of analysis, each of the online assessments (including thosetesting academic skills and those testing higher order thinking skills) is used for comparing studentoutcomes.More specifically, each of the Online assessments will be considered as unidimensional, reliable, and goodat measuring a range of student ability. The vast majority of the items should also demonstratepsychometric characteristics of students. A Questions bank is already prepared and random selection ofquestions has been selected for the assessment.However, for the further development PARAKH teams needs a web-based adaptive multiple-choicequestion (MCQ) testing system that delivers MCQ assessments to users over the internet and adapts thequestions based on the user's performance and abilities. A Pre-assessment or initial knowledgeassessment can be designed to gauge the user's baseline knowledge; an initial assessment may beconducted. This assessment can consist of a set of MCQs covering different topics or difficulty levels.Based on that result a final assessment can be prepared. The system employs an adaptive algorithm thatanalyzes the user's responses, time spent on each question and level of difficulty and number of timequestions has been asked in the past and also for performance data from the pre-assessment todetermine their knowledge level and proficiency in specific areas. The algorithm uses this information toselect subsequent questions that appropriately assessment to the students. Based on the adaptivealgorithm, the system selects the next set of MCQs from a question bank. The questions chosen may varyin difficulty and content based on the student's performance. For example, if the student answers aquestion correctly, the platform may present a more challenging question next, while an incorrect answermay result in an easier question. AI based question generation should be integrated in the portal so thatno random question is picked from the database and overall performance will be low.",
        "Category": "Software",
        "PS_Number": "SIH1460",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "AICTE, MIC-Student Innovation ",
        "Problem_Statement_Title": "Student Innovation",
        "Description": "Ideas focused on the intelligent use of resources for transforming and advancements of technology with combining the artificial intelligence to explore more various sources and get valuable insights.",
        "Category": "Hardware",
        "PS_Number": "SIH1482",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "AICTE, MIC-Student Innovation ",
        "Problem_Statement_Title": "Student Innovation",
        "Description": "Ideas focused on the intelligent use of resources for transforming and advancements of technology with combining the artificial intelligence to explore more various sources and get valuable insights.",
        "Category": "Software",
        "PS_Number": "SIH1495",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "AICTE, MIC ",
        "Problem_Statement_Title": "Develop a Proctored exam tool for shortlisting the candidates for the national and international level hackathons.",
        "Description": "The problem at hand is to develop an efficient and reliable Proctored Exam Tool that automates the proctoring process and enables institutions, organizations, and testing agencies to administer secure and scalable remote examinations. The Proctored Exam Tool should aim to address the following challenges:1. Remote Monitoring: The software should allow proctors to remotely observe the exam-takers via webcam and screen sharing to ensure that no unauthorized assistance is provided during the exam.2. Identity Verification: Implement a robust identity verification mechanism to ensure that the exam-taker is the intended praticipants, preventing impersonation and fraud.3. Cheating Prevention: Incorporate advanced monitoring features, such as real-time AI-based facial recognition, eye tracking, and suspicious behaviour detection, to identify and flag potential instances of cheating.4. Secure Environment: Ensure that the exam environment remains secure by disabling access to unauthorized resources like other applications, websites, or external devices during the examination.5. Data Privacy: The tool should adhere to stringent data privacy and security standards to protect sensitive information of both exam-takers and organisers.6. User-friendly Interface: Design an intuitive and user-friendly interface for both proctors and exam-takers to facilitate easy navigation and seamless exam administration.7. Scalability: The software should be capable of handling a large number of concurrent exam-takers without compromising on performance or security.8. Compatibility: Ensure compatibility with different operating systems, browsers, and devices to accommodate diverse user preferences and accessibility needs.9. Integration: The Proctored Exam Tool should be able to integrate with various application and assessment platforms commonly used in institutions, organizations, and testing agencies.10. Reporting and Analytics: Provide comprehensive exam reports and analytics to assist institutions in evaluating exam performance, identifying trends, and making data-driven decisions.",
        "Category": "Software",
        "PS_Number": "SIH1498",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "Ministry of Ports, Shipping and Waterways ",
        "Problem_Statement_Title": "Leveraging the power of deep learning to overcome the challenges of marine engineering and improve vessel operations:",
        "Description": "Developing an artificial neural network for the marine industry presents significant challenges, including limited computing power, unreliable communication infrastructure, low availability of data and complex vessel systems.The goal of this problem is to design and develop an effective AI solution using deep neural networks that can optimize vessel performance, reduce operational costs, and improve safety in the context of merchant vessel operations.The solution must be able to demonstrate high accuracy, robustness, and scalability, while also addressing the unique challenges faced by the marine industry.Participants are encouraged to explore novel approaches to training and deployment, including techniques for data processing, feature extraction, and model optimization.",
        "Category": "Software",
        "PS_Number": "SIH1506",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "Ministry of Housing and Urban Affairs ",
        "Problem_Statement_Title": "Centralized Monitoring System for Street LightFault Detection and Location Tracking",
        "Description": "Electricity is the critical need for progress of the livelihood.ln many Indian cities, the maintenance of street lights has become a challenging and inefficient process due to the lack of a centralized monitoring system. ldentifying faults, such as non-functioning lights, current leakage and cable breakage, relies on citizen grievances, leading to delays, increased costs, and safety concerns. Linemen spend valuable time manually searching for faults, diagnosing issues, and fixing them, which can take several days to complete. The absence of precise fault location information further complicates the process. To overcome these obstacles, we seek an innovative solution that provides realtime fault detection, accurate identification of fault types, and precise location tracking of faulty street lights. This solution aims to empower linemen with efficient fault management capabilities, reducing their workload and ensuring timely maintenance. Moreover, it should enable the local authorities to proactively address faults, enhance service quality, and optimize street light maintenance processes in their respective cities..The prime aim of this problem statement is to develop a \"Automated Defect Detection and Prevention Assistance with Effective Governance for Cities in India\"\"\"",
        "Category": "Hardware",
        "PS_Number": "SIH1512",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "Ministry of Housing and Urban Affairs ",
        "Problem_Statement_Title": "Smart and Effective realtime Management of street parking",
        "Description": "ln lndia, the number of vehicles is constanfly on the rise, while the availability of parking space in cities has not kept pace with the increasing vehicle numbers, primarily due to the rapid groMh in population. Consequenfly, issues such as traffic congestion, narrowed streets due to on-street parking, a mismatch between parking supply and demand, and illegal parking have become all too familiar in lndian cities. Parking space has become a scarce commodity, and instead of simply increasing the number of available parking spaces, it is crucial to employ effective technology-based solutions to optimize their utilization. Smart parking solutions, utilizing sensors and software, can provade realtime information on available parking spaces to both city officials and drivers. Furthermore, leveraging emerging technologies can help optimize parking prices. A low parking price may encourage more vehicles on the road, leading to increased air and noise pollution, whereas too high prices may generate less revenue and less efectuve resource usage.Apart from the loss of revenue for operators, there is economic downside to the business in vicinity, effect on government taxes, employment.At the same parking space area and costs also have a corelation to balance optimum usage and revenue. Therefore, setting the right price for parking based on demand and optimizing occupancy is the best approach. The primary objective of the solution should be to equip city administrators with an effective parking management tool that can predict, manage, and finance parking in cities. An app should be developed to allow citizens to conveniently reserve pce king spots and make payments based on dynamic pricing This not only saves citizens' time spent searching the parking but also reduces environmental degradation resulting from congestion caused by parking and provides a sustainable source of revenue for the cityadministration. We need an innovative, simple and widely coveraged parking needs in the city and also become most compliant for Traffic and mobility needs.",
        "Category": "Software",
        "PS_Number": "SIH1515",
        "Domain_Bucket": "Smart Automation"
      },
      {
        "Organization": "Ministry of Housing and Urban Affairs ",
        "Problem_Statement_Title": "Suggest an Al-based solution to enable ease of grievance lodging and tracking forcitizens across multiple departments",
        "Description": "A robust grievance redressal mechanism is a crucial component of any administration. An efficient and effective procedure for addresstng grievances demonstrates an administration's accountability responsiveness, and user-friendliness. However, the ease of lodging a complaint or grievance by citizens is often lacking in many lndian cities. Given the large migratory population in tndian cities, consisting of individuals who may not be familiar with English, Hindi, or the local regional language, citizens face challenges in lodging their grievances. Moreover, the process of lodging a gflevance is not always straightforward. Some department websites are inaccessible, and locating the correct website for a specific department can be difficult. lntroducing an Al-based chatbot that allows citizens to dictate their grievances in their local language and lodge them, would greatly assist citizens. This tool should be able to understand and process complaints effectively, assign them to the relevant department, and provide citizens with a unique complaint number. Real-time updates on the status of the complaint should be sent to citizens, enabling one-on-one conversations throughout the grievance lifecycle. The primary objective of this solution should be to provide citizens with an easy-to_use chatbot that facilitates efficient lodging and tracking of grievances. This would not only save citizens' time in searching for the appropriate department or category but also enabl; the administration to receive targeted grievances and enhance overall service delivery.",
        "Category": "Software",
        "PS_Number": "SIH1516",
        "Domain_Bucket": "Smart Automation"
      }
    ]
  },
  {
    "id": "2",
    "title": "Fitness & Sports",
    "icon": <IoFitness />,
    "description": "Ideas that can boost fitness activities and assist in keeping fit.",
    "ps": [
      {
        "Organization": "Government of Gujarat ",
        "Problem_Statement_Title": "Self-identifying the mental health status and get guidance forsupport.",
        "Description": "Considering the increasing burden of the mental disorders (as evidenced in National MentalHealth Survey-2016), it is important to identify the people at the risk of developing mental disorder at earlystage to take the necessary action. Primary Health Care centre is a gate-keeper of the Indian public healthcare delivery system and also an opportunity to screen patient for the risk of developing mental disorders.There are some validated tools are available for screen of the person for risk of developing psychiatricdisorders, however, ready availability, taking response from patients, interpretation and quick guide fortaking action based on the interpretation of the tool score is still challenge for effective and efficientutilization of the screening tool. Expected Output: Mobile application for screening of mental health.Users: Public as well as Frontline Health worker.",
        "Category": "Software ",
        "PS_Number": "SIH1363",
        "Domain_Bucket": "Fitness & Sports"
      },
      {
        "Organization": "AICTE, MIC-Student Innovation ",
        "Problem_Statement_Title": "Student Innovation",
        "Description": "Ideas that can boost fitness activities and assist in keeping fit.",
        "Category": "Hardware",
        "PS_Number": "SIH1481",
        "Domain_Bucket": "Fitness & Sports"
      },
      {
        "Organization": "AICTE, MIC-Student Innovation ",
        "Problem_Statement_Title": "Student Innovation",
        "Description": "Ideas that can boost fitness activities and assist in keeping fit.",
        "Category": "Software",
        "PS_Number": "SIH1494",
        "Domain_Bucket": "Fitness & Sports"
      }
    ]
  },
  {
    "id": "3",
    "title": "Heritage & Culture",
    "icon": <GiIndianPalace />,
    "description": "Ideas that showcase the rich cultural heritage and traditions of India.",
    "ps": [
      {
        "Organization": "Government of Jammu and Kashmir ",
        "Problem_Statement_Title": "Developing solutions to effective market linkage and promotion of One District One Product.",
        "Description": "One District One Product (ODOP) is a government-led initiative aimed at promoting and marketing the unique and diverse products of Jammu and Kashmir. The program was launched with the goal of providing a platform for the local artisans and entrepreneurs to showcase their skills and to promote the local products. The focus of the initiative is to encourage the development of small and micro-enterprises, thereby creating job opportunities and boosting the local economy. The ODOP initiative covers a wide range of products, including traditional handicrafts, textiles, carpets, shawls, and dry fruits, among others. The products are manufactured using locally sourced materials, preserving the rich cultural heritage of the region. The initiative also focuses on modernizing the traditional production methods, thereby improving the quality and consistency of the products being produced. UT of Jammu and Kashmir is endowed with several diverse and niche products from each district. Ranging from high-value agricultural and horticultural produce to unique handicraft and textile products. Yet, several challenges still persist in wider outreach and equitable remuneration to local producers and artisans. Scope for developing unique software-based solutions exist at each stage from producers to final consumers; including innovative solutions for ensuring traceability through block chain, to development of platforms for direct market linkages etc. Proposal are expected to provide an in-depth understanding of the supply chain and the involved stakeholders, of specific ODOP and design hardware or software-based solution to address the challenges of a fragmented supply chain.",
        "Category": "Software ",
        "PS_Number": "SIH1355",
        "Domain_Bucket": "Heritage & Culture"
      },
      {
        "Organization": "AICTE, MIC-Student Innovation ",
        "Problem_Statement_Title": "Student Innovation",
        "Description": "Ideas that showcase the rich cultural heritage and traditions of India",
        "Category": "Hardware",
        "PS_Number": "SIH1480",
        "Domain_Bucket": "Heritage & Culture"
      },
      {
        "Organization": "AICTE, MIC-Student Innovation ",
        "Problem_Statement_Title": "Student Innovation",
        "Description": "Ideas that showcase the rich cultural heritage and traditions of India",
        "Category": "Software",
        "PS_Number": "SIH1493",
        "Domain_Bucket": "Heritage & Culture"
      }
    ]
  },
  {
    "id": "4",
    "title": "MedTech/BioTech/ HealthTech",
    "icon": <GiMedicalPackAlt />,
    "description": "Cutting-edge technology in these sectors continues to be in demand. Recent shifts in healthcare trends, growing populations also present an array of opportunities for innovation.",
    "ps": [
      {
        "Organization": "Ministry of Social Justice and Empowerment ",
        "Problem_Statement_Title": "Active Prosthetic ankle and adaptive equipment for bike riding in lower limb amputees",
        "Description": "Currently, used prosthetic systems for lower limb amputees can replicate normal human locomotion to a maximum extent which is considered a basic need; however, finding the ideal prosthetic solution for their desired lifestyle can be difficult. From the survey, it has been observed that there is a demand from the lower limb amputee population regarding the use of motorbikes for transport purposes. However, for lower limb amputees, this operation creates some inconvenience as there is no active ankle movement. Most importantly, the prosthetic feet currently used in the Indian context possess stationery ankles, and in some cases, more advanced feet use hydraulics or external-powered systems which don't solve the practical requirements of riding motorbikes for this patient population. The main functions when riding a motorcycle is gear selection and brake operation using the amputated leg. The right foot applies the rear brake on the right side of the motorbike. This is normally operated with ankle movements to press down the foot on the brake lever. Considering the inconveniences being caused to the lower limb amputees, there is a requirement for some modification options such as utilizing a modified brake lever. Alternatively, the left side of the bike has a gear selector to accentuate the controlled speed. This is usually activated by left ankle movements to move the forefoot up and down depending on whether the gears need to go up or down. The modification for the lower limb amputees may include the left-hand thumb operated up and down gear selection to module the operation of active ankle prosthesis in either direction for forefoot up and down motions at 5-10 degrees intervals to engage and disengage the gear module. Development of brake operation will be useful to resolve the practical issues of riding motorbikes in lower limb amputees, the dream of which was once upon a time lost due to the lower limb amputation",
        "Category": "Hardware",
        "PS_Number": "SIH1306",
        "Domain_Bucket": "MedTech / BioTech / HealthTech"
      },
      {
        "Organization": "Ministry of Social Justice and Empowerment ",
        "Problem_Statement_Title": "Computerized cognitive Retraining Program for Home training of Children with Disabilities.",
        "Description": "Cognitive retraining is a therapeutic strategy that seeks to improve or restore a person's skills in the areas of paying attention, remembering, organizing, reasoning and understanding, problem-solving, decision-making, and higher-level cognitive abilities. Children with Developmental Disability have various cognitive Disabilities.  It is common for children with developmental disabilities to suffer from various cognitive disabilities. Presently many therapists use manual cognitive retraining and it is also difficult to monitor home-based training. Few centers offer EEG Neuro-Feedback Training.  The present proposal is the combined form of Both EEG Neuro-feedback and home training. Clinicians can easily monitor the changes based on the progress in- home training as well as changes in EEG profile with a single software.",
        "Category": "Software ",
        "PS_Number": "SIH1307",
        "Domain_Bucket": "MedTech / BioTech / HealthTech"
      },
      {
        "Organization": "Government of Kerala ",
        "Problem_Statement_Title": "Development of Smart Toilet",
        "Description": "Even in the most modern times, we are facing the problem, especially ladies, which is not having a hygienic toilet while traveling or going out. Here the problem statements aim to the development of an automatic self-cleaning, toilet system. Instead of water washing and all, the focus here is on ultraviolet disinfection, hot air drying, and smart saving of water. The final result is a toilet like that of a home. Also, there should be a provision to know the availability of the nearest toilets in working condition. In addition to the above, the smart toilet could also include the following features:A built-in air freshener: This would help to keep the toilet smelling fresh and clean.A motion sensor: This would automatically flush the toilet and open the lid when someone approaches.A built-in bidet: This would provide a more hygienic way to clean oneself after using the toilet.",
        "Category": "Hardware",
        "PS_Number": "SIH1323",
        "Domain_Bucket": "MedTech / BioTech / HealthTech"
      },
      {
        "Organization": "Ministry of AYUSH ",
        "Problem_Statement_Title": "Development of a prototype instrument (sensor based) for assessment and quantification of rasas (taste) in crude herbs.",
        "Description": "Every herb used in the Ayurveda possesses some Taste (Rasa) and most important of them are -Madhura (Sweet). Amla (Sour), Katu (Pungent), Tikta (Bitter), Kashaya (Astringent). The rational application of herb in management of various diseases also depends on selection of herbs as per their rasa (Taste) as rasa (Taste) has the potential to effect the physiology of human body. Further, the same principle also applied for dietary items for their use in health management In fact, management of physiological units Vata, Pitta or Kapha (Body humors) may also be done on rational application of dravyastmaterials of dietary and medicinal value) based on rasa (taste). However, it is simple to identify rasa (taste) through tongue but it is not possible to quantify Further, the potency of herbs also depends on its rasa. Thus, quantification of rasa(taste) in crude herbs is also needed for quality assessment of crude herbs.Solution Need to develop an instrument (Tongucometer) which can quantify the Taste (rasa)-(Madhura (Sweet), Amla (Sour), Katu (Pungent), Tikta (Bitter), Kashaya (Astringent)) present in the materials used as diets and medicine through a sensor-based instrument?\"\"",
        "Category": "Software ",
        "PS_Number": "SIH1342",
        "Domain_Bucket": "MedTech / BioTech / HealthTech"
      },
      {
        "Organization": "Ministry of AYUSH ",
        "Problem_Statement_Title": "Identification of Different Medicinal Plants/Raw materials through Image Processing Using Machine Learning Algorithms",
        "Description": "ndia, with a rich heritage of floral diversity, is well-known for its medicinal plant wealth, but their identification is one of the major burning issues in Ayurvedic Pharmaceutics. Several crude drugs are being sold under the same name in the market leading to confusion and their misidentification. Even the collectors and traders are not completely aware of the exact morphological appearance or differentiating attributes of the many drugs owing to seasonal and geographical availability, and similar characteristics. Moreover, the extensive consumption to meet demand-supply ratio exerts a heavy strain on the existing resources. It further leads to the practice of adulteration, substitution, and disbelief in the curative capability of the system eventually. Thus, software capable of identifying different medicinal plants/ raw materials through Image Processing Using Different Machine Learning Algorithms will be of immense use. It will be helpful at every level viz. wholesaler, distributor, etc. of the supply chain of raw material being utilized in the system.",
        "Category": "Software ",
        "PS_Number": "SIH1343",
        "Domain_Bucket": "MedTech / BioTech / HealthTech"
      },
      {
        "Organization": "Ministry of AYUSH ",
        "Problem_Statement_Title": "Al-based tool for preliminary diagnosis of Dermatological manifestations",
        "Description": "The Global Burden of Disease project has shown that skin diseases continue to be the 4th leading cause of nonfatal disease burden worldwide. These conditions are often the presenting face of more severe systemic illnesses, including HIV and neglected tropical diseases (NTD). such as elephantiasis and other lymphedema-causing diseases. Additionally, skin disorders pose a significant threat to patients' well-being, mental health, ability to function, and social participation. However, it is very difficult to provide better dermatological care to under-served or resource-poor regions in a cost-effective manner owing to unavailability of efficient diagnostic tools, lack of connectivity, and poor laboratory infrastructure etc. Moreover, there is also a scarcity of physicians with dermatological training. Even, preliminary screening of a dermatological manifestation seems to be an arduous task. Thus, developing an Artificial intelligence-based tool (through Image processing technique) for preliminary diagnosis of numerous dermatological conditions will prove to be a boon in the health care system.",
        "Category": "Software ",
        "PS_Number": "SIH1344",
        "Domain_Bucket": "MedTech / BioTech / HealthTech"
      },
      {
        "Organization": "Ministry of AYUSH ",
        "Problem_Statement_Title": "Startup-AYUSH Portal",
        "Description": "The key objective of the Startup AYUSH portal is to be a one-stop platform for all stakeholders (Startups, Investors, Incubators, Accelerators, Government Agencies, and Public Users) in the AYUSH system to interact and collaborate in a highly dynamic environment. The portal is directed to provide a collaborative platform for all the stakeholders of the AYUSH startups to have an interactive engagement to enhance and bolster the network. It will bring together the entire AYUSH Startup community at the global level through virtual connections, mentorship, and showcase opportunities. It will have a plethora of resources and information guides to propel everyone in their entrepreneurial journey.",
        "Category": "Software ",
        "PS_Number": "SIH1345",
        "Domain_Bucket": "MedTech / BioTech / HealthTech"
      },
      {
        "Organization": "Ministry of AYUSH ",
        "Problem_Statement_Title": "Chatbot to Known Individual Prakriti (Phenotype)",
        "Description": "Ayurveda is a natural health care system that emphasizes the treatment of disease in a highly individualized manner as it believes that every individual is unique having a differentconstitution. It classifies all individuals into different 'Prakruti' types based on the theory of tridosha and each type has a varying degree of predisposition to different diseases. This is independent of racial, ethnic, or geographical considerations. Knowing which particular Prakruti one belongs to, enables them to decide the preference of food which suits them best. By following the rules and regulations regarding food and lifestyle, one can prevent themselves from getting inflicted with various diseases. But, Prakruti assessment is a tedious process that requires the individual to visit the physician followed by a long list of questions in order to reach a conclusion. In order to make this process more convenient, the development of a self- assessment tool with the help of artificial intelligence may prove to be a stepping stone. A Chatbot which has pre-recorded questionnaire may help in the Prakruti assessment depending upon the responses given by an individual.",
        "Category": "Software ",
        "PS_Number": "SIH1346",
        "Domain_Bucket": "MedTech / BioTech / HealthTech"
      },
      {
        "Organization": "Ministry of AYUSH ",
        "Problem_Statement_Title": "A software that suggests drugs and formulations for a disease/pharmacological property based on the Ayurvedic classical books/Repositories.",
        "Description": "Ayurveda has a large database of single herbs, minerals, and formulations that have been tailormade to suit each individual, his/her psychosomatic constitution, clinical condition, comorbidities, age, region, etc. These data are spread over more than 150 texts, amidst manuscripts in multiple languages and scripts. With the rise of transcriptional and translational facilities, several traditional medicinal texts are now available in their digitized forms. But for an Ayurvedic student or practitioner, exploring this multitude of literature for identifying their \"\"drug of choice' often becomes tedious and impractical. Here is the need of a custom software that can identify the apt formulation that has been designed to treat a constellation of symptoms and present it to the student/practitioner along with its reference and other desired properties. For example, the two formulations Punarnavadi Kashaya and Vyaghryadi Kashaya are mentioned in texts as follows:  Both these are decoctions advised in Jvara (fever) and Kasa (cough). But in a patient with upper respiratory tract infections like common cold (Pinasa), Vyaghryadi would suit better than Punarnavadi. Whereas in a condition associated with inflammatory changes all over the body. I Punarnavadi would be the appropriate choice. The objective of the proposed software is to identify the single drugs and formulations that suit a set of symptoms. Certain ingredients (eg. jaggery) are unsuitable for certain categories of patients (e.g. diabetics). There are also medicine mediums that are unsuitable for specific diseases (e.g. fermented/alcoholic preparations in diabetes). Such information is also expected to be conveyed to the learner or practitioner who uses the software.  The same disease has been mentioned in different names (E.g. Jvara and Santapa for fever) and the same word has been used to denote different (Eg. Abhaya generally means Terminalia chebula but in the context of Jatyadi ghrita, it means Vetiveria zizanioides. The multiple names of same diseases are expected to be included in the tags of each formulation. The sources for the formulations, and synonyms and similar words have been included in the data section. It is also desirable to include the Ayurvedic pharmacological properties of the single drugs, and the compound formulation (called Rasa, Guna, Virya, Vipaka, etc.) as and where available.",
        "Category": "Software ",
        "PS_Number": "SIH1347",
        "Domain_Bucket": "MedTech / BioTech / HealthTech"
      },
      {
        "Organization": "Govt of Himachal Pradesh ",
        "Problem_Statement_Title": "Optimizing Doctor Availability and Appointment Allocation in Hospitals through Digital Technology and Al Integration.",
        "Description": "To develop a digital system that streamlines the appointment scheduling process in hospitals by automating the process of identifying doctor availability and appointment slot allocation. The system will utilize advanced technologies such as RFID, face detection, proximity of Mobile phone, or any other relevant technology to detect the presence of doctors in the hospital.The system will use Artificial Intelligence (AI) to allocate appointment slots based on the doctor's presence and the number of waitlisted patients. This will improve the overall patient experience by reducing the wait time. In conclusion, the proposed digital system will improve the efficiency and convenience of the appointment scheduling process in hospitals; the patients will benefit with reduced waiting time.",
        "Category": "Software ",
        "PS_Number": "SIH1383",
        "Domain_Bucket": "MedTech / BioTech / HealthTech"
      },
      {
        "Organization": "Ministry of Micro, Small and Medium Enterprises ",
        "Problem_Statement_Title": "Development of business models for collection and utilization of single usc plastics and various other industrial wastes",
        "Description": "Industrial waste is the wastc produced by industrial activity which includcs any material that is uselcss during a manufacturing process. It is hazardous to human health and environment. We are looking for a software solution which would help in development of business models for collection and utilization of singlc use plastics and various other industrial wastcs by using items like: a. Ceramics b. Bamboo c. Wood d. Jute e. Cloth g. Tetra packs, etc. It should lead to utilizing thc industrial waste at appropriate place, generate some revenue stream/busincss model and cause less harm to environment.",
        "Category": "Software ",
        "PS_Number": "SIH1397",
        "Domain_Bucket": "MedTech / BioTech / HealthTech"
      },
      {
        "Organization": "Ministry of Micro, Small and Medium Enterprises ",
        "Problem_Statement_Title": "Development of Technology for manufacturing of mind control BIONIC hand with a sense of touch",
        "Description": "For the more than 5 million people in the world who have undergone an upper-limb amputation, prosthetics have come a long way. Beyond traditional mannequin-like appendages, thcrc is a growing number of commercial neuroprosthetics-highly articulated bionic limbs, engineered to sense a user's residual muscle signals and robotically mimic their intended motions.But this high-tech dexterity comes at a price.Neuroprosthetics can cost tens of thousands of dollars and are built around metal skeletons, with electrical motors that can be heavy and rigid.",
        "Category": "Hardware",
        "PS_Number": "SIH1399",
        "Domain_Bucket": "MedTech / BioTech / HealthTech"
      },
      {
        "Organization": "Ministry of Social Justice and Empowerment ",
        "Problem_Statement_Title": "Ear Electronic Device for Tinnitus Frequency Finding and Adjusting to Provide Relief to Tinnitus Suffering Patient",
        "Description": "Various studies have shown that when a person suffers with TINNITUS NOISE he suffers due to anxiety or stress, as these stimulate an already sensitive hearing system which effects his day to day work performing, which has an impact on his livelihood and family. One of the effective treatment consists of using an electronic device to suppress the tinnitus noise. Which finding the frequency of the tinnitus. noise and suppressing requires a lot of instrumental support. Thus if t can be possible that by observing and analysing the tinnitus noise by the electronic device in the ear, the device itself finds the tinnitus noise frequency and suppress it accordingly, bringing benefit to the patient suffering from tinnitus.",
        "Category": "Software ",
        "PS_Number": "SIH1402",
        "Domain_Bucket": "MedTech / BioTech / HealthTech"
      },
      {
        "Organization": "Ministry of Social Justice and Empowerment ",
        "Problem_Statement_Title": "APP Based Digital Audiometer",
        "Description": "To know a person Hearing Loss, generally we use a Pure Tone Audiometer. To use this it requires a bulk of the instrument to be carried. This testing requires a considerable amount of time for testing. It was observed that during a large level hearing testing it is consuming much time. So a hand held Mobile phone operated APP BASED AUDIOMETER will be of immense useful in finding and detecting the hearing loss in children in a schools ",
        "Category": "Software ",
        "PS_Number": "SIH1403",
        "Domain_Bucket": "MedTech / BioTech / HealthTech"
      },
      {
        "Organization": "Ministry of Social Justice and Empowerment ",
        "Problem_Statement_Title": "Low-cost Myoelectric Prosthetic Arm",
        "Description": "In India the cost of a new Myoelectric/Bionic prosthetic arm can range from 1lakh - 2 lakh Rupees, putting the Myoelectric hand out of reach of many middle-class and lower middle-class patients/amputee, we decided to design and build a far cheaper and pocket friendly version of prosthetic arm with Myoelectric capabilities. We are using 3-DPrinting technology for the structure of the prosthetic hand, and servo motors and Arduino for the mechanical purpose, Myoware muscle sensor is responsible for reading the electrical signals generated by muscle. These components and microprocessor can bring the cost of the prosthetic arm much cheaper and pocket friendly for the patient/amputee.",
        "Category": "Hardware",
        "PS_Number": "SIH1404",
        "Domain_Bucket": "MedTech / BioTech / HealthTech"
      },
      {
        "Organization": "Ministry of Social Justice and Empowerment ",
        "Problem_Statement_Title": "Develop therapy materials in Hindi for misarticulation children",
        "Description": "Many treatments are available to treat misarticulation, speech therapy or articulation therapy focuses on pronunciation and talking. It deals with a person's ability to move the lips, tongue, teeth, and jaw to produce speech sounds. Misarticulation therapy is one of the most effective treatments for the articulation problems but all are treatments are available in English for that we need materials or treatments in Hindi version that will help individual to treat articulation problem in our Indian context. We need software in which there are number of therapy activities and techniques should be involve in which 3 to 4 domain will be included that is 1. Position level in which position of sound will be shown 2.Phoneme level (Initial, medial and final level in which all the words should be there in all three level) 3.Picture level in which word related picture should be present and last included number of correct and incorrect word individual speak, will be shown it will help individual to determine their incorrect word production. So if this kind of app should be prepare in Hindi version it will very helpful for the professional along with children and their parents. I will share some link which is in English version.",
        "Category": "Software ",
        "PS_Number": "SIH1405",
        "Domain_Bucket": "MedTech / BioTech / HealthTech"
      },
      {
        "Organization": "Ministry of Social Justice and Empowerment ",
        "Problem_Statement_Title": "Development of Augmentative and Alternative Communication (AAC) in Indian context",
        "Description": "communication is very important for exchanging the need, Idea and feeling among others. ACC is an option for nonverbal mode of communication for the persons with communication deficit. This mode is especially used by non verbal individuals. Those who are having multiple disability and communication deficit, they must have to communicate with others but due to lack to motor coordination, intellectual deficit and sensory perceptual deficit not able to communicate with others. This is the major problem related of communication for the multiple disability or mainly those were having maximum deficit in motor coordination for communication, Due to communication deficit peoples are not able to communicate with the society. HITECH AAC is available in India which is developed in Foreign Countries that is very costly. There is need to develop an electronically low cost AAC and hardware made in Indian context. If AAC electronic device and hardware mode will be develop in Indian context, it will be easy and helpful for persons with nonverbal communication deficit. If it is developed low cost effective as per Indian context then it will be benefits the most of the population from AAC.",
        "Category": "Hardware",
        "PS_Number": "SIH1406",
        "Domain_Bucket": "MedTech / BioTech / HealthTech"
      },
      {
        "Organization": "AICTE, MIC-Student Innovation ",
        "Problem_Statement_Title": "Student Innovation",
        "Description": "Cutting-edge technology in these sectors continues to be in demand. Recent shifts in healthcare trends, growing populations also present an array of opportunities for innovation.",
        "Category": "Hardware",
        "PS_Number": "SIH1479",
        "Domain_Bucket": "MedTech / BioTech / HealthTech"
      },
      {
        "Organization": "AICTE, MIC-Student Innovation ",
        "Problem_Statement_Title": "Student Innovation",
        "Description": "Cutting-edge technology in these sectors continues to be in demand. Recent shifts in healthcare trends, growing populations also present an array of opportunities for innovation.",
        "Category": "Software",
        "PS_Number": "SIH1492",
        "Domain_Bucket": "MedTech / BioTech / HealthTech"
      },
      {
        "Organization": "Ministry of AYUSH ",
        "Problem_Statement_Title": "Development of Virtual Reality (VR) technology for Dhatuposhana Nyaya",
        "Description": "There are primerly three tissue nourishment theories known as 'Dhatuposhan Nyaya described by Acharya's. They are as follow:1. Ksheeradadhi Nyaya (Theory of Transformation)-This is compared to the conversion of milk (ksheera) into curd (dadhi) in entirety. This complete transformation of one Dhatu to another is called Sarvatma Parinama (total bio- conversion). According to this theory, nutrients getting converted into tissues.2.Kedarikulya Nyaya (Theory of Transportation)- According to this theory, nourishment of the tissues can be compared to irrigation of fields by water from a canal. This explains supply of nutrients through circulatory system.3.Khalckapota Nyaya (Theory of Selection)-Like pigeons pecking the grains from a threshing floor and carrying it back to their nests depend on the direction and the time required for them to travel. The nutrition required by a dhatu (tissue) is selected from the essence part of food being circulated. To understand and apply these principles/process at tissue level scientifically VirtualReality (VR) technology may be helpful.",
        "Category": "Software",
        "PS_Number": "SIH1501",
        "Domain_Bucket": "MedTech / BioTech / HealthTech"
      },
      {
        "Organization": "Ministry of AYUSH ",
        "Problem_Statement_Title": "Automatic Drug Dispenser",
        "Description": "The never-ending queue in hospitals is a nuisance that patients have to go through. Along with the problems being faced by patients due to suffering from diseases, standing and waiting in long queues adds on as a challenge for them to face. This leads to inconvenience to patients at physical as well as mental level. Although in this direction, some steps have been taken by the hospital management system which makes it convenient for patients to consult with doctors by registering and taking an appointment prior to the visit to hospital. But, patients still face inconvenience at the mediciner Developing a QR Code drug ATM muy resolve the situation at hand, there Page 6 + ents. A QR code in the prescription will be used to dish out the right drug from the ATM. The drug ATM should be able to dispense wide range of Ayush Medicines available in a hospital/pharmacy.",
        "Category": "Hardware",
        "PS_Number": "SIH1503",
        "Domain_Bucket": "MedTech / BioTech / HealthTech"
      }
    ]
  },
  {
    "id": "5",
    "title": "Agriculture, FoodTech & Rural Development",
    "icon": <MdAgriculture />,
    "description": "Developing solutions, keeping in mind the need to enhance the primary sector of India - Agriculture and to manage and process our agriculture produce.",
    "ps": [
      {
        "Organization": "Ministry of Jal Shakti ",
        "Problem_Statement_Title": "Automatic regulation of valves for release of water based upon soil moisture availability inthe root zone of the crop, using artificial intelligence, in a piped and micro irrigation network ofirrigation system.",
        "Description": "In modern agricultural practices, efficient water management plays a critical role in achieving optimal crop yields, conserving water resources, and maintaining ecological balance. However, existing irrigation systems often lack the precision required to deliver water tailored to the actual needs of crops, leading to water wastage, suboptimal plant growth, and environmental degradation. This problem is particularly pronounced in piped and micro irrigation networks, where traditional methods of manual control fail to adapt dynamically to varying soil moisture conditions within the root zone of crops.  The core issue lies in the absence of an automated mechanism that can regulate the release of water based on real-time soil moisture availability. The inconsistency in water distribution and the inability to synchronize irrigation with crop water requirements result in detrimental outcomes for both the agricultural yield and water conservation efforts.  To address this problem, there is a compelling need for an innovative solution that leverages artificial intelligence (AI) to enable the automatic regulation of valves for water release in piped and micro irrigation networks. By incorporating AI-powered soil moisture monitoring and decision-making processes, this solution aims to bridge the gap between water supply and crop demand, while also optimizing resource utilization and minimizing environmental impact.  Key Challenges:  Dynamic Water Demand: Crops have varying water requirements influenced by factors such as growth stage, weather conditions, and plant type. Developing an AI system capable of accurately predicting these dynamic water demands is a complex challenge.  Real-time Data Integration: Integrating real-time soil moisture data from multiple sensors across a field into a centralized AI system requires robust data collection, transmission, and processing mechanisms.  Algorithm Precision: Designing AI algorithms that can effectively analyze soil moisture data, historical trends, and other relevant parameters to make accurate decisions about water release timing and quantities.  Valve Control Mechanism: Developing an automated valve control mechanism that can respond swiftly and accurately to the AI's recommendations while considering the physical characteristics of the piped and micro irrigation network.  Adaptability: Ensuring that the AI system can adapt to changing environmental conditions, crop types, and variations in soil properties over time.  User-Friendly Interface: Designing a user-friendly interface that allows farmers and irrigation managers to monitor and intervene in the system as needed, while also trusting in the AI's autonomous decisions.  Economic Viability: Balancing the potential costs of implementing an AI-driven system with the expected benefits in terms of increased crop yield, water savings, and operational efficiency.",
        "Category": "Hardware",
        "PS_Number": "SIH1293",
        "Domain_Bucket": "Agriculture, FoodTech & Rural Development"
      },
      {
        "Organization": "Ministry of coal ",
        "Problem_Statement_Title": "Analytics based on Govt. Land Information System(GLIS) Data",
        "Description": "The Government Land Information System (GLIS) contains a vast amount of geospatial data related to land resources, land ownership, boundaries, land use, and other valuable information. However, harnessing the potential of this data and transforming it into actionable insights remains a challenge. The goal of this hackathon is to develop analytics solutions that leverage GLIS data to address critical societal challenges and support evidence-based decision-making.Participants are encouraged to explore and analyze GLIS data in creative ways to generate meaningful insights. The solutions should focus on one or more of the following domains:Urban Planning: Develop analytics tools that enable urban planners to make informed decisions regarding land use, zoning regulations, infrastructure development, and urban expansion. The solutions should help optimize resource allocation, improve urban mobility, and enhance the quality of life in cities.Infrastructure Development: Design analytics models that identify optimal locations for infrastructure projects such as roads, bridges, airports, or power plants. The solutions should consider factors like environmental impact, accessibility, population density, and existing infrastructure to support sustainable and efficient development.Environmental Conservation: Develop analytics-based approaches to monitor and manage natural resources, protected areas, and environmental impact assessments. The solutions should enable the identification of ecologically sensitive areas, conservation priorities, and strategies for mitigating environmental risks.Land Management and Governance: Create analytics solutions that facilitate efficient land administration, land registration, and land-use planning processes. The solutions should enhance transparency, streamline land transactions, prevent encroachments, and support equitable distribution of land resources.Socio-economic Analysis: Utilize GLIS data to conduct socio-economic analysis at various spatial scales. Develop models that correlate land characteristics, demographic data, economic indicators, and social factors to gain insights into patterns, disparities, and potential interventions for inclusive development.Participants should leverage their expertise in data analytics, machine learning, geospatial analysis, and visualization to create innovative solutions. The solutions should demonstrate the ability to handle large datasets, ensure data quality, provide accurate predictions or recommendations, and offer user-friendly interfaces for stakeholders to interact with the insights generated.By harnessing the power of GLIS data through advanced analytics, the proposed solutions will empower government agencies, policymakers, urban planners, environmentalists, and other stakeholders to make informed decisions, optimize resource allocation, and foster sustainable development in various domains.",
        "Category": "Software ",
        "PS_Number": "SIH1318",
        "Domain_Bucket": "Agriculture, FoodTech & Rural Development"
      },
      {
        "Organization": "Government of Kerala ",
        "Problem_Statement_Title": "Air and water quality index and environment monitoring",
        "Description": "Considering the importance of air and water to human existence, air pollution and water pollution are critical issues that require collective effort for prevention and control. Different types of anthropogenic activities have resulted in environmental dilapidation and ruin. One of the tools that can be used for such a campaign is Air Quality Index (AQI). The AQI was based on the concentrations of different pollutants: We are also familiar with the Water Quality Index (WQI), which in simple terms tells what the quality of drinking water is from a drinking water supply. There is a need for constant and continuous environment monitoring of air quality and water quality for the development of AQI and WQI, which in turn will enable clear communication of how clean or unhealthy the air and water in the study area is.",
        "Category": "Software ",
        "PS_Number": "SIH1324",
        "Domain_Bucket": "Agriculture, FoodTech & Rural Development"
      },
      {
        "Organization": "Government of Kerala ",
        "Problem_Statement_Title": "AI Assisted Tele-medicine KIOSK for Rural India",
        "Description": "Health care in rural India is still an unresolved area that demands improved and innovative solutions. The easy availability and access to expert doctors, according to the medical condition of the individual/patient can be provided by the AI-assisted telemedicine robotic Kiosk that can be set up anywhere in the village. Individuals may mark their identity through the biometric scanner. A robot may speak to the individual, enquiring about the illness. Later, the individual will be directed online to an expert doctor, via e-sanjeevani App. After the consultation, medicines and other associated services can be provided to them through the local Asha worker without any delay.",
        "Category": "Software ",
        "PS_Number": "SIH1325",
        "Domain_Bucket": "Agriculture, FoodTech & Rural Development"
      },
      {
        "Organization": "Government of Jammu and Kashmir ",
        "Problem_Statement_Title": "Traditional agriculture practices lack real-time monitoring and efficient operation on fields This leads to inefficiencies and low production levels.",
        "Description": "Traditional agriculture practices lack real-time monitoring and efficient operation on fields This leads to inefficiencies and low production levels. The purpose of the challenge is to design a solution that addresses this issue by utilizing internet of Things (IoT) technology and low-cost communication protocols. The proposed solution should integrate real-time monitoring of agriculture field data and weather conditions using Wi-Fi, cellular access, and long-distance communication protocols. The goal is to improve operational efficiency and production levels through various tasks such as irrigation practices, automated pest management, livestock monitoring, vehicle tracking, field, animal and bird tracks, and inventory monitoring. The solution will be based on loT technology and allow all these necessary tasks to be performed remotely via cellular communication protocols. Moreover, ML (Machine Learning) based techniques will be incorporated with image processing to maintain the proportion of three plant nutrients in order: nitrogen (N). phosphorus (P) and potassium (K) in the field. The objective is to design a sustainable loT solution that makes traditional agriculture practices more accessible and more efficient.",
        "Category": "Software ",
        "PS_Number": "SIH1352",
        "Domain_Bucket": "Agriculture, FoodTech & Rural Development"
      },
      {
        "Organization": "Ministry of Fisheries, Animal Husbandry and Dairying ",
        "Problem_Statement_Title": "One-stop solution for monitoring dairy plant energy consumption, hygiene and packaging waste collection from consumers.",
        "Description": "To provide a sustainable solution with regards to dairy plant operation and performance, the monitoring of plant's energy demand per unit of produce would be an essential parameter. Monitoring of plant hygiene and sanitation would play a key role through the perspective of improvements in food safety. On the consumer end of dairy product value chain, the efficient and easy mechanism for collection of packaging waste is very important aspect.It is the need of the time to have one-stop solution which would address the above mentioned aspects reliably with an integrated approach.Solution may be developed preferably based upon software integrated with associated hardware.",
        "Category": "Hardware",
        "PS_Number": "SIH1373",
        "Domain_Bucket": "Agriculture, FoodTech & Rural Development"
      },
      {
        "Organization": "Ministry of Power ",
        "Problem_Statement_Title": "Geo tagging of plantation in the catchment area of hydro project",
        "Description": "The idea is to create a system that would keep a track on growth rate andexistence of the plantation in the CAT (Catchment Area Treatment ) area. Itwould also check illegal forest activities.",
        "Category": "Hardware",
        "PS_Number": "SIH1375",
        "Domain_Bucket": "Agriculture, FoodTech & Rural Development"
      },
      {
        "Organization": "Ministry of Power ",
        "Problem_Statement_Title": "Vegetation measurement along the line corridor using satellite imagery",
        "Description": "Solution is required for identifliing vegetation height below theTransmission conductor and raising alarm for lopping them. For thissatellite imagery-based analysis is required along with trained machinelearning model to simulate growth pattern. The growth pattern ofdifferent trees is different. The solution should be able to show thecurrent height after adding the predicted increase in height (from thedate of capturing to till date) to the height derived from satellite imagery.",
        "Category": "Software ",
        "PS_Number": "SIH1379",
        "Domain_Bucket": "Agriculture, FoodTech & Rural Development"
      },
      {
        "Organization": "Ministry of Micro, Small and Medium Enterprises ",
        "Problem_Statement_Title": "IoT based sensors can be used to determine the Machine Runtime",
        "Description": "IoT based sensors can be used to deterrnine the Machine Run time, idle time and utilisation and should project the same data in a dashboard to give status, Power consumption and rcal time machine utilisation. Developing such solutions for MSMEs like:(i) IoT for acoustic leak dctection, to be installed in hazardous and high flammable zones.(ii) Developing IoT based smart agriculture to manage, improve productivity and efficiency of smalllarms. Various parameters of soil type/health, climatic conditions and irrigation management should be measured with simple devices placed in the farm, data stored in the cloud to be accessed by the user at any time and changes in the irrigation to be made according to the plant and needs to maximize water usage, improve productivity, reduce labour etc. (iii) To monitor and reduce water consumption during various processes(iv) To find out major causes of machine breakdown (v) To give preventive maintenance updates in real time (e.g. to assess when the motor heating too much, bearing vibration is high , etc)",
        "Category": "Software ",
        "PS_Number": "SIH1395",
        "Domain_Bucket": "Agriculture, FoodTech & Rural Development"
      },
      {
        "Organization": "Ministry of Micro, Small and Medium Enterprises ",
        "Problem_Statement_Title": "lntegration and Utilization of data-based being maintained by various Ministries/Departments for better utilization of raw materials and production capacity.",
        "Description": "(i) Data of raw materials availability in India is maintained by various Ministries.(ii)Data of items imported by various countries are also available.(iii) Lot of Food grain Vegetables /Fruits are wasted in India. (iv) A software solution can be developed by utilizing all the data to advice the manufacturers/farmers to reduce the wastage and improve the exports/economy.",
        "Category": "Software ",
        "PS_Number": "SIH1398",
        "Domain_Bucket": "Agriculture, FoodTech & Rural Development"
      },
      {
        "Organization": "Ministry of Micro, Small and Medium Enterprises ",
        "Problem_Statement_Title": "Uncontrolled growth of water Hyacinth in lakes",
        "Description": "The rampant growh of water hyacinth, an aquatic plant that is highly invasive is commonly considcrcd as the worst weed in the world. Water hyacinth continues toplague the city lakes not with standing the crores of rupees spent on removal of the weed every year. Water hyacinth proves to be one of the major reasons for spread of mosquitoes in the city as Culex mosquitoes breed heavily on the weed.",
        "Category": "Hardware",
        "PS_Number": "SIH1400",
        "Domain_Bucket": "Agriculture, FoodTech & Rural Development"
      },
      {
        "Organization": "Ministry of Micro, Small and Medium Enterprises ",
        "Problem_Statement_Title": "App-Based Solution to identify and solve disease in plants/crops",
        "Description": "Farmers can upload the photographs of disease affected plants/crops and solutions may be provided by experts/scientists linked to the app.",
        "Category": "Software ",
        "PS_Number": "SIH1401",
        "Domain_Bucket": "Agriculture, FoodTech & Rural Development"
      },
      {
        "Organization": "Ministry of Rural Development ",
        "Problem_Statement_Title": "Developing an algotithim / programme to measureincrease in income of FPOs on account of project interventions under WDC 2.0.",
        "Description": "With the objective to help achieve higher economic growth for the projectcommunity and collectivization of farm operations, which can be realized throughFPOs, the New Generation Watershed Guidelines envisage formation of FPOs rightfrom the planning stage of the projects.The FPO shall be the member - owned and member - managed institution. Anyhousehold dependent directly or indirectly on the natural resources of watershed canjoin the FPO by paying prescribed share capital amount and membership fee asdefined by the organization.Methodology: Computing of Incomes generated through provision of demand basedservices, operation of Custom Hiring Centre (CHC), marketing of local agriculturalproduce through alternate market channels etc.",
        "Category": "Software ",
        "PS_Number": "SIH1435",
        "Domain_Bucket": "Agriculture, FoodTech & Rural Development"
      },
      {
        "Organization": "Ministry of Rural Development ",
        "Problem_Statement_Title": "Number of persons benefitted from using the Water Harvesting Structures (WHS) created / rejuvenated in the project areas under WDC 2.0 for economic activities like fisheries etc for alternate source of income generation.",
        "Description": "Creation / Rejuvenation of WHSs are one of the major activities underWDC-PMKSY. Besides being a source of protective irrigation in the rainfed areas,contributing towards improvement in soil moisture, increase in water table etc, theWHSs are also utilized for livelihood activities like fisheries, aquatic vegetablecultivation etc providing substantial incomes to the project community.Methodology: Computing of Incomes generated by the families /community directlyinvolved in use of the WHSs for their income generation activities.Organization: Department of land Resources (Ministry of Rural Development)Category: SoftwareDomain_Bucket: Livelihood / Income generation",
        "Category": "Software ",
        "PS_Number": "SIH1436",
        "Domain_Bucket": "Agriculture, FoodTech & Rural Development"
      },
      {
        "Organization": "Ministry of Rural Development ",
        "Problem_Statement_Title": "Development of suitable Software and Hardware components/sensors for springshed mapping, monitoring and management.",
        "Description": "Main objective is to develop suitable software and hardware componentsfor a comprehensive GIS-based mapping system to help visualize the springshedboundaries, water sources and other related data. Predictive model to forecast thewater availability in the springshed for domestic and other use. Workable datamanagement system to store and analyze data related to the springshed. A gooddecision-support system model to guide and help stakeholders make informeddecisions related to springshed management. An automated alert system to informstakeholders of changes in the springshed landscapes.Methodology;Hardware: 1. High-resolution airborne LiDAR systems: This can be used to accuratelymeasure the topography of springsheds, including surface elevations, contour linesand watershed boundaries.2. Water quality sensors: These sensors measure variouswater quality parameters such as temperature, pH, dissolved oxygen, salinity, nutrientsand other contaminants. 3. Stream flow gauges: Which measure the volume of waterflowing through a nala‚, streams or rivers. 4. Weather stations: measure theparameters such as temperature, humidity, wind speed, precipitation and solarradiation.Software: 1. GIS software: GIS software can be used to map and analyze thetopography of springsheds. 2. Hydrogeological modeling software: This software canbe used to simulate the dynamics of springsheds, such as the flow of water andsediment through the system. 3. Data management software: Data managementsoftware can be used to store, organize and analyze the data collected from hardwaresensors. 4. Decision support software: Decision support software can be used toanalyze the data collected from hardware sensors and generates recommendationsfor springshed management.",
        "Category": "Software ",
        "PS_Number": "SIH1437",
        "Domain_Bucket": "Agriculture, FoodTech & Rural Development"
      },
      {
        "Organization": "AICTE, MIC-Student Innovation ",
        "Problem_Statement_Title": "Student Innovation",
        "Description": "Developing solutions, keeping in mind the need to enhance the primary sector of India - Agriculture and to manage and process our agriculture produce",
        "Category": "Hardware",
        "PS_Number": "SIH1478",
        "Domain_Bucket": "Agriculture, FoodTech & Rural Development"
      },
      {
        "Organization": "AICTE, MIC-Student Innovation ",
        "Problem_Statement_Title": "Student Innovation",
        "Description": "Developing solutions, keeping in mind the need to enhance the primary sector of India - Agriculture and to manage and process our agriculture produce",
        "Category": "Software",
        "PS_Number": "SIH1491",
        "Domain_Bucket": "Agriculture, FoodTech & Rural Development"
      }
    ]
  },
  {
    "id": "6",
    "title": "Smart Vehicles",
    "icon": <MdElectricCar />,
    "description": "Creating intelligent devices to improve commutation sector.",
    "ps": [
      {
        "Organization": "Ministry of power ",
        "Problem_Statement_Title": "Monitoring through Al Based Remote Access Vehicle",
        "Description": "In Hydroelectric Projects (HEPs), monitoring and upkeep of HRT (Head Race Tunnels) is a critical task  for the proper operation and safety of the plant. For Inspection of the HRTS, the HRT needs to be flushed/ emptied & inspected which is a cumbersome process. In order to avoid interruption during the operation of the plant, services of a Remotely Operated Vehicle (ROV) for inspection of the HRT in submerged condition could be considered for deployment.",
        "Category": "Hardware",
        "PS_Number": "SIH1298",
        "Domain_Bucket": "Smart Vehicles"
      },
      {
        "Organization": "Ministry of coal ",
        "Problem_Statement_Title": "Development of a Telematic control unit for capturing vital data ofa vehicle without using company fitted telemetry data port.",
        "Description": "Many businesses rely on telemetry data from vehicles to gain insights into their fleet's performance, driver behavior, and maintenance needs. However, in some scenarios, vehicles may not have a telemetry data port or the port may not be accessible due to limitations imposed by the vehicle manufacturer.The challenge is to develop a Telematic Control Unit (TCU) that can capture essential vehicle data without relying on the company-fitted telemetry data port. The TCU should provide a robust and reliable method of collecting data from various sensors and systems within the vehicle, ensuring real-time monitoring and analysis capabilities for fleet management purposes.The solution should address the following key aspects:Data Capture: Develop a TCU that can interface with the vehicle's systems and sensors to capture vital data such as engine performance, payload, fuel consumption, speed, location, and diagnostic information. The TCU should be capable of extracting data accurately and reliably, regardless of the vehicle's make or model.Wireless Connectivity: Implement a wireless communication mechanism for transmitting the captured data from the TCU to a centralized server or cloud platform. The solution should support a secure and robust wireless protocol that ensures data integrity and confidentiality.Real-time Monitoring and Analysis: Design a user-friendly dashboard or interface that allows fleet managers to monitor and analyze vehicle data in real time. The dashboard should provide insights into vehicle performance, payload, fuel efficiency, driver behavior, and maintenance needs, enabling businesses to make informed decisions and optimize their operations.Compatibility and Integration: Ensure that the TCU solution can be easily integrated with existing fleet management systems or third-party applications commonly used in the industry. The solution should provide APIs or other integration capabilities to enable seamless data exchange and interoperability.Security and Privacy: Implement strong security measures to protect the captured data from unauthorized access or tampering. The solution should adhere to industry best practices for data security and privacy, including encryption, authentication, and access control mechanisms.By addressing these aspects, the proposed TCU solution should enable businesses to capture and leverage vital vehicle data without relying on the company-fitted telemetry data port. This will empower fleet managers to optimize fleet performance, reduce maintenance costs, enhance fuel efficiency, and ensure compliance with regulatory requirements. It may also fetch data from a company-fitted telemetry port without opening the port in a non-invasive manner.",
        "Category": "Hardware",
        "PS_Number": "SIH1315",
        "Domain_Bucket": "Smart Vehicles"
      },
      {
        "Organization": "Ministry of coal ",
        "Problem_Statement_Title": "In-cab smart guidance and support system for DraglineOperator",
        "Description": "Operating a dragline, a large excavation machine used in mining and construction requires precision, skill, and a deep understanding of the operating environment. However, there is a need for a smart guidance and support system that assists dragline operators by providing real-time information, alerts, and guidance, ultimately enhancing their performance and ensuring safe and accurate operations.The challenge is to develop an in-cab smart guidance and support system that empowers dragline operators with the following capabilities:Real-time Environmental Awareness: Develop a system that utilizes computer vision or sensor-based technologies to provide dragline operators with real-time information about their surroundings. This includes detecting and alerting the operator about potential hazards, obstacles, or unsafe conditions, such as proximity to other equipment, uneven terrain, or approaching vehicles.Operational Guidance and Monitoring: Create an interface that offers intuitive guidance and instructions to the dragline operator based on real-time data analysis. The system should provide visual cues, overlays, or augmented reality displays that assist the operator in achieving precise digging, loading, and dumping operations, optimizing productivity, and minimizing material loss.Performance Monitoring and Analysis: Implement mechanisms to track and analyze the performance of dragline operators in real time. The system should capture relevant operational data, such as cycle times, digging depth, fuel consumption, and maintenance requirements, to provide feedback and performance metrics that can be used for continuous improvement.Operator Training and Skill Development: Design interactive modules or simulations within the system that facilitate operator training and skill development. The system should provide virtual scenarios, real-time feedback, and performance benchmarks to help operators enhance their skills, decision-making abilities, and overall efficiency.Integration and Scalability: Develop a solution that can seamlessly integrate with existing Dragline systems and infrastructure. The system should be compatible with the dragline's control systems, sensors, and data sources, ensuring reliable data transmission and compatibility across different dragline models or manufacturers.By addressing these aspects, the proposed in-cab smart guidance and support system will enhance the situational awareness, operational efficiency, and safety of dragline operators. It will empower operators to make informed decisions, optimize their operations, and contribute to the overall productivity and success of mining or construction projects.",
        "Category": "Software ",
        "PS_Number": "SIH1320",
        "Domain_Bucket": "Smart Vehicles"
      },
      {
        "Organization": "Govt of Himachal Pradesh ",
        "Problem_Statement_Title": "Real-Time Vehicle Tracking system.",
        "Description": "To develop a smart transportation system, which that aims to provide real-time information to the users regarding the availability of buses and their upcoming timings. The system will utilize advanced technologies such as GPS and other relevant services to gather the necessary data for providing reliable information to the users.The proposed system will have to be designed to facilitate the users in identifying the current location of their desired bus, along with the estimated time of its arrival at the respective bus stop. This will be achieved through the integration of the real-time data from the buses, as well as from the traffic management system. In conclusion, the proposed smart transportation system will significantly enhance the efficiency and convenience of the public transportation system in Himachal Pradesh.As a sustainability information to the user, good to indicate emission compliance of the bus e.g. Bharat Stage IV; also if the bus uses clean fuel such as CNG or Electricity",
        "Category": "Software ",
        "PS_Number": "SIH1382",
        "Domain_Bucket": "Smart Vehicles"
      },
      {
        "Organization": "Autodesk ",
        "Problem_Statement_Title": "Students to use Autodesk Fusion 360 to research and redesign a conventional automotive component commonly found in vehicles and utilize generative design to reimagine its design. For additional information and detailed problem statement",
        "Description": "Research and redesign a conventional automotive component commonly found invehicles and utilize Fusion 360 software to reimagine its design. Students can useFusion 360 Features such as generative design, Topology Optimization, AdditiveBuild etc. The redesigned component should showcase innovation, enhancedfunctionality, and improved efficiency, all while being optimized for 3D printing.The student's focus should be on using Fusion 360's additive manufacturing capabilities. Theyshould aim to learn about additive manufacturing and its applications in automotive design. Thisincludes studying how to design automotive components with considerations for structuralintegrity, and weight reduction. They should define project objectives and design constraints,and then utilize generative design tools in Fusion 360 to explore and generate optimizeddesigns. The student should evaluate these designs using simulation and analysis tools withinFusion 360. They should refine and iterate on the designs to further enhance performance.Finally, they should prototype and test the finalized design using appropriate 3D printingtechnologies.Participation Guidelines for Idea Submission:1. Each student team should submit Fusion 360 public link of the Design and aPowerPoint presentation (5-7 Slides).2. Designs should be created using only Fusion 360 and not copied or taken from anyother source.For Finale: Students must use Fusion 360 to design and 3D print the given final design duringthe finale within the given time-period and constraints, and present the following in front of thejury members:1. PPT explaining the final project2. Public link of the design3. Rendered images.Marking Criteria Marks1. Design Complexity and Workability 202. Design Optimization for 3D Printing (DfAM) 203. Innovative Design Features 154. Use of Advanced Features in Fusion 360 (Generative, Topology Optimization etc.) 305. Selection of AM Process and Materials 15Total marks 100",
        "Category": "Hardware",
        "PS_Number": "SIH1442",
        "Domain_Bucket": "Smart Vehicles"
      },
      {
        "Organization": "AICTE, MIC-Student Innovation ",
        "Problem_Statement_Title": "Student Innovation",
        "Description": "Creating intelligent devices to improve the commutation sector",
        "Category": "Hardware",
        "PS_Number": "SIH1477",
        "Domain_Bucket": "Smart Vehicles"
      },
      {
        "Organization": "AICTE, MIC-Student Innovation ",
        "Problem_Statement_Title": "Student Innovation",
        "Description": "Creating intelligent devices to improve the commutation sector",
        "Category": "Software",
        "PS_Number": "SIH1490",
        "Domain_Bucket": "Smart Vehicles"
      }
    ]
  },
  {
    "id": "7",
    "title": "Transportation & Logistics",
    "icon": <MdEmojiTransportation />,
    "description": "Submit your ideas to address the growing pressures on the city\u2019s resources, transport networks, and logistic infrastructure.",
    "ps": [
      {
        "Organization": "Ministry of power ",
        "Problem_Statement_Title": "Dashboard for real-time monitoring of construction projects.",
        "Description": "Designing of dashboards for Real-time monitoring of Construction projects using IOT devices  and backend Artificial intelligence/ML tools to track Resources in the form of equipment/manpower, monitor  their efficiency and safety in all situations.",
        "Category": "Software ",
        "PS_Number": "SIH1295",
        "Domain_Bucket": "Transportation & Logistics"
      },
      {
        "Organization": "Ministry of Textiles ",
        "Problem_Statement_Title": "Application Development for monitoring of wool from Farm to fabric",
        "Description": "An App-based solution for the wool sector in India which can have the following features is required:1. Wool Market Information: Provides real-time market information on wool prices, trends, and news.2. Wool Tracking: Allows users to track the production and transport of their wool from farm to market.3. Quality Assurance: Provides a platform for wool producers to ensure the quality of their wool and access to wool grading services.4. Wool Storage and Warehousing: Helps farmers store and manage their wool inventory.5. Wool Processing: Helps farmers access wool processing services such as shearing, sorting and dyeing6. Wool Trading Platform: Allows wool producers to buy and sell wool directly from other farmers or buyers.7. Online Wool Marketplace: Provides a platform for wool producers to sell their wool directly to buyers8. Wool Education and Training: Provides a list of wool producers/artisans region-wise, and state-wise data to provide educational resources and training to help them improve their production, quality, design and marketing skills.",
        "Category": "Software ",
        "PS_Number": "SIH1309",
        "Domain_Bucket": "Transportation & Logistics"
      },
      {
        "Organization": "Ministry of Ports, Shipping and Waterways ",
        "Problem_Statement_Title": "Dredging Analysis and Decision Support System.",
        "Description": "Port channels are to be dredged regularly in order to ensure the required draft for the vessels to be berthed in Port Berths.Siltation is one of the pain areas of Cochin Port and the expenditure towards dredging is very high.A cost-effective solution is required to:i. Monitor the real-time draft in various sectors of the port channels and berthsii. Support system to predict the siltation expected within a stipulated period based on the historical data of draft and meteorological data",
        "Category": "Software ",
        "PS_Number": "SIH1311",
        "Domain_Bucket": "Transportation & Logistics"
      },
      {
        "Organization": "Ministry of coal ",
        "Problem_Statement_Title": "A system of IoT Devices to prevent under-loading / overloading of Railway wagons.",
        "Description": "CIL has been supplying coal to its consumers by Rail through Railway Sidings. The railway wagons at such sidings are loaded through contractual means by payloader.The loading of wagons by contractual arrangement often results in overloading or underloading Railway wagons. The rules of Penal overloading and underloading are notified by Railway. Any penalty for overloading charged by the Railway for any consignment is payable by the purchaser.However, in case of underloading of wagons, credit for idle freight is adjusted in coal bills. Thus any idle freight for under-loading is borne by CIL. During 2021-22, the expense for under-loading was nearly Rs.593 Cr. whereas the contract for wagon loading itself was only Rs.276 Cr.Hence, a digital solution in the form of sensor/ IoT is needed to prevent the under-loading and overloading of Railway wagons.",
        "Category": "Hardware",
        "PS_Number": "SIH1313",
        "Domain_Bucket": "Transportation & Logistics"
      },
      {
        "Organization": "Rashtriya Ispat Nigam Limited, Visakhapatnam Steel Plant ",
        "Problem_Statement_Title": "Hot metal, Steel Ladle, and Scrap pot Tracking by auto-capturing the Ladle number and locations at SMS-1 and SMS-2.",
        "Description": "The ladle is identified by the number painted manually on its outer surface. The ladle number has to be captured. The exact location and number of the ladle has to be tracked in real-time and feedback is to be given to the local server for display. The hot metal Ladle travels from the TLC pit area to the converter for charging liquid hot metal and back. Steel Ladle travels from the Ladle preparation bay with liquid steel to secondary metallurgy units i.e. LF-1, LF-2, RH, or Twin LF, and then to one of the Caster machines for casting into billets and back. Slag Pot travels from Converter to the Slag dumping area and back. Benefits of solving this issue are tracking of the ladles, timely changes in process based on the ladle history, calculation of ladle circulation times, ladle life, and ladle turnaround times.",
        "Category": "Software ",
        "PS_Number": "SIH1332",
        "Domain_Bucket": "Transportation & Logistics"
      },
      {
        "Organization": "Ministry of Mines ",
        "Problem_Statement_Title": "Dificulty in operating Heavy earth moving machineries during rainy season (4-5 months due to extremely poor visibility conditions leading to significant loss of excavation and production",
        "Description": "The Mine is located on a hill top over an altitude of avg. 1250m above MSL,suffers significant loss of excavation and production during 4-5 months of rainy seasons due toextremely poor visibility condition caused by stagnated dark clouds on the hilltop. It becomesvery unsafe to operate Loaders and Dumpers resulting in huge loss of excavation andproduction. Solution Desired: Loaders and Dumper operations should be guided in such a way that Mineexcavation and production processes are carried out safely. The solution may lie in usingsuitable AI-ML applications based on GPS technology, real-time monitoring of weatherconditions, and providing fog-piercing lights coupled with proximity sensors to avoid equipmentcollisions. The solution should be effective enough to operate mining machineries safely tomeet the targets.",
        "Category": "Hardware",
        "PS_Number": "SIH1335",
        "Domain_Bucket": "Transportation & Logistics"
      },
      {
        "Organization": "Ministry of Mines ",
        "Problem_Statement_Title": "Unpredictable failure of poly pulleys along cable belt conveyor system for pulley changing",
        "Description": "There are more than 18,000 nos. of poly pulleys along the conveyor length whichundergo wear and tear and need replacements including emergency replacements stoppingthe conveyor system.Solution Desired: Based on past data and the use of suitable ML software, the pulley failures withits locations can be predicted which would help in avoiding sudden stoppages of the conveyor.",
        "Category": "Software ",
        "PS_Number": "SIH1338",
        "Domain_Bucket": "Transportation & Logistics"
      },
      {
        "Organization": "Ministry of Mines ",
        "Problem_Statement_Title": "Automation of drill core rock sample lithology logging.",
        "Description": "The lithology of drilled core samples in exploration is usually identified on thebasis of grain size, color, cementing material, mixing of grains of different sizes (sorting),packing and compactness of grains roundness of grains. The Luster and specific gravity of the samplealso play a crucial role in the identification of core rock samples with respect to dimensions. Thegeological discontinuities are identified on the basis of fractures, joints, and litho-contacts.Hence, the development of a device assembly, that scans the drill core rock sample and identity thelithology and geological discontinuities on the basis of above said parameters by the artificialintelligence with given standards.",
        "Category": "Software ",
        "PS_Number": "SIH1339",
        "Domain_Bucket": "Transportation & Logistics"
      },
      {
        "Organization": "Ministry of Communications ",
        "Problem_Statement_Title": "Dak Ghar Niryat Kendra",
        "Description": "Dak Ghar Niryat Kendra (DNK) is an initiative of the Department of Posts and CBIC, wherein the small exporters are able to electronically file a Portal Bill of Export and then present the parcel at DNK for export. 122 DNKs have so far beenopened in Post Offices and 878 more shall be opened in the next two years. Although DNKs are being used by 800+ exporters, DoP is still not able to bring small traders, artisans and MSMEs onto the DNK platform as most of such entrepreneurs do not have the wherewithal to create web portals for displaying their products and accepting International e-Commerce orders, or they are find the regulatory and e-Commerce platform compliances too expensive or tedious. Moreover, the international customers find it difficult to trust the webportals or small entities. The private e-Commerce portals charge upto 40% of the sale price of orders, which is prohibitively expensive.Dak Ghar Niryat Kendra\" refers to a concept in the Indian postal system. It translates to \"\"Post Office Export Centre\"\" in English. The Dak Ghar Niryat Kendra is a specialized facility within a post office that offers services related to export of goods.The establishment of Dak Ghar Niryat Kendra aims to simplify and streamline the export process for small and medium-sized enterprises (SMEs) by leveraging the extensive postal network and infrastructure already in place. It provides exporters with a cost-effective and accessible solution for their export logistics requirements.\"",
        "Category": "Software ",
        "PS_Number": "SIH1413",
        "Domain_Bucket": "Transportation & Logistics"
      },
      {
        "Organization": "AICTE, MIC-Student Innovation ",
        "Problem_Statement_Title": "Student Innovation",
        "Description": "A solution/idea that can boost the current situation of the tourism industries including hotels, travel and others.",
        "Category": "Hardware",
        "PS_Number": "SIH1473",
        "Domain_Bucket": "Transportation & Logistics"
      },
      {
        "Organization": "AICTE, MIC-Student Innovation ",
        "Problem_Statement_Title": "Student Innovation",
        "Description": "Submit your ideas to address the growing pressures on the city‚ resources, transport networks, and logistic infrastructure",
        "Category": "Hardware",
        "PS_Number": "SIH1476",
        "Domain_Bucket": "Transportation & Logistics"
      },
      {
        "Organization": "AICTE, MIC-Student Innovation ",
        "Problem_Statement_Title": "Student Innovation",
        "Description": "A solution/idea that can boost the current situation of the tourism industries including hotels, travel and others.",
        "Category": "Software",
        "PS_Number": "SIH1486",
        "Domain_Bucket": "Transportation & Logistics"
      },
      {
        "Organization": "AICTE, MIC-Student Innovation ",
        "Problem_Statement_Title": "Student Innovation",
        "Description": "Submit your ideas to address the growing pressures on the city‚ resources, transport networks, and logistic infrastructure",
        "Category": "Software",
        "PS_Number": "SIH1489",
        "Domain_Bucket": "Transportation & Logistics"
      },
      {
        "Organization": "Ministry of Mines ",
        "Problem_Statement_Title": "Frequent dislodgement of belt conveyor along hilly terrain for various reasons",
        "Description": "The 14.6 km long cable belt conveyor passing over complex hilly terrain suffersbelt dislodgements due to various reasons resulting in the sudden loss of production.Solution Desired: Capture reasons for belt dislodgements across its 14.6 KM length from pastdata and using suitable ML software, prediction of belt dislodgements should be donebeforehand to take corrective and preventive actions.",
        "Category": "Hardware",
        "PS_Number": "SIH1507",
        "Domain_Bucket": "Transportation & Logistics"
      }
    ]
  },
  {
    "id": "8",
    "title": "Robotics and Drones",
    "icon": <LiaRobotSolid />,
    "description": "There is a need to design drones and robots that can solve some of the pressing challenges of India such as handling medical emergencies, search and rescue operations, etc.",
    "ps": [
      {
        "Organization": "Ministry of power ",
        "Problem_Statement_Title": "Al Based Drone Application",
        "Description": "Systems for Drone-based assessment of large size Catchment areas of Hydro Power plants and  monitoring the progress of the treatment plan.",
        "Category": "Software ",
        "PS_Number": "SIH1297",
        "Domain_Bucket": "Robotics and Drones"
      },
      {
        "Organization": "Ministry of Ports, Shipping and Waterways ",
        "Problem_Statement_Title": "Drone-based surveillance system for the vessels plying in port areas and encroachments",
        "Description": "Cochin Port is having water bodies and a land area of 2177 acres.Licenses are being issued by the Port to the marine vessels to ply within the Port limit.A cost-effective solution is required to:i. Tracking and reporting of harbor crafts like boats, barges, dinghies, etc., that ply in the Port water limit.ii. Encroachments if any, in the port limits need to be watched constantly and report the same if any.iii. Management Information System regarding the violators, encroachments, etc.",
        "Category": "Hardware",
        "PS_Number": "SIH1310",
        "Domain_Bucket": "Robotics and Drones"
      },
      {
        "Organization": "Government of Kerala ",
        "Problem_Statement_Title": "Developing a system for Patient Care in the Health Sector",
        "Description": "As the demand for healthcare services continues to increase, healthcare professionals are facing challenges in meeting the needs of patients while maintaining quality care. One of the major challenges is providing 24/7 care for patients who require continuous monitoring and assistance.The challenge for this hackathon would be to develop innovative and effective solutions for designing and building robots for patient care in the health sector. Participants would need to consider various factors such as safety, reliability, ease of use, and affordability, while also ensuring that the robots are designed to meet the unique needs of patients in different healthcare settings.",
        "Category": "Hardware ",
        "PS_Number": "SIH1327",
        "Domain_Bucket": "Robotics and Drones"
      },
      {
        "Organization": "Ministry of Power ",
        "Problem_Statement_Title": "Robotics for inspection of abrasion / corrosion ofunderwater equipment / parts and further repair and maintainance",
        "Description": "Remotely Operated Vehicle (ROV)/Autonomous Underwater Vehicle (AUV)should be able to identify and repair the localised problems of the underwaterportion of the structures like , Penstock , Dam, Turbine , Surgeshaft etc in aHydro Power Project /Station without intervention of Human Deep Divers. Itshould preferabbly be indigneous and low cost in nature.",
        "Category": "Hardware",
        "PS_Number": "SIH1376",
        "Domain_Bucket": "Robotics and Drones"
      },
      {
        "Organization": "Autodesk ",
        "Problem_Statement_Title": "Students to use Autodesk Fusion 360 to research and develop a design on Smart Glass Cleaning Robot, which can climb, clean, and carry liquid cleaners. For additional information and detailed problem statement",
        "Description": "Research and develop a design on Smart Glass Cleaning Robot, which can climb, clean, and carry liquid cleaners.Develop a Smart Glass Cleaning Robot that efficiently and quickly cleans dust from high-risebuildings, ensuring hygiene. The robot should clean and collect dust from glass panels andwindows, with a liquid cleaner capacity ranging from 1 to 10 liters, depending on the buildingsize. It can be autonomous or remote-controlled. The robot needs to be lightweight andflexible for easy transportation. Its maximum size should not exceed 100cm in height, length,and width. Project submission must include conceptual sketches and images in the PPTpresentation. Additionally, one component should be optimized using the generative designmodule. The robot should incorporate Industry 4.0 applications, such as IoT and AI, for a smartand efficient cleaning solution.Participation Guidelines for Idea Submission: Each student team will have to submit a PowerPoint presentation (5-7 Slides) about their project with conceptual sketches and images.For Finale: Students must use Fusion 360 to design Smart Glass Cleaning Robot during thefinale within the given time-period and constraints, and present the following in front of the jurymembers:1. PPT explaining the final project.2. Public link of the design3. Rendered images and animationsMarking Criteria MarksDesign Objective 10Design Process 10Creativity and Novelty 30Software Usage 30Manufacturability 20Total marks 100",
        "Category": "Software",
        "PS_Number": "SIH1444",
        "Domain_Bucket": "Robotics and Drones"
      },
      {
        "Organization": "AICTE, MIC-Student Innovation ",
        "Problem_Statement_Title": "Student Innovation",
        "Description": "There is a need to design drones and robots that can solve some of the pressing challenges of India such as handling medical emergencies, search and rescue operations, etc.",
        "Category": "Hardware",
        "PS_Number": "SIH1475",
        "Domain_Bucket": "Robotics and Drones"
      },
      {
        "Organization": "AICTE, MIC-Student Innovation ",
        "Problem_Statement_Title": "Student Innovation",
        "Description": "There is a need to design drones and robots that can solve some of the pressing challenges of India such as handling medical emergencies, search and rescue operations, etc.",
        "Category": "Software",
        "PS_Number": "SIH1488",
        "Domain_Bucket": "Robotics and Drones"
      }
    ]
  },
  {
    "id": "9",
    "title": "Clean & Green Technology",
    "icon": <FaLeaf />,
    "description": "Solutions could be in the form of waste segregation, disposal, and improve sanitization system.",
    "ps": [
      {
        "Organization": "Ministry of Jal Shakti ",
        "Problem_Statement_Title": "Use of Digital Technology to calculate water footprints for different daily use items.",
        "Description": "The water footprint measures the amount of water used to produce each of the goods and  services we use. The water footprint helps us understand for what purposes our limited  freshwater resources are being consumed and polluted. The impact of it depends on where the  water is taken from and when if it comes from a place where water is already scarce, the    consequences can be significant and require action. The increase in the amount of non-  available water due to pollution and scarce groundwater level has added more water    footprints, at the community as well as at the personal levels. An increased water  footprint directly affects the health and future of the citizens. Preventing severe drought in  water-stressed areas is only going to be possible if water is used with more care and efficiency,  this can be done if we have readily available data on water footprints. Hence by using digital  technologies like AI, Big Data, Blockchain, etc, and computer languages, a user-friendly app or  website may be developed which can provide the water footprints of different items/ final  products we use in daily life by feeding little inputs or just by scanning through the camera like  Google lens. The app should support local languages, this will ensure pan-India usage and  sensitize the people about the water footprints of items they use in daily life.",
        "Category": "Software ",
        "PS_Number": "SIH1287",
        "Domain_Bucket": "Clean & Green Technology"
      },
      {
        "Organization": "Ministry of Jal Shakti ",
        "Problem_Statement_Title": "Use of Digital Technology in addressing Non-Revenue Water (NRW)",
        "Description": "Water supply issues are related to sources and usage of raw water; intermittent water supply  and the quality of tap water at the consumers end. One of the major challenges facing is the  high level of water loss in distribution networks. Non-Revenue Water (NRW) is defined as the  difference between the amount of water put into the distribution system and the amount of  water recovered from consumers. NRW is a good indicator of water utility performance; In  addition, available NRW data are often found problematic, suspicious, inaccurate, or provide  only partial information. Hence, there is a need to develop a system or technology to trace and  tackle non-revenue water and convert it into revenue water using digital methods. This will  save water as well as increase profitability and improves the return on investment w.r.t water  distribution networks.",
        "Category": "Software ",
        "PS_Number": "SIH1288",
        "Domain_Bucket": "Clean & Green Technology"
      },
      {
        "Organization": "Ministry of Jal Shakti ",
        "Problem_Statement_Title": "AI-enabled water well predictor",
        "Description": "The web-based system is expected to help common users in making decisions regarding water well in a  particular location. The system will be driven by NAQUIM data of CGWB like lithology, geophysical logs,  water levels, water quality, aquifer maps, etc. On a user-selected point the AI-based predictor should be  able to provide the following information:  i. Whether the area is suitable for water well construction or not?  ii. At what depth water-bearing zones are expected to be encountered;  iii. What is the expected discharge of the well;  iv. what is the most suitable drilling technique in the area;  v. What is the expected quality of groundwater in the area and other relevant information?  There should be a user-friendly graphical user interface. Provisions should also be there to obtain the user  feedback in a structured manner.",
        "Category": "Software ",
        "PS_Number": "SIH1292",
        "Domain_Bucket": "Clean & Green Technology"
      },
      {
        "Organization": "Government of Kerala ",
        "Problem_Statement_Title": "Domestic Waste Management",
        "Description": "Improper waste disposal not only contributes to environmental pollution but also affects the overall cleanliness and hygiene of a neighborhood. The challenge is to develop innovative solutions that address the specific issue of neighbors disposing of waste bags irresponsibly, causing litter and unsightly conditions.Participants are encouraged to propose and implement ideas that tackle this challenge and promote responsible waste management practices within the community. The solutions should focus on:Awareness and Education: Develop educational campaigns or initiatives to raise awareness among neighbors about the importance of proper waste disposal. This can include distributing informative materials, organizing community workshops, or leveraging digital platforms to educate residents about waste management best practices.Behavioral Change: Design strategies to encourage neighbors to adopt responsible waste disposal habits. This can involve implementing incentive programs, creating friendly competitions, or establishing neighborhood agreements that promote and reward responsible waste management behaviors.Community Engagement: Foster a sense of community ownership by engaging residents in waste management activities. This can involve organizing neighborhood clean-up drives, establishing community composting initiatives, or facilitating recycling programs to encourage active participation and responsibility among neighbors.Infrastructure Improvement: Propose solutions that address the lack of proper waste management infrastructure in the neighborhood. This can include advocating for the installation of additional waste bins, implementing a neighborhood waste collection system, or collaborating with local authorities to improve waste disposal facilities.Technology and Innovation: Leverage technology to support responsible waste management practices. This can involve developing mobile applications for waste collection scheduling and reminders, implementing smart waste bins with sensors and monitoring capabilities, or using blockchain technology to track and incentivize proper waste disposal.By addressing these aspects, the proposed solutions will contribute to overcoming the challenge of neighbors disposing of waste bags irresponsibly and promoting a cleaner, more sustainable neighborhood. The solutions should be practical, scalable, and feasible to implement within a residential community, fostering positive behavioral changes and encouraging a collective effort toward responsible waste management.",
        "Category": "Software ",
        "PS_Number": "SIH1322",
        "Domain_Bucket": "Clean & Green Technology"
      },
      {
        "Organization": "Ministry of Environment ",
        "Problem_Statement_Title": "Pro Planet Person App",
        "Description": "A mobile application that tracks user‚ activities and actions and tells the user if s/he is Pro Planet. Also offers suggestions on how to become a Pro Planet Person. Can use pop-ups and fun facts to nudge behaviors. The app can track behavior‚ across other selected apps such as food delivery, online ordering, etc. to nudge the users to choose sustainable alternatives in real time. For example, while ordering food, the app will send a pop-up reminding the user to deselect the option of disposable cutlery.",
        "Category": "Software ",
        "PS_Number": "SIH1390",
        "Domain_Bucket": "Clean & Green Technology"
      },
      {
        "Organization": "AICTE, MIC-Student Innovation ",
        "Problem_Statement_Title": "Student Innovation",
        "Description": "Solutions could be in the form of waste segregation, disposal, and improve sanitization system.",
        "Category": "Hardware",
        "PS_Number": "SIH1474",
        "Domain_Bucket": "Clean & Green Technology"
      },
      {
        "Organization": "AICTE, MIC-Student Innovation ",
        "Problem_Statement_Title": "Student Innovation",
        "Description": "Solutions could be in the form of waste segregation, disposal, and improve sanitization system.",
        "Category": "Software",
        "PS_Number": "SIH1487",
        "Domain_Bucket": "Clean & Green Technology"
      },
      {
        "Organization": "Ministry of Housing and Urban Affairs ",
        "Problem_Statement_Title": "Effective management of construction and demolition (C&D) waste",
        "Description": "The problem at hand revolves around the management of construction and demolition (C&D) waste in urban areas. With rapid urbanization and infrastructure development, the volume of C&D waste generated has reached alarming levels. The current practices for C&D waste disposal often lead to environmental degradation, resource depletion, and public health hazards. Therefore, there is a pressing need for a comprehensive and sustainable approach to C&D waste management that focuses on reducing waste generation, promoting recycling and reuse, and ensuring proper disposal methods. This will contribute to sustainable urban development by minimizing environmental impact, conserving resources, and creating a healthier living environment for communities. The problem solution should be addressed at the Hardware level and also forefronted using an intelligent monitoring system",
        "Category": "Hardware",
        "PS_Number": "SIH1513",
        "Domain_Bucket": "Clean & Green Technology"
      },
      {
        "Organization": "Ministry of Housing and Urban Affairs ",
        "Problem_Statement_Title": "Comprehensive lnspection and Analysis of Water Supply Distribution Lines",
        "Description": "Water resources across the globe are slowly on the depletion and its forecasted that the ZERO water day will not be far away if water resources ate not protected well. one the the crucial area that stilp lies in the human hands is to save the watet leakages and pay a strong water distrulibution network that improves effeicient use of water.The challenge is to conduct thorough inspections of water supply distribution lines, ranging from 100 to 200mm in diameter, in order to detect leakages, pilferage, damage, and other issues. The solution requires access to a cloud_based dashboard for data analytics, visualization, and report generation. The solution enhance service delivery, improve repair work efficiency, reduce water leakage, and streamline pipeline condition assessment. The solution should enable immediate action on contamination complaints, early detection of leaks, reduction in labor_intensive breakdown management, and facilitate GIS mapping of the pipelines. Overcoming deployment constraints involving live inspections, image analytics, and laser projections will ensure accurate and efficient assessment of the water supply distribution lines.",
        "Category": "Software",
        "PS_Number": "SIH1514",
        "Domain_Bucket": "Clean & Green Technology"
      }
    ]
  },
  {
    "id": "10",
    "title": "Tourism",
    "icon": <FaSuitcase />,
    "description": "A solution/idea that can boost the current situation of the tourism industries including hotels, travel and others."
  },
  {
    "id": "11",
    "title": <MdOutlineEnergySavingsLeaf />,
    "description": "Innovative ideas that help manage and generate renewable /sustainable sources more efficiently.",
    "ps": [
      {
        "Organization": "Ministry of power ",
        "Problem_Statement_Title": "Al-based Generative design of Hydro power plants.",
        "Description": "Systems for Al-based Generative design of Hydro Power plants including Civil structures, Hydro-  mechanical and Electro-mechanical equipment etc.",
        "Category": "Software ",
        "PS_Number": "SIH1296",
        "Domain_Bucket": "Renewable / Sustainable Energy"
      },
      {
        "Organization": "Ministry of Jal Shakti ",
        "Problem_Statement_Title": "Call for cost-effective ways of making water source for piped drinking water supply sustainable in Rural areas",
        "Description": "Jal Jeevan Mission was launched with the vision of providing drinking water in adequate quantity of prescribed quality onregular and long-term basis to every rural household.A comprehensive cost-effective technology is needed for the assessment of groundwater recharge done by source sustainability technology which is positively affecting the ground water-based source under consideration and predicting the longevity of the drinking water source to serve at the design discharge in the long-term considering the effect of drawl by the irrigation tube well. The technology should focus on the following:a. Monitoring of data for monitoring of drinking water source for a village. Generation of alerts in case of rapid deterioration. b. Innovative cost-effective technology for Rain Water Harvestingand Recharge.c. Innovative means to improve source sustainability. d. Re-use of Grey Water: Utilize non-toxic wastewater from households(with/without basic treatment)e. Accurate measurement of the capacity of the Aquifer and the actual waterdemand. f. Citing correct locations for recharge and discharge of groundwater.B. Potential condition of Water Quality.",
        "Category": "Hardware",
        "PS_Number": "SIH1328",
        "Domain_Bucket": "Renewable / Sustainable Energy"
      },
      {
        "Organization": "Government of Gujarat ",
        "Problem_Statement_Title": "Development of Small Scale Wind energy device",
        "Description": "Urban landscape and the physical challenges restrict the erection of small-scale wind turbines.Large-scale turbines fared well compared to small-scale wind turbine models.Other general challenges are as under:(1) Highly controlled energy sector(2) lack of awareness and information(3) restricted access to technology(4) lack of competition(5) high transaction costs(6) poor market infrastructure(7) High investment requirementsExpected Output: Eco-friendly energy alternative, Unlike energy produced by fossil fuels while windenergy is completely clean and eco-friendly.Not only is wind power free to harness, but its also 100% renewable.",
        "Category": "Hardware",
        "PS_Number": "SIH1361",
        "Domain_Bucket": "Renewable / Sustainable Energy"
      },
      {
        "Organization": "Government of Jharkhand ",
        "Problem_Statement_Title": "development of systems for effective Environmental, Social and Governance (ESG) Intervention in Higher Education",
        "Description": "It is well established that development towards a more sustainable society must begin with education. When education is done right, it not only teaches people about the science of climate change and inequality and the reasons we must take action, it also engages, empowers and promotes a more environmentally friendly, community-based way of life. ESG in higher education is one of least discussed aspects of governance among administrators. With the recent energy and climate crisis, administrators around the globe have realized the importance of sustainable process. The three pillars of ESG are people, processes, and product.In our case, people are the most important stakeholder in achieving our goal. Students from campuses of Higher Education are not only woke about the climate-energy crises but also are passionate for deigning a world of their future. Administrators on other hand are aware of the rising cost of energy and are open to adopting energy conservation and other aspects of ESGThe objective of the problem statement solution shall be to create a common platform for planning, development, execution, and monitoring of ESG initiative. The initiatives may include adopting alternative sources of energy, development of energy efficient campuses, adopting green construction standards like GRIHA Prakriti and similar such initiatives. Another objective of the problem statement solution is to generate and produce dynamic dashboards which show targeted lacking areas as well as progress check for currently undertaken projects. The overall objective of the solution should be based on a collaborative effort between all the stakeholder for creating ESG framework in Higher Education. If executed effectively the solution will not only make a significance difference to the present scenario but also create a generation of environmentally and socially aware citizens with in depth knowledge on ESG issues.The solution should be in line with India's ambition of achieving its targets under COP 21 of Paris Agreement. It should also incorporate the best practice steps taken by governments like the International Solar Alliance. The overall objective of the solution shall be to develop a common monitoring dashboard for all ESG Initiatives taken by the state and predictive solution based on best practices across the globe.",
        "Category": "Software ",
        "PS_Number": "SIH1372",
        "Domain_Bucket": "Renewable / Sustainable Energy"
      },
      {
        "Organization": "AICTE, MIC-Student Innovation ",
        "Problem_Statement_Title": "Student Innovation",
        "Description": "Innovative ideas that help manage and generate renewable /sustainable sources more efficiently.",
        "Category": "Hardware",
        "PS_Number": "SIH1472",
        "Domain_Bucket": "Renewable / Sustainable Energy"
      },
      {
        "Organization": "AICTE, MIC-Student Innovation ",
        "Problem_Statement_Title": "Student Innovation",
        "Description": "Innovative ideas that help manage and generate renewable /sustainable sources more efficiently.",
        "Category": "Software",
        "PS_Number": "SIH1485",
        "Domain_Bucket": "Renewable / Sustainable Energy"
      },
      {
        "Organization": "Ministry of Fisheries, Animal Husbandry and Dairying ",
        "Problem_Statement_Title": "Green options for milk packaging (Low cost, environment-friendly, and extended shelf life packaging for milk)",
        "Description": "Currently, most of the liquid milk packaging (pouch milk) in India, uses plastic film. Disposal of the plastic packs has huge environmental concerns and we must seek out for more environment-friendly alternatives.As a step towards reducing carbon footprint options like bioplastics, biodegradable plastics, organic fibres, or any other material, etc. may be explored. Such alternatives must be easy to use for the industry & distribution chain, ensure food safety, safeguard against contamination/leeching/microbial attack, cheap (low cost) and also help in improving shelf life of milk.",
        "Category": "Hardware",
        "PS_Number": "SIH1499",
        "Domain_Bucket": "Renewable / Sustainable Energy"
      }
    ]
  },
  {
    "id": "12",
    "title": "Blockchain & Cybersecurity",
    "icon": <FaShieldAlt />,
    "description": "Provide ideas in a decentralized and distributed ledger technology used to store digital information that powers cryptocurrencies and NFTs and can radically change multiple sectors.",
    "ps": [
      {
        "Organization": "Ministry of Law and Justice ",
        "Problem_Statement_Title": "Developing a Blockchain-Based eVault for Legal Records",
        "Description": "The objective of this hackathon is to develop a blockchain-based eVault system for  legal records that can ensure security, transparency, and accessibility for all stakeholders. The  system should be able to store, manage, and share legal records securely and efficiently, with the  potential to integrate with existing legal databases and case management systems.  Requirements:  1. The eVault system should be based on a blockchain platform such as Ethereum,  Hyperledger, or Corda, should use smart contracts to manage access, permissions,  and transactions.  2. The system should have user-friendly interfaces for lawyers, judges, clients, and other  stakeholders to interact with the eVault, with features such as uploading and retrieving  documents, tracking changes, and sharing information.  3. The system should ensure the privacy and confidentiality of legal records, with appropriate  access controls, encryption, and authentication mechanisms.  4. The system should allow for seamless integration with existing legal databases and case  management systems, to ensure interoperability and ease of use.  5. The system should be scalable and adaptable to accommodate future changes and  upgrades.  Expected Outcomes:  1. A functional prototype of the blockchain-based eVault system for legal records, with a  user-friendly interface and features such as document upload, retrieval, and sharing.  2. A detailed design document outlining the architecture, features, and technical  specifications of the eVault system.  3. A business plan outlining the potential impact, market opportunities, and revenue models  for the eVault system.  4. A presentation of the prototype, design document, and business plan.  Impact: The development of a blockchain-based eVault system for legal records can have a  significant impact on improving access to justice in India. It can lead to faster, more efficient  court proceedings, reduced costs, improved data integrity, and increased trust in the justice  system. Moreover, it can provide a secure and transparent platform for storing and sharing legal  records, making it easier for clients to access their own records and for lawyers to access relevant  case information.",
        "Category": "Software ",
        "PS_Number": "SIH1284",
        "Domain_Bucket": "Blockchain & Cybersecurity"
      },
      {
        "Organization": "Ministry of Power ",
        "Problem_Statement_Title": "Design of CYBER-SECURITY ENABLED SMART CONTROLLER for grid-connectedMicrogrid",
        "Description": "This aims to develop a cybersecurity-enabled smart controller specifically designed for grid-connected microgrids. The smart controller will play a crucial role in ensuring the secure and efficient operation of the microgrid, protecting it from cyber threats and unauthorized access.  Key Objectives:  Secure Communication: Design a communication framework that employs robust encryption protocols to safeguard the data transmitted between the smart controller and various components within the microgrid. This framework should prevent unauthorized access, tampering, and eavesdropping.  Intrusion Detection and Prevention: Implement advanced intrusion detection and prevention mechanisms within the smart controller to identify and mitigate potential cyber attacks in real-time. Develop algorithms and techniques to detect anomalies, malicious activities, and vulnerabilities within the microgrid system.  Access Control: Create an access control mechanism for the smart controller that regulates user access based on roles and privileges. This mechanism should prevent unauthorized configuration changes and ensure only authorized personnel can modify or interact with the microgrid system.  Cybersecurity Auditing: Develop a logging and auditing system within the smart controller to track and monitor all activities and events related to the microgrid's cybersecurity. This system should provide detailed logs, alerts, and reports to facilitate post-incident analysis and forensic investigations.  Security Patch Management: Implement a mechanism within the smart controller to manage and deploy security patches and updates across the microgrid system. This will ensure that vulnerabilities are promptly addressed, reducing the risk of potential cyber attacks.  Scalability and Compatibility: Design the smart controller to be scalable, allowing it to accommodate the increasing complexity and size of grid-connected microgrids. Ensure compatibility with different microgrid components, protocols, and standards to facilitate seamless integration into existing infrastructure.  Usability and User Interface: Develop a user-friendly interface for the smart controller that enables efficient monitoring, configuration, and management of the microgrid's cybersecurity settings. The interface should be intuitive and accessible to both cybersecurity experts and non-technical users.  This PS encouraged to explore innovative cybersecurity methodologies, including encryption algorithms, anomaly detection techniques, and secure communication protocols. The resulting smart controller will contribute significantly to the protection and reliable operation of grid-connected microgrids, ensuring the stability and security of the power distribution system in the face of evolving cyber threats.",
        "Category": "Software ",
        "PS_Number": "SIH1302",
        "Domain_Bucket": "Blockchain & Cybersecurity"
      },
      {
        "Organization": "Government of Gujarat ",
        "Problem_Statement_Title": "Fake Social Media Profile detection and reporting",
        "Description": "The social life of everyone has become associated with the online social net works. These siteshave made a drastic change in the way we pursue our social life. Making friends and keeping in contactwith them and their updates has become easier. But with their rapid growth, many problems like fakeprofiles, online impersonation have also grown. Fake profiles often spam legitimate users, postinginappropriate or illegal content. Several signs can help you spot a social media fake who might be trying toscam your business.Identifying fake social media profiles and taking corrective measures.Expected Output: An Application software that detects the fake social media profileUsers: Crime branch and other investigative agencies",
        "Category": "Software ",
        "PS_Number": "SIH1364",
        "Domain_Bucket": "Blockchain & Cybersecurity"
      },
      {
        "Organization": "Government of Gujarat ",
        "Problem_Statement_Title": "Online Blockchain based certificate generation and validationsystem for government organization.",
        "Description": "Currently large no of training programs is organized, and certificates are provided. There is nomechanism to validate digital certificate.so create a system in which custom digital certificate generate.User can store certificate in digital locker system other organization will validate certificate.Use opensource software and blockchain technology.Expected Output: Blockchain Based Certificate generation and validationCertificate can be added in Digital Loker SystemUsers: Government Office, Student, Industry, Institutes",
        "Category": "Software ",
        "PS_Number": "SIH1365",
        "Domain_Bucket": "Blockchain & Cybersecurity"
      },
      {
        "Organization": "Ministry of Power ",
        "Problem_Statement_Title": "Analysis and identification of malicious mobile applications",
        "Description": "ln today's world, using different mobile applications for specific tasks is verycommon. This leads to smart phone users accumulating too many applicationsover a period. Seldom do users delete unused applications. Any applicationperforming malicious tasks can very easily go unnoticed. So, there is a need todevelop a mobile app tool that can use open-source intelligence and threatfeeds to detect various indicators of compromise in the smartphones. The toolcan check network communication to various lP addresses that are suspicious,various URLs that are suspicious, inbound connections or packets fromapplications that are suspicious.",
        "Category": "Software ",
        "PS_Number": "SIH1381",
        "Domain_Bucket": "Blockchain & Cybersecurity"
      },
      {
        "Organization": "Ministry of power ",
        "Problem_Statement_Title": "Detection of embedded Malware/ Trojan in hardware devicesused in Power Sector.",
        "Description": "We know that the technology is changing fast and so are the devices used in Power Systems network. The hardware devices used in the sector are also having fast processing capacity and are intelligent. They also communicate data either periodically or on request or if some logic is met or at programmed intervals, to control centers or to local / zonal SCADA system. The devices could be Intelligent Electronic Devices (IEDs) like Relay, BCU, Smart Meters, or Remote Terminal Units (RTU) etc.As these are electronic devices, they are prone to security threats. To make sure these devices are free from security threats, it is required to test them for malware / Trojan or alike of malicious codes present in the devices/ hardware systems (like System on Chip/ Microcontrollers / Microprocessors/ DSP /FPGA based products) which has inbuilt firmware and dedicated application programs running within available and constraint memory. The challenge is to validate such electronic equipment‚ for vulnerability assessment tests and for presence of suspicious or malicious codes present if any, in the devices; such codes could otherwise exploit specific attacks which may cause damage to process/ system or harm the environment and living beings on certain conditions or may trigger on logics including the zero day attack.",
        "Category": "Hardware",
        "PS_Number": "SIH1387",
        "Domain_Bucket": "Blockchain & Cybersecurity"
      },
      {
        "Organization": "Ministry of power ",
        "Problem_Statement_Title": "Detection of Malwarei Trojan in softwares used in Power Sector.",
        "Description": "The power system networks are getting automated and software‚ are being updated or new Software‚ are being used in the network for various purposes including SCADA, Head End System, Meter Data Management System, Billing System, etc. Most of these software‚ are loaded in demilitarized zones; regular patch updates and penetration tests are normally avoided on the live systems. These systems become vulnerable, and hackers try to exploit such systems using various attack vectors. The challenge is to validate presence of malicious codes if any in the software‚ which could exploit specific attacks including the zero day attack.",
        "Category": "Software ",
        "PS_Number": "SIH1388",
        "Domain_Bucket": "Blockchain & Cybersecurity"
      },
      {
        "Organization": "Ministry of power ",
        "Problem_Statement_Title": "To develop centralised information security .Log-collectionfacility' or 'security operation centre (soc)' in the power sector, considering cEAcybersecurity (Power sector) Guidelines, 2021to keep lr and or networking System isolatedand air-gapped.",
        "Description": "Cyber intrusion attempts and cyber-attacks in any critical sector are carried out with a malicious intent. ln Power sector, it's either to compromise the power Supply system or to render the grid operation in-secure. Any such compromise may result in maloperation of equipment‚, equipment damages or even in a cascading grid brownout/blackout. The much-hyped air gap myth between lr and or systems now stands shattered. The artificial air gap created by deploying firewalls between any lr and or system can be jumped by an insider or an outsider through social engineering.Cyber-attacks are staged through tactics and techniques of lnitial Access, Execution, persistence, privilege Escalation, Defense Evasion, Command and Control, Exfiltration. After gaining an entry inside the system through privilege escalation, the control of lr network and operations of or systems can be taken over even remotely by any cyber adversary. The gain of sensitive operational data through such intrusions may help the Nation/State sponsored or non-sponsored adversaries and cyber-attackers to design more sinister and advanced cyber-attacks. How to develop centralized information security log-collection facility or Security Operation Center (SoC) in the Power Sector, considering cEA cybersecurity (power Sector) Guidelines- 2021, to keep lT and OT networking System isolated and air-gapped?",
        "Category": "Software ",
        "PS_Number": "SIH1389",
        "Domain_Bucket": "Blockchain & Cybersecurity"
      },
      {
        "Organization": "Ministry of Home Affairs ",
        "Problem_Statement_Title": "IT System log analyzer",
        "Description": "CRPF units/offices and personnel are deployed in different location of CRPF. There is no centralised system to analyse the log of IT system by the experts to access threats and breaches.Proposed Solution:Centralized system should be developed for analysing the systems deployed at the different location of the country Expert per problems statement ",
        "Category": "Software ",
        "PS_Number": "SIH1408",
        "Domain_Bucket": "Blockchain & Cybersecurity"
      },
      {
        "Organization": "Ministry of Home Affairs ",
        "Problem_Statement_Title": "Simulator system for counter Hijack and sky Marshalling operations",
        "Description": "Developing a simulator system for counter hijack and sky marshalling operations.You can develop a simulator system that provides realistic and effective training for counter hijack and sky marshalling operations. Collaborating with experts in aviation security, law enforcement, and simulation technology can further enhance the development process and ensure the system meets the specific needs of the training program.",
        "Category": "Software ",
        "PS_Number": "SIH1411",
        "Domain_Bucket": "Blockchain & Cybersecurity"
      },
      {
        "Organization": "Ministry of Home Affairs ",
        "Problem_Statement_Title": "Data Compression for backbone network",
        "Description": "Developing a data compression system for a backbone network.Proposed Solution:you can develop a data compression system for a backbone network that efficiently compresses data, reduces network bandwidth requirements, and optimizes network performance while considering the specific requirements and constraints of the network environment.",
        "Category": "Software ",
        "PS_Number": "SIH1412",
        "Domain_Bucket": "Blockchain & Cybersecurity"
      },
      {
        "Organization": "National Technical Research Organisation,(NTRO) ",
        "Problem_Statement_Title": "De-anonymisation for monitoring and tracking of illegalactivities performed using cryptocurrency transaction technology",
        "Description": "Whatever the darkest corner of diabolical human mind can conceive,Dark-Web can deliver with anonymity and impunity. Dark web markets and forumsare filled with illicit activities such as counterfeit currency, fake documents,contraband drugs, ransomware attacks etc. In India, Dark-web crimes haveproliferated in recent times especially in the arena of Cyber terrorism, drugtrafficking, counterfeit documents, currency and sale of classified Governmentdocuments.Governments have also recently raised concern over digital currency and use ofDark-Web for drug trafficking. It is important that appropriate tools and techniquesmay be developed to monitor and track anti-national activities carried out behind theshield of anonymity by using dark web and cryptocurrency technology.",
        "Category": "Software",
        "PS_Number": "SIH1445",
        "Domain_Bucket": "Blockchain & Cybersecurity"
      },
      {
        "Organization": "National Technical Research Organisation,(NTRO) ",
        "Problem_Statement_Title": "Develop a AI/ML tool to detect whether a system / firewall /router / network is compromised. The technique should not rely only on IoCs (Indicators of Compromises) detection.",
        "Description": "Early detection of a compromise of any compute device is critical for security of critical information infrastructure. While most of infections on ICT are detected using IoCs (Indicators of Compromises), the objective of this problem is to explore techniques for detection of compromise on devices using AI / ML models when the IoC of the compromise is not known.The developer should employ innovative models for non-IoCs based detection of compromise on devices. The evaluation of the solution will be based on the following:(a) Innovation and ruggedness of the method of detection of compromise.(b) Utility of the method developed over various types of devices including system / firewall / router / network.(c) Ease of deployment and method of reporting of detected compromise.(d) Ability to minimize false alarms of compromise.",
        "Category": "Software",
        "PS_Number": "SIH1451",
        "Domain_Bucket": "Blockchain & Cybersecurity"
      },
      {
        "Organization": "National Technical Research Organisation,(NTRO) ",
        "Problem_Statement_Title": "Develop Ransomware Readiness Assessment tool.",
        "Description": "Ransomware is a type of malicious software designed to block access ICT devices by encryption of data until ransom is paid to attacker. It is of paramount importance to increase awareness regarding such attacks and assess readiness of the ICT infrastructure of any organisation to thwart these attacks or atleast recover at the earliest.The developer should design and deploy a methodology to evaluate posture and preparedness of an organization towards stopping / mitigating threat from ransomware attack.The developed tool shall be evaluated based on following:(a) Depth of the tool to assess readiness of organization to hinder / stop /mitigate ransomware attack.(b) Assessment of organization towards detection of early signs ofransomware.(c) Ease of use and awareness imparted by the tool.(d) Visualization and reporting of the maturity assessment of theorganization.",
        "Category": "Software",
        "PS_Number": "SIH1452",
        "Domain_Bucket": "Blockchain & Cybersecurity"
      },
      {
        "Organization": "National Technical Research Organisation,(NTRO) ",
        "Problem_Statement_Title": "Investigation of vulnerabilities in implementation of crypto library used by OpenVPN for Internet Protocol Security (IPsec), IPV6 deployment.",
        "Description": "Internet Protocol Security (IPsec) is a widely used network layersecurity control for protecting communications. It is a framework of open standards for ensuring secure communication over IP network. The goal of this problem statement is to identify unknown vulnerabilities in implementation of crypto librariesused by OpenVPN for Internet Protocol Security (IPsec), IPV6 deployment.Teams may undertake static/ dynamic analysis of relevant code to discover any unknown software bug. Emphasis should be on finding unknown vulnerabilities in implementation of cipher suites/ crypto libraries used by OpenVPN for encryptionand authentication in IPsec tunnel.Teams may also investigate and report vulnerable configuration and associated exploitation vector leading to compromise of data confidentiality, which have not been reported so far for IPSEC IPv6 deployment using OpenVPN.",
        "Category": "Software",
        "PS_Number": "SIH1453",
        "Domain_Bucket": "Blockchain & Cybersecurity"
      },
      {
        "Organization": "National Technical Research Organisation,(NTRO) ",
        "Problem_Statement_Title": "Create an intelligent system using AI/ML to detect phishing domains which imitate look and feel of genuine domains",
        "Description": "Phishing attack is the most prevalent attack technique to compromise users worldwide. Phishing links/websites are shared through number of mediums like email, SMS etc. to target users. These domains are at times host user login page that imitates the genuine target websites. Login attempts on such pages can lead to compromise of user credentials and may also download malicious payload in user computers.The objective of the problem is to identify such phishing domains from the newly registered websites based on open source databases (Example WHOIS Database).Such databases provide list of newly registered domains. The tool should be automated and harness power of AI/ML to identify phishing domains from genuine domains. It may use the following techniques:(a) Backend code / content similarity in web pages.(b) Web page image analysis (i.e. analysis between genuine and phishing site web page images; more the similarity better is the probability score of being a lookalike phishing site).The evaluation would be based on the tool‚ ability with regard to the following:(e) Probability scores of phishing domains on how close they are to the genuine domain.(f) Ability to detect new phishing domains in reasonable time.(g) Ease of use and flexibility in output formats.",
        "Category": "Software",
        "PS_Number": "SIH1454",
        "Domain_Bucket": "Blockchain & Cybersecurity"
      },
      {
        "Organization": "National Technical Research Organisation,(NTRO) ",
        "Problem_Statement_Title": "Efficient enumeration of URLs of active hidden servers overanonymous channel (TOR)",
        "Description": "The Onion Routing (TOR) is an overlay anonymous network overinternet, which not only anonymizes clients accessing the TOR network or internetbut also facilitate hosting of servers anonymously. These servers have been reportedto be hosting various hidden services involved in malicious activities.The goal of this problem statement is to develop Proof of Concept (PoC) toenumerate URLs (.onion) of active hidden servers hosted over TOR. Teams aresupposed to examine the cryptographic security controls and survey existingvulnerabilities in underlying security architecture of TOR network to develop PoC forefficient enumeration of URLs of active hidden services hosted over TOR.",
        "Category": "Software",
        "PS_Number": "SIH1455",
        "Domain_Bucket": "Blockchain & Cybersecurity"
      },
      {
        "Organization": "AICTE ",
        "Problem_Statement_Title": "Cybersecurity Portal for Effective Management of Servers and Firewalls",
        "Description": "The All India Council for Technical Education (AICTE) is responsible for managing and safeguarding criticalinfrastructure and data related to technical education institutions across India. To ensure robustcybersecurity measures, AICTE requires a centralized and comprehensive portal dedicated to managingservers, firewalls, load balancers, software licenses, user access, and other data center hardwarecomponents is commonly known as a Data Center Management Portal or Data Center InfrastructureManagement (DCIM) Portal.However, the current infrastructure management practices face various challenges that hinder efficientand secure operations.The existing problem can be defined by the following factors:Fragmented Infrastructure Management: AICTE's infrastructure management practices may befragmented, resulting in disparate systems and tools for managing servers, firewalls, load balancers, andother hardware components. This lack of centralized control leads to inefficiencies, inconsistencies, andpotential security vulnerabilities.1. Manual and Time-Consuming Processes: The absence of an integrated portal leads to manual andtime-consuming processes for managing various infrastructure components. Activities such asprovisioning, monitoring, patching, and license management are often performed manually,consuming significant human resources and increasing the risk of errors or oversights.2. Limited Visibility and Control: Without a dedicated portal, AICTE may face challenges in gainingcomprehensive visibility into the status, performance, and security of servers, firewalls, loadbalancers, and other hardware components. This limitation hampers effective monitoring,maintenance, and proactive identification of potential security threats or vulnerabilities.3. Compliance and License Management: The absence of a centralized portal makes it difficult totrack and manage software licenses and ensure compliance with licensing agreements. This mayresult in the misuse of licenses, unintentional non-compliance, or unnecessary expenses due toduplicate purchases or inadequate license usage tracking.4. User Access Management: AICTE needs an efficient mechanism to manage user access to variousinfrastructure components. This includes defining user roles and permissions, ensuring secureauthentication and authorization mechanisms, and maintaining an auditable log of user activities.Without a dedicated portal, managing user access becomes challenging and increases the risk ofunauthorized access or privilege abuse.Addressing these challenges and implementing an AICTE Cybersecurity Portal has these specific featureneed to be developed5. Server Management: The portal allows administrators to manage servers, including provisioning,configuration, monitoring, and maintenance tasks. It provides an overview of server health,resource utilization, and performance metrics.6. Firewall and Network Device Management: The portal enables management and configuration offirewalls, switches, routers, and other network devices. It provides a central interface to set upand monitor network policies, security rules, and traffic management.7. Load Balancer Management: Load balancers play a critical role in distributing network trafficacross multiple servers. The portal allows configuration, monitoring, and scaling of load balancersto ensure optimal performance, high availability, and efficient resource utilization.8. Software License Management: It provides a centralized repository to manage software licensesfor various applications and operating systems. The portal helps track license usage, compliance,renewal dates, and license allocation to specific servers or users.9. User Access and Identity Management: The portal facilitates user access control, authentication,and authorization. Administrators can define user roles, permissions, and access levels fordifferent components and resources within the data center environment.10. Hardware Inventory and Asset Tracking: The portal maintains an inventory of data centerhardware components, including servers, switches, firewalls, load balancers, and more. It trackshardware configurations, warranties, and maintenance schedules, helping with resource planningand optimizing hardware lifecycle management.11. Monitoring and Alerting: The portal offers real-time monitoring of hardware components, systemperformance, and environmental conditions (e.g., temperature, humidity). It generates alerts andnotifications for issues such as hardware failures, network disruptions, or abnormal resourceconsumption.12. Reporting and Analytics: The portal provides reporting and analytics capabilities to generateinsights into data center operations, resource utilization, and performance metrics. It offersdashboards, charts, and customizable reports to aid in decision-making, capacity planning, andtroubleshooting.13. Integration and Automation: The portal integrates with other management tools and systemswithin the data center, such as ticketing systems, configuration management databases (CMDB),or IT service management (ITSM) platforms. It also supports automation capabilities through APIs,allowing for seamless integration with existing workflows and processes.14. Security and Compliance: The portal includes security features to ensure secure access, dataprotection, and compliance with industry standards and regulations. It may include features likerole-based access control (RBAC), audit logs, and encryption of sensitive data.A well-designed Data Center Management Portal helps streamline operations, improve efficiency, andenhance the overall management of data center infrastructure and resources. It centralizes criticalfunctions and provides a holistic view of the data center environment, enabling administrators toefficiently manage and monitor hardware components, network devices, user access, and softwarelicenses.",
        "Category": "Software",
        "PS_Number": "SIH1461",
        "Domain_Bucket": "Blockchain & Cybersecurity"
      },
      {
        "Organization": "AICTE ",
        "Problem_Statement_Title": "Design and Developed a personalized online meeting system for AICTE",
        "Description": "In AICTE many online meetings are conducted to various stakeholders of AICTE such as Institutes,faculty members, HOD and in the Ministry also. Lot of confidential data has been shared through theseonline meeting. In order to increase security and to make a robust system a personalized onlinemeeting portal is needed in AICTE.1. Based on the requirements, design the architecture of the online meeting system. Determiningthe components, such as the server infrastructure, database, APIs, and user interfaces, that willbe needed to develop the system.2. Develop the backend infrastructure: Build the backend infrastructure that will handle the corefunctionalities of the online meeting system. This typically includes user management, meetingscheduling, real-time communication, file sharing, and any custom features required in AICTE.3. Implement video conferencing capabilities: Integrate video conferencing functionality into thesystem. Web Real-Time Communication technology to facilitate real-time video and audiocommunication between participants.4. Create a user-friendly interface for participants to join meetings, manage settings, accessrecordings, and utilize additional features.5. Implement robust security measures to protect the online meetings and user data. This includesencryption of data in transit and at rest, user authentication and access controls, secure storageof meeting recordings, and adherence to privacy regulations.",
        "Category": "Software",
        "PS_Number": "SIH1464",
        "Domain_Bucket": "Blockchain & Cybersecurity"
      },
      {
        "Organization": "AICTE, MIC-Student Innovation ",
        "Problem_Statement_Title": "Student Innovation",
        "Description": "Provide ideas in a decentralized and distributed ledger technology used to store digital information that powers cryptocurrencies and NFTs and can radically change multiple sectors",
        "Category": "Hardware",
        "PS_Number": "SIH1471",
        "Domain_Bucket": "Blockchain & Cybersecurity"
      },
      {
        "Organization": "AICTE, MIC-Student Innovation ",
        "Problem_Statement_Title": "Student Innovation",
        "Description": "Provide ideas in a decentralized and distributed ledger technology used to store digital information that powers cryptocurrencies and NFTs and can radically change multiple sectors",
        "Category": "Software",
        "PS_Number": "SIH1484",
        "Domain_Bucket": "Blockchain & Cybersecurity"
      }
    ]
  },
  {
    "id": "13",
    "title": "Smart Education",
    "icon": <IoBookOutline />,
    "description": "Smart education,a concept that describes learning in digital age. It enables learners to learn more effectively, efficiently, flexibly and comfortably.",
    "ps": [
      {
        "Organization": "Ministry of Law and Justice ",
        "Problem_Statement_Title": "Development of gamified platform on Children's Rights to increase legal literacy and awareness among children in India",
        "Description": "To create a fun, interactive, and engaging gamified platform that educates children in  India about their rights and empowers them to stand up for themselves and others.  Target audience: The platform is intended for children between the ages of 8 and 16, and will be  designed to be inclusive and accessible to all children regardless of their socio-economic  background, gender, or other demographic factors.  Key features: 1 Interactive gameplay that is based on real-life scenarios and challenges related to child  rights, using storytelling, visualizations, and immersive experiences to educate children  on their legal rights and procedures.  2. Modular and adaptive learning modules that provide progressive and personalized  learning paths, catering to individual user needs and preferences.  3. Accessible and user-friendly design, incorporating multimedia elements and language  translation features to promote inclusivity and accessibility.  4. Social and community features enable children to connect and collaborate with other  users, legal experts, and organizations, creating a sense of community and empowerment.  5. Integration with child rights organizations and support services, enabling children to  access legal advice and assistance as needed.  Deliverables: 1. A functional prototype of the gamified platform, demonstrating key features and  functionality.  2. User testing and feedback data, indicating the effectiveness and usability of the platform. 3. A comprehensive report and presentation on the development process, including design  decisions, technical challenges, and ethical considerations.  Expected impact: 4. Increased legal literacy and awareness among children in India, enabling them to make  informed decisions about their rights and responsibilities.  5. Empowerment of children to stand up for their rights and the rights of others, leading to  greater social justice and equity.  6. Enhanced engagement and participation of children in legal processes and systems,  leading to more effective and equitable outcomes.",
        "Category": "Software ",
        "PS_Number": "SIH1281",
        "Domain_Bucket": "Smart Education"
      },
      {
        "Organization": "Ministry of Law and Justice ",
        "Problem_Statement_Title": "Digital Assistant for Legal Awareness and Designing a KYC frameworkin India",
        "Description": "Access to legal information and awareness is a challenge for a large  population in India, especially for those who are not literate or are from marginalized  communities. There is a need to provide a user-friendly and easily accessible platform for legal  awareness.  Challenge: Develop a digital assistant that can provide legal information and guidance to people  in a user-friendly manner. The digital assistant should be able to converse in multiple languages  and provide information in a concise and easy-to-understand manner. The platform should be  accessible through various devices, including smartphones, tablets, and desktop computers.  The digital assistant should be able to address common legal queries, such as: 1. What are my rights as a citizen? 2. How can I file a complaint? 3. How can I access legal aid services? 4. How can I obtain legal documents? 5. What are the legal implications of a particular action?  The digital assistant should also be able to provide information on various legal topics, such as  family law, property law, labor law, and criminal law.  Judging criteria: 1. Effectiveness in providing legal information and guidance in a user-friendly manner 2. Ease of accessibility through various devices and languages 3. Innovation in design and functionality 4. Potential for scalability and sustainability 5. Impact on improving legal awareness and access to justice for marginalized communities.    Note: The Digital solution should be integrated with an all-encompassing framework of Know-  Your-Rights, as described under Develop a comprehensive, accessible, and user-friendly Know-Your-Rights  framework that will educate citizens in India about their legal rights, entitlements, and remedies.  Background: Many citizens in India are unaware of their legal rights and often do not know how  to seek redressal in case of legal violations. A comprehensive Know-Your-Rights framework can  help citizens become better informed about their legal rights and help them navigate the legal  system to seek redressal.  Possible solution components:  1. Identification of relevant laws and regulations: Identify and compile all relevant laws and  regulations that govern various aspects of citizens lives in India.  2. Simplification of legal language: Simplify the legal language of these laws and regulations  so that they are easily understandable by the common citizen.  3. Categorization of legal rights: Categorize these laws and regulations according to the legal  rights they protect. For example, laws relating to labour rights can be grouped under one  category, while those relating to consumer rights can be grouped under another. Indexing    all the Laws of the Central Government and State Governments in India with auto-  categorization of legal rights of respective types of beneficiaries such as tribals, senior    citizens, persons with disability, etc., under the Know-Your-Rights Framework for India.  4. User-friendly design: Design an easy-to-navigate website or mobile application that is  user-friendly and accessible to all. The platform should be designed keeping in mind the  diverse needs of the users, including those with disabilities.  5. Interactive features: Incorporate interactive features such as chatbots, virtual assistants,  and decision trees to make it easier for users to navigate the platform and find the  information they need.  6. Regional language support: Ensure that the platform is available in multiple regional  languages to reach a wider audience.  7. Collaboration with legal aid providers: Collaborate with legal aid providers to ensure that  the platform is regularly updated and reflects changes in the legal landscape.  Expected outcomes:  1. A user-friendly and comprehensive Know-Your-Rights framework that is accessible to  citizens across India.  2. Increased awareness among citizens about their legal rights and entitlements.  3. Improved access to justice for citizens through a better understanding of the legal system.  4. Increased collaboration between legal aid providers and citizens.  5. Development of innovative solutions for legal education and awareness.",
        "Category": "Software ",
        "PS_Number": "SIH1283",
        "Domain_Bucket": "Smart Education"
      },
      {
        "Organization": "Ministry of Jal Shakti ",
        "Problem_Statement_Title": "Development of AI, ML and Chat boat-powered Interactive Robot Mascot (Chacha Chaudhary)and digital avatar to strengthen the river people connect component of Namami Gange.",
        "Description": "Chacha Chaudhary was declared the mascot of the Namami Gange Programme at the 37th Executive  Committee meeting of the National Mission for Clean Ganga (NMCG). NMCG has tied up with Diamond  Toons to develop and distribute comics, e-comics, and animated videos. The objective of bringing about  behavioral change amongst children towards the Ganga and other rivers. To make this solution more  interactive one step further ahead, AI, ML & Chat boat-powered Interactive Robot Mascot (Chacha  Chaudhary) would add value to the product for the river people connect component of Namami Gange.  Prerequisites:  It should be an independent robot to connect with the School children, the common man, and all    stakeholders of NMCG for creating awareness & information dissemination. The product should be user-  friendly & citizen-centric.    Solution: An interactive robot named “Chacha Chaudhary would be the Artificial intelligence &  machine learning & chat boat-enabled mascot of the Namami Gange made with the help of a touch  panel, greets visitors at the entrance and takes them along to each component of the Namami Gange  flagship program in River Basin War Room & Ganga Museum. The digital avatar of Chacha Chaudhary  would also enable on the NMCG website. Robot Mascot (Chacha Chaudhary) & digital avatar solution  would be providing to actively engage with citizens to impart information, awareness, and education  around riverine ecology in an interactive format of digital and outdoor installations. Sample Data Required:  1. https://nmcg.nic.in/  2. http://cganga.org/scientific-advisory-committee/  3. http://nihroorkee.gov.in/Gangakosh/ganga.htm  4. http://gangapedia.in/  5. https://www.gangaaction.org/ganga-gyan-dhara-samgra-samvaad-workshop-for-clean-ganga/  6. https://clap4ganga.com/",
        "Category": "Software ",
        "PS_Number": "SIH1290",
        "Domain_Bucket": "Smart Education"
      },
      {
        "Organization": "Government of Kerala ",
        "Problem_Statement_Title": "Ideate and implement a system to enhance the quality of education in ruralareas.",
        "Description": "Ideate and implement a system to enhance the quality of education in rural areas. The aim of the system should not only focus on increasing the literacy rate but also should assist to elevate the communication skills and knowledge of the targeted society.The system should offer :* Study materials and mentor access.* Monitoring skill progress* Bridge the digital divide* Provide information about grants, loans and incentives.* Offer connectivity to financially disadvantage patrons.* Help individuals with employment opportunities.* Research and development* Access to material resources",
        "Category": "Software ",
        "PS_Number": "SIH1326",
        "Domain_Bucket": "Smart Education"
      },
      {
        "Organization": "Ministry of Social Justice and Empowerment ",
        "Problem_Statement_Title": "Software for intervention of speech sound disorders inHindi and English.",
        "Description": "Background: The majority of individuals with intellectual disability, hearingimpairment, cerebral palsy, chronic neurological condition, and speech and languagedisability present with speech sound disorders characterized by unintelligible speech.These errors may reflect a lack of motor skills to produce a sound, a lack of linguisticknowledge, or deficiencies in both. The Intervention approaches must focus on one ora combination of both skills.Hindi, the national language of India is spoken by over 1 million people, and 43% of theIndian population. Though several training resources are available in English, the resources inIndian languages are limited. A training resource manual titled “Phonics and phonologicalprocessing to Develop Literacy and Articulation-Preliteracy and Articulation drill book‚contains the sounds of Hindi in isolation and in different words across all word positions. Thesame can be used to develop software for training individuals in perception and productionintervention. Given that the majority of the Indian population is in the rural regions andhuman resources are in the urban regions, this software can help bridge the gap and serve theun-served population. The software can be used to give visual and auditory stimulation andfeedback and can help track progress. The training can be more intense with short frequentsessions, and flexible timings. Detailed description:Motor-based Intervention generally includes perceptual and production training and both canbe incorporated into the same software.Perceptual training also called ear training involves teaching their clients to perceive thedistinction between the target and error sounds. Through software, the child can be presentedwith a variety of correct and incorrect real-speech examples of the target phoneme and can beasked to make judgments about whether the production was correct. The software can alsoprovide visual feedback about the accuracy of the child‚ judgment. The software can alsotrack the child‚ success rate to assist the clinician in monitoring progress.Production of a target sound can be done using imitation, phonetic placement, successiveapproximation (shaping), and contextual utilization. All of these can be achieved using thesoftware specifically developed for its use.For eg:Imitation: Several auditory models of the sound in isolation, syllables, or words can beprovided. The child can be asked to watch and listen to the video that shows the 3-dimensional image of the sound /word being produced and then can be asked to repeat thesame. The client‚ production can also be recorded for self-feedback.Phonetic PlacementWhen the client is unable to imitate a target sound, cues or instructions regarding where toplace his or her articulators can be provided. Use of camera to serve as a mirror, imagesshowing the placement, and videos showing the placement and movement during articulationcan be developed. The videos would be 3 dimensional and could involve sound in isolationand word level.Contextual utilizationInvolves isolating a target sound from a particular phonetic context in which a client mayhappen to produce a sound correctly, even though he or she typically produces the sound inerror. Eg: The child can say “bright sun‚ but cannot produce“s‚ in other context. Slowlyintroduce other context through the software and then progress to production of's‚ inisolation. Description of the Solution:For instance, the child needs to be taught the pronunciation of the syllable /ka/.1. The word “cat‚ is projected along with the picture.2. As we tap the word, is heard. This forms the auditory cue.3. The placement of the tongue in the oral cavity and as its changes when the syllables and are pronounced is presented on the animation. This provides a visual cue.4. Production of Isolated syllables eg. /ka/ in this case, can also be shown.5. The tongue movements inside the oral cavity can be shown in slow motion as well.A total of 2-13 such words for each phoneme(depending on the frequency of occurrence ofphoneme in the language) , with each word having a maximum of 5 syllables can be shown toexplain the articulatory pattern. The software can be developed in both Indian English and inHindi, based on the data set.",
        "Category": "Software ",
        "PS_Number": "SIH1334",
        "Domain_Bucket": "Smart Education"
      },
      {
        "Organization": "Ministry of AYUSH ",
        "Problem_Statement_Title": "Application for Assessment of Quality of Textbook/ Reference Books/ E-Book",
        "Description": "The medical students aiming to be good physicians, need to select a standard medical textbook. It is evident that there are several books made available in ASU (Ayurveda, Unani, Siddha) medical systems and every book claims that the book has been written as per CCIM or NCISM syllabus. Amongst some are good and some are of poor quality and were written with vested interest. Due to this, students are trapped by substandard books that leads to poor quality standard among students. Identifying this issue and its impact on medical on the medical system, NCISM constituted an expert committee for the development of an assessment scale for textbooks/ reference books. The expert committee after thorough deliberations developed the assessment scale for the quality assessment of textbooks/ reference books.This assessment scale serves the purpose of‚election of quality textbooks by teachers for their students.Serving as a reference for textbook writers.Providing criteria to recommend for inclusion in the list of recommended apex/ regulatorybodies.The assessment process requires a review of the books by reviewers (subject-wise reviewers located across the country, 3 reviewers per book) and summarizing the reviewer's remarks and decision by the committee.The development of an application on this will help to get reviews from people around the world online and also will help to summarize all the reviewed data in a faster mode.",
        "Category": "Software ",
        "PS_Number": "SIH1340",
        "Domain_Bucket": "Smart Education"
      },
      {
        "Organization": "Ministry of AYUSH ",
        "Problem_Statement_Title": "PG dissertation Management System Description.",
        "Description": "PG dissertation is the partial requirement for the fulfillment of Pg degree. During 1st year of post graduation, student select PG dissertation topic and carry out research under supervision of PG guide and submit dissertation during final year of evaluation.The following are the major steps of the dissertation:Selection of topics:1. As per the thrust ideas of research of a particular department.2. Maintaining student guide ratio.3. To avoid duplication.Approvals and ethical issues.Monitoring research progress.Evaluation of dissertation.Publication if any, out of dissertation research.Maintenance of database of all dissertations under various categories with search option.With holding of university final year results in case of disapproval of PG dissertation.Managing and monitoring all the above aspects throughout the country maybe a herculean task. An application to ease the process and improve the quality of research is essential.",
        "Category": "Software ",
        "PS_Number": "SIH1341",
        "Domain_Bucket": "Smart Education"
      },
      {
        "Organization": "Government of Jammu and Kashmir ",
        "Problem_Statement_Title": "Using technology to develop a moving/mobile education system/software or equipment so that the children of nomadic communities such as Bakarwals /Gujjars can have proper education at least till primary.",
        "Description": "The Gujjar and Bakarwal communities are ethnic groups found in various regions of India, including Jammu and Kashmir. These communities are known for their nomadic lifestyles and traditional livelihoods such as animal husbandry and farming. These nomadic communities spend most of and sometimes even their whole lives migrating between the regions of Jammu and Kashmir. Despite their cultural heritage, both communities face numerous challenges, one of them being a lack of education. As education plays a very important role in one's life, so devise a method or some moving/mobile education system or tech product so that the children of these communities can have proper education while on the move as they don't get to attend schools properly. Mobile Networks and related things are also an issue as they visit places which have very low network range. First, develop a solution which can be implemented for primary education and later on, this can be scaled to higher classes if required. The solution should also look into viability, accessibility, and cost aspects. The solution should be innovative, for ex: if you are thinking of a tablet, some may sell it in exchange for money.",
        "Category": "Software ",
        "PS_Number": "SIH1354",
        "Domain_Bucket": "Smart Education"
      },
      {
        "Organization": "Government of Gujarat ",
        "Problem_Statement_Title": "Student dropout analysis for school education",
        "Description": "Right to education is key concern for government and at school level; drop out ratio is highdue to poverty and social, economic reasons. If government have drop out student analysis on followingdifferent categories, it will be very useful in framing different policies.1. School wise2. Area wise3. Gender wise4. Caste wise5. Age/standard wiseExpected Output: Focused interventions on the high dropout rates",
        "Category": "Software ",
        "PS_Number": "SIH1362",
        "Domain_Bucket": "Smart Education"
      },
      {
        "Organization": "Ministry of Social Justice and Empowerment ",
        "Problem_Statement_Title": "To develop a technical solution for enabling Institution level verification of students of one State studying in other State/s, who are at present generallydenied benefits under the Scholarship scheme as the Institutions in which theyare studying are not registered on the portal/s of their home State.",
        "Description": "To develop a technical solution for enabling Institution level verification ofstudents of one State studying in other State/s, who are at present generallydenied benefits under the Scholarship scheme as the Institutions in which theyare studying are not registered on the portal/s of their home State.",
        "Category": "Software ",
        "PS_Number": "SIH1367",
        "Domain_Bucket": "Smart Education"
      },
      {
        "Organization": "Government of Jharkhand ",
        "Problem_Statement_Title": "Online integrated platform for projects taken up by the students of various universities/colleges",
        "Description": "Innovation is the key to betterment of education and students in the Indian universities/colleges put a lot of efforts on the projects as a part of the academic requirements. If a common knowledge platform (with a facility for plagiarism) is created to bring all project works taken up at various levels by the students in Technical / Higher Educational Institutes and Universities throughout the country, then it will be a great source of knowledge and also will help the student community to take up unique/innovative project works Summary: An integrated platform should be developed where in all the universities/Colleges provide information about the projects done by the students. The information on this platform will help in the peer learning and this will also help in cross functional research between various universities/colleges. Objective: To develop an online integrated platform for projects taken up by the students of various universities/colleges.",
        "Category": "Software ",
        "PS_Number": "SIH1369",
        "Domain_Bucket": "Smart Education"
      },
      {
        "Organization": "Ministry of Power ",
        "Problem_Statement_Title": "lntelligent chatbot to answer queries pertaining to various MaintenanceProcesses within Substation",
        "Description": "Substation Asset Maintenance includes various maintenance activities forvarious equipment classes such as Transformer, Reactors, Circuit Breaker,lnstrument Transformers, Surge Arrestors etc. Maintenance activity for allthese equipments include carrying out various tests and checks for whichprocedures along with acceptable limits are documented.Need is for creating an intelligent chatbot based on natural languageprocessing which may aid in answering user queries pertaining to variousmaintenance activities. Examples of such queries include steps to carry out atest, its probable values/ acceptable limits, actions to resolve any issue facedduring maintenance. The chatbot should have features for semanticprocessing of queries. It should also includes industrial standards and safety guidelines and test equipment to follow that activity.",
        "Category": "Software ",
        "PS_Number": "SIH1380",
        "Domain_Bucket": "Smart Education"
      },
      {
        "Organization": "Ministry of Commerce and Industries ",
        "Problem_Statement_Title": "Developing an interactive gaming software / mobile application on Inteliectual Property Awareness for school students",
        "Description": "One of the primary objectives of CIPAM is to create educational tools and resources for Intellectual Property Awareness at school level. School students learn best when technical areas of law are gamified and interactive in nature. The interactive gaming software/mobile application should aim at teaching the basics of Iintellectual Pproperty Rrights (IPR) to students, including: Patents, Trademarks, Copyrights and Designs that can be used both inside and outside of the classroom and out. The game can have different activities on the IPs mentioned above, arranged at different levels of progression: basic, intermediate and advanced. It should also include elements such as: scoreboard, map of progress, factual titbits and a quick recap at the end. On completion of the game, the students should be able have a basic understanding of these IPs as a learning outcome.",
        "Category": "Software ",
        "PS_Number": "SIH1384",
        "Domain_Bucket": "Smart Education"
      },
      {
        "Organization": "Ministry of Commerce and Industries ",
        "Problem_Statement_Title": "Developing a software that can translate resource material and other texts from English to other Indian regional languages.",
        "Description": "CIPAM is actively involved in furthering IPR awareness, commercialization and enforcement. In this regard, CIPAM has created various educational tools and resource materials for easy understanding by students, industries, general public, police, judiciary and custom official. For wider outreach there is a requirement for a software that can translate these resource materials and texts from English to other Indian regional languages. The software should assist in translation of these texts created in multiple forms: word document, pdf document, text in images etc. The software should aid in generating output that captures the true meaning of the text and not just the literal meaning. It should provide the option of generating translated texts in the following languages: Hindi, Marathi, Bengali, Gujarati, Tamil and Telugu. The translated texts must also be in simple language, easy to understand (especially by the general public) and must not be colloquial in nature. A sample text has been provided for reference.",
        "Category": "Software ",
        "PS_Number": "SIH1385",
        "Domain_Bucket": "Smart Education"
      },
      {
        "Organization": "Ministry of Commerce and Industries ",
        "Problem_Statement_Title": "Developing a software for dubbing of videos from English to other Indian regional languages.",
        "Description": "CIPAM is engaged in the creation of promotional and awareness videos on Intellectual Property in India. A software that can be used for dubbing of videos from English to other Indian regional languages would help in mass outreach of such videos for public awareness. The software must produce a voiceover (in a human like voice) in Indian vernacular languages like Hindi, Marathi, Bengali, Gujarati, Tamil, Telugu, etc. as well as text supers that is dubbed from English to other Indian regional languages. The translated voiceover must also be in simple language, easy to understand and must not be colloquial in nature. A sample video has been provided for reference.",
        "Category": "Software ",
        "PS_Number": "SIH1386",
        "Domain_Bucket": "Smart Education"
      },
      {
        "Organization": "Ministry of Environment ",
        "Problem_Statement_Title": "Virtual Zoo",
        "Description": "Design software and hardware to display holograms of existing andextinct species of flora and fauna to depict complex ecosystems from various partsof the world. The virtual zoo could be displayed in schools, museums, andMinistries without using much physical space. The zoo could also hold educationalsessions about the environment within the virtual space using pre-recorded videosof teachers from around the world.",
        "Category": "Software ",
        "PS_Number": "SIH1394",
        "Domain_Bucket": "Smart Education"
      },
      {
        "Organization": "Ministry of Home Affairs ",
        "Problem_Statement_Title": "AI based IT training system",
        "Description": "Modern technology is changing rapidly and every individual has different level of understanding and different pace of learning things. Having same course for all personnel not only result in waste of time of departments and personnel's but also affects departments productivity. Proposed Solution: AI Based training system may be developed to real time design the course based on individual understanding and learning capacity.",
        "Category": "Software ",
        "PS_Number": "SIH1409",
        "Domain_Bucket": "Smart Education"
      },
      {
        "Organization": "Ministry of Education ",
        "Problem_Statement_Title": "Lowest Cost Smart Board - A Seamless Teaching Experience.",
        "Description": "Develop a smart board for students which will help students in effective interaction and teaching experience",
        "Category": "Hardware",
        "PS_Number": "SIH1430",
        "Domain_Bucket": "Smart Education"
      },
      {
        "Organization": "Ministry of Education ",
        "Problem_Statement_Title": "Online personalized learning remediation/tutoring tool. Search for best teacher for specific topics.",
        "Description": "Develop a model/software which will help students to select best teacher/information about specific topic and help them in personalised learning",
        "Category": "Software ",
        "PS_Number": "SIH1431",
        "Domain_Bucket": "Smart Education"
      },
      {
        "Organization": "Ministry of Education ",
        "Problem_Statement_Title": "Identify slow learners for remedial teaching and capacity buildingfor innovative methods.",
        "Description": "Developed based on available assessment data for students the slow learners and build inovative methods to help them cope up with the educational requirements",
        "Category": "Software ",
        "PS_Number": "SIH1432",
        "Domain_Bucket": "Smart Education"
      },
      {
        "Organization": "Ministry of Education ",
        "Problem_Statement_Title": "Mental health and well-being surveillance, assessment andtracking solution among children.",
        "Description": "Develop a model/software which will help students to assess mental health of students, build methods to find out and provide solution for the improvement",
        "Category": "Software ",
        "PS_Number": "SIH1433",
        "Domain_Bucket": "Smart Education"
      },
      {
        "Organization": "Ministry of Education ",
        "Problem_Statement_Title": "Making career choices and AI based counselling accessible toevery child at secondary level along with aptitude tests anddetailed career paths.",
        "Description": "The project team shall establish an interactive AI based model that will help students to to choose from careers. The model should handhold student in assessing his capabilities and subsequently help him in deciding a career path.",
        "Category": "Software ",
        "PS_Number": "SIH1434",
        "Domain_Bucket": "Smart Education"
      },
      {
        "Organization": "AICTE, MIC-Student Innovation ",
        "Problem_Statement_Title": "Student Innovation",
        "Description": "Smart Education, a Concept that Describes learning in digital age.it enables learner to learn more effectively,efficently,flexibly and comfortably.",
        "Category": "Hardware",
        "PS_Number": "SIH1466",
        "Domain_Bucket": "Smart Education"
      },
      {
        "Organization": "AICTE, MIC-Student Innovation ",
        "Problem_Statement_Title": "Student Innovation",
        "Description": "Smart Education, a Concept that Describes learning in digital age.it enables learner to learn more effectively,efficently,flexibly and comfortably.",
        "Category": "Software",
        "PS_Number": "SIH1467",
        "Domain_Bucket": "Smart Education"
      },
      {
        "Organization": "Government of Jharkhand ",
        "Problem_Statement_Title": "Education ecosystem for specially abled student need provision and improvement to take care of compliance, governance and conduct.",
        "Description": "Children with disabilities in minor or major forms for any of the physical organs or mentally unstable children are considered to be specially-abled ones and to help them absorb the natural flow of life, we need to consider and provide them with a supportive and growing environment where they are able to live and grow.In the educational ecosystem, the needs of such an environment need to be catered according to the category of ailments that exist in the students and provisions need to be made in order to make them feel special, and cared for and set the right mindset while they grow.There are very few educational institutes in India, that accept specially-abled students in regular streams making them feel one among natural children. The first and foremost need is to comply with the Disability Act provisions in the Indian education ecosystem and have the right provisions such as physical infrastructure, digital interaction pathways and the right tooling to make this happen in a much larger portion of the Indian education industry.This problem statement hovers more around the lack of the right system and governance in the Indian Education industry and also has to deal with Disability students' intake, progress and outgo after the education completion. The State Education Report for India 2019: Children with Disabilities by UNESCO states that 27% of disabled children between the age of 5-19 years don't have access to education. It also says that nearly 3/4th of 5 years old specially-abled are left out of the education system, further revealing that this ratio varies gender-wise and girls tend to show in high numbers when it comes to depriving education.As per WHO report, over 1 billion people in the world are specially abled contributing to 15% of the total population and WHODAS 2.0 accessibility standards define means of assessing the disability in an individual, which ponder on a lot of aspects such as, it has been felt that differently-abled persons need special arrangements in the environment for their mobility and independent functioning.It is also a fact that many institutes have architectural barriers that disabled persons find difficult for their day-to-day functioning. The colleges are expected to address accessibility-related issues as per the stipulations of the Persons with Disabilities Act 1995 and ensure that all existing structures as well as future construction projects in their campuses are made disabled-friendly. The institutes should create special facilities such as ramps, rails and special toilets, and make other necessary changes to suit the special needs of differently-abled persons. The construction plans should clearly address the accessibility issues pertaining to disability. Guidelines on accessibility are laid out by the office of the Chief Commissioner of Disabilities.Consciously improving Education for specially-abled children will need planned efforts with the help of technology and human power. This makes the problem statement quite challenging and critical to be addressed the special compliance and governance needs. This problem statement needs holistic solutions that may be hybrid in nature. The objective of this problem statement in one way could be the right implementation of the Disability Act and the provisioning of digital infrastructure and applications to address the needs and feedback mechanisms. Facilitate admission of differently-abled persons in various courses, provide guidance and counselling to differently-abled individuals, Create awareness about the needs of differently-abled persons, and other general issues concerning their learning. Assist differently-abled graduates to gain successful employment in the public as well as private sectors, designing special interaction gateways for such children and helping them feel natural while growing is important.Further, the objective is to come up with ways and means to make meaningful digital application/s that can use this information and generate knowledge, spread massive awareness, and support the intake and management of specially-abled children into the educational ecosystem.The objective of this problem statement solution is also to come up with innovative solutions which may use digital and physical mediums together to make sure disabled persons are able to access and operate these applications. The solution may use technologies like Artificial intelligence, machine learning and internet of things and blockchain to ensure specially-abled children are given the right systems to get into the mainstream of education, sustain with growth aspects and be placed well after their education is completed. It is all about following laws and legal procedures to comply with the Disability Act and make sure the system is governed well for specially-abled people's needs in their complete education lifecycle.",
        "Category": "Software",
        "PS_Number": "SIH1500",
        "Domain_Bucket": "Smart Education"
      },
      {
        "Organization": "Government of Jharkhand ",
        "Problem_Statement_Title": "Blended Learning to overcome inadequate infrastructure",
        "Description": "Once the class size passes a certain point, the teachers are bound to 'fail' because the demands on their time cannot be met. In essence, the root of this problem is not the number of children in a classroom but rather the inability for each child to receive adequate attention. Combining modern technology and 1:1 tuition, students could perform far beyond other students who were being taught in more conventional ways. By combining blended learning (where face-to-face teaching is combined with online learning) with real-time data, we can get rapid feedback in classrooms and use that feedback to further enhance the quality of education.As an example, consider a classroom of 30 students. Ten students with similar abilities may work closely with the teacher, another ten may work through lectures and online tasks using computer terminals, and the final ten may work together on a group project. In the next lesson, students are rotated so they can learn in different ways throughout the course. This kind of approach enables the teacher to focus more closely on fewer children at once. The teacher can also tailor the learning approach for each student based on how well each one works for the individual. Meanwhile, the software on the computer is advanced enough to tailor the content to each student as well. By collecting real-time feedback on each child's results, the course contents can be adapted per student and make it as if they were receiving a one-on-one tuition. This approach allows each student to have their own learning path that's customized to their needs. By doing this, teachers can easily see which students are falling behind and offer more individualized teaching to those students.If more schools were to adopt a similar approach, where some responsibilities could be handled by tech-aided learning methods, more of the teachers' time could be freed-up to give more attention where it's needed the most, even in larger classroom sizes. Further the objective is to come up with ways and means to make meaningful digital application's that can use this information and generate knowledge, spread massive awareness, and support education delivery effectiveness of students into educational ecosystem and generate insights based on data it collected. The objective of this problem statement solution is also to come up with innovative solution which may use digital and physical medium together to make sure specially abled students who are slow learners are identified, their progress is monitored and right alarms and notifications are generated to assist keeping their education on track with elevated motivation. The solution may use technologies like Artificial intelligence, machine learning and internet of things and blockchain to ensure specially abled children are given right systems and interfaces to learn and grow. This solution's objective is to make sure learning becomes seamless and peaceful with right insights and aids for the children.",
        "Category": "Software",
        "PS_Number": "SIH1502",
        "Domain_Bucket": "Smart Education"
      },
      {
        "Organization": "Government of Jharkhand ",
        "Problem_Statement_Title": "Capacity building, performance assessment and motivation driven tool for faculty upgradation",
        "Description": "If teachers were given more freedom, as would likely happen if a blended learning model were introduced as mentioned above, innovation would rocket, and an education system overhaul isn't exactly necessary to accomplish that.After all, there are (and will always be) plenty of options open to teachers to introduce more creativity and innovation to their lessons. Some of the options include Learning Management System (LMS), which allows teachers to create their own personalized, interactive courses from content provided by a range of publishers. Students can then access these courses on any device, while the app keeps a record of how they are progressing. If students are struggling. the course can quickly be altered.If students struggle with boredom, game-based learning can be introduced with LMS.Although granting teachers access to tablets and smartboards may help boost their comfort with education technology, many teachers simply have not thought about how they can best utilize technology in their curriculum. Indeed, the way a history teacher utilizes laptops in the classroom may be very different than the way a math teacher utilizes a smartboard. Both likely require plenty of time for trial, error, and experimentation to bring their lesson plans up to date. A major challenge in the adoption of new tools is not providing teachers with the guidance they need to make education technology work for them in their specific classroom.To overcome the challenge, it is necessary to have ERP solution for the teachers with adequate credit mechanism which can used for appraisals and performance-based incentives to the teachers. Experts",
        "Category": "Software",
        "PS_Number": "SIH1504",
        "Domain_Bucket": "Smart Education"
      }
    ]
  },
  {
    "id": "14",
    "title": "Disaster Management",
    "icon":
      <FaExclamationTriangle />,
    "description": "Disaster management includes ideas related to risk mitigation, Planning and management before, after or during a disaster.",
    "ps": [
      {
        "Organization": "Ministry of Jal Shakti ",
        "Problem_Statement_Title": "Projection of the extent of inundation corresponding to the forecasts of flood levels in a river.",
        "Description": "Many states in India are regularly affected by flooding especially in monsoon season. Central Water Commission (CWC) issues flood warnings in all flood-prone districts based on the regularly measured water gauge level. Flood warnings are issued by CWC to the state administration, whenever the gauge levels cross the danger mark. In all such cases, the severity of the problem is essentially indicated in terms of flood levels. However, the major concern of the state administration is regarding the difficulty faced in assessing the spatial extent of flooding for mapping rescue and relief works. Large volumes of imagery corresponding to varied flood inundations are expected to be available with NRSA and other freely assessable sources. The past imageries corresponding to a specific forecast site can be collected and each imagery be stamped with the observed water level of that particular date and time. An AI-ML-based GIS application can be developed to process the available imageries for projecting new imageries using suitable interpolation/extrapolation of 2D information corresponding to specific flood levels within a given range. The participants of SIH are expected to develop the above-mentioned application using open-source software and demonstrate its utility for any one of the CWCÃ¢â‚¬â„¢s forecast sites (List will be shared) with readily available imageries. Participants can also seek to add value by incorporating tools for making critical infrastructure, filtering outliers, pointing out accuracy levels of projected inundation, etc.",
        "Category": "Software ",
        "PS_Number": "SIH1289",
        "Domain_Bucket": "Disaster Management"
      },
      {
        "Organization": "Ministry of Jal Shakti ",
        "Problem_Statement_Title": "A mobile app that crowd sources water-related problems from around a community, opensources data, etc. and display them on a map.",
        "Description": "The use of social media data in disaster and crisis management is increasing rapidly. Particularly in  connection to flooding events, water quality issues in ponds/lakes, urban flooding, and drainage problem, etc., geo-referenced images shared by citizens can provide situational awareness to emergency  responders, as well as assist with financial loss assessment, giving information that would otherwise  be very hard to collect through conventional sensors or remote sensing products. Discussion about such  events can also be found on various social media platforms. Further, recent advances in computer vision  and deep learning can perhaps support the automated analysis of these data. In this problem, software/  algorithm to be developed focusing on ground-level images taken by humans. Considering distinct  datasets from different sources, the algorithm of the developed mobile app should be able to categorize  water-related problems at different administrative. Further, the mobile app should serve as a  valuable tool for the administrators for planning and managing water-related problems.",
        "Category": "Software ",
        "PS_Number": "SIH1291",
        "Domain_Bucket": "Disaster Management"
      },
      {
        "Organization": "Ministry of Jal Shakti ",
        "Problem_Statement_Title": "Estimation of inflow to a reservoir from the rainfall considering soil moisture in its catchmentand releases from upstream reservoirs and automatically opening of reservoir gates for moderatelyreleasing the water to avoid the flooding in a basin.",
        "Description": "Effective management of water resources in reservoirs is a crucial aspect of mitigating flooding, ensuring water availability, and maintaining ecological balance in a basin. The challenge lies in accurately estimating the inflow to a reservoir, taking into account various factors such as rainfall, soil moisture conditions within the reservoir's catchment area, and upstream reservoir releases. The subsequent task of managing reservoir gates to release water in a controlled manner to prevent flooding adds another layer of complexity.   The existing methodologies for reservoir management often rely on manual intervention or simplistic models that may not capture the intricacies of changing environmental conditions. As a result, basins are vulnerable to both overflows and insufficient water supply during critical periods. To address this issue, there is a pressing need for an innovative solution that integrates data-driven approaches and automation to optimize reservoir gate operations and mitigate flood risks.     Key Challenges:   Accurate Inflow Estimation: Developing a robust and accurate method to estimate the inflow to a reservoir by considering multiple parameters, including rainfall intensity, soil moisture conditions within the catchment area, and potential contributions from upstream reservoir releases.   Real-time Data Integration: Integrating real-time data from weather forecasts, soil moisture sensors, and upstream reservoir releases into a centralized system for inflow estimation and decision-making.   Model Complexity: Designing sophisticated models that can effectively capture the complex interactions between rainfall, soil moisture, reservoir levels, and inflow dynamics, while remaining computationally feasible.   Optimal Gate Control: Developing an automated gate control mechanism that can regulate the release of water from the reservoir in a manner that prevents flooding downstream while ensuring optimal utilization of the stored water.   Flood Risk Assessment: Incorporating flood risk assessment models that consider downstream vulnerability, historical flood patterns, and potential impacts of various release strategies.   Adaptive Decision-Making: Creating algorithms that can adapt to changing conditions, such as sudden heavy rainfall events or unexpected reservoir releases from upstream, to make timely and accurate decisions.   Communication and Coordination: Ensuring effective communication and coordination among various stakeholders, including reservoir managers, weather forecast providers, and upstream reservoir operators.   Balancing Water Needs: Striking a balance between releasing enough water to prevent flooding while also maintaining a sufficient reservoir volume for future water supply and downstream water needs.   The proposed solution seeks to tackle these challenges by employing advanced data analytics, machine learning, and automation technologies. By creating an integrated system that leverages real-time data and predictive models, the solution aims to optimize reservoir gate operations to prevent flooding while optimizing water utilization. This would lead to enhanced flood resilience, improved water management, and increased ecological sustainability within the basin.",
        "Category": "Hardware",
        "PS_Number": "SIH1294",
        "Domain_Bucket": "Disaster Management"
      },
      {
        "Organization": "Ministry of Home Affairs ",
        "Problem_Statement_Title": "Threat zone of an explosion particularly in oil and gas handling industries or refineries",
        "Description": "Development of software for Indian physical territory containing exact geographical locations of all hazardous locations which contain potential risk to damage and destroy human life, property, and environment on a huge sale.This software should be able to find out the area or more precisely the threat zone in which the radiations and blast waves of an explosion will spread to damage its surrounding locality.It's been observed in many explosions and fires in industries, say according to the official report of Jaipur IOCL Fire' by 'SK ROY, GM (ISE), CO INDIAN OIL CORPORATION LIMITED, held on 29 October 2009, where the fire following an explosion in a tank caused 9 tanks out of 11 to explode drastically after the first explosion and the fire continues to spread it's havoc for a sum total of 11 days and no fire personnel, experts and fire services could suggest ways to put off the fire and the fire extinguished by itself after the crude oil(fuel in the tanks on fire) gets totally burned.According to this report, later MB LAL Committee provided 118 recommendations for oil installations but the fighting capabilities cannot be utilized if they can not be directed through the right way and direction of approach towards the fire.The above example shows that even if we have sufficient firefighting resources but if they approach the fire from the wrong direction say from a direction or zone where radiation is at its peak or from where the efficiency of firefighting will be least the available resources are of no use.One should know the zone affected by the fire and the area where the radiations will be very high, high, medium, or low i.e. areas could be distinguished according to the radiations and potential to damage the human, flora, and fauna of the locality present in that threat zone. If a fire will be tackled from the right direction it can be extinguished in a more efficient manner with the least use of resources, and the least wastage of resources, within the least time.One of the most useful advantages of such software is that it can be used to evacuate people and animals from areas with disastrous exposure to radiation so that more and more lives can be saved until the fire will be extinguished or under control. So, such software should be made and propagated among fire personnel for its more efficient and convenient use for different eases and zones for different types of storage i.e different threat zones for different types of storage like LPG bullets, Horton spheres storing the same volume of LPG with different wind speed and wind directions will have different affected areas under radiations.Development of such software will help a lot to our fire services to tackle any type of explosion and fire scenarios with more efficiency.",
        "Category": "Software ",
        "PS_Number": "SIH1308",
        "Domain_Bucket": "Disaster Management"
      },
      {
        "Organization": "Ministry of Power ",
        "Problem_Statement_Title": "Cloudburst prediction system",
        "Description": "analyzing meteorological parameters and weather patterns can provide valuable information for predicting the possibility of cloudbursts. Local meteorological agencies and weather forecasting organizations.",
        "Category": "Software ",
        "PS_Number": "SIH1374",
        "Domain_Bucket": "Disaster Management"
      },
      {
        "Organization": "Ministry of Micro, Small and Medium Enterprises ",
        "Problem_Statement_Title": "Developing Virtual Reality based solutions",
        "Description": "Developing Virtual Reality based solutions in areas like: (i) Creating a virtual showcase/display centre of industrial products developing solutions for one type of industry like garments, shoe industry etc. (ii)VR solution for emergency rehearsals like fire, flood etc. Provide safety training using Virtual Reality.(iii) Ilducation tools for educating industries in utilization of powcr by devcloping virtual rcality, augmcntcd reality bascd solutions.(iv) Developing VR based solution for Construction Company to show the project plan and interior and exterior look.(v) Virtual reality solution for healthcare sector especially for training the new medical practitioner and Para Medicat Staff.",
        "Category": "Software ",
        "PS_Number": "SIH1396",
        "Domain_Bucket": "Disaster Management"
      },
      {
        "Organization": "Ministry of Defence ",
        "Problem_Statement_Title": "AI based Automatic alarm generation and dropping ofpayload at a particular object through a Drone.",
        "Description": "Drones are currently being widely utilized in civilianapplications and military uses too. In severe earthquakeand flood situations, the Drones with artificialintelligence based automatic object recognitioncapability can help rescue teams a lot through automaticalarm generation and dropping of payloads like food,clothes, rescue tools near detected human being.Challenge here is to detect human being from around50-100 m above the ground at a slanted angle and thendrop a payload (say flower for demonstration purposes)near him/ her. Technologies needed will be Drone,Cameras, Processor Board (Raspberry Pi or Intel NUC),Artificial Neural Network or AI hardware and Software,Payload dropping mechanism etc. The developed systemwill be highly useful in many DRDO projects and civilianapplications.",
        "Category": "Software ",
        "PS_Number": "SIH1416",
        "Domain_Bucket": "Disaster Management"
      },
      {
        "Organization": "Ministry of Defence ",
        "Problem_Statement_Title": "AI-ML based intelligent de-smoking/de-hazing algorithm",
        "Description": "Design and Development of AI-ML based intelligent de-smoking/de-hazing algorithm for reproducing the realtime video of the area under fire specifically for indoorfire hazards to aid the rescue operation.",
        "Category": "Software ",
        "PS_Number": "SIH1417",
        "Domain_Bucket": "Disaster Management"
      },
      {
        "Organization": "Ministry of Defence ",
        "Problem_Statement_Title": "Novel Technologies for Early Detection and Mitigation ofAvalanches",
        "Description": "Avalanche is a sudden downhill movement of snow mass alongwith rocks and boulders which can cause damage to human lifeand property. An early detection of avalanches and pre-warningabout the threat can save precious lives and habitats. Suggestinnovative ideas for early prediction and Mitigation of SnowAvalanches in vulnerable mountain terrain.",
        "Category": "Software ",
        "PS_Number": "SIH1421",
        "Domain_Bucket": "Disaster Management"
      },
      {
        "Organization": "Ministry of Defence ",
        "Problem_Statement_Title": "Devise the method for identification of victims buried underavalanches.",
        "Description": "Description (Background): Avalanches can be very dangerous andunpredictable. Even if we take preventive measures to avoidthem, probability of getting caught in an avalanche is still there. Ffvictims are buried under avalanche, it is important to takeimmediate action because the probability of survival decreaseswith time (survival chances goes down to less than 30% after anhour). Avalanche victim detector or other Ground Penetratingradar-based methods are there for victim identification but thesefield based techniques are difficult to use during harsh climaticcondition but these field based techniques are difficult to useduring harsh climatic conditions and rough terrain. Explore thenew technologies for example in the field of Al/ML that can beused for detection of victim buried under an avalanche.",
        "Category": "Software ",
        "PS_Number": "SIH1422",
        "Domain_Bucket": "Disaster Management"
      },
      {
        "Organization": "Ministry of Home Affairs ",
        "Problem_Statement_Title": "Virtual Reality-Based Training for CBRN Disaster Response",
        "Description": "A virtual reality-based training for CBRN (Chemical, Biological, Radiological, and Nuclear) disaster response for NDRF is a training program that may uses virtual reality technology to simulate various CBRN emergency scenarios. It may designed to train NDRF personnel to respond effectively to such emergencies, as currently there is no system available to train them in this regard.Virtual reality-based training immerses trainees in realistic scenarios that simulate the effects of CBRN emergencies. The technology allows trainees to experience the situations as if they were real without exposing them to actual risks. Through the use of specialized software and equipment, trainees can interact with virtual objects, practice rescue techniques. and learn to handle hazardous materials and situations.This type of training can be particularly useful for NDRF rescuers who may face hazardous and high-risk situations during CBRN emergencies. It can help them to gain the necessary skills. knowledge, and confidence to manage such emergencies effectively, which can ultimately save lives and minimize damage.Overall, the development of a virtual reality-based training program for CBRN disaster response for NDRF may be a necessary step to improve the training and preparedness of NDRF personnel for CBRN emergencies.",
        "Category": "Software",
        "PS_Number": "SIH1438",
        "Domain_Bucket": "Disaster Management"
      },
      {
        "Organization": "Ministry of Home Affairs ",
        "Problem_Statement_Title": "Robotics Device for Borewell Rescue Operation",
        "Description": "A robotics device for borewell rescue operation for NDRF can be a valuable tool to assist in the rescue of individuals who are trapped in a borewell. These devices can be equipped with cameras, sensors, and other tools that can be used to locate and extract individuals who are stuck in a borewell.In recent years, there have been several incidents in India where children and adults have fallen into open borewells, resulting in tragic outcomes. The rescue of individuals who are trapped in borewells is a complex and challenging operation that requires specialized equipment and expertise. NDRF is often called upon to assist in these rescue operations.A robotics device for borewell rescue operation can significantly enhance NDRF's capabilities in these situations. The device can be equipped with cameras and sensors that can provide real-time data on the location and condition of the individual trapped in the borewell. It can also be equipped with specialized tools that can be used to extract the individual safelyThe robotics device can be remotely controlled, which means that it can be operated from a safe distance. This feature can be particularly useful in situations where the borewell is unstable, and there is a risk of further collapse. The device can also be designed to be lightweight and compact. making it easy to transport to the rescue site.The deployment of such robotics device for borewell rescue operations can be a significant step in enhancing NDRF's capabilities in these complex and challenging situations. It can help to save lives and minimize damage during these emergencies.",
        "Category": "Hardware",
        "PS_Number": "SIH1439",
        "Domain_Bucket": "Disaster Management"
      },
      {
        "Organization": "Ministry of Home Affairs ",
        "Problem_Statement_Title": "An application under which all rescue agencies are registered and which can display the location of other rescue relief agencies during natural/ man made calamities",
        "Description": "To build such an application. there is need to create a central database where all rescue agencies can register their information, including their location, contact details, and areas of expertise. This information could be entered manually by agency administrators, or automated using GPS or other location tracking technologies.Once the database is populated, the application would need to be designed to display this information in an easy-to-use interface: It could include a map that shows the locations of all registered rescue agencies, along with filters that allow users to narrow down the results based on specific criteria, such as the type of disaster, the resources available, or the time since the last reported activity.In addition to displaying the locations of rescue agencies, the application could also include features for communication and collaboration. For example, agencies could send alerts or requests for assistance to each other directly through the application, or collaborate on shared resources such as medical equipment or transportation.Security and privacy would be major considerations in building such an application. It would be important to ensure that only authorized users have access to the database, and that sensitive information such as personal contact details is protected.Overall, building an application that allows rescue agencies to coordinate their efforts and provide aid more effectively could be a valuable tool for responding to natural or man-made disasters.",
        "Category": "Software",
        "PS_Number": "SIH1440",
        "Domain_Bucket": "Disaster Management"
      },
      {
        "Organization": "Ministry of Home Affairs ",
        "Problem_Statement_Title": "Awareness and Preparedness Towards Disaster Management",
        "Description": "Disasters can strike anytime, anywhere, and can have devastating effects on individuals, families, communities, and entire countries. Therefore, it's crucial to have awareness and preparedness towards disaster management.The mock exercises. School Safety Programmes (SSP), and Community Awareness programme (CAP) that will be conducted by various stakeholders such as NDRF/SDRF, etc. These exercises are aimed at enhancing the preparedness and response capabilities of our community to deal with any emergency or disaster situation.The exercises are designed to simulate real-life scenarios and test the response capabilities of various agencies involved in disaster management. These exercises are crucial in identifying gaps in our preparedness and response capabilities and help in improving themTo benefit from these programs, it is important to give a notification regarding mock exercises, SSP, and CAP conducted by various stakeholders such as NDRF/SDRF, etc., to concern people so that they registered timely and became a beneficiary/ a part of the exercise. This will enable to concern to be prepared for any eventualities that may occur in the future.The system provides the contact number, links, and information regarding Disaster Management Authorities. Datasheet of various previous disasters, do's, and don'ts, it may include early warning of disaster.",
        "Category": "Software",
        "PS_Number": "SIH1462",
        "Domain_Bucket": "Disaster Management"
      },
      {
        "Organization": "AICTE, MIC-Student Innovation ",
        "Problem_Statement_Title": "Student Innovation",
        "Description": "Disaster Management includes ideas related to risk mitigation and Planning before,after or Duration of Disaster.",
        "Category": "Software",
        "PS_Number": "SIH1468",
        "Domain_Bucket": "Disaster Management"
      },
      {
        "Organization": "AICTE, MIC-Student Innovation ",
        "Problem_Statement_Title": "Student Innovation",
        "Description": "Disaster Management includes ideas related to risk mitigation and Planning before,after or Duration of Disaster.",
        "Category": "Hardware",
        "PS_Number": "SIH1469",
        "Domain_Bucket": "Disaster Management"
      },
      {
        "Organization": "Ministry of Home Affairs ",
        "Problem_Statement_Title": "Areal Location of Hazardous Atmosphere in Industries",
        "Category": "Software",
        "PS_Number": "SIH1505",
        "Domain_Bucket": "Disaster Management"
      }
    ]
  },
  {
    "id": "15",
    "title": "Toys",
    "icon": <MdSmartToy />,
    "description": "Challenge your creative mind to conceptualize and develop unique toys and games based on our civilization, history, and culture etc.",
    "ps": [
      {
        "Organization": "AICTE, MIC-Student Innovation ",
        "Problem_Statement_Title": "Student Innovation",
        "Description": "Challenges your creative minds to conceptualize and develop unique toys and games.",
        "Category": "Software",
        "PS_Number": "SIH1496",
        "Domain_Bucket": "Toys & Games"
      },
      {
        "Organization": "AICTE, MIC-Student Innovation ",
        "Problem_Statement_Title": "Student Innovation",
        "Description": "Challenges your creative minds to conceptualize and develop unique toys and games.",
        "Category": "Hardware",
        "PS_Number": "SIH1497",
        "Domain_Bucket": "Toys & Games"
      }
    ]
  },
  {
    "id": "16",
    "title": "Miscellaneous",
    "icon": <MdMiscellaneousServices />,
    "description": "Technology ideas in tertiary sectors like Hospitality, Financial Services, Entertainment and Retail.",
    "ps": [
      {
        "Organization": "Ministry of Chemicals and Fertilizers ",
        "Problem_Statement_Title": "International Comparative System to Launch Integrated Real-Time Data Management System (IDMS) for Chemical and Petrochemicals Sector.",
        "Description": "Most of the Countries collect information/ maintain inventory on the Chemical and Petrochemical sector for monitoring and policy making to improve this sector. There is standard practice for data collection for those countries who are the member of the United Nations Statistical Commission (UNSC) and other countries. D/o Chemicals and Petrochemicals, M/o Chemicals and Fertilizers are desirous to make a Web Based Application/ Portal to develop an Integrated Data Management system (IDMS) for the Chemical and Petrochemicals Sector.  The main goal is to design an integrated data management that would gather, store and share information about various facets of the chemical and petrochemical industry including market standards as well as allow for mapping all relevant data to automate different fields of chemicals and petrochemical sector for the Govt. of India. With the designed system, the specific data variable needs like advanced product search and comparison, technical data sheets generation, and creating a solid data management platform for true collaboration of different countries information.",
        "Category": "Software ",
        "PS_Number": "SIH1278",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "Ministry of Law and Justice ",
        "Problem_Statement_Title": "Development of software for streamlining the listing of cases through Differentiated Case Flow Management",
        "Description": "Cases differ substantially in the time required for a fair and timely adjudication, not all cases make the same demands upon judicial system resources. Thus, they need not be subject to the same processing requirements. The concept of Case Flow Management for High Court and Subordinate Courts was first introduced through the judgment of the Supreme Court of India in the case of Salem Advocate Bar Association v. Union of India, following which the Model Draft Rules were proposed by the Law Commission, Jagannadha Rao Committee, wherein model case management rules endorsed by the Supreme Court also containing timelines for different case types, the upper limit of which is two years were proposed.   Problem Statement/Challenge: Computerization has failed to improve the case scheduling process. However, solving some administrative problems through the aid of technology could reduce the constraints under which judges work and ensure the timely listing of cases thus aiding the speedy disposal of cases. A 'Differentiated Case Flow Management(DCM) system would enable a court to prioritize cases and the recognition that many cases can and should proceed through the court system at a faster pace than others if appropriate pathways are provided.   Objective/Expected Outcome: Under a DCM system, cases do not wait for disposition simply on the basis of the chronological order of their filing. This would greatly aid in minimizing and making more predictable the time between case events more and aid efficient disposal of cases.",
        "Category": "Software ",
        "PS_Number": "SIH1279",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "Ministry of Law and Justice ",
        "Problem_Statement_Title": "Development of e-Portal for facilitating Case Management Hearing of various types of cases",
        "Description": "Case Management Hearing, known as a Pre-Trial Conference\" in other jurisdictions\"",
        "Category": "Software ",
        "PS_Number": "SIH1280",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "Ministry of Law and Justice ",
        "Problem_Statement_Title": "Tech-Driven Solutions for Undertrial Prisoners in India",
        "Description": "To develop technology-driven solutions that address the challenges faced by  undertrial prisoners in India, including legal aid, access to justice, and rehabilitation.  Key features: 1. A mobile app that provides legal aid to undertrial prisoners, including legal  representation, access to court proceedings, and legal resources.  2. A platform that connects undertrial prisoners with pro bono lawyers, legal clinics, and  legal aid organizations including UTRCs for bail process.  3. A rehabilitation program that uses technology to provide education, vocational training,  and mental health support to undertrial prisoners.  4. A dashboard that tracks and monitors the status and progress of undertrial prisoners,  providing real-time information to lawyers, judges, and prison authorities.  5. A virtual platform that allows undertrial prisoners and the support-persons to access the  awareness of rights and various provisions of UTPs and thereby improving access to  justice.  Deliverables: 1. A functional prototype of the technology-driven solution that addresses the challenges  faced by undertrial prisoners in India.  2. A comprehensive business plan that outlines the feasibility, sustainability, and scalability  of the proposed solution.  3. A pitch deck that effectively communicates the problem statement, solution, and impact  of the proposed solution.  Expected impact: 1. Increased access to legal aid and representation for undertrial prisoners, leading to a  more equitable and fair criminal justice system in India.  2.Improved rehabilitation outcomes for undertrial prisoners, reducing recidivism rates and  promoting social reintegration. 3. Increased transparency and accountability in the criminal justice system, reducing the  number of undertrial prisoners languishing in jails. 4. Increased collaboration between legal and tech experts, leading to innovative and  impactful solutions for social justice.",
        "Category": "Software ",
        "PS_Number": "SIH1282",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "Ministry of Law and Justice ",
        "Problem_Statement_Title": "AI-powered Legal Documentation Assistant",
        "Description": "Legal documentation can be a complicated and time-consuming process, especially  for individuals and small businesses who may not have access to legal resources. In addition, the  language and jargon used in legal documents can be difficult for non-lawyers to understand,  which can lead to errors and misunderstandings.  Objective: The objective of this hackathon challenge is to develop an AI-powered solution that  can simplify legal documentation for individuals and small businesses in India, by automatically  drafting legal documents in plain language and using easy-to-understand terms.  Potential Features: 1. User-friendly interface for inputting relevant information such as parties involved, terms  of the agreement, and other necessary details.  2. AI-powered document generation that automatically drafts legal documents in plain  language and using easy-to-understand terms.  3. Ability to customize legal documents based on the specific needs of the user. 4. Integration with existing legal resources and databases to ensure accuracy and  completeness of the legal documents.  5. Option for users to seek legal advice from an expert in case of complex legal issues.  Impact: The proposed solution can greatly benefit individuals and small businesses in India, who  often face challenges with legal documentation due to limited access to legal resources. By  simplifying legal documentation, this solution can potentially save time, reduce errors, and  increase access to justice.  Data: Participants can use publicly available legal databases and resources to train the AI model  for document generation.  Deliverables: 1. A working prototype of the AI-powered legal documentation assistant, demonstrating its  functionality and ease of use.  2. A presentation outlining the features and potential impact of the solution, as well as its  technical architecture and data requirements.  3. Code and documentation for the solution, along with instructions for deployment and  maintenance.  Note: Participants are encouraged to consider the ethical implications of their solution and to  prioritize data privacy and security.",
        "Category": "Software ",
        "PS_Number": "SIH1285",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "Ministry of Law and Justice ",
        "Problem_Statement_Title": "Incentives based Design for onboarding Legal Service Providers such as Advocates,Arbitrators, Mediators, Notaries, Document Writers, etc on eMarket Place for extendingLegal Services to Citizens in India",
        "Description": "In India, the legal service sector is largely unorganized, making it difficult for  people to access legal services. Many legal service providers, such as advocates, arbitrators,  mediators, notaries, and document writers, operate independently and do not have a centralized  platform to offer their services to clients. This leads to a lack of transparency, difficulty in  finding the right legal service provider, and high costs for clients.  Objective: The objective of this hackathon is to develop an incentivized design to onboard legal  service providers on an eMarketplace to extend legal services to citizens in India.  Solution: Participants are expected to design a platform that can onboard legal service providers  on an eMarketplace and incentivize them to offer their services to clients. The platform should  be user-friendly, secure, and transparent, and should address the following challenges: 1. How to incentivize legal service providers to offer their services on the platform? 2. How to ensure transparency and accountability in the services provided by legal service  providers?  3. How to ensure the quality of legal services provided by the service providers? 4. How to ensure that clients can easily find the right legal service provider for their specific  legal needs?  5. How to ensure that the platform is accessible to citizens from all socio-economic  backgrounds?  Participants can consider various models for incentivizing legal service providers, such as  offering them bonuses, rewards, or other forms of recognition for their services. They can also  consider gamification techniques to motivate providers to offer quality services and compete  with each other on the platform. Additionally, they can explore ways to integrate the platform  with other legal service providers and institutions, such as courts, legal aid clinics, and bar  associations.  Deliverables: The deliverables for this hackathon are a functional prototype of the e-marketplace  platform, including wireframes, user stories, and a brief video demonstration of the platform's  features and functionalities. The platform should be designed to address the needs of both legal  service providers and clients and should offer a seamless user experience.",
        "Category": "Software ",
        "PS_Number": "SIH1286",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "Government of Punjab ",
        "Problem_Statement_Title": "PGRKAM web application ( www.pgrkam.com) and the PGRKAMAndroid application of the Punjab Government provides employmentdata to the prospective candidates.",
        "Description": "PGRKAM web application ( www.pgrkam.com) and the PGRKAM  The Android application of the Punjab Government provides employment  data to prospective candidates. It is required that the candidates  should be able to receive job notifications while they are on the move or while they are using their camera phones.  The job notifications received by the candidates should be  corresponding to the geospatial coordinates of the candidates.  The mandatory requirements are listed below:  1. The application should accommodate the AR feature.  As the candidate uses the smartphone camera  (i) A notification would be received on the screen about  the jobs or gig jobs or skill development initiatives or  foreign counseling initiatives available in that area.  (ii) The details should also be made available on the  screen.  (iii) A weblink should be available that navigates to the  webpage where the candidate can successfully apply  for the job or the gig.  2. The GPS feature should be integrated to generate an interface  that enables the employers (demand side) to view the prospective  registered candidates having desired skills for a specific job. This  the information must be available in real-time based on the  geographical coordinates of the candidate and employer.  3. The app should be able to push notifications to candidatesÃ¢â‚¬â„¢  smartphone about a job, skill development, or foreign counseling  based on their geospatial coordinates.  4. The app should also be able to maintain candidatesÃ¢â‚¬â„¢ history and  preferences to add a level of personalization for better  recommendations. The app should employ Machine Learning (ML), Data Science, Deep  Learning, Augmented Reality (AR), Global Positioning System (GPS)  Expected Outcome User should be able to find jobs at any location and can even find jobs  on his camera phone as and when he points the camera on a particular  building/ location within a geographical area.",
        "Category": "Software ",
        "PS_Number": "SIH1303",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "Government of Punjab ",
        "Problem_Statement_Title": "PGRKAM web application ( www.pgrkam.com) and the PGRKAMAndroid application of the Punjab Government provides employmentdata to the prospective candidates. The platform has a sizeable number of userbase but it lacks integrated analytics tools to understand how the usersare consuming the information.",
        "Description": "It is desired that an analytics tool similar to  Mixpanel/Kissmetrics/Google Analytics be developed/integrated to the  PGRKAM app to enable the administrators to track the usersÃ¢â‚¬â„¢ behavior  and actions. It is desired that the following details be captured by the  tool:  1. Channel where the user spotted the PGKAM advertisement.  2. Demographics of users.  3. Webpage/service accessed/information consumed by the users.  4. Job suggestions based on a potential match in job requirements and  skillsets of registered users  5. Collective analysis of success/ failure rate of the user profile with  respect to job requirements for better future suggestions along with job recommendations using algorithms like Genetic Algorithm or Collaborative Filtering or any other recommendation algorithm    The details are expected to be displayed using better visualization tools  to enable the teams to analyze how and why people engage, convert,  and retainÃ¢â‚¬â€in real-time, across devicesÃ¢â‚¬â€to improve their user  experience.  Expected Outcome    User movement and user behavior should be successfully tracked  across the PGRKAM app and website for timely reporting and analytics  pertaining to user profile, behavior, and experience",
        "Category": "Software ",
        "PS_Number": "SIH1304",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "Ministry of coal ",
        "Problem_Statement_Title": "Application of Image Analytics for Tree enumeration fordiversion of Forest Land.",
        "Description": "When forest land needs to be diverted for developmental projects, it is crucial to have an accurate understanding of the tree population within the affected area. Traditional methods of tree enumeration, such as manual surveys or ground-based assessments, can be time-consuming, expensive, and prone to errors. To address these challenges, the challenge is to develop an image analytics solution that automates the tree enumeration process using satellite imagery or aerial photographs, or any other means (using section view)..The proposed solution should address the following key aspects:Image Data Analysis: Develop a computer vision algorithm that can analyze satellite imagery or aerial photographs to detect and identify trees within the designated forest areas accurately. The algorithm should account for variations in tree species, sizes, and environmental conditions to ensure reliable results.Tree Counting and Categorization: Design a system that can count the number of trees in the specified area and categorize them based on their species or other relevant parameters like diameter(girth). The solution should provide accurate and detailed information about the tree population to facilitate decision-making during the land diversion process.Accuracy and Validation: Create mechanisms to validate the accuracy of the image analytics solution by comparing the results with ground-truth data obtained through manual surveys or other reliable methods. The solution should aim to achieve a high level of accuracy and minimize false positives or false negatives in tree identification and counting.Scalability and Efficiency: Develop an efficient and scalable solution capable of processing large volumes of image data within a reasonable timeframe. Consider optimization techniques and parallel processing approaches to ensure timely results, especially for large forest areas or time-sensitive projects.Integration and Visualization: Enable seamless integration of the image analytics solution with existing forest management systems or tools. Provide visualizations or interactive interfaces that allow users to explore and interpret the results easily. This could include the generation of maps, reports, or other visual representations of the tree enumeration data.Ethical and Environmental Considerations: Ensure the solution adheres to ethical practices, respects privacy concerns, and minimizes potential environmental impact. Consider the privacy of sensitive data, secure storage of images, and compliance with environmental regulations throughout the development and deployment of the solution.By addressing these aspects, the proposed image analytics solution will facilitate efficient and accurate tree enumeration for the diversion of forest land. It will provide stakeholders with vital information to make informed decisions regarding land usage, environmental impact assessment, and conservation efforts, ensuring responsible and sustainable development.",
        "Category": "Software ",
        "PS_Number": "SIH1316",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "Ministry of Information and Broadcasting ",
        "Problem_Statement_Title": "A complete Digital Marketing solution for visible increase in online sale of DPD‚ journals and Employment News issues through various available/new online sale channels (like website, apps , amazon, social media) by optimising various available or new digital marketing tools like email marketing, SEO, analytics, etc., subject to suitability, sustainability and cost-effectiveness.",
        "Description": "The Directorate of Publications Division (DPD) is a publication agency of the Governmentof India that is engaged in publishing books and journals in various languages and for variedsections of people. DPD provides a platform for buyers to purchase books and journals through itssales emporiums and various online platforms. Employment News (EN), now a part of DPD, is ajournal that provides information on employment opportunities and is published in English, Hindi, and Urdu and is also available online on a subscription basis. The various online platforms presentfor purchasing DPD books/e-books/journals/e-journals are:S.No.Name ofplatformURL 1 PublicationDivisionWebsitehttps://www.publicationsdivision.nic.in/2 JournalsWebsite witharchiveshttps://www.publicationsdivision.nic.in/journals/3 EmploymentNewsWebsite(Hindi)http://www.employmentnews.gov.in/4 EmploymentNewsWebsite(English)http://www.employmentnews.gov.in/5 DPDAndroid apphttps://play.google.com/store/apps/details?id=com.iconmaandhl=en_INandgl=US6 EmploymentNews Portal(underdevelopment)7 Amazon8 VariousSocial MediaPlatformslikeFacebook,Twitter andInstagramTwitter/Instagram: @DPD_India,Twitter: YojanaJournal, Employ_NewsFacebook: https://www.facebook.com/publicationsdivision/5Despite being present on multiple online platforms the sales figures for the books and journalspublished by DPD over the years have not shown encouraging growth. While initiatives are beingtaken from editorial and design teams to improve the books and journals, a need was felt toencourage young students/ graduates to work on providing complete digital solutions andreworking a complete digital marking strategy for increasing online sales. By making use ofvarious tools for digital marketing, the products of DPD may be available to the buyers seamlesslyon various platforms. These may include email marketing, Content marketing, competitor analysis,Search Engine optimization, performance reporting, Social media and website analytics and thelike.Details of DM Tools that may be used :The SEO may improve the chances of DPD websites figuring out among the top options forpurchasing books in India and abroad related to the content published. Specific books on Gandhiji,PM, President, Rashtrapati Bhawan and even Mirza Galib, Lord Buddha, etc., published by DPDmay also be available when users search for such books/ personalities.Moreover, DPD has a database of user details but presently there is no system of capturing suchdata for increasing sales and retaining customers. As such email marketing may be employed toretain one time or regular buyers by providing them targeted options for purchase as per theirpreferences. Alerts for new issues of a (preferred) journal may also be sent to them. Also, solutionto capture new audience may also be worked out using email marketing.Next, DPD/EN are present on various social media platforms like Twitter, Instagram, Facebooketc. and various tools may be used to best make use of such social media platforms for increasesales and capturing new customers/buyers for which analytics, advertising, content marketing andother tools may be explored. If needed, any new platform that may be required from point of viewof improving online sales may also be created.Objective :A push through various digital media tools is targeted at increasing sales of various books andjournals of DPD and encouraging book-reading culture in the country for various socio-economicissues. A range of literature published by DPD is based on preservation on historic and culturalheritage of India and promotion of reading habits in children. Digital media promotion should payspecial attention to these aspects. The sales figures for Yojana and Kurukshetra Magazine inEnglish/Hindi as well as in various regional languages have a huge scope for improving the salesand needs to be given special attention especially since the audience includes civil servicesaspirants in various parts of the country. Giving a boost to the subscriptions of Employment Newsis another focus area for which there is a huge scope in smaller cities and towns.Prototypes to be created by the participating teams :The participating teams may create the following subject to subject to suitability, sustainabilityand cost-effectiveness of the DM tools61. A complete DM strategy for (a) increasing online sale of books and journals (b) increasingsubscriptions of Employment News2. A prototype for SEO using various keywords aimed at increasing visibility of website andapps, amazon books of DPD3. At least 4-5 prototypes for content marketing; A prototype for email marketing for (a)capturing one-time buyers (b) capturing new audience4. A model for promoting sales through various social media platforms5. A model for increasing sales of Yojana and Kurukshetra Magazines using suitable DMtools ",
        "Category": "Software ",
        "PS_Number": "SIH1331",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "Ministry of Mines ",
        "Problem_Statement_Title": "Mines operation specially haulage of dumphers done through operators extended even in the absense in adequacy of operators.",
        "Description": "Description: In case of Force majeure situations like road blockades/strikes by locals, allhaulage operations are halted. Also sometimes due to the absence of operators, the quantum ofexcavation/haulage has to be reduced commensurate to the available workforce.Solution Desired: If there would have been autonomous/automated haulage systems allowingprogrammable operation of dumpers within OEM operating parameters, without an operatorsitting inside the cabin, then the issues could be taken care of. This would further:ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’¡Ãƒâ€šÃ‚Â¼ Reduce/eliminate the need to stop equipment for breaks and shift changes, whichincreases the utilization of each vehicle.ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’¡Ãƒâ€šÃ‚Â¼ By better tracking and controlling vehicle operations within OEM prescribed limits,asset life can be extended, including areas such as tires, brakes, and othercomponents.ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’¡Ãƒâ€šÃ‚Â¼ The systems having control from a remote control/command center will enablecontrolling and managing vehicle operations in a consistent manner thereby leading toa significant reduction in labor, fuel, and maintenance costs.In the absence of completely autonomous/automated haulage systems, teleoperated vehiclescould be used enabling automatic steering along a pre-set path.ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’¡Ãƒâ€šÃ‚Â¼ Drivable areas within the mine are converted into a map for the systems.ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’¡Ãƒâ€šÃ‚Â¼ Here an operator may control acceleration and braking while the Tele-operating systemautomatically controls steering. Similar to a train on a railroad track, controlled vehiclescan drive on their precise path, minimizing the reliance on high-resolution video andoperator skills for safe operation and also preventing the operators from driving inunsafe and prohibited areas.",
        "Category": "Hardware",
        "PS_Number": "SIH1336",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "Ministry of Mines ",
        "Problem_Statement_Title": "unpredictable wear and tear of cable belt conveyor Rope and belt leading to frequent stoppage of single line Mine production system causing significant loss of production",
        "Description": "The 14.6 km long cable belt conveyor is supported on pulleys. A steel rope runsover these pulleys while the belt sits over them. The conveyor is operated by pulling the steelropes with a drive motor. The rope gets elongated due to pulling force leading to breakage of itsstrands. Similarly, the belt also gets worn out causing stoppage of conveyor operationunpredictably.Solution Desired: By capturing the past reasons for wear and tear including visuals and usinga suitable ML application, try to predict the condition of the Rope and belt well in advance such thatcorrective and preventive actions can be taken before its failure preventing loss of production.",
        "Category": "Hardware",
        "PS_Number": "SIH1337",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "Ministry of Commerce and Industries ",
        "Problem_Statement_Title": "Sentiment Analysis of Incoming calls on helpdesk",
        "Description": "The problem at hand involves developing a sentiment analysis solution specifically tailored for analyzing the sentiment of incoming calls in helpdesks, call centers, and customer services. With the ever-increasing volume of customer interactions in these domains, it is crucial for businesses to gain insights into the sentiments expressed by their customers during phone conversations. Sentiment analysis refers to the process of automatically determining the sentiment or emotional tone conveyed by a text or speech. In the context of incoming calls, sentiment analysis can provide valuable information about customer satisfaction, identify potential issues, and highlight areas for improvement in customer service delivery.",
        "Category": "Software ",
        "PS_Number": "SIH1356",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "Ministry of Commerce and Industries ",
        "Problem_Statement_Title": "Sentiment analysis of Social Media presence",
        "Description": "This problem involves developing a sentiment analysis solution specifically designed for analyzing the sentiment expressed in the social media presence of individuals and organizations. With the significant impact of social media on personal and organizational reputation, understanding the sentiment of social media posts, comments, and interactions has become essential for individuals and businesses alike. Sentiment analysis refers to the process of automatically determining the sentiment or emotional tone conveyed by text or speech. In the context of social media, sentiment analysis can provide valuable insights into public perception, customer feedback, and brand reputation. By analyzing the sentiments expressed in social media content, individuals and organizations can gauge the overall sentiment trends, identify potential issues, and take appropriate actions to maintain or enhance their online presence.",
        "Category": "Software ",
        "PS_Number": "SIH1357",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "Ministry of Commerce and Industries ",
        "Problem_Statement_Title": "Image correctness for a product on marketplace",
        "Description": "This problem involves developing an image correctness analysis solution specifically tailored for assessing the accuracy and quality of product images on marketplace and e-commerce platforms. With the increasing reliance on visual content in online shopping, ensuring the correctness and authenticity of product images has become crucial for building trust and facilitating informed purchasing decisions. Image correctness analysis refers to the process of automatically evaluating and verifying the accuracy, completeness, and relevance of product images displayed on online marketplaces and e-commerce platforms. It aims to detect potential issues such as misleading images, incorrect representations, altered visuals, or mismatched product details.",
        "Category": "Software ",
        "PS_Number": "SIH1358",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "Ministry of Social Justice and Empowerment ",
        "Problem_Statement_Title": "Centralised Nasha Mukti Database",
        "Description": "Details of counselling and De-Addiction interventions provided to thebeneficiaries at facilities supported by MoSJE is not available on a singleplatform, which could help in analysis of patient-wise, center- wise or State-wise details of services provided, beneficiaries reachedand other relevantdetails.",
        "Category": "Software ",
        "PS_Number": "SIH1366",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "Government of Jharkhand ",
        "Problem_Statement_Title": "Community Based Reporting and Monitoring Tool for Women's Safety in Colleges/Universities.",
        "Description": "Campuses of colleges and universities are meant to be vibrant, free-flowing, and dynamic in nature. An accommodating campus supports idea exchange, personal growth, and soft skill development. The safety of students, especially women's students, is a pillar of an accommodating campus. In the present scenario, the measures available to college administrators and students, such as the installation of CCTV cameras, increased security on campuses, and the establishment of police outposts, are reactive in nature, i.e., they are pressed into action only after the occurrence of a mishap. The objective of the problem statement is to develop predictive analytic models to prevent mishaps even before they occur. The second issue pertaining to women's safety is the lack of manpower for proactive interventions to prevent mishaps. Another objective is to develop, monitor, predict, and provide actionable intelligence for the prevention of mishaps. The solution can explore the contours of anonymous and non-anonymous data collection mechanisms, point-to-point reporting systems, and predictive data analytics for providing actionable intelligence. Further, the collected data can be leveraged to develop and mark probable black spots and red time zones for pin-pointed actions to be taken by administrators.To promote a community-based system, the system may be designed in such a way that it not only gathers information from students but also involves the entire student community in the prevention of mishaps.The data collected from the participants can be populated into the system, and real-time monitoring can be done with an interactive dashboard and charts. It can also be used to develop real-time rapid intervention by the student community, college administration, and local authorities.Further to this, a companion model can also be developed for students that helps them travel through black spots and during red time zones. This will not only ensure the community participation of students but also develop a responsibility-sharing framework for campus safety.",
        "Category": "Software ",
        "PS_Number": "SIH1371",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "Ministry of Power ",
        "Problem_Statement_Title": "Segregating and information onregulatory / Gofi. PolicieVGuidelines/OfficeMemorauda etc. related to Contract andProcurement issues for proper compliance andreporting of the same.",
        "Description": "For adhering to compliance of various procurement and contract managementrelated Regulations/ Policies/ Guidelines /Circulars/ Manuals/ OfficeMemorandums etc. issued by Govt. of India/ MoF/ MoP/ CVC from time to timefor system improvement in the procurement process, such regulations /policies/ Guidelines/ Circulars etc. may require to be put in one place forinformation, reference, compliance / reporting of the same by the procuringauthorities in the required manner like whether adopted in the tenderdocument/ reporting thereof to the concerned made, wherever necessarythrough creation of a tool/ application /system for effective contractmanagement. The GUI should be user friendly and the documents should beeasily accesible.",
        "Category": "Software ",
        "PS_Number": "SIH1378",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "Ministry of Defence ",
        "Problem_Statement_Title": "Drone based Intelligent Magnetic sensing system andMetallic anomaly detection system",
        "Description": "Most of the metallic objects are constructed ofFerromagnetic materials and in the presence of Earth‚magnetic field, these create localized magneticdisturbances in Earth magnetic field which is termed asMagnetic signature. This magnetic signature of objectscan be used for detection, identification andclassification of objects. The above problem statement envisages, that a Dronebased Intelligent Magnetic sensing system be developedto assess the magnetic fields in a particular area (abovesea or above land) and identify any magnetic anomaliesin that measurement region.A Portable Drone Control module for control along withan in-built learning and prediction algorithms tocompensate self magnetic field of drone and measurethe magnetic fields in a particular area of interest also bedeveloped.Suitable metallic object detection methodology foridentifying unidentified metallic magnetic anomaly inthat particular region is also to be developed. A drone fitted with magnetic sensing system bedeveloped with suitable compensation methodology forcompensating own drone‚ magnetic fields. Based onopen source geomagnetic anomalies data of a particularregion, identification and classification of metallicmagnetic anomaly to be carried out.",
        "Category": "Hardware",
        "PS_Number": "SIH1414",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "Ministry of Defence ",
        "Problem_Statement_Title": "Deep learning for terrain recognition",
        "Description": "Vision based methods using deep learning such as CNNto perform terrain recognition(sandy/rocky/grass/marshy) enhanced with implicitquantities information such as the roughness,slipperiness, an important aspect for high-levelenvironment perception.",
        "Category": "Software ",
        "PS_Number": "SIH1418",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "Ministry of Defence ",
        "Problem_Statement_Title": "Robust human target detection and acquisition",
        "Description": "Robust human target detection and acquisition/lockingwithout losing track under occlusions for outdooroperational scenarios. Visuals alarm generation uponanomaly detection (i.e human jumping/ crawling/running).",
        "Category": "Software ",
        "PS_Number": "SIH1419",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "Ministry of Defence ",
        "Problem_Statement_Title": "Lean module for reasoning about computational complexity inGPTs.",
        "Description": "Formalization of mathematics and computer science is in vogue.Formalization means to express mathematical concepts,definitions, theorems, and proofs in a way that can be checked bya computer for correctness. Lean theorem prover is interactiveand based on dependent type theory which is a powerful andexpressive framework for formalizing computer science. It hasbeen used for example in formalization of number theory.Similarly, it can be used to formalize the notion of computationalcomplexity of generalized probabilistic theories (GPTs). Some ofthe relevant computational complexity classes are BGP (=AWPP),BQP, BPP, PP, PSPACE. We can formalize the notions of thesecomputational complexity classes and the relations among themin lean. We can also move further on to formalize the notion ofhigher order interference in physical theories and formalize sometheorems related to it.The exact problem is to write relevant lean module(s) containingthe basic definitions, results in GPTs and tools for reasoning aboutcomputational complexity in GPTs. The developed module canfurther be used to give formal proofs for theorems and lemmas.",
        "Category": "Software ",
        "PS_Number": "SIH1420",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "Ministry of Jal Shakti ",
        "Problem_Statement_Title": "Web /Mobile based tool for mapping of Water supply network",
        "Description": "Jal Jeevan Mission was launched with the vision of providing drinking water in adequate quantity of prescribed quality on regular and long-term basis to every rural household.A cost effective technology is required for providing web/ mobile based tool for mapping of water supply network through creating geospatial database of all major structure of Water supply system with provision with grievance redrassal and IoT system for alert monitoring.",
        "Category": "Software ",
        "PS_Number": "SIH1423",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "Ministry of Jal Shakti ",
        "Problem_Statement_Title": "Call for low-cost desalination technology for Lakshadweep and Inland saline water sources.",
        "Description": "Desalination of seawater and brackish water will play animportant role to meet the drinking water for Lakshadweep. Acost effective technology for desalination for Lakshadweep andinland saline water is required to meet the water supplydemand at every rural Households. The technology should focuson : Higher fresh water recovery. Quality water supply as per BIS 10500. Low energy cost. Preventive scaling measures. Low Operation and maintenance.",
        "Category": "Hardware",
        "PS_Number": "SIH1424",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "Ministry of Jal Shakti ",
        "Problem_Statement_Title": "Technological solutions for Early decomposition of fecal matter",
        "Description": "In large parts of rural India, onsite treatment is preferable oversewer system owing to the ease of implementation and cost-effectiveness. Any solution which helps decompose faecalmatter quickly will enable easy and safe emptying of the toiletpit/septic tank. This will reduce the turn-around time for re-useof the pit/septic tank and will lead to sustained use of thetoilets.Solutions to expedite the process of decomposition of faecalmaterial. It was expected that the technology should: Decompose the faecal material in the shortest possibletime Cost-effective Scalable Easy to implement Safe treatment Manure Weather proof and environmental-friendly",
        "Category": "Hardware",
        "PS_Number": "SIH1425",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "Ministry of Jal Shakti ",
        "Problem_Statement_Title": "Technological solutions for safe disposal of menstrual waste",
        "Description": "With increase in education and awareness levels aroundMenstrual Health and Hygiene, more and more women andadolescent girls in the country are switching to safe sanitaryoptions to manage their menstrual cycles. However, there is stillno formal waste management system of sanitary waste. Oftenthese are disposed off in fields, water bodies, flushed in toilets ordumped along with the regular solid waste.Solutions to manage and dispose of sanitary waste. The solutionsshould be: Safe for the environment, and not cause any air, water orsoil pollution Cost-effective Scalable across villages and institutions such as schools,colleges, etc.",
        "Category": "Hardware",
        "PS_Number": "SIH1426",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "Ministry of Jal Shakti ",
        "Problem_Statement_Title": "Call for Toilet technology",
        "Description": "Swachh Bharat Mission (Grameen) promotes affordable, sustainable with low Oandamp;M and environment friendly technologies. However, our country being vast with quite a variation in the geographical and biogeographical features the variation in water table, dryness and aridness or rains is observed annually. This is especially true for areas which receive high rains with low percolation in soil, rocky hills, fragile hillocks prone to landslides, arid and areas with poor connectivity and infrastructural setup.andquot;Solutions invited for innovative toilet technologies from the participants for the following areas: Hard rocky areas Fragile hill areas prone to land slides Flood prone and low lying moist areas  River bed, wetlands and coastal areas High rainfall areas Containment of and onsite treatment of faecal sludge inseptic tanks in such areas without the seepage to avoidground water contamination Specific local solutions by any innovationAny solutions for the upgradation of single pit to the twin pitsystem are also welcome. It was expected that the technologyshould be cost-effective, sustainable, reliable and durable, user-friendly, weather proof, environmental-friendly, and preferablyuses locally available material (locally implies the area to whichthe technology is built for).",
        "Category": "Hardware",
        "PS_Number": "SIH1427",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "Bajaj Finserv Health Ltd. ",
        "Problem_Statement_Title": "Similar Document Template Matching Algorithm",
        "Description": "In our organization, we encounter a significant challenge when dealing with a largevolume of medical invoices, prescriptions, and lab test reports received from numerous providers, including doctors, hospitals, and labs, as well as from customers. To streamline our processes and improve efficiency, we aim to develop a system capable of extracting and standardizing these documents at a provider level. Additionally, we need to identify claims across different providers that exhibit similar document templates.The primary issue we face stems from fraudulent customers who exploit identical digital or printed templates, with minor modifications such as changing the provider names, logos, colors, and text content positioning. By manipulating the customer details within these templates, they attempt to file reimbursement claims that are difficult to detect using standard document comparison checks.To tackle this problem, we require the development of a robust Similar Document Template Matching Algorithm. This algorithm will automate the process of template extraction and standardization, allowing us to identify similarities and patterns across various documents. By comparing the templates used in different claims, we can effectively identify instances of potential fraud, even when the textual content has been altered.The algorithm should be designed to handle a high volume of documents from diverse providers and customers. It should be capable of identifying commonalities in template structure, design elements, and formatting, while also accounting for variations resulting from legitimate differences between providers. Key objectives of the Similar Document Template Matching Algorithm: 1. Template Extraction: Develop a mechanism to extract and standardize templates from medical invoices, prescriptions, and lab test reports received from providers and customers. 2. Template Comparison: Implement an algorithm to compare and identify similarities among different document templates, accounting for minor modifications and variations in content. 3. Fraud Detection: Enhance the algorithm to flag instances of potentially fraudulent claims where similar templates are used, with modifications made to customer details while maintaining the overall structure and design. 4. Scalability and Efficiency: Ensure the algorithm can handle a large volume of documents efficiently, considering the growing number of providers and customers we deal with. 5. Flexibility: Design the algorithm to accommodate variations in template design and content across different providers, while maintaining the ability to detect fraudulent patternsThe successful development and implementation of the Similar Document Template Matching Algorithm will significantly enhance our ability to detect fraudulent claims and improve the overall accuracy and efficiency of our document processing workflows. Theme: Fraud Detection & Document Templatization Evaluation Criteria: The effectiveness of the Similar Document Template Matching Algorithm will be evaluated based on several key criteria. The primary criterion is the accuracy of detection, which measures the algorithm's ability to identify similarities in document templates accurately and efficiently. The algorithm should be able to detect instances where fraudulent customers exploit identical templates with minor modifications, distinguishing between suspicious and fraudulent documents. To aid in the interpretation and communication of the algorithm's findings, the detected output should be represented using color-coded flags. Amber flags can be used to indicate suspicious documents that exhibit similarities in template structure or design elements, while red flags should be assigned to identify documents with high potential for fraud. This visual representation will assist investigators in prioritizing their efforts and taking appropriate actions. Input Data Set: The team will have to generate their own dataset using publicly available datasets or archives. This approach ensures that the algorithm is exposed to a wide range of document templates from various providers and customers. The dataset should encompass different document types, such as medical invoices, prescriptions, and lab test reports, reflecting the real-world scenarios the algorithm will encounter during deployment. By using this self-generated dataset, the algorithm can be trained and evaluated under realistic conditions. This approach enables the algorithm to learn patterns and similarities that exist in actual documents, allowing it to accurately detect fraudulent claims and identify suspicious patterns across different providers and customers. Teams working on this problem statement are advised to create their own dataset to build and train their algorithms.",
        "Category": "Software",
        "PS_Number": "SIH1441",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "National Technical Research Organisation,(NTRO) ",
        "Problem_Statement_Title": "Developing a GUI based hardening script for Ubuntuoperating system with flexibility to cater for organisational security policies",
        "Description": "Hardening of an operating system involves implementation of securitymeasure to make the system compliant with the security policies of the organization.The procedure for hardening should be intuitive to allow ease of use by personnelwith minimal IT skills.The goal of this problem statement is to generate a script which is undertakeshardening of Ubuntu OS using an GUI based approach. During the hardeningprocess, the user should have the flexibility to make settings based on theorganisations IT security policy provision like blocking ssh, usb, ToR etc. The gradingof tool will be based on hardening functions implemented, attention to userexperience and flexibility to take user settings. Developer should remember thatsecurity is of utmost importance.",
        "Category": "Software",
        "PS_Number": "SIH1446",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "National Technical Research Organisation,(NTRO) ",
        "Problem_Statement_Title": "Identification and Extraction of Forward Error Correction(FEC) schemes of unknown demodulated signals",
        "Description": "FEC is an error correction mechanism with certain trade off inCommunication. This is a very critical parameter in order to extract output from ademodulated data. Identification and extraction of Forward Error Correction schemesof unknown satellite signals using MATLAB/Python is desired for further processing.The objective of the problem is to develop a tool / mechanism for detection /extraction of Forward Error Correction (FEC) schemes of unknown demodulatedsignals. The developer may use open source signal for design of their tool.Evaluation shall be based on correct detect / extraction of FEC for given signal.",
        "Category": "Software",
        "PS_Number": "SIH1447",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "National Technical Research Organisation,(NTRO) ",
        "Problem_Statement_Title": "Design of RF Up/Down-converter for signals using GNU Radioand SDRs.",
        "Description": "Satellite communication happens mainly in high frequency C, Ku bandand this needs to be down converted to some Intermediate Frequency (say L band)which is uniformly accepted. Hence, there is a requirement to Design of RFUp/Down- converter for (from C/Ku to/from L band) signals using GNU Radio andSDRs.The objective of the problem is to design and implement a tool / mechanism for RFUp/Down- converter suitable for C/Ku to/from L band signals. The developer mayuse open source signal for design of their tool. Evaluation shall be based on ability oftool to Up/Down given signal.",
        "Category": "Hardware",
        "PS_Number": "SIH1448",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "National Technical Research Organisation,(NTRO) ",
        "Problem_Statement_Title": "Speech to text transcription for Indian languages. Theproblem entails transcription in the native script and then translation to English. Thelanguages of interest are Hindi, Indian English, Urdu, Bengali, Punjabi.",
        "Description": "The problem entails transcription of audio files to the native script ofthe audio and then translation to English. The languages of interest are asmentioned below. A key element to be considered is that the solution would berequired to be tuned for Indian accents. The languages of interest for the problemstatement are shown below: Hindi Indian English Urdu Bengali PunjabiDatasets pertaining to theses languages will be provided by us, which will consist oftwo major chunks of data: Training Set and a hidden test set. The participants willhave only access to the Training set. They will develop their solutions based on theTraining set. After the final solution submission by the participants, the finalhackathon rankings will be decided by evaluation on the hidden test set. This is doneto ensure that the participants solutions generalize better on newer data.The evaluation metric we want to use for this hackathon will be Word Error Rate(WER). The WER will be computed between the actual translated text with thesolution generated text. The lower the WER the better the model.",
        "Category": "Software",
        "PS_Number": "SIH1456",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "AICTE ",
        "Problem_Statement_Title": "AI Based - Designing of Assistive portal for Stakeholders in Approval Process",
        "Description": "The All India Council for Technical Education (AICTE) plays a crucial role in approving and regulatingtechnical education institutions in India. The approval process ensures that institutions meet therequired standards and guidelines set by AICTE, ensuring quality education and a standardizedframework. However, the current approval process faces several challenges, which hinder its efficiencyand effectiveness.1. Complex Approval Process Structure2. Difficulty in Understanding of Approval Process Handbook3. Complex Documentation RequirementsConclusion: Implementing a Comprehensive Portal for Simplified Understanding of AICTE's ApprovalProcess Handbook and generate the final fee submission to all the stakeholdersIn conclusion, a viable solution to address the difficulties in understanding AICTE's Approval ProcessHandbook is to develop a dedicated portal that streamlines the approval process for technical institutions.This portal would allow institutes and stakeholders to input their specific course, infrastructuralrequirement and in return, provide the all the required documents, along with fee structure information.The fundamental objective of this portal is to parse the approval process handbook and convert itscontents into a user-friendly format that facilitates easy comprehension and understanding of AICTE'srequirements.By implementing such a portal, the following benefits can be achieved:1. Enhanced Clarity and Ease of Understanding: The portal would transform the complex languageand technical jargon of the Approval Process Handbook into simplified and easily understandableinformation. Institutes and stakeholders would have a clear understanding of the specificrequirements and guidelines outlined by AICTE, facilitating efficient compliance.2. Customized Guidance and Relevant Documentation: The portal would dynamically generate therequired documentation templates, and fee structures based on the specific course requirementsinputted by the institute. This tailored approach ensures that the information provided is directlyrelevant to the institute's needs, streamlining the approval process.3. Time and Resource Efficiency: The portal would significantly reduce the time and effort requiredfor institutes to interpret and navigate the Approval Process Handbook. By automating the parsingand presentation of information, the portal expedites the understanding of AICTE's requirements,saving valuable resources for both AICTE and the institutes.4. Increased Accuracy and Compliance: With a user-friendly portal providing comprehensive andclear instructions, institutes are more likely to adhere accurately to AICTE's guidelines. This wouldresult in improved compliance and higher-quality submissions, reducing the need for reworks andensuring smoother and faster approval processes.25. Continuous Updates and Real-time Assistance: The AI based portal can be regularly updated toreflect any changes or amendments in the Approval Process Handbook. Additionally, it canprovide real-time assistance and support, offering clarification on specific queries or concernsraised by institutes during the approval process.By developing a comprehensive portal that effectively parses and presents the Approval ProcessHandbook, AICTE can empower institutes and stakeholders to easily understand and comply with therequirements. This would foster transparency and assistance to the approval process, and ultimatelycontribute to the growth and development of the technical education sector in India.",
        "Category": "Software",
        "PS_Number": "SIH1458",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "AICTE ",
        "Problem_Statement_Title": "Integration of Multiple Data-bases of AICTE in order to fetch Coherent Information",
        "Description": "The All India Council for Technical Education (AICTE) is responsible for overseeing and regulating technicaleducation in India. As part of its functions, AICTE manages and maintains data related to various technicalinstitutions across the country. This data includes information about colleges, courses, faculty,scholarships, approvals and other relevant schemes.One of the challenges faced by AICTE is the need to efficiently search and retrieve information frommultiple databases. With a vast amount of data spread across numerous databases, it becomes crucial tohave a robust and reliable search engine system in place. However, the current search mechanismsemployed by AICTE encounter several limitations and inefficiencies, hampering the process of extractingrelevant information. The existing problem arises due to the following factors:1. Fragmented Database Structure2. Limited Search Capability3. Slow Search Speed4. Data Consistency and AccuracyAddressing these challenges and implementing an improved search system for multiple databases canprovide AICTE with the following benefits:Enhanced Search Accuracy and Relevance: A robust search system with advanced search algorithms andindexing techniques can significantly improve the accuracy and relevance of search results, allowing AICTEto access the most relevant information efficiently.1. Increased Search Speed and Efficiency: By optimizing the search algorithms and leveragingefficient indexing methods, AICTE can achieve faster search speeds, reducing the time requiredto retrieve data from multiple databases and improving overall operational efficiency.2. Improved Data Consistency and Quality: Implementing mechanisms to ensure data consistencyand accuracy across databases will enhance the reliability and integrity of search results. Regulardata synchronization and quality checks can eliminate inconsistencies and provide users withreliable and up-to-date information.3. Scalability and Future-Readiness: Designing the search system with scalability in mind will enableAICTE to accommodate the growth of data and seamlessly integrate new databases as thetechnical education landscape evolves. This future-readiness will ensure that the search systemremains efficient and effective in the long term.In conclusion, developing a comprehensive SEARCH engine system for multiple databases will address thelimitations of the current search mechanisms employed by AICTE.",
        "Category": "Software",
        "PS_Number": "SIH1459",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "AICTE ",
        "Problem_Statement_Title": "Establishing a Server log system for E-governance with appropriate notification and content based classification of log AICTE",
        "Description": "A server log system, also known as a log management system, is a software tool that records and storeslog messages generated by various components and applications running on a server. It provides acentralized location for collecting, analyzing, and managing logs to monitor and troubleshoot systemissues and performance problems.Here are some basic Requirement of a server log system:1. Log Collection: The system collects log data from various sources, including operating systems,applications, services, and network devices. It can gather logs from different servers andconsolidate them into a central repository.2. Log Storage: Log entries are typically stored in a structured format, such as plain text files or adatabase. The system may also employ compression and archival mechanisms to optimize storagespace and retain logs for an extended period.3. Log Analysis and Search: The log system enables searching, filtering, and querying log data basedon specific criteria, such as time range, log level, source, or custom keywords. This functionalityhelps in identifying patterns, anomalies, or events of interest.4. Alerting and Notifications: The system can be configured to send notifications or alerts based onpredefined rules or thresholds. For example, it can notify administrators when critical errors occuror security-related events are detected in the logs.5. Log Visualization and Reporting: The log systems provide visual representations of log data, suchas charts, graphs, and dashboards. Visualizations will help in gaining insights, identifying trends,and generating reports for auditing, compliance, or performance analysis.6. Log Retention and Compliance: Server logs retained for a certain period to comply with regulatoryrequirements or internal policies. The log system should support flexible retention periods andsecure storage to meet these obligations.7. Integration and APIs: A robust log system offers APIs and integrations with other tools andsystems. This allows developers and administrators to automate log analysis, integrate withsecurity information and event management (SIEM) systems, or build custom solutions on top ofthe log data.So the developed software should provide the following features to the end-user;8. Server Provisioning: The system facilitates the deployment and provisioning of servers, includinghardware configuration, operating system installation, and initial software setup. It may includetools for automated server deployment and configuration management.9. Monitoring and Performance Management: Server management systems monitor the health,performance, and resource utilization of servers. They collect and analyze data on CPU usage,memory usage, disk space, network traffic, and other metrics. Alerts and notifications aregenerated when predefined thresholds are exceeded.10. Patch Management and Updates: The system ensures that servers are kept up to date withsecurity patches, bug fixes, and software updates. It automates the process of identifying,downloading, testing, and applying updates to minimize vulnerabilities and improve serverstability.11. Configuration Management: Server management systems help administrators maintainconsistent configurations across servers. They provide tools for managing and enforcing serverconfigurations, including software installations, network settings, user accounts, and securitypolicies.12. Backup and Disaster Recovery: The system facilitates regular backups of server data andconfigurations to protect against data loss and facilitate disaster recovery. It may include featuresfor scheduling backups, managing backup storage, and performing recovery operations in case ofsystem failures.13. Logging and Auditing: The system captures and stores logs generated by servers fortroubleshooting, compliance, and auditing purposes. It provides tools for analyzing logs, searchingfor specific events, and generating reports on server activities.14. Resource Allocation and Load Balancing: Server management systems help optimize resourceallocation and load balancing across servers. They can monitor server workloads, allocateresources based on demand, and distribute incoming network traffic efficiently.",
        "Category": "Software",
        "PS_Number": "SIH1463",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "AICTE ",
        "Problem_Statement_Title": "A unified portal for developing a model Curriculum for all the AICTE Approved Institutes",
        "Description": "The All India Council for Technical Education (AICTE) is responsible for formulating and maintaining thecurriculum standards for technical education in India. A unified portal is required to collaborate witheducational experts, curriculum designers to provide the functionality and designing a model curriculumfor all the Institutes.The main functionality provide by portal are;1. User Registration and Authentication: Allow users (educators, curriculum developers,administrators) to create accounts and authenticate their identity to access the portal's features.2. Dashboard and User Profiles: Provide a personalized dashboard for each user, displaying relevantinformation and options based on their role and preferences. Users can manage their profiles,track progress, and access saved curriculum designs.3. Curriculum Design Tools: Offer intuitive tools and templates for curriculum design, including theability to define course objectives, outline modules, specify learning outcomes, and createassessment methods. Users should be able to organize and structure curriculum contentefficiently.4. Resource Repository: Maintain a repository of educational resources, such as textbooks, articles,videos, and interactive materials, categorized by subjects and topics. Users can search, access,and incorporate these resources into their curriculum designs.5. Collaboration and Feedback: Facilitate collaboration among users by allowing them to inviteothers to review and provide feedback on their curriculum designs. Incorporate features likecommenting, version control, and document sharing to enhance collaboration and streamline thereview process.6. Analytics and Reporting: Provide analytics and reporting features to track and analyze theeffectiveness of curriculum designs. This can include metrics like student performance, coursecompletion rates, and assessment outcomes. Generate reports and visualizations to aid decision-making and improvement.7. Notifications and Updates: Notify users about important updates, changes in educationalpolicies, or new resources available on the portal. Allow users to subscribe to relevant topics orreceive notifications based on their preferences.8. Scalability and Security: Design the portal to handle a large user base and ensure data security.Implement appropriate security measures to protect user information, curriculum designs, andsensitive data.",
        "Category": "Software",
        "PS_Number": "SIH1465",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "AICTE, MIC-Student Innovation ",
        "Problem_Statement_Title": "Student Innovation",
        "Description": "Technology ideas in tertiary sectors like Hospitality, Financial Services, Entertainment and Retail.",
        "Category": "Hardware",
        "PS_Number": "SIH1470",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "AICTE, MIC-Student Innovation ",
        "Problem_Statement_Title": "Student Innovation",
        "Description": "Technology ideas in tertiary sectors like Hospitality, Financial Services, Entertainment and Retail.",
        "Category": "Software",
        "PS_Number": "SIH1483",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "Ministry of Power ",
        "Problem_Statement_Title": "Creation of dedicated real time 'Procurement DataPortal'as well as 'Vendor Payment Data portal'tocapture all related data in respect of NEEPCO,SProcurements and Payments' includingProcurement from MSE Sector and procurement inGeM Portal",
        "Description": "This challenge involves developing a comprehensive online portal for North Eastern Electric Power Corporation (NEEPCO) to capture and manage all data related to their procurement processes and vendor payments. The portal must have the capability to record procurement activities, particularly those involving Micro and Small Enterprises (MSE) and purchases made through the Government e-Marketplace (GeM) portal. The solution should enable efficient data entry, storage, retrieval, and analysis of procurement details, payment records, and vendor information. It should also ensure data security and compliance with relevant regulations. By addressing this challenge, the aim is to enhance transparency, streamline procurement operations, promote MSE participation, and facilitate effective financial management for NEEPCO.",
        "Category": "Software",
        "PS_Number": "SIH1508",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "Ministry of Micro, Small and Medium Enterprises ",
        "Problem_Statement_Title": "App-Based Solution to provide market access to micro and small enterprises",
        "Description": "To explore new market by quality improvements, waste management & cost reduction etc. seeks creative solutions through a mobile app platform to empower micro and small enterprises with enhanced market access. These enterprises, vital to local economies, often struggle to connect with larger markets due to limited resources and technological barriers. The challenge involves designing a user-friendly app that facilitates direct interaction between businesses and potential customers, streamlines logistics, supports secure transactions, offers data insights, and provides capacity-building resources. The app should be scalable, regionally adaptable, and prioritize data security. This solution aims to revolutionize the way micro and small enterprises operate, fostering growth, resilience, and economic contribution.",
        "Category": "Software",
        "PS_Number": "SIH1509",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "Ministry of Rural Development ",
        "Problem_Statement_Title": "Land profiling of Asset Creation process",
        "Description": "There are various types of permissible works being taken up under the Mahatma Gandhi NREGS which are earthwork related works which requires excavation/land cuttin& land filling land levelling etc.As per the current practice of execution of the works under the scheme, there is a photograph taken of the worksite before initiating the work and the estimated quantity of the work to be executed in form of technical design & estimate. During the stages of execution, the technical person/engineer in-charge of the site, maintains the work done on site in form of measurements in the measurement book and accordingly the payment of the labour & material is generated. lt becomes difficult to ascertain the exact work done on ground during the audit/inspections after the work completion. A land profile of the worksite (in terms of contour levels or 3D modelling) before initiating the work and after work completion can provide a necessary information to derive the actual work done through analysing the land profiles in 3 dimensions (3D1. The profiles can be generated in reference to a fixed benchmark level available on the worksite. ln this regard a technology driven solution for 3D Profiling may be provided.",
        "Category": "Software",
        "PS_Number": "SIH1510",
        "Domain_Bucket": "Miscellaneous"
      },
      {
        "Organization": "Ministry of Mines ",
        "Problem_Statement_Title": "Real time Knowledge of ore body being mined out",
        "Description": "The ore-body model, containing block-wise or location-wise ore quality details, isprepared in the mine planning software and this information can be documented for further usethrough maps or spreadsheets. But from the operatorÃƒÃ¢â€šÂ¬Ã¢â€ž perspective, the ore quality informationfor ensuring quality control during excavation is done purely through eye judgment andprevious experiences.Solution Desired: Through use of high precision GPS sensors, location including theelevation data of the shovels/loaders can be traced and by interlacing this information in theore block model data, we can convey the information to the operator suitably so that qualitycontrol can be executed at the site itself.",
        "Category": "Hardware",
        "PS_Number": "SIH1511",
        "Domain_Bucket": "Miscellaneous"
      }
    ]
  }
];
