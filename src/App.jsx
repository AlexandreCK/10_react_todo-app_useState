import { Header } from './components/Header/Header';
import { Subheader } from './components/Subheader/Subheader';
import { ListHeader } from './components/ListHeader/ListHeader';
import { ItemsList } from './components/ItemsList/ItemsList';
import { ListContainer } from './components/ListContainer/ListContainer';

const itemsList = [
    {
        id: 1,
        title: 'Bury a Corpse in the Garden',
        description: 'Dig a deep hole and make sure no one sees you.',
        status: 'Pending',
    },
    {
        id: 2,
        title: 'Overthrow the Government',
        description: 'Plan a coup and recruit allies.',
        status: 'In Progress',
    },
    {
        id: 3,
        title: 'Build a Secret Underground Bunker',
        description: 'Stock it with supplies for the apocalypse.',
        status: 'Pending',
    },
    {
        id: 4,
        title: 'Train a Squirrel Army',
        description: 'Teach them to follow commands and gather nuts.',
        status: 'In Progress',
    },
    {
        id: 5,
        title: 'Invent a Time Machine',
        description: 'Start with a DeLorean and a flux capacitor.',
        status: 'Pending',
    },
    {
        id: 6,
        title: 'Start a Cult',
        description: 'Recruit followers and design matching robes.',
        status: 'Done',
    },
    {
        id: 7,
        title: 'Befriend a Dolphin',
        description: 'Learn dolphin language and go for a swim.',
        status: 'Pending',
    },
    {
        id: 8,
        title: 'Create a Fake Identity',
        description: 'Get a new passport and move to a tropical island.',
        status: 'In Progress',
    },
    {
        id: 9,
        title: 'Build a Treehouse Fortress',
        description: 'Add a drawbridge and a moat.',
        status: 'Pending',
    },
    {
        id: 10,
        title: 'Steal the Moon',
        description: 'Use a giant net and a rocket ship.',
        status: 'Pending',
    },
    {
        id: 11,
        title: 'Become a Professional Spy',
        description: 'Learn stealth techniques and get a cool gadget kit.',
        status: 'In Progress',
    },
    {
        id: 12,
        title: 'Host a Zombie Apocalypse Drill',
        description: 'Invite friends and practice survival skills.',
        status: 'Pending',
    },
    {
        id: 13,
        title: 'Create a Fake Country',
        description: 'Design a flag, currency, and national anthem.',
        status: 'Done',
    },
    {
        id: 14,
        title: 'Befriend a Ghost',
        description: 'Find a haunted house and introduce yourself.',
        status: 'Pending',
    },
    {
        id: 15,
        title: 'Build a Robot Butler',
        description: 'Program it to serve tea and clean the house.',
        status: 'In Progress',
    },
    {
        id: 16,
        title: 'Start a Pirate Crew',
        description: 'Find a ship and recruit swashbucklers.',
        status: 'Pending',
    },
    {
        id: 17,
        title: 'Become a Supervillain',
        description: 'Design a lair and choose a nemesis.',
        status: 'Pending',
    },
    {
        id: 18,
        title: 'Build a Rocket to Mars',
        description: 'Start with a small prototype and scale up.',
        status: 'Done',
    },
];

function App() {
    return (
        <>
            <Header />
            <Subheader subtitle="Todo List Manager" />
            <ListContainer>
                <ListHeader content="Todo List" />
                <ItemsList itemsList={itemsList} />
            </ListContainer>
        </>
    );
}

export default App;
