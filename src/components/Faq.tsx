import { FAQ } from "@/components/Reviews/index";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";


const Faq = () => {
    return (
        <div className="container mx-auto my-20" id={"faq"}>
                  <div className="h-[10vh]" id={"how-it-works"}></div>
            <h2 data-aos="fade-up" data-aos-duration="1000" className="raleway mb-20 text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl">
                FAQ
            </h2>
            <Accordion type="single" collapsible className="w-full text-neutral-700 ">
                {((faq, index) => (
                    <AccordionItem key={index} value={faq.value}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default Faq;