import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export const BrainstormingDetail = (
    <div className="px-4 flex flex-col gap-4 text-zinc-600">
        {/* Accordions */}
        <div className="px-5">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="">Why is brainstorming important?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2 text-zinc-600">
                        <div>
                            Brainstorming fosters creativity and encourages diverse ideas, enabling teams to find innovative solutions and approaches to challenges.
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="">What are effective brainstorming techniques?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2 text-zinc-600">
                        <div>
                            Techniques like mind mapping, round-robin brainstorming, and SCAMPER can help generate creative ideas while involving everyone in the process.
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="">How can brainstorming sessions be productive?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2 text-zinc-600">
                        <div>
                            Setting clear goals, encouraging open communication, and creating a non-judgmental environment can significantly enhance the productivity of brainstorming sessions.
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
);

export const AnalysingDetail = (
    <div className="px-4 flex flex-col gap-4 text-zinc-600">
        {/* Accordions */}
        <div className="px-5">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="">What is data analysis?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2 text-zinc-600">
                        <div>
                            Data analysis involves examining, cleaning, and modeling data to extract valuable insights, identify trends, and support decision-making.
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="">Why is analysis important for businesses?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2 text-zinc-600">
                        <div>
                            Analysis helps businesses optimize operations, understand customer behavior, and create data-driven strategies for growth and efficiency.
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="">What tools are used for data analysis?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2 text-zinc-600">
                        <div>
                            Tools like Excel, Python, R, Tableau, and Power BI are commonly used to analyze data, visualize results, and generate reports.
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
);

export const NewsPublishingDetail = (
    <div className="px-4 flex flex-col gap-4 text-zinc-600">
        {/* Accordions */}
        <div className="px-5">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="">What is the role of news publishing?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2 text-zinc-600">
                        <div>
                            News publishing plays a crucial role in informing the public, shaping opinions, and promoting transparency on current events and issues.
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="">How has digital media changed news publishing?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2 text-zinc-600">
                        <div>
                            Digital media has transformed news publishing by enabling real-time updates, interactive content, and wider reach through social media and websites.
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="">What are the challenges in modern news publishing?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2 text-zinc-600">
                        <div>
                            Challenges include combating misinformation, adapting to fast-paced digital platforms, and maintaining journalistic integrity in a competitive environment.
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
);

export const specialitiesData = [
    {
        id: 1,
        serial: '01',
        title: 'Brainstorming',
        description: 'Bring to the table win-win survival strategies to ensure proactive domination...',
        content: BrainstormingDetail
    },
    {
        id: 2,
        serial: '02',
        title: 'Analysing',
        description: 'Capitalize on low-hanging fruit to identify a ballpark value-added activity...',
        content: AnalysingDetail
    },
    {
        id: 3,
        serial: '03',
        title: 'News Publishing',
        description: 'Leverage agile frameworks to provide a robust synopsis for high-level overviews...',
        content: NewsPublishingDetail
    },
];
