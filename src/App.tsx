import {atom, useAtom} from "jotai";
import {create} from "zustand";
import LayoutMain from "@/components/layout/main.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Badge} from "@/components/ui/badge.tsx";

const animeAtom = atom([
    {
        title: "Ghost in the Shell",
        year: 1995,
        watched: true,
    },
    {
        title: "Serial Experiments Lain",
        year: 1998,
        watched: false,
    },
]);

interface Store {
    count: number;
    inc: () => void;
}

const useStore = create<Store>((set) => ({
    count: 1,
    inc: () => set((state: { count: number; }) => ({count: state.count + 1})),
}));

function App() {
    const [anime, setAnime] = useAtom(animeAtom);
    const {count, inc} = useStore();
    return (
        <>
            <LayoutMain>
                <section className="flex flex-col justify-center">
                    <div className="flex flex-col items-center">
                        <h4 className="font-bold">Jotai</h4>
                        <ul>
                            {anime.map((item) => (
                                <li className="text-center" key={item.title}>{item.title}</li>
                            ))}
                        </ul>
                        <button onClick={() => {
                            setAnime((anime) => [
                                ...anime,
                                {
                                    title: "Cowboy Bebop",
                                    year: 1998,
                                    watched: false,
                                },
                            ]);
                        }}>
                            Add Cowboy Bebop
                        </button>
                    </div>
                    <div className="h-20"></div>
                    <div className="flex flex-col items-center">
                        <h4 className="font-bold">Zustand</h4>
                        <Badge>{count}</Badge>
                        <div className="h-5"></div>
                        <Button onClick={inc}>
                            Count Up
                        </Button>
                    </div>
                </section>
            </LayoutMain>
        </>
    );
}

export default App;
