import { Accordion } from "flowbite-react";
import Container from "../Shared/Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";


const Faq = () => {
    return (
        <Container>
            <SectionTitle heading='Frequenty Asked Questions'></SectionTitle>
            <Accordion collapseAll>
                <Accordion.Panel>
                    <Accordion.Title>How can I volunteer for a medical camp, and what qualifications or skills are required?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Medical camps often welcome volunteers from various backgrounds. To volunteer, reach out to the organizing committee or the healthcare institution hosting the camp. While medical knowledge and skills are valuable, non-medical volunteers are also crucial for tasks such as logistics, crowd management, and administration. The specific qualifications and skills required may vary, but a willingness to contribute, enthusiasm, and the ability to work collaboratively are essential qualities.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>What measures are taken to ensure the safety and privacy of participants during medical camps?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Ensuring the safety and privacy of participants is a top priority for medical camp organizers. Adequate measures include setting up private consultation areas, implementing data protection protocols for medical records, and maintaining confidentiality during health screenings. Volunteers and healthcare professionals are trained to handle sensitive information with the utmost discretion. Additionally, security measures and first aid provisions are in place to address any unforeseen incidents during the event.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>Can I request specific medical services or screenings during a medical camp?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            In many cases, medical camps offer a predefined set of services to cater to a broad range of health needs within the community. However, organizers may consider accommodating specific requests based on community needs or partnerships with healthcare providers. It&apos;s advisable to check with the organizers in advance to understand the services offered and inquire about any specific medical services or screenings you are interested in. Keep in mind that the primary goal of medical camps is to address prevalent health issues and promote general well-being within the community.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </Container>
    );
};

export default Faq;