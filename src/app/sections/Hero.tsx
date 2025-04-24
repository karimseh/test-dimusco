import Block from "../components/Block";
import DocIcon from "../../assets/icons/doc.svg";
import BlockItem from "../components/ui/BlockItem";
export default function Hero() {
    return (
        <section className="container m-auto flex flex-col  items-center justify-center py-4">
            <div className="flex w-full  flex-col items-center justify-center gap-4 text-center">
                <h1 className="text-fluid-xl tracking-wider capitalize font-extrabold text-[var(--primary)]">Use your sheet music with any device</h1>
                <p className="text-fluid-base capitalize font-normal">
                    for yourself and in Any Group from a Band to an Orchestra
                </p>

            </div>
            <div className="flex items-center justify-center mt-8">
           
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <Block linkTitle="Watch" description="Videos tell you all about dimusco" />
                <Block linkTitle="Read" description="See all other info like Costs and Q&A">
                    <DocIcon />
                </Block>
                <Block linkTitle="Publish" extraTitle="Sheet Music" className="md:col-span-2 items-center md:items-start" >
                    <div className="grid grid-cols-1 md:grid-cols-2 m-auto md:m-0  gap-y-4 gap-x-8 mt-1">
                        <BlockItem title="Compostions" />
                        <BlockItem title="Free Scores" />
                        <BlockItem title="Adaptations" />
                        <BlockItem title="Anotations" />
                    </div>
                </Block>
                <Block linkTitle="Get" extraTitle="Sheet Music" className="md:col-span-2 items-center md:items-start" >
                    <div className="grid grid-cols-1 md:grid-cols-2 m-auto md:m-0 gap-y-4 gap-x-8 mt-1" >
                        <BlockItem title="Compostions" />
                        <BlockItem title="Free Scores" />
                        <BlockItem title="Adaptations" />
                        <BlockItem title="Anotations" />
                    </div>
                </Block>
            </div>
            </div>
        </section>
    );
}
