import Accordion from "../components/Accordion";


function AccordionPage() {
    const items = [
        {
            id: 'jvj112',
            label: 'Can I use react on a project',
            content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.'

        },
        {
            id: 'afda32',
            label: 'Can I use JS on a project',
            content: 'You can use JS on any project you want. You can use JS on any project you want. You can use JS on any project you want.'
        },
        {
            id: 'awbdk2',
            label: 'Can I use CSS on a project',
            content: 'You can use css on any project you want. You can use css on any project you want.'
        }
    ];
    return <Accordion items={items} />
}

export default AccordionPage;
